// Public site configuration.
// Phase 0: static values. From Phase 3 these come from the `site_settings` table.
// Only PUBLIC values belong here — never secrets, service-role keys or passwords.

export const SITE = {
  name: "Mufid Hafidzurahman",
  defaultLang: "id",
  supportedLangs: ["id", "en"],
  email: "mufid.hafidzurahman@upi.edu", // approved by owner for public display
  social: {
    linkedin: "https://www.linkedin.com/in/mufid-hafidzurahman",
    instagram: "https://www.instagram.com/hafidz759/", // tracking params removed
  },
  // Replaced by an admin-managed resource in Phase 3.
  cvUrl: null, // Pending: owner decides between a public Drive link or a Storage file
  heroImage: {
    webp: "/assets/images/hero-mufid.webp",
    jpg: "/assets/images/hero-mufid.jpg",
  },
};

// Supabase connection (public URL + publishable/anon key only; filled in Phase 2/3).
export const SUPABASE = {
  url: "", // e.g. https://YOUR-PROJECT-REF.supabase.co
  publishableKey: "",
};
