import e, { useRef as f, useEffect as E } from "react";
const S = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), L = ({
  title: a = "Item title",
  children: s,
  defaultExpanded: t = !1,
  expanded: n = t,
  expandIcon: l = "expand-more"
}) => {
  const [m, d] = e.useState(0), [r, i] = e.useState(n), o = f(null), u = () => o && o.current ? o.current.querySelector(".mds-accordion__body").offsetHeight : 0, p = () => {
    i(!r);
  };
  return E(() => (d(r ? u() : 0), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: o, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: p, className: `mds-collapse mds-collapse__label ${r ? "active" : ""}`, "aria-expanded": r }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${r ? "active" : ""}`, style: { maxHeight: m } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function M({
  children: a,
  severity: s = "info",
  title: t,
  icon: n = "info",
  onClose: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), l && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function P({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: n,
  color: l
}) {
  const m = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function w({
  component: a,
  children: s,
  color: t,
  variant: n = "primary",
  size: l = "medium",
  fullWidth: m = !1,
  startIcon: d,
  endIcon: r,
  disabled: i = !1,
  reverse: o = !1,
  href: u,
  target: p,
  ...N
}) {
  const _ = a || "button", b = m ? "mds-full-width" : "", g = o ? "mds-btn--reverse" : "";
  n == "primary" && t == "conversion" ? n += "-cta" : n == "secondary" && t == "alert" && (n += "-alert");
  let c = {};
  return _ == "a" ? (c.role = "button", c.href = u, c.target = p || "_self", c.tabindex = "0") : _ == "div" ? (c.role = "button", c.tabindex = "0") : c = { ...N, opts: c }, i && (_ == "a" || _ == "div" ? c["aria-disabled"] = "true" : c.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...c,
      className: `mds-btn mds-btn--${n} mds-btn--${l} ${b} ${g}`
    },
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--left`, "aria-hidden": "true" }) : null,
    s,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function F({
  title: a = "title",
  icon: s = "auto",
  href: t = "#",
  target: n = "_self",
  role: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: n }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function z({
  label: a,
  active: s = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, a));
}
function A({
  children: a,
  reverse: s = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const T = ({
  upTitle: a,
  title: s = "Title",
  subTitle: t = "Content",
  heroActions: n,
  image: l
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), n && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, n)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${l}`, alt: "" }))), y = {
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
  color: s,
  size: t = "medium",
  baseClassName: n = "icon"
}) => {
  const l = "mds-" + n + "__", m = n == "picto" ? "mds-picto--" + v[t] : "mds-icon--" + y[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${l}${a} ${m} ${s ? "mds-color__" + s : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, B = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: n = !1,
  href: l = "#",
  target: m = "_self",
  startIcon: d,
  endIcon: r
}) => {
  const i = `mds-link ${$[s]} ${t ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: l, target: m }, d && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, I = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), x = {
  small: "small",
  medium: "medium",
  large: "big"
}, R = ({
  children: a,
  open: s = !1,
  onClose: t,
  size: n = "medium",
  showCloseButton: l = !1
}) => {
  const m = f(null);
  let d;
  const r = () => {
    t && t();
  }, i = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), r());
  }, o = (u) => {
    u.target.classList.contains("mds-dialog") && r();
  };
  return E(() => (l && (d = m.current.querySelector("button.mds-close"), d.addEventListener("click", r)), m.current.addEventListener("click", o), () => {
    l && d.removeEventListener("click", r), m.current.removeEventListener("click", o);
  }), []), E(() => (s === !0 ? (document.addEventListener("keydown", i), m.current.showModal()) : m.current.close(), () => {
    document.removeEventListener("keydown", i);
  }), [s]), /* @__PURE__ */ e.createElement("dialog", { ref: m, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${x[n]}`, role: "document" }, l && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, D = ({
  title: a,
  icon: s
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), K = ({
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
  variant: s = "body1",
  component: t,
  align: n = "left",
  underlineColor: l = "",
  framed: m = !1
}) {
  const r = t || C[s], i = s == "underline" && l ? h[s] + "--" + l : h[s];
  return /* @__PURE__ */ e.createElement(r, { className: `${i} ${m ? "mds-framed" : ""}`, style: { textAlign: n } }, m ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  S as Accordion,
  L as AccordionItem,
  M as Alert,
  P as Badge,
  w as Button,
  F as CardCompactV,
  z as ChipsItem,
  A as ChipsList,
  T as Hero,
  q as Icon,
  B as Link,
  I as Play,
  R as SidePanel,
  K as SidePanelContent,
  V as SidePanelFooter,
  D as SidePanelHeader,
  W as Typography
};
//# sourceMappingURL=index.es.js.map
