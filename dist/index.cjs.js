"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react");function y({children:n,severity:s="info",title:a,icon:t="info"}){return e.createElement("div",{className:`mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white`},e.createElement("div",{className:"mds-alert__header"},e.createElement("span",{className:`mds-icon mds-icon__${t}`,"aria-hidden":"true"}),a?e.createElement("h2",{className:"mds-sr-only"},a):null),e.createElement("button",{className:"mds-close"},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer l'alerte")),e.createElement("div",{className:"mds-alert__content"},e.createElement("p",null,n)))}function f({label:n,size:s="small",severity:a="neutral",icon:t,color:l}){const r=l?`mds-background-color__${l}`:"";return e.createElement("p",{className:`mds-badge mds-badge--${s} mds-badge--${a} ${r}`},t&&e.createElement("span",{className:`mds-icon__${t}`,"aria-hidden":"true"}),e.createElement("span",null,n))}function $({component:n,children:s,color:a,variant:t="primary",size:l="medium",fullWidth:r=!1,startIcon:c,endIcon:d,disabled:i=!1,reverse:h=!1,href:_,target:u,...b}){const o=n||"button",E=r?"mds-full-width":"",g=h?"mds-btn--reverse":"";t=="primary"&&a=="conversion"?t+="-cta":t=="secondary"&&a=="alert"&&(t+="-alert");let m={};return o=="a"?(m.role="button",m.href=_,m.target=u||"_self",m.tabindex="0"):o=="div"?(m.role="button",m.tabindex="0"):m={...b,opts:m},i&&(o=="a"||o=="div"?m["aria-disabled"]="true":m.disabled="disabled"),e.createElement(o,{...m,className:`mds-btn mds-btn--${t} mds-btn--${l} ${E} ${g}`},c?e.createElement("span",{className:`mds-icon__${c}--left`,"aria-hidden":"true"}):null,s,d?e.createElement("span",{className:`mds-icon__${d}--right`,"aria-hidden":"true"}):null)}function N({title:n="title",icon:s="auto",href:a="#",target:t="_self",role:l}){return e.createElement("div",{className:"mds-card mds-card--compact-v",role:l},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement("p",{className:"mds-card__title"},e.createElement("a",{href:a,className:"mds-card__link",target:t},n))),e.createElement("span",{className:`mds-icon mds-picto__${s}`,"aria-hidden":"true"}))}function C({label:n,active:s=!1,onClick:a}){return e.createElement("li",null,e.createElement("button",{onClick:a,type:"button",className:"mds-chips__item","aria-pressed":`${s}`,"aria-disabled":`${s}`},n))}function v({children:n,reverse:s=!1,size:a="big"}){return e.createElement("div",{className:`mds-chips ${a=="small"?"mds-chips--small":""} ${s==!0?"mds-chips--reverse":""}`},e.createElement("ul",{className:"mds-chips__list"},n))}const x=({title:n="Title",subTitle:s="Content",heroActions:a,image:t})=>e.createElement("div",{className:"mds-hero mds-hero--action"},e.createElement("div",{className:"mds-hero__body"},n,s&&e.createElement("p",{className:"mds-lead"},s),a&&e.createElement("div",{style:{order:3}},a)),e.createElement("div",{className:"mds-hero__img"},e.createElement("img",{src:`${t}`,alt:""}))),k={xsmall:16,small:24,medium:28,large:32,xlarge:40,huge:40,enormous:40,giant:40},M={xsmall:24,small:32,medium:40,large:48,xlarge:64,huge:80,enormous:96,giant:160},T=({children:n="person",color:s,size:a="medium",baseClassName:t="icon"})=>{const l="mds-"+t+"__",r=t=="picto"?"mds-picto--"+M[a]:"mds-icon--"+k[a];return e.createElement("span",{className:` ${l}${n} ${r} ${s?"mds-color__"+s:""} `})},B={body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4"},w=({children:n,variant:s="body2",underline:a=!0,reverse:t=!1,href:l="#",target:r="_self",startIcon:c,endIcon:d})=>{const i=`mds-link ${B[s]} ${a?"":"mds-link--standalone"} ${t?"mds-link--reverse":""}`;return e.createElement("a",{className:i,href:l,target:r},c&&e.createElement("span",{className:`mds-icon__${c}--right`,"aria-hidden":"true"}),n,d&&e.createElement("span",{className:`mds-icon__${d}--right`,"aria-hidden":"true"}))},L=({})=>e.createElement("p",null,"Play"),p={h1:"mds-h1",h2:"mds-h2",h3:"mds-h3",h4:"mds-h4",h5:"mds-h5",h6:"mds-h6",body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4",underline:"mds-underline"},P={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",body4:"p",underline:"span"};function S({children:n,variant:s="body1",component:a,align:t="left",underlineColor:l="",framed:r=!1}){const d=a||P[s],i=s=="underline"&&l?p[s]+"--"+l:p[s];return e.createElement(d,{className:`${i} ${r?"mds-framed":""}`,style:{textAlign:t}},r?e.createElement("span",null,n):n)}exports.Alert=y;exports.Badge=f;exports.Button=$;exports.CardCompactV=N;exports.ChipsItem=C;exports.ChipsList=v;exports.Hero=x;exports.Icon=T;exports.Link=w;exports.Play=L;exports.Typography=S;
//# sourceMappingURL=index.cjs.js.map
