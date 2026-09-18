const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const indexData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/search-index.json'), 'utf8'));

function normalize(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?'"“”‘’]/g, ' ')
    .replace(/\s+/g, ' ');
}

function scoreItem(item, query, queryTokens) {
  const normTitle = normalize(item.title);
  const normSnippet = normalize(item.snippet);
  const normCategory = normalize(item.category);
  const normKeywords = (item.keywords || []).map(normalize);

  let score = 0;

  if (normTitle === query) score += 100;
  else if (normTitle.startsWith(query)) score += 60;
  else if (normTitle.includes(query)) score += 40;

  for (const kw of normKeywords) {
    if (kw === query) {
      score += 80;
      break;
    } else if (kw.startsWith(query)) {
      score += 45;
    } else if (kw.includes(query) || query.includes(kw)) {
      score += 30;
    }
  }

  if (normCategory.includes(query)) score += 25;
  if (normSnippet.includes(query)) score += 15;

  if (queryTokens.length > 1) {
    let tokensMatched = 0;
    for (const token of queryTokens) {
      if (normTitle.includes(token)) {
        tokensMatched++;
        score += 15;
      } else if (normKeywords.some(k => k.includes(token))) {
        tokensMatched++;
        score += 12;
      } else if (normSnippet.includes(token)) {
        tokensMatched++;
        score += 6;
      }
    }
    if (tokensMatched === queryTokens.length) {
      score += 40;
    }
  }

  return score;
}

function search(query, limit = 5) {
  const cleanQuery = normalize(query);
  if (!cleanQuery) return [];
  const queryTokens = cleanQuery.split(' ').filter(Boolean);

  const scored = [];
  for (const item of indexData) {
    const score = scoreItem(item, cleanQuery, queryTokens);
    if (score > 0) {
      scored.push({ item, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit);
}

test('universal multi-lingual search matches keywords in Hindi, English, and Hinglish', () => {
  const testQueries = [
    { q: 'khatauni', expectedKey: 'khatauni' },
    { q: 'खतौनी', expectedKey: 'khatauni' },
    { q: 'fir', expectedKey: 'fir' },
    { q: 'एफआईआर', expectedKey: 'fir' },
    { q: 'pension', expectedKey: 'pension' },
    { q: 'पेंशन', expectedKey: 'pension' },
    { q: '1930', expectedKey: '1930' },
    { q: '1076', expectedKey: '1076' },
    { q: 'मनरेगा', expectedKey: 'mgnrega' },
    { q: 'nrega', expectedKey: 'mgnrega' },
    { q: 'रिश्वत', expectedKey: 'fee' },
    { q: 'bribe', expectedKey: 'fee' },
    { q: 'drafter', expectedKey: 'drafter' },
    { q: 'राशन', expectedKey: 'ration' },
    { q: 'ration', expectedKey: 'ration' },
    { q: 'ayushman', expectedKey: 'ayushman' },
    { q: 'कन्या', expectedKey: 'kanya' }
  ];

  testQueries.forEach(({ q }) => {
    const results = search(q, 3);
    assert.ok(results.length > 0, `Expected search results for "${q}", got 0`);
  });
});
