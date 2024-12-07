import e, { useRef as g, useEffect as E } from "react";
function L({
  children: l,
  severity: a = "info",
  title: t,
  icon: s = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${s}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, l)));
}
function w({
  label: l,
  size: a = "small",
  severity: t = "neutral",
  icon: s,
  color: n
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${a} mds-badge--${t} ${m}` }, s && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${s}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, l));
}
function M({
  component: l,
  children: a,
  color: t,
  variant: s = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: o,
  endIcon: c,
  disabled: d = !1,
  reverse: u = !1,
  href: _,
  target: p,
  ...b
}) {
  const i = l || "button", N = m ? "mds-full-width" : "", f = u ? "mds-btn--reverse" : "";
  s == "primary" && t == "conversion" ? s += "-cta" : s == "secondary" && t == "alert" && (s += "-alert");
  let r = {};
  return i == "a" ? (r.role = "button", r.href = _, r.target = p || "_self", r.tabindex = "0") : i == "div" ? (r.role = "button", r.tabindex = "0") : r = { ...b, opts: r }, d && (i == "a" || i == "div" ? r["aria-disabled"] = "true" : r.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    i,
    {
      ...r,
      className: `mds-btn mds-btn--${s} mds-btn--${n} ${N} ${f}`
    },
    o ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${o}--left`, "aria-hidden": "true" }) : null,
    a,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
function H({
  title: l = "title",
  icon: a = "auto",
  href: t = "#",
  target: s = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: s }, l))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${a}`, "aria-hidden": "true" }));
}
function T({
  label: l,
  active: a = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${a}`, "aria-disabled": `${a}` }, l));
}
function B({
  children: l,
  reverse: a = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${a == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, l));
}
const P = ({
  upTitle: l,
  title: a = "Title",
  subTitle: t = "Content",
  heroActions: s,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, a, l && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, l), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), s && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, s)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), y = {
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
}, S = ({
  children: l = "person",
  color: a,
  size: t = "medium",
  baseClassName: s = "icon"
}) => {
  const n = "mds-" + s + "__", m = s == "picto" ? "mds-picto--" + v[t] : "mds-icon--" + y[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${l} ${m} ${a ? "mds-color__" + a : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, z = ({
  children: l,
  variant: a = "body2",
  underline: t = !0,
  reverse: s = !1,
  href: n = "#",
  target: m = "_self",
  startIcon: o,
  endIcon: c
}) => {
  const d = `mds-link ${$[a]} ${t ? "" : "mds-link--standalone"} ${s ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, href: n, target: m }, o && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${o}--right`, "aria-hidden": "true" }), l, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, F = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), R = ({
  open: l = !1,
  onClose: a,
  size: t = "medium"
}) => {
  const s = g(null);
  let n;
  const m = () => {
    a && a();
  }, o = (d) => {
    d.key === "Escape" && (d.preventDefault(), d.stopImmediatePropagation(), m());
  }, c = (d) => {
    d.target.classList.contains("mds-dialog") && m();
  };
  return E(() => (n = s.current.querySelector("button.mds-close"), n.addEventListener("click", m), s.current.addEventListener("click", c), () => {
    n.removeEventListener("click", m), s.current.removeEventListener("click", c);
  }), []), E(() => (l === !0 ? (document.addEventListener("keydown", o), s.current.showModal()) : s.current.close(), () => {
    document.removeEventListener("keydown", o);
  }), [l]), /* @__PURE__ */ e.createElement("dialog", { ref: s, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${t}`, role: "document" }, /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-icon__calendar-today--left" }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, "Titre")), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" }), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-text--3" }, "Zone de contenu libre et éditable en HTML")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, /* @__PURE__ */ e.createElement("div", { className: "mds-btn-group" }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--primary" }, "button"), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, "button"))))));
}, h = {
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
}, x = {
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
function q({
  children: l,
  variant: a = "body1",
  component: t,
  align: s = "left",
  underlineColor: n = "",
  framed: m = !1
}) {
  const c = t || x[a], d = a == "underline" && n ? h[a] + "--" + n : h[a];
  return /* @__PURE__ */ e.createElement(c, { className: `${d} ${m ? "mds-framed" : ""}`, style: { textAlign: s } }, m ? /* @__PURE__ */ e.createElement("span", null, l) : l);
}
export {
  L as Alert,
  w as Badge,
  M as Button,
  H as CardCompactV,
  T as ChipsItem,
  B as ChipsList,
  P as Hero,
  S as Icon,
  z as Link,
  F as Play,
  R as SidePanel,
  q as Typography
};
//# sourceMappingURL=index.es.js.map
