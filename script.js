const copy = {
  en: {
    brandSubtitle: "Executive Chef",
    navHome: "Home",
    navAbout: "About",
    navService: "Service",
    navDetails: "Details",
    menuWhatsapp: "WhatsApp",
    homeChip: "01 / Home",
    aboutChip: "02 / About",
    serviceChip: "03 / Service area",
    detailsChip: "04 / Details",
    heroKicker: "Darjeeling",
    heroSubtitle: "Executive Chef and premium catering service",
    heroButton: "Open details",
    detailsLabel: "About Me",
    detailsTitle: "Worked in top hotels and restaurants in Bengaluru, Karnataka",
    detailsBody:
      "Now living in Lamahatta, Darjeeling with his lovely family and serving locally with top quality food through catering service.",
    serviceAreaLabel: "Service area",
    serviceAreaValue: "Darjeeling, Kalimpong, Kurseong, Sikkim, Siliguri",
    contactLabel: "Contact",
    whatsappButton: "WhatsApp",
    callButton: "Call"
  },
  ne: {
    brandSubtitle: "कार्यकारी शेफ",
    navHome: "गृह",
    navAbout: "परिचय",
    navService: "सेवा",
    navDetails: "विवरण",
    menuWhatsapp: "व्हाट्सएप",
    homeChip: "०१ / गृह",
    aboutChip: "०२ / परिचय",
    serviceChip: "०३ / सेवा क्षेत्र",
    detailsChip: "०४ / विवरण",
    heroKicker: "दार्जिलिङ",
    heroSubtitle: "कार्यकारी शेफ र प्रिमियम केटरिङ सेवा",
    heroButton: "विवरण खोल्नुहोस्",
    detailsLabel: "मेरो बारेमा",
    detailsTitle: "कर्नाटकको बेङ्गलुरुका उत्कृष्ट होटल र रेस्टुरेन्टमा काम गरेको अनुभव",
    detailsBody:
      "अहिले उहाँ परिवारसँग लामाहट्टा, दार्जिलिङमा बस्नुहुन्छ र स्थानीय रूपमा उत्कृष्ट गुणस्तरको खाना सहित केटरिङ सेवा प्रदान गर्नुहुन्छ।",
    serviceAreaLabel: "सेवा क्षेत्र",
    serviceAreaValue: "दार्जिलिङ, कालिम्पोङ, कुर्सेओङ, सिक्किम, सिलिगुडी",
    contactLabel: "सम्पर्क",
    whatsappButton: "व्हाट्सएप",
    callButton: "कल"
  },
  bn: {
    brandSubtitle: "এক্সিকিউটিভ শেফ",
    navHome: "হোম",
    navAbout: "পরিচিতি",
    navService: "সার্ভিস",
    navDetails: "বিস্তারিত",
    menuWhatsapp: "হোয়াটসঅ্যাপ",
    homeChip: "০১ / হোম",
    aboutChip: "০২ / পরিচিতি",
    serviceChip: "০৩ / সার্ভিস এরিয়া",
    detailsChip: "০৪ / বিস্তারিত",
    heroKicker: "দার্জিলিং",
    heroSubtitle: "এক্সিকিউটিভ শেফ এবং প্রিমিয়াম ক্যাটারিং সার্ভিস",
    heroButton: "বিস্তারিত খুলুন",
    detailsLabel: "আমার পরিচয়",
    detailsTitle: "কর্ণাটকের বেঙ্গালুরুর শীর্ষ হোটেল ও রেস্তোরাঁয় কাজের অভিজ্ঞতা",
    detailsBody:
      "এখন তিনি পরিবারসহ লামাহাট্টা, দার্জিলিং-এ থাকেন এবং স্থানীয়ভাবে উৎকৃষ্ট মানের খাবারসহ ক্যাটারিং সার্ভিস দিচ্ছেন।",
    serviceAreaLabel: "সার্ভিস এরিয়া",
    serviceAreaValue: "দার্জিলিং, কালিম্পং, কার্শিয়াং, সিকিম, শিলিগুড়ি",
    contactLabel: "যোগাযোগ",
    whatsappButton: "হোয়াটসঅ্যাপ",
    callButton: "কল"
  },
  bh: {
    brandSubtitle: "Executive Chef",
    navHome: "Home",
    navAbout: "About",
    navService: "Service",
    navDetails: "Details",
    menuWhatsapp: "WhatsApp",
    homeChip: "01 / Home",
    aboutChip: "02 / About",
    serviceChip: "03 / Service area",
    detailsChip: "04 / Details",
    heroKicker: "Darjeeling",
    heroSubtitle: "Executive Chef and premium catering service",
    heroButton: "Open details",
    detailsLabel: "About Me",
    detailsTitle: "Worked in top hotels and restaurants in Bengaluru, Karnataka",
    detailsBody:
      "Now living in Lamahatta, Darjeeling with his lovely family and serving locally with top quality food through catering service.",
    serviceAreaLabel: "Service area",
    serviceAreaValue: "Darjeeling, Kalimpong, Kurseong, Sikkim, Siliguri",
    contactLabel: "Contact",
    whatsappButton: "WhatsApp",
    callButton: "Call"
  }
};

const textNodes = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-pill");
const menuButton = document.getElementById("menuButton");
const topbar = document.getElementById("topbar");
const pageDots = document.querySelectorAll(".page-dot");
const pageSections = document.querySelectorAll(".page");

let activeLang = localStorage.getItem("palman-language") || "en";

const applyLanguage = (lang) => {
  activeLang = copy[lang] ? lang : "en";
  const dictionary = copy[activeLang];

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === activeLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = activeLang === "bh" ? "en" : activeLang;
  localStorage.setItem("palman-language", activeLang);
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const setMenuOpen = (open) => {
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
};

menuButton.addEventListener("click", () => {
  const nextState = menuButton.getAttribute("aria-expanded") !== "true";
  setMenuOpen(nextState);
});

document.querySelectorAll(".menu-panel a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener(
  "scroll",
  () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  },
  { passive: true }
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));

const pageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.dataset.page;
      pageDots.forEach((dot) => {
        dot.classList.toggle("is-active", dot.dataset.page === id);
      });
    });
  },
  { threshold: 0.55 }
);

pageSections.forEach((section) => pageObserver.observe(section));

applyLanguage(activeLang);
