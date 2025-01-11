'use client';
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),L=({children:a,className:t=""})=>e.createElement("div",{className:`mds-accordion--standalone ${t}`},a),M=({id:a,title:t="Item title",children:s,defaultExpanded:n=!1,onChange:l,expanded:r=n,expandIcon:c="expand-more",className:m=""})=>{const[_,d]=e.useState(0),[o,i]=e.useState(r),u=e.useRef(null),b=()=>u&&u.current?u.current.querySelector(".mds-accordion__body").offsetHeight:0,h=()=>{i(!o),l&&a&&l(a)};return e.useEffect(()=>(d(o?b():0),()=>{}),[o]),e.useEffect(()=>(i(r),()=>{}),[r]),e.createElement("div",{ref:u,id:a,className:`mds-accordion__item ${m}`},e.createElement("h2",{className:"mds-accordion__header"},e.createElement("button",{type:"button","aria-controls":"collapse--xx",onClick:h,className:`mds-collapse mds-collapse__label ${o?"active":""}`,"aria-expanded":o},t,e.createElement("span",{className:`mds-icon__${c}`,"aria-hidden":"true"}))),e.createElement("div",{id:"collapse--xx",className:`mds-collapse__content ${o?"active":""}`,style:{maxHeight:_}},e.createElement("div",{className:"mds-accordion__body"},s)))};function S({children:a,severity:t="info",title:s,icon:n="info",onClose:l,className:r=""}){return e.createElement("div",{className:`mds-alert mds-alert--basic mds-alert-type--${t} mds-border-4--color-white ${r}`},e.createElement("div",{className:"mds-alert__header"},e.createElement("span",{className:`mds-icon mds-icon__${n}`,"aria-hidden":"true"}),s?e.createElement("h2",{className:"mds-sr-only"},s):null),l&&e.createElement("button",{className:"mds-close",onClick:l},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer l'alerte")),e.createElement("div",{className:"mds-alert__content"},e.createElement("p",null,a)))}function T({label:a,size:t="small",severity:s="neutral",icon:n,color:l,className:r=""}){const c=l?`mds-background-color__${l}`:"";return e.createElement("p",{className:`mds-badge mds-badge--${t} mds-badge--${s} ${c} ${r}`},n&&e.createElement("span",{className:`mds-icon__${n}`,"aria-hidden":"true"}),e.createElement("span",null,a))}const H=({children:a,className:t="",...s})=>e.createElement("div",{className:t,...s},a),A={body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4"},v={link:"color-use--9",primary:"color-macif--1",text:"color-grey--80"},q=({children:a,variant:t="body2",underline:s=!0,reverse:n=!1,startIcon:l,endIcon:r,color:c="link",className:m="",..._})=>{const d=`mds-link ${A[t]} ${s?"":"mds-link--standalone"} ${n?"mds-link--reverse":"mds-color__"+v[c]} ${m}`;return e.createElement("a",{className:d,..._},l&&e.createElement("span",{className:`mds-icon__${l}--right`,"aria-hidden":"true"}),a,r&&e.createElement("span",{className:`mds-icon__${r}--right`,"aria-hidden":"true"}))},B=({children:a,color:t="link",reverse:s=!1,className:n=""})=>{const l=s?"color-white":v[t];return e.createElement("nav",{className:`mds-breadcrumbs ${n}`,role:"navigation","aria-labelledby":"xx"},e.createElement("ul",null,e.Children.map(a,r=>e.createElement("li",{className:`mds-color__${l}`},r))))};function F({component:a,children:t,color:s,variant:n="primary",size:l="medium",fullWidth:r=!1,startIcon:c,endIcon:m,disabled:_=!1,reverse:d=!1,href:o,target:i,className:u="",...b}){const p=a||"button",N=r?"mds-full-width":"",I=d?"mds-btn--reverse":"";n=="primary"&&s=="conversion"?n+="-cta":n=="secondary"&&s=="alert"&&(n+="-alert");let E={};return p=="a"?(E.role="button",E.href=o,E.target=i||"_self",E.tabIndex="0"):p=="div"?(E.role="button",E.tabIndex="0"):E={...b,opts:E},_&&(p=="a"||p=="div"?E["aria-disabled"]="true":E.disabled="disabled"),e.createElement(p,{...E,className:`mds-btn mds-btn--${n} mds-btn--${l} ${N} ${I} ${u}`},c?e.createElement("span",{className:`mds-icon__${c}--left`,"aria-hidden":"true"}):null,t,m?e.createElement("span",{className:`mds-icon__${m}--right`,"aria-hidden":"true"}):null)}const z=({title:a,subtitle:t,children:s,color:n="color-grey--5",icon:l,className:r=""})=>e.createElement("div",{className:`mds-callout mds-background-color__${n} ${r}`},l&&e.createElement("span",{"aria-hidden":"true",className:`mds-picto__${l} mds-callout__picto`}),e.createElement("h2",{className:"mds-callout__title"},a,t&&e.createElement("span",{className:"mds-callout__subtitle"},t)),s),D=({children:a})=>e.createElement(e.Fragment,null,a),O=({children:a,className:t=""})=>e.createElement("div",{className:`mds-callout__desc ${t}`},a),y={h1:"mds-h1",h2:"mds-h2",h3:"mds-h3",h4:"mds-h4",h5:"mds-h5",h6:"mds-h6",body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4",underline:"mds-underline"},R={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",body4:"p",underline:"span"},V={primary:"color-macif--1",text:"color-grey--80"},C=e.createContext(!1),Q=()=>e.useContext(C);function f({children:a,variant:t="body2",component:s,align:n="left",underlineColor:l="",framed:r=!1,color:c,className:m="",..._}){const i=Q()?"span":s||R[t],u=t=="underline"&&l?y[t]+"--"+l:y[t],b=!r&&t.substring(0,1)!="h"&&c?"mds-color__"+V[c]:"";return e.createElement(C.Provider,{value:!0},e.createElement(i,{className:`${u} ${r?"mds-framed":""} ${b} ${m}`,style:{textAlign:n},..._},r?e.createElement("span",null,a):a))}const j={basic1:"mds-card--basic-1 mds-card--default",basic2:"mds-card--basic-2 mds-card--default",compactV:"mds-card--compact-v",compactH:"mds-card--compact-h",highlight:"mds-card--highlight",modulable:"mds-card--modulable mds-card--default"},$=({variant:a="basic1",title:t,titleLevel:s="h3",subTitle:n,cardMedia:l,cardHeader:r,children:c,className:m="",..._})=>{const d="mds-card "+j[a];return e.createElement("div",{className:`${d} ${m}`},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement(f,{className:"mds-card__title",variant:"h3",component:s},e.createElement("a",{className:"mds-card__link",..._},t)),n?e.createElement("p",{className:"mds-card__desc"},n):"",a=="modulable"?c:""),a=="modulable"&&r?r:"",l)};function K({title:a="title",icon:t="auto",href:s="#",target:n="_self",role:l,className:r=""}){return e.createElement("div",{className:`mds-card mds-card--compact-v ${r}`,role:l},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement("p",{className:"mds-card__title"},e.createElement("a",{href:s,className:"mds-card__link",target:n},a))),e.createElement("span",{className:`mds-icon mds-picto__${t}`,"aria-hidden":"true"}))}function W({label:a,active:t=!1,onClick:s,className:n=""}){return e.createElement("li",{className:n},e.createElement("button",{onClick:s,type:"button",className:"mds-chips__item","aria-pressed":`${t}`,"aria-disabled":`${t}`},a))}function G({children:a,reverse:t=!1,size:s="big",className:n=""}){return e.createElement("div",{className:`mds-chips ${s=="small"?"mds-chips--small":""} ${t==!0?"mds-chips--reverse":""} ${n} `},e.createElement("ul",{className:"mds-chips__list"},a))}const J={thin:"basic",heavy:"module"},x=({component:a="hr",variant:t="thin",reverse:s=!1,className:n="",...l})=>{const r=a;return e.createElement(r,{className:`mds-divider mds-divider--${J[t]} ${s?"mds-divider--reverse":""} ${n} `,"aria-hidden":"true",...l})},U=({upTitle:a,title:t="Title",subTitle:s="Content",heroActions:n,image:l,className:r=""})=>e.createElement("div",{className:`mds-hero mds-hero--action ${r}`},e.createElement("div",{className:"mds-hero__body"},t,a&&e.createElement("div",{className:"mds-supertitle"},a),s&&e.createElement("p",{className:"mds-lead"},s),n&&e.createElement("div",{style:{order:3}},n)),e.createElement("div",{className:"mds-hero__img"},e.createElement("img",{src:`${l}`,alt:""}))),X={xsmall:16,small:24,medium:28,large:32,xlarge:40,huge:40,enormous:40,giant:40},Y={xsmall:24,small:32,medium:40,large:48,xlarge:64,huge:80,enormous:96,giant:160},w=({children:a="person",color:t,size:s="medium",baseClassName:n="icon",className:l=""})=>{const r="mds-"+n+"__",c=n=="picto"?"mds-picto--"+Y[s]:"mds-icon--"+X[s];return e.createElement("span",{className:` ${r}${a} ${c} ${t?"mds-color__"+t:""} ${l} `})},Z=({icon:a,label:t,reverse:s=!1,size:n="medium",variant:l="primary",className:r="",...c})=>e.createElement("button",{className:`mds-btn mds-btn--icon-only mds-btn--${l} mds-btn--${n} ${s?"mds-btn--reverse":""} ${r} `,...c},e.createElement("span",{className:"mds-sr-only"},t),e.createElement("span",{className:`mds-icon__${a}`,"aria-hidden":"true"})),ee=({children:a,secondaryAction:t,className:s="",trailingText:n})=>e.createElement("li",{className:`mds-action-list__item mds-side-padding ${s}`},e.createElement("div",{className:"mds-action-list__item-content"},a),n?e.createElement("span",{className:"mds-action-list__item-value"},n):"",t?e.createElement("span",{className:"mds-action-list__item-action","aria-hidden":"true"},t):""),te=({children:a,className:t=""})=>e.createElement("span",{className:`mds-action-list__item-icon ${t}`,"aria-hidden":"true"},a),ae=({headline:a,title:t,supportingText:s,className:n="",href:l})=>e.createElement("div",{className:`mds-action-list__item-container-content ${n}`},e.createElement("div",{className:"mds-action-list__item-text-content"},a?e.createElement("span",{className:"mds-action-list__item-headline"},a):"",t?l?e.createElement("span",{className:"mds-action-list__item-title"},e.createElement("a",{className:"mds-action-list__item-link",href:l},t)):e.createElement("span",{className:"mds-action-list__item-title"},t):"",s?e.createElement("span",{className:"mds-action-list__item-desc"},s):"")),se=({children:a,className:t="",boxed:s=!1})=>{const n=s?"mds-action-list--box":"mds-action-list--default";return e.createElement("div",{role:"group",className:`mds-action-list ${t}`},e.createElement("ul",{className:n},a))},ne=({children:a,className:t=""})=>e.createElement("div",{className:`}mds-dropdown__item ${t}`},a),le={tl:"mds-dropdown-position--top-left",tr:"mds-dropdown-position--top-right",bl:"mds-dropdown-position--bottom-left",br:"mds-dropdown-position--bottom-right"},re=({anchorEl:a,anchorOrigin:t="bl",children:s,className:n=""})=>{const l=le[t];return e.createElement("div",{className:`mds-dropdown__layout ${l} ${n}`},a,e.createElement("div",{className:"mds-dropdown__container"},e.createElement("div",{className:"mds-dropdown mds-dropdown__handleClick"},s)))},k=e.createContext(!1),ce=()=>e.useContext(k),me=({children:a})=>{if(ce())throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");return e.createElement(k.Provider,{value:!0},e.createElement("p",null,a))},de=({autor:a,avatar:t,children:s,className:n,reverse:l=!1})=>{const r=l?"mds-quote mds-quote--reverse":"mds-quote";return e.createElement("blockquote",{className:`${r} ${n}`},e.createElement("p",{className:"mds-quote__text"},s),a?e.createElement("p",{className:"mds-quote__legendary"},t?e.createElement("img",{alt:"",src:t,"aria-hidden":"true"}):"",a):"")},oe=({children:a,labelClosed:t="Afficher plus",labelOpened:s="Afficher moins"})=>e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:"mds-show-more__btn mds-text--2 mds-collapse"},e.createElement("span",{className:"mds-visible"},t),e.createElement("span",{className:"mds-hidden"},s),e.createElement("span",{className:"mds-icon__expand-more","aria-hidden":"true"})),e.createElement("div",{className:"mds-collapse__content"},a)),P=({id:a,title:t,icon:s,visuallyHidden:n=!1,className:l=""})=>e.createElement("div",{className:` ${n?"mds-sr-only":""} ${l}`},e.createElement("div",{className:"mds-modal__header"},s&&e.createElement("span",{"aria-hidden":"true",className:`mds-icon__${s}--left`}),e.createElement("h1",{id:a,className:"mds-modal__title"},t)),e.createElement(x,null)),ie={small:"small",medium:"medium",large:"big"},ue=({children:a,open:t=!1,onClose:s,size:n="medium",title:l,icon:r,visuallyHideTitle:c=!1,showCloseButton:m=!1,className:_=""})=>{const d=e.useRef(null),o=e.useId();let i;const u=()=>{s&&(s(),document.body.style.overflow="scroll")},b=p=>{p.key==="Escape"&&(p.preventDefault(),p.stopImmediatePropagation(),u())},h=p=>{p.target.classList.contains("mds-dialog")&&u()};return e.useEffect(()=>(m&&(i=d.current.querySelector("button.mds-close"),i.addEventListener("click",u)),d.current.addEventListener("click",h),()=>{m&&i.removeEventListener("click",u);try{d.current.removeEventListener("click",h)}catch{}}),[]),e.useEffect(()=>(t===!0?(document.addEventListener("keydown",b),document.body.style.overflow="hidden",d.current.showModal()):d.current.close(),()=>{document.removeEventListener("keydown",b),document.body.style.overflow="scroll"}),[t]),e.createElement("dialog",{ref:d,role:"dialog",id:"mds-modal",className:`mds-dialog ${_}`,"aria-modal":"true","aria-labelledby":o},e.createElement("div",{className:`mds-modal mds-modal--side-panel mds-modal--${ie[n]}`,role:"document"},m&&e.createElement("button",{className:"mds-close"},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer la fenêtre de la modale")),e.createElement("div",{className:"mds-modal__container"},e.createElement(P,{title:l,icon:r,visuallyHidden:c,id:o}),a)))},pe=({children:a,className:t=""})=>e.createElement("div",{className:`mds-modal__content ${t}`,role:"document"},a),_e=({children:a,className:t=""})=>e.createElement("div",{className:`mds-modal__footer ${t}`},a),Ee=({children:a,title:t="Summary",className:s=""})=>{const n=e.useId();return e.createElement("nav",{className:`mds-summary ${s}`,role:"navigation","aria-labelledby":n},e.createElement(f,{variant:"h4",component:"p",role:"heading","aria-level":2,id:n},t),e.createElement("ul",{className:"mds-list"},e.Children.map(a,l=>e.createElement("li",null,l))))},be=({reverse:a=!1,children:t,className:s=""})=>e.createElement("div",{className:`mds-tabs ${a?"mds-tabs--reverse":""} ${s}`},t),he=({children:a,ariaLabel:t,className:s=""})=>e.createElement("nav",{role:"navigation","aria-label":t,className:s},e.createElement("ul",{className:"mds-custom-scrollbar__x"},e.Children.map(a,(n,l)=>l==0?e.createElement("li",{className:"mds-tabs__tab--selected"},e.cloneElement(n,{ariaCurrent:!0})):e.createElement("li",null,n)))),Ne=({label:a,icon:t,ariaCurrent:s=!1,className:n=""})=>{const l=t?e.createElement(w,{baseClassName:"picto",size:"xsmall"},t):"";return e.createElement("button",{className:`mds-tabs__tab ${n}`,type:"button","aria-current":s},l,a)},fe=({children:a,className:t=""})=>e.createElement("div",{className:`mds-tabs__panels ${t}`},e.Children.map(a,(s,n)=>n==1?e.cloneElement(s,{hidden:!0}):s)),$e=({children:a,hidden:t=!1,className:s=""})=>e.createElement("div",{className:`mds-tabs__panel ${s}`,hidden:t},a),g={text:"text--basic",password:"text--basic",tel:"phone--basic",email:"mail"},ye=({endAdornment:a,error:t=!1,errorText:s,fullWidth:n=!1,id:l,label:r,optionalText:c="facultatif",required:m=!1,reverse:_=!1,supportingText:d,startIcon:o,type:i="text",className:u="",...b})=>{const h=m?"":e.createElement("span",{className:"mds-label--optional"},"(",c,")"),p=g[i]||g.text,N=e.useId();return e.createElement("div",{className:`mds-input-group ${_?"mds-input-group--reverse":""} ${u}`},e.createElement("label",{htmlFor:l,className:"mds-label"},r," ",h," ",d?e.createElement("span",{className:"mds-label--description"},d):""),e.createElement("div",{className:`mds-input-cell ${n?"mds-full-width":""} ${o?"mds-wrapper--icon-left":""}`},o?e.createElement("span",{"aria-hidden":"true",className:`mds-input__icon mds-icon__${o}`}):"",e.createElement("input",{className:`mds-input mds-input-${p}`,id:l,type:i,"aria-required":m,"aria-invalid":t,"aria-describedby":t&&s?N:"",...b}),i==="password"?e.createElement("button",{type:"button",className:"mds-input__icon"},e.createElement("span",{className:"mds-sr-only"},"Masquer le mot de passe"),e.createElement("span",{className:"mds-icon__visibility","aria-hidden":"true"})):a?e.createElement("span",{"aria-hidden":"true",className:"mds-input__unit"}," ",a," "):""),t&&s?e.createElement("p",{className:"mds-message--error",id:N},e.createElement("span",{className:"mds-icon__error--left","aria-hidden":"true"}),s):"")},ge=({id:a,label:t,checked:s=!1,disabled:n=!1,onChange:l,reverse:r=!1,className:c=""})=>{const m=a||e.useId();return e.createElement("div",{className:`mds-toggle ${r?"mds-toggle--reverse":""} ${c}`},e.createElement("input",{type:"checkbox",onChange:l,role:"switch",id:m,checked:s,disabled:n,"aria-disabled":n}),e.createElement("label",{htmlFor:m},e.createElement("span",{className:"mds-sr-only"},t)))};exports.Accordion=L;exports.AccordionItem=M;exports.Alert=S;exports.Badge=T;exports.Box=H;exports.Breadcrumb=B;exports.Button=F;exports.Callout=z;exports.CalloutAction=D;exports.CalloutContent=O;exports.Card=$;exports.CardCompactV=K;exports.CardHeader=$;exports.CardMedia=$;exports.ChipsItem=W;exports.ChipsList=G;exports.Divider=x;exports.Hero=U;exports.Icon=w;exports.IconButton=Z;exports.Link=q;exports.List=se;exports.ListItem=ee;exports.ListItemIcon=te;exports.ListItemText=ae;exports.Menu=re;exports.MenuItem=ne;exports.Play=me;exports.Quote=de;exports.ShowMore=oe;exports.SidePanel=ue;exports.SidePanelContent=pe;exports.SidePanelFooter=_e;exports.SidePanelHeader=P;exports.Summary=Ee;exports.Tab=Ne;exports.TabList=he;exports.TabPanel=$e;exports.TabPanelList=fe;exports.Tabs=be;exports.TextField=ye;exports.Toggle=ge;exports.Typography=f;
//# sourceMappingURL=index.cjs.js.map
