(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),s=n.n(r),i=(n(93),n(30)),o=n(31),d=n(47),j=n(45),l=(n(94),n(95),n(134)),b=n(87),h=n(135),u=n(133),m=n(86),p=n(82),O=n(5),x=n(8),f=n.n(x),v=n(15),g=n(132);var y=n(1);function N(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsx)(v.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/addcategory/",fromDashboard:!1},children:"Add category"})})]})}function w(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsxs)(v.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/addowner/",fromDashboard:!1},children:"Add owner"})})]})}function S(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Departament",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsx)(v.b,{to:{pathname:"/departament/".concat(e.id),fromDashboard:!1},children:e.departament_title})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/adddepartament/",fromDashboard:!1},children:"Add departament"})})]})}var _=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsx)(l.a,{bg:"light",expand:!1,children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(l.a.Brand,{href:"/home",children:"Ateca hotel suites"}),Object(y.jsx)(l.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(y.jsxs)(l.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(y.jsx)(b.a.Header,{closeButton:!0,children:Object(y.jsx)(b.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(y.jsxs)(b.a.Body,{children:[Object(y.jsxs)(h.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(y.jsx)(h.a.Link,{href:"/home",children:"Home"}),Object(y.jsx)(w,{}),Object(y.jsx)(N,{}),Object(y.jsx)(S,{})]}),Object(y.jsxs)(u.a,{className:"d-flex",children:[Object(y.jsx)(m.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(y.jsx)(p.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),n}(c.a.Component),T=_,k=n(10),D=n(136);var C=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsx)(D.a.Header,{children:r.id}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsx)(D.a.Title,{children:r.category_title}),Object(y.jsx)(D.a.Text,{children:r.category_description})]})]})})};var E=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"w-50",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsx)(D.a.Header,{children:r.id}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsxs)(D.a.Title,{children:[r.surname," ",r.name]}),Object(y.jsx)(D.a.Text,{children:r.owner_description})]})]})})};var F=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsx)(D.a.Header,{children:r.id}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsx)(D.a.Title,{children:r.departament_title}),Object(y.jsx)(D.a.Text,{children:r.departament_description})]})]})})},B=n(28),G=n.n(B),A=n(44);function H(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),i=s[0],o=s[1],d=function(){var e=Object(A.a)(G.a.mark((function e(){var t,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("category_title",n),t.append("category_description",i),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,f()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/category/",data:t}).then((function(e){alert("Category ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"container sm",children:Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Category",name:"category_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}function I(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(""),j=Object(O.a)(d,2),l=j[0],b=j[1],h=Object(a.useState)(""),u=Object(O.a)(h,2),m=u[0],p=u[1],x=Object(a.useState)([]),v=Object(O.a)(x,2),g=v[0],N=v[1];Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){N(e.data)}))}),[]);var w=function(){var e=Object(A.a)(G.a.mark((function e(t){var a,c,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},t.preventDefault(),(a=new FormData).append("name",n),a.append("surname",i),a.append("owner_description",l),a.append("departament",m),r=c("csrftoken"),!i||!n){e.next=13;break}return e.next=11,f()({headers:{"X-CSRFToken":r},method:"post",url:"http://127.0.0.1:8000/api/v1/owner/",data:a}).then((function(e){alert("Owner ".concat(i," ").concat(n," has been added"))}));case 11:e.next=14;break;case 13:alert("Surname & Name must be added");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"container sm",children:Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:w,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Name",name:"name",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Description",name:"owner_description",value:l,onChange:function(e){return b(e.target.value)}}),Object(y.jsxs)("select",{className:"form-select",name:"departament",onSelect:function(e){return p(e.target.value)},children:[Object(y.jsx)("option",{value:"1",children:"Open this select menu"}),g.map((function(e){return Object(y.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}function L(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),i=s[0],o=s[1],d=function(){var e=Object(A.a)(G.a.mark((function e(){var t,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("departament_title",n),t.append("departament_description",i),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,f()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"container sm",children:Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"departament",name:"departament_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}var P=n(131);function R(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],r=1;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/inventory/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(P.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"\u2116"}),Object(y.jsx)("th",{children:"Serial"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Title"}),Object(y.jsx)("th",{children:"Owner"}),Object(y.jsx)("th",{children:"Description"})]})}),Object(y.jsx)("tbody",{children:n.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:r++}),Object(y.jsx)("td",{children:e.serial_number}),Object(y.jsx)("td",{children:e.category}),Object(y.jsx)("td",{children:Object(y.jsx)(v.b,{to:{pathname:"/inventory/".concat(e.id),fromDashboard:!1},className:"font-italic",children:e.title})}),Object(y.jsx)("td",{children:e.owner}),Object(y.jsx)("td",{children:e.inventory_description})]},e.id)}))})]})}var X=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/inventory/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsxs)(D.a.Header,{children:[Object(y.jsx)("span",{className:"text-muted",children:"Serial Number: "}),r.serial_number]}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsxs)(D.a.Title,{children:[Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"text-muted",children:"Title: "}),r.title]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"text-muted",children:"Category: "}),Object(y.jsx)(v.b,{to:{pathname:"/category/".concat(r.category),fromDashboard:!1},children:r.category})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(y.jsx)(v.b,{to:{pathname:"/owner/".concat(r.owner),fromDashboard:!1},children:r.owner})]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"text-muted",children:"Price: "}),r.price,"$"]}),Object(y.jsxs)("p",{children:[Object(y.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),r.date_purchase]})]}),Object(y.jsx)(D.a.Text,{children:r.inventory_description})]})]})})},J=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(v.a,{children:[Object(y.jsx)(T,{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(k.c,{children:[Object(y.jsx)(k.a,{path:"/home",children:Object(y.jsx)(R,{})}),Object(y.jsx)(k.a,{path:"/inventory/:id",exact:!0,component:X}),Object(y.jsx)(k.a,{path:"/owner/:id",exact:!0,component:E}),Object(y.jsx)(k.a,{path:"/category/:id",exact:!0,component:C}),Object(y.jsx)(k.a,{path:"/departament/:id",exact:!0,component:F}),Object(y.jsx)(k.a,{path:"/department_add",children:Object(y.jsx)(L,{})}),Object(y.jsx)(k.a,{path:"/category_add",children:Object(y.jsx)(H,{})}),Object(y.jsx)(k.a,{path:"/owner_add",children:Object(y.jsx)(I,{})})]})})]})}}]),n}(c.a.Component),M=J,$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),$()},93:function(e,t,n){},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.90684827.chunk.js.map