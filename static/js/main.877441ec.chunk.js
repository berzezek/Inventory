(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),s=n.n(r),i=(n(93),n(30)),o=n(31),d=n(47),j=n(45),l=(n(94),n(95),n(134)),b=n(87),u=n(135),h=n(133),m=n(86),O=n(82),p=n(4),x=n(8),f=n.n(x),v=n(15),y=n(132),g="http://127.0.0.1:8000/",N=n(1);function S(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(N.jsxs)(y.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(N.jsx)(y.a.Item,{children:Object(N.jsx)(v.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(N.jsx)("hr",{}),Object(N.jsx)("div",{className:"text-center",children:Object(N.jsx)(v.b,{to:{pathname:"/category_add",fromDashboard:!1},children:"Add category"})})]})}function w(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(N.jsxs)(y.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:[n.map((function(e){return Object(N.jsx)(y.a.Item,{children:Object(N.jsxs)(v.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)})),Object(N.jsx)("hr",{}),Object(N.jsx)("div",{className:"text-center",children:Object(N.jsx)(v.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:"Add owner"})})]})}function _(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/departament/"}).then((function(e){c(e.data)}))}),[]),Object(N.jsxs)(y.a,{title:"Departament",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(N.jsx)(y.a.Item,{children:Object(N.jsx)(v.b,{to:{pathname:"/departament/".concat(e.id),fromDashboard:!1},children:e.departament_title})},e.id)})),Object(N.jsx)("hr",{}),Object(N.jsx)("div",{className:"text-center",children:Object(N.jsx)(v.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:"Add departament"})})]})}var C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsx)(l.a,{bg:"light",expand:!1,children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(l.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(N.jsx)(l.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(N.jsxs)(l.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(N.jsx)(b.a.Header,{closeButton:!0,children:Object(N.jsx)(b.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(N.jsxs)(b.a.Body,{children:[Object(N.jsxs)(u.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(N.jsx)(u.a.Link,{href:"/inventory",children:"Inventory"}),Object(N.jsx)(w,{}),Object(N.jsx)(S,{}),Object(N.jsx)(_,{})]}),Object(N.jsxs)(h.a,{className:"d-flex",children:[Object(N.jsx)(m.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(N.jsx)(O.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),n}(c.a.Component),k=C,D=n(10),T=n(136);function E(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/category/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(T.a,{border:"dark",children:[Object(N.jsx)(T.a.Header,{children:r.id}),Object(N.jsxs)(T.a.Body,{children:[Object(N.jsx)(T.a.Title,{children:r.category_title}),Object(N.jsx)(T.a.Text,{children:r.category_description})]})]})})}function A(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/owner/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(T.a,{border:"dark",children:[Object(N.jsx)(T.a.Header,{children:r.id}),Object(N.jsxs)(T.a.Body,{children:[Object(N.jsxs)(T.a.Title,{children:[r.surname," ",r.name]}),Object(N.jsx)(T.a.Text,{children:r.owner_description})]})]})})}var F=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/departament/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(T.a,{border:"dark",children:[Object(N.jsx)(T.a.Header,{children:r.id}),Object(N.jsxs)(T.a.Body,{children:[Object(N.jsx)(T.a.Title,{children:r.departament_title}),Object(N.jsx)(T.a.Text,{children:r.departament_description})]})]})})},I=n(24),G=n.n(I),B=n(36);var H=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null}("csrftoken");function L(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],d=function(){var e=Object(B.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("category_title",n),t.append("category_description",i),!n){e.next=6;break}return e.next=6,f()({headers:{"X-CSRFToken":H},method:"post",url:g+"api/v1/category/",data:t}).then((function(e){alert("Category ".concat(n," has been added"))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"container sm",children:[Object(N.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(N.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(N.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Category",name:"category_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function P(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(""),j=Object(p.a)(d,2),l=j[0],b=j[1],u=Object(a.useState)(""),h=Object(p.a)(u,2),m=h[0],O=h[1],x=Object(a.useState)([]),v=Object(p.a)(x,2),y=v[0],S=v[1];Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/departament/"}).then((function(e){S(e.data)}))}),[]);var w=function(){var e=Object(B.a)(G.a.mark((function e(t){var a,c,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},t.preventDefault(),(a=new FormData).append("name",n),a.append("surname",i),a.append("owner_description",l),a.append("departament",m),r=c("csrftoken"),!i||!n){e.next=13;break}return e.next=11,f()({headers:{"X-CSRFToken":r},method:"post",url:g+"api/v1/owner/",data:a}).then((function(e){alert("Owner ".concat(i," ").concat(n," has been added"))}));case 11:e.next=14;break;case 13:alert("Surname & Name must be added");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"container sm",children:[Object(N.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(N.jsxs)("form",{className:"form-control p-2",onSubmit:w,children:[Object(N.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Name",name:"name",value:n,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Description",name:"owner_description",value:l,onChange:function(e){return b(e.target.value)}}),Object(N.jsxs)("select",{className:"form-select",name:"departament",onChange:function(e){return O(e.target.value)},children:[Object(N.jsx)("option",{value:"",children:"Select departament"}),y.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]}),Object(N.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function R(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],d=Object(a.useState)(""),j=Object(p.a)(d,2),l=j[0],b=j[1],u=Object(a.useState)(""),h=Object(p.a)(u,2),m=h[0],O=h[1],x=Object(a.useState)(""),v=Object(p.a)(x,2),y=v[0],S=v[1],w=Object(a.useState)(""),_=Object(p.a)(w,2),C=_[0],k=_[1],D=Object(a.useState)(""),T=Object(p.a)(D,2),E=T[0],A=T[1],F=Object(a.useState)([]),I=Object(p.a)(F,2),H=I[0],L=I[1],P=Object(a.useState)([]),R=Object(p.a)(P,2),X=R[0],J=R[1];Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/owner/"}).then((function(e){J(e.data)}))}),[]),Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/category/"}).then((function(e){L(e.data)}))}),[]);var M=function(){var e=Object(B.a)(G.a.mark((function e(t){var a,c,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},t.preventDefault(),(a=new FormData).append("title",n),a.append("inventory_description",i),a.append("serial_number",l),a.append("price",m),a.append("date_purchase",y),a.append("category",C),a.append("owner",E),r=c("csrftoken"),!(n&&m&&l)){e.next=16;break}return e.next=14,f()({headers:{"X-CSRFToken":r},method:"post",url:g+"api/v1/inventory/",data:a}).then((function(e){alert("Inventory ".concat(n," has been added")),console.log(a)}));case 14:e.next=17;break;case 16:alert("Title, Serial number & Price must be added");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"container sm",children:[Object(N.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(N.jsxs)("form",{className:"form-control p-2",onSubmit:M,children:[Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return k(e.target.value)},children:[Object(N.jsx)("option",{value:"",children:"Select category"}),H.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(N.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return A(e.target.value)},children:[Object(N.jsx)("option",{value:"",children:"Select owner"}),X.map((function(e){return Object(N.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(N.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:n,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:l,onChange:function(e){return b(e.target.value)}}),Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:m,onChange:function(e){return O(e.target.value)}}),Object(N.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:y,onChange:function(e){return S(e.target.value)}})]}),Object(N.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function X(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],d=function(){var e=Object(B.a)(G.a.mark((function e(){var t,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("departament_title",n),t.append("departament_description",i),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,f()({headers:{"X-CSRFToken":c},method:"post",url:g+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:"container sm",children:[Object(N.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(N.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(N.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Departament",name:"departament_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(N.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var J=n(131);function M(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],r=1;return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/inventory/"}).then((function(e){c(e.data)}))}),[]),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h3",{className:"text-center",children:"All Inventory"}),Object(N.jsxs)(J.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"\u2116"}),Object(N.jsx)("th",{children:"Serial"}),Object(N.jsx)("th",{children:"Category"}),Object(N.jsx)("th",{children:"Title"}),Object(N.jsx)("th",{children:"Owner"}),Object(N.jsx)("th",{children:"Description"})]})}),Object(N.jsx)("tbody",{children:n.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:r++}),Object(N.jsx)("td",{children:e.serial_number}),Object(N.jsx)("td",{children:e.category}),Object(N.jsx)("td",{children:Object(N.jsx)(v.b,{to:{pathname:"/inventory_detail/".concat(e.id),fromDashboard:!1},children:e.title})}),Object(N.jsx)("td",{children:e.owner}),Object(N.jsx)("td",{children:e.inventory_description})]},e.id)}))})]}),Object(N.jsx)("div",{className:"text-center",children:Object(N.jsx)(v.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(N.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function $(e){var t=e.match,n=Object(a.useState)({}),c=Object(p.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:g+"api/v1/inventory/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(N.jsxs)(T.a,{border:"dark",children:[Object(N.jsxs)(T.a.Header,{children:[Object(N.jsx)("span",{className:"text-muted",children:"Serial Number: "}),r.serial_number]}),Object(N.jsxs)(T.a.Body,{children:[Object(N.jsxs)(T.a.Title,{children:[Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"text-muted",children:"Title: "}),r.title]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"text-muted",children:"Category: "}),Object(N.jsx)(v.b,{to:{pathname:"/category/".concat(r.category),fromDashboard:!1},children:r.category})]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(N.jsx)(v.b,{to:{pathname:"/owner/".concat(r.owner),fromDashboard:!1},children:r.owner})]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"text-muted",children:"Price: "}),r.price,"$"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),r.date_purchase]})]}),Object(N.jsx)(T.a.Text,{children:r.inventory_description})]})]})]})}var q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(v.a,{children:[Object(N.jsx)(k,{}),Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)(D.c,{children:[Object(N.jsx)(D.a,{path:"/inventory",children:Object(N.jsx)(M,{})}),Object(N.jsx)(D.a,{path:"/inventory_detail/:id",exact:!0,component:$}),Object(N.jsx)(D.a,{path:"/owner/:id",exact:!0,component:A}),Object(N.jsx)(D.a,{path:"/category/:id",exact:!0,component:E}),Object(N.jsx)(D.a,{path:"/departament/:id",exact:!0,component:F}),Object(N.jsx)(D.a,{path:"/inventory_add",children:Object(N.jsx)(R,{})}),Object(N.jsx)(D.a,{path:"/departament_add",children:Object(N.jsx)(X,{})}),Object(N.jsx)(D.a,{path:"/category_add",children:Object(N.jsx)(L,{})}),Object(N.jsx)(D.a,{path:"/owner_add",children:Object(N.jsx)(P,{})})]})})]})}}]),n}(c.a.Component),z=q,K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(z,{})}),document.getElementById("root")),K()},93:function(e,t,n){},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.877441ec.chunk.js.map