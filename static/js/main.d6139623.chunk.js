(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),o=n(4),r=(n(10),n(11),n(2)),i=n.n(r),a=n(1),u=n(0),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){var e=t.arrOfGoods;return Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})},j="alphabet",h="length";var d=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),d=r[0],f=r[1],g=n||d,p=function(t,e){var n=[].concat(l);switch(t){case j:n.sort((function(t,e){return t.localeCompare(e)}));break;case h:n.sort((function(t,e){return t.length-e.length}))}return e&&n.reverse(),n}(n,d);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:i()("button","is-info",{"is-light":n!==j}),onClick:function(){return c(j)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:i()("button","is-success",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:i()("button","is-warning",{"is-light":!d}),onClick:function(){return f(!d)},children:"Reverse"}),g&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),f(!1)},children:"Reset"})]}),Object(u.jsx)(b,{arrOfGoods:p})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d6139623.chunk.js.map