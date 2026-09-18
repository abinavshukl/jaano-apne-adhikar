/**
 * Universal Multi-Lingual Search Engine for "जानो अपने अधिकार"
 * Matches Hindi (Devanagari), English, and Phonetic Hinglish across all pages,
 * schemes, rights, templates, remedies, helplines, contacts, land laws, and articles.
 */

(function () {
  'use strict';

  let searchIndex = null;
  let isFetching = false;
  const indexUrl = './data/search-index.json';

  // Category styling map
  const categoryBadgeClasses = {
    'schemes': 'search-dropdown__badge--schemes',
    'rights': 'search-dropdown__badge--rights',
    'land': 'search-dropdown__badge--land',
    'helpline': 'search-dropdown__badge--helpline',
    'templates': 'search-dropdown__badge--templates',
    'articles': 'search-dropdown__badge--articles',
    'transparency': 'search-dropdown__badge--transparency',
    'fraud': 'search-dropdown__badge--fraud',
    'drafter': 'search-dropdown__badge--drafter',
    'remedy': 'search-dropdown__badge--remedy',
    'contacts': 'search-dropdown__badge--contacts'
  };

  /**
   * Load search index from JSON or cache
   */
  async function loadIndex() {
    if (searchIndex && searchIndex.length > 0) return searchIndex;
    if (isFetching) return [];

    isFetching = true;
    try {
      const response = await fetch(indexUrl, { cache: 'default' });
      if (!response.ok) throw new Error('Failed to load search index');
      searchIndex = await response.json();
    } catch (err) {
      console.warn('Search index load warning (offline fallback active):', err);
      // If fetch fails, try cache or empty
      searchIndex = [];
    } finally {
      isFetching = false;
    }
    return searchIndex;
  }

  /**
   * Normalize search string for resilient matching
   */
  function normalize(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .trim()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?'"“”‘’]/g, ' ')
      .replace(/\s+/g, ' ');
  }

  /**
   * Calculate search match score
   */
  function scoreItem(item, query, queryTokens) {
    const normTitle = normalize(item.title);
    const normSnippet = normalize(item.snippet);
    const normCategory = normalize(item.category);
    const normKeywords = (item.keywords || []).map(normalize);

    let score = 0;

    // Exact title match
    if (normTitle === query) score += 100;
    else if (normTitle.startsWith(query)) score += 60;
    else if (normTitle.includes(query)) score += 40;

    // Direct keyword match
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

    // Category match
    if (normCategory.includes(query)) score += 25;

    // Snippet match
    if (normSnippet.includes(query)) score += 15;

    // Tokenized multi-word search
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
        score += 40; // All tokens matched
      }
    }

    return score;
  }

  /**
   * Search index with ranking
   */
  function search(query, limit = 8) {
    if (!searchIndex || !query) return [];
    const cleanQuery = normalize(query);
    if (!cleanQuery) return [];

    const queryTokens = cleanQuery.split(' ').filter(Boolean);

    const scored = [];
    for (const item of searchIndex) {
      const score = scoreItem(item, cleanQuery, queryTokens);
      if (score > 0) {
        scored.push({ item, score });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit).map(res => res.item);
  }

  /**
   * Highlight query terms in text
   */
  function highlightText(text, query) {
    if (!text || !query) return text || '';
    const cleanQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!cleanQuery) return text;
    try {
      const regex = new RegExp(`(${cleanQuery})`, 'gi');
      return text.replace(regex, '<mark class="search-dropdown__highlight">$1</mark>');
    } catch {
      return text;
    }
  }

  /**
   * Initialize Homepage & Header Instant Search Box
   */
  function initLiveSearch() {
    const searchBoxes = document.querySelectorAll('.hero__search-box');

    searchBoxes.forEach(box => {
      const input = box.querySelector('.hero__search-input');
      if (!input) return;

      // Ensure box has relative positioning
      box.style.position = 'relative';

      // Create dropdown element
      let dropdown = box.querySelector('.search-dropdown');
      if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.className = 'search-dropdown';
        dropdown.setAttribute('role', 'listbox');
        dropdown.setAttribute('aria-label', 'खोज सुझाव');
        box.appendChild(dropdown);
      }

      let activeIndex = -1;
      let debounceTimer = null;

      // Preload index when user focuses input
      input.addEventListener('focus', () => {
        loadIndex();
        if (input.value.trim().length > 0) {
          triggerSearch(input.value.trim());
        }
      });

      // Handle user typing
      input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          triggerSearch(input.value.trim());
        }, 120);
      });

      // Handle keyboard navigation
      input.addEventListener('keydown', (e) => {
        if (!dropdown.classList.contains('is-open')) return;

        const items = dropdown.querySelectorAll('.search-dropdown__item');
        if (!items || items.length === 0) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          activeIndex = (activeIndex + 1) % items.length;
          updateActiveSelection(items, activeIndex);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeIndex = (activeIndex - 1 + items.length) % items.length;
          updateActiveSelection(items, activeIndex);
        } else if (e.key === 'Enter') {
          if (activeIndex >= 0 && items[activeIndex]) {
            e.preventDefault();
            items[activeIndex].click();
          }
        } else if (e.key === 'Escape') {
          closeDropdown();
        }
      });

      async function triggerSearch(val) {
        if (!val || val.length === 0) {
          closeDropdown();
          return;
        }

        await loadIndex();
        const results = search(val, 6);
        renderDropdown(results, val);
      }

      function updateActiveSelection(items, index) {
        items.forEach((item, i) => {
          if (i === index) {
            item.classList.add('is-selected');
            item.setAttribute('aria-selected', 'true');
            item.scrollIntoView({ block: 'nearest' });
          } else {
            item.classList.remove('is-selected');
            item.removeAttribute('aria-selected');
          }
        });
      }

      function renderDropdown(results, query) {
        activeIndex = -1;
        if (results.length === 0) {
          dropdown.innerHTML = `
            <div class="search-dropdown__empty">
              <i data-lucide="help-circle" style="width:24px;height:24px;color:#94a3b8;display:block;margin:0 auto 8px;"></i>
              <div>'<strong>${escapeHtml(query)}</strong>' से संबंधित कोई विषय नहीं मिला।</div>
              <div style="font-size:0.8rem;color:#94a3b8;margin-top:4px;">खतौनी, FIR, पेंशन, 1930, राशन, या योजना खोजें</div>
            </div>
            <div class="search-dropdown__footer">
              <span>विस्तृत मार्गदर्शिका में देखें:</span>
              <button type="submit" class="search-dropdown__footer-btn">सभी लेख देखें ↵</button>
            </div>
          `;
          dropdown.classList.add('is-open');
          if (window.lucide) window.lucide.createIcons();
          return;
        }

        let html = '';
        results.forEach((item) => {
          const badgeClass = categoryBadgeClasses[item.categoryKey] || 'search-dropdown__badge--articles';
          const highlightedTitle = highlightText(escapeHtml(item.title), query);
          const highlightedSnippet = highlightText(escapeHtml(item.snippet), query);
          const isPhone = item.url.startsWith('tel:');

          html += `
            <a href="${item.url}" class="search-dropdown__item" role="option">
              <div class="search-dropdown__item-header">
                <span class="search-dropdown__item-title">${highlightedTitle}</span>
                <span class="search-dropdown__badge ${badgeClass}">${item.category}</span>
              </div>
              <p class="search-dropdown__item-snippet">${highlightedSnippet}</p>
              ${isPhone ? '<span style="display:inline-flex;align-items:center;gap:4px;color:#dc2626;font-size:0.75rem;font-weight:700;margin-top:4px;">📞 तुरंत कॉल करें</span>' : ''}
            </a>
          `;
        });

        html += `
          <div class="search-dropdown__footer">
            <span>${results.length} परिणाम मिले</span>
            <button type="submit" class="search-dropdown__footer-btn">सभी परिणाम देखें ('खोजें' दबाएँ) ↵</button>
          </div>
        `;

        dropdown.innerHTML = html;
        dropdown.classList.add('is-open');
      }

      function closeDropdown() {
        dropdown.classList.remove('is-open');
        dropdown.innerHTML = '';
        activeIndex = -1;
      }

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!box.contains(e.target)) {
          closeDropdown();
        }
      });
    });
  }

  /**
   * Handle Search Results on articles.html or dedicated pages
   */
  async function handleSearchResultsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (!query) return;

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    // Fill search input on page if one exists
    const pageInputs = document.querySelectorAll('.hero__search-input, input[type="search"]');
    pageInputs.forEach(inp => {
      inp.value = trimmedQuery;
    });

    await loadIndex();
    const results = search(trimmedQuery, 24);

    // Look for target container in main content
    const main = document.querySelector('main') || document.body;
    let resultsContainer = document.getElementById('searchResultsSection');

    if (!resultsContainer) {
      resultsContainer = document.createElement('section');
      resultsContainer.id = 'searchResultsSection';
      resultsContainer.className = 'section search-results-section';
      resultsContainer.style.paddingTop = '24px';
      resultsContainer.style.paddingBottom = '24px';
      resultsContainer.style.backgroundColor = '#f1f5f9';

      // Insert right after sub-hero or at top of main
      const subHero = main.querySelector('.sub-hero') || main.querySelector('.hero');
      if (subHero && subHero.nextSibling) {
        main.insertBefore(resultsContainer, subHero.nextSibling);
      } else {
        main.insertBefore(resultsContainer, main.firstChild);
      }
    }

    renderSearchResultsPage(resultsContainer, results, trimmedQuery);
  }

  function renderSearchResultsPage(container, results, query) {
    const count = results.length;
    let cardsHtml = '';

    if (count === 0) {
      cardsHtml = `
        <div style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:32px; text-align:center; grid-column: 1 / -1;">
          <i data-lucide="search-x" style="width:48px;height:48px;color:#94a3b8;margin:0 auto 12px;display:block;"></i>
          <h3 style="font-size:1.2rem;color:#0f172a;margin-bottom:8px;">'${escapeHtml(query)}' के लिए कोई परिणाम नहीं मिला</h3>
          <p style="color:#64748b;max-width:500px;margin:0 auto 20px;font-size:0.95rem;">
            कृपया अन्य शब्द जैसे <strong>खतौनी, एफआईआर, पेंशन, राशन, मनरेगा, 1930, या योजना</strong> लिखकर पुनः खोजें।
          </p>
          <a href="./articles.html" class="btn btn--primary" style="display:inline-flex;align-items:center;gap:6px;">
            <i data-lucide="book-open" style="width:16px;height:16px;"></i> सभी विषय मार्गदर्शक देखें
          </a>
        </div>
      `;
    } else {
      results.forEach(item => {
        const badgeClass = categoryBadgeClasses[item.categoryKey] || 'search-dropdown__badge--articles';
        const isPhone = item.url.startsWith('tel:');
        const ctaLabel = isPhone ? '📞 तुरंत कॉल करें' : 'पूरा विवरण देखें →';
        const ctaStyle = isPhone ? 'color:#dc2626;font-weight:800;' : 'color:#16a34a;font-weight:700;';

        cardsHtml += `
          <div class="search-result-card">
            <div class="search-result-card__top">
              <span class="search-dropdown__badge ${badgeClass}">${item.category}</span>
            </div>
            <h3 class="search-result-card__title">
              <a href="${item.url}" style="color:inherit;text-decoration:none;">${escapeHtml(item.title)}</a>
            </h3>
            <p class="search-result-card__desc">${escapeHtml(item.snippet)}</p>
            <a href="${item.url}" class="search-result-card__cta" style="${ctaStyle}">
              ${ctaLabel}
            </a>
          </div>
        `;
      });
    }

    container.innerHTML = `
      <div class="container">
        <div class="search-results-hero">
          <div class="search-results-hero__header">
            <div class="search-results-hero__query-box">
              <i data-lucide="search" style="width:22px;height:22px;color:#1d4ed8;"></i>
              <div>
                <span style="font-size:0.85rem;color:#64748b;font-weight:600;display:block;">खोज परिणाम:</span>
                <span class="search-results-hero__query-tag">"${escapeHtml(query)}"</span>
              </div>
            </div>
            <div style="display:flex;align-items:center;gap:16px;">
              <span class="search-results-hero__count"><strong>${count}</strong> परिणाम पाए गए</span>
              <a href="${window.location.pathname}" class="search-results-hero__clear">
                <i data-lucide="x-circle" style="width:16px;height:16px;"></i> फ़िल्टर हटाएं
              </a>
            </div>
          </div>
          <div class="search-results-grid">
            ${cardsHtml}
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    // Scroll smoothly to results
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Public API
  window.UniversalSearch = {
    search,
    loadIndex
  };

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLiveSearch();
      handleSearchResultsPage();
    });
  } else {
    initLiveSearch();
    handleSearchResultsPage();
  }
})();
