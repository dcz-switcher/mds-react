'use client';
import e, { useRef as C, useEffect as b, Children as g, createContext as w, useContext as z, cloneElement as L } from "react";
const X = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-accordion--standalone ${t}` }, a), Y = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: c = l,
  expandIcon: r = "expand-more",
  className: m = ""
}) => {
  const [o, d] = e.useState(0), [p, u] = e.useState(c), h = C(null), v = () => h && h.current ? h.current.querySelector(".mds-accordion__body").offsetHeight : 0, f = () => {
    u(!p), n && a && n(a);
  };
  return b(() => (d(p ? v() : 0), () => {
  }), [p]), b(() => (u(c), () => {
  }), [c]), /* @__PURE__ */ e.createElement("div", { ref: h, id: a, className: `mds-accordion__item ${m}` }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: f, className: `mds-collapse mds-collapse__label ${p ? "active" : ""}`, "aria-expanded": p }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${p ? "active" : ""}`, style: { maxHeight: o } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function Z({
  children: a,
  severity: t = "info",
  title: s,
  icon: l = "info",
  onClose: n,
  className: c = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white ${c}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function ee({
  ariaLabel: a,
  label: t,
  size: s = "small",
  severity: l = "neutral",
  icon: n,
  color: c,
  variant: r = "default",
  className: m = ""
}) {
  const o = c ? `mds-background-color__${c}` : "";
  return r === "default" ? /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${l} ${o} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t)) : /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--dot mds-badge--${s} mds-badge--${l} ${o} ${m}` }, n && s === "big" ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }) : s === "big" ? t : "", /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, a));
}
const $ = ({
  children: a,
  className: t = "",
  ...s
}) => /* @__PURE__ */ e.createElement("div", { className: t, ...s }, a), O = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, M = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, te = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: c,
  color: r = "link",
  className: m = "",
  ...o
}) => {
  const d = `mds-link ${O[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + M[r]} ${m}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, ...o }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, ae = ({
  children: a,
  color: t = "link",
  reverse: s = !1,
  className: l = ""
}) => {
  const n = s ? "color-white" : M[t];
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-breadcrumbs ${l}`, role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, g.map(a, (c) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${n}` }, c))));
};
function se({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: c = !1,
  startIcon: r,
  endIcon: m,
  disabled: o = !1,
  reverse: d = !1,
  href: p,
  target: u,
  className: h = "",
  ...v
}) {
  const E = a || "button", N = c ? "mds-full-width" : "", H = d ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let _ = {};
  return E == "a" ? (_.role = "button", _.href = p, _.target = u || "_self", _.tabIndex = "0") : E == "div" ? (_.role = "button", _.tabIndex = "0") : _ = { ...v, opts: _ }, o && (E == "a" || E == "div" ? _["aria-disabled"] = "true" : _.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    E,
    {
      ..._,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${N} ${H} ${h}`
    },
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--left`, "aria-hidden": "true" }) : null,
    t,
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }) : null
  );
}
const le = ({
  title: a,
  subtitle: t,
  children: s,
  color: l = "color-grey--5",
  icon: n,
  className: c = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-callout mds-background-color__${l} ${c}` }, n && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-picto__${n} mds-callout__picto` }), /* @__PURE__ */ e.createElement("h2", { className: "mds-callout__title" }, a, t && /* @__PURE__ */ e.createElement("span", { className: "mds-callout__subtitle" }, t)), s), ne = ({
  children: a
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, a), ce = ({
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
  text: "color-grey--80",
  white: "color-white"
}, S = w(!1), T = () => z(S);
function I({
  children: a,
  variant: t = "body2",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: c = !1,
  color: r,
  className: m = "",
  ...o
}) {
  const u = T() ? "span" : s || F[t], h = t == "underline" && n ? k[t] + "--" + n : k[t], v = !c && r ? "mds-color__" + A[r] : "";
  return /* @__PURE__ */ e.createElement(S.Provider, { value: !0 }, /* @__PURE__ */ e.createElement(u, { className: `${h} ${c ? "mds-framed" : ""} ${v} ${m}`, style: { textAlign: l }, ...o }, c ? /* @__PURE__ */ e.createElement("span", null, a) : a));
}
const q = {
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
  cardHeader: c,
  children: r,
  className: m = "",
  ...o
}) => {
  const d = "mds-card " + q[a];
  return /* @__PURE__ */ e.createElement("div", { className: `${d} ${m}` }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement(I, { className: "mds-card__title", variant: "h3", component: s }, /* @__PURE__ */ e.createElement("a", { className: "mds-card__link", ...o }, t)), l ? /* @__PURE__ */ e.createElement("p", { className: "mds-card__desc" }, l) : "", a == "modulable" ? r : ""), a == "modulable" && c ? c : "", n);
};
function re({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n,
  className: c = ""
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-card mds-card--compact-v ${c}`, role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
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
const R = {
  thin: "basic",
  heavy: "module"
}, y = ({
  component: a = "hr",
  variant: t = "thin",
  reverse: s = !1,
  className: l = "",
  ...n
}) => {
  const c = a;
  return /* @__PURE__ */ e.createElement(c, { className: `mds-divider mds-divider--${R[t]} ${s ? "mds-divider--reverse" : ""} ${l} `, "aria-hidden": "true", ...n });
}, oe = ({
  sticky: a = !1,
  logoHref: t = "/",
  variant: s = "default",
  className: l = "",
  headerNav: n,
  headerNavPosition: c = "under",
  ...r
}) => {
  const m = {
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/svg",
    "xml:space": "preserve"
  };
  return /* @__PURE__ */ e.createElement("header", { role: "banner", className: `mds-header ${s == "simple" ? "mds-header--simplified" : ""} ${a ? "mds-position--sticky" : ""} ${l}`, ...r }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: t, "aria-label": "aller à la page d'accueil xxxx" }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", ...m, viewBox: "0 0 499.99998 490.98169", height: "490.98169", width: "500", id: "svg10", version: "1.1" }, /* @__PURE__ */ e.createElement("defs", { id: "defs14" }), /* @__PURE__ */ e.createElement("g", { transform: "matrix(1.3333333,0,0,-1.3333333,-945.04318,780.01478)", id: "g18" }, /* @__PURE__ */ e.createElement("path", { d: "M 1083.7824,560.73841 V 241.0201 c -59.7908,-15.83001 -122.64491,-24.24528 -187.52055,-24.24528 -64.8825,0 -127.72286,8.41527 -187.47945,24.24528 v 319.71831 c 59.75659,15.82316 122.59695,24.27269 187.47945,24.27269 64.87564,0 127.72975,-8.44953 187.52055,-24.27269", opacity: 1, fill: "#29377e", fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 6.85282, stopOpacity: 1, id: "path1264" }), /* @__PURE__ */ e.createElement("g", { transform: "matrix(6.8528199,0,0,6.8528199,-4148.3757,-3423.9646)", id: "g1695" }, /* @__PURE__ */ e.createElement("path", { id: "path1268", opacity: 1, fill: "#cbdb16", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, d: "m 741.8276,565.885 c 0,-2.981 -2.461,-5.399 -5.494,-5.399 -3.033,0 -5.494,2.418 -5.494,5.399 0,2.98 2.461,5.398 5.494,5.398 3.033,0 5.494,-2.418 5.494,-5.398" }), /* @__PURE__ */ e.createElement("path", { opacity: 1, fill: "#cbdb16", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, d: "m 748.5778,565.885 h -3.367 c -0.291,-0.046 -0.538,-0.261 -0.602,-0.541 -0.286,-4.248 -3.88,-7.61 -8.276,-7.61 -4.582,0 -8.299,3.646 -8.299,8.151 0,4.265 3.337,7.763 7.586,8.116 v 0.006 c 0.392,0 0.709,0.335 0.709,0.722 v 3.059 c 0,0.387 -0.317,0.701 -0.709,0.701 v 0.005 c -6.773,-0.358 -12.15,-5.869 -12.15,-12.609 0,-6.978 5.757,-12.633 12.863,-12.633 6.873,0 12.483,5.296 12.842,11.961 -0.013,0.341 -0.264,0.619 -0.597,0.672", id: "path1272" })), /* @__PURE__ */ e.createElement("g", { transform: "matrix(6.8528199,0,0,6.8528199,-4148.3757,-3423.9646)", id: "g1702" }, /* @__PURE__ */ e.createElement("path", { id: "path1276", opacity: 1, fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, d: "m 722.8098,542.275 c 0,0.518 0,1.155 0.016,1.723 h -0.016 c -0.275,-0.317 -0.578,-0.636 -1.022,-1.035 l -1.328,-1.274 h -0.116 l -1.31,1.274 c -0.426,0.399 -0.748,0.718 -1.005,1.035 h -0.035 c 0.018,-0.568 0.035,-1.205 0.035,-1.723 v -3.225 h -2.35 v 9.829 h 0.31 l 2.601,-2.309 c 0.408,-0.365 1.274,-1.184 1.888,-1.854 h 0.035 c 0.578,0.62 1.497,1.489 1.905,1.854 l 2.518,2.309 h 0.305 v -9.829 h -2.431 z" }), /* @__PURE__ */ e.createElement("path", { id: "path1280", opacity: 1, fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, d: "m 730.0046,542.2125 h 2.261 l -0.117,0.233 c -0.292,0.598 -0.648,1.353 -1.005,2.304 h -0.017 c -0.357,-0.951 -0.714,-1.706 -1.006,-2.304 z m 3.162,-1.877 h -4.081 l -0.631,-1.285 h -2.618 l 5.085,9.828 h 0.514 l 5.084,-9.828 h -2.705 z" }), /* @__PURE__ */ e.createElement("path", { id: "path1284", opacity: 1, fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, d: "m 744.989,540.0227 c -0.918,-0.785 -2.022,-1.256 -3.4,-1.256 -3.065,0 -5.07,2.207 -5.07,5.061 0,3.043 2.164,5.052 4.952,5.052 1.479,0 2.6,-0.503 3.489,-1.258 l -1.345,-1.685 c -0.514,0.468 -1.174,0.787 -2.01,0.787 -1.596,0 -2.565,-1.241 -2.565,-2.896 0,-1.701 0.969,-2.906 2.617,-2.906 0.801,0 1.48,0.267 2.005,0.768 z" }), /* @__PURE__ */ e.createElement("path", { d: "m 746.182,539.05 h 2.432 v 9.543 h -2.432 z", opacity: 1, fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, id: "path1286" }), /* @__PURE__ */ e.createElement("path", { id: "path1290", opacity: 1, fill: "#fff", fillOpacity: 1, fillRule: "nonzero", stroke: "none", stopOpacity: 1, d: "m 753.0894,546.4388 v -2.242 h 3.706 v -2.018 h -3.706 v -3.129 h -2.432 v 9.544 h 7.177 l -0.478,-2.155 z" })))))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side" }, n ? /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__menu", "aria-hidden": "true" }), "menu") : "")), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__top-container mds-container mds-inset--0" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--left-side" }, /* @__PURE__ */ e.createElement("div", { className: "mds-header__logo-container" }, /* @__PURE__ */ e.createElement("a", { className: "mds-header__logo", title: "Accueil", href: t }, /* @__PURE__ */ e.createElement("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "49 47 310 130" }, /* @__PURE__ */ e.createElement("path", { fill: "#d3d62e", d: "M273.25 127.24h78.73v13.39h-78.73z" }), /* @__PURE__ */ e.createElement("g", { fill: "none" }, /* @__PURE__ */ e.createElement("path", { d: "M408.673 0v226.77H.003V0z" }), /* @__PURE__ */ e.createElement("path", { d: "M56.69 56.69h113.39v113.39H56.69z" })), /* @__PURE__ */ e.createElement("path", { fill: "#0a2d82", d: "M170.08 64.17v98.45c-18.08 4.88-37.08 7.47-56.7 7.47-19.62 0-38.62-2.59-56.69-7.47V64.17c18.07-4.87 37.07-7.47 56.69-7.47 19.62-.01 38.62 2.6 56.7 7.47" }), /* @__PURE__ */ e.createElement("path", { fill: "#d3d62e", d: "M125.17 97.05c0 6.29-5.1 11.39-11.38 11.39-6.28 0-11.38-5.1-11.38-11.39 0-6.29 5.1-11.39 11.38-11.39 6.28 0 11.38 5.1 11.38 11.39" }), /* @__PURE__ */ e.createElement("path", { fill: "#d3d62e", d: "M139.15 97.05h-6.98c-.6.1-1.11.55-1.25 1.14-.59 8.96-8.04 16.06-17.15 16.06-9.49 0-17.2-7.69-17.2-17.2 0-9 6.91-16.38 15.72-17.13v-.01c.81 0 1.47-.71 1.47-1.53v-6.45c0-.82-.66-1.48-1.47-1.48v-.01c-14.02.76-25.16 12.39-25.16 26.61 0 14.72 11.93 26.66 26.65 26.66 14.24 0 25.87-11.18 26.61-25.24-.03-.72-.55-1.31-1.24-1.42" }), /* @__PURE__ */ e.createElement("path", { fill: "#fff", d: "M85.76 146.87c0-1.09 0-2.44.03-3.64h-.03c-.57.67-1.2 1.34-2.12 2.18l-2.75 2.69h-.24l-2.71-2.69c-.88-.84-1.55-1.51-2.08-2.18h-.07c.04 1.2.07 2.54.07 3.64v6.8h-4.87v-20.74h.64l5.39 4.87c.85.77 2.64 2.5 3.91 3.91H81c1.2-1.31 3.1-3.14 3.95-3.91l5.22-4.87h.63v20.74h-5.04v-6.8zm14.91.13h4.68l-.24-.49c-.61-1.26-1.34-2.86-2.08-4.86h-.04c-.74 2.01-1.48 3.6-2.08 4.86l-.24.49zm6.55 3.96h-8.45l-1.31 2.71h-5.43l10.54-20.74h1.07l10.53 20.74h-5.61l-1.34-2.71zm24.5.66c-1.9 1.66-4.19 2.65-7.05 2.65-6.35 0-10.5-4.66-10.5-10.68 0-6.42 4.48-10.66 10.26-10.66 3.07 0 5.39 1.06 7.23 2.65l-2.79 3.55c-1.07-.99-2.43-1.66-4.16-1.66-3.31 0-5.32 2.62-5.32 6.11 0 3.59 2.01 6.13 5.42 6.13 1.66 0 3.07-.56 4.15-1.62l2.76 3.53zm2.47-18.08h5.04v20.14h-5.04zm14.31 4.54v4.73h7.68v4.26h-7.68v6.61h-5.04v-20.14h14.87l-.99 4.54z" }), /* @__PURE__ */ e.createElement("path", { fill: "#0a2d82", d: "M198.43 85.98h3.77v17.13h10.63v3.19h-14.4V85.98zm28.35 6.28c1.21 1.09 1.81 2.74 1.81 4.95v9.09h-3.43v-1.89c-.45.68-1.08 1.2-1.9 1.55-.82.36-1.81.54-2.98.54-1.16 0-2.18-.2-3.05-.6-.87-.4-1.54-.95-2.02-1.65-.47-.71-.71-1.5-.71-2.4 0-1.39.52-2.51 1.55-3.35 1.04-.84 2.67-1.26 4.89-1.26h4.01v-.23c0-1.08-.32-1.92-.97-2.5-.65-.58-1.61-.87-2.89-.87-.87 0-1.73.14-2.57.41-.84.27-1.55.65-2.13 1.13l-1.42-2.64c.81-.62 1.79-1.09 2.93-1.42 1.14-.33 2.35-.49 3.63-.49 2.3-.01 4.04.54 5.25 1.63zm-3.31 10.98c.71-.42 1.2-1.01 1.5-1.79v-1.8h-3.75c-2.09 0-3.14.69-3.14 2.06 0 .66.26 1.18.78 1.57.52.39 1.25.58 2.18.58.92 0 1.73-.21 2.43-.62zm36.8 3.06l-.03-13.47-6.68 11.15h-1.68L245.2 93v13.3h-3.6V85.98h3.11l8.07 13.47 7.93-13.47h3.11l.03 20.32h-3.58zm19.88-14.04c1.21 1.09 1.81 2.74 1.81 4.95v9.09h-3.43v-1.89c-.45.68-1.08 1.2-1.9 1.55-.82.36-1.81.54-2.98.54-1.16 0-2.18-.2-3.05-.6-.87-.4-1.54-.95-2.02-1.65-.47-.71-.71-1.5-.71-2.4 0-1.39.52-2.51 1.55-3.35 1.04-.84 2.67-1.26 4.89-1.26h4.01v-.23c0-1.08-.32-1.92-.97-2.5-.65-.58-1.61-.87-2.89-.87-.87 0-1.73.14-2.57.41-.84.27-1.55.65-2.13 1.13l-1.42-2.64c.81-.62 1.79-1.09 2.93-1.42 1.14-.33 2.35-.49 3.63-.49 2.29-.01 4.04.54 5.25 1.63zm-3.31 10.98c.71-.42 1.2-1.01 1.5-1.79v-1.8h-3.75c-2.09 0-3.14.69-3.14 2.06 0 .66.26 1.18.78 1.57.52.39 1.25.58 2.18.58.91 0 1.72-.21 2.43-.62zm12.7 2.25c-1.28-.68-2.27-1.62-2.99-2.83-.72-1.21-1.07-2.58-1.07-4.11 0-1.53.36-2.89 1.07-4.09.72-1.2 1.71-2.14 2.98-2.82 1.27-.68 2.71-1.02 4.34-1.02 1.53 0 2.87.31 4.02.93 1.15.62 2.02 1.51 2.6 2.67l-2.79 1.63c-.45-.72-1-1.25-1.67-1.61-.67-.36-1.4-.54-2.19-.54-1.36 0-2.48.44-3.37 1.32-.89.88-1.34 2.06-1.34 3.53 0 1.47.44 2.65 1.32 3.53.88.88 2.01 1.32 3.38 1.32.79 0 1.52-.18 2.19-.54.67-.36 1.22-.9 1.67-1.61l2.79 1.63a6.32 6.32 0 0 1-2.63 2.69c-1.15.63-2.48.94-3.99.94-1.6-.01-3.04-.34-4.32-1.02zm14.26-17.87c-.45-.42-.67-.93-.67-1.55s.22-1.14.67-1.55c.45-.42 1-.62 1.66-.62.66 0 1.21.2 1.65.6.45.4.67.9.67 1.5 0 .64-.22 1.18-.65 1.61-.44.44-.99.65-1.67.65-.67-.02-1.22-.23-1.66-.64zm-.18 3.18h3.63v15.5h-3.63V90.8zm12.4-.82v.93h4.27v2.9h-4.15v12.49h-3.63V93.82h-2.56v-2.9h2.56v-.99c0-1.66.48-2.98 1.45-3.93.97-.96 2.33-1.44 4.09-1.44 1.39 0 2.49.28 3.28.84l-1.02 2.73c-.62-.43-1.29-.64-2-.64-1.52 0-2.29.83-2.29 2.49zm9.29 12.37c.45.45.67 1.03.67 1.74 0 .31-.04.63-.13.97-.09.34-.27.85-.54 1.52l-1.48 4.09h-2.35l1.16-4.44c-.43-.17-.76-.45-1-.83-.24-.38-.36-.82-.36-1.32 0-.72.22-1.3.67-1.74.45-.45 1.01-.67 1.68-.67.67.01 1.24.24 1.68.68zM202.5 134.18c-1.28-.68-2.27-1.62-2.99-2.83-.72-1.21-1.07-2.58-1.07-4.11 0-1.53.36-2.89 1.07-4.09.72-1.2 1.71-2.14 2.98-2.82 1.27-.68 2.71-1.02 4.34-1.02 1.53 0 2.87.31 4.02.93 1.15.62 2.02 1.51 2.6 2.67l-2.79 1.63c-.45-.72-1-1.25-1.67-1.61-.67-.36-1.4-.54-2.19-.54-1.36 0-2.48.44-3.37 1.32-.89.88-1.34 2.06-1.34 3.53 0 1.47.44 2.65 1.32 3.53.88.88 2.01 1.32 3.38 1.32.79 0 1.52-.18 2.19-.54.67-.36 1.22-.9 1.67-1.61l2.79 1.63a6.32 6.32 0 0 1-2.63 2.69c-1.15.63-2.48.94-3.99.94-1.6-.01-3.04-.35-4.32-1.02zm17.68-20.27c.45.45.67 1.02.67 1.71 0 .35-.04.69-.13 1.02-.09.33-.26.82-.51 1.48l-1.51 4.12h-2.35l1.16-4.47c-.43-.15-.76-.42-1-.8-.24-.38-.36-.83-.36-1.35 0-.7.22-1.27.67-1.71.45-.45 1.01-.67 1.68-.67.67 0 1.23.22 1.68.67zm18 14.49h-12.17c.21 1.14.77 2.05 1.67 2.71.9.67 2.02 1 3.35 1 1.7 0 3.11-.56 4.21-1.68l1.95 2.24c-.7.83-1.58 1.46-2.64 1.89-1.06.43-2.26.64-3.6.64-1.7 0-3.2-.34-4.5-1.02-1.3-.68-2.3-1.62-3.01-2.83s-1.06-2.58-1.06-4.11c0-1.51.34-2.87 1.03-4.08a7.34 7.34 0 0 1 2.86-2.83c1.22-.68 2.59-1.02 4.12-1.02 1.51 0 2.86.33 4.05 1a7.14 7.14 0 0 1 2.79 2.82c.67 1.21 1 2.61 1 4.2.01.25-.01.6-.05 1.07zm-10.73-5.16c-.8.69-1.29 1.6-1.47 2.74h8.8c-.16-1.12-.63-2.03-1.42-2.73-.79-.7-1.78-1.05-2.96-1.05-1.16.01-2.14.36-2.95 1.04zm15.38 11.46c-1.2-.33-2.16-.74-2.87-1.25l1.39-2.76c.7.46 1.53.84 2.51 1.12.98.28 1.94.42 2.89.42 2.17 0 3.25-.57 3.25-1.71 0-.54-.28-.92-.83-1.13-.55-.21-1.44-.42-2.66-.61-1.28-.19-2.32-.42-3.12-.67-.8-.25-1.5-.69-2.09-1.32-.59-.63-.89-1.5-.89-2.63 0-1.47.61-2.65 1.84-3.53 1.23-.88 2.89-1.32 4.98-1.32 1.06 0 2.13.12 3.19.36s1.94.57 2.61.97l-1.39 2.76c-1.32-.77-2.8-1.16-4.44-1.16-1.06 0-1.87.16-2.42.48-.55.32-.83.74-.83 1.26 0 .58.29.99.89 1.23.59.24 1.5.47 2.74.68 1.24.19 2.25.42 3.05.67.79.25 1.48.68 2.05 1.28.57.6.86 1.45.86 2.56 0 1.45-.63 2.61-1.89 3.48-1.26.87-2.97 1.31-5.14 1.31-1.25 0-2.48-.16-3.68-.49zm23.17-.55c-.43.35-.94.61-1.55.78-.61.17-1.25.26-1.93.26-1.7 0-3.02-.45-3.95-1.34-.93-.89-1.39-2.19-1.39-3.89v-7.46h-2.56v-2.9h2.56v-3.54h3.63v3.54h4.15v2.9h-4.15v7.38c0 .75.18 1.33.55 1.73.37.4.9.6 1.6.6.81 0 1.49-.21 2.03-.64l1.01 2.58zm25.52-14.67l-6.65 15.5h-3.75l-6.65-15.5h3.77l4.82 11.5 4.97-11.5h3.49zm4.56 14.7a7.442 7.442 0 0 1-2.95-2.83c-.71-1.21-1.06-2.58-1.06-4.11 0-1.53.35-2.89 1.06-4.09.71-1.2 1.69-2.14 2.95-2.82 1.26-.68 2.67-1.02 4.24-1.02 1.59 0 3.01.34 4.27 1.02 1.26.68 2.24 1.62 2.95 2.82.71 1.2 1.06 2.57 1.06 4.09 0 1.53-.35 2.9-1.06 4.11a7.442 7.442 0 0 1-2.95 2.83c-1.26.68-2.68 1.02-4.27 1.02-1.57-.01-2.98-.35-4.24-1.02zm7.55-3.43c.87-.89 1.31-2.06 1.31-3.51 0-1.45-.44-2.62-1.31-3.51-.87-.89-1.97-1.34-3.31-1.34s-2.43.45-3.3 1.34c-.86.89-1.29 2.06-1.29 3.51 0 1.45.43 2.62 1.29 3.51.86.89 1.96 1.34 3.3 1.34 1.33 0 2.44-.45 3.31-1.34zm23.46-11.27v15.5h-3.45v-1.97c-.58.7-1.31 1.23-2.18 1.61-.87.38-1.81.57-2.82.57-2.07 0-3.7-.58-4.89-1.73-1.19-1.15-1.79-2.86-1.79-5.12v-8.86h3.63v8.36c0 1.39.31 2.43.94 3.12.63.69 1.52 1.03 2.69 1.03 1.3 0 2.33-.4 3.09-1.2.76-.8 1.15-1.96 1.15-3.47v-7.84h3.63zm5.86 15.22c-1.2-.33-2.16-.74-2.87-1.25l1.39-2.76c.7.46 1.53.84 2.51 1.12.98.28 1.94.42 2.89.42 2.17 0 3.25-.57 3.25-1.71 0-.54-.28-.92-.83-1.13-.55-.21-1.44-.42-2.66-.61-1.28-.19-2.32-.42-3.12-.67-.8-.25-1.5-.69-2.09-1.32-.59-.63-.89-1.5-.89-2.63 0-1.47.61-2.65 1.84-3.53 1.23-.88 2.89-1.32 4.98-1.32 1.06 0 2.13.12 3.19.36s1.94.57 2.61.97l-1.39 2.76c-1.32-.77-2.8-1.16-4.44-1.16-1.06 0-1.87.16-2.42.48-.55.32-.83.74-.83 1.26 0 .58.29.99.89 1.23.59.24 1.5.47 2.74.68 1.24.19 2.25.42 3.05.67.79.25 1.48.68 2.05 1.28.57.6.86 1.45.86 2.56 0 1.45-.63 2.61-1.89 3.48-1.26.87-2.97 1.31-5.14 1.31-1.25 0-2.48-.16-3.68-.49zm13.33-.19c-.46-.45-.7-1.03-.7-1.73 0-.72.23-1.3.68-1.74.45-.45 1.02-.67 1.7-.67.68 0 1.24.22 1.7.67.45.45.68 1.03.68 1.74 0 .7-.23 1.27-.7 1.73-.46.46-1.03.68-1.68.68-.65 0-1.22-.22-1.68-.68z" }))))), /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--right-side", style: { height: "100%" } }, n && c == "inside" ? n : ""))), /* @__PURE__ */ e.createElement(y, null), n && c == "under" ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-header__container--desktop mds-display--none mds-display-md--block" }, n, /* @__PURE__ */ e.createElement(y, null))) : "");
}, pe = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-container mds-display--flex ${t}`, style: { marginTop: 0, marginBottom: 0 } }, /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "menu principal", className: "mds-display--flex", style: { alignItems: "center", margin: 0 } }, /* @__PURE__ */ e.createElement("ul", { className: "mds-header__menu mds-handleClick-nav-item-btn", style: { height: "100%" } }, a))), ue = ({
  label: a,
  className: t = "",
  href: s
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${t}` }, /* @__PURE__ */ e.createElement("a", { className: `mds-btn mds-header__nav-item ${t}`, style: { height: "100%" }, href: s }, a)), he = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__item ${t}` }, a), V = {
  tl: "mds-dropdown-position--top-left",
  tr: "mds-dropdown-position--top-right",
  bl: "mds-dropdown-position--bottom-left",
  br: "mds-dropdown-position--bottom-right"
}, B = ({
  anchorEl: a,
  anchorOrigin: t = "bl",
  children: s,
  className: l = "",
  style: n,
  sidePadding: c = !1
}) => {
  const r = V[t];
  return /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__layout ${r} ${l}`, style: n }, a, /* @__PURE__ */ e.createElement("div", { className: `mds-dropdown__container ${c ? "" : "mds-inset--0"}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-dropdown mds-dropdown__handleClick" }, s)));
}, Ee = ({
  children: a,
  label: t,
  className: s = ""
}) => {
  const l = /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-header__nav-item mds-dropdown__trigger-element", style: { height: "100%" }, "aria-controls": "expandable", "aria-expanded": !1 }, t, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more--right", "aria-hidden": "true" }));
  return /* @__PURE__ */ e.createElement("li", { className: `mds-header__menu-item ${s}` }, /* @__PURE__ */ e.createElement(B, { anchorEl: l, style: { height: "100%" } }, a));
}, _e = ({
  upTitle: a,
  title: t = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n,
  className: c = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-hero mds-hero--action ${c}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), D = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, W = {
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
  const c = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + W[s] : "mds-icon--" + D[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${c}${a} ${r} ${t ? "mds-color__" + t : ""} ${n} ` });
}, ve = ({
  icon: a,
  label: t,
  reverse: s = !1,
  size: l = "medium",
  variant: n = "primary",
  className: c = "",
  ...r
}) => /* @__PURE__ */ e.createElement("button", { className: `mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s ? "mds-btn--reverse" : ""} ${c} `, ...r }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t), /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${a}`, "aria-hidden": "true" })), fe = ({
  children: a,
  secondaryAction: t,
  className: s = "",
  trailingText: l,
  sidePadding: n = !0
}) => /* @__PURE__ */ e.createElement("li", { className: `mds-action-list__item ${n ? "mds-side-padding" : ""} ${s}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-content" }, a), l ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-value" }, l) : "", t ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-action", "aria-hidden": "true" }, t) : ""), Ne = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("span", { className: `mds-action-list__item-icon ${t}`, "aria-hidden": "true" }, a), be = ({
  headline: a,
  title: t,
  supportingText: s,
  className: l = "",
  href: n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-action-list__item-container-content ${l}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-action-list__item-text-content" }, a ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-headline" }, a) : "", t ? n ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, /* @__PURE__ */ e.createElement("a", { className: "mds-action-list__item-link", href: n }, t)) : /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-title" }, t) : "", s ? /* @__PURE__ */ e.createElement("span", { className: "mds-action-list__item-desc" }, s) : "")), ge = ({
  children: a,
  className: t = "",
  boxed: s = !1,
  divider: l = !0
}) => {
  const n = !l && !s ? "mds-action-list--no-divider" : "", c = s ? "mds-action-list--box" : "mds-action-list--default";
  return /* @__PURE__ */ e.createElement("div", { role: "group", className: `mds-action-list ${n} ${t}` }, /* @__PURE__ */ e.createElement("ul", { className: c }, a));
}, ye = ({
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
  const c = () => {
    l && l();
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, s === "ellipsis" ? /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex ${n}`, "aria-hidden": "true" }, /* @__PURE__ */ e.createElement("span", null, "...")) : /* @__PURE__ */ e.createElement("li", { className: `mds-pagination__item ${n}`, onClick: c }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn", type: "button", "aria-label": `page ${t}`, "aria-current": a }, t)));
}, $e = ({
  count: a = 1,
  page: t = 1,
  onChange: s,
  className: l = ""
}) => {
  const n = () => {
    let m;
    return a < 8 ? m = [...Array(a)].map((o, d) => /* @__PURE__ */ e.createElement(i, { key: d + 1, page: (d + 1).toString(), selected: d + 1 === t, onClick: () => c(d + 1) })) : t <= 3 ? m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", selected: t === 1, onClick: () => c(1) }), /* @__PURE__ */ e.createElement(i, { key: 2, page: "2", selected: t === 2, onClick: () => c(2) }), /* @__PURE__ */ e.createElement(i, { key: 3, page: "3", selected: t === 3, onClick: () => c(3) }), /* @__PURE__ */ e.createElement(i, { key: 4, page: "4", selected: t === 4, onClick: () => c(4) }), /* @__PURE__ */ e.createElement(i, { key: 5, page: "5", selected: t === 5, onClick: () => c(5) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), onClick: () => c(a) })) : t > a - 3 ? m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => c(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a - 4, page: (a - 4).toString(), selected: t === a - 4, onClick: () => c(a - 4) }), /* @__PURE__ */ e.createElement(i, { key: a - 3, page: (a - 3).toString(), selected: t === a - 3, onClick: () => c(a - 3) }), /* @__PURE__ */ e.createElement(i, { key: a - 2, page: (a - 2).toString(), selected: t === a - 2, onClick: () => c(a - 2) }), /* @__PURE__ */ e.createElement(i, { key: a - 1, page: (a - 1).toString(), selected: t === a - 1, onClick: () => c(a - 1) }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), selected: t === a, onClick: () => c(a) })) : m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(i, { key: 1, page: "1", onClick: () => c(1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: t - 1, page: (t - 1).toString(), onClick: () => c(t - 1) }), /* @__PURE__ */ e.createElement(i, { key: t, page: t.toString(), selected: !0, onClick: () => c(t) }), /* @__PURE__ */ e.createElement(i, { key: t + 1, page: (t + 1).toString(), onClick: () => c(t + 1) }), /* @__PURE__ */ e.createElement(i, { variant: "ellipsis" }), /* @__PURE__ */ e.createElement(i, { key: a, page: a.toString(), onClick: () => c(a) })), m;
  }, c = (r) => {
    s && s(r);
  };
  return /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": "page des xxx", className: `mds-pagination ${l}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-pagination__item-list" }, /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: t < 2, onClick: () => c(t - 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-left", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Première page"))), n(), /* @__PURE__ */ e.createElement("li", { className: "mds-pagination__item" }, /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-btn mds-btn--icon-only mds-pagination__navigation", disabled: t >= a, onClick: () => c(t + 1) }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Dernière page"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__chevron-right", "aria-hidden": "true" })))));
}, P = w(!1), Q = () => z(P), ke = ({
  children: a
}) => {
  if (Q())
    throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");
  return /* @__PURE__ */ e.createElement(P.Provider, { value: !0 }, /* @__PURE__ */ e.createElement("p", null, a));
}, xe = ({
  className: a,
  max: t = 100,
  value: s,
  ...l
}) => /* @__PURE__ */ e.createElement("progress", { className: `mds-progress-bar ${a}`, "aria-hidden": "true", value: s, max: t, ...l }, s), Ce = ({
  title: a = null,
  desc: t = null,
  action: s = null,
  flip: l = !1,
  className: n = "",
  image: c = "",
  ...r
}) => {
  const m = l ? { flexDirection: "row-reverse" } : null;
  return /* @__PURE__ */ e.createElement("div", { className: "mds-push__container", ...r }, /* @__PURE__ */ e.createElement("div", { className: `mds-push ${n}`, style: m }, /* @__PURE__ */ e.createElement("div", { className: "mds-push__body" }, a ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--16" }, a) : "", t ? /* @__PURE__ */ e.createElement($, { className: "mds-stack-b--32" }, t) : "", s), c ? /* @__PURE__ */ e.createElement("div", { className: "mds-push__img" }, /* @__PURE__ */ e.createElement("img", { src: c, alt: "" })) : ""));
}, we = ({
  autor: a,
  avatar: t,
  children: s,
  className: l = "",
  reverse: n = !1
}) => {
  const c = n ? "mds-quote mds-quote--reverse" : "mds-quote";
  return /* @__PURE__ */ e.createElement("blockquote", { className: `${c} ${l}` }, /* @__PURE__ */ e.createElement("p", { className: "mds-quote__text" }, s), a ? /* @__PURE__ */ e.createElement("p", { className: "mds-quote__legendary" }, t ? /* @__PURE__ */ e.createElement("img", { alt: "", src: t, "aria-hidden": "true" }) : "", a) : "");
}, j = ({
  children: a,
  disabled: t,
  selected: s,
  hidden: l,
  value: n
}) => /* @__PURE__ */ e.createElement("option", { value: n, disabled: t, selected: s, hidden: l }, a), ze = ({
  children: a,
  label: t,
  subLabel: s,
  name: l,
  placeholder: n = "Sélectionner...",
  required: c = !0,
  requiredLabel: r = "(facultatif)"
}) => {
  const m = e.useId(), o = c ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, r);
  return /* @__PURE__ */ e.createElement("div", { className: "mds-select-dropdown" }, /* @__PURE__ */ e.createElement("label", { className: "mds-label", htmlFor: m }, t, o, /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, s)), /* @__PURE__ */ e.createElement("div", { className: "mds-select__item mds-input-cell" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__expand-more", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("select", { name: l, id: m, required: c }, n ? /* @__PURE__ */ e.createElement(j, { disabled: !0, selected: !0, hidden: !0 }, n) : "", a)));
}, Me = ({
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
}) => /* @__PURE__ */ e.createElement("div", { className: ` ${l ? "mds-sr-only" : ""} ${n}` }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, s && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${s}--left` }), /* @__PURE__ */ e.createElement("h1", { id: a, className: "mds-modal__title" }, t)), /* @__PURE__ */ e.createElement(y, null)), J = {
  small: "small",
  medium: "medium",
  large: "big"
}, Se = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  title: n,
  icon: c,
  visuallyHideTitle: r = !1,
  showCloseButton: m = !1,
  className: o = ""
}) => {
  const d = C(null), p = e.useId();
  let u;
  const h = () => {
    s && (s(), document.body.style.overflow = "scroll");
  }, v = (E) => {
    E.key === "Escape" && (E.preventDefault(), E.stopImmediatePropagation(), h());
  }, f = (E) => {
    E.target.classList.contains("mds-dialog") && h();
  };
  return b(() => (m && (u = d.current.querySelector("button.mds-close"), u.addEventListener("click", h)), d.current.addEventListener("click", f), () => {
    m && u.removeEventListener("click", h);
    try {
      d.current.removeEventListener("click", f);
    } catch {
    }
  }), []), b(() => (t === !0 ? (document.addEventListener("keydown", v), document.body.style.overflow = "hidden", d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", v), document.body.style.overflow = "scroll";
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: `mds-dialog ${o}`, "aria-modal": "true", "aria-labelledby": p }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${J[l]}`, role: "document" }, m && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement(G, { title: n, icon: c, visuallyHidden: r, id: p }), a)));
}, Ie = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__content ${t}`, role: "document" }, a), Pe = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-modal__footer ${t}` }, a), He = ({
  children: a,
  title: t = "Summary",
  className: s = ""
}) => {
  const l = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: `mds-summary ${s}`, role: "navigation", "aria-labelledby": l }, /* @__PURE__ */ e.createElement(I, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: l }, t), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, g.map(a, (n) => /* @__PURE__ */ e.createElement("li", null, n))));
}, Le = ({
  reverse: a = !1,
  children: t,
  className: s = "",
  variant: l = "default",
  ...n
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs ${l == "pills" ? "mds-tabs--pills mds-tabs--standalone" : ""} ${a ? "mds-tabs--reverse" : ""} ${s}`, ...n }, t), Oe = ({
  children: a,
  ariaLabel: t,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("nav", { role: "navigation", "aria-label": t, className: s }, /* @__PURE__ */ e.createElement("ul", { className: "mds-custom-scrollbar__x" }, g.map(a, (l, n) => n == 0 ? /* @__PURE__ */ e.createElement("li", { className: "mds-tabs__tab--selected" }, L(l, { ariaCurrent: !0 })) : /* @__PURE__ */ e.createElement("li", null, l)))), Fe = ({
  label: a,
  icon: t,
  ariaCurrent: s = !1,
  className: l = ""
}) => {
  const n = t ? /* @__PURE__ */ e.createElement(K, { baseClassName: "picto", size: "xsmall" }, t) : "";
  return /* @__PURE__ */ e.createElement("button", { className: `mds-tabs__tab ${l}`, type: "button", "aria-current": s }, n, a);
}, Ae = ({
  children: a,
  className: t = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panels ${t}` }, g.map(a, (s, l) => l == 1 ? e.cloneElement(s, { hidden: !0 }) : s)), Te = ({
  children: a,
  hidden: t = !1,
  className: s = ""
}) => /* @__PURE__ */ e.createElement("div", { className: `mds-tabs__panel ${s}`, hidden: t }, a), x = {
  text: "text--basic",
  password: "text--basic",
  tel: "phone--basic",
  email: "mail"
}, qe = ({
  endAdornment: a,
  error: t = !1,
  errorText: s,
  fullWidth: l = !1,
  id: n,
  label: c,
  optionalText: r = "facultatif",
  required: m = !1,
  reverse: o = !1,
  supportingText: d,
  startIcon: p,
  type: u = "text",
  className: h = "",
  ...v
}) => {
  const f = m ? "" : /* @__PURE__ */ e.createElement("span", { className: "mds-label--optional" }, "(", r, ")"), E = x[u] || x.text, N = e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-input-group ${o ? "mds-input-group--reverse" : ""} ${h}` }, /* @__PURE__ */ e.createElement("label", { htmlFor: n, className: "mds-label" }, c, " ", f, " ", d ? /* @__PURE__ */ e.createElement("span", { className: "mds-label--description" }, d) : ""), /* @__PURE__ */ e.createElement("div", { className: `mds-input-cell ${l ? "mds-full-width" : ""} ${p ? "mds-wrapper--icon-left" : ""}` }, p ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-input__icon mds-icon__${p}` }) : "", /* @__PURE__ */ e.createElement("input", { className: `mds-input mds-input-${E}`, id: n, type: u, "aria-required": m, "aria-invalid": t, "aria-describedby": t && s ? N : "", ...v }), u === "password" ? /* @__PURE__ */ e.createElement("button", { type: "button", className: "mds-input__icon" }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only", "aria-live": "polite" }, "Masquer le mot de passe"), /* @__PURE__ */ e.createElement("span", { className: "mds-icon__visibility", "aria-hidden": "true" })) : a ? /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-input__unit" }, " ", a, " ") : ""), t && s ? /* @__PURE__ */ e.createElement("p", { className: "mds-message--error", id: N }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__error--left", "aria-hidden": "true" }), s) : "");
}, Re = ({
  id: a,
  label: t,
  checked: s = !1,
  disabled: l = !1,
  onChange: n,
  reverse: c = !1,
  className: r = ""
}) => {
  const m = a || e.useId();
  return /* @__PURE__ */ e.createElement("div", { className: `mds-toggle ${c ? "mds-toggle--reverse" : ""} ${r}` }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", onChange: n, role: "switch", id: m, checked: s, disabled: l, "aria-disabled": l }), /* @__PURE__ */ e.createElement("label", { htmlFor: m }, /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, t)));
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
  ce as CalloutContent,
  me as Card,
  re as CardCompactV,
  me as CardHeader,
  me as CardMedia,
  de as ChipsItem,
  ie as ChipsList,
  y as Divider,
  oe as Header,
  pe as HeaderNav,
  ue as HeaderNavItem,
  Ee as HeaderNavMenu,
  _e as Hero,
  K as Icon,
  ve as IconButton,
  te as Link,
  ge as List,
  fe as ListItem,
  Ne as ListItemIcon,
  be as ListItemText,
  ye as Loader,
  B as Menu,
  he as MenuItem,
  $e as Pagination,
  i as PaginationItem,
  ke as Play,
  xe as ProgressLinear,
  Ce as Pushout,
  we as Quote,
  ze as Select,
  j as SelectItem,
  Me as ShowMore,
  Se as SidePanel,
  Ie as SidePanelContent,
  Pe as SidePanelFooter,
  G as SidePanelHeader,
  He as Summary,
  Fe as Tab,
  Oe as TabList,
  Te as TabPanel,
  Ae as TabPanelList,
  Le as Tabs,
  qe as TextField,
  Re as Toggle,
  I as Typography
};
//# sourceMappingURL=index.es.js.map
