'use client';
import e, { useRef as k, useEffect as g, Children as f, createContext as C, useContext as x, cloneElement as L } from "react";
const G = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), J = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: r,
  expanded: n = l,
  expandIcon: m = "expand-more",
  className: c = ""
}) => {
  const [E, d] = e.useState(0), [o, u] = e.useState(n), p = k(null), N = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    u(!o), r && t && r(t);
  };
  return g(() => (d(o ? N() : 0), () => {
  }), [o]), g(() => (u(n), () => {
  }), [n]), /* @__PURE__ */ e.createElement("div", { ref: p, id: t, className: `mds-accordion__item ${c}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${o ? "active" : ""}`, "aria-expanded": o }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${o ? "active" : ""}`, style: { maxHeight: E } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function U({
  children: t,
  severity: a = "info",
  title: s,
  icon: l = "info",
  onClose: r,
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), r && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: r }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function X({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: l,
  color: r,
  className: n = ""
}) {
  const m = r ? `mds-background-color__${r}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${m} ${n}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
const Y = ({
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
}, Z = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: r,
  endIcon: n,
  color: m = "link",
  className: c = "",
  ...E
}) => {
  const d = `mds-link ${H[a]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + w[m]} ${c}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...E }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), t, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }));
}, ee = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: l = ""
}) => {
  const r = s ? "color-white" : w[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(t, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${r}` }, n))));
};
function te({
  component: t,
  children: a,
  color: s,
  variant: l = "primary",
  size: r = "medium",
  fullWidth: n = !1,
  startIcon: m,
  endIcon: c,
  disabled: E = !1,
  reverse: d = !1,
  href: o,
  target: u,
  className: p = "",
  ...N
}) {
  const _ = t || "button", y = n ? "mds-full-width" : "", M = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let b = {};
  return _ == "a" ? (b.role = "button", b.href = o, b.target = u || "_self", b.tabIndex = "0") : _ == "div" ? (b.role = "button", b.tabIndex = "0") : b = { ...N, opts: b }, E && (_ == "a" || _ == "div" ? b["aria-disabled"] = "true" : b.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    _,
    {
      ...b,
      className: `mds-btn mds-btn--${l} mds-btn--${r} ${y} ${M} ${p}`
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
  color: l = "color-grey--5",
  icon: r,
  className: n = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${n}` }, r && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${r} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), se = ({
  children: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, t), le = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout__desc ${a}` }, t), $ = {
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
}, S = C(!1), T = () => x(S);
function P({
  children: t,
  variant: a = "body2",
  component: s,
  align: l = "left",
  underlineColor: r = "",
  framed: n = !1,
  color: m,
  className: c = "",
  ...E
}) {
  const u = T() ? "span" : s || F[a], p = a == "underline" && r ? $[a] + "--" + r : $[a], N = !n && a.substring(0, 1) != "h" && m ? "mds-color__" + A[m] : "";
  return /* @__PURE__ */ e.createElement(S.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(u, { className: `${p} ${n ? "mds-framed" : ""} ${N} ${c}`, style: { textAlign: l }, ...E }, n ? /* @__PURE__ */ e.createElement("span", null, t) : t));
}
const q = {
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
  subTitle: l,
  cardMedia: r,
  cardHeader: n,
  children: m,
  className: c = "",
  ...E
}) => {
  const d = "mds-card " + q[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${c}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(P, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ...E }, a)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", t == "modulable" ? m : ""), t == "modulable" && n ? n : "", r);
};
function re({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: l = "_self",
  role: r,
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${n}`, role: r }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function me({
  label: t,
  active: a = !1,
  onClick: s,
  className: l = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: l }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function ce({
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
}, de = ({
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
  const n = "mds-" + l + "__", m = l == "picto" ? "mds-picto--" + O[s] : "mds-icon--" + D[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${t} ${m} ${a ? "mds-color__" + a : ""} ${r} ` });
}, ie = ({
  icon: t,
  label: a,
  reverse: s = !1,
  size: l = "medium",
  variant: r = "primary",
  className: n = "",
  ...m
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${r} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${n} `, ...m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" })), oe = ({
  children: t,
  secondaryAction: a,
  className: s = "",
  trailingText: l
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item mds-side-padding ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, l) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), ue = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), pe = ({
  headline: t,
  title: a,
  supportingText: s,
  className: l = "",
  href: r
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? r ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: r }, a)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, a) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), Ee = ({
  children: t,
  className: a = "",
  boxed: s = !1
}) => {
  const l = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: l }, t));
}, _e = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `}mds-dropdown__item ${a}` }, t), V = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, be = ({
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
}, Ne = ({
  count: t = 1,
  page: a = 1,
  onChange: s,
  className: l = ""
}) => {
  const r = () => {
    let c;
    return t < 8 ? c = [...Array(t)].map((E, d) => /* @__PURE__ */ e.createElement(i, { key: d + 1, page: (d + 1).toString(), selected: d + 1 === a, onClick: () => n(d + 1) })) : a <= 3 ? c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", selected: a === 1, onClick: () => n(1) }), /* @__PURE__ */ e.createElement(i, { key: 2, page: "2", selected: a === 2, onClick: () => n(2) }), /* @__PURE__ */ e.createElement(i, { key: 3, page: "3", selected: a === 3, onClick: () => n(3) }), /* @__PURE__ */ e.createElement(i, { key: 4, page: "4", selected: a === 4, onClick: () => n(4) }), /* @__PURE__ */ e.createElement(i, { key: 5, page: "5", selected: a === 5, onClick: () => n(5) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => n(t) })) : a > t - 3 ? c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => n(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t - 4, page: (t - 4).toString(), selected: a === t - 4, onClick: () => n(t - 4) }), /* @__PURE__ */ e.createElement(i, { key: t - 3, page: (t - 3).toString(), selected: a === t - 3, onClick: () => n(t - 3) }), /* @__PURE__ */ e.createElement(i, { key: t - 2, page: (t - 2).toString(), selected: a === t - 2, onClick: () => n(t - 2) }), /* @__PURE__ */ e.createElement(i, { key: t - 1, page: (t - 1).toString(), selected: a === t - 1, onClick: () => n(t - 1) }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), selected: a === t, onClick: () => n(t) })) : c = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => n(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a - 1, page: (a - 1).toString(), onClick: () => n(a - 1) }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), selected: !0, onClick: () => n(a) }), /* @__PURE__ */ e.createElement(i, { key: a + 1, page: (a + 1).toString(), onClick: () => n(a + 1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), onClick: () => n(t) })), c;
  }, n = (m) => {
    s && s(m);
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: `mds-pagination ${l}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a < 2, onClick: () => n(a - 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), r(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: a >= t, onClick: () => n(a + 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, I = C(!1), K = () => x(I), he = ({
  children: t
}) => {
  if (K())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(I.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, t));
}, ye = ({
  autor: t,
  avatar: a,
  children: s,
  className: l = "",
  reverse: r = !1
}) => {
  const n = r ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${n} ${l}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), t ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, a ? /* @__PURE__ */ e.createElement("img", { alt: "", src: a, "aria-hidden": "true" }) : "", t) : "");
}, ge = ({
  children: t,
  className: a = "",
  labelClosed: s = "Afficher plus",
  labelOpened: l = "Afficher moins"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { type: "button", className: `mds-show-more__btn mds-text--2 mds-collapse ${a}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-visible" }, s), /* @__PURE__ */ e.createElement("span", { className: "mds-hidden" }, l), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" })), /* @__PURE__ */ e.createElement("div", { className: "mds-collapse__content" }, t)), Q = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: l = !1,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(z, null)), W = {
  small: "small",
  medium: "medium",
  large: "big"
}, fe = ({
  children: t,
  open: a = !1,
  onClose: s,
  size: l = "medium",
  title: r,
  icon: n,
  visuallyHideTitle: m = !1,
  showCloseButton: c = !1,
  className: E = ""
}) => {
  const d = k(null), o = e.useId();
  let u;
  const p = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, N = (_) => {
    _.key === "Escape" && (_.preventDefault(), _.stopImmediatePropagation(), p());
  }, h = (_) => {
    _.target.classList.contains("mds-dialog") && p();
  };
  return g(() => (c && (u = d.current.querySelector("button.mds-close"), u.addEventListener("click", p)), d.current.addEventListener("click", h), () => {
    c && u.removeEventListener("click", p);
    try {
      d.current.removeEventListener("click", h);
    } catch {
    }
  }), []), g(() => (a === !0 ? (document.addEventListener("keydown", N), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", N), document.body.style.overflow = "scroll";
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${E}`, "aria-modal": "true", "aria-labelledby": o }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${W[l]}`, role: "document" }, c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(Q, { title: r, icon: n, visuallyHidden: m, id: o }), t)));
}, $e = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), ve = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), ke = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(P, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(t, (r) => /* @__PURE__ */ e.createElement("li", null, r))));
}, Ce = ({
  reverse: t = !1,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${t ? "mds-tabs--reverse" : ""} ${s}` }, a), xe = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(t, (l, r) => r == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, L(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), we = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const r = a ? /* @__PURE__ */ e.createElement(R, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, r, t);
}, Se = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, f.map(t, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), Pe = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), v = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, Ie = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: l = !1,
  id: r,
  label: n,
  optionalText: m = "facultatif",
  required: c = !1,
  reverse: E = !1,
  supportingText: d,
  startIcon: o,
  type: u = "text",
  className: p = "",
  ...N
}) => {
  const h = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), _ = v[u] || v.text, y = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${E ? "mds-input-group--reverse" : ""} ${p}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: r, className: "mds-label" }, n, " ", h, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${o ? "mds-wrapper--icon-left" : ""}` }, o ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${o}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${_}`, id: r, type: u, "aria-required": c, "aria-invalid": a, "aria-describedby": a && s ? y : "", ...N }), u === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: y }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Me = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: l = !1,
  onChange: r,
  reverse: n = !1,
  className: m = ""
}) => {
  const c = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${n ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: r, role: "switch", id: c, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: c }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
};
export {
  G as Accordion,
  J as AccordionItem,
  U as Alert,
  X as Badge,
  Y as Box,
  ee as Breadcrumb,
  te as Button,
  ae as Callout,
  se as CalloutAction,
  le as CalloutContent,
  ne as Card,
  re as CardCompactV,
  ne as CardHeader,
  ne as CardMedia,
  me as ChipsItem,
  ce as ChipsList,
  z as Divider,
  de as Hero,
  R as Icon,
  ie as IconButton,
  Z as Link,
  Ee as List,
  oe as ListItem,
  ue as ListItemIcon,
  pe as ListItemText,
  be as Menu,
  _e as MenuItem,
  Ne as Pagination,
  i as PaginationItem,
  he as Play,
  ye as Quote,
  ge as ShowMore,
  fe as SidePanel,
  $e as SidePanelContent,
  ve as SidePanelFooter,
  Q as SidePanelHeader,
  ke as Summary,
  we as Tab,
  xe as TabList,
  Pe as TabPanel,
  Se as TabPanelList,
  Ce as Tabs,
  Ie as TextField,
  Me as Toggle,
  P as Typography
};
//# sourceMappingURL=index.es.js.map
