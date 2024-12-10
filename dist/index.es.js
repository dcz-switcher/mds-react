import e, { useRef as b, useEffect as _, Children as g } from "react";
const w = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-accordion--standalone" }, a), F = ({
  id: a,
  title: t = "Item title",
  children: s,
  defaultExpanded: l = !1,
  onChange: n,
  expanded: r = l,
  expandIcon: c = "expand-more"
}) => {
  const [d, i] = e.useState(0), [m, u] = e.useState(r), p = b(null), h = () => p && p.current ? p.current.querySelector(".mds-accordion__body").offsetHeight : 0, f = () => {
    u(!m), n && a && n(a);
  };
  return _(() => (i(m ? h() : 0), () => {
  }), [m]), _(() => (u(r), () => {
  }), [r]), /* @__PURE__ */ e.createElement("div", { ref: p, id: a, className: "mds-accordion__item" }, /* @__PURE__ */ e.createElement("h2", { className: "mds-accordion__header" }, /* @__PURE__ */ e.createElement("button", { type: "button", "aria-controls": "collapse--xx", onClick: f, className: `mds-collapse mds-collapse__label ${m ? "active" : ""}`, "aria-expanded": m }, t, /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}`, "aria-hidden": "true" }))), /* @__PURE__ */ e.createElement("div", { id: "collapse--xx", className: `mds-collapse__content ${m ? "active" : ""}`, style: { maxHeight: d } }, /* @__PURE__ */ e.createElement("div", { className: "mds-accordion__body" }, s)));
};
function I({
  children: a,
  severity: t = "info",
  title: s,
  icon: l = "info",
  onClose: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${l}`, "aria-hidden": "true" }), s ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, s) : null), n && /* @__PURE__ */ e.createElement("button", { className: "mds-close", onClick: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, a)));
}
function T({
  label: a,
  size: t = "small",
  severity: s = "neutral",
  icon: l,
  color: n
}) {
  const r = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${t} mds-badge--${s} ${r}` }, l && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${l}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, a));
}
const x = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, v = {
  link: "color-use--9",
  primary: "color-macif--1",
  text: "color-grey--80"
}, z = ({
  children: a,
  variant: t = "body2",
  underline: s = !0,
  reverse: l = !1,
  startIcon: n,
  endIcon: r,
  color: c = "link",
  ...d
}) => {
  const i = `mds-link ${x[t]} ${s ? "" : "mds-link--standalone"} ${l ? "mds-link--reverse" : "mds-color__" + v[c]}`;
  return /* @__PURE__ */ e.createElement("a", { className: i, ...d }, n && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${n}--right`, "aria-hidden": "true" }), a, r && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${r}--right`, "aria-hidden": "true" }));
}, A = ({
  children: a,
  color: t = "link",
  reverse: s = !1
}) => {
  const l = s ? "color-white" : v[t];
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-breadcrumbs", role: "navigation", "aria-labelledby": "xx" }, /* @__PURE__ */ e.createElement("ul", null, g.map(a, (n) => /* @__PURE__ */ e.createElement("li", { className: `mds-color__${l}` }, n))));
};
function B({
  component: a,
  children: t,
  color: s,
  variant: l = "primary",
  size: n = "medium",
  fullWidth: r = !1,
  startIcon: c,
  endIcon: d,
  disabled: i = !1,
  reverse: m = !1,
  href: u,
  target: p,
  ...h
}) {
  const E = a || "button", y = r ? "mds-full-width" : "", $ = m ? "mds-btn--reverse" : "";
  l == "primary" && s == "conversion" ? l += "-cta" : l == "secondary" && s == "alert" && (l += "-alert");
  let o = {};
  return E == "a" ? (o.role = "button", o.href = u, o.target = p || "_self", o.tabindex = "0") : E == "div" ? (o.role = "button", o.tabindex = "0") : o = { ...h, opts: o }, i && (E == "a" || E == "div" ? o["aria-disabled"] = "true" : o.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    E,
    {
      ...o,
      className: `mds-btn mds-btn--${l} mds-btn--${n} ${y} ${$}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    t,
    d ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${d}--right`, "aria-hidden": "true" }) : null
  );
}
function q({
  title: a = "title",
  icon: t = "auto",
  href: s = "#",
  target: l = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: s, className: "mds-card__link", target: l }, a))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${t}`, "aria-hidden": "true" }));
}
function D({
  label: a,
  active: t = !1,
  onClick: s
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: s, type: "button", className: "mds-chips__item", "aria-pressed": `${t}`, "aria-disabled": `${t}` }, a));
}
function R({
  children: a,
  reverse: t = !1,
  size: s = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${s == "small" ? "mds-chips--small" : ""} ${t == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, a));
}
const C = {
  thin: "basic",
  heavy: "module"
}, K = ({
  component: a = "hr",
  variant: t = "thin",
  reverse: s = !1,
  ...l
}) => {
  const n = a;
  return /* @__PURE__ */ e.createElement(n, { className: `mds-divider mds-divider--${C[t]} ${s ? "mds-divider--reverse" : ""}`, "aria-hidden": "true", ...l });
}, V = ({
  upTitle: a,
  title: t = "Title",
  subTitle: s = "Content",
  heroActions: l,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, t, a && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, s), l && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, l)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), k = {
  xsmall: 16,
  small: 24,
  medium: 28,
  large: 32,
  xlarge: 40,
  huge: 40,
  enormous: 40,
  giant: 40
}, S = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
  huge: 80,
  enormous: 96,
  giant: 160
}, W = ({
  children: a = "person",
  color: t,
  size: s = "medium",
  baseClassName: l = "icon"
}) => {
  const n = "mds-" + l + "__", r = l == "picto" ? "mds-picto--" + S[s] : "mds-icon--" + k[s];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${a} ${r} ${t ? "mds-color__" + t : ""} ` });
}, j = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), H = {
  small: "small",
  medium: "medium",
  large: "big"
}, G = ({
  children: a,
  open: t = !1,
  onClose: s,
  size: l = "medium",
  showCloseButton: n = !1
}) => {
  const r = b(null);
  let c;
  const d = () => {
    s && s();
  }, i = (u) => {
    u.key === "Escape" && (u.preventDefault(), u.stopImmediatePropagation(), d());
  }, m = (u) => {
    u.target.classList.contains("mds-dialog") && d();
  };
  return _(() => (n && (c = r.current.querySelector("button.mds-close"), c.addEventListener("click", d)), r.current.addEventListener("click", m), () => {
    n && c.removeEventListener("click", d), r.current.removeEventListener("click", m);
  }), []), _(() => (t === !0 ? (document.addEventListener("keydown", i), r.current.showModal()) : r.current.close(), () => {
    document.removeEventListener("keydown", i);
  }), [t]), /* @__PURE__ */ e.createElement("dialog", { ref: r, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: `mds-modal mds-modal--side-panel mds-modal--${H[l]}`, role: "document" }, n && /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, a)));
}, J = ({
  title: a,
  icon: t
}) => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, t && /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: `mds-icon__${t}--left` }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, a)), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" })), O = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, a), Q = ({
  children: a
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, a), N = {
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
}, L = {
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
  variant: t = "body1",
  component: s,
  align: l = "left",
  underlineColor: n = "",
  framed: r = !1,
  ...c
}) {
  const i = s || L[t], m = t == "underline" && n ? N[t] + "--" + n : N[t];
  return /* @__PURE__ */ e.createElement(i, { className: `${m} ${r ? "mds-framed" : ""}`, style: { textAlign: l }, ...c }, r ? /* @__PURE__ */ e.createElement("span", null, a) : a);
}
const U = ({
  children: a,
  title: t = "Summary"
}) => {
  const s = e.useId();
  return /* @__PURE__ */ e.createElement("nav", { className: "mds-summary", role: "navigation", "aria-labelledby": s }, /* @__PURE__ */ e.createElement(M, { variant: "h4", component: "p", role: "heading", "aria-level": 2, id: s }, t), /* @__PURE__ */ e.createElement("ul", { className: "mds-list" }, g.map(a, (l) => /* @__PURE__ */ e.createElement("li", null, l))));
};
export {
  w as Accordion,
  F as AccordionItem,
  I as Alert,
  T as Badge,
  A as Breadcrumb,
  B as Button,
  q as CardCompactV,
  D as ChipsItem,
  R as ChipsList,
  K as Divider,
  V as Hero,
  W as Icon,
  z as Link,
  j as Play,
  G as SidePanel,
  O as SidePanelContent,
  Q as SidePanelFooter,
  J as SidePanelHeader,
  U as Summary,
  M as Typography
};
//# sourceMappingURL=index.es.js.map
