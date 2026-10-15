// Shared helpers. Build DOM with textContent / DOM APIs only — never innerHTML with
// user- or database-sourced strings.

/** Create an element: el("a", { href, class: "x" }, "text" | Node | [children]) */
export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === false || value == null) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else node.setAttribute(key, value === true ? "" : String(value));
  }
  for (const child of [].concat(children)) {
    if (child == null || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

/** Only http(s) and mailto URLs are allowed to become links. */
export function isSafeUrl(value) {
  try {
    const url = new URL(value, window.location.origin);
    return ["http:", "https:", "mailto:"].includes(url.protocol);
  } catch {
    return false;
  }
}

/** Returns attributes for a link; external links open safely in a new tab. */
export function linkAttrs(href) {
  if (!isSafeUrl(href)) return { href: "#", "aria-disabled": "true" };
  const external = /^https?:/i.test(href) && new URL(href).origin !== window.location.origin;
  return external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };
}

/** Current path without trailing slash or .html, for nav highlighting. */
export function currentPath() {
  const p = window.location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  return p.length > 1 ? p.replace(/\/$/, "") : p;
}
