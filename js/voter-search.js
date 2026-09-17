/**
 * js/voter-search.js — National & State Voter Search Gateway
 * Location-neutral civic gateway for Electoral Roll verification.
 */
(function () {
  "use strict";

  const ECI_SEARCH_URL = "https://electoralsearch.eci.gov.in/";
  const SEC_UP_URL = "https://sec.up.nic.in/site/PRIVoters.aspx";

  function initVoterSearch() {
    const searchBtn = document.getElementById("findVoterBtn");
    const resultDiv = document.getElementById("voterResult");

    if (!searchBtn || !resultDiv) return;

    searchBtn.addEventListener("click", () => {
      resultDiv.innerHTML = `
        <div class="result-card animate-in" style="margin-top:16px;text-align:left;border:1px solid #10b981;border-radius:10px;background:#fff;overflow:hidden;box-shadow:var(--shadow-sm);">
          <div style="padding:12px 16px;background:#0f766e;color:#fff;font-weight:700;display:flex;align-items:center;gap:8px;">
            <i data-lucide="check-circle" class="inline-icon"></i> आधिकारिक मतदाता सत्यापन पोर्टल
          </div>
          <div style="padding:16px;">
            <p style="margin:0 0 12px 0;font-size:0.92rem;color:#334155;line-height:1.6;">
              भारत निर्वाचन आयोग (ECI) के राष्ट्रीय पोर्टल पर अपना EPIC (वोटर आईडी) नंबर या नाम, राज्य और जिला चुनकर खोजें:
            </p>
            <div style="display:flex;flex-direction:column;gap:10px;">
              <a href="${ECI_SEARCH_URL}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--full" style="justify-content:center;">
                राष्ट्रीय मतदाता खोज (ECI Portal) ↗
              </a>
              <a href="${SEC_UP_URL}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--full" style="justify-content:center;font-size:0.85rem;">
                राज्य पंचायत मतदाता सूची [उदा. उत्तर प्रदेश SEC] ↗
              </a>
            </div>
            <p style="margin:10px 0 0 0;font-size:0.8rem;color:#64748b;">
              सुरक्षा सूचना: यह वेबसाइट कोई व्यक्तिगत डेटा नहीं मांगती या सहेजती नहीं है। सत्यापन सीधे आधिकारिक पोर्टल पर होता है।
            </p>
          </div>
        </div>
      `;

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVoterSearch);
  } else {
    initVoterSearch();
  }
})();

