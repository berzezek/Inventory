(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),o=a.n(r),s=(a(93),a(27)),i=a(28),j=a(44),d=a(42),b=(a(94),a(95),a(134)),l=a(131),u=a(87),h=a(135),O=a(133),f=a(85),x=a(81),p=a(6),m=a(24),v=a.n(m),g=a(37),y=a(132);var N=a(1);function w(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){v()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(N.jsxs)(y.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[a.map((function(e){return Object(N.jsx)(y.a.Item,{children:Object(N.jsx)(g.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(N.jsx)("hr",{}),Object(N.jsx)(g.b,{to:{pathname:"/category/",fromDashboard:!1},children:"Add category"})]})}function S(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){v()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(N.jsx)(y.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:a.map((function(e){return Object(N.jsx)(y.a.Item,{children:Object(N.jsxs)(g.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)}))})}var T=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(N.jsx)(b.a,{bg:"light",expand:!1,children:Object(N.jsxs)(l.a,{fluid:!0,children:[Object(N.jsx)(b.a.Brand,{href:"#",children:"Ateca hotel suites"}),Object(N.jsx)(b.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(N.jsxs)(b.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(N.jsx)(u.a.Header,{closeButton:!0,children:Object(N.jsx)(u.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(N.jsxs)(u.a.Body,{children:[Object(N.jsxs)(h.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(N.jsx)(h.a.Link,{href:"#action1",children:"Home"}),Object(N.jsx)(S,{}),Object(N.jsx)(w,{})]}),Object(N.jsxs)(O.a,{className:"d-flex",children:[Object(N.jsx)(f.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(N.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),a}(c.a.Component),k=T,C=a(9),E=a(136);var _=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(p.a)(a,2),r=c[0],o=c[1],s=t.params.id;return Object(n.useEffect)((function(){v()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(s)}).then((function(e){o(e.data)}))}),[s]),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(E.a,{border:"dark",children:[Object(N.jsx)(E.a.Header,{children:r.id}),Object(N.jsxs)(E.a.Body,{children:[Object(N.jsx)(E.a.Title,{children:r.category_title}),Object(N.jsx)(E.a.Text,{children:r.category_description})]})]})})};var D=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(p.a)(a,2),r=c[0],o=c[1],s=t.params.id;return Object(n.useEffect)((function(){v()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/owner/".concat(s)}).then((function(e){o(e.data)}))}),[s]),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(E.a,{border:"dark",children:[Object(N.jsx)(E.a.Header,{children:r.id}),Object(N.jsxs)(E.a.Body,{children:[Object(N.jsxs)(E.a.Title,{children:[r.surname," ",r.name]}),Object(N.jsx)(E.a.Text,{children:r.description})]})]})})},B=a(71),F=a.n(B),I=a(86);function L(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(p.a)(r,2),s=o[0],i=o[1],j=function(){var e=Object(I.a)(F.a.mark((function e(){var t,n,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("category_title",a),t.append("category_description",s),c=n("csrftoken"),!a){e.next=8;break}return e.next=8,v()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/category/",data:t}).then((function(e){alert("Category ".concat(a," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"container sm",children:Object(N.jsxs)("form",{className:"form-control p-2",onSubmit:j,children:[Object(N.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"category_description",value:s,onChange:function(e){return i(e.target.value)}}),Object(N.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}var G=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(g.a,{children:[Object(N.jsx)(k,{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(C.c,{children:[Object(N.jsx)(C.a,{path:"/owner/:id",exact:!0,component:D}),Object(N.jsx)(C.a,{path:"/category/:id",exact:!0,component:_}),Object(N.jsx)(C.a,{path:"/category/",exact:!0,component:Object(N.jsx)(L,{})})]})})]})})}}]),a}(c.a.Component),H=G,A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,137)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(H,{})}),document.getElementById("root")),A()},93:function(e,t,a){},94:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.a7848b59.chunk.js.map