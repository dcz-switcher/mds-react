import e from "react";
function N({
  children: t,
  severity: a = "info",
  title: s,
  icon: n = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function y({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: n,
  color: m
}) {
  const d = m ? `mds-background-color__${m}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${d}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
function g({
  component: t,
  children: a,
  variant: s = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: d,
  endIcon: c,
  disabled: o = !1,
  reverse: i = !1,
  ...h
}) {
  const r = t || "button", p = m ? "mds-full-width" : "", b = i ? "mds-btn--reverse" : "";
  let l = {};
  return r == "a" ? (l.role = "button", l.href = "#", l.tabindex = "0") : r == "div" ? (l.role = "button", l.tabindex = "0") : l = { ...h, opts: l }, o && (r == "a" || r == "div" ? l["aria-disabled"] = "true" : l.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    r,
    {
      ...l,
      className: `mds-btn mds-btn--${s} mds-btn--${n} ${p} ${b}`
    },
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
function $({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: n = "_self"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: n }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
const v = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), u = {
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
}, _ = {
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
function C({
  children: t,
  variant: a = "body1",
  component: s,
  align: n = "left",
  underlineColor: m = "",
  framed: d = !1
}) {
  const o = s || _[a], i = a == "underline" && m ? u[a] + "--" + m : u[a];
  return /* @__PURE__ */ e.createElement(o, { className: `${i} ${d ? "mds-framed" : ""}`, style: { textAlign: n } }, d ? /* @__PURE__ */ e.createElement("span", null, t) : t);
}
export {
  N as Alert,
  y as Badge,
  g as Button,
  $ as CardCompactV,
  v as Play,
  C as Typography
};
//# sourceMappingURL=index.es.js.map
