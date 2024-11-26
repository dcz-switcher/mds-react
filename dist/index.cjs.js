"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react");function f({children:a,severity:s="info",title:t,icon:n="info"}){return e.createElement("div",{className:`mds-alert mds-alert--basic mds-alert-type--${s} mds-border-4--color-white`},e.createElement("div",{className:"mds-alert__header"},e.createElement("span",{className:`mds-icon mds-icon__${n}`,"aria-hidden":"true"}),t?e.createElement("h2",{className:"mds-sr-only"},t):null),e.createElement("button",{className:"mds-close"},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer l'alerte")),e.createElement("div",{className:"mds-alert__content"},e.createElement("p",null,a)))}function $({label:a,size:s="small",severity:t="neutral",icon:n,color:l}){const d=l?`mds-background-color__${l}`:"";return e.createElement("p",{className:`mds-badge mds-badge--${s} mds-badge--${t} ${d}`},n&&e.createElement("span",{className:`mds-icon__${n}`,"aria-hidden":"true"}),e.createElement("span",null,a))}function g({component:a,children:s,variant:t="primary",size:n="medium",fullWidth:l=!1,startIcon:d,endIcon:r,disabled:c=!1,reverse:i=!1,href:h,target:u,..._}){const o=a||"button",b=l?"mds-full-width":"",E=i?"mds-btn--reverse":"";let m={};return o=="a"?(m.role="button",m.href=h,m.target=u||"_self",m.tabindex="0"):o=="div"?(m.role="button",m.tabindex="0"):m={..._,opts:m},c&&(o=="a"||o=="div"?m["aria-disabled"]="true":m.disabled="disabled"),e.createElement(o,{...m,className:`mds-btn mds-btn--${t} mds-btn--${n} ${b} ${E}`},d?e.createElement("span",{className:`mds-icon__${d}--left`,"aria-hidden":"true"}):null,s,r?e.createElement("span",{className:`mds-icon__${r}--right`,"aria-hidden":"true"}):null)}function y({title:a="title",icon:s="auto",href:t="#",target:n="_self",role:l}){return e.createElement("div",{className:"mds-card mds-card--compact-v",role:l},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement("p",{className:"mds-card__title"},e.createElement("a",{href:t,className:"mds-card__link",target:n},a))),e.createElement("span",{className:`mds-icon mds-picto__${s}`,"aria-hidden":"true"}))}function N({label:a,active:s=!1,onClick:t}){return e.createElement("li",null,e.createElement("button",{onClick:t,type:"button",className:"mds-chips__item","aria-pressed":`${s}`,"aria-disabled":`${s}`},a))}function C({children:a,reverse:s=!1,size:t="big"}){return e.createElement("div",{className:`mds-chips ${t=="small"?"mds-chips--small":""} ${s==!0?"mds-chips--reverse":""}`},e.createElement("ul",{className:"mds-chips__list"},a))}const v={small:16,medium:24,large:28,xlarge:32,huge:40},x=({children:a="person",color:s,size:t="medium",baseClassName:n="icon"})=>{const l="mds-"+n+"__";return e.createElement("span",{className:`${l}${a} mds-icon--${v[t]} ${s?"mds-color__"+s:""} `})},k={body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4"},T=({children:a,variant:s="body2",underline:t=!0,reverse:n=!1,href:l="#",target:d="_self",startIcon:r,endIcon:c})=>{const i=`mds-link ${k[s]} ${t?"":"mds-link--standalone"} ${n?"mds-link--reverse":""}`;return e.createElement("a",{className:i,href:l,target:d},r&&e.createElement("span",{className:`mds-icon__${r}--right`,"aria-hidden":"true"}),a,c&&e.createElement("span",{className:`mds-icon__${c}--right`,"aria-hidden":"true"}))},B=({})=>e.createElement("p",null,"Play"),p={h1:"mds-h1",h2:"mds-h2",h3:"mds-h3",h4:"mds-h4",h5:"mds-h5",h6:"mds-h6",body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4",underline:"mds-underline"},M={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",body4:"p",underline:"span"};function w({children:a,variant:s="body1",component:t,align:n="left",underlineColor:l="",framed:d=!1}){const c=t||M[s],i=s=="underline"&&l?p[s]+"--"+l:p[s];return e.createElement(c,{className:`${i} ${d?"mds-framed":""}`,style:{textAlign:n}},d?e.createElement("span",null,a):a)}exports.Alert=f;exports.Badge=$;exports.Button=g;exports.CardCompactV=y;exports.ChipsItem=N;exports.ChipsList=C;exports.Icon=x;exports.Link=T;exports.Play=B;exports.Typography=w;
//# sourceMappingURL=index.cjs.js.map
