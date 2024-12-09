import e, { useRef as b, useEffect as E, Children as $ } from "react";
const M = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), P = ({
  id: a,
  title: s = "Item title",
  children: t,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: c = "expand-more"
}) => {
  const [d, o] = e.useState(0), [m, u] = e.useState(r), p = b(null), h = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, f = () => {
    u(!m), n && a && n(a);
  };
  return E(() => (o(m ? h() : 0), () => {
  }), [m]), E(() => (u(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: p, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: f, className: `mds-collapse mds-collapse__label ${m ? "active" : ""}`, "aria-expanded": m }, s, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${m ? "active" : ""}`, style: { maxHeight: d } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, t)));
};
function w({
  children: a,
  severity: s = "info",
  title: t,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function F({
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
}, g = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, z = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: c = "link",
  ...d
}) => {
  const o = `mds-link ${x[s]} ${t ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + g[c]}`;
  return /* @__PURE__ */ e.createElement("a", { className: o, ...d }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, A = ({
  children: a,
  color: s = "link",
  reverse: t = !1
}) => {
  const l = t ? "color-white" : g[s];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, $.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function B({
  component: a,
  children: s,
  color: t,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: d,
  disabled: o = !1,
  reverse: m = !1,
  href: u,
  target: p,
  ...h
}) {
  const _ = a || "button", y = r ? "mds-full-width" : "", v = m ? "mds-btn--reverse" : "";
  l == "primary" && t == "conversion" ? l += "-cta" : l == "secondary" && t == "alert" && (l += "-alert");
  let i = {};
  return _ == "a" ? (i.role = "button", i.href = u, i.target = p || "_self", i.tabindex = "0") : _ == "div" ? (i.role = "button", i.tabindex = "0") : i = { ...h, opts: i }, o && (_ == "a" || _ == "div" ? i["aria-disabled"] = "true" : i.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...i,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${y} ${v}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    s,
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }) : null
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
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), C = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, k = {
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
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + k[t] : "mds-icon--" + C[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${s ? "mds-color__" + s : ""} ` });
}, K = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), H = {
  small: "small",
  medium: "medium",
  large: "big"
}, V = ({
  children: a,
  open: s = !1,
  onClose: t,
  size: l = "medium",
  showCloseButton: n = !1
}) => {
  const r = b(null);
  let c;
  const d = () => {
    t && t();
  }, o = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), d());
  }, m = (u) => {
    u.target.classList.contains("mds-dialog") && d();
  };
  return E(() => (n && (c = r.current.querySelector("button.mds-close"), c.addEventListener("click", d)), r.current.addEventListener("click", m), () => {
    n && c.removeEventListener("click", d), r.current.removeEventListener("click", m);
  }), []), E(() => (s === !0 ? (document.addEventListener("keydown", o), r.current.showModal()) : r.current.close(), () => {
    document.removeEventListener("keydown", o);
  }), [s]), /* @__PURE__ */ e.createElement("dialog", { ref: r, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${H[l]}`, role: "document" }, n && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, W = ({
  title: a,
  icon: s
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), j = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, a), G = ({
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
}, L = {
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
function J({
  children: a,
  variant: s = "body1",
  component: t,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  ...c
}) {
  const o = t || L[s], m = s == "underline" && n ? N[s] + "--" + n : N[s];
  return /* @__PURE__ */ e.createElement(o, { className: `${m} ${r ? "mds-framed" : ""}`, style: { textAlign: l }, ...c }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  M as Accordion,
  P as AccordionItem,
  w as Alert,
  F as Badge,
  A as Breadcrumb,
  B as Button,
  T as CardCompactV,
  q as ChipsItem,
  I as ChipsList,
  R as Hero,
  D as Icon,
  z as Link,
  K as Play,
  V as SidePanel,
  j as SidePanelContent,
  G as SidePanelFooter,
  W as SidePanelHeader,
  J as Typography
};
//# sourceMappingURL=index.es.js.map
