# JAANO APNE ADHIKAR — Website Content Update Prompt

## Your Mission
Expand this citizen-rights website (jaano-apne-adhikar) with high-impact, village-focused content. The audience is rural UP residents aged 18–70 with low digital literacy, who face recurring problems and don't know their legal remedies.

## Target Audience (Not Generic)
- **Farmers**: Land disputes, crop schemes, minimum support price confusion
- **Daily wage workers**: MGNREGA wage theft, no job card proof, Ayushman issues  
- **Women**: Domestic violence, ration held by husband, birth registration
- **Elders**: Pension delays, lost health cards, distrust of online systems
- **Youth**: Skill training, employment, document preparation

**Key constraint**: They don't read instruction-heavy pages. They search for *"My problem → Now what?"* answers.

---

## TIER 1: HIGH-IMPACT CONTENT (Create These First)

### 1. Problem → Remedy Decision Table
**File**: `pages/problem-to-remedy.html` (or add to existing Rights page)

Create an interactive guide: *"I have Problem X → Here are my legal remedies & next steps"*

**Structure**:
- Category selector: Land / Wage / Scheme / Legal / Entitlement
- For each problem, show:
  1. **What to do first** (exact place, person's title, what to bring)
  2. **Cost** (should be free, if not, what's the real amount)
  3. **Timeline** (realistic: 2–6 weeks, not "varies")
  4. **If they refuse** (escalation: to whom, which law, how)
  5. **Status check** (portal link or how to verify)

**Content you must include**:

#### Land/Revenue:
- My name doesn't appear in khatauni (land record)
  - Step 1: Get free khatauni copy from tehsil office (Free)
  - Step 2: Check online at Bhulekh.up.nic.in yourself (Free)
  - Step 3: If error found, petition to SDM with proof (Free) — expect 6–8 weeks
  - Escalate: If SDM refuses, file Jansunwai complaint (Reference: Revenue Code Section 24)

- Someone else's name on my land plot
  - Step 1: File mutation objection (Avedan) at tahsil (Free)
  - Step 2: Gram Sabha verifies (attend meeting, bring proof)
  - Step 3: Lekhpal updates record (no fee, legal right)
  - Timeline: 4–8 weeks
  - Contact: Lekhpal office, [Hardoi details]

- My land shows "Sarkaari" (government) but I farm it
  - Legal option: File under UP Revenue Code Section 24 (Sarkaari Zameen Ke Virudh Aavedan)
  - Process: Gram Sabha reviews, petitions to SDM, recorded as private
  - Timeline: 3 months (slow but legal)
  - Free, no agent fee

#### Wage/Labour:
- MGNREGA wage not paid within 7 days
  - **Your legal right**: Unemployment allowance ₹100/day for every day after 7
  - Where to file: Block MGNREGA office (in person)
  - Also SMS your complaint: 9730991947
  - How to check: mgnrega.nic.in — search your account
  - Escalate after 14 days: Contact MGNREGA helpline 1800-180-5555

- Contractor paid me less than ₹1 note
  - **This is wage theft**: Legal remedy = FIR under BNS Section 378
  - You do NOT need employer permission
  - Go to: Police thana + submit written complaint
  - If thana refuses: Petition to SDM/Magistrate under BNSS Section 173(4)
  - Get receipt number for all complaints

- My job card was deleted / never got one
  - Apply for fresh MGNREGA card at block office
  - Documents needed: Aadhar, voter ID, land papers
  - You're legally entitled to 100 days work per year
  - If blocked: Contact MGNREGA Nodal Officer at district level + 1800-180-5555

#### Scheme Eligibility Confusion:
- "Is my income too high for PM-Kisan?"
  - Truth: **All landholding farmers qualify** (no income limit)
  - Exception: Only if you earn >₹200k/year from OTHER sources (business, job, etc.)
  - Agriculture income doesn't count toward the ₹200k limit
  - Check eligibility: pmkisan.gov.in (instant)

- "Can my wife get Ayushman card if I haven't registered?"
  - Yes — each person is a separate unit
  - Both of you can get cards (if household income <₹150k/year)
  - Process: Register at health camp OR go to ANM with documents
  - Free, always free

#### Legal/Complaint:
- Police thana refuses to file my FIR
  - **Your legal right**: SP (police) + Magistrate both must accept your complaint
  - Step 1: Written application to SP (not verbal) — get receipt
  - Step 2: If SP refuses, file petition to Magistrate under BNSS Section 175(3) — must be entertained
  - This is law, not a favor
  - Escalate: State Information Commission if both refuse

- Jansunwai complaint seems stuck / no response
  - Check status: jansunwai.up.nic.in + reference number
  - If no update in 15 days: Attend **Samadhan Diwas** (1st & 3rd Saturday, tahsil office)
  - Bring reference number + original complaint copy
  - If still stuck: Call CM helpline **1076** (24/7, free)
  - Timeline: First response = 15 days, final = 30 days

#### Entitlement Issues:
- My ration card shows wrong name / can't get ration
  - Step 1: Contact DSWO (block office) — bring card + proof
  - Step 2: COUPDS (block-level committee) reviews correction
  - Step 3: If denied, escalate to DM office
  - Timeline: 15 days per step
  - Cost: **Free**. Corrections are not chargeable.

- Pension (Badhapur, Widow, Old Age) not coming to my account
  - Check: Ask bank which account pension is linked to (might be wrong account)
  - Online check: UP Pension portal (link to be provided)
  - If payment stopped: Contact DSWO + block pension office
  - Escalate: DM Samadhan Diwas or 1076
  - Timeline: Banks take 5 days, DSWO takes 15 days

**Format for this page**:
- Search/filter by category (Land, Wage, Scheme, Legal, Entitlement)
- Each problem = 1 card with: 
  - Problem in plain Hindi
  - 3–4 step-by-step actions (who, where, what to bring)
  - Cost (free or ₹X)
  - Timeline
  - "If stuck" escalation
  - Contact details for Hardoi

---

### 2. Fee Transparency Page
**File**: `pages/fee-transparency.html`

Create a table: *"What Should Cost Nothing (But Agents Charge)"*

| Document | What It Actually Costs | What Agents/CSCs Charge | What to Do If Overcharged |
|----------|------------------------|-------------------------|---------------------------|
| Khatauni (land record copy) | Free | ₹50–100 | Download from bhulekh.up.nic.in or go to tahsil (Free) |
| Caste certificate | Free (gram sabha) | ₹50–200 | Contact sarpanch/gramsevak; it's free |
| Income certificate | Free (gram sabha) | ₹100–200 | Contact sarpanch/gramsevak; it's free |
| Domicile/Residence certificate | Free (tahsil) | ₹50–100 | Go to tahsil with ID proof (Free) |
| Varasat (mutation after death) | Free | ₹200–500 | Lekhpal CANNOT charge; bring death certificate (Free) |
| E-Shram registration | Free (online-only) | Some CSCs wrongly charge ₹10–50 | Register yourself on eShram.gov.in (Completely free) |
| MGNREGA wage/status check | Free | Some CSCs charge ₹10 | Check yourself at mgnrega.nic.in (Free) |
| Ayushman Bharat card | Free | ₹50–100 | Go to health camp or ANM (100% free) |
| Ration card correction | Free | ₹50–100 | DSWO office (Free) |
| Voter ID/voter booth check | Free | Some charge ₹20 | sec.up.nic.in (Free) |
| PM-Kisan e-KYC | Free | Scammers charge ₹50–100 | Register on pmkisan.gov.in or go to CSC (Free) |
| Aadhar update (address) | Free | CSC charged ₹50 (if updated) | Aadhar.uidai.gov.in (Free) |

**Additional sections**:

#### Fraud Warning Signs:
- **Scam**: Fake calls saying "Your PM-Kisan/Ayushman approval requires ₹500 confirmation fee"
  - Truth: REAL scheme approvals NEVER charge a fee upfront
  - What to do: Hang up, report to Cyber helpline 1930

- **Scam**: "Your e-KYC failed; pay ₹100 to retry"
  - Truth: e-KYC is online, free, and automatic
  - Report: Cyber helpline 1930, also inform the scheme ministry

- **Scam**: "CSC operator says 'Government fee has increased to ₹200'"
  - Truth: Document fees don't increase; CSC is pocketing extra
  - Where to complain: CSC e-governance portal complaint + local tehsil

- **Scam**: Loan given with interest (illegal in UP villages)
  - Where to report: Police (wage theft + usury under BNS), also District Administration

#### Cyber Helpline & Complaint:
- **Cyber Helpline**: 1930 (Toll-free, 24/7, in Hindi)
- **Police**: 100 (file FIR, get receipt number)
- **District Commissioner**: [Hardoi office address + phone]
- **CM Helpline**: 1076 (for administrative complaints)

---

### 3. "What Now?" Escalation Maps
**File**: `pages/escalation-guide.html`

For 5 major processes, show: *"I tried Step 1, they said no. Where do I go next?"*

Create visual flowcharts (can be ASCII or simple boxes):

#### Ration Card Issue Escalation:
```
Step 1 (5 days): Gramsevak/DSWO blocks office
  ↓ (No response or rejection)
Step 2 (15 days): COUPDS committee review, block office
  ↓ (Still rejected)
Step 3 (30 days): DM office (District Magistrate), district headquarters
  ↓ (No resolution)
Step 4 (30 days): CM helpline 1076 + State Consumer Commission (if money involved)
```

#### FIR Complaint Escalation:
```
Step 1 (same day): Police thana (written application, get receipt)
  ↓ (They refuse to file)
Step 2 (5 days): SP (Superintendent of Police) written petition under BNSS 173(4)
  ↓ (SP refuses)
Step 3 (7 days): Magistrate petition under BNSS 175(3) — must be entertained
  ↓ (Magistrate refuses)
Step 4 (60 days): State Information Commission + High Court
```

#### MGNREGA Wage Issue:
```
Step 1 (7 days): Block MGNREGA office complaint + SMS 9730991947
  ↓ (No payment)
Step 2 (14 days): File unemployment allowance claim (₹100/day after 7 days)
  ↓ (Rejected or delayed)
Step 3 (30 days): District MGNREGA helpline 1800-180-5555 + written escalation to District Collector
  ↓ (Still nothing)
Step 4: State Labor Commission + Media/NGO
```

#### Pension Not Credited:
```
Step 1 (5 days): Check with bank (might be linked to wrong account)
  ↓ (Confirmed pension not processed)
Step 2 (15 days): DSWO (block office) + pension portal complaint
  ↓ (Still missing)
Step 3 (15 days): DM Samadhan Diwas (1st Saturday, tahsil office)
  ↓ (No resolution)
Step 4 (15 days): CM helpline 1076 + Social Security helpline
```

#### Scheme Rejection (Ayushman, PM-Kisan, etc.):
```
Step 1 (same day): Check online portal for reason of rejection
  ↓ (Reason unclear or wrong)
Step 2 (7 days): Block office (correct documents, reapply)
  ↓ (Rejected again)
Step 3 (15 days): District Scheme Office + Jansunwai complaint
  ↓ (Still rejected)
Step 4 (30 days): Scheme helpline (e.g., 1800-130-3168 for PM-Kisan) + State Information Commission
```

**For each escalation path, provide**:
- Exact office address (Hardoi)
- Who to contact (title, not always a name)
- What to bring (documents)
- How long each step should take
- A template letter for escalation (copy-paste ready)

---

### 4. Land/Revenue Guide (Biggest Content Gap)
**File**: `pages/land-revenue-guide.html`

This section is **completely missing** from your site and is **the #1 village concern**.

Create 6 sub-pages/sections:

#### 4.1 How to Read Your Khatauni (Land Record)
- **What it shows**: Owner name, area, cultivation type, irrigation, tax
- **Each column explained** (in simple Hindi): Column 1 = खसरा नंबर (plot number), Column 2 = खातेदार (owner), Column 3 = क्षेत्रफल (area in बिघा/hectare), etc.
- **Free access**: Bhulekh.up.nic.in (show screenshot with directions)
- **How to download your copy**: Step-by-step with images
- **What to do if information is wrong**: File mutation objection (Section 24 form) at tehsil

#### 4.2 Varasat — Mutation After Death (Free, Not ₹500)
- **What it is**: Transferring land to heir after someone dies
- **Who qualifies**: Legal heir (spouse, son, daughter, parent — in that order)
- **Process** (3 steps):
  1. File mutation form at tehsil (lekhpal office) — **no fee** — bring death certificate + heir ID
  2. Gram Sabha meets to verify (usually 1 week)
  3. Lekhpal updates record (2–4 weeks total)
- **Cost**: ₹0 (Free)
- **If someone tries to charge ₹500**: They're scamming. Go to tahsil directly.
- **If lekhpal delays**: File Jansunwai complaint

#### 4.3 Paimaish (Land Measurement) & Boundary Issues
- **When you need it**: Dispute with neighbor, error in area recorded, encroachment
- **How to apply**: Petition to SDM (not tahsil), costs ₹200–500
- **Process**: Lekhpal measures, submits report, SDM approves (3–6 weeks)
- **What NOT to expect**: Lekhpal cannot charge extra beyond government fee
- **Escalation**: If lekhpal harasses you, file complaint to SDM + Jansunwai

#### 4.4 Sarkaari (Government) Land — Is It Really?
- **Check**: Bhulekh should show owner. If it shows "सरकार" (government), it's sarkaari
- **But you farm it**: This is common. Solution = File under Section 24 (Sarkaari Zameen Ke Virudh)
- **Process**: Gram Sabha confirms you've been farming for years, petitions SDM, transferred to private
- **Timeline**: 3 months (slow but legally valid)
- **Cost**: Free
- **Success rate**: ~70% if you have proof (witnesses, old receipts)

#### 4.5 Land Dispute with Neighbor
- **Option 1**: RTI to gram sabha to check old mutation records (₹10, instant)
- **Option 2**: Apply for paimaish (measurement) to SDM (₹200–500, 4 weeks)
- **Option 3**: File civil suit (costs ₹500–2000, takes 2–3 years, win rate 50/50)
- **Option 4**: Gram Sabha arbitration (free, informal, often works if relationship can be repaired)
- **Do NOT**: Take matters into your own hands (encroach, damage fences) — it becomes FIR material

#### 4.6 Lost Land Papers / Mutation Record Doesn't Match
- **Get duplicate khatauni**: Free from Bhulekh.up.nic.in
- **Get mutation history**: RTI to tehsil office (₹10, 30 days)
- **If mutation is wrong**: File correction petition to SDM (free, 2–4 weeks)
- **If papers are lost**: Gazette notification (rare, needs police complaint + delay) — cost ₹2000–5000

**For this entire section, provide**:
- Free Bhulekh link (direct to Hardoi district)
- Lekhpal contact for Sandila block
- SDM office address + hours
- RTI sample format (how to write)
- 3 template letters (mutation objection, paimaish request, dispute resolution)

---

### 5. Local Contact Directory — Hardoi/Sandila
**File**: `pages/local-contacts-hardoi.html`

Create a directory specific to **Hardoi district, Sandila block, Baragaon village**.

| Role | Name (if public) | Office Address | Phone | Office Hours | What They Handle |
|------|------------------|-----------------|-------|--------------|-----------------|
| **Gramsevak** (Village Secretary) | [Name if available] | Gram Panchayat Baragaon, Sandila | [Phone] | 9 AM–5 PM, closed Sunday | Income/caste/domicile certificates, ration card issues, pension, land documents, RTI applications |
| **Lekhpal** (Revenue Officer) | [Name] | Tehsil Sandila, [Address] | [Phone] | 9 AM–5 PM | Khatauni (land records), mutations, paimaish, boundary issues |
| **DSWO** (District Social Welfare Officer) | [Office details] | Block office, Sandila | [Phone] | 9 AM–5 PM | Ration cards, pensions (old age, widow, disability), Ayushman registration |
| **ANM** (Health worker) | [Name, Female] | Health Sub-center Baragaon | [Phone/Mobile] | 9 AM–12 PM, 2–4 PM | Ayushman card registration, maternal health, vaccinations, health checks |
| **Police Post / Thana** | Station Officer [Name] | Police Outpost Baragaon / Sandila Thana | 100 (emergency) [Local number] | 24/7 | FIR registration, complaint filing, local law & order |
| **BDO** (Block Development Officer) | [Name] | Block office, Sandila | [Phone] | 9 AM–5 PM | MGNREGA oversight, scheme disputes, grievances |
| **Sarpanch** (Gram Panchayat Head) | [Name] | Gram Sabha office | [Phone] | Varies (usually evening) | Land disputes, gram sabha meetings, local grievances |

#### Scheme-Specific Contacts:
| Scheme | Contact | Phone | Purpose |
|--------|---------|-------|---------|
| MGNREGA | Block office (BDO) | 1800-180-5555 (Helpline) | Job cards, wage complaints, status |
| PM-Kisan | Gramsevak or CSC | 1800-115-526 (Helpline) | Registration, payment status, e-KYC |
| Ayushman | Health worker (ANM) | 1967 (Helpline, 24/7) | Card registration, beneficiary check |
| Ration | DSWO | DSWO helpline | Card corrections, distribution issues |
| Pension | DSWO + Bank | 1076 (CM helpline) | Payment status, account linking |
| RTI | Gramsevak | RTI cell, district office | Information requests |

**Add a calendar section**:
- **Samadhan Diwas**: 1st & 3rd Saturday, 10 AM–12 PM, Tahsil office (bring reference number)
- **Thana Diwas**: 2nd & 4th Saturday, Police station (for FIR-related complaints)
- **Gram Sabha meetings**: [Baragaon dates if available, or "Usually 2nd Sunday"]

---

## TIER 2: Medium-Impact Content

### 6. Fraud & Scam Warning Page
**File**: `pages/fraud-warning.html`

Content:
- Common village scams (fake scheme approvals, usury loans, fake government calls)
- **Cyber Helpline**: 1930 (24/7, free, in Hindi)
- **Police**: 100 (FIR registration)
- How to identify fake calls/messages
- What to do if you've already given money
- Recovery options (FIR, bank complaint, chargebacks)

---

### 7. Status Checking Guide
**File**: `pages/status-check.html`

For each major scheme/process, explain: *"I filed a complaint 2 weeks ago. How do I check if it went through?"*

- **Jansunwai**: Reference no. + date at jansunwai.up.nic.in
- **MGNREGA**: Job card no. at mgnrega.nic.in
- **Ayushman**: Aadhar no. at beneficiary.nha.gov.in
- **PM-Kisan**: Aadhar/account no. at pmkisan.gov.in
- **Ration**: Ration card no. + block at state portal
- **Pension**: Account number + bank

Each with screenshot and step-by-step instructions.

---

### 8. Template Letters & Forms
**File**: `pages/templates.html`

Provide copy-paste templates for:
- RTI application (for any information)
- MGNREGA wage complaint
- Mutation objection (for land)
- FIR petition to Magistrate
- Jansunwai grievance (pre-filled template to reduce burden)
- Paimaish request
- Pension complaint
- Ration card correction request

Each in simple Hindi, short sentences, ready to print/copy.

---

### 9. Audio Guides
For 5 key processes, create 90-second Hindi voice clips:
- "अपने अधिकार कैसे जानें" (How to know your rights)
- "ख़तौनी कैसे पढ़ें" (How to read your land record)
- "शिकायत दर्ज कैसे करें" (How to file a complaint)
- "पेंशन नहीं मिली तो क्या करें" (Pension not received — what to do)
- "एजेंट से बचें" (How to avoid agents)

Link from relevant pages. Cost: Low (record on phone, upload MP3).

---

## TIER 3: Infrastructure Improvements

### 10. Update All Pages with "Last Updated" Date & Source
Remove the "0 नागरिक जुड़े" and "0 शिकायतें" counters (they damage credibility).  
Add: "Last updated: [date]. Sources verified from: [official portal link]"

### 11. Simplify Scheme Pages
Rewrite using this template:
- **हम हैं योग्य?** (Are we eligible?) — 1–2 sentences, max
- **फायदे क्या हैं?** (What's the benefit?) — Simple: "₹6000 per year directly to bank"
- **अगला कदम?** (Next step?) — Apply on [portal] OR visit [local office]
- **क्या-क्या चाहिए?** (What to bring?) — List 3–5 actual documents
- **शिकायत कहाँ करें?** (Where to complain?) — [Office + phone + expected time]

### 12. PWA / Offline Mode
Make site installable and cache guides offline (technical: add service worker, manifest.json)

---

## Deliverables

Create/update these files:
1. `pages/problem-to-remedy.html` — Main interactive decision guide
2. `pages/fee-transparency.html` — What's free vs. what agents charge
3. `pages/escalation-guide.html` — Step-by-step appeals paths
4. `pages/land-revenue-guide.html` — Complete land/mutation/boundary section (6 subsections)
5. `pages/local-contacts-hardoi.html` — Hardoi/Sandila-specific directory + calendar
6. `pages/fraud-warning.html` — Scams, helplines, recovery
7. `pages/status-check.html` — How to track your application
8. `pages/templates.html` — Copy-paste letter + form templates
9. Update home page: Remove counters, add "Last updated" dates
10. Update all scheme pages: Use the 5-question template

**Bonus (if time)**:
- Audio clips (5 × 90-second guides in Hindi)
- Printable posters (PDFs: "15 village helpline numbers", "Free documents list")
- PWA service worker (offline caching)

---

## Tone & Language Rules

1. **Use conversational Hindi + Hinglish** (not formal government Hindi)
   - "खतौनी" (official) = "ज़मीन का कागज़" (village Hindi)
   - "भूलेख" = "भू-रिकॉर्ड"
   - "पात्र" (formal) = "हकदार" or "योग्य" (conversational)

2. **Short sentences** (max 10 words per line)

3. **Active voice** ("अपने आप करें" vs "करवाया जाएगा")

4. **Local examples** (Baragaon, Sandila, Hardoi — not "UP" generically)

5. **Always explain the "why"** before the "how"
   - Don't: "File a mutation objection"
   - Do: "Your name isn't on the land record. Here's why & how to fix it."

6. **Provide exact timelines** (not "varies")

7. **Zero legal jargon** — explain law in village terms
   - "BNSS Section 173(4)" → "If police won't listen, the police superintendent (SP) must listen. Here's how."

---

## Success Metrics

Your site will succeed when:
- A farmer with a land dispute can find the answer in <3 minutes
- A woman can find the domestic violence helpline + nearest shelter in <2 minutes
- A daily wage worker can check MGNREGA wage status without an agent
- An elder can file a pension complaint without confusion
- A CSC operator's overcharge is immediately recognized as a scam

---

## Contact for Updates
Maintain: Last-updated dates, verified against official portals, feedback email for corrections.

---

**End of Prompt. Hand this to any AI assistant (Claude, ChatGPT, etc.) and they can create the content in HTML/Markdown.**
