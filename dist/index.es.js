'use client';
import e, { useRef as x, useEffect as y, Children as v, createContext as w, useContext as S, cloneElement as F } from "react";
const X = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${t}` }, a), Y = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: m = "expand-more",
  className: c = ""
}) => {
  const [o, d] = e.useState(0), [u, p] = e.useState(r), E = x(null), N = () => E && E.current ? E.current.querySelector(".mds-accordion__body").offsetHeight : 0, b = () => {
    p(!u), n && a && n(a);
  };
  return y(() => (d(u ? N() : 0), () => {
  }), [u]), y(() => (p(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: E, id: a, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: b, className: `mds-collapse mds-collapse__label ${u ? "active" : ""}`, "aria-expanded": u }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${u ? "active" : ""}`, style: { maxHeight: o } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function Z({
  children: a,
  severity: t = "info",
  title: s,
  icon: l = "info",
  onClose: n,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function ee({
  ariaLabel: a,
  label: t,
  size: s = "small",
  severity: l = "neutral",
  icon: n,
  color: r,
  variant: m = "default",
  className: c = "",
  component: o,
  ...d
}) {
  const u = o || "p", p = r ? `mds-background-color__${r}` : "", E = [
    "mds-badge",
    `mds-badge--${s}`,
    `mds-badge--${l}`,
    m === "dot" && "mds-badge--dot",
    p,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    u,
    {
      className: E,
      ...d
    },
    m === "default" ? /* @__PURE__ */ e.createElement(e.Fragment, null, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t)) : /* @__PURE__ */ e.createElement(e.Fragment, null, n && s === "big" ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }) : s === "big" ? t : "", /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a))
  );
}
const $ = ({
  children: a,
  className: t = "",
  ...s
}) => /* @__PURE__ */ e.createElement("div", { className: t, ...s }, a), A = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, I = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, te = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: m = "link",
  className: c = "",
  ...o
}) => {
  const d = `mds-link ${A[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + I[m]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...o }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, ae = ({
  children: a,
  color: t = "link",
  reverse: s = !1,
  className: l = ""
}) => {
  const n = s ? "color-white" : I[t];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, v.map(a, (r) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${n}` }, r))));
};
function se({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: c,
  disabled: o = !1,
  reverse: d = !1,
  href: u,
  target: p,
  className: E = "",
  ...N
}) {
  const _ = a || "button", g = r ? "mds-full-width" : "", H = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let h = {};
  return _ == "a" ? (h.role = "button", h.href = u, h.target = p || "_self", h.tabIndex = "0") : _ == "div" ? (h.role = "button", h.tabIndex = "0") : h = { ...N, opts: h }, o && (_ == "a" || _ == "div" ? h["aria-disabled"] = "true" : h.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...h,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${g} ${H} ${E}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    t,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
const le = ({
  title: a,
  subtitle: t,
  children: s,
  color: l = "color-grey--5",
  icon: n,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${r}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, a, t && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, t)), s), ne = ({
  children: a
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, a), re = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${t}` }, a), k = {
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
  children: a,
  variant: t = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  color: m,
  className: c = "",
  ...o
}) {
  const p = B() ? "span" : s || T[t], E = t == "underline" && n ? k[t] + "--" + n : k[t], N = !r && m ? "mds-color__" + q[m] : "";
  return /* @__PURE__ */ e.createElement(P.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(p, { className: `${E} ${r ? "mds-framed" : ""} ${N} ${c}`, style: { textAlign: l }, ...o }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a));
}
const D = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, me = ({
  variant: a = "basic1",
  title: t,
  titleLevel: s = "h3",
  subTitle: l,
  cardMedia: n,
  cardHeader: r,
  children: m,
  className: c = "",
  ...o
}) => {
  const d = "mds-card " + D[a];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${c}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(M, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ...o }, t)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", a == "modulable" ? m : ""), a == "modulable" && r ? r : "", n);
};
function ce({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${r}`, role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function de({
  label: a,
  active: t = !1,
  onClick: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function ie({
  children: a,
  reverse: t = !1,
  size: s = "big",
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${t == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const z = {
  thin: "basic",
  heavy: "module"
}, f = ({
  component: a = "hr",
  variant: t = "thin",
  reverse: s = !1,
  className: l = "",
  ...n
}) => {
  const r = a;
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${z[t]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, oe = ({
  sticky: a = !1,
  logoHref: t = "/",
  variant: s = "default",
  className: l = "",
  headerNav: n,
  headerNavPosition: r = "under",
  headerLogoUrl: m,
  headerLogoDesktopUrl: c,
  onMenuOpen: o,
  ...d
}) => /* @__PURE__ */ e.createElement("header", { role: "banner", className: `mds-header ${s == "simple" ? "mds-header--simplified" : ""} ${a ? "mds-position--sticky" : ""} ${l}`, ...d }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: t, "aria-label": "aller à la page d'accueil xxxx" }, /* @__PURE__ */ e.createElement("img", { style: { height: "100%" }, src: m }))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side" }, n ? /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item", onClick: o }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__menu", "aria-hidden": "true" }), "menu") : "")), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__top-container mds-container mds-inset--0" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__logo-container" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: t }, /* @__PURE__ */ e.createElement("img", { style: { height: "100%" }, src: c })))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side", style: { height: "100%" } }, n && r == "inside" ? n : ""))), /* @__PURE__ */ e.createElement(f, null), n && r == "under" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop mds-display--none mds-display-md--block" }, n, /* @__PURE__ */ e.createElement(f, null))) : ""), ue = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-container mds-display--flex ${t}`, style: { marginTop: 0, marginBottom: 0 } }, /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "menu principal", className: "mds-display--flex", style: { alignItems: "center", margin: 0 } }, /* @__PURE__ */ e.createElement("ul", { className: "mds-header__menu mds-handleClick-nav-item-btn", style: { height: "100%" } }, a))), pe = ({
  label: a,
  className: t = "",
  href: s
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${t}` }, /* @__PURE__ */ e.createElement("a", { className: `mds-btn mds-header__nav-item ${t}`, style: { height: "100%" }, href: s }, a)), Ee = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__item ${t}` }, a), O = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, R = ({
  anchorEl: a,
  anchorOrigin: t = "bl",
  children: s,
  className: l = "",
  style: n,
  sidePadding: r = !1
}) => {
  const m = O[t];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${m} ${l}`, style: n }, a, /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__container ${r ? "" : "mds-inset--0"}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, _e = ({
  children: a,
  label: t,
  className: s = ""
}) => {
  const l = /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item mds-dropdown__trigger-element", style: { height: "100%" }, "aria-controls": "expandable", "aria-expanded": !1 }, t, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }));
  return /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${s}` }, /* @__PURE__ */ e.createElement(R, { anchorEl: l, style: { height: "100%" } }, a));
}, he = ({
  upTitle: a,
  title: t = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), V = {
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
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: l = "icon",
  className: n = ""
}) => {
  const r = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + j[s] : "mds-icon--" + V[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${a} ${m} ${t ? "mds-color__" + t : ""} ${n} ` });
}, Ne = ({
  icon: a,
  label: t,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  className: r = "",
  ...m
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${r} `, ...m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${a}`, "aria-hidden": "true" })), be = ({
  children: a,
  secondaryAction: t,
  className: s = "",
  trailingText: l,
  sidePadding: n = !0
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item ${n ? "mds-side-padding" : ""} ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, a), l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, l) : "", t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, t) : ""), ge = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${t}`, "aria-hidden": "true" }, a), ye = ({
  headline: a,
  title: t,
  supportingText: s,
  className: l = "",
  href: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, a) : "", t ? n ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: n }, t)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, t) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), ve = ({
  children: a,
  className: t = "",
  boxed: s = !1,
  divider: l = !0
}) => {
  const n = !l && !s ? "mds-action-list--no-divider" : "", r = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${n} ${t}` }, /* @__PURE__ */ e.createElement("ul", { className: r }, a));
}, fe = ({
  title: a,
  reverse: t = !1
}) => {
  const s = t ? "mds-loader__layout mds-loader__layout--reverse" : "mds-loader__layout", l = t ? "mds-loader mds-loader--reverse" : "mds-loader";
  return /* @__PURE__ */ e.createElement("div", { className: s }, /* @__PURE__ */ e.createElement("div", { className: l }, /* @__PURE__ */ e.createElement("p", { className: "mds-sr-only" }, a)));
}, i = ({
  selected: a = !1,
  page: t,
  variant: s = "outlined",
  onClick: l,
  className: n = ""
}) => {
  const r = () => {
    l && l();
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s === "ellipsis" ? /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex ${n}`, "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("span", null, "...")) : /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item ${n}`, onClick: r }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn", type: "button", "aria-label": `page ${t}`, "aria-current": a }, t)));
}, $e = ({
  count: a = 1,
  page: t = 1,
  onChange: s,
  className: l = ""
}) => {
  const n = () => {
    let c;
    return a < 8 ? c = [...Array(a)].map((o, d) => /* @__PURE__ */ e.createElement(i, { key: d + 1, page: (d + 1).toString(), selected: d + 1 === t, onClick: () => r(d + 1) })) : t <= 3 ? c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", selected: t === 1, onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { key: 2, page: "2", selected: t === 2, onClick: () => r(2) }), /* @__PURE__ */ e.createElement(i, { key: 3, page: "3", selected: t === 3, onClick: () => r(3) }), /* @__PURE__ */ e.createElement(i, { key: 4, page: "4", selected: t === 4, onClick: () => r(4) }), /* @__PURE__ */ e.createElement(i, { key: 5, page: "5", selected: t === 5, onClick: () => r(5) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), onClick: () => r(a) })) : t > a - 3 ? c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a - 4, page: (a - 4).toString(), selected: t === a - 4, onClick: () => r(a - 4) }), /* @__PURE__ */ e.createElement(i, { key: a - 3, page: (a - 3).toString(), selected: t === a - 3, onClick: () => r(a - 3) }), /* @__PURE__ */ e.createElement(i, { key: a - 2, page: (a - 2).toString(), selected: t === a - 2, onClick: () => r(a - 2) }), /* @__PURE__ */ e.createElement(i, { key: a - 1, page: (a - 1).toString(), selected: t === a - 1, onClick: () => r(a - 1) }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), selected: t === a, onClick: () => r(a) })) : c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => r(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t - 1, page: (t - 1).toString(), onClick: () => r(t - 1) }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), selected: !0, onClick: () => r(t) }), /* @__PURE__ */ e.createElement(i, { key: t + 1, page: (t + 1).toString(), onClick: () => r(t + 1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), onClick: () => r(a) })), c;
  }, r = (m) => {
    s && s(m);
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: `mds-pagination ${l}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: t < 2, onClick: () => r(t - 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), n(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: t >= a, onClick: () => r(t + 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, L = w(!1), Q = () => S(L), ke = ({
  children: a
}) => {
  if (Q())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(L.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, a));
}, Ce = ({
  className: a,
  max: t = 100,
  value: s,
  ...l
}) => /* @__PURE__ */ e.createElement("progress", { className: `mds-progress-bar ${a}`, "aria-hidden": "true", value: s, max: t, ...l }, s), xe = ({
  title: a = null,
  desc: t = null,
  action: s = null,
  flip: l = !1,
  className: n = "",
  image: r = "",
  ...m
}) => {
  const c = l ? { flexDirection: "row-reverse" } : null;
  return /* @__PURE__ */ e.createElement("div", { className: "mds-push__container", ...m }, /* @__PURE__ */ e.createElement("div", { className: `mds-push ${n}`, style: c }, /* @__PURE__ */ e.createElement("div", { className: "mds-push__body" }, a ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--16" }, a) : "", t ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--32" }, t) : "", s), r ? /* @__PURE__ */ e.createElement("div", { className: "mds-push__img" }, /* @__PURE__ */ e.createElement("img", { src: r, alt: "" })) : ""));
}, we = ({
  autor: a,
  avatar: t,
  children: s,
  className: l = "",
  reverse: n = !1
}) => {
  const r = n ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${r} ${l}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), a ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, t ? /* @__PURE__ */ e.createElement("img", { alt: "", src: t, "aria-hidden": "true" }) : "", a) : "");
}, W = ({
  children: a,
  disabled: t,
  selected: s,
  hidden: l,
  value: n
}) => /* @__PURE__ */ e.createElement("option", { value: n, disabled: t, selected: s, hidden: l }, a), Se = ({
  children: a,
  label: t,
  subLabel: s,
  name: l,
  placeholder: n = "Sélectionner...",
  required: r = !0,
  requiredLabel: m = "(facultatif)"
}) => {
  const c = e.useId(), o = r ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, m);
  return /* @__PURE__ */ e.createElement("div", { className: "mds-select-dropdown" }, /* @__PURE__ */ e.createElement("label", { className: "mds-label", htmlFor: c }, t, o, /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, s)), /* @__PURE__ */ e.createElement("div", { className: "mds-select__item mds-input-cell" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("select", { name: l, id: c, required: r }, n ? /* @__PURE__ */ e.createElement(W, { disabled: !0, selected: !0, hidden: !0 }, n) : "", a)));
}, Ie = ({
  children: a,
  className: t = "",
  labelClosed: s = "Afficher plus",
  labelOpened: l = "Afficher moins"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { type: "button", className: `mds-show-more__btn mds-text--2 mds-collapse ${t}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-visible" }, s), /* @__PURE__ */ e.createElement("span", { className: "mds-hidden" }, l), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" })), /* @__PURE__ */ e.createElement("div", { className: "mds-collapse__content" }, a)), G = ({
  id: a,
  title: t,
  icon: s,
  visuallyHidden: l = !1,
  className: n = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: a, className: "mds-modal__title" }, t)), /* @__PURE__ */ e.createElement(f, null)), J = {
  small: "small",
  medium: "medium",
  large: "big"
}, Pe = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: r,
  visuallyHideTitle: m = !1,
  showCloseButton: c = !1,
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
  return y(() => (c && (p = d.current.querySelector("button.mds-close"), p.addEventListener("click", E)), d.current.addEventListener("click", b), () => {
    c && p.removeEventListener("click", E);
    try {
      d.current.removeEventListener("click", b);
    } catch {
    }
  }), []), y(() => (t === !0 ? (document.addEventListener("keydown", N), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", N), document.body.style.overflow = "scroll";
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${o}`, "aria-modal": "true", "aria-labelledby": u }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${J[l]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(G, { title: n, icon: r, visuallyHidden: m, id: u }), a)));
}, Me = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${t}`, role: "document" }, a), Le = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${t}` }, a), He = ({
  children: a,
  title: t = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(M, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, t), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, v.map(a, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, Fe = ({
  reverse: a = !1,
  children: t,
  className: s = "",
  variant: l = "default",
  ...n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${l == "pills" ? "mds-tabs--pills mds-tabs--standalone" : ""} ${a ? "mds-tabs--reverse" : ""} ${s}`, ...n }, t), Ae = ({
  children: a,
  ariaLabel: t,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": t, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, v.map(a, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, F(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), Te = ({
  label: a,
  icon: t,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const n = t ? /* @__PURE__ */ e.createElement(K, { baseClassName: "picto", size: "xsmall" }, t) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, n, a);
}, qe = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${t}` }, v.map(a, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), Be = ({
  children: a,
  hidden: t = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: t }, a), C = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, De = ({
  endAdornment: a,
  error: t = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: r,
  optionalText: m = "facultatif",
  required: c = !1,
  reverse: o = !1,
  supportingText: d,
  startIcon: u,
  type: p = "text",
  className: E = "",
  ...N
}) => {
  const b = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), _ = C[p] || C.text, g = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${o ? "mds-input-group--reverse" : ""} ${E}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, r, " ", b, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${u ? "mds-wrapper--icon-left" : ""}` }, u ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${u}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${_}`, id: n, type: p, "aria-required": c, "aria-invalid": t, "aria-describedby": t && s ? g : "", ...N }), p === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only", "aria-live": "polite" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : a ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", a, " ") : ""), t && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: g }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, ze = ({
  id: a,
  label: t,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: r = !1,
  className: m = ""
}) => {
  const c = a || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: c, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t)));
};
export {
  X as Accordion,
  Y as AccordionItem,
  Z as Alert,
  ee as Badge,
  $ as Box,
  ae as Breadcrumb,
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
  K as Icon,
  Ne as IconButton,
  te as Link,
  ve as List,
  be as ListItem,
  ge as ListItemIcon,
  ye as ListItemText,
  fe as Loader,
  R as Menu,
  Ee as MenuItem,
  $e as Pagination,
  i as PaginationItem,
  ke as Play,
  Ce as ProgressLinear,
  xe as Pushout,
  we as Quote,
  Se as Select,
  W as SelectItem,
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
  ze as Toggle,
  M as Typography
};
//# sourceMappingURL=index.es.js.map
