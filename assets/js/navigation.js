// Shared header + footer, rendered with DOM APIs. Imported by every page.
import { SITE } from "./config.js";
import { el, linkAttrs, currentPath } from "./utils.js";
import { applyTranslations, getLang, setLang, t } from "./i18n.js";

const NAV_ITEMS = [
  ["/", "nav.home"],
  ["/projects", "nav.projects"],
  ["/insights", "nav.insights"],
  ["/about", "nav.about"],
  ["/lab", "nav.lab"],
  ["/resources", "nav.resources"],
  ["/contact", "nav.contact"],
];

function i18nText(tag, key, attrs = {}) {
  return el(tag, { ...attrs, "data-i18n": key, text: t(key) });
}

function buildLangSwitch() {
  const wrap = el("div", { class: "lang-switch", role: "group", "data-i18n-label": "lang.label", "aria-label": t("lang.label") });
  const buttons = SITE.supportedLangs.map((code) =>
    el("button", {
      type: "button",
      class: "lang-switch__btn",
      lang: code,
      text: code.toUpperCase(),
      "aria-pressed": String(getLang() === code),
      onclick: () => setLang(code),
    })
  );
  wrap.append(...buttons);
  document.addEventListener("langchange", (e) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.lang === e.detail.lang)));
  });
  return wrap;
}

function buildHeader() {
  const path = currentPath();
  const navId = "site-nav";

  const toggle = el("button", {
    type: "button",
    class: "menu-toggle",
    "aria-expanded": "false",
    "aria-controls": navId,
    "data-i18n": "nav.menu",
    text: t("nav.menu"),
  });

  const list = el(
    "ul",
    { class: "site-nav__list" },
    NAV_ITEMS.map(([href, key]) =>
      el("li", {}, [
        el("a", {
          class: "site-nav__link",
          href,
          "data-i18n": key,
          "aria-current": path === href || (href !== "/" && path.startsWith(href + "/")) ? "page" : false,
          text: t(key),
        }),
      ])
    )
  );

  const nav = el("nav", { class: "site-nav", id: navId, "data-i18n-label": "nav.primary", "aria-label": t("nav.primary") }, [
    list,
    buildLangSwitch(),
  ]);

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  return el("header", { class: "site-header" }, [
    el("div", { class: "container site-header__inner" }, [
      el("a", { class: "wordmark", href: "/", text: SITE.name }),
      toggle,
      nav,
    ]),
  ]);
}

function socialItem(key, href, label) {
  return el("li", {}, [el("a", { ...linkAttrs(href), class: "social-link", "data-i18n": key, text: label })]);
}

function buildFooter() {
  const connect = el("ul", { class: "social-list" }, [
    socialItem("social.linkedin", SITE.social.linkedin, t("social.linkedin")),
    socialItem("social.instagram", SITE.social.instagram, t("social.instagram")),
    socialItem("social.email", `mailto:${SITE.email}`, t("social.email")),
  ]);

  const navLinks = el(
    "ul",
    {},
    NAV_ITEMS.map(([href, key]) => el("li", {}, [el("a", { href, "data-i18n": key, text: t(key) })]))
  );

  return el("footer", { class: "site-footer" }, [
    el("div", { class: "container" }, [
      el("div", { class: "site-footer__grid" }, [
        el("div", {}, [
          el("p", { class: "wordmark", style: "color:#fff", text: SITE.name }),
          i18nText("p", "footer.tagline"),
        ]),
        el("div", {}, [i18nText("h2", "footer.navigate"), navLinks]),
        el("div", {}, [i18nText("h2", "footer.connect"), connect]),
      ]),
      el("div", { class: "site-footer__legal" }, [
        el("span", { text: `© ${new Date().getFullYear()} ${SITE.name}. ` }),
        i18nText("span", "footer.rights"),
        el("span", { text: " · " }),
        el("a", { href: "/privacy", "data-i18n": "footer.privacy", text: t("footer.privacy") }),
      ]),
    ]),
  ]);
}

function init() {
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.replaceWith(buildHeader());
  if (footerSlot) footerSlot.replaceWith(buildFooter());
  applyTranslations(document, getLang());
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
