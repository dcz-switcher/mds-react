import e, { useRef as y, useEffect as $, Children as f, cloneElement as k } from "react";
const A = ({
  children: t,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), D = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: m = "expand-more",
  className: c
}) => {
  const [E, d] = e.useState(0), [i, o] = e.useState(r), u = y(null), b = () => u && u.current ? u.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    o(!i), n && t && n(t);
  };
  return $(() => (d(i ? b() : 0), () => {
  }), [i]), $(() => (o(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: u, id: t, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${i ? "active" : ""}`, "aria-expanded": i }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${i ? "active" : ""}`, style: { maxHeight: E } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function R({
  children: t,
  severity: a = "info",
  title: s,
  icon: l = "info",
  onClose: n,
  className: r
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function K({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: l,
  color: n,
  className: r
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${m} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
const V = ({
  children: t,
  className: a,
  ...s
}) => /* @__PURE__ */ e.createElement("div", { className: a, ...s }, t), L = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, x = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, W = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: m = "link",
  className: c,
  ...E
}) => {
  const d = `mds-link ${L[a]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + x[m]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...E }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), t, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, j = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: l
}) => {
  const n = s ? "color-white" : x[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(t, (r) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${n}` }, r))));
};
function G({
  component: t,
  children: a,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: c,
  disabled: E = !1,
  reverse: d = !1,
  href: i,
  target: o,
  className: u,
  ...b
}) {
  const p = t || "button", N = r ? "mds-full-width" : "", C = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let _ = {};
  return p == "a" ? (_.role = "button", _.href = i, _.target = o || "_self", _.tabIndex = "0") : p == "div" ? (_.role = "button", _.tabIndex = "0") : _ = { ...b, opts: _ }, E && (p == "a" || p == "div" ? _["aria-disabled"] = "true" : _.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ..._,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${N} ${C} ${u}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
const J = ({
  title: t,
  subtitle: a,
  children: s,
  color: l = "color-grey--5",
  icon: n,
  className: r
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${r}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), O = ({
  children: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, t), Q = ({
  children: t,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${a}` }, t);
function U({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: l = "_self",
  role: n,
  className: r
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${r}`, role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function X({
  label: t,
  active: a = !1,
  onClick: s,
  className: l
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function Y({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const M = {
  thin: "basic",
  heavy: "module"
}, H = ({
  component: t = "hr",
  variant: a = "thin",
  reverse: s = !1,
  className: l,
  ...n
}) => {
  const r = t;
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${M[a]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, Z = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n,
  className: r
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), I = {
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
}, w = ({
  children: t = "person",
  color: a,
  size: s = "medium",
  baseClassName: l = "icon",
  className: n
}) => {
  const r = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + S[s] : "mds-icon--" + I[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${t} ${m} ${a ? "mds-color__" + a : ""} ${n} ` });
}, ee = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  className: r,
  ...m
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${r} `, ...m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), ae = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), P = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: l = !1,
  className: n
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(H, null)), T = {
  small: "small",
  medium: "medium",
  large: "big"
}, te = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: m = !1,
  showCloseButton: c = !1,
  className: E
}) => {
  const d = y(null), i = e.useId();
  let o;
  const u = () => {
    s && s();
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
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${E}`, "aria-modal": "true", "aria-labelledby": i }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${T[l]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(P, { title: n, icon: r, visuallyHidden: m, id: i }), t)));
}, se = ({
  children: t,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), le = ({
  children: t,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), g = {
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
}, F = {
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
}, B = {
  primary: "color-macif--1",
  text: ""
};
function q({
  children: t,
  variant: a = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: m,
  className: c,
  ...E
}) {
  const i = s || F[a], o = a == "underline" && n ? g[a] + "--" + n : g[a], u = !r && a.substring(0, 1) != "h" && m ? "mds-color__" + B[m] : "";
  return /* @__PURE__ */ e.createElement(i, { className: `${o} ${r ? "mds-framed" : ""} ${u} ${c}`, style: { textAlign: l }, ...E }, r ? /* @__PURE__ */ e.createElement("span", null, t) : t);
}
const ne = ({
  children: t,
  title: a = "Summary",
  className: s
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(q, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(t, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, re = ({
  reverse: t = !1,
  children: a,
  className: s
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${t ? "mds-tabs--reverse" : ""} ${s}` }, a), me = ({
  children: t,
  ariaLabel: a,
  className: s
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(t, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, k(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), ce = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: l
}) => {
  const n = a ? /* @__PURE__ */ e.createElement(w, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, n, t);
}, de = ({
  children: t,
  className: a
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, f.map(t, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), ie = ({
  children: t,
  hidden: a = !1,
  className: s
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), v = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, oe = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: r,
  optionalText: m = "facultatif",
  required: c = !1,
  reverse: E = !1,
  supportingText: d,
  startIcon: i,
  type: o = "text",
  className: u,
  ...b
}) => {
  const h = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), p = v[o] || v.text, N = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${E ? "mds-input-group--reverse" : ""} ${u}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, r, " ", h, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${i ? "mds-wrapper--icon-left" : ""}` }, i ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${i}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${p}`, id: n, type: o, "aria-required": c, "aria-invalid": a, "aria-describedby": a && s ? N : "", ...b }), o === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: N }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, ue = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1,
  className: m
}) => {
  const c = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: c, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  A as Accordion,
  D as AccordionItem,
  R as Alert,
  K as Badge,
  V as Box,
  j as Breadcrumb,
  G as Button,
  J as Callout,
  O as CalloutAction,
  Q as CalloutContent,
  U as CardCompactV,
  X as ChipsItem,
  Y as ChipsList,
  H as Divider,
  Z as Hero,
  w as Icon,
  ee as IconButton,
  W as Link,
  ae as Play,
  te as SidePanel,
  se as SidePanelContent,
  le as SidePanelFooter,
  P as SidePanelHeader,
  ne as Summary,
  ce as Tab,
  me as TabList,
  ie as TabPanel,
  de as TabPanelList,
  re as Tabs,
  oe as TextField,
  ue as Toggle,
  q as Typography
};
//# sourceMappingURL=index.es.js.map
