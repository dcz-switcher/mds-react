import e, { useRef as g, useEffect as h } from "react";
function L({
  children: a,
  severity: t = "info",
  title: s,
  icon: n = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${n}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function w({
  label: a,
  size: t = "small",
  severity: s = "neutral",
  icon: n,
  color: l
}) {
  const m = l ? `mds-background-color__${l}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${t} mds-badge--${s} ${m}` }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
function M({
  component: a,
  children: t,
  color: s,
  variant: n = "primary",
  size: l = "medium",
  fullWidth: m = !1,
  startIcon: d,
  endIcon: c,
  disabled: o = !1,
  reverse: i = !1,
  href: p,
  target: E,
  ...b
}) {
  const u = a || "button", N = m ? "mds-full-width" : "", f = i ? "mds-btn--reverse" : "";
  n == "primary" && s == "conversion" ? n += "-cta" : n == "secondary" && s == "alert" && (n += "-alert");
  let r = {};
  return u == "a" ? (r.role = "button", r.href = p, r.target = E || "_self", r.tabindex = "0") : u == "div" ? (r.role = "button", r.tabindex = "0") : r = { ...b, opts: r }, o && (u == "a" || u == "div" ? r["aria-disabled"] = "true" : r.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    u,
    {
      ...r,
      className: `mds-btn mds-btn--${n} mds-btn--${l} ${N} ${f}`
    },
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--left`, "aria-hidden": "true" }) : null,
    t,
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }) : null
  );
}
function H({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: n = "_self",
  role: l
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: l }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: n }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function S({
  label: a,
  active: t = !1,
  onClick: s
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function T({
  children: a,
  reverse: t = !1,
  size: s = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${t == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const B = ({
  upTitle: a,
  title: t = "Title",
  subTitle: s = "Content",
  heroActions: n,
  image: l
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), n && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, n)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${l}`, alt: "" }))), y = {
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
}, P = ({
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: n = "icon"
}) => {
  const l = "mds-" + n + "__", m = n == "picto" ? "mds-picto--" + v[s] : "mds-icon--" + y[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${l}${a} ${m} ${t ? "mds-color__" + t : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, z = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: n = !1,
  href: l = "#",
  target: m = "_self",
  startIcon: d,
  endIcon: c
}) => {
  const o = `mds-link ${$[t]} ${s ? "" : "mds-link--standalone"} ${n ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: o, href: l, target: m }, d && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }), a, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }));
}, F = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), O = ({
  open: a = !1,
  onClose: t
}) => {
  const s = g(null), [n, l] = e.useState(a);
  let m;
  const d = () => {
    t && (t(), l(!1));
  }, c = (i) => {
    i.key === "Escape" && (i.preventDefault(), i.stopImmediatePropagation(), d());
  }, o = (i) => {
    i.target.classList.contains("mds-dialog") && d();
  };
  return h(() => (m = s.current.querySelector("button.mds-close"), m.addEventListener("click", d), document.addEventListener("keydown", c), s.current.addEventListener("click", o), () => {
    m.removeEventListener("click", d), document.removeEventListener("keydown", c), s.current.removeEventListener("click", o);
  }), []), h(() => {
    if (a === !0)
      try {
        s.current.showModal();
      } catch {
      }
    else
      s.current.close();
  }, [a]), /* @__PURE__ */ e.createElement("dialog", { ref: s, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true", open: n }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal mds-modal--side-panel mds-modal--medium", role: "document" }, /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-icon__calendar-today--left" }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, "Titre")), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" }), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-text--3" }, "Zone de contenu libre et éditable en HTML")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, /* @__PURE__ */ e.createElement("div", { className: "mds-btn-group" }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--primary" }, "button"), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, "button"))))));
}, _ = {
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
function R({
  children: a,
  variant: t = "body1",
  component: s,
  align: n = "left",
  underlineColor: l = "",
  framed: m = !1
}) {
  const c = s || x[t], o = t == "underline" && l ? _[t] + "--" + l : _[t];
  return /* @__PURE__ */ e.createElement(c, { className: `${o} ${m ? "mds-framed" : ""}`, style: { textAlign: n } }, m ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
export {
  L as Alert,
  w as Badge,
  M as Button,
  H as CardCompactV,
  S as ChipsItem,
  T as ChipsList,
  B as Hero,
  P as Icon,
  z as Link,
  F as Play,
  O as SidePanel,
  R as Typography
};
//# sourceMappingURL=index.es.js.map
