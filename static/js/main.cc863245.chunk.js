(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),i=a.n(r),s=(a(89),a(26)),o=a(27),j=a(44),b=a(42),d=(a(90),a(91),a(129)),l=a(126),h=a(83),u=a(130),f=a(128),O=a(82),x=a(78),v=a(6),p=a(40),m=a.n(p),y=a(35),g=a(127);var w=a(1);function C(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(w.jsx)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:a.map((function(e){return Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(y.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)}))})}function S(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(w.jsx)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:a.map((function(e){return Object(w.jsx)(g.a.Item,{children:Object(w.jsxs)(y.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)}))})}var E=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(w.jsx)(d.a,{bg:"light",expand:!1,children:Object(w.jsxs)(l.a,{fluid:!0,children:[Object(w.jsx)(d.a.Brand,{href:"#",children:"Ateca hotel suites"}),Object(w.jsx)(d.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(w.jsxs)(d.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(w.jsx)(h.a.Header,{closeButton:!0,children:Object(w.jsx)(h.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(w.jsxs)(h.a.Body,{children:[Object(w.jsxs)(u.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(w.jsx)(u.a.Link,{href:"#action1",children:"Home"}),Object(w.jsxs)(y.a,{children:[Object(w.jsx)(S,{}),Object(w.jsx)(C,{})]})]}),Object(w.jsxs)(f.a,{className:"d-flex",children:[Object(w.jsx)(O.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(w.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),a}(c.a.Component),N=E,T=a(8);function k(e){var t=e.match,a=Object(n.useState)({}),c=Object(v.a)(a,2),r=c[0],i=c[1],s=t.params.id;return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(s)}).then((function(e){i(e.data)}),[s])})),Object(w.jsxs)("div",{children:["Category ",r.id,Object(w.jsx)("p",{children:r.title})]})}var B=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{}),Object(w.jsx)("br",{}),Object(w.jsx)(T.c,{children:Object(w.jsx)(T.a,{path:"category/:id",exact:!0,content:k})})]})}}]),a}(c.a.Component),D=B,I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),I()},89:function(e,t,a){},90:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.cc863245.chunk.js.map