/* ═══════════════════════════════════════════════════
   CHEF PALMAN · script.js  — Global i18n + interactions
   ═══════════════════════════════════════════════════ */

// ─────────────────────────────────────────────────────
// TRANSLATIONS — entire site content in all 5 languages
// ─────────────────────────────────────────────────────
const i18n = {
  en: {
    langLabel:    "Read in your language",
    chefName:     "Chef Palman",
    title:        "Executive Chef",
    chefSub:      "Executive Chef · Lamahatta, Darjeeling",
    credEyebrow:  "His Journey",
    credYears:    "Years",
    navHome:      "Home",
    navService:   "Service Area",
    navChef:      "Chef Palman",
    navBook:      "Book & Contact",
    bookEyebrow:  "Darjeeling Catering · From Lamahatta",
    bookLead:     "Premium catering for every occasion — from intimate village feasts to grand destination weddings across the hills.",
    eventsTitle:  "What We Cater",
    cat1Title:    "💍 Weddings & Life Celebrations",
    cat1i1: "Weddings — village to luxury destination",
    cat1i2: "Sangeet, Engagement & Reception",
    cat1i3: "Annaprashan (first rice ceremony)",
    cat1i4: "Baby showers & Naming ceremonies",
    cat1i5: "Birthdays & Anniversaries",
    cat1i6: "Gruhapravesh (house warming)",
    cat2Title:    "🪔 Rituals & Ceremonies",
    cat2i1: "Ghewa — 2–3 day Buddhist/Tamang death feast",
    cat2i2: "Shraddha / Antyesti — pure Sattvic (13-day)",
    cat2i3: "Dasgatra (10th-day purification)",
    cat2i4: "Bandara / Matshyamukhi / Niyombhanga",
    cat2i5: "Ekadasha Masika Shraddha (11-month)",
    cat2i6: "Bhagawat Puran Puja (one-year anniversary)",
    cat2i7: "Religious Pujas, Homam & Annadhanam",
    cat3Title:    "🌾 Indigenous Festivals & Feasts",
    cat3i1: "Sakela / Sakewa (Kirat Rai community)",
    cat3i2: "Nwagi & Chasok Tangnam (Limbu harvest)",
    cat3i3: "Namsoong & Nambun Faat (Lepcha New Year)",
    cat3i4: "Losar (Tibetan New Year · Bhutia & Sherpa)",
    cat3i5: "Saga Dawa, Pang Lhabsol, Bumchu",
    cat3i6: "Dasai (Durga Puja) & Tihaar (Diwali)",
    cat3i7: "Ban-Bhoj — outdoor jungle picnic feasts",
    cat4Title:    "🏢 Corporate & Community",
    cat4i1: "Government & office inaugurations",
    cat4i2: "Corporate milestones & foundation days",
    cat4i3: "Award nights, seminars & conferences",
    cat4i4: "Homestay gatherings & tourist functions",
    cat4i5: "Daily corporate canteen services",
    ctaWhatsapp:  "WhatsApp",
    footerBase:   "Lamahatta, Darjeeling · West Bengal",
    locDarjeeling:"Darjeeling",
    locKalimpong: "Kalimpong",
    locKurseong:  "Kurseong",
    locSikkim:    "Sikkim",
    locSiliguri:  "Siliguri",
    locHome:      "★ Lamahatta",
  },

  ne: {
    langLabel:    "आफ्नो भाषामा पढ्नुहोस्",
    chefName:     "शेफ पलमन",
    title:        "प्रमुख रसोइया",
    chefSub:      "प्रमुख रसोइया · लामाहाट्टा, दार्जिलिङ",
    credEyebrow:  "उहाँको यात्रा",
    credYears:    "वर्ष",
    navHome:      "गृहपृष्ठ",
    navService:   "सेवा क्षेत्र",
    navChef:      "शेफ पलमन",
    navBook:      "बुक गर्नुहोस्",
    bookEyebrow:  "दार्जिलिङ क्याटरिङ · लामाहाट्टाबाट",
    bookLead:     "हरेक अवसरका लागि प्रिमियम क्याटरिङ — सानो गाउँको भोजदेखि भव्य विवाह समारोहसम्म।",
    eventsTitle:  "हामी के–के गर्छौं",
    cat1Title:    "💍 विवाह र जीवन उत्सव",
    cat1i1: "विवाह — गाउँदेखि लक्जरी गन्तव्यसम्म",
    cat1i2: "संगीत, सगाई र रिसेप्सन",
    cat1i3: "अन्नप्राशन (पहिलो भात खुवाउने संस्कार)",
    cat1i4: "बेबी शावर र नामकरण संस्कार",
    cat1i5: "जन्मदिन र वार्षिकोत्सव",
    cat1i6: "गृहप्रवेश",
    cat2Title:    "🪔 संस्कार र अनुष्ठान",
    cat2i1: "घेवा — २–३ दिनको बौद्ध/तामाङ मृत्यु भोज",
    cat2i2: "श्राद्ध / अन्त्येष्टि — शुद्ध सात्विक (१३ दिन)",
    cat2i3: "दशगात्र (दसौँ दिनको शुद्धि संस्कार)",
    cat2i4: "बन्धारा / मत्स्यमुखी / नियमभङ्ग",
    cat2i5: "एकादश मासिक श्राद्ध (११ महिनामा)",
    cat2i6: "भागवत पुराण पूजा (एक वर्षमा)",
    cat2i7: "धार्मिक पूजा, होम र अन्नदानम",
    cat3Title:    "🌾 स्थानीय चाडपर्व",
    cat3i1: "साकेला / साकेवा (किराँत राई समुदाय)",
    cat3i2: "न्वागी र चासोक तङ्नाम (लिम्बू फसल पर्व)",
    cat3i3: "नामसुङ र नाम्बुन फाट (लेप्चा नयाँ वर्ष)",
    cat3i4: "लोसार (तिब्बती नयाँ वर्ष · भुटिया र शेर्पा)",
    cat3i5: "साग दावा, पाङ ल्हाब्सोल, बुमचु",
    cat3i6: "दसाई (दुर्गापूजा) र तिहार (दीपावली)",
    cat3i7: "बन-भोज — जङ्गल पिकनिक भोज",
    cat4Title:    "🏢 कर्पोरेट र सामुदायिक",
    cat4i1: "सरकारी र कार्यालय उद्घाटन",
    cat4i2: "कर्पोरेट वार्षिकोत्सव",
    cat4i3: "पुरस्कार रात, सेमिनार र सम्मेलन",
    cat4i4: "होमस्टे सभा र पर्यटक कार्यक्रम",
    cat4i5: "दैनिक कर्पोरेट क्यान्टिन सेवा",
    ctaWhatsapp:  "व्हाट्सएप",
    footerBase:   "लामाहाट्टा, दार्जिलिङ · पश्चिम बंगाल",
    locDarjeeling:"दार्जिलिङ",
    locKalimpong: "कालिम्पोङ",
    locKurseong:  "कर्सियाङ",
    locSikkim:    "सिक्किम",
    locSiliguri:  "शिलिगुडी",
    locHome:      "★ लामाहाट्टा",
  },

  bn: {
    langLabel:    "আপনার ভাষায় পড়ুন",
    chefName:     "শেফ পালমান",
    title:        "এক্সিকিউটিভ শেফ",
    chefSub:      "এক্সিকিউটিভ শেফ · লামাহাট্টা, দার্জিলিং",
    credEyebrow:  "তাঁর যাত্রা",
    credYears:    "বছর",
    navHome:      "হোম",
    navService:   "সেবা এলাকা",
    navChef:      "শেফ পালমান",
    navBook:      "বুক করুন",
    bookEyebrow:  "দার্জিলিং ক্যাটারিং · লামাহাট্টা থেকে",
    bookLead:     "প্রতিটি অনুষ্ঠানের জন্য প্রিমিয়াম ক্যাটারিং — ছোট গ্রামের অনুষ্ঠান থেকে বড় বিবাহ পর্যন্ত।",
    eventsTitle:  "আমরা যা পরিবেশন করি",
    cat1Title:    "💍 বিবাহ ও জীবন উৎসব",
    cat1i1: "বিবাহ — গ্রাম থেকে বিলাসবহুল গন্তব্য পর্যন্ত",
    cat1i2: "সঙ্গীত, এনগেজমেন্ট ও রিসেপশন",
    cat1i3: "অন্নপ্রাশন (প্রথম ভাত খাওয়ার অনুষ্ঠান)",
    cat1i4: "বেবি শাওয়ার ও নামকরণ অনুষ্ঠান",
    cat1i5: "জন্মদিন ও বার্ষিকী",
    cat1i6: "গৃহপ্রবেশ",
    cat2Title:    "🪔 আচার ও অনুষ্ঠান",
    cat2i1: "ঘেওয়া — ২–৩ দিনের বৌদ্ধ/তামাং মৃত্যু ভোজ",
    cat2i2: "শ্রাদ্ধ / অন্ত্যেষ্টি — সাত্তিক (১৩ দিন)",
    cat2i3: "দশগাত্র (দশম দিনের শুদ্ধিকরণ)",
    cat2i4: "বান্ধারা / মৎস্যমুখী / নিয়মভঙ্গ",
    cat2i5: "একাদশ মাসিক শ্রাদ্ধ (১১ মাসে)",
    cat2i6: "ভাগবত পুরাণ পূজা (এক বছরে)",
    cat2i7: "ধর্মীয় পূজা, হোম ও অন্নদানম",
    cat3Title:    "🌾 আদিবাসী উৎসব ও ভোজ",
    cat3i1: "সাকেলা / সাকেওয়া (কিরাট রাই সম্প্রদায়)",
    cat3i2: "নওয়াগী ও চাসোক তাংনাম (লিম্বু ফসল উৎসব)",
    cat3i3: "নামসুং ও নাম্বুন ফাট (লেপচা নববর্ষ)",
    cat3i4: "লোসার (তিব্বতী নববর্ষ · ভুটিয়া ও শেরপা)",
    cat3i5: "সাগা দাওয়া, পাং ল্হাবসোল, বুমচু",
    cat3i6: "দশাই (দুর্গাপূজা) ও তিহার (দীপাবলি)",
    cat3i7: "বান-ভোজ — জঙ্গল পিকনিক ভোজ",
    cat4Title:    "🏢 কর্পোরেট ও সামাজিক",
    cat4i1: "সরকারি ও অফিস উদ্বোধন",
    cat4i2: "কর্পোরেট মাইলফলক ও প্রতিষ্ঠাবার্ষিকী",
    cat4i3: "পুরস্কার রাত, সেমিনার ও সম্মেলন",
    cat4i4: "হোমস্টে সমাবেশ ও পর্যটক অনুষ্ঠান",
    cat4i5: "দৈনিক কর্পোরেট ক্যান্টিন সেবা",
    ctaWhatsapp:  "হোয়াটসঅ্যাপ",
    footerBase:   "লামাহাট্টা, দার্জিলিং · পশ্চিমবঙ্গ",
    locDarjeeling:"দার্জিলিং",
    locKalimpong: "কালিম্পং",
    locKurseong:  "কার্শিয়াং",
    locSikkim:    "সিকিম",
    locSiliguri:  "শিলিগুড়ি",
    locHome:      "★ লামাহাট্টা",
  },

  hi: {
    langLabel:    "अपनी भाषा में पढ़ें",
    chefName:     "शेफ पलमन",
    title:        "एग्जीक्यूटिव शेफ",
    chefSub:      "एग्जीक्यूटिव शेफ · लामाहट्टा, दार्जिलिंग",
    credEyebrow:  "उनकी यात्रा",
    credYears:    "वर्ष",
    navHome:      "होम",
    navService:   "सेवा क्षेत्र",
    navChef:      "शेफ पलमन",
    navBook:      "बुक करें",
    bookEyebrow:  "दार्जिलिंग कैटरिंग · लामाहट्टा से",
    bookLead:     "हर मौके के लिए प्रीमियम कैटरिंग — छोटे गाँव के भोज से लेकर शानदार विवाह समारोह तक।",
    eventsTitle:  "हम क्या परोसते हैं",
    cat1Title:    "💍 विवाह और जीवन उत्सव",
    cat1i1: "विवाह — गाँव से लेकर लक्जरी डेस्टिनेशन तक",
    cat1i2: "संगीत, एंगेजमेंट और रिसेप्शन",
    cat1i3: "अन्नप्राशन (पहली बार चावल खिलाने का संस्कार)",
    cat1i4: "बेबी शावर और नामकरण संस्कार",
    cat1i5: "जन्मदिन और सालगिरह",
    cat1i6: "गृहप्रवेश",
    cat2Title:    "🪔 रीति-रिवाज और समारोह",
    cat2i1: "घेवा — २–३ दिन का बौद्ध/तामाङ मृत्यु भोज",
    cat2i2: "श्राद्ध / अंत्येष्टि — शुद्ध सात्विक (१३ दिन)",
    cat2i3: "दशगात्र (दसवें दिन का शुद्धिकरण)",
    cat2i4: "बन्धारा / मत्स्यमुखी / नियमभंग",
    cat2i5: "एकादश मासिक श्राद्ध (११ महीने पर)",
    cat2i6: "भागवत पुराण पूजा (एक वर्ष पर)",
    cat2i7: "धार्मिक पूजा, हवन और अन्नदानम",
    cat3Title:    "🌾 स्थानीय त्यौहार और भोज",
    cat3i1: "साकेला / साकेवा (किरात राई समुदाय)",
    cat3i2: "न्वागी और चासोक ताङ्नाम (लिम्बू फसल उत्सव)",
    cat3i3: "नामसुंग और नाम्बुन फाट (लेप्चा नया साल)",
    cat3i4: "लोसार (तिब्बती नया साल · भूटिया और शेरपा)",
    cat3i5: "साग दावा, पाङ ल्हाब्सोल, बूमचू",
    cat3i6: "दशई (दुर्गापूजा) और तिहार (दीपावली)",
    cat3i7: "बन-भोज — जंगल पिकनिक भोज",
    cat4Title:    "🏢 कॉर्पोरेट और सामुदायिक",
    cat4i1: "सरकारी और कार्यालय उद्घाटन",
    cat4i2: "कॉर्पोरेट वार्षिकोत्सव",
    cat4i3: "पुरस्कार रात, सेमिनार और सम्मेलन",
    cat4i4: "होमस्टे सभाएं और पर्यटक कार्यक्रम",
    cat4i5: "दैनिक कॉर्पोरेट कैंटीन सेवाएं",
    ctaWhatsapp:  "व्हाट्सऐप",
    footerBase:   "लामाहट्टा, दार्जिलिंग · पश्चिम बंगाल",
    locDarjeeling:"दार्जिलिंग",
    locKalimpong: "कालिम्पोंग",
    locKurseong:  "कर्सियांग",
    locSikkim:    "सिक्किम",
    locSiliguri:  "सिलीगुड़ी",
    locHome:      "★ लामाहट्टा",
  },

  dz: {
    langLabel:    "རང་གི་སྐད་ཡིག་ལས་ལོག",
    chefName:     "ཤེཕ་ཕལ་མན",
    title:        "མཐོ་རིམ་མལ་ཤེཕ",
    chefSub:      "མཐོ་རིམ་མལ་ཤེཕ · ལཱ་མཱ་ཧཊ་ཊ, རྡ་རྗི་ལིང",
    credEyebrow:  "ཁོང་གི་ལམ་",
    credYears:    "ལོ",
    navHome:      "གཙོ་ངོས",
    navService:   "ཞབས་ཏོག་ས་ཁོངས",
    navChef:      "ཤེཕ་ཕལ་མན",
    navBook:      "ཐོ་འགོད་དང་འབྲེལ་བ",
    bookEyebrow:  "རྡ་རྗི་ལིང་ཟས་ཞབས་ཏོག · ལཱ་མཱ་ཧཊ་ཊ་ལས",
    bookLead:     "བཀྲ་ཤིས་པའི་དུས་ཚོད་ཀུན་ལུ་མཐོ་རིམ་ཟས་ཞབས་ཏོག — ཡུལ་གྲུ་ཆུང་ལས་གཙང་མ་གཙང་མའི་མདའ་ལུ་བར་མི་འདུ་ཤོག",
    eventsTitle:  "ང་ཚོས་གང་ལུ་ཞབས་ཏོག་སྤྲོད",
    cat1Title:    "💍 གཉེན་སྒྲིག་དང་མི་ཚེའི་དུས་ཚོད",
    cat1i1: "གཉེན་སྒྲིག — གྲོང་སྡེ་ལས་མཐོ་གནས་བར",
    cat1i2: "སངྒིཊ, མཐུན་ལམ་དང་རི་སེབ་ཤིན",
    cat1i3: "འདམ་གྱི་ལྷ་ཁང་",
    cat1i4: "བུ་ཅུང་གི་སྐྱེད་དུས་",
    cat1i5: "གཟེས་ཉིམ་དང་ནལ་སོ་",
    cat1i6: "གྲིབ་མཇུག་གསར་ར",
    cat2Title:    "🪔 ཆོ་ག་དང་གདུང་བ",
    cat2i1: "གེ་ཝ་ — བཀྲ་ཤིས་མི་བཟད་གདུང་བ་(",
    cat2i2: "སྲད་དྷ / མི་བཟད་ — དག་གཙང་ (ཉིན་༡༣)",
    cat2i3: "དས་གཏྲ་ (ཉིན་༡༠ གི་དག་བཅོས)",
    cat2i4: "བཎྜར་ / མཚ་མུཁི / ནིཡམ་བྷང་ག",
    cat2i5: "ཟླ་༡༡ གི་དྲན་ཆོ་ག",
    cat2i6: "ལོ་གཅིག་མ་འགོར་གི་ཆོ་ག",
    cat2i7: "ཆོས་གཞི་གསོལ་འདེབས་དང་ཟས་བདག་",
    cat3Title:    "🌾 རྒྱལ་ཁབ་རིག་གནས་དུས་ཚོད",
    cat3i1: "ས་གེ་ལ་ / ས་གེ་ཝ (ཀི་རཊ་རཱ་ཡི་མི་སྡེ)",
    cat3i2: "ནྲ་བཱགི་དང་ཆཱ་སོཀ་ (ལིམ་བུ་ལོ་འབྲུ་ལ་དུས)",
    cat3i3: "ནཱམ་སུང་ (ལེབ་ཆ་ལོ་གསར)",
    cat3i4: "ལོ་གསར (རྒྱ་གར་ལོ་གསར · བྷུ་ཊི་ཡ་དང་ཤར་པ)",
    cat3i5: "ས་ག་ཟླ་བ, བུམ་ཆུ",
    cat3i6: "ད་སྱི་(དུར་ག་མི་ལྷ་སྲུང) དང་ཏི་ཧར (གངས་དང་མར་མེ་དུས་ཚོད)",
    cat3i7: "བན་བྷོཛ — ནགས་ཚལ་ལས་ཟས་གཟེས",
    cat4Title:    "🏢 ལས་གྲགས་དང་མི་ཚོགས",
    cat4i1: "གཞུང་དང་ལས་ཁུངས་ཀྱི་ཐོ་སྐྱེལ",
    cat4i2: "ལས་གྲགས་ལོ་རྩིས་",
    cat4i3: "གུས་མཆི་མི་ཚན་དང་གྲོས་མོལ",
    cat4i4: "ཁྱིམ་གསོ་དང་དགུན་ལམ",
    cat4i5: "ལས་གྲགས་ཀྱི་ཟས་ཞབས་ཏོག་ཉིན་རེ",
    ctaWhatsapp:  "ཝཱ་ཊས་ཨེབ",
    footerBase:   "ལཱ་མཱ་ཧཊ་ཊ, རྡ་རྗི་ལིང · ནུབ་བཀའ་གཞུང",
    locDarjeeling:"རྡ་རྗི་ལིང",
    locKalimpong: "ཀལིམ་པོང",
    locKurseong:  "ཀར་སི་ཡང",
    locSikkim:    "སིཀིམ",
    locSiliguri:  "སི་ལི་གུ་རི",
    locHome:      "★ ལཱ་མཱ་ཧཊ་ཊ",
  },
};

// ─────────────────────────────────────────────────────
// APPLY TRANSLATIONS
// ─────────────────────────────────────────────────────
let currentLang = 'en';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;

  // Update html lang attr
  document.documentElement.lang = lang;

  // Update every data-i18n element
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Animate-in the translated content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(5px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 280ms ease, transform 280ms ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
}

// ─────────────────────────────────────────────────────
// LANGUAGE PILL (hero)
// ─────────────────────────────────────────────────────
document.querySelectorAll('.hlang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;

    // Update button states
    document.querySelectorAll('.hlang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
      b.setAttribute('aria-selected', String(b.dataset.lang === lang));
    });

    applyLang(lang);
  });
});

// ─────────────────────────────────────────────────────
// GLOBAL NAV
// ─────────────────────────────────────────────────────
const globalNav    = document.getElementById('globalNav');
const navHamburger = document.getElementById('navHamburger');
const navDrawer    = document.getElementById('navDrawer');
const navOverlay   = document.getElementById('navOverlay');
const heroPanel    = document.getElementById('hero');

// Hide/show nav after hero
const heroObs = new IntersectionObserver(
  ([e]) => globalNav.classList.toggle('is-visible', !e.isIntersecting),
  { threshold: 0.3 }
);
heroObs.observe(heroPanel);

// Darken on scroll
window.addEventListener('scroll', () => {
  globalNav.classList.toggle('is-scrolled', window.scrollY > 60);
}, { passive: true });

// Hamburger
const setNavOpen = (open) => {
  document.body.classList.toggle('nav-open', open);
  navHamburger.setAttribute('aria-expanded', String(open));
};
navHamburger.addEventListener('click', () => {
  setNavOpen(navHamburger.getAttribute('aria-expanded') !== 'true');
});
navOverlay.addEventListener('click', () => setNavOpen(false));
navDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setNavOpen(false)));
window.addEventListener('keydown', e => { if (e.key === 'Escape') setNavOpen(false); });

// Active section highlight in nav
const sections = document.querySelectorAll('.panel[id]');
const navLinks = document.querySelectorAll('.nav-drawer a');
const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${id}`;
        link.style.background = active ? 'rgba(224,163,65,0.1)' : '';
        link.style.color      = active ? 'var(--gold-soft)'     : '';
      });
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => sectionObs.observe(s));

// ─────────────────────────────────────────────────────
// REVEAL ANIMATION
// ─────────────────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('[data-reveal]').forEach(n => revealObs.observe(n));

// ─────────────────────────────────────────────────────
// BUTTON RIPPLE
// ─────────────────────────────────────────────────────
if (!document.getElementById('rippleStyle')) {
  const s = document.createElement('style');
  s.id = 'rippleStyle';
  s.textContent = '@keyframes rippleOut{from{transform:scale(0);opacity:1}to{transform:scale(1);opacity:0}}';
  document.head.appendChild(s);
}
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const r    = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.6;
    r.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;background:rgba(255,255,255,0.18);animation:rippleOut 500ms ease forwards`;
    btn.appendChild(r);
    setTimeout(() => r.remove(), 520);
  });
});
