import e, { useRef as b, useEffect as g, Children as v } from "react";
const T = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), F = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: c = "expand-more"
}) => {
  const [i, m] = e.useState(0), [d, E] = e.useState(r), o = b(null), _ = () => o && o.current ? o.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    E(!d), n && a && n(a);
  };
  return g(() => (m(d ? _() : 0), () => {
  }), [d]), g(() => (E(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: o, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${d ? "active" : ""}`, "aria-expanded": d }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${d ? "active" : ""}`, style: { maxHeight: i } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function A({
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
}, y = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, B = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: c = "link",
  ...i
}) => {
  const m = `mds-link ${x[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + y[c]}`;
  return /* @__PURE__ */ e.createElement("a", { className: m, ...i }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, q = ({
  children: a,
  color: t = "link",
  reverse: s = !1
}) => {
  const l = s ? "color-white" : y[t];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, v.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function D({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: i,
  disabled: m = !1,
  reverse: d = !1,
  href: E,
  target: o,
  ..._
}) {
  const u = a || "button", f = r ? "mds-full-width" : "", $ = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let p = {};
  return u == "a" ? (p.role = "button", p.href = E, p.target = o || "_self", p.tabindex = "0") : u == "div" ? (p.role = "button", p.tabindex = "0") : p = { ..._, opts: p }, m && (u == "a" || u == "div" ? p["aria-disabled"] = "true" : p.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    u,
    {
      ...p,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${f} ${$}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    t,
    i ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }) : null
  );
}
const R = ({
  title: a,
  subtitle: t,
  children: s,
  color: l = "color-grey--5",
  icon: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, a, t && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, t)), s), K = ({
  children: a
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, a), V = ({
  children: a
}) => /* @__PURE__ */ e.createElement("p", { className: "mds-callout__desc" }, a);
function W({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function j({
  label: a,
  active: t = !1,
  onClick: s
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function G({
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
}, J = ({
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
}, O = ({
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + S[s] : "mds-icon--" + H[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${t ? "mds-color__" + t : ""} ` });
}, Q = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), L = ({
  id: a,
  title: t,
  icon: s,
  visuallyHidden: l = !1
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: a, className: "mds-modal__title" }, t)), /* @__PURE__ */ e.createElement(k, null)), M = {
  small: "small",
  medium: "medium",
  large: "big"
}, U = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: c = !1,
  showCloseButton: i = !1
}) => {
  const m = b(null), d = e.useId();
  let E;
  const o = () => {
    s && s();
  }, _ = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), o());
  }, h = (u) => {
    u.target.classList.contains("mds-dialog") && o();
  };
  return g(() => (i && (E = m.current.querySelector("button.mds-close"), E.addEventListener("click", o)), m.current.addEventListener("click", h), () => {
    i && E.removeEventListener("click", o), m.current.removeEventListener("click", h);
  }), []), g(() => (t === !0 ? (document.addEventListener("keydown", _), m.current.showModal()) : m.current.close(), () => {
    document.removeEventListener("keydown", _);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: m, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-modal": "true", "aria-labelledby": d }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${M[l]}`, role: "document" }, i && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(L, { title: n, icon: r, visuallyHidden: c, id: d }), a)));
}, X = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content", role: "document" }, a), Y = ({
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
};
function w({
  children: a,
  variant: t = "body1",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  ...c
}) {
  const m = s || I[t], d = t == "underline" && n ? N[t] + "--" + n : N[t];
  return /* @__PURE__ */ e.createElement(m, { className: `${d} ${r ? "mds-framed" : ""}`, style: { textAlign: l }, ...c }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
const Z = ({
  children: a,
  title: t = "Summary"
}) => {
  const s = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-summary", role: "navigation", "aria-labelledby": s }, /* @__PURE__ */ e.createElement(w, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: s }, t), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, v.map(a, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
}, ee = ({
  id: a,
  label: t,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1
}) => {
  const c = a || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: c, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t)));
};
export {
  T as Accordion,
  F as AccordionItem,
  A as Alert,
  z as Badge,
  q as Breadcrumb,
  D as Button,
  R as Callout,
  K as CalloutAction,
  V as CalloutContent,
  W as CardCompactV,
  j as ChipsItem,
  G as ChipsList,
  k as Divider,
  J as Hero,
  O as Icon,
  B as Link,
  Q as Play,
  U as SidePanel,
  X as SidePanelContent,
  Y as SidePanelFooter,
  L as SidePanelHeader,
  Z as Summary,
  ee as Toggle,
  w as Typography
};
//# sourceMappingURL=index.es.js.map
