"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),L=({children:t,className:a})=>e.createElement("div",{className:`mds-accordion--standalone ${a}`},t),w=({id:t,title:a="Item title",children:s,defaultExpanded:l=!1,onChange:n,expanded:r=l,expandIcon:m="expand-more",className:c})=>{const[_,d]=e.useState(0),[i,o]=e.useState(r),u=e.useRef(null),b=()=>u&&u.current?u.current.querySelector(".mds-accordion__body").offsetHeight:0,h=()=>{o(!i),n&&t&&n(t)};return e.useEffect(()=>(d(i?b():0),()=>{}),[i]),e.useEffect(()=>(o(r),()=>{}),[r]),e.createElement("div",{ref:u,id:t,className:`mds-accordion__item ${c}`},e.createElement("h2",{className:"mds-accordion__header"},e.createElement("button",{type:"button","aria-controls":"collapse--xx",onClick:h,className:`mds-collapse mds-collapse__label ${i?"active":""}`,"aria-expanded":i},a,e.createElement("span",{className:`mds-icon__${m}`,"aria-hidden":"true"}))),e.createElement("div",{id:"collapse--xx",className:`mds-collapse__content ${i?"active":""}`,style:{maxHeight:_}},e.createElement("div",{className:"mds-accordion__body"},s)))};function M({children:t,severity:a="info",title:s,icon:l="info",onClose:n,className:r}){return e.createElement("div",{className:`mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}`},e.createElement("div",{className:"mds-alert__header"},e.createElement("span",{className:`mds-icon mds-icon__${l}`,"aria-hidden":"true"}),s?e.createElement("h2",{className:"mds-sr-only"},s):null),n&&e.createElement("button",{className:"mds-close",onClick:n},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer l'alerte")),e.createElement("div",{className:"mds-alert__content"},e.createElement("p",null,t)))}function S({label:t,size:a="small",severity:s="neutral",icon:l,color:n,className:r}){const m=n?`mds-background-color__${n}`:"";return e.createElement("p",{className:`mds-badge mds-badge--${a} mds-badge--${s} ${m} ${r}`},l&&e.createElement("span",{className:`mds-icon__${l}`,"aria-hidden":"true"}),e.createElement("span",null,t))}const T=({children:t,className:a,...s})=>e.createElement("div",{className:a,...s},t),P={body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4"},y={link:"color-use--9",primary:"color-macif--1",text:"color-grey--80"},H=({children:t,variant:a="body2",underline:s=!0,reverse:l=!1,startIcon:n,endIcon:r,color:m="link",className:c,..._})=>{const d=`mds-link ${P[a]} ${s?"":"mds-link--standalone"} ${l?"mds-link--reverse":"mds-color__"+y[m]} ${c}`;return e.createElement("a",{className:d,..._},n&&e.createElement("span",{className:`mds-icon__${n}--right`,"aria-hidden":"true"}),t,r&&e.createElement("span",{className:`mds-icon__${r}--right`,"aria-hidden":"true"}))},B=({children:t,color:a="link",reverse:s=!1,className:l})=>{const n=s?"color-white":y[a];return e.createElement("nav",{className:`mds-breadcrumbs ${l}`,role:"navigation","aria-labelledby":"xx"},e.createElement("ul",null,e.Children.map(t,r=>e.createElement("li",{className:`mds-color__${n}`},r))))};function F({component:t,children:a,color:s,variant:l="primary",size:n="medium",fullWidth:r=!1,startIcon:m,endIcon:c,disabled:_=!1,reverse:d=!1,href:i,target:o,className:u,...b}){const p=t||"button",N=r?"mds-full-width":"",I=d?"mds-btn--reverse":"";l=="primary"&&s=="conversion"?l+="-cta":l=="secondary"&&s=="alert"&&(l+="-alert");let E={};return p=="a"?(E.role="button",E.href=i,E.target=o||"_self",E.tabIndex="0"):p=="div"?(E.role="button",E.tabIndex="0"):E={...b,opts:E},_&&(p=="a"||p=="div"?E["aria-disabled"]="true":E.disabled="disabled"),e.createElement(p,{...E,className:`mds-btn mds-btn--${l} mds-btn--${n} ${N} ${I} ${u}`},m?e.createElement("span",{className:`mds-icon__${m}--left`,"aria-hidden":"true"}):null,a,c?e.createElement("span",{className:`mds-icon__${c}--right`,"aria-hidden":"true"}):null)}const A=({title:t,subtitle:a,children:s,color:l="color-grey--5",icon:n,className:r})=>e.createElement("div",{className:`mds-callout mds-background-color__${l} ${r}`},n&&e.createElement("span",{"aria-hidden":"true",className:`mds-picto__${n} mds-callout__picto`}),e.createElement("h2",{className:"mds-callout__title"},t,a&&e.createElement("span",{className:"mds-callout__subtitle"},a)),s),q=({children:t})=>e.createElement(e.Fragment,null,t),z=({children:t,className:a})=>e.createElement("div",{className:`mds-callout__desc ${a}`},t),g={h1:"mds-h1",h2:"mds-h2",h3:"mds-h3",h4:"mds-h4",h5:"mds-h5",h6:"mds-h6",body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4",underline:"mds-underline"},D={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",body4:"p",underline:"span"},R={primary:"color-macif--1",text:""};function f({children:t,variant:a="body2",component:s,align:l="left",underlineColor:n="",framed:r=!1,color:m,className:c,..._}){const i=s||D[a],o=a=="underline"&&n?g[a]+"--"+n:g[a],u=!r&&a.substring(0,1)!="h"&&m?"mds-color__"+R[m]:"";return e.createElement(i,{className:`${o} ${r?"mds-framed":""} ${u} ${c}`,style:{textAlign:l},..._},r?e.createElement("span",null,t):t)}const V={basic1:"mds-card--basic-1 mds-card--default",basic2:"mds-card--basic-2 mds-card--default",compactV:"mds-card--compact-v",compactH:"mds-card--compact-h",highlight:"mds-card--highlight",modulable:"mds-card--modulable mds-card--default"},$=({variant:t="basic1",title:a,titleLevel:s="h3",subTitle:l,cardMedia:n,cardHeader:r,children:m,className:c,..._})=>{const d="mds-card "+V[t];return e.createElement("div",{className:`${d} ${c}`},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement(f,{className:"mds-card__title",variant:"h3",component:s},e.createElement("a",{className:"mds-card__link",..._},a)),l?e.createElement("p",{className:"mds-card__desc"},l):"",t=="modulable"?m:""),t=="modulable"&&r?r:"",n)};function O({title:t="title",icon:a="auto",href:s="#",target:l="_self",role:n,className:r}){return e.createElement("div",{className:`mds-card mds-card--compact-v ${r}`,role:n},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement("p",{className:"mds-card__title"},e.createElement("a",{href:s,className:"mds-card__link",target:l},t))),e.createElement("span",{className:`mds-icon mds-picto__${a}`,"aria-hidden":"true"}))}function j({label:t,active:a=!1,onClick:s,className:l}){return e.createElement("li",{className:l},e.createElement("button",{onClick:s,type:"button",className:"mds-chips__item","aria-pressed":`${a}`,"aria-disabled":`${a}`},t))}function K({children:t,reverse:a=!1,size:s="big",className:l}){return e.createElement("div",{className:`mds-chips ${s=="small"?"mds-chips--small":""} ${a==!0?"mds-chips--reverse":""} ${l} `},e.createElement("ul",{className:"mds-chips__list"},t))}const W={thin:"basic",heavy:"module"},C=({component:t="hr",variant:a="thin",reverse:s=!1,className:l,...n})=>{const r=t;return e.createElement(r,{className:`mds-divider mds-divider--${W[a]} ${s?"mds-divider--reverse":""} ${l} `,"aria-hidden":"true",...n})},G=({upTitle:t,title:a="Title",subTitle:s="Content",heroActions:l,image:n,className:r})=>e.createElement("div",{className:`mds-hero mds-hero--action ${r}`},e.createElement("div",{className:"mds-hero__body"},a,t&&e.createElement("div",{className:"mds-supertitle"},t),s&&e.createElement("p",{className:"mds-lead"},s),l&&e.createElement("div",{style:{order:3}},l)),e.createElement("div",{className:"mds-hero__img"},e.createElement("img",{src:`${n}`,alt:""}))),J={xsmall:16,small:24,medium:28,large:32,xlarge:40,huge:40,enormous:40,giant:40},Q={xsmall:24,small:32,medium:40,large:48,xlarge:64,huge:80,enormous:96,giant:160},x=({children:t="person",color:a,size:s="medium",baseClassName:l="icon",className:n})=>{const r="mds-"+l+"__",m=l=="picto"?"mds-picto--"+Q[s]:"mds-icon--"+J[s];return e.createElement("span",{className:` ${r}${t} ${m} ${a?"mds-color__"+a:""} ${n} `})},U=({icon:t,label:a,reverse:s=!1,size:l="medium",variant:n="primary",className:r,...m})=>e.createElement("button",{className:`mds-btn mds-btn--icon-only mds-btn--${n} mds-btn--${l} ${s?"mds-btn--reverse":""} ${r} `,...m},e.createElement("span",{className:"mds-sr-only"},a),e.createElement("span",{className:`mds-icon__${t}`,"aria-hidden":"true"})),X=({children:t,secondaryAction:a,className:s})=>e.createElement("li",{className:`mds-action-list__item mds-side-padding ${s}`},e.createElement("div",{className:"mds-action-list__item-content"},t),a?e.createElement("span",{className:"mds-action-list__item-action","aria-hidden":"true"},a):""),Y=({children:t,className:a})=>e.createElement("span",{className:`mds-action-list__item-icon ${a}`,"aria-hidden":"true"},t),Z=({headline:t,primary:a,secondary:s,className:l})=>e.createElement("div",{className:`mds-action-list__item-container-content ${l}`},e.createElement("div",{className:"mds-action-list__item-text-content"},t?e.createElement("span",{className:"mds-action-list__item-headline"},t):"",a?e.createElement("span",{className:"mds-action-list__item-title"},e.createElement("a",{className:"mds-action-list__item-link",href:"#"},a)):"",s?e.createElement("span",{className:"mds-action-list__item-desc"},s):"")),ee=({children:t,className:a})=>e.createElement("div",{role:"group",className:`mds-action-list ${a}`},e.createElement("ul",{className:"mds-action-list--default"},t)),ae=({children:t,className:a})=>e.createElement("div",{className:`}mds-dropdown__item ${a}`},t),te={tl:"mds-dropdown-position--top-left",tr:"mds-dropdown-position--top-right",bl:"mds-dropdown-position--bottom-left",br:"mds-dropdown-position--bottom-right"},se=({anchorEl:t,anchorOrigin:a="bl",children:s,className:l})=>{const n=te[a];return e.createElement("div",{className:`mds-dropdown__layout ${n} ${l}`},t,e.createElement("div",{className:"mds-dropdown__container"},e.createElement("div",{className:"mds-dropdown mds-dropdown__handleClick"},s)))},le=({})=>e.createElement("p",null,"Play"),k=({id:t,title:a,icon:s,visuallyHidden:l=!1,className:n})=>e.createElement("div",{className:` ${l?"mds-sr-only":""} ${n}`},e.createElement("div",{className:"mds-modal__header"},s&&e.createElement("span",{"aria-hidden":"true",className:`mds-icon__${s}--left`}),e.createElement("h1",{id:t,className:"mds-modal__title"},a)),e.createElement(C,null)),ne={small:"small",medium:"medium",large:"big"},re=({children:t,open:a=!1,onClose:s,size:l="medium",title:n,icon:r,visuallyHideTitle:m=!1,showCloseButton:c=!1,className:_})=>{const d=e.useRef(null),i=e.useId();let o;const u=()=>{s&&s()},b=p=>{p.key==="Escape"&&(p.preventDefault(),p.stopImmediatePropagation(),u())},h=p=>{p.target.classList.contains("mds-dialog")&&u()};return e.useEffect(()=>(c&&(o=d.current.querySelector("button.mds-close"),o.addEventListener("click",u)),d.current.addEventListener("click",h),()=>{c&&o.removeEventListener("click",u);try{d.current.removeEventListener("click",h)}catch{}}),[]),e.useEffect(()=>(a===!0?(document.addEventListener("keydown",b),d.current.showModal()):d.current.close(),()=>{document.removeEventListener("keydown",b)}),[a]),e.createElement("dialog",{ref:d,role:"dialog",id:"mds-modal",className:`mds-dialog ${_}`,"aria-modal":"true","aria-labelledby":i},e.createElement("div",{className:`mds-modal mds-modal--side-panel mds-modal--${ne[l]}`,role:"document"},c&&e.createElement("button",{className:"mds-close"},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer la fenêtre de la modale")),e.createElement("div",{className:"mds-modal__container"},e.createElement(k,{title:n,icon:r,visuallyHidden:m,id:i}),t)))},me=({children:t,className:a})=>e.createElement("div",{className:`mds-modal__content ${a}`,role:"document"},t),ce=({children:t,className:a})=>e.createElement("div",{className:`mds-modal__footer ${a}`},t),de=({children:t,title:a="Summary",className:s})=>{const l=e.useId();return e.createElement("nav",{className:`mds-summary ${s}`,role:"navigation","aria-labelledby":l},e.createElement(f,{variant:"h4",component:"p",role:"heading","aria-level":2,id:l},a),e.createElement("ul",{className:"mds-list"},e.Children.map(t,n=>e.createElement("li",null,n))))},ie=({reverse:t=!1,children:a,className:s})=>e.createElement("div",{className:`mds-tabs ${t?"mds-tabs--reverse":""} ${s}`},a),oe=({children:t,ariaLabel:a,className:s})=>e.createElement("nav",{role:"navigation","aria-label":a,className:s},e.createElement("ul",{className:"mds-custom-scrollbar__x"},e.Children.map(t,(l,n)=>n==0?e.createElement("li",{className:"mds-tabs__tab--selected"},e.cloneElement(l,{ariaCurrent:!0})):e.createElement("li",null,l)))),ue=({label:t,icon:a,ariaCurrent:s=!1,className:l})=>{const n=a?e.createElement(x,{baseClassName:"picto",size:"xsmall"},a):"";return e.createElement("button",{className:`mds-tabs__tab ${l}`,type:"button","aria-current":s},n,t)},pe=({children:t,className:a})=>e.createElement("div",{className:`mds-tabs__panels ${a}`},e.Children.map(t,(s,l)=>l==1?e.cloneElement(s,{hidden:!0}):s)),_e=({children:t,hidden:a=!1,className:s})=>e.createElement("div",{className:`mds-tabs__panel ${s}`,hidden:a},t),v={text:"text--basic",password:"text--basic",tel:"phone--basic",email:"mail"},Ee=({endAdornment:t,error:a=!1,errorText:s,fullWidth:l=!1,id:n,label:r,optionalText:m="facultatif",required:c=!1,reverse:_=!1,supportingText:d,startIcon:i,type:o="text",className:u,...b})=>{const h=c?"":e.createElement("span",{className:"mds-label--optional"},"(",m,")"),p=v[o]||v.text,N=e.useId();return e.createElement("div",{className:`mds-input-group ${_?"mds-input-group--reverse":""} ${u}`},e.createElement("label",{htmlFor:n,className:"mds-label"},r," ",h," ",d?e.createElement("span",{className:"mds-label--description"},d):""),e.createElement("div",{className:`mds-input-cell ${l?"mds-full-width":""} ${i?"mds-wrapper--icon-left":""}`},i?e.createElement("span",{"aria-hidden":"true",className:`mds-input__icon mds-icon__${i}`}):"",e.createElement("input",{className:`mds-input mds-input-${p}`,id:n,type:o,"aria-required":c,"aria-invalid":a,"aria-describedby":a&&s?N:"",...b}),o==="password"?e.createElement("button",{type:"button",className:"mds-input__icon"},e.createElement("span",{className:"mds-sr-only"},"Masquer le mot de passe"),e.createElement("span",{className:"mds-icon__visibility","aria-hidden":"true"})):t?e.createElement("span",{"aria-hidden":"true",className:"mds-input__unit"}," ",t," "):""),a&&s?e.createElement("p",{className:"mds-message--error",id:N},e.createElement("span",{className:"mds-icon__error--left","aria-hidden":"true"}),s):"")},be=({id:t,label:a,checked:s=!1,disabled:l=!1,onChange:n,reverse:r=!1,className:m})=>{const c=t||e.useId();return e.createElement("div",{className:`mds-toggle ${r?"mds-toggle--reverse":""} ${m}`},e.createElement("input",{type:"checkbox",onChange:n,role:"switch",id:c,checked:s,disabled:l,"aria-disabled":l}),e.createElement("label",{htmlFor:c},e.createElement("span",{className:"mds-sr-only"},a)))};exports.Accordion=L;exports.AccordionItem=w;exports.Alert=M;exports.Badge=S;exports.Box=T;exports.Breadcrumb=B;exports.Button=F;exports.Callout=A;exports.CalloutAction=q;exports.CalloutContent=z;exports.Card=$;exports.CardCompactV=O;exports.CardHeader=$;exports.CardMedia=$;exports.ChipsItem=j;exports.ChipsList=K;exports.Divider=C;exports.Hero=G;exports.Icon=x;exports.IconButton=U;exports.Link=H;exports.List=ee;exports.ListItem=X;exports.ListItemIcon=Y;exports.ListItemText=Z;exports.Menu=se;exports.MenuItem=ae;exports.Play=le;exports.SidePanel=re;exports.SidePanelContent=me;exports.SidePanelFooter=ce;exports.SidePanelHeader=k;exports.Summary=de;exports.Tab=ue;exports.TabList=oe;exports.TabPanel=_e;exports.TabPanelList=pe;exports.Tabs=ie;exports.TextField=Ee;exports.Toggle=be;exports.Typography=f;
//# sourceMappingURL=index.cjs.js.map
