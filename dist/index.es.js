import e from "react";
function v({
  children: n,
  severity: s = "info",
  title: a,
  icon: t = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${t}`, "aria-hidden": "true" }), a ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, a) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, n)));
}
function k({
  label: n,
  size: s = "small",
  severity: a = "neutral",
  icon: t,
  color: l
}) {
  const r = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${a} ${r}` }, t && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, n));
}
function M({
  component: n,
  children: s,
  color: a,
  variant: t = "primary",
  size: l = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: d,
  disabled: i = !1,
  reverse: h = !1,
  href: _,
  target: u,
  ...E
}) {
  const o = n || "button", b = r ? "mds-full-width" : "", g = h ? "mds-btn--reverse" : "";
  t == "primary" && a == "conversion" ? t += "-cta" : t == "secondary" && a == "alert" && (t += "-alert");
  let m = {};
  return o == "a" ? (m.role = "button", m.href = _, m.target = u || "_self", m.tabindex = "0") : o == "div" ? (m.role = "button", m.tabindex = "0") : m = { ...E, opts: m }, i && (o == "a" || o == "div" ? m["aria-disabled"] = "true" : m.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    o,
    {
      ...m,
      className: `mds-btn mds-btn--${t} mds-btn--${l} ${b} ${g}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    s,
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }) : null
  );
}
function w({
  title: n = "title",
  icon: s = "auto",
  href: a = "#",
  target: t = "_self",
  role: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: a, className: "mds-card__link", target: t }, n))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function B({
  label: n,
  active: s = !1,
  onClick: a
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: a, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, n));
}
function T({
  children: n,
  reverse: s = !1,
  size: a = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${a == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, n));
}
const z = ({
  upTitle: n,
  title: s = "Title",
  subTitle: a = "Content",
  heroActions: t,
  image: l
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, n && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, n), a && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, a), t && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, t)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${l}`, alt: "" }))), f = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, N = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, L = ({
  children: n = "person",
  color: s,
  size: a = "medium",
  baseClassName: t = "icon"
}) => {
  const l = "mds-" + t + "__", r = t == "picto" ? "mds-picto--" + N[a] : "mds-icon--" + f[a];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${l}${n} ${r} ${s ? "mds-color__" + s : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, P = ({
  children: n,
  variant: s = "body2",
  underline: a = !0,
  reverse: t = !1,
  href: l = "#",
  target: r = "_self",
  startIcon: c,
  endIcon: d
}) => {
  const i = `mds-link ${$[s]} ${a ? "" : "mds-link--standalone"} ${t ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: l, target: r }, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }), n, d && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }));
}, S = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), p = {
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
}, y = {
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
};
function A({
  children: n,
  variant: s = "body1",
  component: a,
  align: t = "left",
  underlineColor: l = "",
  framed: r = !1
}) {
  const d = a || y[s], i = s == "underline" && l ? p[s] + "--" + l : p[s];
  return /* @__PURE__ */ e.createElement(d, { className: `${i} ${r ? "mds-framed" : ""}`, style: { textAlign: t } }, r ? /* @__PURE__ */ e.createElement("span", null, n) : n);
}
export {
  v as Alert,
  k as Badge,
  M as Button,
  w as CardCompactV,
  B as ChipsItem,
  T as ChipsList,
  z as Hero,
  L as Icon,
  P as Link,
  S as Play,
  A as Typography
};
//# sourceMappingURL=index.es.js.map
