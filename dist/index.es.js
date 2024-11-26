import e from "react";
function C({
  children: t,
  severity: s = "info",
  title: a,
  icon: n = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), a ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, a) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function v({
  label: t,
  size: s = "small",
  severity: a = "neutral",
  icon: n,
  color: l
}) {
  const m = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${a} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
function k({
  component: t,
  children: s,
  variant: a = "primary",
  size: n = "medium",
  fullWidth: l = !1,
  startIcon: m,
  endIcon: r,
  disabled: c = !1,
  reverse: i = !1,
  href: h,
  target: u,
  ..._
}) {
  const o = t || "button", b = l ? "mds-full-width" : "", E = i ? "mds-btn--reverse" : "";
  let d = {};
  return o == "a" ? (d.role = "button", d.href = h, d.target = u || "_self", d.tabindex = "0") : o == "div" ? (d.role = "button", d.tabindex = "0") : d = { ..._, opts: d }, c && (o == "a" || o == "div" ? d["aria-disabled"] = "true" : d.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    o,
    {
      ...d,
      className: `mds-btn mds-btn--${a} mds-btn--${n} ${b} ${E}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    s,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function M({
  title: t = "title",
  icon: s = "auto",
  href: a = "#",
  target: n = "_self",
  role: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: a, className: "mds-card__link", target: n }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function w({
  label: t,
  active: s = !1,
  onClick: a
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: a, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, t));
}
function T({
  children: t,
  reverse: s = !1,
  size: a = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${a == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, t));
}
const g = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, f = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, B = ({
  children: t = "person",
  color: s,
  size: a = "medium",
  baseClassName: n = "icon"
}) => {
  const l = "mds-" + n + "__", m = n == "picto" ? "mds-picto--" + f[a] : "mds-icon--" + g[a];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${l}${t} ${m} ${s ? "mds-color__" + s : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, z = ({
  children: t,
  variant: s = "body2",
  underline: a = !0,
  reverse: n = !1,
  href: l = "#",
  target: m = "_self",
  startIcon: r,
  endIcon: c
}) => {
  const i = `mds-link ${$[s]} ${a ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: l, target: m }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), t, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, A = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), p = {
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
function L({
  children: t,
  variant: s = "body1",
  component: a,
  align: n = "left",
  underlineColor: l = "",
  framed: m = !1
}) {
  const c = a || N[s], i = s == "underline" && l ? p[s] + "--" + l : p[s];
  return /* @__PURE__ */ e.createElement(c, { className: `${i} ${m ? "mds-framed" : ""}`, style: { textAlign: n } }, m ? /* @__PURE__ */ e.createElement("span", null, t) : t);
}
export {
  C as Alert,
  v as Badge,
  k as Button,
  M as CardCompactV,
  w as ChipsItem,
  T as ChipsList,
  B as Icon,
  z as Link,
  A as Play,
  L as Typography
};
//# sourceMappingURL=index.es.js.map
