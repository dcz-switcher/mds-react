'use client';
import e, { useRef as C, useEffect as g, Children as f, createContext as k, useContext as x, cloneElement as L } from "react";
const J = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), U = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: r,
  expanded: n = l,
  expandIcon: c = "expand-more",
  className: m = ""
}) => {
  const [o, d] = e.useState(0), [u, p] = e.useState(n), E = C(null), N = () => E && E.current ? E.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    p(!u), r && t && r(t);
  };
  return g(() => (d(u ? N() : 0), () => {
  }), [u]), g(() => (p(n), () => {
  }), [n]), /* @__PURE__ */ e.createElement("div", { ref: E, id: t, className: `mds-accordion__item ${m}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${u ? "active" : ""}`, "aria-expanded": u }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${u ? "active" : ""}`, style: { maxHeight: o } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function X({
  children: t,
  severity: a = "info",
  title: s,
  icon: l = "info",
  onClose: r,
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), r && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: r }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function Y({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: l,
  color: r,
  className: n = ""
}) {
  const c = r ? `mds-background-color__${r}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${c} ${n}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
const Z = ({
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
}, ee = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: r,
  endIcon: n,
  color: c = "link",
  className: m = "",
  ...o
}) => {
  const d = `mds-link ${H[a]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + w[c]} ${m}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...o }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), t, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }));
}, te = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: l = ""
}) => {
  const r = s ? "color-white" : w[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(t, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${r}` }, n))));
};
function ae({
  component: t,
  children: a,
  color: s,
  variant: l = "primary",
  size: r = "medium",
  fullWidth: n = !1,
  startIcon: c,
  endIcon: m,
  disabled: o = !1,
  reverse: d = !1,
  href: u,
  target: p,
  className: E = "",
  ...N
}) {
  const _ = t || "button", y = n ? "mds-full-width" : "", M = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let b = {};
  return _ == "a" ? (b.role = "button", b.href = u, b.target = p || "_self", b.tabIndex = "0") : _ == "div" ? (b.role = "button", b.tabIndex = "0") : b = { ...N, opts: b }, o && (_ == "a" || _ == "div" ? b["aria-disabled"] = "true" : b.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...b,
      className: `mds-btn mds-btn--${l} mds-btn--${r} ${y} ${M} ${E}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    a,
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }) : null
  );
}
const se = ({
  title: t,
  subtitle: a,
  children: s,
  color: l = "color-grey--5",
  icon: r,
  className: n = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${n}` }, r && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${r} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), le = ({
  children: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, t), ne = ({
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
}, A = {
  primary: "color-macif--1",
  text: "color-grey--80"
}, S = k(!1), T = () => x(S);
function I({
  children: t,
  variant: a = "body2",
  component: s,
  align: l = "left",
  underlineColor: r = "",
  framed: n = !1,
  color: c,
  className: m = "",
  ...o
}) {
  const p = T() ? "span" : s || F[a], E = a == "underline" && r ? v[a] + "--" + r : v[a], N = !n && a.substring(0, 1) != "h" && c ? "mds-color__" + A[c] : "";
  return /* @__PURE__ */ e.createElement(S.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(p, { className: `${E} ${n ? "mds-framed" : ""} ${N} ${m}`, style: { textAlign: l }, ...o }, n ? /* @__PURE__ */ e.createElement("span", null, t) : t));
}
const q = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, re = ({
  variant: t = "basic1",
  title: a,
  titleLevel: s = "h3",
  subTitle: l,
  cardMedia: r,
  cardHeader: n,
  children: c,
  className: m = "",
  ...o
}) => {
  const d = "mds-card " + q[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${m}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(I, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ...o }, a)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", t == "modulable" ? c : ""), t == "modulable" && n ? n : "", r);
};
function me({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: l = "_self",
  role: r,
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${n}`, role: r }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function ce({
  label: t,
  active: a = !1,
  onClick: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function de({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${l} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const B = {
  thin: "basic",
  heavy: "module"
}, z = ({
  component: t = "hr",
  variant: a = "thin",
  reverse: s = !1,
  className: l = "",
  ...r
}) => {
  const n = t;
  return /* @__PURE__ */ e.createElement(n, { className: `mds-divider mds-divider--${B[a]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...r });
}, ie = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: r,
  className: n = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${r}`, alt: "" }))), D = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, O = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, R = ({
  children: t = "person",
  color: a,
  size: s = "medium",
  baseClassName: l = "icon",
  className: r = ""
}) => {
  const n = "mds-" + l + "__", c = l == "picto" ? "mds-picto--" + O[s] : "mds-icon--" + D[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${t} ${c} ${a ? "mds-color__" + a : ""} ${r} ` });
}, oe = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: l = "medium",
  variant: r = "primary",
  className: n = "",
  ...c
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${r} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${n} `, ...c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), ue = ({
  children: t,
  secondaryAction: a,
  className: s = "",
  trailingText: l
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item mds-side-padding ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, l) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), pe = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), Ee = ({
  headline: t,
  title: a,
  supportingText: s,
  className: l = "",
  href: r
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? r ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: r }, a)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, a) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), _e = ({
  children: t,
  className: a = "",
  boxed: s = !1
}) => {
  const l = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: l }, t));
}, be = ({
  title: t,
  reverse: a = !1
}) => {
  const s = a ? "mds-loader__layout mds-loader__layout--reverse" : "mds-loader__layout", l = a ? "mds-loader mds-loader--reverse" : "mds-loader";
  return /* @__PURE__ */ e.createElement("div", { className: s }, /* @__PURE__ */ e.createElement("div", { className: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t)));
}, Ne = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `}mds-dropdown__item ${a}` }, t), V = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, he = ({
  anchorEl: t,
  anchorOrigin: a = "bl",
  children: s,
  className: l = ""
}) => {
  const r = V[a];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${r} ${l}` }, t, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, i = ({
  selected: t = !1,
  page: a,
  variant: s = "outlined",
  onClick: l,
  className: r = ""
}) => {
  const n = () => {
    l && l();
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s === "ellipsis" ? /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex ${r}`, "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("span", null, "...")) : /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item ${r}`, onClick: n }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn", type: "button", "aria-label": `page ${a}`, "aria-current": t }, a)));
}, ye = ({
  count: t = 1,
  page: a = 1,
  onChange: s,
  className: l = ""
}) => {
  const r = () => {
    let m;
    return t < 8 ? m = [...Array(t)].map((o, d) => /* @__PURE__ */ e.createElement(i, { key: d + 1, page: (d + 1).toString(), selected: d + 1 === a, onClick: () => n(d + 1) })) : a <= 3 ? m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", selected: a === 1, onClick: () => n(1) }), /* @__PURE__ */ e.createElement(i, { key: 2, page: "2", selected: a === 2, onClick: () => n(2) }), /* @__PURE__ */ e.createElement(i, { key: 3, page: "3", selected: a === 3, onClick: () => n(3) }), /* @__PURE__ */ e.createElement(i, { key: 4, page: "4", selected: a === 4, onClick: () => n(4) }), /* @__PURE__ */ e.createElement(i, { key: 5, page: "5", selected: a === 5, onClick: () => n(5) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => n(t) })) : a > t - 3 ? m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => n(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t - 4, page: (t - 4).toString(), selected: a === t - 4, onClick: () => n(t - 4) }), /* @__PURE__ */ e.createElement(i, { key: t - 3, page: (t - 3).toString(), selected: a === t - 3, onClick: () => n(t - 3) }), /* @__PURE__ */ e.createElement(i, { key: t - 2, page: (t - 2).toString(), selected: a === t - 2, onClick: () => n(t - 2) }), /* @__PURE__ */ e.createElement(i, { key: t - 1, page: (t - 1).toString(), selected: a === t - 1, onClick: () => n(t - 1) }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), selected: a === t, onClick: () => n(t) })) : m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => n(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a - 1, page: (a - 1).toString(), onClick: () => n(a - 1) }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), selected: !0, onClick: () => n(a) }), /* @__PURE__ */ e.createElement(i, { key: a + 1, page: (a + 1).toString(), onClick: () => n(a + 1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => n(t) })), m;
  }, n = (c) => {
    s && s(c);
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: `mds-pagination ${l}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a < 2, onClick: () => n(a - 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), r(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a >= t, onClick: () => n(a + 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, P = k(!1), K = () => x(P), ge = ({
  children: t
}) => {
  if (K())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(P.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, t));
}, fe = ({
  autor: t,
  avatar: a,
  children: s,
  className: l = "",
  reverse: r = !1
}) => {
  const n = r ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${n} ${l}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), t ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, a ? /* @__PURE__ */ e.createElement("img", { alt: "", src: a, "aria-hidden": "true" }) : "", t) : "");
}, Q = ({
  children: t,
  disabled: a,
  selected: s,
  hidden: l,
  value: r
}) => /* @__PURE__ */ e.createElement("option", { value: r, disabled: a, selected: s, hidden: l }, t), ve = ({
  children: t,
  label: a,
  subLabel: s,
  name: l,
  placeholder: r = "Sélectionner...",
  required: n = !0,
  requiredLabel: c = "(facultatif)"
}) => {
  const m = e.useId(), o = n ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, c);
  return /* @__PURE__ */ e.createElement("div", { className: "mds-select-dropdown" }, /* @__PURE__ */ e.createElement("label", { className: "mds-label", htmlFor: m }, a, o, /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, s)), /* @__PURE__ */ e.createElement("div", { className: "mds-select__item mds-input-cell" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("select", { name: l, id: m, required: n }, r ? /* @__PURE__ */ e.createElement(Q, { disabled: !0, selected: !0, hidden: !0 }, r) : "", t)));
}, $e = ({
  children: t,
  className: a = "",
  labelClosed: s = "Afficher plus",
  labelOpened: l = "Afficher moins"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { type: "button", className: `mds-show-more__btn mds-text--2 mds-collapse ${a}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-visible" }, s), /* @__PURE__ */ e.createElement("span", { className: "mds-hidden" }, l), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" })), /* @__PURE__ */ e.createElement("div", { className: "mds-collapse__content" }, t)), W = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: l = !1,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(z, null)), j = {
  small: "small",
  medium: "medium",
  large: "big"
}, Ce = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: l = "medium",
  title: r,
  icon: n,
  visuallyHideTitle: c = !1,
  showCloseButton: m = !1,
  className: o = ""
}) => {
  const d = C(null), u = e.useId();
  let p;
  const E = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, N = (_) => {
    _.key === "Escape" && (_.preventDefault(), _.stopImmediatePropagation(), E());
  }, h = (_) => {
    _.target.classList.contains("mds-dialog") && E();
  };
  return g(() => (m && (p = d.current.querySelector("button.mds-close"), p.addEventListener("click", E)), d.current.addEventListener("click", h), () => {
    m && p.removeEventListener("click", E);
    try {
      d.current.removeEventListener("click", h);
    } catch {
    }
  }), []), g(() => (a === !0 ? (document.addEventListener("keydown", N), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", N), document.body.style.overflow = "scroll";
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${o}`, "aria-modal": "true", "aria-labelledby": u }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${j[l]}`, role: "document" }, m && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(W, { title: r, icon: n, visuallyHidden: c, id: u }), t)));
}, ke = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), xe = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), we = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(I, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(t, (r) => /* @__PURE__ */ e.createElement("li", null, r))));
}, Se = ({
  reverse: t = !1,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${t ? "mds-tabs--reverse" : ""} ${s}` }, a), Ie = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(t, (l, r) => r == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, L(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), Pe = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const r = a ? /* @__PURE__ */ e.createElement(R, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, r, t);
}, Me = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, f.map(t, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), Le = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), $ = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, He = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: l = !1,
  id: r,
  label: n,
  optionalText: c = "facultatif",
  required: m = !1,
  reverse: o = !1,
  supportingText: d,
  startIcon: u,
  type: p = "text",
  className: E = "",
  ...N
}) => {
  const h = m ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", c, ")"), _ = $[p] || $.text, y = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${o ? "mds-input-group--reverse" : ""} ${E}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: r, className: "mds-label" }, n, " ", h, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${u ? "mds-wrapper--icon-left" : ""}` }, u ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${u}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${_}`, id: r, type: p, "aria-required": m, "aria-invalid": a, "aria-describedby": a && s ? y : "", ...N }), p === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only", "aria-live": "polite" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: y }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Fe = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: l = !1,
  onChange: r,
  reverse: n = !1,
  className: c = ""
}) => {
  const m = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${n ? "mds-toggle--reverse" : ""} ${c}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: r, role: "switch", id: m, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  J as Accordion,
  U as AccordionItem,
  X as Alert,
  Y as Badge,
  Z as Box,
  te as Breadcrumb,
  ae as Button,
  se as Callout,
  le as CalloutAction,
  ne as CalloutContent,
  re as Card,
  me as CardCompactV,
  re as CardHeader,
  re as CardMedia,
  ce as ChipsItem,
  de as ChipsList,
  z as Divider,
  ie as Hero,
  R as Icon,
  oe as IconButton,
  ee as Link,
  _e as List,
  ue as ListItem,
  pe as ListItemIcon,
  Ee as ListItemText,
  be as Loader,
  he as Menu,
  Ne as MenuItem,
  ye as Pagination,
  i as PaginationItem,
  ge as Play,
  fe as Quote,
  ve as Select,
  Q as SelectItem,
  $e as ShowMore,
  Ce as SidePanel,
  ke as SidePanelContent,
  xe as SidePanelFooter,
  W as SidePanelHeader,
  we as Summary,
  Pe as Tab,
  Ie as TabList,
  Le as TabPanel,
  Me as TabPanelList,
  Se as Tabs,
  He as TextField,
  Fe as Toggle,
  I as Typography
};
//# sourceMappingURL=index.es.js.map
