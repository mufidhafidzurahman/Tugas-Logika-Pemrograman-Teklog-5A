// Home page behavior: social links in the hero (from config) + hero image fallback.
import "./navigation.js";
import { SITE } from "./config.js";
import { el, linkAttrs } from "./utils.js";
import { t } from "./i18n.js";

function renderHeroSocial() {
  const slot = document.getElementById("hero-social");
  if (!slot) return;
  const items = [
    ["social.linkedin", SITE.social.linkedin],
    ["social.instagram", SITE.social.instagram],
    ["social.email", `mailto:${SITE.email}`],
  ];
  slot.replaceChildren(
    ...items.map(([key, href]) =>
      el("li", {}, [el("a", { ...linkAttrs(href), class: "social-link", "data-i18n": key, text: t(key) })])
    )
  );
}

function setupHeroImageFallback() {
  const img = document.getElementById("hero-img");
  const frame = document.getElementById("hero-media");
  if (!img || !frame) return;
  img.addEventListener("error", () => {
    frame.classList.add("media--placeholder");
    frame.replaceChildren(el("span", { text: "Mufid Hafidzurahman" }));
  }, { once: true });
}

renderHeroSocial();
setupHeroImageFallback();
