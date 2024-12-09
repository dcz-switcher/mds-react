import e, { useRef as b, useEffect as E } from "react";
const S = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), L = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: n = !1,
  onChange: l,
  expanded: m = n,
  expandIcon: d = "expand-more"
}) => {
  const [r, u] = e.useState(0), [c, o] = e.useState(m), p = b(null), h = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, f = () => {
    o(!c), l && a && l(a);
  };
  return E(() => (u(c ? h() : 0), () => {
  }), [c]), E(() => (o(m), () => {
  }), [m]), /* @__PURE__ */ e.createElement("div", { ref: p, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: f, className: `mds-collapse mds-collapse__label ${c ? "active" : ""}`, "aria-expanded": c }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${c ? "active" : ""}`, style: { maxHeight: r } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function M({
  children: a,
  severity: t = "info",
  title: s,
  icon: n = "info",
  onClose: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), l && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function P({
  label: a,
  size: t = "small",
  severity: s = "neutral",
  icon: n,
  color: l
}) {
  const m = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${t} mds-badge--${s} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function w({
  component: a,
  children: t,
  color: s,
  variant: n = "primary",
  size: l = "medium",
  fullWidth: m = !1,
  startIcon: d,
  endIcon: r,
  disabled: u = !1,
  reverse: c = !1,
  href: o,
  target: p,
  ...h
}) {
  const _ = a || "button", g = m ? "mds-full-width" : "", y = c ? "mds-btn--reverse" : "";
  n == "primary" && s == "conversion" ? n += "-cta" : n == "secondary" && s == "alert" && (n += "-alert");
  let i = {};
  return _ == "a" ? (i.role = "button", i.href = o, i.target = p || "_self", i.tabindex = "0") : _ == "div" ? (i.role = "button", i.tabindex = "0") : i = { ...h, opts: i }, u && (_ == "a" || _ == "div" ? i["aria-disabled"] = "true" : i.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...i,
      className: `mds-btn mds-btn--${n} mds-btn--${l} ${g} ${y}`
    },
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--left`, "aria-hidden": "true" }) : null,
    t,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function F({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: n = "_self",
  role: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: n }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
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
  heroActions: n,
  image: l
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), n && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, n)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${l}`, alt: "" }))), v = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, $ = {
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
  baseClassName: n = "icon"
}) => {
  const l = "mds-" + n + "__", m = n == "picto" ? "mds-picto--" + $[s] : "mds-icon--" + v[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${l}${a} ${m} ${t ? "mds-color__" + t : ""} ` });
}, x = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, B = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: n = !1,
  startIcon: l,
  endIcon: m,
  ...d
}) => {
  const r = `mds-link ${x[t]} ${s ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: r, ...d }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}--right`, "aria-hidden": "true" }), a, m && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }));
}, I = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), C = {
  small: "small",
  medium: "medium",
  large: "big"
}, R = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: n = "medium",
  showCloseButton: l = !1
}) => {
  const m = b(null);
  let d;
  const r = () => {
    s && s();
  }, u = (o) => {
    o.key === "Escape" && (o.preventDefault(), o.stopImmediatePropagation(), r());
  }, c = (o) => {
    o.target.classList.contains("mds-dialog") && r();
  };
  return E(() => (l && (d = m.current.querySelector("button.mds-close"), d.addEventListener("click", r)), m.current.addEventListener("click", c), () => {
    l && d.removeEventListener("click", r), m.current.removeEventListener("click", c);
  }), []), E(() => (t === !0 ? (document.addEventListener("keydown", u), m.current.showModal()) : m.current.close(), () => {
    document.removeEventListener("keydown", u);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: m, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${C[n]}`, role: "document" }, l && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, D = ({
  title: a,
  icon: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, t && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${t}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), K = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, a), V = ({
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
}, k = {
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
  align: n = "left",
  underlineColor: l = "",
  framed: m = !1
}) {
  const r = s || k[t], u = t == "underline" && l ? N[t] + "--" + l : N[t];
  return /* @__PURE__ */ e.createElement(r, { className: `${u} ${m ? "mds-framed" : ""}`, style: { textAlign: n } }, m ? /* @__PURE__ */ e.createElement("span", null, a) : a);
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
