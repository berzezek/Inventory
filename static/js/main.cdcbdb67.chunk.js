(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(26),i=c.n(r),s=(c(93),c(27)),j=c(28),o=c(44),d=c(42),b=(c(94),c(95),c(134)),l=c(131),h=c(87),O=c(135),u=c(133),f=c(85),x=c(81),p=c(6),v=c(24),m=c.n(v),y=c(37),g=c(132);var T=c(1);function w(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){n(e.data)}))}),[]),Object(T.jsxs)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[c.map((function(e){return Object(T.jsx)(g.a.Item,{children:Object(T.jsx)(y.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(T.jsx)("hr",{}),Object(T.jsx)(y.b,{to:{pathname:"/addcategory/",fromDashboard:!1},children:"Add category"})]})}function N(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){n(e.data)}))}),[]),Object(T.jsx)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:c.map((function(e){return Object(T.jsx)(g.a.Item,{children:Object(T.jsxs)(y.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)}))})}var E=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(T.jsx)(b.a,{bg:"light",expand:!1,children:Object(T.jsxs)(l.a,{fluid:!0,children:[Object(T.jsx)(b.a.Brand,{href:"#",children:"Ateca hotel suites"}),Object(T.jsx)(b.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(T.jsxs)(b.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(T.jsx)(h.a.Header,{closeButton:!0,children:Object(T.jsx)(h.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(T.jsxs)(h.a.Body,{children:[Object(T.jsxs)(O.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(T.jsx)(O.a.Link,{href:"#action1",children:"Home"}),Object(T.jsx)(N,{}),Object(T.jsx)(w,{})]}),Object(T.jsxs)(u.a,{className:"d-flex",children:[Object(T.jsx)(f.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(T.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),c}(n.a.Component),S=E,k=c(9),B=c(136);var C=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(p.a)(c,2),r=n[0],i=n[1],s=t.params.id;return Object(a.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(s)}).then((function(e){i(e.data)}))}),[s]),Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)(B.a,{border:"dark",children:[Object(T.jsx)(B.a.Header,{children:r.id}),Object(T.jsxs)(B.a.Body,{children:[Object(T.jsx)(B.a.Title,{children:r.category_title}),Object(T.jsx)(B.a.Text,{children:r.category_description})]})]})})};var D=function(e){var t=e.match,c=Object(a.useState)({}),n=Object(p.a)(c,2),r=n[0],i=n[1],s=t.params.id;return Object(a.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/owner/".concat(s)}).then((function(e){i(e.data)}))}),[s]),Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)(B.a,{border:"dark",children:[Object(T.jsx)(B.a.Header,{children:r.id}),Object(T.jsxs)(B.a.Body,{children:[Object(T.jsxs)(B.a.Title,{children:[r.surname," ",r.name]}),Object(T.jsx)(B.a.Text,{children:r.description})]})]})})};c(71),c(86);var I=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S,{}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)(k.c,{children:[Object(T.jsx)(k.a,{path:"/owner/:id",exact:!0,component:D}),Object(T.jsx)(k.a,{path:"/category/:id",exact:!0,component:C}),Object(T.jsx)(k.a,{path:"/addcategory/",children:Object(T.jsx)(C,{})})]})})]})})}}]),c}(n.a.Component),L=I,_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,137)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(L,{})}),document.getElementById("root")),_()},93:function(e,t,c){},94:function(e,t,c){}},[[125,1,2]]]);
//# sourceMappingURL=main.cdcbdb67.chunk.js.map