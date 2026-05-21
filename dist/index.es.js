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
  expandIcon: m = "expand-more",
  className: c = ""
}) => {
  const [o, d] = e.useState(0), [u, _] = e.useState(r), p = x(null), h = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, b = () => {
    _(!u), n && t && n(t);
  };
  return y(() => (d(u ? h() : 0), () => {
  }), [u]), y(() => (_(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: p, id: t, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: b, className: `mds-collapse mds-collapse__label ${u ? "active" : ""}`, "aria-expanded": u }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${u ? "active" : ""}`, style: { maxHeight: o, height: o } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
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
  variant: m = "default",
  className: c = "",
  component: o,
  ...d
}) {
  const u = o || "p", _ = r ? `mds-background-color__${r}` : "", p = [
    "mds-badge",
    `mds-badge--${s}`,
    `mds-badge--${l}`,
    m === "dot" && "mds-badge--dot",
    _,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    u,
    {
      className: p,
      ...d
    },
    m === "default" ? /* @__PURE__ */ e.createElement(e.Fragment, null, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a)) : /* @__PURE__ */ e.createElement(e.Fragment, null, n && s === "big" ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }) : s === "big" ? a : "", /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t))
  );
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
}, P = {
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
  color: m = "link",
  className: c = "",
  ...o
}) => {
  const d = `mds-link ${A[a]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + P[m]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...o }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), t, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, te = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  title: l,
  className: n = ""
}) => {
  const r = s ? "color-white" : P[a], m = s ? "" : "mds-color__color-use--9";
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${n}`, role: "navigation", "aria-labelledby": "xx" }, l ? /* @__PURE__ */ e.createElement("p", { className: `mds-text--4 ${m}`, id: "xx" }, l) : "", /* @__PURE__ */ e.createElement("ul", null, v.map(t, (c) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${r}` }, c))));
};
function se({
  component: t,
  children: a,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: c,
  disabled: o = !1,
  reverse: d = !1,
  href: u,
  target: _,
  className: p = "",
  ...h
}) {
  const E = t || "button", g = r ? "mds-full-width" : "", H = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let N = {};
  return E == "a" ? (N.role = "button", N.href = u, N.target = _ || "_self", N.tabIndex = "0") : E == "div" ? (N.role = "button", N.tabIndex = "0") : N = { ...h, opts: N }, o && (E == "a" || E == "div" ? N["aria-disabled"] = "true" : N.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    E,
    {
      ...N,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${g} ${H} ${p}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
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
}, I = w(!1), B = () => S(I);
function M({
  children: t,
  variant: a = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: m,
  className: c = "",
  ...o
}) {
  const _ = B() ? "span" : s || T[a], p = a == "underline" && n ? k[a] + "--" + n : k[a], h = !r && m ? "mds-color__" + q[m] : "";
  return /* @__PURE__ */ e.createElement(I.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(_, { className: `${p} ${r ? "mds-framed" : ""} ${h} ${c}`, style: { textAlign: l }, ...o }, r ? /* @__PURE__ */ e.createElement("span", null, t) : t));
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
  children: m,
  className: c = "",
  ...o
}) => {
  const d = "mds-card " + D[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${c}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(M, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ...o }, a)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", t == "modulable" ? m : ""), t == "modulable" && r ? r : "", n);
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
const de = ({ children: t, className: a = "" }) => /* @__PURE__ */ e.createElement("section", { id: "carousel-id", "aria-label": "label-id" }, /* @__PURE__ */ e.createElement("div", { className: `mds-carousel--component ${a}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-carousel__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-carousel__track" }, t), /* @__PURE__ */ e.createElement("div", { className: "mds-carousel__navigation" }, /* @__PURE__ */ e.createElement("button", { className: "mds-carousel__btn--prev" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Panneau précédent")), /* @__PURE__ */ e.createElement("ul", { className: "mds-carousel__indicators" }), /* @__PURE__ */ e.createElement("button", { className: "mds-carousel__btn--next" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Panneau suivant"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))))), ie = ({ children: t, className: a = "" }) => /* @__PURE__ */ e.createElement("div", { className: `mds-carousel__slide ${a}` }, t);
function oe({
  label: t,
  active: a = !1,
  onClick: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function ue({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const z = {
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
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${z[a]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, _e = ({
  sticky: t = !1,
  logoHref: a = "/",
  variant: s = "default",
  className: l = "",
  headerNav: n,
  headerNavPosition: r = "under",
  headerLogoUrl: m,
  headerLogoDesktopUrl: c,
  onMenuOpen: o,
  ...d
}) => /* @__PURE__ */ e.createElement("header", { role: "banner", className: `mds-header ${s == "simple" ? "mds-header--simplified" : ""} ${t ? "mds-position--sticky" : ""} ${l}`, ...d }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: a, "aria-label": "aller à la page d'accueil xxxx" }, /* @__PURE__ */ e.createElement("img", { style: { height: "100%" }, src: m }))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side" }, n ? /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item", onClick: o }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__menu", "aria-hidden": "true" }), "menu") : "")), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__top-container mds-container mds-inset--0" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__logo-container" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: a }, /* @__PURE__ */ e.createElement("img", { style: { height: "100%" }, src: c })))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side", style: { height: "100%" } }, n && r == "inside" ? n : ""))), /* @__PURE__ */ e.createElement(f, null), n && r == "under" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop mds-display--none mds-display-md--block" }, n, /* @__PURE__ */ e.createElement(f, null))) : ""), pe = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-container mds-display--flex ${a}`, style: { marginTop: 0, marginBottom: 0 } }, /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "menu principal", className: "mds-display--flex", style: { alignItems: "center", margin: 0 } }, /* @__PURE__ */ e.createElement("ul", { className: "mds-header__menu mds-handleClick-nav-item-btn", style: { height: "100%" } }, t))), Ee = ({
  label: t,
  className: a = "",
  href: s
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${a}` }, /* @__PURE__ */ e.createElement("a", { className: `mds-btn mds-header__nav-item ${a}`, style: { height: "100%" }, href: s }, t)), Ne = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__item ${a}` }, t), O = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, R = ({
  anchorEl: t,
  anchorOrigin: a = "bl",
  children: s,
  className: l = "",
  style: n,
  sidePadding: r = !1
}) => {
  const m = O[a];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${m} ${l}`, style: n }, t, /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__container ${r ? "" : "mds-inset--0"}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, he = ({
  children: t,
  label: a,
  className: s = ""
}) => {
  const l = /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item mds-dropdown__trigger-element", style: { height: "100%" }, "aria-controls": "expandable", "aria-expanded": !1 }, a, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }));
  return /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${s}` }, /* @__PURE__ */ e.createElement(R, { anchorEl: l, style: { height: "100%" } }, t));
}, be = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), V = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, j = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, K = ({
  children: t = "person",
  color: a,
  size: s = "medium",
  baseClassName: l = "icon",
  className: n = ""
}) => {
  const r = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + j[s] : "mds-icon--" + V[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${t} ${m} ${a ? "mds-color__" + a : ""} ${n} ` });
}, ge = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  className: r = "",
  ...m
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${r} `, ...m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), ye = ({
  children: t,
  secondaryAction: a,
  className: s = "",
  trailingText: l,
  sidePadding: n = !0
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item ${n ? "mds-side-padding" : ""} ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, l) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), ve = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), fe = ({
  headline: t,
  title: a,
  supportingText: s,
  className: l = "",
  href: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? n ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: n }, a)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, a) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), $e = ({
  children: t,
  className: a = "",
  boxed: s = !1,
  divider: l = !0
}) => {
  const n = !l && !s ? "mds-action-list--no-divider" : "", r = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${n} ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: r }, t));
}, ke = ({
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
}, Ce = ({
  count: t = 1,
  page: a = 1,
  onChange: s,
  className: l = ""
}) => {
  const n = () => {
    let c;
    return t < 8 ? c = [...Array(t)].map((o, d) => /* @__PURE__ */ e.createElement(i, { key: d + 1, page: (d + 1).toString(), selected: d + 1 === a, onClick: () => r(d + 1) })) : a <= 3 ? c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", selected: a === 1, onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { key: 2, page: "2", selected: a === 2, onClick: () => r(2) }), /* @__PURE__ */ e.createElement(i, { key: 3, page: "3", selected: a === 3, onClick: () => r(3) }), /* @__PURE__ */ e.createElement(i, { key: 4, page: "4", selected: a === 4, onClick: () => r(4) }), /* @__PURE__ */ e.createElement(i, { key: 5, page: "5", selected: a === 5, onClick: () => r(5) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => r(t) })) : a > t - 3 ? c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t - 4, page: (t - 4).toString(), selected: a === t - 4, onClick: () => r(t - 4) }), /* @__PURE__ */ e.createElement(i, { key: t - 3, page: (t - 3).toString(), selected: a === t - 3, onClick: () => r(t - 3) }), /* @__PURE__ */ e.createElement(i, { key: t - 2, page: (t - 2).toString(), selected: a === t - 2, onClick: () => r(t - 2) }), /* @__PURE__ */ e.createElement(i, { key: t - 1, page: (t - 1).toString(), selected: a === t - 1, onClick: () => r(t - 1) }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), selected: a === t, onClick: () => r(t) })) : c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a - 1, page: (a - 1).toString(), onClick: () => r(a - 1) }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), selected: !0, onClick: () => r(a) }), /* @__PURE__ */ e.createElement(i, { key: a + 1, page: (a + 1).toString(), onClick: () => r(a + 1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => r(t) })), c;
  }, r = (m) => {
    s && s(m);
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: `mds-pagination ${l}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a < 2, onClick: () => r(a - 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), n(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a >= t, onClick: () => r(a + 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, L = w(!1), Q = () => S(L), xe = ({
  children: t
}) => {
  if (Q())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(L.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, t));
}, we = ({
  className: t,
  max: a = 100,
  value: s,
  ...l
}) => /* @__PURE__ */ e.createElement("progress", { className: `mds-progress-bar ${t}`, "aria-hidden": "true", value: s, max: a, ...l }, s), Se = ({
  title: t = null,
  desc: a = null,
  action: s = null,
  flip: l = !1,
  className: n = "",
  image: r = "",
  ...m
}) => {
  const c = l ? { flexDirection: "row-reverse" } : null;
  return /* @__PURE__ */ e.createElement("div", { className: "mds-push__container", ...m }, /* @__PURE__ */ e.createElement("div", { className: `mds-push ${n}`, style: c }, /* @__PURE__ */ e.createElement("div", { className: "mds-push__body" }, t ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--16" }, t) : "", a ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--32" }, a) : "", s), r ? /* @__PURE__ */ e.createElement("div", { className: "mds-push__img" }, /* @__PURE__ */ e.createElement("img", { src: r, alt: "" })) : ""));
}, Pe = ({
  autor: t,
  avatar: a,
  children: s,
  className: l = "",
  reverse: n = !1
}) => {
  const r = n ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${r} ${l}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), t ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, a ? /* @__PURE__ */ e.createElement("img", { alt: "", src: a, "aria-hidden": "true" }) : "", t) : "");
}, W = ({
  children: t,
  disabled: a,
  selected: s,
  hidden: l,
  value: n
}) => /* @__PURE__ */ e.createElement("option", { value: n, disabled: a, selected: s, hidden: l }, t), Ie = ({
  children: t,
  label: a,
  subLabel: s,
  name: l,
  placeholder: n = "Sélectionner...",
  required: r = !0,
  requiredLabel: m = "(facultatif)"
}) => {
  const c = e.useId(), o = r ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, m);
  return /* @__PURE__ */ e.createElement("div", { className: "mds-select-dropdown" }, /* @__PURE__ */ e.createElement("label", { className: "mds-label", htmlFor: c }, a, o, /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, s)), /* @__PURE__ */ e.createElement("div", { className: "mds-select__item mds-input-cell" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("select", { name: l, id: c, required: r }, n ? /* @__PURE__ */ e.createElement(W, { disabled: !0, selected: !0, hidden: !0 }, n) : "", t)));
}, Me = ({
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
}, Le = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: m = !1,
  showCloseButton: c = !1,
  className: o = ""
}) => {
  const d = x(null), u = e.useId();
  let _;
  const p = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, h = (E) => {
    E.key === "Escape" && (E.preventDefault(), E.stopImmediatePropagation(), p());
  }, b = (E) => {
    E.target.classList.contains("mds-dialog") && p();
  };
  return y(() => (c && (_ = d.current.querySelector("button.mds-close"), _.addEventListener("click", p)), d.current.addEventListener("click", b), () => {
    c && _.removeEventListener("click", p);
    try {
      d.current.removeEventListener("click", b);
    } catch {
    }
  }), []), y(() => (a === !0 ? (document.addEventListener("keydown", h), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", h), document.body.style.overflow = "scroll";
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${o}`, "aria-modal": "true", "aria-labelledby": u }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${J[l]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(G, { title: n, icon: r, visuallyHidden: m, id: u }), t)));
}, He = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), Fe = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), Ae = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(M, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, v.map(t, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, Te = ({
  reverse: t = !1,
  children: a,
  className: s = "",
  variant: l = "default",
  ...n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${l == "pills" ? "mds-tabs--pills mds-tabs--standalone" : ""} ${t ? "mds-tabs--reverse" : ""} ${s}`, ...n }, a), qe = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, v.map(t, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, F(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), Be = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const n = a ? /* @__PURE__ */ e.createElement(K, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, n, t);
}, De = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, v.map(t, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), ze = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), C = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, Oe = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: r,
  optionalText: m = "facultatif",
  required: c = !1,
  reverse: o = !1,
  supportingText: d,
  startIcon: u,
  type: _ = "text",
  className: p = "",
  ...h
}) => {
  const b = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), E = C[_] || C.text, g = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${o ? "mds-input-group--reverse" : ""} ${p}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, r, " ", b, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${u ? "mds-wrapper--icon-left" : ""}` }, u ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${u}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${E}`, id: n, type: _, "aria-required": c, "aria-invalid": a, "aria-describedby": a && s ? g : "", ...h }), _ === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only", "aria-live": "polite" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: g }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Re = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1,
  className: m = ""
}) => {
  const c = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: c, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
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
  de as Carousel,
  ie as CarouselSlide,
  oe as ChipsItem,
  ue as ChipsList,
  f as Divider,
  _e as Header,
  pe as HeaderNav,
  Ee as HeaderNavItem,
  he as HeaderNavMenu,
  be as Hero,
  K as Icon,
  ge as IconButton,
  ae as Link,
  $e as List,
  ye as ListItem,
  ve as ListItemIcon,
  fe as ListItemText,
  ke as Loader,
  R as Menu,
  Ne as MenuItem,
  Ce as Pagination,
  i as PaginationItem,
  xe as Play,
  we as ProgressLinear,
  Se as Pushout,
  Pe as Quote,
  Ie as Select,
  W as SelectItem,
  Me as ShowMore,
  Le as SidePanel,
  He as SidePanelContent,
  Fe as SidePanelFooter,
  G as SidePanelHeader,
  Ae as Summary,
  Be as Tab,
  qe as TabList,
  ze as TabPanel,
  De as TabPanelList,
  Te as Tabs,
  Oe as TextField,
  Re as Toggle,
  M as Typography
};
//# sourceMappingURL=index.es.js.map
