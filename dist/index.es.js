import e, { useRef as y, useEffect as $, Children as f, cloneElement as M } from "react";
const D = ({
  children: s,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, s), R = ({
  id: s,
  title: a = "Item title",
  children: t,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: m = "expand-more",
  className: c
}) => {
  const [_, d] = e.useState(0), [i, o] = e.useState(r), u = y(null), b = () => u && u.current ? u.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    o(!i), n && s && n(s);
  };
  return $(() => (d(i ? b() : 0), () => {
  }), [i]), $(() => (o(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: u, id: s, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${i ? "active" : ""}`, "aria-expanded": i }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${i ? "active" : ""}`, style: { maxHeight: _ } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, t)));
};
function V({
  children: s,
  severity: a = "info",
  title: t,
  icon: l = "info",
  onClose: n,
  className: r
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, s)));
}
function K({
  label: s,
  size: a = "small",
  severity: t = "neutral",
  icon: l,
  color: n,
  className: r
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${t} ${m} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, s));
}
const W = ({
  children: s,
  className: a,
  ...t
}) => /* @__PURE__ */ e.createElement("div", { className: a, ...t }, s), w = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, C = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, j = ({
  children: s,
  variant: a = "body2",
  underline: t = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: m = "link",
  className: c,
  ..._
}) => {
  const d = `mds-link ${w[a]} ${t ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + C[m]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ..._ }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), s, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, G = ({
  children: s,
  color: a = "link",
  reverse: t = !1,
  className: l
}) => {
  const n = t ? "color-white" : C[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(s, (r) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${n}` }, r))));
};
function J({
  component: s,
  children: a,
  color: t,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: c,
  disabled: _ = !1,
  reverse: d = !1,
  href: i,
  target: o,
  className: u,
  ...b
}) {
  const p = s || "button", N = r ? "mds-full-width" : "", k = d ? "mds-btn--reverse" : "";
  l == "primary" && t == "conversion" ? l += "-cta" : l == "secondary" && t == "alert" && (l += "-alert");
  let E = {};
  return p == "a" ? (E.role = "button", E.href = i, E.target = o || "_self", E.tabIndex = "0") : p == "div" ? (E.role = "button", E.tabIndex = "0") : E = { ...b, opts: E }, _ && (p == "a" || p == "div" ? E["aria-disabled"] = "true" : E.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ...E,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${N} ${k} ${u}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
const O = ({
  title: s,
  subtitle: a,
  children: t,
  color: l = "color-grey--5",
  icon: n,
  className: r
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${r}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, s, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), t), Q = ({
  children: s
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, s), U = ({
  children: s,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${a}` }, s), g = {
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
}, H = {
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
}, L = {
  primary: "color-macif--1",
  text: ""
};
function x({
  children: s,
  variant: a = "body2",
  component: t,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: m,
  className: c,
  ..._
}) {
  const i = t || H[a], o = a == "underline" && n ? g[a] + "--" + n : g[a], u = !r && a.substring(0, 1) != "h" && m ? "mds-color__" + L[m] : "";
  return /* @__PURE__ */ e.createElement(i, { className: `${o} ${r ? "mds-framed" : ""} ${u} ${c}`, style: { textAlign: l }, ..._ }, r ? /* @__PURE__ */ e.createElement("span", null, s) : s);
}
const I = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, X = ({
  variant: s = "basic1",
  title: a,
  titleLevel: t = "h3",
  subTitle: l,
  cardMedia: n,
  cardHeader: r,
  children: m,
  className: c,
  ..._
}) => {
  const d = "mds-card " + I[s];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${c}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(x, { className: "mds-card__title", variant: "h3", component: t }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ..._ }, a)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", s == "modulable" ? m : ""), s == "modulable" && r ? r : "", n);
};
function Y({
  title: s = "title",
  icon: a = "auto",
  href: t = "#",
  target: l = "_self",
  role: n,
  className: r
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${r}`, role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: l }, s))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function Z({
  label: s,
  active: a = !1,
  onClick: t,
  className: l
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, s));
}
function ee({
  children: s,
  reverse: a = !1,
  size: t = "big",
  className: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, s));
}
const S = {
  thin: "basic",
  heavy: "module"
}, P = ({
  component: s = "hr",
  variant: a = "thin",
  reverse: t = !1,
  className: l,
  ...n
}) => {
  const r = s;
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${S[a]} ${t ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, ae = ({
  upTitle: s,
  title: a = "Title",
  subTitle: t = "Content",
  heroActions: l,
  image: n,
  className: r
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, s && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, s), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), T = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, F = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, B = ({
  children: s = "person",
  color: a,
  size: t = "medium",
  baseClassName: l = "icon",
  className: n
}) => {
  const r = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + F[t] : "mds-icon--" + T[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${s} ${m} ${a ? "mds-color__" + a : ""} ${n} ` });
}, se = ({
  icon: s,
  label: a,
  reverse: t = !1,
  size: l = "medium",
  variant: n = "primary",
  className: r,
  ...m
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${t ? "mds-btn--reverse" : ""} ${r} `, ...m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${s}`, "aria-hidden": "true" })), te = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), q = ({
  id: s,
  title: a,
  icon: t,
  visuallyHidden: l = !1,
  className: n
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, t && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${t}--left` }), /* @__PURE__ */ e.createElement("h1", { id: s, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(P, null)), z = {
  small: "small",
  medium: "medium",
  large: "big"
}, le = ({
  children: s,
  open: a = !1,
  onClose: t,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: m = !1,
  showCloseButton: c = !1,
  className: _
}) => {
  const d = y(null), i = e.useId();
  let o;
  const u = () => {
    t && t();
  }, b = (p) => {
    p.key === "Escape" && (p.preventDefault(), p.stopImmediatePropagation(), u());
  }, h = (p) => {
    p.target.classList.contains("mds-dialog") && u();
  };
  return $(() => (c && (o = d.current.querySelector("button.mds-close"), o.addEventListener("click", u)), d.current.addEventListener("click", h), () => {
    c && o.removeEventListener("click", u);
    try {
      d.current.removeEventListener("click", h);
    } catch {
    }
  }), []), $(() => (a === !0 ? (document.addEventListener("keydown", b), d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", b);
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${_}`, "aria-modal": "true", "aria-labelledby": i }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${z[l]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(q, { title: n, icon: r, visuallyHidden: m, id: i }), s)));
}, ne = ({
  children: s,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, s), re = ({
  children: s,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, s), me = ({
  children: s,
  title: a = "Summary",
  className: t
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${t}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(x, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(s, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, ce = ({
  reverse: s = !1,
  children: a,
  className: t
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${s ? "mds-tabs--reverse" : ""} ${t}` }, a), de = ({
  children: s,
  ariaLabel: a,
  className: t
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: t }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(s, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, M(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), ie = ({
  label: s,
  icon: a,
  ariaCurrent: t = !1,
  className: l
}) => {
  const n = a ? /* @__PURE__ */ e.createElement(B, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": t }, n, s);
}, oe = ({
  children: s,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, f.map(s, (t, l) => l == 1 ? e.cloneElement(t, { hidden: !0 }) : t)), ue = ({
  children: s,
  hidden: a = !1,
  className: t
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${t}`, hidden: a }, s), v = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, pe = ({
  endAdornment: s,
  error: a = !1,
  errorText: t,
  fullWidth: l = !1,
  id: n,
  label: r,
  optionalText: m = "facultatif",
  required: c = !1,
  reverse: _ = !1,
  supportingText: d,
  startIcon: i,
  type: o = "text",
  className: u,
  ...b
}) => {
  const h = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), p = v[o] || v.text, N = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${_ ? "mds-input-group--reverse" : ""} ${u}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, r, " ", h, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${i ? "mds-wrapper--icon-left" : ""}` }, i ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${i}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${p}`, id: n, type: o, "aria-required": c, "aria-invalid": a, "aria-describedby": a && t ? N : "", ...b }), o === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : s ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", s, " ") : ""), a && t ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: N }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), t) : "");
}, _e = ({
  id: s,
  label: a,
  checked: t = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1,
  className: m
}) => {
  const c = s || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: c, checked: t, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  D as Accordion,
  R as AccordionItem,
  V as Alert,
  K as Badge,
  W as Box,
  G as Breadcrumb,
  J as Button,
  O as Callout,
  Q as CalloutAction,
  U as CalloutContent,
  X as Card,
  Y as CardCompactV,
  X as CardHeader,
  X as CardMedia,
  Z as ChipsItem,
  ee as ChipsList,
  P as Divider,
  ae as Hero,
  B as Icon,
  se as IconButton,
  j as Link,
  te as Play,
  le as SidePanel,
  ne as SidePanelContent,
  re as SidePanelFooter,
  q as SidePanelHeader,
  me as Summary,
  ie as Tab,
  de as TabList,
  ue as TabPanel,
  oe as TabPanelList,
  ce as Tabs,
  pe as TextField,
  _e as Toggle,
  x as Typography
};
//# sourceMappingURL=index.es.js.map
