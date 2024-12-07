import e, { useRef as y, useEffect as f } from "react";
function w({
  children: l,
  severity: s = "info",
  title: a,
  icon: t = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${t}`, "aria-hidden": "true" }), a ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, a) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, l)));
}
function M({
  label: l,
  size: s = "small",
  severity: a = "neutral",
  icon: t,
  color: n
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${a} ${m}` }, t && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, l));
}
function H({
  component: l,
  children: s,
  color: a,
  variant: t = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: c,
  endIcon: i,
  disabled: d = !1,
  reverse: E = !1,
  href: o,
  target: _,
  ...h
}) {
  const p = l || "button", N = m ? "mds-full-width" : "", g = E ? "mds-btn--reverse" : "";
  t == "primary" && a == "conversion" ? t += "-cta" : t == "secondary" && a == "alert" && (t += "-alert");
  let r = {};
  return p == "a" ? (r.role = "button", r.href = o, r.target = _ || "_self", r.tabindex = "0") : p == "div" ? (r.role = "button", r.tabindex = "0") : r = { ...h, opts: r }, d && (p == "a" || p == "div" ? r["aria-disabled"] = "true" : r.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    p,
    {
      ...r,
      className: `mds-btn mds-btn--${t} mds-btn--${n} ${N} ${g}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    s,
    i ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }) : null
  );
}
function P({
  title: l = "title",
  icon: s = "auto",
  href: a = "#",
  target: t = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: a, className: "mds-card__link", target: t }, l))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function S({
  label: l,
  active: s = !1,
  onClick: a
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: a, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, l));
}
function T({
  children: l,
  reverse: s = !1,
  size: a = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${a == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, l));
}
const z = ({
  upTitle: l,
  title: s = "Title",
  subTitle: a = "Content",
  heroActions: t,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, l && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, l), a && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, a), t && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, t)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), $ = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, v = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, B = ({
  children: l = "person",
  color: s,
  size: a = "medium",
  baseClassName: t = "icon"
}) => {
  const n = "mds-" + t + "__", m = t == "picto" ? "mds-picto--" + v[a] : "mds-icon--" + $[a];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${l} ${m} ${s ? "mds-color__" + s : ""} ` });
}, x = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, F = ({
  children: l,
  variant: s = "body2",
  underline: a = !0,
  reverse: t = !1,
  href: n = "#",
  target: m = "_self",
  startIcon: c,
  endIcon: i
}) => {
  const d = `mds-link ${x[s]} ${a ? "" : "mds-link--standalone"} ${t ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, href: n, target: m }, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }), l, i && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }));
}, R = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), k = {
  small: "small",
  medium: "medium",
  large: "big"
}, q = ({
  titleIcon: l,
  children: s,
  open: a = !1,
  onClose: t,
  size: n = "medium",
  title: m = "Title",
  hideCloseButton: c = !1,
  footer: i
}) => {
  const d = y(null);
  let E;
  const o = () => {
    t && t();
  }, _ = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), o());
  }, h = (u) => {
    u.target.classList.contains("mds-dialog") && o();
  };
  return f(() => (c || (E = d.current.querySelector("button.mds-close"), E.addEventListener("click", o)), d.current.addEventListener("click", h), () => {
    c || E.removeEventListener("click", o), d.current.removeEventListener("click", h);
  }), []), f(() => (a === !0 ? (document.addEventListener("keydown", _), d.current.showModal()) : d.current.close(), () => {
    document.removeEventListener("keydown", _);
  }), [a]), /* @__PURE__ */ e.createElement("dialog", { ref: d, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${k[n]}`, role: "document" }, !c && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, l && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${l}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, m)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" }), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, s), i && /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, i))));
}, b = {
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
}, C = {
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
  children: l,
  variant: s = "body1",
  component: a,
  align: t = "left",
  underlineColor: n = "",
  framed: m = !1
}) {
  const i = a || C[s], d = s == "underline" && n ? b[s] + "--" + n : b[s];
  return /* @__PURE__ */ e.createElement(i, { className: `${d} ${m ? "mds-framed" : ""}`, style: { textAlign: t } }, m ? /* @__PURE__ */ e.createElement("span", null, l) : l);
}
export {
  w as Alert,
  M as Badge,
  H as Button,
  P as CardCompactV,
  S as ChipsItem,
  T as ChipsList,
  z as Hero,
  B as Icon,
  F as Link,
  R as Play,
  q as SidePanel,
  A as Typography
};
//# sourceMappingURL=index.es.js.map
