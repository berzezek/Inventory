(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{120:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(25),i=c.n(r),o=(c(89),c(26)),s=c(27),j=c(44),d=c(41),b=(c(90),c(91),c(129)),h=c(126),l=c(83),u=c(130),O=c(128),f=c(82),x=c(78),p=c(6),v=c(28),m=c.n(v),y=c(42),g=c(127);var w=c(1);function E(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){a(e.data)}))}),[]),Object(w.jsx)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:c.map((function(e){return Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(y.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)}))})}function S(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){a(e.data)}))}),[]),Object(w.jsx)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:c.map((function(e){return Object(w.jsx)(g.a.Item,{children:Object(w.jsxs)(y.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)}))})}var C=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(w.jsx)(b.a,{bg:"light",expand:!1,children:Object(w.jsxs)(h.a,{fluid:!0,children:[Object(w.jsx)(b.a.Brand,{href:"#",children:"Ateca hotel suites"}),Object(w.jsx)(b.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(w.jsxs)(b.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(w.jsx)(l.a.Header,{closeButton:!0,children:Object(w.jsx)(l.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(w.jsxs)(l.a.Body,{children:[Object(w.jsxs)(u.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(w.jsx)(u.a.Link,{href:"#action1",children:"Home"}),Object(w.jsx)(S,{}),Object(w.jsx)(E,{})]}),Object(w.jsxs)(O.a,{className:"d-flex",children:[Object(w.jsx)(f.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(w.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),c}(a.a.Component),T=C,N=c(8);var k=function(e){var t=e.match,c=Object(n.useState)({}),a=Object(p.a)(c,2),r=a[0],i=a[1],o=t.params.id;return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/".concat(o)}).then((function(e){i(e.data)}))}),[o]),Object(w.jsxs)("div",{children:["Category ",r.id,Object(w.jsx)("p",{children:r.category_title})]})};var B=function(e){var t=e.match,c=Object(n.useState)({}),a=Object(p.a)(c,2),r=a[0],i=a[1],o=t.params.id;return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/".concat(o)}).then((function(e){i(e.data)}))}),[o]),Object(w.jsxs)("div",{children:["Owner ",r.id,Object(w.jsxs)("p",{children:[r.surname," ",r.name[0]]})]})},D=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(y.a,{children:[Object(w.jsx)(T,{}),Object(w.jsx)(N.c,{children:Object(w.jsx)(N.a,{path:"/owner/:id",exact:!0,component:B})}),Object(w.jsx)(N.c,{children:Object(w.jsx)(N.a,{path:"/category/:id",exact:!0,component:k})})]})})}}]),c}(a.a.Component),I=D,L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(I,{})}),document.getElementById("root")),L()},89:function(e,t,c){},90:function(e,t,c){}},[[120,1,2]]]);
//# sourceMappingURL=main.c2c8cb04.chunk.js.map