import e, { useRef as g, useEffect as p } from "react";
function L({
  children: l,
  severity: s = "info",
  title: a,
  icon: t = "info"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white` }, /* @__PURE__ */ e.createElement("div", { className: "mds-alert__header" }, /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-icon__${t}`, "aria-hidden": "true" }), a ? /* @__PURE__ */ e.createElement("h2", { className: "mds-sr-only" }, a) : null), /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer l'alerte")), /* @__PURE__ */ e.createElement("div", { className: "mds-alert__content" }, /* @__PURE__ */ e.createElement("p", null, l)));
}
function w({
  label: l,
  size: s = "small",
  severity: a = "neutral",
  icon: t,
  color: n
}) {
  const d = n ? `mds-background-color__${n}` : "";
  return /* @__PURE__ */ e.createElement("p", { className: `mds-badge mds-badge--${s} mds-badge--${a} ${d}` }, t && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${t}`, "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", null, l));
}
function M({
  component: l,
  children: s,
  color: a,
  variant: t = "primary",
  size: n = "medium",
  fullWidth: d = !1,
  startIcon: c,
  endIcon: m,
  disabled: o = !1,
  reverse: h = !1,
  href: _,
  target: u,
  ...b
}) {
  const i = l || "button", N = d ? "mds-full-width" : "", f = h ? "mds-btn--reverse" : "";
  t == "primary" && a == "conversion" ? t += "-cta" : t == "secondary" && a == "alert" && (t += "-alert");
  let r = {};
  return i == "a" ? (r.role = "button", r.href = _, r.target = u || "_self", r.tabindex = "0") : i == "div" ? (r.role = "button", r.tabindex = "0") : r = { ...b, opts: r }, o && (i == "a" || i == "div" ? r["aria-disabled"] = "true" : r.disabled = "disabled"), /* @__PURE__ */ e.createElement(
    i,
    {
      ...r,
      className: `mds-btn mds-btn--${t} mds-btn--${n} ${N} ${f}`
    },
    c ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--left`, "aria-hidden": "true" }) : null,
    s,
    m ? /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }) : null
  );
}
function H({
  title: l = "title",
  icon: s = "auto",
  href: a = "#",
  target: t = "_self",
  role: n
}) {
  return /* @__PURE__ */ e.createElement("div", { className: "mds-card mds-card--compact-v", role: n }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__arrow-forward", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("div", { className: "mds-card__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-card__title" }, /* @__PURE__ */ e.createElement("a", { href: a, className: "mds-card__link", target: t }, l))), /* @__PURE__ */ e.createElement("span", { className: `mds-icon mds-picto__${s}`, "aria-hidden": "true" }));
}
function T({
  label: l,
  active: s = !1,
  onClick: a
}) {
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("button", { onClick: a, type: "button", className: "mds-chips__item", "aria-pressed": `${s}`, "aria-disabled": `${s}` }, l));
}
function B({
  children: l,
  reverse: s = !1,
  size: a = "big"
}) {
  return /* @__PURE__ */ e.createElement("div", { className: `mds-chips ${a == "small" ? "mds-chips--small" : ""} ${s == !0 ? "mds-chips--reverse" : ""}` }, /* @__PURE__ */ e.createElement("ul", { className: "mds-chips__list" }, l));
}
const P = ({
  upTitle: l,
  title: s = "Title",
  subTitle: a = "Content",
  heroActions: t,
  image: n
}) => /* @__PURE__ */ e.createElement("div", { className: "mds-hero mds-hero--action" }, /* @__PURE__ */ e.createElement("div", { className: "mds-hero__body" }, s, l && /* @__PURE__ */ e.createElement("div", { className: "mds-supertitle" }, l), a && /* @__PURE__ */ e.createElement("p", { className: "mds-lead" }, a), t && /* @__PURE__ */ e.createElement("div", { style: { order: 3 } }, t)), /* @__PURE__ */ e.createElement("div", { className: "mds-hero__img" }, /* @__PURE__ */ e.createElement("img", { src: `${n}`, alt: "" }))), y = {
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
  size: a = "medium",
  baseClassName: t = "icon"
}) => {
  const n = "mds-" + t + "__", d = t == "picto" ? "mds-picto--" + v[a] : "mds-icon--" + y[a];
  return /* @__PURE__ */ e.createElement("span", { className: ` ${n}${l} ${d} ${s ? "mds-color__" + s : ""} ` });
}, $ = {
  body1: "mds-text--1",
  body2: "mds-text--2",
  body3: "mds-text--3",
  body4: "mds-text--4"
}, z = ({
  children: l,
  variant: s = "body2",
  underline: a = !0,
  reverse: t = !1,
  href: n = "#",
  target: d = "_self",
  startIcon: c,
  endIcon: m
}) => {
  const o = `mds-link ${$[s]} ${a ? "" : "mds-link--standalone"} ${t ? "mds-link--reverse" : ""}`;
  return /* @__PURE__ */ e.createElement("a", { className: o, href: n, target: d }, c && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${c}--right`, "aria-hidden": "true" }), l, m && /* @__PURE__ */ e.createElement("span", { className: `mds-icon__${m}--right`, "aria-hidden": "true" }));
}, F = ({}) => /* @__PURE__ */ e.createElement("p", null, "Play"), R = ({
  open: l = !1,
  onClose: s
}) => {
  const a = g(null);
  let t;
  const n = () => {
    s && s();
  }, d = (m) => {
    m.key === "Escape" && (m.preventDefault(), m.stopImmediatePropagation(), n());
  }, c = (m) => {
    m.target.classList.contains("mds-dialog") && n();
  };
  return p(() => (t = a.current.querySelector("button.mds-close"), t.addEventListener("click", n), a.current.addEventListener("click", c), () => {
    t.removeEventListener("click", n), a.current.removeEventListener("click", c);
  }), []), p(() => {
    if (l === !0) {
      document.addEventListener("keydown", d);
      try {
        a.current.showModal();
      } catch {
      }
    } else
      a.current.close();
    return () => {
      document.removeEventListener("keydown", d);
    };
  }, [l]), /* @__PURE__ */ e.createElement("dialog", { ref: a, role: "dialog", id: "mds-modal", className: "mds-dialog", "aria-labelledby": "xxx", "aria-modal": "true" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal mds-modal--side-panel mds-modal--medium", role: "document" }, /* @__PURE__ */ e.createElement("button", { className: "mds-close" }, /* @__PURE__ */ e.createElement("span", { className: "mds-icon__close", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "mds-sr-only" }, "Fermer la fenêtre de la modale")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__container" }, /* @__PURE__ */ e.createElement("div", { className: "mds-modal__header" }, /* @__PURE__ */ e.createElement("span", { "aria-hidden": "true", className: "mds-icon__calendar-today--left" }), /* @__PURE__ */ e.createElement("h1", { className: "mds-modal__title" }, "Titre")), /* @__PURE__ */ e.createElement("hr", { className: "mds-divider mds-divider--small" }), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__content" }, /* @__PURE__ */ e.createElement("p", { className: "mds-text--3" }, "Zone de contenu libre et éditable en HTML")), /* @__PURE__ */ e.createElement("div", { className: "mds-modal__footer" }, /* @__PURE__ */ e.createElement("div", { className: "mds-btn-group" }, /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--primary" }, "button"), /* @__PURE__ */ e.createElement("button", { className: "mds-btn mds-btn--secondary" }, "button"))))));
}, E = {
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
  component: a,
  align: t = "left",
  underlineColor: n = "",
  framed: d = !1
}) {
  const m = a || x[s], o = s == "underline" && n ? E[s] + "--" + n : E[s];
  return /* @__PURE__ */ e.createElement(m, { className: `${o} ${d ? "mds-framed" : ""}`, style: { textAlign: t } }, d ? /* @__PURE__ */ e.createElement("span", null, l) : l);
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
