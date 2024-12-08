import e, { useRef as f, useEffect as E } from "react";
const L = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), S = ({
  title: a = "Item title",
  children: t,
  expanded: s = !1,
  expandIcon: l = "expand-more"
}) => {
  const [n, m] = e.useState(0), r = f(null), c = () => r && r.current ? r.current.querySelector(".mds-accordion__body").offsetHeight : 0;
  return E(() => (m(s ? c() : 0), () => {
  }), [s]), /* @__PURE__ */ e.createElement("div", { ref: r, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", className: `mds-collapse mds-collapse__label ${s ? "active" : ""}`, "aria-expanded": s }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${s ? "active" : ""}`, style: { maxHeight: n } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, t)));
};
function M({
  children: a,
  severity: t = "info",
  title: s,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function P({
  label: a,
  size: t = "small",
  severity: s = "neutral",
  icon: l,
  color: n
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${t} mds-badge--${s} ${m}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function w({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: r,
  endIcon: c,
  disabled: i = !1,
  reverse: p = !1,
  href: o,
  target: _,
  ...N
}) {
  const u = a || "button", b = m ? "mds-full-width" : "", g = p ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let d = {};
  return u == "a" ? (d.role = "button", d.href = o, d.target = _ || "_self", d.tabindex = "0") : u == "div" ? (d.role = "button", d.tabindex = "0") : d = { ...N, opts: d }, i && (u == "a" || u == "div" ? d["aria-disabled"] = "true" : d.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    u,
    {
      ...d,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${b} ${g}`
    },
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--left`, "aria-hidden": "true" }) : null,
    t,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
function F({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function z({
  label: a,
  active: t = !1,
  onClick: s
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function A({
  children: a,
  reverse: t = !1,
  size: s = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${t == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const T = ({
  upTitle: a,
  title: t = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), y = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, v = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, q = ({
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + v[s] : "mds-icon--" + y[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${m} ${t ? "mds-color__" + t : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, B = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  href: n = "#",
  target: m = "_self",
  startIcon: r,
  endIcon: c
}) => {
  const i = `mds-link ${$[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: n, target: m }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), a, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, R = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), x = {
  small: "small",
  medium: "medium",
  large: "big"
}, D = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  showCloseButton: n = !1
}) => {
  const m = f(null);
  let r;
  const c = () => {
    s && s();
  }, i = (o) => {
    o.key === "Escape" && (o.preventDefault(), o.stopImmediatePropagation(), c());
  }, p = (o) => {
    o.target.classList.contains("mds-dialog") && c();
  };
  return E(() => (n && (r = m.current.querySelector("button.mds-close"), r.addEventListener("click", c)), m.current.addEventListener("click", p), () => {
    n && r.removeEventListener("click", c), m.current.removeEventListener("click", p);
  }), []), E(() => (t === !0 ? (document.addEventListener("keydown", i), m.current.showModal()) : m.current.close(), () => {
    document.removeEventListener("keydown", i);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: m, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${x[l]}`, role: "document" }, n && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, I = ({
  title: a,
  icon: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, t && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${t}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), K = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, a), V = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, a), h = {
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
}, C = {
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
function W({
  children: a,
  variant: t = "body1",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: m = !1
}) {
  const c = s || C[t], i = t == "underline" && n ? h[t] + "--" + n : h[t];
  return /* @__PURE__ */ e.createElement(c, { className: `${i} ${m ? "mds-framed" : ""}`, style: { textAlign: l } }, m ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  L as Accordion,
  S as AccordionItem,
  M as Alert,
  P as Badge,
  w as Button,
  F as CardCompactV,
  z as ChipsItem,
  A as ChipsList,
  T as Hero,
  q as Icon,
  B as Link,
  R as Play,
  D as SidePanel,
  K as SidePanelContent,
  V as SidePanelFooter,
  I as SidePanelHeader,
  W as Typography
};
//# sourceMappingURL=index.es.js.map
