import e from "react";
function $({
  children: a,
  severity: s = "info",
  title: t,
  icon: n = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function y({
  label: a,
  size: s = "small",
  severity: t = "neutral",
  icon: n,
  color: m
}) {
  const d = m ? `mds-background-color__${m}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${d}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function g({
  component: a,
  children: s,
  variant: t = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: d,
  endIcon: r,
  disabled: c = !1,
  reverse: i = !1,
  ...p
}) {
  const o = a || "button", h = m ? "mds-full-width" : "", b = i ? "mds-btn--reverse" : "";
  let l = {};
  return o == "a" ? (l.role = "button", l.href = "#", l.tabindex = "0") : o == "div" ? (l.role = "button", l.tabindex = "0") : l = { ...p, opts: l }, c && (o == "a" || o == "div" ? l["aria-disabled"] = "true" : l.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    o,
    {
      ...l,
      className: `mds-btn mds-btn--${t} mds-btn--${n} ${h} ${b}`
    },
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--left`, "aria-hidden": "true" }) : null,
    s,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function v({
  title: a = "title",
  icon: s = "auto",
  href: t = "#",
  target: n = "_self"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: n }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function C({
  label: a,
  active: s = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, a));
}
function x({
  children: a,
  reverse: s = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const _ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, k = ({
  children: a,
  variant: s = "body2",
  underline: t = !0,
  reverse: n = !1,
  href: m = "#",
  target: d = "_self",
  startIcon: r,
  endIcon: c
}) => {
  const i = `mds-link ${_[s]} ${t ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, href: m, target: d }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), a, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, w = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), u = {
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
}, E = {
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
function T({
  children: a,
  variant: s = "body1",
  component: t,
  align: n = "left",
  underlineColor: m = "",
  framed: d = !1
}) {
  const c = t || E[s], i = s == "underline" && m ? u[s] + "--" + m : u[s];
  return /* @__PURE__ */ e.createElement(c, { className: `${i} ${d ? "mds-framed" : ""}`, style: { textAlign: n } }, d ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  $ as Alert,
  y as Badge,
  g as Button,
  v as CardCompactV,
  C as ChipsItem,
  x as ChipsList,
  k as Link,
  w as Play,
  T as Typography
};
//# sourceMappingURL=index.es.js.map
