(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),s=n.n(r),o=(n(93),n(29)),i=n(30),d=n(47),j=n(45),l=(n(94),n(95),n(134)),u=n(87),b=n(135),h=n(133),p=n(86),m=n(82),O=n(4),f=n(8),x=n.n(f),v=n(18),g=n(132),y=n(1);function N(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsx)(v.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/category_add",fromDashboard:!1},children:"Add category"})})]})}function S(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsxs)(v.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:"Add owner"})})]})}function w(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Departament",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsx)(v.b,{to:{pathname:"/departament/".concat(e.id),fromDashboard:!1},children:e.departament_title})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:"Add departament"})})]})}var _=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsx)(l.a,{bg:"light",expand:!1,children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(l.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(y.jsx)(l.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(y.jsxs)(l.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(y.jsx)(u.a.Header,{closeButton:!0,children:Object(y.jsx)(u.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(y.jsxs)(u.a.Body,{children:[Object(y.jsxs)(b.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(y.jsx)(b.a.Link,{href:"/inventory",children:"Inventory"}),Object(y.jsx)(S,{}),Object(y.jsx)(N,{}),Object(y.jsx)(w,{})]}),Object(y.jsxs)(h.a,{className:"d-flex",children:[Object(y.jsx)(p.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(y.jsx)(m.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),n}(c.a.Component),C=_,k=n(10),D=n(136);var T=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],o=t.params.id;return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(o)}).then((function(e){s(e.data)}))}),[o]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsx)(D.a.Header,{children:r.id}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsx)(D.a.Title,{children:r.category_title}),Object(y.jsx)(D.a.Text,{children:r.category_description})]})]})})};function E(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],o=t.params.id;return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/".concat(o)}).then((function(e){s(e.data)}))}),[o]),Object(y.jsx)("div",{className:"w-50",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsx)(D.a.Header,{children:r.id}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsxs)(D.a.Title,{children:[r.surname," ",r.name]}),Object(y.jsx)(D.a.Text,{children:r.owner_description})]})]})})}var A=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(O.a)(n,2),r=c[0],s=c[1],o=t.params.id;return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/".concat(o)}).then((function(e){s(e.data)}))}),[o]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(D.a,{border:"dark",children:[Object(y.jsx)(D.a.Header,{children:r.id}),Object(y.jsxs)(D.a.Body,{children:[Object(y.jsx)(D.a.Title,{children:r.departament_title}),Object(y.jsx)(D.a.Text,{children:r.departament_description})]})]})})},F=n(24),I=n.n(F),G=n(35);function B(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),o=s[0],i=s[1],d=function(){var e=Object(G.a)(I.a.mark((function e(){var t,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("category_title",n),t.append("category_description",o),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,x()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/category/",data:t}).then((function(e){alert("Category ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"container sm",children:[Object(y.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Category",name:"category_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"category_description",value:o,onChange:function(e){return i(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function L(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),o=s[0],i=s[1],d=Object(a.useState)(""),j=Object(O.a)(d,2),l=j[0],u=j[1],b=Object(a.useState)(""),h=Object(O.a)(b,2),p=h[0],m=h[1],f=Object(a.useState)([]),v=Object(O.a)(f,2),g=v[0],N=v[1];Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){N(e.data)}))}),[]);var S=function(){var e=Object(G.a)(I.a.mark((function e(t){var a,c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},t.preventDefault(),(a=new FormData).append("name",n),a.append("surname",o),a.append("owner_description",l),a.append("departament",p),r=c("csrftoken"),!o||!n){e.next=13;break}return e.next=11,x()({headers:{"X-CSRFToken":r},method:"post",url:"http://127.0.0.1:8000/api/v1/owner/",data:a}).then((function(e){alert("Owner ".concat(o," ").concat(n," has been added"))}));case 11:e.next=14;break;case 13:alert("Surname & Name must be added");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"container sm",children:[Object(y.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:S,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Surname",name:"surname",value:o,onChange:function(e){return i(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Name",name:"name",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Description",name:"owner_description",value:l,onChange:function(e){return u(e.target.value)}}),Object(y.jsxs)("select",{className:"form-select",name:"departament",onChange:function(e){return m(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"Select departament"}),g.map((function(e){return Object(y.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function H(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),o=s[0],i=s[1],d=Object(a.useState)(""),j=Object(O.a)(d,2),l=j[0],u=j[1],b=Object(a.useState)(""),h=Object(O.a)(b,2),p=h[0],m=h[1],f=Object(a.useState)(""),v=Object(O.a)(f,2),g=v[0],N=v[1],S=Object(a.useState)(""),w=Object(O.a)(S,2),_=(w[0],w[1],Object(a.useState)("")),C=Object(O.a)(_,2),k=C[0],D=C[1],T=Object(a.useState)(""),E=Object(O.a)(T,2),A=E[0],F=E[1],B=Object(a.useState)([]),L=Object(O.a)(B,2),H=L[0],P=L[1],R=Object(a.useState)([]),X=Object(O.a)(R,2),J=X[0],M=X[1];Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){M(e.data)}))}),[]),Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){P(e.data)}))}),[]);var q=function(){var e=Object(G.a)(I.a.mark((function e(t){var a,c,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},t.preventDefault(),(a=new FormData).append("title",n),a.append("inventory_description",o),a.append("serial_number",l),a.append("price",p),a.append("date_purchase",g),a.append("category",k),a.append("owner",A),r=c("csrftoken"),!(n&&p&&l)){e.next=16;break}return e.next=14,x()({headers:{"X-CSRFToken":r},method:"post",url:"http://127.0.0.1:8000/api/v1/inventory/",data:a}).then((function(e){alert("Inventory ".concat(n," has been added")),console.log(a)}));case 14:e.next=17;break;case 16:alert("Title, Serial number & Price must be added");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"container sm",children:[Object(y.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:q,children:[Object(y.jsxs)("select",{className:"form-select mb-2",name:"category",onChange:function(e){return D(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"Open this select menu"}),H.map((function(e){return Object(y.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(y.jsxs)("select",{className:"form-select",name:"owner",onChange:function(e){return F(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"Open this select menu"}),J.map((function(e){return Object(y.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]}),Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:l,onChange:function(e){return u(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:o,onChange:function(e){return i(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Price",name:"price",value:p,onChange:function(e){return m(e.target.value)}}),Object(y.jsx)("input",{type:"date",className:"form-control mb-2",placeholder:"Date of purchase",name:"date_purchase",value:g,onChange:function(e){return N(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function P(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(O.a)(r,2),o=s[0],i=s[1],d=function(){var e=Object(G.a)(I.a.mark((function e(){var t,a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("departament_title",n),t.append("departament_description",o),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,x()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"container sm",children:[Object(y.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Departament",name:"departament_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"departament_description",value:o,onChange:function(e){return i(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var R=n(131);function X(){var e=Object(a.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],r=1;return Object(a.useEffect)((function(){x()({method:"GET",url:"http://127.0.0.1:8000/api/v1/inventory/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("h3",{className:"text-center",children:"All Inventory"}),Object(y.jsxs)(R.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"\u2116"}),Object(y.jsx)("th",{children:"Serial"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Title"}),Object(y.jsx)("th",{children:"Owner"}),Object(y.jsx)("th",{children:"Description"})]})}),Object(y.jsx)("tbody",{children:n.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:r++}),Object(y.jsx)("td",{children:e.serial_number}),Object(y.jsx)("td",{children:e.category}),Object(y.jsx)("td",{children:Object(y.jsx)(v.b,{to:{pathname:"/inventory/".concat(e.id),fromDashboard:!1},children:e.title})}),Object(y.jsx)("td",{children:e.owner}),Object(y.jsx)("td",{children:e.inventory_description})]},e.id)}))})]}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:"Add Inventory"})})]})}function J(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("h3",{children:"InventoryDetail"})})}var M=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(v.a,{children:[Object(y.jsx)(C,{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(k.c,{children:[Object(y.jsx)(k.a,{path:"/inventory",children:Object(y.jsx)(X,{})}),Object(y.jsx)(k.a,{path:"/inventory/:id",children:Object(y.jsx)(J,{})}),Object(y.jsx)(k.a,{path:"/owner/:id",exact:!0,component:E}),Object(y.jsx)(k.a,{path:"/category/:id",exact:!0,component:T}),Object(y.jsx)(k.a,{path:"/departament/:id",exact:!0,component:A}),Object(y.jsx)(k.a,{path:"/inventory_add",children:Object(y.jsx)(H,{})}),Object(y.jsx)(k.a,{path:"/departament_add",children:Object(y.jsx)(P,{})}),Object(y.jsx)(k.a,{path:"/category_add",children:Object(y.jsx)(B,{})}),Object(y.jsx)(k.a,{path:"/owner_add",children:Object(y.jsx)(L,{})})]})})]})}}]),n}(c.a.Component),q=M,z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root")),z()},93:function(e,t,n){},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.33a6cae8.chunk.js.map