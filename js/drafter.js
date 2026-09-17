document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateDraftBtn');
  const printBtn = document.getElementById('printDraftBtn');
  const copyBtn = document.getElementById('copyDraftBtn');
  const outputArea = document.getElementById('draftOutputArea');
  const draftContent = document.getElementById('draftContent');

  const nameInput = document.getElementById('drafterName');
  const issueEl = document.getElementById('drafterIssue');
  const detailsEl = document.getElementById('drafterDetails');

  const step1 = document.getElementById('step1Indicator');
  const step2 = document.getElementById('step2Indicator');
  const step3 = document.getElementById('step3Indicator');

  const meterBar = document.getElementById('strengthMeterBar');
  const scoreText = document.getElementById('strengthScoreText');
  const strengthBadge = document.getElementById('strengthBadge');
  const hintName = document.getElementById('hintName');
  const hintIssue = document.getElementById('hintIssue');
  const hintDetails = document.getElementById('hintDetails');

  if (!generateBtn) return;

  function updateStrengthMeter() {
    let score = 25; // base guarantee: legal template format & receiving demand

    const hasName = nameInput && nameInput.value.trim().length > 1;
    const hasIssue = issueEl && issueEl.value !== '';
    const hasDetails = detailsEl && detailsEl.value.trim().length >= 8;

    if (hintName) {
      hintName.classList.toggle('completed', hasName);
      if (hasName) score += 25;
    }
    if (hintIssue) {
      hintIssue.classList.toggle('completed', hasIssue);
      if (hasIssue) score += 25;
    }
    if (hintDetails) {
      hintDetails.classList.toggle('completed', hasDetails);
      if (hasDetails) score += 25;
    }

    if (meterBar) {
      meterBar.style.width = score + '%';
      meterBar.className = 'strength-meter-fill';
      if (score >= 75) {
        meterBar.classList.add('strong');
      } else if (score >= 50) {
        meterBar.classList.add('medium');
      }
    }

    if (scoreText) {
      if (score >= 100) {
        scoreText.textContent = 'कानूनी रूप से सशक्त (100%)';
        scoreText.style.color = '#059669';
      } else if (score >= 75) {
        scoreText.textContent = 'सशक्त (75%)';
        scoreText.style.color = '#059669';
      } else if (score >= 50) {
        scoreText.textContent = 'मध्यम (50%)';
        scoreText.style.color = '#d97706';
      } else {
        scoreText.textContent = 'प्रारंभिक (25%)';
        scoreText.style.color = '#ef4444';
      }
    }

    if (strengthBadge) {
      if (score >= 75) {
        strengthBadge.textContent = 'सशक्त मसौदा';
        strengthBadge.className = 'benefit-chip';
      } else {
        strengthBadge.textContent = 'अपूर्ण';
        strengthBadge.className = 'benefit-chip benefit-chip--amber';
      }
    }

    // Update stepper
    if (step1 && step2) {
      if (hasIssue) {
        step1.classList.remove('active');
        step2.classList.add('active');
      } else {
        step1.classList.add('active');
        step2.classList.remove('active');
      }
    }
  }

  if (nameInput) nameInput.addEventListener('input', updateStrengthMeter);
  if (issueEl) issueEl.addEventListener('change', updateStrengthMeter);
  if (detailsEl) detailsEl.addEventListener('input', updateStrengthMeter);

  const templates = {
    ration: {
      to: "श्रीमान जिला पूर्ति अधिकारी (DSO) / उप जिलाधिकारी (SDM)",
      subject: "राशन कार्ड सूची से नाम काटे जाने / नया राशन कार्ड जारी करने के संबंध में।",
      body: "सविनय निवेदन है कि प्रार्थी/प्रार्थिनी एक गरीब और पात्र नागरिक है। हाल ही में बिना किसी पूर्व सूचना या वैध कारण के प्रार्थी का नाम राशन कार्ड सूची से काट दिया गया है (या प्रार्थी का राशन कार्ड अभी तक नहीं बना है), जिससे प्रार्थी के परिवार के सामने भुखमरी का संकट उत्पन्न हो गया है।\n\nअतः श्रीमान जी से करबद्ध प्रार्थना है कि मामले की निष्पक्ष जांच कराकर प्रार्थी का नाम राशन कार्ड सूची में पुनः जोड़ने (या नया राशन कार्ड जारी करने) की कृपा करें।"
    },
    land: {
      to: "श्रीमान उप जिलाधिकारी (SDM) / तहसीलदार",
      subject: "कृषि भूमि/प्लॉट पर दबंगों द्वारा किये जा रहे अवैध कब्जे को रुकवाने के संबंध में।",
      body: "सविनय निवेदन है कि प्रार्थी की पुश्तैनी/पंजीकृत भूमि (जिसका विवरण प्रार्थी के पास सुरक्षित है) पर कुछ स्थानीय दबंग और असामाजिक तत्व बलपूर्वक अवैध कब्जा करने का प्रयास कर रहे हैं। प्रार्थी ने कई बार उन्हें रोकने का प्रयास किया परंतु वे लड़ाई-झगड़े और जान से मारने की धमकी पर उतारू हैं।\n\nअतः श्रीमान जी से निवेदन है कि मामले की गंभीरता को देखते हुए संबंधित पुलिस/राजस्व टीम को मौके पर भेजकर अवैध कब्जा रुकवाने और प्रार्थी के जान-माल की रक्षा करने की कृपा करें।"
    },
    police: {
      to: "श्रीमान वरिष्ठ पुलिस अधीक्षक (SSP) / पुलिस अधीक्षक (SP)",
      subject: "थानाध्यक्ष द्वारा संज्ञेय अपराध पर एफ.आई.आर (F.I.R) दर्ज न करने एवं BNSS 173(4) के तहत कार्यवाही के संबंध में।",
      body: "सविनय निवेदन है कि प्रार्थी के साथ एक संज्ञेय अपराध/घटना घटित हुई है, जिसकी लिखित शिकायत लेकर प्रार्थी स्थानीय थाने गया था। परंतु थानाध्यक्ष महोदय ने प्रार्थी की रिपोर्ट (FIR) दर्ज करने से स्पष्ट इंकार कर दिया।\n\nअतः श्रीमान जी से विनम्र प्रार्थना है कि BNSS धारा 173(4) के तहत संज्ञान लेते हुए संबंधित थाने को प्रार्थी की प्रथम सूचना रिपोर्ट (FIR) तत्काल दर्ज कर निष्पक्ष विधिक कार्यवाही का कड़ा निर्देश देने की कृपा करें।"
    },
    pension: {
      to: "श्रीमान जिला समाज कल्याण अधिकारी",
      subject: "वृद्धावस्था / विधवा / दिव्यांग पेंशन का भुगतान रुक जाने के संबंध में।",
      body: "सविनय निवेदन है कि प्रार्थी/प्रार्थिनी सरकार द्वारा निर्धारित पेंशन योजना का/की पात्र लाभार्थी है और पूर्व में निरंतर पेंशन प्राप्त कर रहा/रही था/थी। परंतु पिछले कुछ महीनों से बिना किसी कारण के प्रार्थी के बैंक खाते में पेंशन की धनराशि आना बंद हो गई है। प्रार्थी अत्यंत वृद्ध/असहाय है और उसका जीवन यापन इसी पेंशन पर निर्भर है।\n\nअतः श्रीमान जी से प्रार्थना है कि प्रार्थी के पेंशन खाते व आधार NPCI सीडिंग की जांच कराकर रुकी हुई पेंशन का भुगतान शीघ्र अति शीघ्र शुरू करवाने की कृपा करें।"
    },
    pradhan: {
      to: "श्रीमान मुख्य विकास अधिकारी (CDO) / जिला पंचायत राज अधिकारी (DPRO)",
      subject: "ग्राम पंचायत में विकास कार्यों (नाली, खड़ंजा, आवास) में वित्तीय अनियमितता की निष्पक्ष जांच के संबंध में।",
      body: "सविनय निवेदन है कि प्रार्थी के ग्राम पंचायत में विकास कार्यों (जैसे- मनरेगा, पीएम आवास, शौचालय, नाली और खड़ंजा निर्माण) में भारी अनियमितताएं सामने आई हैं। वास्तविक पात्र वंचित हैं और कागजों पर कार्य दिखाकर दुरुपयोग की आशंका है।\n\nअतः श्रीमान जी से निवेदन है कि एक निष्पक्ष जांच कमेटी गठित कर ग्राम पंचायत में हुए कार्यों का भौतिक सत्यापन कराएं और वैधानिक कार्यवाही सुनिश्चित करें।"
    }
  };

  generateBtn.addEventListener('click', () => {
    const name = (nameInput && nameInput.value.trim()) || '[आपका नाम]';
    const issue = issueEl ? issueEl.value : '';
    const details = detailsEl ? detailsEl.value.trim() : '';

    if (!issue || !templates[issue]) {
      if (typeof window.showToast === 'function') {
        window.showToast("कृपया पहले एक समस्या श्रेणी चुनें!");
      } else {
        alert("कृपया पहले एक समस्या श्रेणी चुनें!");
      }
      return;
    }

    const template = templates[issue];
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-IN');

    let draft = "सेवा में,\n\n" +
      template.to + "\n" +
      "महोदय,\n\n" +
      "विषय: " + template.subject + "\n\n" +
      template.body;

    if (details) {
      draft += "\n\nअन्य महत्वपूर्ण विवरण व घटनाक्रम: " + details;
    }

    draft += "\n\nसंलग्नक: \n1. आधार कार्ड प्रति\n2. संबंधित साक्ष्य/दस्तावेज प्रति\n\nधन्यवाद।\n\nदिनांक: " + dateStr + "\n\nभवदीय,\nनाम: " + name + "\nहस्ताक्षर: ____________________\n\n[नोट: इस आवेदन की 2 प्रतियां जमा करें और कार्यालय से मुहरयुक्त पावती (Receiving) अवश्य लें]";

    if (draftContent) draftContent.textContent = draft;
    if (outputArea) {
      outputArea.style.display = 'block';
      outputArea.scrollIntoView({ behavior: 'smooth' });
    }

    // Step 3 active
    if (step3) {
      if (step1) step1.classList.remove('active');
      if (step2) step2.classList.remove('active');
      step3.classList.add('active');
    }

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!draftContent || !draftContent.textContent) return;
      if (typeof window.copyToClipboard === 'function') {
        window.copyToClipboard(draftContent.textContent, "प्रार्थना पत्र कॉपी हो गया! ✅ (2 प्रतियां प्रिंट करवाएं)");
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(draftContent.textContent).then(() => {
          alert("प्रार्थना पत्र कॉपी हो गया!");
        });
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Initial call
  updateStrengthMeter();
});
