'use client';
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),L=({children:t,className:a=""})=>e.createElement("div",{className:`mds-accordion--standalone ${a}`},t),M=({id:t,title:a="Item title",children:s,defaultExpanded:n=!1,onChange:l,expanded:r=n,expandIcon:m="expand-more",className:d=""})=>{const[_,i]=e.useState(0),[o,u]=e.useState(r),p=e.useRef(null),h=()=>p&&p.current?p.current.querySelector(".mds-accordion__body").offsetHeight:0,N=()=>{u(!o),l&&t&&l(t)};return e.useEffect(()=>(i(o?h():0),()=>{}),[o]),e.useEffect(()=>(u(r),()=>{}),[r]),e.createElement("div",{ref:p,id:t,className:`mds-accordion__item ${d}`},e.createElement("h2",{className:"mds-accordion__header"},e.createElement("button",{type:"button","aria-controls":"collapse--xx",onClick:N,className:`mds-collapse mds-collapse__label ${o?"active":""}`,"aria-expanded":o},a,e.createElement("span",{className:`mds-icon__${m}`,"aria-hidden":"true"}))),e.createElement("div",{id:"collapse--xx",className:`mds-collapse__content ${o?"active":""}`,style:{maxHeight:_}},e.createElement("div",{className:"mds-accordion__body"},s)))};function T({children:t,severity:a="info",title:s,icon:n="info",onClose:l,className:r=""}){return e.createElement("div",{className:`mds-alert mds-alert--basic mds-alert-type--${a} mds-border-4--color-white ${r}`},e.createElement("div",{className:"mds-alert__header"},e.createElement("span",{className:`mds-icon mds-icon__${n}`,"aria-hidden":"true"}),s?e.createElement("h2",{className:"mds-sr-only"},s):null),l&&e.createElement("button",{className:"mds-close",onClick:l},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer l'alerte")),e.createElement("div",{className:"mds-alert__content"},e.createElement("p",null,t)))}function A({label:t,size:a="small",severity:s="neutral",icon:n,color:l,className:r=""}){const m=l?`mds-background-color__${l}`:"";return e.createElement("p",{className:`mds-badge mds-badge--${a} mds-badge--${s} ${m} ${r}`},n&&e.createElement("span",{className:`mds-icon__${n}`,"aria-hidden":"true"}),e.createElement("span",null,t))}const H=({children:t,className:a="",...s})=>e.createElement("div",{className:a,...s},t),F={body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4"},C={link:"color-use--9",primary:"color-macif--1",text:"color-grey--80"},q=({children:t,variant:a="body2",underline:s=!0,reverse:n=!1,startIcon:l,endIcon:r,color:m="link",className:d="",..._})=>{const i=`mds-link ${F[a]} ${s?"":"mds-link--standalone"} ${n?"mds-link--reverse":"mds-color__"+C[m]} ${d}`;return e.createElement("a",{className:i,..._},l&&e.createElement("span",{className:`mds-icon__${l}--right`,"aria-hidden":"true"}),t,r&&e.createElement("span",{className:`mds-icon__${r}--right`,"aria-hidden":"true"}))},B=({children:t,color:a="link",reverse:s=!1,className:n=""})=>{const l=s?"color-white":C[a];return e.createElement("nav",{className:`mds-breadcrumbs ${n}`,role:"navigation","aria-labelledby":"xx"},e.createElement("ul",null,e.Children.map(t,r=>e.createElement("li",{className:`mds-color__${l}`},r))))};function D({component:t,children:a,color:s,variant:n="primary",size:l="medium",fullWidth:r=!1,startIcon:m,endIcon:d,disabled:_=!1,reverse:i=!1,href:o,target:u,className:p="",...h}){const E=t||"button",g=r?"mds-full-width":"",I=i?"mds-btn--reverse":"";n=="primary"&&s=="conversion"?n+="-cta":n=="secondary"&&s=="alert"&&(n+="-alert");let b={};return E=="a"?(b.role="button",b.href=o,b.target=u||"_self",b.tabIndex="0"):E=="div"?(b.role="button",b.tabIndex="0"):b={...h,opts:b},_&&(E=="a"||E=="div"?b["aria-disabled"]="true":b.disabled="disabled"),e.createElement(E,{...b,className:`mds-btn mds-btn--${n} mds-btn--${l} ${g} ${I} ${p}`},m?e.createElement("span",{className:`mds-icon__${m}--left`,"aria-hidden":"true"}):null,a,d?e.createElement("span",{className:`mds-icon__${d}--right`,"aria-hidden":"true"}):null)}const z=({title:t,subtitle:a,children:s,color:n="color-grey--5",icon:l,className:r=""})=>e.createElement("div",{className:`mds-callout mds-background-color__${n} ${r}`},l&&e.createElement("span",{"aria-hidden":"true",className:`mds-picto__${l} mds-callout__picto`}),e.createElement("h2",{className:"mds-callout__title"},t,a&&e.createElement("span",{className:"mds-callout__subtitle"},a)),s),O=({children:t})=>e.createElement(e.Fragment,null,t),R=({children:t,className:a=""})=>e.createElement("div",{className:`mds-callout__desc ${a}`},t),v={h1:"mds-h1",h2:"mds-h2",h3:"mds-h3",h4:"mds-h4",h5:"mds-h5",h6:"mds-h6",body1:"mds-text--1",body2:"mds-text--2",body3:"mds-text--3",body4:"mds-text--4",underline:"mds-underline"},V={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",body4:"p",underline:"span"},Q={primary:"color-macif--1",text:"color-grey--80"},x=e.createContext(!1),j=()=>e.useContext(x);function y({children:t,variant:a="body2",component:s,align:n="left",underlineColor:l="",framed:r=!1,color:m,className:d="",..._}){const u=j()?"span":s||V[a],p=a=="underline"&&l?v[a]+"--"+l:v[a],h=!r&&a.substring(0,1)!="h"&&m?"mds-color__"+Q[m]:"";return e.createElement(x.Provider,{value:!0},e.createElement(u,{className:`${p} ${r?"mds-framed":""} ${h} ${d}`,style:{textAlign:n},..._},r?e.createElement("span",null,t):t))}const K={basic1:"mds-card--basic-1 mds-card--default",basic2:"mds-card--basic-2 mds-card--default",compactV:"mds-card--compact-v",compactH:"mds-card--compact-h",highlight:"mds-card--highlight",modulable:"mds-card--modulable mds-card--default"},f=({variant:t="basic1",title:a,titleLevel:s="h3",subTitle:n,cardMedia:l,cardHeader:r,children:m,className:d="",..._})=>{const i="mds-card "+K[t];return e.createElement("div",{className:`${i} ${d}`},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement(y,{className:"mds-card__title",variant:"h3",component:s},e.createElement("a",{className:"mds-card__link",..._},a)),n?e.createElement("p",{className:"mds-card__desc"},n):"",t=="modulable"?m:""),t=="modulable"&&r?r:"",l)};function W({title:t="title",icon:a="auto",href:s="#",target:n="_self",role:l,className:r=""}){return e.createElement("div",{className:`mds-card mds-card--compact-v ${r}`,role:l},e.createElement("span",{className:"mds-icon__arrow-forward","aria-hidden":"true"}),e.createElement("div",{className:"mds-card__content"},e.createElement("p",{className:"mds-card__title"},e.createElement("a",{href:s,className:"mds-card__link",target:n},t))),e.createElement("span",{className:`mds-icon mds-picto__${a}`,"aria-hidden":"true"}))}function G({label:t,active:a=!1,onClick:s,className:n=""}){return e.createElement("li",{className:n},e.createElement("button",{onClick:s,type:"button",className:"mds-chips__item","aria-pressed":`${a}`,"aria-disabled":`${a}`},t))}function J({children:t,reverse:a=!1,size:s="big",className:n=""}){return e.createElement("div",{className:`mds-chips ${s=="small"?"mds-chips--small":""} ${a==!0?"mds-chips--reverse":""} ${n} `},e.createElement("ul",{className:"mds-chips__list"},t))}const U={thin:"basic",heavy:"module"},k=({component:t="hr",variant:a="thin",reverse:s=!1,className:n="",...l})=>{const r=t;return e.createElement(r,{className:`mds-divider mds-divider--${U[a]} ${s?"mds-divider--reverse":""} ${n} `,"aria-hidden":"true",...l})},X=({upTitle:t,title:a="Title",subTitle:s="Content",heroActions:n,image:l,className:r=""})=>e.createElement("div",{className:`mds-hero mds-hero--action ${r}`},e.createElement("div",{className:"mds-hero__body"},a,t&&e.createElement("div",{className:"mds-supertitle"},t),s&&e.createElement("p",{className:"mds-lead"},s),n&&e.createElement("div",{style:{order:3}},n)),e.createElement("div",{className:"mds-hero__img"},e.createElement("img",{src:`${l}`,alt:""}))),Y={xsmall:16,small:24,medium:28,large:32,xlarge:40,huge:40,enormous:40,giant:40},Z={xsmall:24,small:32,medium:40,large:48,xlarge:64,huge:80,enormous:96,giant:160},P=({children:t="person",color:a,size:s="medium",baseClassName:n="icon",className:l=""})=>{const r="mds-"+n+"__",m=n=="picto"?"mds-picto--"+Z[s]:"mds-icon--"+Y[s];return e.createElement("span",{className:` ${r}${t} ${m} ${a?"mds-color__"+a:""} ${l} `})},ee=({icon:t,label:a,reverse:s=!1,size:n="medium",variant:l="primary",className:r="",...m})=>e.createElement("button",{className:`mds-btn mds-btn--icon-only mds-btn--${l} mds-btn--${n} ${s?"mds-btn--reverse":""} ${r} `,...m},e.createElement("span",{className:"mds-sr-only"},a),e.createElement("span",{className:`mds-icon__${t}`,"aria-hidden":"true"})),te=({children:t,secondaryAction:a,className:s="",trailingText:n})=>e.createElement("li",{className:`mds-action-list__item mds-side-padding ${s}`},e.createElement("div",{className:"mds-action-list__item-content"},t),n?e.createElement("span",{className:"mds-action-list__item-value"},n):"",a?e.createElement("span",{className:"mds-action-list__item-action","aria-hidden":"true"},a):""),ae=({children:t,className:a=""})=>e.createElement("span",{className:`mds-action-list__item-icon ${a}`,"aria-hidden":"true"},t),se=({headline:t,title:a,supportingText:s,className:n="",href:l})=>e.createElement("div",{className:`mds-action-list__item-container-content ${n}`},e.createElement("div",{className:"mds-action-list__item-text-content"},t?e.createElement("span",{className:"mds-action-list__item-headline"},t):"",a?l?e.createElement("span",{className:"mds-action-list__item-title"},e.createElement("a",{className:"mds-action-list__item-link",href:l},a)):e.createElement("span",{className:"mds-action-list__item-title"},a):"",s?e.createElement("span",{className:"mds-action-list__item-desc"},s):"")),ne=({children:t,className:a="",boxed:s=!1})=>{const n=s?"mds-action-list--box":"mds-action-list--default";return e.createElement("div",{role:"group",className:`mds-action-list ${a}`},e.createElement("ul",{className:n},t))},le=({children:t,className:a=""})=>e.createElement("div",{className:`}mds-dropdown__item ${a}`},t),re={tl:"mds-dropdown-position--top-left",tr:"mds-dropdown-position--top-right",bl:"mds-dropdown-position--bottom-left",br:"mds-dropdown-position--bottom-right"},me=({anchorEl:t,anchorOrigin:a="bl",children:s,className:n=""})=>{const l=re[a];return e.createElement("div",{className:`mds-dropdown__layout ${l} ${n}`},t,e.createElement("div",{className:"mds-dropdown__container"},e.createElement("div",{className:"mds-dropdown mds-dropdown__handleClick"},s)))},c=({selected:t=!1,page:a,variant:s="outlined"})=>e.createElement(e.Fragment,null,s==="ellipsis"?e.createElement("li",{className:"mds-pagination__item mds-pagination__dots mds-display--none mds-display-md--flex","aria-hidden":"true"},e.createElement("span",null,"...")):e.createElement("li",{className:"mds-pagination__item"},e.createElement("button",{className:"mds-btn",type:"button","aria-label":`page ${a}`,"aria-current":t},a))),ce=({count:t=1,page:a=1})=>{const s=()=>{let l;return t<8?l=[...Array(t)].map((r,m)=>e.createElement(c,{key:m,page:m.toString(),selected:m===a})):a<=3?l=e.createElement(e.Fragment,null,e.createElement(c,{key:1,page:"1",selected:a===1}),e.createElement(c,{key:2,page:"2",selected:a===2}),e.createElement(c,{key:3,page:"3",selected:a===3}),e.createElement(c,{key:4,page:"4",selected:a===4}),e.createElement(c,{key:5,page:"5",selected:a===5}),e.createElement(c,{variant:"ellipsis"}),e.createElement(c,{key:t,page:t.toString()})):a>t-3?l=e.createElement(e.Fragment,null,e.createElement(c,{key:1,page:"1"}),e.createElement(c,{variant:"ellipsis"}),e.createElement(c,{key:t-4,page:(t-4).toString(),selected:a===t-4}),e.createElement(c,{key:t-3,page:(t-3).toString(),selected:a===t-3}),e.createElement(c,{key:t-2,page:(t-2).toString(),selected:a===t-2}),e.createElement(c,{key:t-1,page:(t-1).toString(),selected:a===t-1}),e.createElement(c,{key:t,page:t.toString(),selected:a===t})):l=e.createElement(e.Fragment,null,e.createElement(c,{key:1,page:"1"}),e.createElement(c,{variant:"ellipsis"}),e.createElement(c,{key:a-1,page:(a-1).toString()}),e.createElement(c,{key:a,page:a.toString(),selected:!0}),e.createElement(c,{key:a+1,page:(a+1).toString()}),e.createElement(c,{variant:"ellipsis"}),e.createElement(c,{key:t,page:t.toString()})),l};return e.createElement("nav",{role:"navigation","aria-label":"page des xxx",className:"mds-pagination"},e.createElement("ul",{className:"mds-pagination__item-list"},e.createElement("li",{className:"mds-pagination__item"},e.createElement("button",{type:"button",className:"mds-btn mds-btn--icon-only mds-pagination__navigation",disabled:!0},e.createElement("span",{className:"mds-icon__chevron-left","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Première page"))),s(),e.createElement("li",{className:"mds-pagination__item"},e.createElement("button",{type:"button",className:"mds-btn mds-btn--icon-only mds-pagination__navigation"},e.createElement("span",{className:"mds-sr-only"},"Dernière page"),e.createElement("span",{className:"mds-icon__chevron-right","aria-hidden":"true"})))))},S=e.createContext(!1),de=()=>e.useContext(S),ie=({children:t})=>{if(de())throw new Error("Invalid DOM error !!! Play cant be nested in a Play parent");return e.createElement(S.Provider,{value:!0},e.createElement("p",null,t))},oe=({autor:t,avatar:a,children:s,className:n="",reverse:l=!1})=>{const r=l?"mds-quote mds-quote--reverse":"mds-quote";return e.createElement("blockquote",{className:`${r} ${n}`},e.createElement("p",{className:"mds-quote__text"},s),t?e.createElement("p",{className:"mds-quote__legendary"},a?e.createElement("img",{alt:"",src:a,"aria-hidden":"true"}):"",t):"")},ue=({children:t,className:a="",labelClosed:s="Afficher plus",labelOpened:n="Afficher moins"})=>e.createElement(e.Fragment,null,e.createElement("button",{type:"button",className:`mds-show-more__btn mds-text--2 mds-collapse ${a}`},e.createElement("span",{className:"mds-visible"},s),e.createElement("span",{className:"mds-hidden"},n),e.createElement("span",{className:"mds-icon__expand-more","aria-hidden":"true"})),e.createElement("div",{className:"mds-collapse__content"},t)),w=({id:t,title:a,icon:s,visuallyHidden:n=!1,className:l=""})=>e.createElement("div",{className:` ${n?"mds-sr-only":""} ${l}`},e.createElement("div",{className:"mds-modal__header"},s&&e.createElement("span",{"aria-hidden":"true",className:`mds-icon__${s}--left`}),e.createElement("h1",{id:t,className:"mds-modal__title"},a)),e.createElement(k,null)),pe={small:"small",medium:"medium",large:"big"},Ee=({children:t,open:a=!1,onClose:s,size:n="medium",title:l,icon:r,visuallyHideTitle:m=!1,showCloseButton:d=!1,className:_=""})=>{const i=e.useRef(null),o=e.useId();let u;const p=()=>{s&&(s(),document.body.style.overflow="scroll")},h=E=>{E.key==="Escape"&&(E.preventDefault(),E.stopImmediatePropagation(),p())},N=E=>{E.target.classList.contains("mds-dialog")&&p()};return e.useEffect(()=>(d&&(u=i.current.querySelector("button.mds-close"),u.addEventListener("click",p)),i.current.addEventListener("click",N),()=>{d&&u.removeEventListener("click",p);try{i.current.removeEventListener("click",N)}catch{}}),[]),e.useEffect(()=>(a===!0?(document.addEventListener("keydown",h),document.body.style.overflow="hidden",i.current.showModal()):i.current.close(),()=>{document.removeEventListener("keydown",h),document.body.style.overflow="scroll"}),[a]),e.createElement("dialog",{ref:i,role:"dialog",id:"mds-modal",className:`mds-dialog ${_}`,"aria-modal":"true","aria-labelledby":o},e.createElement("div",{className:`mds-modal mds-modal--side-panel mds-modal--${pe[n]}`,role:"document"},d&&e.createElement("button",{className:"mds-close"},e.createElement("span",{className:"mds-icon__close","aria-hidden":"true"}),e.createElement("span",{className:"mds-sr-only"},"Fermer la fenêtre de la modale")),e.createElement("div",{className:"mds-modal__container"},e.createElement(w,{title:l,icon:r,visuallyHidden:m,id:o}),t)))},_e=({children:t,className:a=""})=>e.createElement("div",{className:`mds-modal__content ${a}`,role:"document"},t),be=({children:t,className:a=""})=>e.createElement("div",{className:`mds-modal__footer ${a}`},t),he=({children:t,title:a="Summary",className:s=""})=>{const n=e.useId();return e.createElement("nav",{className:`mds-summary ${s}`,role:"navigation","aria-labelledby":n},e.createElement(y,{variant:"h4",component:"p",role:"heading","aria-level":2,id:n},a),e.createElement("ul",{className:"mds-list"},e.Children.map(t,l=>e.createElement("li",null,l))))},Ne=({reverse:t=!1,children:a,className:s=""})=>e.createElement("div",{className:`mds-tabs ${t?"mds-tabs--reverse":""} ${s}`},a),ge=({children:t,ariaLabel:a,className:s=""})=>e.createElement("nav",{role:"navigation","aria-label":a,className:s},e.createElement("ul",{className:"mds-custom-scrollbar__x"},e.Children.map(t,(n,l)=>l==0?e.createElement("li",{className:"mds-tabs__tab--selected"},e.cloneElement(n,{ariaCurrent:!0})):e.createElement("li",null,n)))),ye=({label:t,icon:a,ariaCurrent:s=!1,className:n=""})=>{const l=a?e.createElement(P,{baseClassName:"picto",size:"xsmall"},a):"";return e.createElement("button",{className:`mds-tabs__tab ${n}`,type:"button","aria-current":s},l,t)},fe=({children:t,className:a=""})=>e.createElement("div",{className:`mds-tabs__panels ${a}`},e.Children.map(t,(s,n)=>n==1?e.cloneElement(s,{hidden:!0}):s)),ve=({children:t,hidden:a=!1,className:s=""})=>e.createElement("div",{className:`mds-tabs__panel ${s}`,hidden:a},t),$={text:"text--basic",password:"text--basic",tel:"phone--basic",email:"mail"},$e=({endAdornment:t,error:a=!1,errorText:s,fullWidth:n=!1,id:l,label:r,optionalText:m="facultatif",required:d=!1,reverse:_=!1,supportingText:i,startIcon:o,type:u="text",className:p="",...h})=>{const N=d?"":e.createElement("span",{className:"mds-label--optional"},"(",m,")"),E=$[u]||$.text,g=e.useId();return e.createElement("div",{className:`mds-input-group ${_?"mds-input-group--reverse":""} ${p}`},e.createElement("label",{htmlFor:l,className:"mds-label"},r," ",N," ",i?e.createElement("span",{className:"mds-label--description"},i):""),e.createElement("div",{className:`mds-input-cell ${n?"mds-full-width":""} ${o?"mds-wrapper--icon-left":""}`},o?e.createElement("span",{"aria-hidden":"true",className:`mds-input__icon mds-icon__${o}`}):"",e.createElement("input",{className:`mds-input mds-input-${E}`,id:l,type:u,"aria-required":d,"aria-invalid":a,"aria-describedby":a&&s?g:"",...h}),u==="password"?e.createElement("button",{type:"button",className:"mds-input__icon"},e.createElement("span",{className:"mds-sr-only"},"Masquer le mot de passe"),e.createElement("span",{className:"mds-icon__visibility","aria-hidden":"true"})):t?e.createElement("span",{"aria-hidden":"true",className:"mds-input__unit"}," ",t," "):""),a&&s?e.createElement("p",{className:"mds-message--error",id:g},e.createElement("span",{className:"mds-icon__error--left","aria-hidden":"true"}),s):"")},Ce=({id:t,label:a,checked:s=!1,disabled:n=!1,onChange:l,reverse:r=!1,className:m=""})=>{const d=t||e.useId();return e.createElement("div",{className:`mds-toggle ${r?"mds-toggle--reverse":""} ${m}`},e.createElement("input",{type:"checkbox",onChange:l,role:"switch",id:d,checked:s,disabled:n,"aria-disabled":n}),e.createElement("label",{htmlFor:d},e.createElement("span",{className:"mds-sr-only"},a)))};exports.Accordion=L;exports.AccordionItem=M;exports.Alert=T;exports.Badge=A;exports.Box=H;exports.Breadcrumb=B;exports.Button=D;exports.Callout=z;exports.CalloutAction=O;exports.CalloutContent=R;exports.Card=f;exports.CardCompactV=W;exports.CardHeader=f;exports.CardMedia=f;exports.ChipsItem=G;exports.ChipsList=J;exports.Divider=k;exports.Hero=X;exports.Icon=P;exports.IconButton=ee;exports.Link=q;exports.List=ne;exports.ListItem=te;exports.ListItemIcon=ae;exports.ListItemText=se;exports.Menu=me;exports.MenuItem=le;exports.Pagination=ce;exports.PaginationItem=c;exports.Play=ie;exports.Quote=oe;exports.ShowMore=ue;exports.SidePanel=Ee;exports.SidePanelContent=_e;exports.SidePanelFooter=be;exports.SidePanelHeader=w;exports.Summary=he;exports.Tab=ye;exports.TabList=ge;exports.TabPanel=ve;exports.TabPanelList=fe;exports.Tabs=Ne;exports.TextField=$e;exports.Toggle=Ce;exports.Typography=y;
//# sourceMappingURL=index.cjs.js.map
