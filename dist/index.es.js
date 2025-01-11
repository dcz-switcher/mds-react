'use client';
import e, { useRef as g, useEffect as f, Children as $, createContext as C, useContext as x, cloneElement as L } from "react";
const j = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), G = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: n = !1,
  onChange: l,
  expanded: r = n,
  expandIcon: m = "expand-more",
  className: c = ""
}) => {
  const [_, d] = e.useState(0), [o, i] = e.useState(r), u = g(null), b = () => u && u.current ? u.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    i(!o), l && t && l(t);
  };
  return f(() => (d(o ? b() : 0), () => {
  }), [o]), f(() => (i(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: u, id: t, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${o ? "active" : ""}`, "aria-expanded": o }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${o ? "active" : ""}`, style: { maxHeight: _ } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function J({
  children: t,
  severity: a = "info",
  title: s,
  icon: n = "info",
  onClose: l,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), l && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function U({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: n,
  color: l,
  className: r = ""
}) {
  const m = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${m} ${r}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
const X = ({
  children: t,
  className: a = "",
  ...s
}) => /* @__PURE__ */ e.createElement("div", { className: a, ...s }, t), H = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, w = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, Y = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: n = !1,
  startIcon: l,
  endIcon: r,
  color: m = "link",
  className: c = "",
  ..._
}) => {
  const d = `mds-link ${H[a]} ${s ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : "mds-color__" + w[m]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ..._ }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}--right`, "aria-hidden": "true" }), t, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, Z = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: n = ""
}) => {
  const l = s ? "color-white" : w[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${n}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, $.map(t, (r) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, r))));
};
function ee({
  component: t,
  children: a,
  color: s,
  variant: n = "primary",
  size: l = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: c,
  disabled: _ = !1,
  reverse: d = !1,
  href: o,
  target: i,
  className: u = "",
  ...b
}) {
  const p = t || "button", N = r ? "mds-full-width" : "", I = d ? "mds-btn--reverse" : "";
  n == "primary" && s == "conversion" ? n += "-cta" : n == "secondary" && s == "alert" && (n += "-alert");
  let E = {};
  return p == "a" ? (E.role = "button", E.href = o, E.target = i || "_self", E.tabIndex = "0") : p == "div" ? (E.role = "button", E.tabIndex = "0") : E = { ...b, opts: E }, _ && (p == "a" || p == "div" ? E["aria-disabled"] = "true" : E.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ...E,
      className: `mds-btn mds-btn--${n} mds-btn--${l} ${N} ${I} ${u}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
const ae = ({
  title: t,
  subtitle: a,
  children: s,
  color: n = "color-grey--5",
  icon: l,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${n} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${l} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), te = ({
  children: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, t), se = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${a}` }, t), v = {
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
}, T = {
  primary: "color-macif--1",
  text: "color-grey--80"
}, k = C(!1), q = () => x(k);
function M({
  children: t,
  variant: a = "body2",
  component: s,
  align: n = "left",
  underlineColor: l = "",
  framed: r = !1,
  color: m,
  className: c = "",
  ..._
}) {
  const i = q() ? "span" : s || S[a], u = a == "underline" && l ? v[a] + "--" + l : v[a], b = !r && a.substring(0, 1) != "h" && m ? "mds-color__" + T[m] : "";
  return /* @__PURE__ */ e.createElement(k.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(i, { className: `${u} ${r ? "mds-framed" : ""} ${b} ${c}`, style: { textAlign: n }, ..._ }, r ? /* @__PURE__ */ e.createElement("span", null, t) : t));
}
const A = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, ne = ({
  variant: t = "basic1",
  title: a,
  titleLevel: s = "h3",
  subTitle: n,
  cardMedia: l,
  cardHeader: r,
  children: m,
  className: c = "",
  ..._
}) => {
  const d = "mds-card " + A[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${c}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(M, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ..._ }, a)), n ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, n) : "", t == "modulable" ? m : ""), t == "modulable" && r ? r : "", l);
};
function le({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: n = "_self",
  role: l,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${r}`, role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: n }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function re({
  label: t,
  active: a = !1,
  onClick: s,
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: n }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function me({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${n} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const F = {
  thin: "basic",
  heavy: "module"
}, B = ({
  component: t = "hr",
  variant: a = "thin",
  reverse: s = !1,
  className: n = "",
  ...l
}) => {
  const r = t;
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${F[a]} ${s ? "mds-divider--reverse" : ""} ${n} `, "aria-hidden": "true", ...l });
}, ce = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: n,
  image: l,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), n && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, n)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${l}`, alt: "" }))), z = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, D = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, O = ({
  children: t = "person",
  color: a,
  size: s = "medium",
  baseClassName: n = "icon",
  className: l = ""
}) => {
  const r = "mds-" + n + "__", m = n == "picto" ? "mds-picto--" + D[s] : "mds-icon--" + z[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${t} ${m} ${a ? "mds-color__" + a : ""} ${l} ` });
}, de = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: n = "medium",
  variant: l = "primary",
  className: r = "",
  ...m
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${l} mds-btn--${n} ${s ? "mds-btn--reverse" : ""} ${r} `, ...m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), oe = ({
  children: t,
  secondaryAction: a,
  className: s = "",
  trailingText: n
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item mds-side-padding ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), n ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, n) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), ie = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), ue = ({
  headline: t,
  title: a,
  supportingText: s,
  className: n = "",
  href: l
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: l }, a)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, a) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), pe = ({
  children: t,
  className: a = "",
  boxed: s = !1
}) => {
  const n = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: n }, t));
}, _e = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `}mds-dropdown__item ${a}` }, t), R = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, Ee = ({
  anchorEl: t,
  anchorOrigin: a = "bl",
  children: s,
  className: n = ""
}) => {
  const l = R[a];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${l} ${n}` }, t, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, P = C(!1), V = () => x(P), be = ({
  children: t
}) => {
  if (V())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(P.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, t));
}, he = ({
  autor: t,
  avatar: a,
  children: s,
  className: n = "",
  reverse: l = !1
}) => {
  const r = l ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${r} ${n}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), t ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, a ? /* @__PURE__ */ e.createElement("img", { alt: "", src: a, "aria-hidden": "true" }) : "", t) : "");
}, Ne = ({
  children: t,
  className: a = "",
  labelClosed: s = "Afficher plus",
  labelOpened: n = "Afficher moins"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { type: "button", className: `mds-show-more__btn mds-text--2 mds-collapse ${a}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-visible" }, s), /* @__PURE__ */ e.createElement("span", { className: "mds-hidden" }, n), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" })), /* @__PURE__ */ e.createElement("div", { className: "mds-collapse__content" }, t)), K = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: n = !1,
  className: l = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${n ? "mds-sr-only" : ""} ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(B, null)), Q = {
  small: "small",
  medium: "medium",
  large: "big"
}, fe = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: n = "medium",
  title: l,
  icon: r,
  visuallyHideTitle: m = !1,
  showCloseButton: c = !1,
  className: _ = ""
}) => {
  const d = g(null), o = e.useId();
  let i;
  const u = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, b = (p) => {
    p.key === "Escape" && (p.preventDefault(), p.stopImmediatePropagation(), u());
  }, h = (p) => {
    p.target.classList.contains("mds-dialog") && u();
  };
  return f(() => (c && (i = d.current.querySelector("button.mds-close"), i.addEventListener("click", u)), d.current.addEventListener("click", h), () => {
    c && i.removeEventListener("click", u);
    try {
      d.current.removeEventListener("click", h);
    } catch {
    }
  }), []), f(() => (a === !0 ? (document.addEventListener("keydown", b), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", b), document.body.style.overflow = "scroll";
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${_}`, "aria-modal": "true", "aria-labelledby": o }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${Q[n]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(K, { title: l, icon: r, visuallyHidden: m, id: o }), t)));
}, $e = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), ve = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), ye = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const n = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": n }, /* @__PURE__ */ e.createElement(M, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: n }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, $.map(t, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
}, ge = ({
  reverse: t = !1,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${t ? "mds-tabs--reverse" : ""} ${s}` }, a), Ce = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, $.map(t, (n, l) => l == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, L(n, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, n)))), xe = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: n = ""
}) => {
  const l = a ? /* @__PURE__ */ e.createElement(O, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${n}`, type: "button", "aria-current": s }, l, t);
}, we = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, $.map(t, (s, n) => n == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), ke = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), y = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, Me = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: n = !1,
  id: l,
  label: r,
  optionalText: m = "facultatif",
  required: c = !1,
  reverse: _ = !1,
  supportingText: d,
  startIcon: o,
  type: i = "text",
  className: u = "",
  ...b
}) => {
  const h = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), p = y[i] || y.text, N = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${_ ? "mds-input-group--reverse" : ""} ${u}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: l, className: "mds-label" }, r, " ", h, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${n ? "mds-full-width" : ""} ${o ? "mds-wrapper--icon-left" : ""}` }, o ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${o}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${p}`, id: l, type: i, "aria-required": c, "aria-invalid": a, "aria-describedby": a && s ? N : "", ...b }), i === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: N }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Pe = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: n = !1,
  onChange: l,
  reverse: r = !1,
  className: m = ""
}) => {
  const c = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: l, role: "switch", id: c, checked: s, disabled: n, "aria-disabled": n }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  j as Accordion,
  G as AccordionItem,
  J as Alert,
  U as Badge,
  X as Box,
  Z as Breadcrumb,
  ee as Button,
  ae as Callout,
  te as CalloutAction,
  se as CalloutContent,
  ne as Card,
  le as CardCompactV,
  ne as CardHeader,
  ne as CardMedia,
  re as ChipsItem,
  me as ChipsList,
  B as Divider,
  ce as Hero,
  O as Icon,
  de as IconButton,
  Y as Link,
  pe as List,
  oe as ListItem,
  ie as ListItemIcon,
  ue as ListItemText,
  Ee as Menu,
  _e as MenuItem,
  be as Play,
  he as Quote,
  Ne as ShowMore,
  fe as SidePanel,
  $e as SidePanelContent,
  ve as SidePanelFooter,
  K as SidePanelHeader,
  ye as Summary,
  xe as Tab,
  Ce as TabList,
  ke as TabPanel,
  we as TabPanelList,
  ge as Tabs,
  Me as TextField,
  Pe as Toggle,
  M as Typography
};
//# sourceMappingURL=index.es.js.map
