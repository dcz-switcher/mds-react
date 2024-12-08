import e, { useRef as g, useEffect as E } from "react";
const S = ({
  variant: a = "standalone",
  children: s
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--${a}` }, s), M = ({
  title: a = "Item title"
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", className: "mds-collapse mds-collapse__label", "aria-expanded": "false" }, a, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: "mds-collapse__content" }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, /* @__PURE__ */ e.createElement("p", { className: "mds-accordion__desc" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis vel augue gravida placerat. Vivamus tempus, sem at tempor tempus, neque nisl mattis ex, ut dictum libero lectus ut ipsum. Vivamus placerat imperdiet interdum."), /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__section" }, /* @__PURE__ */ e.createElement("p", { className: "mds-accordion__section-title" }, "Question"), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, /* @__PURE__ */ e.createElement("span", null, "Oui")), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, /* @__PURE__ */ e.createElement("span", null, "Non"))))));
function P({
  children: a,
  severity: s = "info",
  title: t,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function w({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: l,
  color: n
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${m}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function H({
  component: a,
  children: s,
  color: t,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: c,
  endIcon: r,
  disabled: i = !1,
  reverse: p = !1,
  href: o,
  target: _,
  ...N
}) {
  const u = a || "button", b = m ? "mds-full-width" : "", f = p ? "mds-btn--reverse" : "";
  l == "primary" && t == "conversion" ? l += "-cta" : l == "secondary" && t == "alert" && (l += "-alert");
  let d = {};
  return u == "a" ? (d.role = "button", d.href = o, d.target = _ || "_self", d.tabindex = "0") : u == "div" ? (d.role = "button", d.tabindex = "0") : d = { ...N, opts: d }, i && (u == "a" || u == "div" ? d["aria-disabled"] = "true" : d.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    u,
    {
      ...d,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${b} ${f}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    s,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function F({
  title: a = "title",
  icon: s = "auto",
  href: t = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
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
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), v = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, y = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, V = ({
  children: a = "person",
  color: s,
  size: t = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + y[t] : "mds-icon--" + v[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${m} ${s ? "mds-color__" + s : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, q = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: l = !1,
  href: n = "#",
  target: m = "_self",
  startIcon: c,
  endIcon: r
}) => {
  const i = `mds-link ${$[s]} ${t ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: n, target: m }, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, B = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), x = {
  small: "small",
  medium: "medium",
  large: "big"
}, R = ({
  children: a,
  open: s = !1,
  onClose: t,
  size: l = "medium",
  showCloseButton: n = !1
}) => {
  const m = g(null);
  let c;
  const r = () => {
    t && t();
  }, i = (o) => {
    o.key === "Escape" && (o.preventDefault(), o.stopImmediatePropagation(), r());
  }, p = (o) => {
    o.target.classList.contains("mds-dialog") && r();
  };
  return E(() => (n && (c = m.current.querySelector("button.mds-close"), c.addEventListener("click", r)), m.current.addEventListener("click", p), () => {
    n && c.removeEventListener("click", r), m.current.removeEventListener("click", p);
  }), []), E(() => (s === !0 ? (document.addEventListener("keydown", i), m.current.showModal()) : m.current.close(), () => {
    document.removeEventListener("keydown", i);
  }), [s]), /* @__PURE__ */ e.createElement("dialog", { ref: m, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${x[l]}`, role: "document" }, n && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, D = ({
  title: a,
  icon: s
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), I = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, a), K = ({
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
function O({
  children: a,
  variant: s = "body1",
  component: t,
  align: l = "left",
  underlineColor: n = "",
  framed: m = !1
}) {
  const r = t || C[s], i = s == "underline" && n ? h[s] + "--" + n : h[s];
  return /* @__PURE__ */ e.createElement(r, { className: `${i} ${m ? "mds-framed" : ""}`, style: { textAlign: l } }, m ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  S as Accordion,
  M as AccordionItem,
  P as Alert,
  w as Badge,
  H as Button,
  F as CardCompactV,
  z as ChipsItem,
  A as ChipsList,
  T as Hero,
  V as Icon,
  q as Link,
  B as Play,
  R as SidePanel,
  I as SidePanelContent,
  K as SidePanelFooter,
  D as SidePanelHeader,
  O as Typography
};
//# sourceMappingURL=index.es.js.map
