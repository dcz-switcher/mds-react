import e, { useRef as f, useEffect as b, Children as y } from "react";
const F = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), A = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: m = "expand-more"
}) => {
  const [i, c] = e.useState(0), [o, _] = e.useState(r), d = f(null), E = () => d && d.current ? d.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    _(!o), n && a && n(a);
  };
  return b(() => (c(o ? E() : 0), () => {
  }), [o]), b(() => (_(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: d, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${o ? "active" : ""}`, "aria-expanded": o }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${o ? "active" : ""}`, style: { maxHeight: i } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function B({
  children: a,
  severity: t = "info",
  title: s,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function z({
  label: a,
  size: t = "small",
  severity: s = "neutral",
  icon: l,
  color: n
}) {
  const r = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${t} mds-badge--${s} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
const x = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, v = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, q = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: m = "link",
  ...i
}) => {
  const c = `mds-link ${x[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + v[m]}`;
  return /* @__PURE__ */ e.createElement("a", { className: c, ...i }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, D = ({
  children: a,
  color: t = "link",
  reverse: s = !1
}) => {
  const l = s ? "color-white" : v[t];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, y.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function R({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: i,
  disabled: c = !1,
  reverse: o = !1,
  href: _,
  target: d,
  ...E
}) {
  const u = a || "button", g = r ? "mds-full-width" : "", $ = o ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let p = {};
  return u == "a" ? (p.role = "button", p.href = _, p.target = d || "_self", p.tabindex = "0") : u == "div" ? (p.role = "button", p.tabindex = "0") : p = { ...E, opts: p }, c && (u == "a" || u == "div" ? p["aria-disabled"] = "true" : p.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    u,
    {
      ...p,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${g} ${$}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    t,
    i ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }) : null
  );
}
const K = ({
  title: a,
  subtitle: t,
  children: s,
  color: l = "color-grey--5",
  icon: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, a, t && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, t)), s), V = ({
  children: a
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, a), W = ({
  children: a
}) => /* @__PURE__ */ e.createElement("p", { className: "mds-callout__desc" }, a);
function j({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function G({
  label: a,
  active: t = !1,
  onClick: s
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function J({
  children: a,
  reverse: t = !1,
  size: s = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${t == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const C = {
  thin: "basic",
  heavy: "module"
}, k = ({
  component: a = "hr",
  variant: t = "thin",
  reverse: s = !1,
  ...l
}) => {
  const n = a;
  return /* @__PURE__ */ e.createElement(n, { className: `mds-divider mds-divider--${C[t]} ${s ? "mds-divider--reverse" : ""}`, "aria-hidden": "true", ...l });
}, O = ({
  upTitle: a,
  title: t = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), H = {
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
}, Q = ({
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + S[s] : "mds-icon--" + H[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${t ? "mds-color__" + t : ""} ` });
}, U = ({
  icon: a,
  label: t,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  ...r
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""}`, ...r }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${a}`, "aria-hidden": "true" })), X = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), M = ({
  id: a,
  title: t,
  icon: s,
  visuallyHidden: l = !1
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: a, className: "mds-modal__title" }, t)), /* @__PURE__ */ e.createElement(k, null)), L = {
  small: "small",
  medium: "medium",
  large: "big"
}, Y = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: m = !1,
  showCloseButton: i = !1
}) => {
  const c = f(null), o = e.useId();
  let _;
  const d = () => {
    s && s();
  }, E = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), d());
  }, h = (u) => {
    u.target.classList.contains("mds-dialog") && d();
  };
  return b(() => (i && (_ = c.current.querySelector("button.mds-close"), _.addEventListener("click", d)), c.current.addEventListener("click", h), () => {
    i && _.removeEventListener("click", d), c.current.removeEventListener("click", h);
  }), []), b(() => (t === !0 ? (document.addEventListener("keydown", E), c.current.showModal()) : c.current.close(), () => {
    document.removeEventListener("keydown", E);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: c, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-modal": "true", "aria-labelledby": o }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${L[l]}`, role: "document" }, i && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(M, { title: n, icon: r, visuallyHidden: m, id: o }), a)));
}, Z = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content", role: "document" }, a), ee = ({
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
}, I = {
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
}, w = {
  primary: "color-macif--1",
  text: ""
};
function P({
  children: a,
  variant: t = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: m,
  ...i
}) {
  const o = s || I[t], _ = t == "underline" && n ? N[t] + "--" + n : N[t], d = !r && t.substring(0, 1) != "h" && m ? "mds-color__" + w[m] : "";
  return /* @__PURE__ */ e.createElement(o, { className: `${_} ${r ? "mds-framed" : ""} ${d} `, style: { textAlign: l }, ...i }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
const ae = ({
  children: a,
  title: t = "Summary"
}) => {
  const s = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-summary", role: "navigation", "aria-labelledby": s }, /* @__PURE__ */ e.createElement(P, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: s }, t), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, y.map(a, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
}, te = ({
  id: a,
  label: t,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1
}) => {
  const m = a || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: m, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t)));
};
export {
  F as Accordion,
  A as AccordionItem,
  B as Alert,
  z as Badge,
  D as Breadcrumb,
  R as Button,
  K as Callout,
  V as CalloutAction,
  W as CalloutContent,
  j as CardCompactV,
  G as ChipsItem,
  J as ChipsList,
  k as Divider,
  O as Hero,
  Q as Icon,
  U as IconButton,
  q as Link,
  X as Play,
  Y as SidePanel,
  Z as SidePanelContent,
  ee as SidePanelFooter,
  M as SidePanelHeader,
  ae as Summary,
  te as Toggle,
  P as Typography
};
//# sourceMappingURL=index.es.js.map
