import e, { useRef as y, useEffect as $, Children as f, cloneElement as w } from "react";
const R = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), V = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: m = l,
  expandIcon: r = "expand-more",
  className: c = ""
}) => {
  const [_, d] = e.useState(0), [i, o] = e.useState(m), u = y(null), b = () => u && u.current ? u.current.querySelector(".mds-accordion__body").offsetHeight : 0, N = () => {
    o(!i), n && t && n(t);
  };
  return $(() => (d(i ? b() : 0), () => {
  }), [i]), $(() => (o(m), () => {
  }), [m]), /* @__PURE__ */ e.createElement("div", { ref: u, id: t, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: N, className: `mds-collapse mds-collapse__label ${i ? "active" : ""}`, "aria-expanded": i }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${i ? "active" : ""}`, style: { maxHeight: _ } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function K({
  children: t,
  severity: a = "info",
  title: s,
  icon: l = "info",
  onClose: n,
  className: m = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${m}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function O({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: l,
  color: n,
  className: m = ""
}) {
  const r = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${r} ${m}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
const W = ({
  children: t,
  className: a = "",
  ...s
}) => /* @__PURE__ */ e.createElement("div", { className: a, ...s }, t), M = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, C = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, j = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: m,
  color: r = "link",
  className: c = "",
  ..._
}) => {
  const d = `mds-link ${M[a]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + C[r]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ..._ }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), t, m && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }));
}, G = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: l = ""
}) => {
  const n = s ? "color-white" : C[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(t, (m) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${n}` }, m))));
};
function J({
  component: t,
  children: a,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: r,
  endIcon: c,
  disabled: _ = !1,
  reverse: d = !1,
  href: i,
  target: o,
  className: u = "",
  ...b
}) {
  const p = t || "button", h = m ? "mds-full-width" : "", k = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let E = {};
  return p == "a" ? (E.role = "button", E.href = i, E.target = o || "_self", E.tabIndex = "0") : p == "div" ? (E.role = "button", E.tabIndex = "0") : E = { ...b, opts: E }, _ && (p == "a" || p == "div" ? E["aria-disabled"] = "true" : E.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ...E,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${h} ${k} ${u}`
    },
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
const Q = ({
  title: t,
  subtitle: a,
  children: s,
  color: l = "color-grey--5",
  icon: n,
  className: m = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), U = ({
  children: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, t), X = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${a}` }, t), g = {
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
}, L = {
  primary: "color-macif--1",
  text: "color-grey--80"
};
function x({
  children: t,
  variant: a = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: m = !1,
  color: r,
  className: c = "",
  ..._
}) {
  const i = s || I[a], o = a == "underline" && n ? g[a] + "--" + n : g[a], u = !m && a.substring(0, 1) != "h" && r ? "mds-color__" + L[r] : "";
  return /* @__PURE__ */ e.createElement(i, { className: `${o} ${m ? "mds-framed" : ""} ${u} ${c}`, style: { textAlign: l }, ..._ }, m ? /* @__PURE__ */ e.createElement("span", null, t) : t);
}
const H = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, Y = ({
  variant: t = "basic1",
  title: a,
  titleLevel: s = "h3",
  subTitle: l,
  cardMedia: n,
  cardHeader: m,
  children: r,
  className: c = "",
  ..._
}) => {
  const d = "mds-card " + H[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${c}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(x, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ..._ }, a)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", t == "modulable" ? r : ""), t == "modulable" && m ? m : "", n);
};
function Z({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: l = "_self",
  role: n,
  className: m = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${m}`, role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function ee({
  label: t,
  active: a = !1,
  onClick: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function ae({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const S = {
  thin: "basic",
  heavy: "module"
}, P = ({
  component: t = "hr",
  variant: a = "thin",
  reverse: s = !1,
  className: l = "",
  ...n
}) => {
  const m = t;
  return /* @__PURE__ */ e.createElement(m, { className: `mds-divider mds-divider--${S[a]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, te = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n,
  className: m = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${m}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), T = {
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
  children: t = "person",
  color: a,
  size: s = "medium",
  baseClassName: l = "icon",
  className: n = ""
}) => {
  const m = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + F[s] : "mds-icon--" + T[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${m}${t} ${r} ${a ? "mds-color__" + a : ""} ${n} ` });
}, se = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  className: m = "",
  ...r
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${m} `, ...r }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), le = ({
  children: t,
  secondaryAction: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item mds-side-padding ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), ne = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), me = ({
  headline: t,
  primary: a,
  secondary: s,
  className: l = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: "#" }, a)) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), re = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-action-list--default" }, t)), ce = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `}mds-dropdown__item ${a}` }, t), q = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, de = ({
  anchorEl: t,
  anchorOrigin: a = "bl",
  children: s,
  className: l = ""
}) => {
  const n = q[a];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${n} ${l}` }, t, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, ie = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), z = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: l = !1,
  className: n = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(P, null)), A = {
  small: "small",
  medium: "medium",
  large: "big"
}, oe = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: m,
  visuallyHideTitle: r = !1,
  showCloseButton: c = !1,
  className: _ = ""
}) => {
  const d = y(null), i = e.useId();
  let o;
  const u = () => {
    s && s();
  }, b = (p) => {
    p.key === "Escape" && (p.preventDefault(), p.stopImmediatePropagation(), u());
  }, N = (p) => {
    p.target.classList.contains("mds-dialog") && u();
  };
  return $(() => (c && (o = d.current.querySelector("button.mds-close"), o.addEventListener("click", u)), d.current.addEventListener("click", N), () => {
    c && o.removeEventListener("click", u);
    try {
      d.current.removeEventListener("click", N);
    } catch {
    }
  }), []), $(() => (a === !0 ? (document.addEventListener("keydown", b), d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", b);
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${_}`, "aria-modal": "true", "aria-labelledby": i }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${A[l]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(z, { title: n, icon: m, visuallyHidden: r, id: i }), t)));
}, ue = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), pe = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), _e = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(x, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(t, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, Ee = ({
  reverse: t = !1,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${t ? "mds-tabs--reverse" : ""} ${s}` }, a), be = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(t, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, w(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), Ne = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const n = a ? /* @__PURE__ */ e.createElement(B, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, n, t);
}, he = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, f.map(t, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), $e = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), v = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, fe = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: m,
  optionalText: r = "facultatif",
  required: c = !1,
  reverse: _ = !1,
  supportingText: d,
  startIcon: i,
  type: o = "text",
  className: u = "",
  ...b
}) => {
  const N = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", r, ")"), p = v[o] || v.text, h = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${_ ? "mds-input-group--reverse" : ""} ${u}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, m, " ", N, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${i ? "mds-wrapper--icon-left" : ""}` }, i ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${i}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${p}`, id: n, type: o, "aria-required": c, "aria-invalid": a, "aria-describedby": a && s ? h : "", ...b }), o === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: h }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, ge = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: m = !1,
  className: r = ""
}) => {
  const c = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${m ? "mds-toggle--reverse" : ""} ${r}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: c, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  R as Accordion,
  V as AccordionItem,
  K as Alert,
  O as Badge,
  W as Box,
  G as Breadcrumb,
  J as Button,
  Q as Callout,
  U as CalloutAction,
  X as CalloutContent,
  Y as Card,
  Z as CardCompactV,
  Y as CardHeader,
  Y as CardMedia,
  ee as ChipsItem,
  ae as ChipsList,
  P as Divider,
  te as Hero,
  B as Icon,
  se as IconButton,
  j as Link,
  re as List,
  le as ListItem,
  ne as ListItemIcon,
  me as ListItemText,
  de as Menu,
  ce as MenuItem,
  ie as Play,
  oe as SidePanel,
  ue as SidePanelContent,
  pe as SidePanelFooter,
  z as SidePanelHeader,
  _e as Summary,
  Ne as Tab,
  be as TabList,
  $e as TabPanel,
  he as TabPanelList,
  Ee as Tabs,
  fe as TextField,
  ge as Toggle,
  x as Typography
};
//# sourceMappingURL=index.es.js.map
