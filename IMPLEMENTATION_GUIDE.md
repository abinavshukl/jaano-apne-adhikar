# How to Use This Prompt to Update Your Website

## What You Have

1. **A detailed analysis** of what village audience actually needs (in memory)
2. **A complete AI prompt** (`website_update_prompt.md`) — copy-paste ready
3. **Tier 1–3 content roadmap** — prioritized by impact

## How to Proceed (3 Options)

### Option A: Use Claude (Recommended for Free)
1. Copy the entire content from `website_update_prompt.md`
2. Go to https://claude.ai
3. Paste the prompt in the chat box
4. Ask: **"Create the Problem → Remedy matrix page (Tier 1, #1) for Hardoi district, Sandila block. Make it HTML with form selectors."`
5. Claude outputs ready HTML → Copy to your site
6. Repeat for each content block

**Advantage**: Free, fast, iterative feedback  
**Time**: 30 minutes for 1 full Tier 1 page, 2–3 hours for all Tier 1

### Option B: Use ChatGPT / Perplexity
- Same process, paste prompt
- ChatGPT may handle complex tables better than some other models
- Perplexity can verify current links (e.g., Bhulekh portal) in real-time

### Option C: Pay a Freelancer (If Pressed for Time)
- Give them the prompt file
- Ask for HTML delivery (not WordPress, not CMS — static HTML files)
- Budget: ₹2000–5000 for all Tier 1 content
- Platform: Upwork, Fiverr, local web dev

---

## Implementation Roadmap (For You)

### Week 1: Tier 1 Foundation
- **Day 1–2**: Create Problem → Remedy page (highest impact)
  - Ask Claude: "Build the interactive problem-solution guide for Land, Wage, Scheme, Legal issues. Include Hardoi/Sandila contacts."
  
- **Day 3–4**: Fee Transparency page
  - Ask Claude: "Create a table showing what should be free, what agents charge, and fraud warnings."
  
- **Day 5–6**: Land/Revenue guide
  - Ask Claude: "Write 6 guides (khatauni, varasat, paimaish, sarkaari land, disputes, lost papers). Make each a separate HTML section."
  
- **Day 7**: Local contacts for Hardoi
  - Ask Claude: "Build a directory of all government offices in Sandila block. Include addresses, hours, phone numbers, and a calendar of Samadhan Diwas dates."

### Week 2: Tier 2 (Medium impact)
- Fraud warning page
- Status checking guide
- Template letters
- Escalation maps

### Week 3: Polish & Polish
- Audio clips (optional but high-impact)
- PWA setup (if you want offline access)
- Update homepage to remove "0" counters
- Add "Last updated" dates everywhere

---

## How to Structure Pages on Your Site

Each page should follow this format:

```html
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <style>
    /* Your existing CSS */
  </style>
</head>
<body>
  <nav>
    <!-- Your header -->
  </nav>

  <main>
    <h1>पृष्ठ शीर्षक (Page Title in Hindi)</h1>
    <p class="last-updated">अंतिम अद्यतन: 15 सितंबर 2026 | Last Updated: 15 Sept 2026</p>
    
    <!-- Content goes here -->
    
  </main>

  <footer>
    <!-- Your footer -->
  </footer>
</body>
</html>
```

---

## Example: How to Ask Claude for Content

**Copy this template and fill in the section:**

---

### PROMPT TEMPLATE:

```
You are a content writer for a citizen-awareness website (Jaano Apne Adhikar) 
focused on rural Uttar Pradesh.

Create the following page for **Hardoi district, Sandila block, Baragaon village**:

SECTION: [Problem → Remedy page / Fee Transparency / Land Guides / etc.]

REQUIREMENTS:
- Audience: Farmers, daily wage workers, low digital literacy
- Language: Simple Hindi + Hinglish (conversational, not formal)
- Format: HTML with simple styling
- Provide exact office addresses, phone numbers, timelines, costs
- Include 2–3 template letters for common scenarios

SPECIFIC CONTENT:
[Paste relevant section from website_update_prompt.md]

OUTPUT:
- Complete, copy-paste-ready HTML
- Include comments in code explaining sections
- Make it mobile-friendly (responsive)
```

---

## Cost & Effort

| Task | Time | Cost | Impact |
|------|------|------|--------|
| Problem → Remedy page | 2–3 hours | ₹0–200 (if Claude API) | ⭐⭐⭐⭐⭐ |
| Fee Transparency | 1–2 hours | ₹0 | ⭐⭐⭐⭐ |
| Land/Revenue guide | 3–4 hours | ₹0 | ⭐⭐⭐⭐⭐ |
| Local contacts directory | 1–2 hours | ₹0 | ⭐⭐⭐⭐ |
| Fraud warnings | 1 hour | ₹0 | ⭐⭐⭐ |
| Status tracking guide | 1 hour | ₹0 | ⭐⭐⭐ |
| Template letters | 2 hours | ₹0 | ⭐⭐⭐ |
| Escalation maps | 1 hour | ₹0 | ⭐⭐⭐ |
| **TOTAL TIER 1** | **~12 hours** | **₹0–500** | **⭐⭐⭐⭐⭐** |

**Using Claude API** (if you want to automate):
- Cost: ~₹20–50 for all Tier 1 content
- Time: <30 minutes (API calls batch-processed)
- Overkill for this project, but possible

---

## Quality Checklist (Before Publishing)

- [ ] All contact numbers verified (cross-check with official portals)
- [ ] All timelines are realistic (not "varies")
- [ ] Language is simple (no "संवैधानिक," use "कानूनी" instead)
- [ ] Every page has "Last updated" date
- [ ] No "0 नागरिक जुड़े" counters
- [ ] Links to official portals work (Bhulekh, Jansunwai, etc.)
- [ ] Template letters are tested (can be copy-pasted without errors)
- [ ] Mobile-responsive (test on phone)
- [ ] No outdated scheme amounts (e.g., PM-Kisan ₹6000 is current as of Sept 2026)

---

## Maintenance Plan (After Launch)

Set a quarterly reminder to:
1. Update phone numbers (if any change)
2. Verify scheme amounts (governments increase them)
3. Check if new schemes launched (PM Kaushal, etc.)
4. Review user feedback (ask for errors via email)

---

## Getting Feedback from Village Users

Once you publish:
1. **Share the link** with a gramsevak / ANM / local CSC operator
2. **Ask 3 questions**:
   - "Is this information correct?"
   - "Would a farmer understand this?"
   - "What's missing?"
3. **Collect feedback via WhatsApp** (easier than email for rural areas)
4. **Update within 1 week**

---

## Final Thought

This isn't a one-time project. The website's value grows with each update and correction. After 6 months of refinement based on village feedback, it will be **the** resource for Hardoi.

The goal: A farmer with a land problem opens your site, finds the exact answer in 3 minutes, and tells 10 other farmers about it. That's virality in rural UP.

---

**Ready to start?**  
Take the prompt, open Claude, and ask for the first page. You'll have something live within an hour.
