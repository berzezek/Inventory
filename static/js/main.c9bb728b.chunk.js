(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),s=n.n(r),i=(n(93),n(29)),o=n(30),j=n(45),d=n(43),l=(n(94),n(95),n(134)),b=n(87),h=n(135),u=n(133),O=n(86),m=n(82),p=n(6),x=n(10),f=n.n(x),v=n(15),y=n(132);var g=n(1);function N(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(g.jsxs)(y.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(g.jsx)(y.a.Item,{children:Object(g.jsx)(v.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)(v.b,{to:{pathname:"/addcategory/",fromDashboard:!1},children:"Add category"})})]})}function w(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(g.jsxs)(y.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:[n.map((function(e){return Object(g.jsx)(y.a.Item,{children:Object(g.jsxs)(v.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)})),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)(v.b,{to:{pathname:"/addowner/",fromDashboard:!1},children:"Add owner"})})]})}function S(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){c(e.data)}))}),[]),Object(g.jsxs)(y.a,{title:"Departament",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(g.jsx)(y.a.Item,{children:Object(g.jsx)(v.b,{to:{pathname:"/departament/".concat(e.id),fromDashboard:!1},children:e.departament_title})},e.id)})),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)(v.b,{to:{pathname:"/adddepartament/",fromDashboard:!1},children:"Add departament"})})]})}var T=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(l.a,{bg:"light",expand:!1,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(l.a.Brand,{href:"/home",children:"Ateca hotel suites"}),Object(g.jsx)(l.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(g.jsxs)(l.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(g.jsx)(b.a.Header,{closeButton:!0,children:Object(g.jsx)(b.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(g.jsxs)(b.a.Body,{children:[Object(g.jsxs)(h.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(g.jsx)(h.a.Link,{href:"/home",children:"Home"}),Object(g.jsx)(w,{}),Object(g.jsx)(N,{}),Object(g.jsx)(S,{})]}),Object(g.jsxs)(u.a,{className:"d-flex",children:[Object(g.jsx)(O.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(g.jsx)(m.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),n}(c.a.Component),_=T,D=n(9),k=n(136);var C=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(k.a,{border:"dark",children:[Object(g.jsx)(k.a.Header,{children:r.id}),Object(g.jsxs)(k.a.Body,{children:[Object(g.jsx)(k.a.Title,{children:r.category_title}),Object(g.jsx)(k.a.Text,{children:r.category_description})]})]})})};var E=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(g.jsx)("div",{className:"w-50",children:Object(g.jsxs)(k.a,{border:"dark",children:[Object(g.jsx)(k.a.Header,{children:r.id}),Object(g.jsxs)(k.a.Body,{children:[Object(g.jsxs)(k.a.Title,{children:[r.surname," ",r.name]}),Object(g.jsx)(k.a.Text,{children:r.owner_description})]})]})})};var B=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(k.a,{border:"dark",children:[Object(g.jsx)(k.a.Header,{children:r.id}),Object(g.jsxs)(k.a.Body,{children:[Object(g.jsx)(k.a.Title,{children:r.departament_title}),Object(g.jsx)(k.a.Text,{children:r.departament_description})]})]})})},G=n(47),F=n.n(G),A=n(67);function H(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],j=function(){var e=Object(A.a)(F.a.mark((function e(){var t,a,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("category_title",n),t.append("category_description",i),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,f()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/category/",data:t}).then((function(e){alert("Category ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"container sm",children:Object(g.jsxs)("form",{className:"form-control p-2",onSubmit:j,children:[Object(g.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Category",name:"category_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}function I(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(""),d=Object(p.a)(j,2),l=d[0],b=d[1],h=Object(a.useState)(""),u=Object(p.a)(h,2),O=u[0],m=u[1],x=Object(a.useState)([]),v=Object(p.a)(x,2),y=v[0],N=v[1];Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){N(e.data)}))}),[]);var w=function(){var e=Object(A.a)(F.a.mark((function e(){var t,a,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("name",n),t.append("surname",i),t.append("owner_description",l),t.append("departament",O),c=a("csrftoken"),!i){e.next=10;break}return e.next=10,f()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/owner/",data:t}).then((function(e){alert("Owner ".concat(i," ").concat(n," has been added"))}));case 10:case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"container sm",children:Object(g.jsxs)("form",{className:"form-control p-2",onSubmit:w,children:[Object(g.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Name",name:"name",value:n,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Description",name:"owner_description",value:l,onChange:function(e){return b(e.target.value)}}),Object(g.jsxs)("select",{className:"form-select",name:"departament",onSelect:function(e){return m(e.target.value)},children:[Object(g.jsx)("option",{value:"1",children:"Open this select menu"}),y.map((function(e){return Object(g.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}var L=n(131);function P(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],r=1;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/inventory/"}).then((function(e){c(e.data)}))}),[]),Object(g.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"\u2116"}),Object(g.jsx)("th",{children:"Serial"}),Object(g.jsx)("th",{children:"Category"}),Object(g.jsx)("th",{children:"Title"}),Object(g.jsx)("th",{children:"Owner"}),Object(g.jsx)("th",{children:"Description"})]})}),Object(g.jsx)("tbody",{children:n.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:r++}),Object(g.jsx)("td",{children:e.serial_number}),Object(g.jsx)("td",{children:e.category}),Object(g.jsx)("td",{children:Object(g.jsx)(v.b,{to:{pathname:"/inventory/".concat(e.id),fromDashboard:!1},className:"font-italic",children:e.title})}),Object(g.jsx)("td",{children:e.owner}),Object(g.jsx)("td",{children:e.inventory_description})]},e.id)}))})]})}var J=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/inventory/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(k.a,{border:"dark",children:[Object(g.jsxs)(k.a.Header,{children:[Object(g.jsx)("span",{className:"text-muted",children:"Serial Number: "}),r.serial_number]}),Object(g.jsxs)(k.a.Body,{children:[Object(g.jsxs)(k.a.Title,{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"text-muted",children:"Title: "}),r.title]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"text-muted",children:"Category: "}),Object(g.jsx)(v.b,{to:{pathname:"/category/".concat(r.category),fromDashboard:!1},children:r.category})]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(g.jsx)(v.b,{to:{pathname:"/owner/".concat(r.owner),fromDashboard:!1},children:r.owner})]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"text-muted",children:"Price: "}),r.price,"$"]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),r.date_purchase]})]}),Object(g.jsx)(k.a.Text,{children:r.inventory_description})]})]})})},R=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(v.a,{children:[Object(g.jsx)(_,{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(D.c,{children:[Object(g.jsx)(D.a,{path:"/home",children:Object(g.jsx)(P,{})}),Object(g.jsx)(D.a,{path:"/inventory/:id",exact:!0,component:J}),Object(g.jsx)(D.a,{path:"/owner/:id",exact:!0,component:E}),Object(g.jsx)(D.a,{path:"/category/:id",exact:!0,component:C}),Object(g.jsx)(D.a,{path:"/departament/:id",exact:!0,component:B}),Object(g.jsx)(D.a,{path:"/addcategory",children:Object(g.jsx)(H,{})}),Object(g.jsx)(D.a,{path:"/addowner",children:Object(g.jsx)(I,{})})]})})]})}}]),n}(c.a.Component),X=R,M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(X,{})}),document.getElementById("root")),M()},93:function(e,t,n){},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.c9bb728b.chunk.js.map