import e from "react";
function N({
  children: t,
  severity: a = "info",
  title: s,
  icon: n = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, t)));
}
function $({
  label: t,
  size: a = "small",
  severity: s = "neutral",
  icon: n,
  color: d
}) {
  const m = d ? `mds-background-color__${d}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${s} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, t));
}
function g({
  component: t,
  children: a,
  variant: s = "primary",
  size: n = "medium",
  fullWidth: d = !1,
  startIcon: m,
  endIcon: r,
  disabled: c = !1,
  reverse: o = !1,
  ...h
}) {
  const i = t || "button", p = d ? "mds-full-width" : "", b = o ? "mds-btn--reverse" : "";
  let l = {};
  return i == "a" ? (l.role = "button", l.href = "#", l.tabindex = "0") : i == "div" ? (l.role = "button", l.tabindex = "0") : l = { ...h, opts: l }, c && (i == "a" || i == "div" ? l["aria-disabled"] = "true" : l.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    i,
    {
      ...l,
      className: `mds-btn mds-btn--${s} mds-btn--${n} ${p} ${b}`
    },
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--left`, "aria-hidden": "true" }) : null,
    a,
    r ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }) : null
  );
}
function v({
  title: t = "title",
  icon: a = "auto",
  href: s = "#",
  target: n = "_self"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: n }, t))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
const _ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, x = ({
  children: t,
  variant: a = "body2",
  underline: s = !0,
  reverse: n = !1,
  href: d = "#",
  target: m = "_self",
  startIcon: r,
  endIcon: c
}) => {
  const o = `mds-link ${_[a]} ${s ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: o, href: d, target: m }, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }), t, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, C = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), u = {
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
function k({
  children: t,
  variant: a = "body1",
  component: s,
  align: n = "left",
  underlineColor: d = "",
  framed: m = !1
}) {
  const c = s || E[a], o = a == "underline" && d ? u[a] + "--" + d : u[a];
  return /* @__PURE__ */ e.createElement(c, { className: `${o} ${m ? "mds-framed" : ""}`, style: { textAlign: n } }, m ? /* @__PURE__ */ e.createElement("span", null, t) : t);
}
export {
  N as Alert,
  $ as Badge,
  g as Button,
  v as CardCompactV,
  x as Link,
  C as Play,
  k as Typography
};
//# sourceMappingURL=index.es.js.map
