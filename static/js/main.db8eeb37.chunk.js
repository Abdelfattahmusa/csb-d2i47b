(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{5:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a(1),l=a.n(c),n=(a(7),a(3)),r=a.n(n),i=a(0);function u(e){return Object(i.jsx)("button",{className:e.className,onClick:function(){return e.onClick(e.value)},children:e.value})}function o(){var e=l.a.useState({current:"0",title:"0",initial:!0,desop:""}),t=Object(s.a)(e,2),a=t[0],c=t[1];function n(e){var t=e;a.initial||(t=a.current+e),c({current:t,title:a.title,initial:!1,desop:a.desop})}function r(e){var t=function(){var e=parseInt(a.title);switch(a.desop){case"+":e+=parseInt(a.current);break;case"*":e*=parseInt(a.current);break;case"-":e-=parseInt(a.current);break;case"/":e/=parseInt(a.current);break;default:e=parseInt(a.current)}return e}();c({current:t.toString(),title:t.toString(),initial:!0,desop:e})}return Object(i.jsxs)("div",{className:"culculetor",children:[Object(i.jsx)("div",{className:"disply",children:a.current}),Object(i.jsx)(u,{className:"start",value:"7",onClick:n}),Object(i.jsx)(u,{className:"start",value:"8",onClick:n}),Object(i.jsx)(u,{className:"start",value:"9",onClick:n}),Object(i.jsx)(u,{className:"oper",value:"/",onClick:r}),Object(i.jsx)(u,{className:"start",value:"4",onClick:n}),Object(i.jsx)(u,{className:"start",value:"5",onClick:n}),Object(i.jsx)(u,{className:"start",value:"6",onClick:n}),Object(i.jsx)(u,{className:"oper",value:"*",onClick:r}),Object(i.jsx)(u,{className:"start",value:"1",onClick:n}),Object(i.jsx)(u,{className:"start",value:"2",onClick:n}),Object(i.jsx)(u,{className:"start",value:"3",onClick:n}),Object(i.jsx)(u,{className:"oper",value:"-",onClick:r}),Object(i.jsx)(u,{className:"start",value:"c",onClick:function(){c({current:"0",title:"0",initial:!0,desop:""})}}),Object(i.jsx)(u,{className:"start",value:"0",onClick:n}),Object(i.jsx)(u,{className:"start",value:"=",onClick:r}),Object(i.jsx)(u,{className:"oper",value:"+",onClick:r})]})}r.a.createRoot(document.getElementById("root")).render(Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(o,{})}))},7:function(e,t,a){}},[[5,1,2]]]);
//# sourceMappingURL=main.db8eeb37.chunk.js.map