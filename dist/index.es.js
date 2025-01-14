'use client';
import e, { useRef as x, useEffect as y, Children as f, createContext as k, useContext as C, cloneElement as L } from "react";
const G = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${a}` }, t), J = ({
  id: t,
  title: a = "Item title",
  children: s,
  defaultExpanded: n = !1,
  onChange: l,
  expanded: r = n,
  expandIcon: m = "expand-more",
  className: d = ""
}) => {
  const [_, i] = e.useState(0), [o, u] = e.useState(r), p = x(null), N = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, h = () => {
    u(!o), l && t && l(t);
  };
  return y(() => (i(o ? N() : 0), () => {
  }), [o]), y(() => (u(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: p, id: t, className: `mds-accordion__item ${d}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: h, className: `mds-collapse mds-collapse__label ${o ? "active" : ""}`, "aria-expanded": o }, a, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${o ? "active" : ""}`, style: { maxHeight: _ } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function U({
  children: t,
  severity: a = "info",
  title: s,
  icon: n = "info",
  onClose: l,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), l && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function X({
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
  reverse: n = !1,
  startIcon: l,
  endIcon: r,
  color: m = "link",
  className: d = "",
  ..._
}) => {
  const i = `mds-link ${H[a]} ${s ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : "mds-color__" + w[m]} ${d}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, ..._ }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}--right`, "aria-hidden": "true" }), t, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, ee = ({
  children: t,
  color: a = "link",
  reverse: s = !1,
  className: n = ""
}) => {
  const l = s ? "color-white" : w[a];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${n}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, f.map(t, (r) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, r))));
};
function te({
  component: t,
  children: a,
  color: s,
  variant: n = "primary",
  size: l = "medium",
  fullWidth: r = !1,
  startIcon: m,
  endIcon: d,
  disabled: _ = !1,
  reverse: i = !1,
  href: o,
  target: u,
  className: p = "",
  ...N
}) {
  const E = t || "button", g = r ? "mds-full-width" : "", M = i ? "mds-btn--reverse" : "";
  n == "primary" && s == "conversion" ? n += "-cta" : n == "secondary" && s == "alert" && (n += "-alert");
  let b = {};
  return E == "a" ? (b.role = "button", b.href = o, b.target = u || "_self", b.tabIndex = "0") : E == "div" ? (b.role = "button", b.tabIndex = "0") : b = { ...N, opts: b }, _ && (E == "a" || E == "div" ? b["aria-disabled"] = "true" : b.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    E,
    {
      ...b,
      className: `mds-btn mds-btn--${n} mds-btn--${l} ${g} ${M} ${p}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    a,
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }) : null
  );
}
const ae = ({
  title: t,
  subtitle: a,
  children: s,
  color: n = "color-grey--5",
  icon: l,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${n} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${l} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, t, a && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, a)), s), se = ({
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
}, S = k(!1), T = () => C(S);
function P({
  children: t,
  variant: a = "body2",
  component: s,
  align: n = "left",
  underlineColor: l = "",
  framed: r = !1,
  color: m,
  className: d = "",
  ..._
}) {
  const u = T() ? "span" : s || F[a], p = a == "underline" && l ? v[a] + "--" + l : v[a], N = !r && a.substring(0, 1) != "h" && m ? "mds-color__" + A[m] : "";
  return /* @__PURE__ */ e.createElement(S.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(u, { className: `${p} ${r ? "mds-framed" : ""} ${N} ${d}`, style: { textAlign: n }, ..._ }, r ? /* @__PURE__ */ e.createElement("span", null, t) : t));
}
const q = {
  basic1: "mds-card--basic-1 mds-card--default",
  basic2: "mds-card--basic-2 mds-card--default",
  compactV: "mds-card--compact-v",
  compactH: "mds-card--compact-h",
  highlight: "mds-card--highlight",
  modulable: "mds-card--modulable mds-card--default"
}, le = ({
  variant: t = "basic1",
  title: a,
  titleLevel: s = "h3",
  subTitle: n,
  cardMedia: l,
  cardHeader: r,
  children: m,
  className: d = "",
  ..._
}) => {
  const i = "mds-card " + q[t];
  return /* @__PURE__ */ e.createElement("div", { className: `${i} ${d}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(P, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ..._ }, a)), n ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, n) : "", t == "modulable" ? m : ""), t == "modulable" && r ? r : "", l);
};
function re({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: n = "_self",
  role: l,
  className: r = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${r}`, role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: n }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function me({
  label: t,
  active: a = !1,
  onClick: s,
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("li", { className: n }, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, t));
}
function ce({
  children: t,
  reverse: a = !1,
  size: s = "big",
  className: n = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""} ${n} ` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const B = {
  thin: "basic",
  heavy: "module"
}, z = ({
  component: t = "hr",
  variant: a = "thin",
  reverse: s = !1,
  className: n = "",
  ...l
}) => {
  const r = t;
  return /* @__PURE__ */ e.createElement(r, { className: `mds-divider mds-divider--${B[a]} ${s ? "mds-divider--reverse" : ""} ${n} `, "aria-hidden": "true", ...l });
}, de = ({
  upTitle: t,
  title: a = "Title",
  subTitle: s = "Content",
  heroActions: n,
  image: l,
  className: r = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${r}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, t && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), n && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, n)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${l}`, alt: "" }))), D = {
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
  baseClassName: n = "icon",
  className: l = ""
}) => {
  const r = "mds-" + n + "__", m = n == "picto" ? "mds-picto--" + O[s] : "mds-icon--" + D[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${r}${t} ${m} ${a ? "mds-color__" + a : ""} ${l} ` });
}, ie = ({
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
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item mds-side-padding ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, t), n ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, n) : "", a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, a) : ""), ue = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${a}`, "aria-hidden": "true" }, t), pe = ({
  headline: t,
  title: a,
  supportingText: s,
  className: n = "",
  href: l
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, t) : "", a ? l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: l }, a)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, a) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), Ee = ({
  children: t,
  className: a = "",
  boxed: s = !1
}) => {
  const n = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${a}` }, /* @__PURE__ */ e.createElement("ul", { className: n }, t));
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
  className: n = ""
}) => {
  const l = V[a];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${l} ${n}` }, t, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, c = ({
  selected: t = !1,
  page: a,
  variant: s = "outlined"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, s === "ellipsis" ? /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex", "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("span", null, "...")) : /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn", type: "button", "aria-label": `page ${a}`, "aria-current": t }, a))), Ne = ({
  count: t = 1,
  page: a = 1
}) => {
  const s = () => {
    let l;
    return t < 8 ? l = [...Array(t)].map((r, m) => /* @__PURE__ */ e.createElement(c, { key: m, page: m.toString(), selected: m === a })) : a <= 3 ? l = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(c, { key: 1, page: "1", selected: a === 1 }), /* @__PURE__ */ e.createElement(c, { key: 2, page: "2", selected: a === 2 }), /* @__PURE__ */ e.createElement(c, { key: 3, page: "3", selected: a === 3 }), /* @__PURE__ */ e.createElement(c, { key: 4, page: "4", selected: a === 4 }), /* @__PURE__ */ e.createElement(c, { key: 5, page: "5", selected: a === 5 }), /* @__PURE__ */ e.createElement(c, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(c, { key: t, page: t.toString() })) : a > t - 3 ? l = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(c, { key: 1, page: "1" }), /* @__PURE__ */ e.createElement(c, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(c, { key: t - 4, page: (t - 4).toString(), selected: a === t - 4 }), /* @__PURE__ */ e.createElement(c, { key: t - 3, page: (t - 3).toString(), selected: a === t - 3 }), /* @__PURE__ */ e.createElement(c, { key: t - 2, page: (t - 2).toString(), selected: a === t - 2 }), /* @__PURE__ */ e.createElement(c, { key: t - 1, page: (t - 1).toString(), selected: a === t - 1 }), /* @__PURE__ */ e.createElement(c, { key: t, page: t.toString(), selected: a === t })) : l = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(c, { key: 1, page: "1" }), /* @__PURE__ */ e.createElement(c, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(c, { key: a - 1, page: (a - 1).toString() }), /* @__PURE__ */ e.createElement(c, { key: a, page: a.toString(), selected: !0 }), /* @__PURE__ */ e.createElement(c, { key: a + 1, page: (a + 1).toString() }), /* @__PURE__ */ e.createElement(c, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(c, { key: t, page: t.toString() })), l;
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: "mds-pagination" }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: !0 }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), s(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, I = k(!1), K = () => C(I), he = ({
  children: t
}) => {
  if (K())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(I.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, t));
}, ge = ({
  autor: t,
  avatar: a,
  children: s,
  className: n = "",
  reverse: l = !1
}) => {
  const r = l ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${r} ${n}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), t ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, a ? /* @__PURE__ */ e.createElement("img", { alt: "", src: a, "aria-hidden": "true" }) : "", t) : "");
}, ye = ({
  children: t,
  className: a = "",
  labelClosed: s = "Afficher plus",
  labelOpened: n = "Afficher moins"
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { type: "button", className: `mds-show-more__btn mds-text--2 mds-collapse ${a}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-visible" }, s), /* @__PURE__ */ e.createElement("span", { className: "mds-hidden" }, n), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" })), /* @__PURE__ */ e.createElement("div", { className: "mds-collapse__content" }, t)), Q = ({
  id: t,
  title: a,
  icon: s,
  visuallyHidden: n = !1,
  className: l = ""
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${n ? "mds-sr-only" : ""} ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: t, className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement(z, null)), W = {
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
  showCloseButton: d = !1,
  className: _ = ""
}) => {
  const i = x(null), o = e.useId();
  let u;
  const p = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, N = (E) => {
    E.key === "Escape" && (E.preventDefault(), E.stopImmediatePropagation(), p());
  }, h = (E) => {
    E.target.classList.contains("mds-dialog") && p();
  };
  return y(() => (d && (u = i.current.querySelector("button.mds-close"), u.addEventListener("click", p)), i.current.addEventListener("click", h), () => {
    d && u.removeEventListener("click", p);
    try {
      i.current.removeEventListener("click", h);
    } catch {
    }
  }), []), y(() => (a === !0 ? (document.addEventListener("keydown", N), document.body.style.overflow = "hidden", i.current.showModal()) : i.current.close(), () => {
    document.removeEventListener("keydown", N), document.body.style.overflow = "scroll";
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: i, role: "dialog", id: "mds-modal", className: `mds-dialog ${_}`, "aria-modal": "true", "aria-labelledby": o }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${W[n]}`, role: "document" }, d && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(Q, { title: l, icon: r, visuallyHidden: m, id: o }), t)));
}, ve = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${a}`, role: "document" }, t), $e = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${a}` }, t), xe = ({
  children: t,
  title: a = "Summary",
  className: s = ""
}) => {
  const n = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": n }, /* @__PURE__ */ e.createElement(P, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: n }, a), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, f.map(t, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
}, ke = ({
  reverse: t = !1,
  children: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${t ? "mds-tabs--reverse" : ""} ${s}` }, a), Ce = ({
  children: t,
  ariaLabel: a,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": a, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, f.map(t, (n, l) => l == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, L(n, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, n)))), we = ({
  label: t,
  icon: a,
  ariaCurrent: s = !1,
  className: n = ""
}) => {
  const l = a ? /* @__PURE__ */ e.createElement(R, { baseClassName: "picto", size: "xsmall" }, a) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${n}`, type: "button", "aria-current": s }, l, t);
}, Se = ({
  children: t,
  className: a = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${a}` }, f.map(t, (s, n) => n == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), Pe = ({
  children: t,
  hidden: a = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: a }, t), $ = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, Ie = ({
  endAdornment: t,
  error: a = !1,
  errorText: s,
  fullWidth: n = !1,
  id: l,
  label: r,
  optionalText: m = "facultatif",
  required: d = !1,
  reverse: _ = !1,
  supportingText: i,
  startIcon: o,
  type: u = "text",
  className: p = "",
  ...N
}) => {
  const h = d ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", m, ")"), E = $[u] || $.text, g = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${_ ? "mds-input-group--reverse" : ""} ${p}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: l, className: "mds-label" }, r, " ", h, " ", i ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, i) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${n ? "mds-full-width" : ""} ${o ? "mds-wrapper--icon-left" : ""}` }, o ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${o}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${E}`, id: l, type: u, "aria-required": d, "aria-invalid": a, "aria-describedby": a && s ? g : "", ...N }), u === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : t ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", t, " ") : ""), a && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: g }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Me = ({
  id: t,
  label: a,
  checked: s = !1,
  disabled: n = !1,
  onChange: l,
  reverse: r = !1,
  className: m = ""
}) => {
  const d = t || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${r ? "mds-toggle--reverse" : ""} ${m}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: l, role: "switch", id: d, checked: s, disabled: n, "aria-disabled": n }), /* @__PURE__ */ e.createElement("label", { htmlFor: d }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a)));
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
  ne as CalloutContent,
  le as Card,
  re as CardCompactV,
  le as CardHeader,
  le as CardMedia,
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
  c as PaginationItem,
  he as Play,
  ge as Quote,
  ye as ShowMore,
  fe as SidePanel,
  ve as SidePanelContent,
  $e as SidePanelFooter,
  Q as SidePanelHeader,
  xe as Summary,
  we as Tab,
  Ce as TabList,
  Pe as TabPanel,
  Se as TabPanelList,
  ke as Tabs,
  Ie as TextField,
  Me as Toggle,
  P as Typography
};
//# sourceMappingURL=index.es.js.map
