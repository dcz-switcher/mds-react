import e, { useRef as y, useEffect as N, Children as f, cloneElement as C } from "react";
const B = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), A = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: c = "expand-more"
}) => {
  const [o, d] = e.useState(0), [i, u] = e.useState(r), m = y(null), _ = () => m && m.current ? m.current.querySelector(".mds-accordion__body").offsetHeight : 0, b = () => {
    u(!i), n && a && n(a);
  };
  return N(() => (d(i ? _() : 0), () => {
  }), [i]), N(() => (u(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: m, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: b, className: `mds-collapse mds-collapse__label ${i ? "active" : ""}`, "aria-expanded": i }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${i ? "active" : ""}`, style: { maxHeight: o } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function D({
  children: a,
  severity: t = "info",
  title: s,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function R({
  label: a,
  size: t = "small",
  severity: s = "neutral",
  icon: l,
  color: n
}) {
  const r = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${t} mds-badge--${s} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
const k = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, $ = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, K = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: c = "link",
  ...o
}) => {
  const d = `mds-link ${k[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + $[c]}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...o }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, V = ({
  children: a,
  color: t = "link",
  reverse: s = !1
}) => {
  const l = s ? "color-white" : $[t];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function W({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: o,
  disabled: d = !1,
  reverse: i = !1,
  href: u,
  target: m,
  ..._
}) {
  const p = a || "button", h = r ? "mds-full-width" : "", x = i ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let E = {};
  return p == "a" ? (E.role = "button", E.href = u, E.target = m || "_self", E.tabIndex = "0") : p == "div" ? (E.role = "button", E.tabIndex = "0") : E = { ..._, opts: E }, d && (p == "a" || p == "div" ? E["aria-disabled"] = "true" : E.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ...E,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${h} ${x}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    t,
    o ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${o}--right`, "aria-hidden": "true" }) : null
  );
}
const j = ({
  title: a,
  subtitle: t,
  children: s,
  color: l = "color-grey--5",
  icon: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, a, t && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, t)), s), G = ({
  children: a
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, a), J = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-callout__desc" }, a);
function O({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function Q({
  label: a,
  active: t = !1,
  onClick: s
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function U({
  children: a,
  reverse: t = !1,
  size: s = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${t == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const L = {
  thin: "basic",
  heavy: "module"
}, M = ({
  component: a = "hr",
  variant: t = "thin",
  reverse: s = !1,
  ...l
}) => {
  const n = a;
  return /* @__PURE__ */ e.createElement(n, { className: `mds-divider mds-divider--${L[t]} ${s ? "mds-divider--reverse" : ""}`, "aria-hidden": "true", ...l });
}, X = ({
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
}, I = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, S = ({
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + I[s] : "mds-icon--" + H[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${t ? "mds-color__" + t : ""} ` });
}, Y = ({
  icon: a,
  label: t,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  ...r
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""}`, ...r }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${a}`, "aria-hidden": "true" })), Z = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), w = ({
  id: a,
  title: t,
  icon: s,
  visuallyHidden: l = !1
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: a, className: "mds-modal__title" }, t)), /* @__PURE__ */ e.createElement(M, null)), P = {
  small: "small",
  medium: "medium",
  large: "big"
}, ee = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: c = !1,
  showCloseButton: o = !1
}) => {
  const d = y(null), i = e.useId();
  let u;
  const m = () => {
    s && s();
  }, _ = (p) => {
    p.key === "Escape" && (p.preventDefault(), p.stopImmediatePropagation(), m());
  }, b = (p) => {
    p.target.classList.contains("mds-dialog") && m();
  };
  return N(() => (o && (u = d.current.querySelector("button.mds-close"), u.addEventListener("click", m)), d.current.addEventListener("click", b), () => {
    o && u.removeEventListener("click", m);
    try {
      d.current.removeEventListener("click", b);
    } catch {
    }
  }), []), N(() => (t === !0 ? (document.addEventListener("keydown", _), d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", _);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-modal": "true", "aria-labelledby": i }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${P[l]}`, role: "document" }, o && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(w, { title: n, icon: r, visuallyHidden: c, id: i }), a)));
}, ae = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content", role: "document" }, a), te = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, a), g = {
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
}, T = {
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
}, F = {
  primary: "color-macif--1",
  text: ""
};
function q({
  children: a,
  variant: t = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: c,
  ...o
}) {
  const i = s || T[t], u = t == "underline" && n ? g[t] + "--" + n : g[t], m = !r && t.substring(0, 1) != "h" && c ? "mds-color__" + F[c] : "";
  return /* @__PURE__ */ e.createElement(i, { className: `${u} ${r ? "mds-framed" : ""} ${m} `, style: { textAlign: l }, ...o }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
const se = ({
  children: a,
  title: t = "Summary"
}) => {
  const s = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-summary", role: "navigation", "aria-labelledby": s }, /* @__PURE__ */ e.createElement(q, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: s }, t), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(a, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
}, le = ({
  reverse: a = !1,
  children: t
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${a ? "mds-tabs--reverse" : ""}` }, t), ne = ({
  children: a,
  ariaLabel: t
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": t }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(a, (s, l) => l == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, C(s, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, s)))), re = ({
  label: a,
  icon: t,
  ariaCurrent: s = !1
}) => {
  const l = t ? /* @__PURE__ */ e.createElement(S, { baseClassName: "picto", size: "xsmall" }, t) : "";
  return /* @__PURE__ */ e.createElement("button", { className: "mds-tabs__tab", type: "button", "aria-current": s }, l, a);
}, me = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-tabs__panels" }, f.map(a, (t, s) => s == 1 ? e.cloneElement(t, { hidden: !0 }) : t)), ce = ({
  children: a,
  hidden: t = !1
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-tabs__panel", hidden: t }, a), v = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, de = ({
  endAdornment: a,
  error: t = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: r,
  optionalText: c = "facultatif",
  required: o = !1,
  reverse: d = !1,
  supportingText: i,
  startIcon: u,
  type: m = "text",
  ..._
}) => {
  const b = o ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", c, ")"), p = v[m] || v.text, h = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${d ? "mds-input-group--reverse" : ""}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, r, " ", b, " ", i ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, i) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${u ? "mds-wrapper--icon-left" : ""}` }, u ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${u}` }) : "", /* @__PURE__ */ e.createElement("input", { ..._, className: `mds-input mds-input-${p}`, id: n, type: m, "aria-required": o, "aria-invalid": t, "aria-describedby": t && s ? h : "" }), m === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : a ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", a, " ") : ""), t && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: h }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, ie = ({
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
  B as Accordion,
  A as AccordionItem,
  D as Alert,
  R as Badge,
  V as Breadcrumb,
  W as Button,
  j as Callout,
  G as CalloutAction,
  J as CalloutContent,
  O as CardCompactV,
  Q as ChipsItem,
  U as ChipsList,
  M as Divider,
  X as Hero,
  S as Icon,
  Y as IconButton,
  K as Link,
  Z as Play,
  ee as SidePanel,
  ae as SidePanelContent,
  te as SidePanelFooter,
  w as SidePanelHeader,
  se as Summary,
  re as Tab,
  ne as TabList,
  ce as TabPanel,
  me as TabPanelList,
  le as Tabs,
  de as TextField,
  ie as Toggle,
  q as Typography
};
//# sourceMappingURL=index.es.js.map
