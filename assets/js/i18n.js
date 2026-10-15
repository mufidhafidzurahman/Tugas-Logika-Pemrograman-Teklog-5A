// Lightweight UI i18n (ID/EN). Content (projects, articles) gets its own *_id / *_en
// fallback logic in Phase 1+; this module covers UI labels only.
import { SITE } from "./config.js";

const STORAGE_KEY = "lang";

export const dict = {
  id: {
    "skip": "Lewati ke konten utama",
    "nav.home": "Beranda",
    "nav.projects": "Proyek",
    "nav.insights": "Wawasan",
    "nav.about": "Tentang",
    "nav.resources": "Sumber Daya",
    "nav.contact": "Kontak",
    "nav.lab": "Lab",
    "nav.menu": "Menu",
    "nav.primary": "Navigasi utama",
    "lang.label": "Pilih bahasa",
    "hero.eyebrow": "Teknik Logistik · Universitas Pendidikan Indonesia",
    "hero.title": "Analitik rantai pasok dan logistik untuk negara kepulauan.",
    "hero.intro": "Mahasiswa Teknik Logistik yang mengembangkan kompetensi analisis rantai pasok berbasis data dan logistik internasional melalui proyek akademik, riset, dan pengalaman organisasi. Fokus saya: bagaimana logistik menghubungkan wilayah dan memperluas akses ekonomi di Indonesia.",
    "hero.photoAlt": "Mufid Hafidzurahman berfoto di kampus Universitas Pendidikan Indonesia dengan almamater merah.",
    "cta.explore": "Jelajahi Proyek",
    "cta.connect": "Hubungi Saya",
    "cta.cv": "Unduh CV",
    "cta.viewAll": "Lihat Semua Proyek",
    "pillars.eyebrow": "Bidang Kompetensi",
    "pillars.title": "Empat pilar yang sedang saya kembangkan",
    "pillars.lead": "Dua pilar utama menjadi fokus belajar dan riset saat ini; dua lainnya mendukung.",
    "pillars.primary": "Pilar utama",
    "pillars.supporting": "Pilar pendukung",
    "pillar.1.title": "Supply Chain Analytics & Demand Forecasting",
    "pillar.1.body": "Analisis berbasis data untuk memahami dan memperkirakan pergerakan rantai pasok.",
    "pillar.2.title": "Freight Forwarding, Ekspor–Impor & Logistik Internasional",
    "pillar.2.body": "Dokumen pengapalan, alur perdagangan lintas negara, dan rantai logistik internasional.",
    "pillar.3.title": "Logistik Pertambangan, Energi & Industri",
    "pillar.3.body": "Logistik komoditas dan energi, termasuk rantai pasok sumber energi alternatif.",
    "pillar.4.title": "Rantai Pasok Berkelanjutan & Riset Terapan",
    "pillar.4.body": "Riset terapan yang menghubungkan efisiensi logistik dengan keberlanjutan.",
    "footer.tagline": "Portofolio profesional dan Logistics Innovation Lab.",
    "footer.navigate": "Navigasi",
    "footer.connect": "Terhubung",
    "footer.privacy": "Kebijakan Privasi",
    "footer.rights": "Seluruh hak cipta dilindungi.",
    "social.linkedin": "LinkedIn",
    "social.instagram": "Instagram",
    "social.email": "Email",
    "stub.eyebrow": "Dalam pengembangan",
    "stub.title": "Halaman ini dibangun pada Phase 1",
    "stub.body": "Fondasi desain sudah siap. Konten halaman ini akan diisi setelah tahap fondasi ditinjau.",
    "stub.back": "Kembali ke Beranda",
    "state.loading": "Memuat…",
    "state.empty": "Belum ada data untuk ditampilkan.",
    "state.error": "Terjadi kesalahan. Silakan coba lagi.",
    "fallback.notice": "Terjemahan belum tersedia; menampilkan versi bahasa lain.",
  },
  en: {
    "skip": "Skip to main content",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.insights": "Insights",
    "nav.about": "About",
    "nav.resources": "Resources",
    "nav.contact": "Contact",
    "nav.lab": "Lab",
    "nav.menu": "Menu",
    "nav.primary": "Primary navigation",
    "lang.label": "Choose language",
    "hero.eyebrow": "Logistics Engineering · Indonesia University of Education",
    "hero.title": "Supply chain analytics and logistics for an archipelago economy.",
    "hero.intro": "A Logistics Engineering student building skills in data-driven supply chain analysis and international logistics through academic projects, research, and organizational experience. My focus: how logistics connects regions and widens economic access across Indonesia.",
    "hero.photoAlt": "Mufid Hafidzurahman on the Universitas Pendidikan Indonesia campus, wearing the red university blazer.",
    "cta.explore": "Explore Projects",
    "cta.connect": "Connect With Me",
    "cta.cv": "Download CV",
    "cta.viewAll": "View All Projects",
    "pillars.eyebrow": "Areas of Competence",
    "pillars.title": "Four pillars I am developing",
    "pillars.lead": "Two primary pillars drive my current study and research; the other two support them.",
    "pillars.primary": "Primary pillar",
    "pillars.supporting": "Supporting pillar",
    "pillar.1.title": "Supply Chain Analytics & Demand Forecasting",
    "pillar.1.body": "Data-driven analysis to understand and anticipate supply chain movement.",
    "pillar.2.title": "Freight Forwarding, Export–Import & International Logistics",
    "pillar.2.body": "Freight documents, cross-border trade flows, and international logistics chains.",
    "pillar.3.title": "Mining, Energy & Industrial Logistics",
    "pillar.3.body": "Commodity and energy logistics, including supply chains for alternative energy sources.",
    "pillar.4.title": "Sustainable Supply Chain & Applied Research",
    "pillar.4.body": "Applied research linking logistics efficiency with sustainability.",
    "footer.tagline": "Professional portfolio and Logistics Innovation Lab.",
    "footer.navigate": "Navigate",
    "footer.connect": "Connect",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "All rights reserved.",
    "social.linkedin": "LinkedIn",
    "social.instagram": "Instagram",
    "social.email": "Email",
    "stub.eyebrow": "In development",
    "stub.title": "This page is built in Phase 1",
    "stub.body": "The design foundation is ready. This page's content will be added after the foundation is reviewed.",
    "stub.back": "Back to Home",
    "state.loading": "Loading…",
    "state.empty": "Nothing to show yet.",
    "state.error": "Something went wrong. Please try again.",
    "fallback.notice": "Translation not available yet; showing the other language.",
  },
};

export function getLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SITE.supportedLangs.includes(stored)) return stored;
  } catch { /* storage unavailable: fall through */ }
  return SITE.defaultLang;
}

export function t(key, lang = getLang()) {
  return dict[lang]?.[key] ?? dict[SITE.defaultLang][key] ?? key;
}

/** Apply translations to [data-i18n], [data-i18n-alt], [data-i18n-label]. textContent only. */
export function applyTranslations(root = document, lang = getLang()) {
  document.documentElement.lang = lang;
  root.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n, lang);
  });
  root.querySelectorAll("[data-i18n-alt]").forEach((node) => {
    node.setAttribute("alt", t(node.dataset.i18nAlt, lang));
  });
  root.querySelectorAll("[data-i18n-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nLabel, lang));
  });
}

/** Switch language in place, keeping the current page and scroll position. */
export function setLang(lang) {
  if (!SITE.supportedLangs.includes(lang)) return;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  applyTranslations(document, lang);
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
