'use client';
import e, { useRef as x, useEffect as y, Children as v, createContext as w, useContext as S, cloneElement as F } from "react";
const X = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), Y = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: c = "expand-more",
  className: m = ""
}) => {
  const [o, d] = e.useState(0), [u, p] = e.useState(r), E = x(null), N = () => E && E.current ? E.current.querySelector(".mds-accordion__body").offsetHeight : 0, b = () => {
    p(!u), n && t && n(t);
  };
  return y(() => (d(u ? N() : 0), () => {
  }), [u]), y(() => (p(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: E, id: t, className: `mds-accordion__item ${m}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: b, className: `mds-collapse mds-collapse__label ${u ? "active" : ""}`, "aria-expanded": u }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${u ? "active" : ""}`, style: { maxHeight: o } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function Z({
  children: t,
  severity: a = "info",
  title: s,
  icon: l = "info",
  onClose: n,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function ee({
  ariaLabel: t,
  label: a,
  size: s = "small",
  severity: l = "neutral",
  icon: n,
  color: r,
  variant: c = "default",
  className: m = ""
}) {
  const o = r ? `mds-background-color__${r}` : "";
  return c === "default" ? /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${l} ${o} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a)) : /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--dot mds-badge--${s} mds-badge--${l} ${o} ${m}` }, n && s === "big" ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }) : s === "big" ? a : "", /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t));
}
const $ = ({
  children: t,
  className: a = "",
  ...s
}) => /* @__PURE__ */ e.createElement("div", { className: a, ...s }, t), A = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, I = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, ae = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: c = "link",
  className: m = "",
  ...o
}) => {
  const d = `mds-link ${A[a]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + I[c]} ${m}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...o }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), t, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, te = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: l = ""
}) => {
  const n = s ? "color-white" : I[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, v.map(t, (r) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${n}` }, r))));
};
function se({
  component: t,
  children: a,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: m,
  disabled: o = !1,
  reverse: d = !1,
  href: u,
  target: p,
  className: E = "",
  ...N
}) {
  const _ = t || "button", g = r ? "mds-full-width" : "", H = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let h = {};
  return _ == "a" ? (h.role = "button", h.href = u, h.target = p || "_self", h.tabIndex = "0") : _ == "div" ? (h.role = "button", h.tabIndex = "0") : h = { ...N, opts: h }, o && (_ == "a" || _ == "div" ? h["aria-disabled"] = "true" : h.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...h,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${g} ${H} ${E}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    a,
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }) : null
  );
}
const le = ({
  title: t,
  subtitle: a,
  children: s,
  color: l = "color-grey--5",
  icon: n,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${r}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), ne = ({
  children: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, t), re = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${a}` }, t), k = {
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
}, q = {
  primary: "color-macif--1",
  text: "color-grey--80",
  white: "color-white"
}, P = w(!1), B = () => S(P);
function M({
  children: t,
  variant: a = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: c,
  className: m = "",
  ...o
}) {
  const p = B() ? "span" : s || T[a], E = a == "underline" && n ? k[a] + "--" + n : k[a], N = !r && c ? "mds-color__" + q[c] : "";
  return /* @__PURE__ */ e.createElement(P.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(p, { className: `${E} ${r ? "mds-framed" : ""} ${N} ${m}`, style: { textAlign: l }, ...o }, r ? /* @__PURE__ */ e.createElement("span", null, t) : t));
}
const D = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, me = ({
  variant: t = "basic1",
  title: a,
  titleLevel: s = "h3",
  subTitle: l,
  cardMedia: n,
  cardHeader: r,
  children: c,
  className: m = "",
  ...o
}) => {
  const d = "mds-card " + D[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${m}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(M, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ...o }, a)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", t == "modulable" ? c : ""), t == "modulable" && r ? r : "", n);
};
function ce({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: l = "_self",
  role: n,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${r}`, role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function de({
  label: t,
  active: a = !1,
  onClick: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function ie({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const O = {
  thin: "basic",
  heavy: "module"
}, f = ({
  component: t = "hr",
  variant: a = "thin",
  reverse: s = !1,
  className: l = "",
  ...n
}) => {
  const r = t;
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${O[a]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, oe = ({
  sticky: t = !1,
  logoHref: a = "/",
  variant: s = "default",
  className: l = "",
  headerNav: n,
  headerNavPosition: r = "under",
  headerLogoUrl: c,
  headerLogoDesktopUrl: m,
  onMenuOpen: o,
  ...d
}) => /* @__PURE__ */ e.createElement("header", { role: "banner", className: `mds-header ${s == "simple" ? "mds-header--simplified" : ""} ${t ? "mds-position--sticky" : ""} ${l}`, ...d }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: a, "aria-label": "aller à la page d'accueil xxxx" }, /* @__PURE__ */ e.createElement("img", { style: { height: "100%" }, src: c }))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side" }, n ? /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item", onClick: o }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__menu", "aria-hidden": "true" }), "menu") : "")), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__top-container mds-container mds-inset--0" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__logo-container" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: a }, /* @__PURE__ */ e.createElement("img", { style: { height: "100%" }, src: m })))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side", style: { height: "100%" } }, n && r == "inside" ? n : ""))), /* @__PURE__ */ e.createElement(f, null), n && r == "under" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop mds-display--none mds-display-md--block" }, n, /* @__PURE__ */ e.createElement(f, null))) : ""), ue = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-container mds-display--flex ${a}`, style: { marginTop: 0, marginBottom: 0 } }, /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "menu principal", className: "mds-display--flex", style: { alignItems: "center", margin: 0 } }, /* @__PURE__ */ e.createElement("ul", { className: "mds-header__menu mds-handleClick-nav-item-btn", style: { height: "100%" } }, t))), pe = ({
  label: t,
  className: a = "",
  href: s
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${a}` }, /* @__PURE__ */ e.createElement("a", { className: `mds-btn mds-header__nav-item ${a}`, style: { height: "100%" }, href: s }, t)), Ee = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__item ${a}` }, t), R = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, V = ({
  anchorEl: t,
  anchorOrigin: a = "bl",
  children: s,
  className: l = "",
  style: n,
  sidePadding: r = !1
}) => {
  const c = R[a];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${c} ${l}`, style: n }, t, /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__container ${r ? "" : "mds-inset--0"}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, _e = ({
  children: t,
  label: a,
  className: s = ""
}) => {
  const l = /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item mds-dropdown__trigger-element", style: { height: "100%" }, "aria-controls": "expandable", "aria-expanded": !1 }, a, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }));
  return /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${s}` }, /* @__PURE__ */ e.createElement(V, { anchorEl: l, style: { height: "100%" } }, t));
}, he = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), z = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, K = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, Q = ({
  children: t = "person",
  color: a,
  size: s = "medium",
  baseClassName: l = "icon",
  className: n = ""
}) => {
  const r = "mds-" + l + "__", c = l == "picto" ? "mds-picto--" + K[s] : "mds-icon--" + z[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${t} ${c} ${a ? "mds-color__" + a : ""} ${n} ` });
}, Ne = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  className: r = "",
  ...c
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${r} `, ...c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), be = ({
  children: t,
  secondaryAction: a,
  className: s = "",
  trailingText: l,
  sidePadding: n = !0
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item ${n ? "mds-side-padding" : ""} ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, l) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), ge = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), ye = ({
  headline: t,
  title: a,
  supportingText: s,
  className: l = "",
  href: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? n ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: n }, a)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, a) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), ve = ({
  children: t,
  className: a = "",
  boxed: s = !1,
  divider: l = !0
}) => {
  const n = !l && !s ? "mds-action-list--no-divider" : "", r = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${n} ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: r }, t));
}, fe = ({
  title: t,
  reverse: a = !1
}) => {
  const s = a ? "mds-loader__layout mds-loader__layout--reverse" : "mds-loader__layout", l = a ? "mds-loader mds-loader--reverse" : "mds-loader";
  return /* @__PURE__ */ e.createElement("div", { className: s }, /* @__PURE__ */ e.createElement("div", { className: l }, /* @__PURE__ */ e.createElement("p", { className: "mds-sr-only" }, t)));
}, i = ({
  selected: t = !1,
  page: a,
  variant: s = "outlined",
  onClick: l,
  className: n = ""
}) => {
  const r = () => {
    l && l();
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s === "ellipsis" ? /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex ${n}`, "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("span", null, "...")) : /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item ${n}`, onClick: r }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn", type: "button", "aria-label": `page ${a}`, "aria-current": t }, a)));
}, $e = ({
  count: t = 1,
  page: a = 1,
  onChange: s,
  className: l = ""
}) => {
  const n = () => {
    let m;
    return t < 8 ? m = [...Array(t)].map((o, d) => /* @__PURE__ */ e.createElement(i, { key: d + 1, page: (d + 1).toString(), selected: d + 1 === a, onClick: () => r(d + 1) })) : a <= 3 ? m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", selected: a === 1, onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { key: 2, page: "2", selected: a === 2, onClick: () => r(2) }), /* @__PURE__ */ e.createElement(i, { key: 3, page: "3", selected: a === 3, onClick: () => r(3) }), /* @__PURE__ */ e.createElement(i, { key: 4, page: "4", selected: a === 4, onClick: () => r(4) }), /* @__PURE__ */ e.createElement(i, { key: 5, page: "5", selected: a === 5, onClick: () => r(5) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => r(t) })) : a > t - 3 ? m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t - 4, page: (t - 4).toString(), selected: a === t - 4, onClick: () => r(t - 4) }), /* @__PURE__ */ e.createElement(i, { key: t - 3, page: (t - 3).toString(), selected: a === t - 3, onClick: () => r(t - 3) }), /* @__PURE__ */ e.createElement(i, { key: t - 2, page: (t - 2).toString(), selected: a === t - 2, onClick: () => r(t - 2) }), /* @__PURE__ */ e.createElement(i, { key: t - 1, page: (t - 1).toString(), selected: a === t - 1, onClick: () => r(t - 1) }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), selected: a === t, onClick: () => r(t) })) : m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a - 1, page: (a - 1).toString(), onClick: () => r(a - 1) }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), selected: !0, onClick: () => r(a) }), /* @__PURE__ */ e.createElement(i, { key: a + 1, page: (a + 1).toString(), onClick: () => r(a + 1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => r(t) })), m;
  }, r = (c) => {
    s && s(c);
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: `mds-pagination ${l}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a < 2, onClick: () => r(a - 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), n(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a >= t, onClick: () => r(a + 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, L = w(!1), W = () => S(L), ke = ({
  children: t
}) => {
  if (W())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(L.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, t));
}, Ce = ({
  className: t,
  max: a = 100,
  value: s,
  ...l
}) => /* @__PURE__ */ e.createElement("progress", { className: `mds-progress-bar ${t}`, "aria-hidden": "true", value: s, max: a, ...l }, s), xe = ({
  title: t = null,
  desc: a = null,
  action: s = null,
  flip: l = !1,
  className: n = "",
  image: r = "",
  ...c
}) => {
  const m = l ? { flexDirection: "row-reverse" } : null;
  return /* @__PURE__ */ e.createElement("div", { className: "mds-push__container", ...c }, /* @__PURE__ */ e.createElement("div", { className: `mds-push ${n}`, style: m }, /* @__PURE__ */ e.createElement("div", { className: "mds-push__body" }, t ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--16" }, t) : "", a ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--32" }, a) : "", s), r ? /* @__PURE__ */ e.createElement("div", { className: "mds-push__img" }, /* @__PURE__ */ e.createElement("img", { src: r, alt: "" })) : ""));
}, we = ({
  autor: t,
  avatar: a,
  children: s,
  className: l = "",
  reverse: n = !1
}) => {
  const r = n ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${r} ${l}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), t ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, a ? /* @__PURE__ */ e.createElement("img", { alt: "", src: a, "aria-hidden": "true" }) : "", t) : "");
}, j = ({
  children: t,
  disabled: a,
  selected: s,
  hidden: l,
  value: n
}) => /* @__PURE__ */ e.createElement("option", { value: n, disabled: a, selected: s, hidden: l }, t), Se = ({
  children: t,
  label: a,
  subLabel: s,
  name: l,
  placeholder: n = "Sélectionner...",
  required: r = !0,
  requiredLabel: c = "(facultatif)"
}) => {
  const m = e.useId(), o = r ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, c);
  return /* @__PURE__ */ e.createElement("div", { className: "mds-select-dropdown" }, /* @__PURE__ */ e.createElement("label", { className: "mds-label", htmlFor: m }, a, o, /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, s)), /* @__PURE__ */ e.createElement("div", { className: "mds-select__item mds-input-cell" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("select", { name: l, id: m, required: r }, n ? /* @__PURE__ */ e.createElement(j, { disabled: !0, selected: !0, hidden: !0 }, n) : "", t)));
}, Ie = ({
  children: t,
  className: a = "",
  labelClosed: s = "Afficher plus",
  labelOpened: l = "Afficher moins"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { type: "button", className: `mds-show-more__btn mds-text--2 mds-collapse ${a}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-visible" }, s), /* @__PURE__ */ e.createElement("span", { className: "mds-hidden" }, l), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" })), /* @__PURE__ */ e.createElement("div", { className: "mds-collapse__content" }, t)), G = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: l = !1,
  className: n = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(f, null)), J = {
  small: "small",
  medium: "medium",
  large: "big"
}, Pe = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: c = !1,
  showCloseButton: m = !1,
  className: o = ""
}) => {
  const d = x(null), u = e.useId();
  let p;
  const E = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, N = (_) => {
    _.key === "Escape" && (_.preventDefault(), _.stopImmediatePropagation(), E());
  }, b = (_) => {
    _.target.classList.contains("mds-dialog") && E();
  };
  return y(() => (m && (p = d.current.querySelector("button.mds-close"), p.addEventListener("click", E)), d.current.addEventListener("click", b), () => {
    m && p.removeEventListener("click", E);
    try {
      d.current.removeEventListener("click", b);
    } catch {
    }
  }), []), y(() => (a === !0 ? (document.addEventListener("keydown", N), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", N), document.body.style.overflow = "scroll";
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${o}`, "aria-modal": "true", "aria-labelledby": u }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${J[l]}`, role: "document" }, m && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(G, { title: n, icon: r, visuallyHidden: c, id: u }), t)));
}, Me = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), Le = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), He = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(M, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, v.map(t, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, Fe = ({
  reverse: t = !1,
  children: a,
  className: s = "",
  variant: l = "default",
  ...n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${l == "pills" ? "mds-tabs--pills mds-tabs--standalone" : ""} ${t ? "mds-tabs--reverse" : ""} ${s}`, ...n }, a), Ae = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, v.map(t, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, F(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), Te = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const n = a ? /* @__PURE__ */ e.createElement(Q, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, n, t);
}, qe = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, v.map(t, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), Be = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), C = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, De = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: r,
  optionalText: c = "facultatif",
  required: m = !1,
  reverse: o = !1,
  supportingText: d,
  startIcon: u,
  type: p = "text",
  className: E = "",
  ...N
}) => {
  const b = m ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", c, ")"), _ = C[p] || C.text, g = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${o ? "mds-input-group--reverse" : ""} ${E}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, r, " ", b, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${u ? "mds-wrapper--icon-left" : ""}` }, u ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${u}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${_}`, id: n, type: p, "aria-required": m, "aria-invalid": a, "aria-describedby": a && s ? g : "", ...N }), p === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only", "aria-live": "polite" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: g }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Oe = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1,
  className: c = ""
}) => {
  const m = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${c}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: m, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  X as Accordion,
  Y as AccordionItem,
  Z as Alert,
  ee as Badge,
  $ as Box,
  te as Breadcrumb,
  se as Button,
  le as Callout,
  ne as CalloutAction,
  re as CalloutContent,
  me as Card,
  ce as CardCompactV,
  me as CardHeader,
  me as CardMedia,
  de as ChipsItem,
  ie as ChipsList,
  f as Divider,
  oe as Header,
  ue as HeaderNav,
  pe as HeaderNavItem,
  _e as HeaderNavMenu,
  he as Hero,
  Q as Icon,
  Ne as IconButton,
  ae as Link,
  ve as List,
  be as ListItem,
  ge as ListItemIcon,
  ye as ListItemText,
  fe as Loader,
  V as Menu,
  Ee as MenuItem,
  $e as Pagination,
  i as PaginationItem,
  ke as Play,
  Ce as ProgressLinear,
  xe as Pushout,
  we as Quote,
  Se as Select,
  j as SelectItem,
  Ie as ShowMore,
  Pe as SidePanel,
  Me as SidePanelContent,
  Le as SidePanelFooter,
  G as SidePanelHeader,
  He as Summary,
  Te as Tab,
  Ae as TabList,
  Be as TabPanel,
  qe as TabPanelList,
  Fe as Tabs,
  De as TextField,
  Oe as Toggle,
  M as Typography
};
//# sourceMappingURL=index.es.js.map
