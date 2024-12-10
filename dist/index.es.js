import e, { useRef as g, useEffect as f, Children as v } from "react";
const T = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), z = ({
  id: a,
  title: s = "Item title",
  children: t,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: p = "expand-more"
}) => {
  const [i, m] = e.useState(0), [c, E] = e.useState(r), d = g(null), _ = () => d && d.current ? d.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    E(!c), n && a && n(a);
  };
  return f(() => (m(c ? _() : 0), () => {
  }), [c]), f(() => (E(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: d, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${c ? "active" : ""}`, "aria-expanded": c }, s, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${p}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${c ? "active" : ""}`, style: { maxHeight: i } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, t)));
};
function A({
  children: a,
  severity: s = "info",
  title: t,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function B({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: l,
  color: n
}) {
  const r = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
const x = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, y = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, F = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: p = "link",
  ...i
}) => {
  const m = `mds-link ${x[s]} ${t ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + y[p]}`;
  return /* @__PURE__ */ e.createElement("a", { className: m, ...i }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, q = ({
  children: a,
  color: s = "link",
  reverse: t = !1
}) => {
  const l = t ? "color-white" : y[s];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, v.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function D({
  component: a,
  children: s,
  color: t,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: p,
  endIcon: i,
  disabled: m = !1,
  reverse: c = !1,
  href: E,
  target: d,
  ..._
}) {
  const o = a || "button", b = r ? "mds-full-width" : "", $ = c ? "mds-btn--reverse" : "";
  l == "primary" && t == "conversion" ? l += "-cta" : l == "secondary" && t == "alert" && (l += "-alert");
  let u = {};
  return o == "a" ? (u.role = "button", u.href = E, u.target = d || "_self", u.tabindex = "0") : o == "div" ? (u.role = "button", u.tabindex = "0") : u = { ..._, opts: u }, m && (o == "a" || o == "div" ? u["aria-disabled"] = "true" : u.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    o,
    {
      ...u,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${b} ${$}`
    },
    p ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${p}--left`, "aria-hidden": "true" }) : null,
    s,
    i ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }) : null
  );
}
function R({
  title: a = "title",
  icon: s = "auto",
  href: t = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function K({
  label: a,
  active: s = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, a));
}
function V({
  children: a,
  reverse: s = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const C = {
  thin: "basic",
  heavy: "module"
}, k = ({
  component: a = "hr",
  variant: s = "thin",
  reverse: t = !1,
  ...l
}) => {
  const n = a;
  return /* @__PURE__ */ e.createElement(n, { className: `mds-divider mds-divider--${C[s]} ${t ? "mds-divider--reverse" : ""}`, "aria-hidden": "true", ...l });
}, W = ({
  upTitle: a,
  title: s = "Title",
  subTitle: t = "Content",
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), H = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, S = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, j = ({
  children: a = "person",
  color: s,
  size: t = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + S[t] : "mds-icon--" + H[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${s ? "mds-color__" + s : ""} ` });
}, G = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), L = ({
  id: a,
  title: s,
  icon: t,
  visuallyHidden: l = !1
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, t && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${t}--left` }), /* @__PURE__ */ e.createElement("h1", { id: a, className: "mds-modal__title" }, s)), /* @__PURE__ */ e.createElement(k, null)), M = {
  small: "small",
  medium: "medium",
  large: "big"
}, J = ({
  children: a,
  open: s = !1,
  onClose: t,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: p = !1,
  showCloseButton: i = !1
}) => {
  const m = g(null), c = e.useId();
  let E;
  const d = () => {
    t && t();
  }, _ = (o) => {
    o.key === "Escape" && (o.preventDefault(), o.stopImmediatePropagation(), d());
  }, h = (o) => {
    o.target.classList.contains("mds-dialog") && d();
  };
  return f(() => (i && (E = m.current.querySelector("button.mds-close"), E.addEventListener("click", d)), m.current.addEventListener("click", h), () => {
    i && E.removeEventListener("click", d), m.current.removeEventListener("click", h);
  }), []), f(() => (s === !0 ? (document.addEventListener("keydown", _), m.current.showModal()) : m.current.close(), () => {
    document.removeEventListener("keydown", _);
  }), [s]), /* @__PURE__ */ e.createElement("dialog", { ref: m, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-modal": "true", "aria-labelledby": c }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${M[l]}`, role: "document" }, i && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(L, { title: n, icon: r, visuallyHidden: p, id: c }), a)));
}, O = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content", role: "document" }, a), Q = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, a), N = {
  h1: "mds-h1",
  h2: "mds-h2",
  h3: "mds-h3",
  h4: "mds-h4",
  h5: "mds-h5",
  h6: "mds-h6",
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4",
  underline: "mds-underline"
}, P = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p",
  underline: "span"
};
function w({
  children: a,
  variant: s = "body1",
  component: t,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  ...p
}) {
  const m = t || P[s], c = s == "underline" && n ? N[s] + "--" + n : N[s];
  return /* @__PURE__ */ e.createElement(m, { className: `${c} ${r ? "mds-framed" : ""}`, style: { textAlign: l }, ...p }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
const U = ({
  children: a,
  title: s = "Summary"
}) => {
  const t = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-summary", role: "navigation", "aria-labelledby": t }, /* @__PURE__ */ e.createElement(w, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: t }, s), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, v.map(a, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
};
export {
  T as Accordion,
  z as AccordionItem,
  A as Alert,
  B as Badge,
  q as Breadcrumb,
  D as Button,
  R as CardCompactV,
  K as ChipsItem,
  V as ChipsList,
  k as Divider,
  W as Hero,
  j as Icon,
  F as Link,
  G as Play,
  J as SidePanel,
  O as SidePanelContent,
  Q as SidePanelFooter,
  L as SidePanelHeader,
  U as Summary,
  w as Typography
};
//# sourceMappingURL=index.es.js.map
