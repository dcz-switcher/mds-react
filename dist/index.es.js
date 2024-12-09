import e, { useRef as N, useEffect as E, Children as v } from "react";
const P = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), w = ({
  id: a,
  title: s = "Item title",
  children: t,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: c = "expand-more"
}) => {
  const [m, d] = e.useState(0), [o, u] = e.useState(r), p = N(null), h = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, f = () => {
    u(!o), n && a && n(a);
  };
  return E(() => (d(o ? h() : 0), () => {
  }), [o]), E(() => (u(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: p, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: f, className: `mds-collapse mds-collapse__label ${o ? "active" : ""}`, "aria-expanded": o }, s, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${o ? "active" : ""}`, style: { maxHeight: m } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, t)));
};
function F({
  children: a,
  severity: s = "info",
  title: t,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function z({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: l,
  color: n
}) {
  const r = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
const $ = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, A = ({
  children: a,
  color: s = "link",
  reverse: t = !1
}) => {
  const l = t ? "color-white" : $[s];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, v.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function B({
  component: a,
  children: s,
  color: t,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: m,
  disabled: d = !1,
  reverse: o = !1,
  href: u,
  target: p,
  ...h
}) {
  const _ = a || "button", g = r ? "mds-full-width" : "", y = o ? "mds-btn--reverse" : "";
  l == "primary" && t == "conversion" ? l += "-cta" : l == "secondary" && t == "alert" && (l += "-alert");
  let i = {};
  return _ == "a" ? (i.role = "button", i.href = u, i.target = p || "_self", i.tabindex = "0") : _ == "div" ? (i.role = "button", i.tabindex = "0") : i = { ...h, opts: i }, d && (_ == "a" || _ == "div" ? i["aria-disabled"] = "true" : i.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...i,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${g} ${y}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    s,
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }) : null
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
function q({
  label: a,
  active: s = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, a));
}
function I({
  children: a,
  reverse: s = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const R = ({
  upTitle: a,
  title: s = "Title",
  subTitle: t = "Content",
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), x = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, C = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, D = ({
  children: a = "person",
  color: s,
  size: t = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + C[t] : "mds-icon--" + x[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${s ? "mds-color__" + s : ""} ` });
}, k = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, H = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, K = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: c = "link",
  ...m
}) => {
  const d = `mds-link ${k[s]} ${t ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + H[c]}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...m }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, V = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), M = {
  small: "small",
  medium: "medium",
  large: "big"
}, W = ({
  children: a,
  open: s = !1,
  onClose: t,
  size: l = "medium",
  showCloseButton: n = !1
}) => {
  const r = N(null);
  let c;
  const m = () => {
    t && t();
  }, d = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), m());
  }, o = (u) => {
    u.target.classList.contains("mds-dialog") && m();
  };
  return E(() => (n && (c = r.current.querySelector("button.mds-close"), c.addEventListener("click", m)), r.current.addEventListener("click", o), () => {
    n && c.removeEventListener("click", m), r.current.removeEventListener("click", o);
  }), []), E(() => (s === !0 ? (document.addEventListener("keydown", d), r.current.showModal()) : r.current.close(), () => {
    document.removeEventListener("keydown", d);
  }), [s]), /* @__PURE__ */ e.createElement("dialog", { ref: r, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${M[l]}`, role: "document" }, n && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, j = ({
  title: a,
  icon: s
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), G = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, a), J = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, a), b = {
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
}, S = {
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
  framed: r = !1
}) {
  const m = t || S[s], d = s == "underline" && n ? b[s] + "--" + n : b[s];
  return /* @__PURE__ */ e.createElement(m, { className: `${d} ${r ? "mds-framed" : ""}`, style: { textAlign: l } }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  P as Accordion,
  w as AccordionItem,
  F as Alert,
  z as Badge,
  A as Breadcrumb,
  B as Button,
  T as CardCompactV,
  q as ChipsItem,
  I as ChipsList,
  R as Hero,
  D as Icon,
  K as Link,
  V as Play,
  W as SidePanel,
  G as SidePanelContent,
  J as SidePanelFooter,
  j as SidePanelHeader,
  O as Typography
};
//# sourceMappingURL=index.es.js.map
