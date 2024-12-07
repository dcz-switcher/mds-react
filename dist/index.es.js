import e, { useRef as g, useEffect as E } from "react";
function L({
  children: l,
  severity: s = "info",
  title: t,
  icon: a = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${a}`, "aria-hidden": "true" }), t ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, t) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, l)));
}
function w({
  label: l,
  size: s = "small",
  severity: t = "neutral",
  icon: a,
  color: n
}) {
  const m = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${t} ${m}` }, a && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${a}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, l));
}
function M({
  component: l,
  children: s,
  color: t,
  variant: a = "primary",
  size: n = "medium",
  fullWidth: m = !1,
  startIcon: i,
  endIcon: c,
  disabled: d = !1,
  reverse: u = !1,
  href: _,
  target: p,
  ...b
}) {
  const o = l || "button", N = m ? "mds-full-width" : "", f = u ? "mds-btn--reverse" : "";
  a == "primary" && t == "conversion" ? a += "-cta" : a == "secondary" && t == "alert" && (a += "-alert");
  let r = {};
  return o == "a" ? (r.role = "button", r.href = _, r.target = p || "_self", r.tabindex = "0") : o == "div" ? (r.role = "button", r.tabindex = "0") : r = { ...b, opts: r }, d && (o == "a" || o == "div" ? r["aria-disabled"] = "true" : r.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    o,
    {
      ...r,
      className: `mds-btn mds-btn--${a} mds-btn--${n} ${N} ${f}`
    },
    i ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--left`, "aria-hidden": "true" }) : null,
    s,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
function H({
  title: l = "title",
  icon: s = "auto",
  href: t = "#",
  target: a = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: t, className: "mds-card__link", target: a }, l))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function T({
  label: l,
  active: s = !1,
  onClick: t
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: t, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, l));
}
function B({
  children: l,
  reverse: s = !1,
  size: t = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${t == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, l));
}
const P = ({
  upTitle: l,
  title: s = "Title",
  subTitle: t = "Content",
  heroActions: a,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, l && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, l), t && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, t), a && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, a)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), y = {
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
  color: s,
  size: t = "medium",
  baseClassName: a = "icon"
}) => {
  const n = "mds-" + a + "__", m = a == "picto" ? "mds-picto--" + v[t] : "mds-icon--" + y[t];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${l} ${m} ${s ? "mds-color__" + s : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, z = ({
  children: l,
  variant: s = "body2",
  underline: t = !0,
  reverse: a = !1,
  href: n = "#",
  target: m = "_self",
  startIcon: i,
  endIcon: c
}) => {
  const d = `mds-link ${$[s]} ${t ? "" : "mds-link--standalone"} ${a ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: d, href: n, target: m }, i && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${i}--right`, "aria-hidden": "true" }), l, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, F = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), R = ({
  open: l = !1,
  onClose: s,
  size: t = "medium"
}) => {
  const a = g(null);
  let n;
  const m = () => {
    s && s();
  }, i = (d) => {
    d.key === "Escape" && (d.preventDefault(), d.stopImmediatePropagation(), m());
  }, c = (d) => {
    d.target.classList.contains("mds-dialog") && m();
  };
  return E(() => (n = a.current.querySelector("button.mds-close"), n.addEventListener("click", m), a.current.addEventListener("click", c), () => {
    n.removeEventListener("click", m), a.current.removeEventListener("click", c);
  }), []), E(() => (l === !0 ? (document.addEventListener("keydown", i), a.current.showModal()) : a.current.close(), () => {
    document.removeEventListener("keydown", i);
  }), [l]), /* @__PURE__ */ e.createElement("dialog", { ref: a, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${t}`, role: "document" }, /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-icon__calendar-today--left" }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, "Titre")), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" }), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-text--3" }, "Zone de contenu libre et éditable en HTML")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, /* @__PURE__ */ e.createElement("div", { className: "mds-btn-group" }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--primary" }, "button"), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, "button"))))));
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
  variant: s = "body1",
  component: t,
  align: a = "left",
  underlineColor: n = "",
  framed: m = !1
}) {
  const c = t || x[s], d = s == "underline" && n ? h[s] + "--" + n : h[s];
  return /* @__PURE__ */ e.createElement(c, { className: `${d} ${m ? "mds-framed" : ""}`, style: { textAlign: a } }, m ? /* @__PURE__ */ e.createElement("span", null, l) : l);
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
