import e from "react";
function g({
  children: a,
  severity: s = "info",
  title: t,
  icon: n = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function v({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: n,
  color: l
}) {
  const d = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${d}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function C({
  component: a,
  children: s,
  variant: t = "primary",
  size: n = "medium",
  fullWidth: l = !1,
  startIcon: d,
  endIcon: r,
  disabled: c = !1,
  reverse: i = !1,
  href: h,
  target: u,
  ...b
}) {
  const o = a || "button", _ = l ? "mds-full-width" : "", E = i ? "mds-btn--reverse" : "";
  let m = {};
  return o == "a" ? (m.role = "button", m.href = h, m.target = u || "_self", m.tabindex = "0") : o == "div" ? (m.role = "button", m.tabindex = "0") : m = { ...b, opts: m }, c && (o == "a" || o == "div" ? m["aria-disabled"] = "true" : m.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    o,
    {
      ...m,
      className: `mds-btn mds-btn--${t} mds-btn--${n} ${_} ${E}`
    },
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--left`, "aria-hidden": "true" }) : null,
    s,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function x({
  title: a = "title",
  icon: s = "auto",
  href: t = "#",
  target: n = "_self",
  role: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: n }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function k({
  label: a,
  active: s = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, a));
}
function w({
  children: a,
  reverse: s = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const f = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, T = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: n = !1,
  href: l = "#",
  target: d = "_self",
  startIcon: r,
  endIcon: c
}) => {
  const i = `mds-link ${f[s]} ${t ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: l, target: d }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), a, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, B = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), p = {
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
}, N = {
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
function M({
  children: a,
  variant: s = "body1",
  component: t,
  align: n = "left",
  underlineColor: l = "",
  framed: d = !1
}) {
  const c = t || N[s], i = s == "underline" && l ? p[s] + "--" + l : p[s];
  return /* @__PURE__ */ e.createElement(c, { className: `${i} ${d ? "mds-framed" : ""}`, style: { textAlign: n } }, d ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  g as Alert,
  v as Badge,
  C as Button,
  x as CardCompactV,
  k as ChipsItem,
  w as ChipsList,
  T as Link,
  B as Play,
  M as Typography
};
//# sourceMappingURL=index.es.js.map
