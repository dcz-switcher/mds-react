import e, { useRef as v, useEffect as N } from "react";
const w = ({
  variant: a = "standalone",
  children: s
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--${a}` }, s), M = ({
  title: a = "Item title"
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", className: "mds-collapse mds-collapse__label", "aria-expanded": "false" }, a, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: "mds-collapse__content" }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, /* @__PURE__ */ e.createElement("p", { className: "mds-accordion__desc" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis vel augue gravida placerat. Vivamus tempus, sem at tempor tempus, neque nisl mattis ex, ut dictum libero lectus ut ipsum. Vivamus placerat imperdiet interdum."), /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__section" }, /* @__PURE__ */ e.createElement("p", { className: "mds-accordion__section-title" }, "Question"), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, /* @__PURE__ */ e.createElement("span", null, "Oui")), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, /* @__PURE__ */ e.createElement("span", null, "Non"))))));
function S({
  children: a,
  severity: s = "info",
  title: t,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function H({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: l,
  color: n
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${m}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function P({
  component: a,
  children: s,
  color: t,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: r,
  endIcon: i,
  disabled: d = !1,
  reverse: _ = !1,
  href: o,
  target: E,
  ...h
}) {
  const p = a || "button", f = m ? "mds-full-width" : "", g = _ ? "mds-btn--reverse" : "";
  l == "primary" && t == "conversion" ? l += "-cta" : l == "secondary" && t == "alert" && (l += "-alert");
  let c = {};
  return p == "a" ? (c.role = "button", c.href = o, c.target = E || "_self", c.tabindex = "0") : p == "div" ? (c.role = "button", c.tabindex = "0") : c = { ...h, opts: c }, d && (p == "a" || p == "div" ? c["aria-disabled"] = "true" : c.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ...c,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${f} ${g}`
    },
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--left`, "aria-hidden": "true" }) : null,
    s,
    i ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }) : null
  );
}
function T({
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
const V = ({
  upTitle: a,
  title: s = "Title",
  subTitle: t = "Content",
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), y = {
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
  color: s,
  size: t = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + $[t] : "mds-icon--" + y[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${m} ${s ? "mds-color__" + s : ""} ` });
}, x = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, B = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: l = !1,
  href: n = "#",
  target: m = "_self",
  startIcon: r,
  endIcon: i
}) => {
  const d = `mds-link ${x[s]} ${t ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, href: n, target: m }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), a, i && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }));
}, F = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), k = {
  small: "small",
  medium: "medium",
  large: "big"
}, R = ({
  titleIcon: a,
  children: s,
  open: t = !1,
  onClose: l,
  size: n = "medium",
  title: m = "Title",
  hideCloseButton: r = !1,
  footer: i
}) => {
  const d = v(null);
  let _;
  const o = () => {
    l && l();
  }, E = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), o());
  }, h = (u) => {
    u.target.classList.contains("mds-dialog") && o();
  };
  return N(() => (r || (_ = d.current.querySelector("button.mds-close"), _.addEventListener("click", o)), d.current.addEventListener("click", h), () => {
    r || _.removeEventListener("click", o), d.current.removeEventListener("click", h);
  }), []), N(() => (t === !0 ? (document.addEventListener("keydown", E), d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", E);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${k[n]}`, role: "document" }, !r && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, a && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${a}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, m)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" }), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, s), i && /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, i))));
}, b = {
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
function D({
  children: a,
  variant: s = "body1",
  component: t,
  align: l = "left",
  underlineColor: n = "",
  framed: m = !1
}) {
  const i = t || C[s], d = s == "underline" && n ? b[s] + "--" + n : b[s];
  return /* @__PURE__ */ e.createElement(i, { className: `${d} ${m ? "mds-framed" : ""}`, style: { textAlign: l } }, m ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  w as Accordion,
  M as AccordionItem,
  S as Alert,
  H as Badge,
  P as Button,
  T as CardCompactV,
  z as ChipsItem,
  A as ChipsList,
  V as Hero,
  q as Icon,
  B as Link,
  F as Play,
  R as SidePanel,
  D as Typography
};
//# sourceMappingURL=index.es.js.map
