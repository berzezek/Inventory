(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),i=n.n(r),o=(n(86),n(23)),s=n(24),j=n(40),b=n(38),d=(n(87),n(88),n(126)),l=n(123),f=n(80),u=n(127),h=n(125),O=n(79),v=n(75),x=n(6),p=n(52),m=n.n(p),y=n(32),g=n(124);var w=n(1);function N(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(w.jsx)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:n.map((function(e){return Object(w.jsx)(g.a.Item,{children:Object(w.jsx)(y.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)}))})}function C(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(w.jsx)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:n.map((function(e){return Object(w.jsx)(g.a.Item,{children:Object(w.jsxs)(y.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)}))})}var S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsx)(d.a,{bg:"light",expand:!1,children:Object(w.jsxs)(l.a,{fluid:!0,children:[Object(w.jsx)(d.a.Brand,{href:"#",children:"Navbar Offcanvas"}),Object(w.jsx)(d.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(w.jsxs)(d.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(w.jsx)(f.a.Header,{closeButton:!0,children:Object(w.jsx)(f.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(w.jsxs)(f.a.Body,{children:[Object(w.jsxs)(u.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(w.jsx)(u.a.Link,{href:"#action1",children:"Home"}),Object(w.jsxs)(y.a,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(N,{})]})]}),Object(w.jsxs)(h.a,{className:"d-flex",children:[Object(w.jsx)(O.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(w.jsx)(v.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),n}(c.a.Component),T=S,k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(T,{})})}}]),n}(c.a.Component),B=k,D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),D()},86:function(e,t,n){},87:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.1302f17f.chunk.js.map