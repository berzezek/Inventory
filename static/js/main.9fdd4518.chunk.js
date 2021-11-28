(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(24),s=a.n(r),i=(a(69),a(27)),l=a(28),o=a(35),d=a(34),j=(a(70),a(71),a(106)),b=a(103),h=a(107),u=a(108),m=a(64),O=a(104),x=a(9),p=a(0),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{bg:"light",expand:"lg",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(p.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(p.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(p.jsxs)(h.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(x.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(x.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(x.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(x.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(x.b,{to:{pathname:"/api-auth",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Auth"})})]}),Object(p.jsxs)(u.a,{className:"d-flex",children:[Object(p.jsx)(m.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(p.jsx)(O.a,{variant:"outline-success",children:"Search"})]})]})]})})}}]),a}(n.a.Component),v=f,y=a(10),g=a(5),N=a(8),w=a.n(N),S=a(105),_="http://127.0.0.1:8000/";function C(){var e=Object(c.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/inventory/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Inventory"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Serial"}),Object(p.jsx)("th",{children:"Category"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Owner"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-2",children:e.serial_number}),Object(p.jsx)("td",{className:"col-2",children:e.category}),Object(p.jsx)("td",{className:"text-start col-2",children:Object(p.jsx)(x.b,{to:{pathname:"/inventory_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.title})}),Object(p.jsx)("td",{className:"col-3",children:e.inventory_description}),Object(p.jsx)("td",{className:"col-2",children:e.owner})]},e.id)}))})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function D(){var e=Object(c.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/category/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Category"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(x.b,{to:{pathname:"/category_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.category_title})}),Object(p.jsx)("td",{className:"col-6",children:e.category_description})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function k(){var e=Object(c.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/owner/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Category"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Category"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:[e.surname," ",e.name[0],"."]})}),Object(p.jsx)("td",{className:"col-5",children:e.owner_description}),Object(p.jsx)("td",{className:"col-2",children:e.category})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function T(){var e=Object(c.useState)([]),t=Object(g.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/departament/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Category"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.departament_title})}),Object(p.jsx)("td",{className:"col-7",children:e.departament_description})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(x.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}var E=a(14),A=a.n(E),F=a(23);var G=function(e){for(var t=e+"=",a=document.cookie.split(";"),c=0;c<a.length;c++){for(var n=a[c];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}("csrftoken");function L(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(g.a)(r,2),i=s[0],l=s[1],o=function(){var e=Object(F.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("category_title",a),c.append("category_description",i),!a){e.next=7;break}return e.next=7,w()({headers:{"X-CSRFToken":G},method:"post",url:_+"api/v1/category/",data:c}).then((function(e){alert("Category ".concat(a," has been added"))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:o,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function B(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(g.a)(r,2),i=s[0],l=s[1],o=Object(c.useState)(""),d=Object(g.a)(o,2),j=d[0],b=d[1],h=Object(c.useState)(""),u=Object(g.a)(h,2),m=u[0],O=u[1],x=Object(c.useState)([]),f=Object(g.a)(x,2),v=f[0],y=f[1];Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/departament/"}).then((function(e){y(e.data)}))}),[]);var N=function(){var e=Object(F.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("name",a),c.append("surname",i),c.append("owner_description",j),c.append("departament",m),!i||!a){e.next=11;break}return e.next=9,w()({headers:{"X-CSRFToken":G},method:"post",url:_+"api/v1/owner/",data:c}).then((function(e){alert("Owner ".concat(i," ").concat(a," has been added"))}));case 9:e.next=12;break;case 11:alert("Surname & Name must be added");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:N,children:[Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return b(e.target.value)}}),Object(p.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return O(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function H(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(g.a)(r,2),i=s[0],l=s[1],o=Object(c.useState)(""),d=Object(g.a)(o,2),j=d[0],b=d[1],h=Object(c.useState)(""),u=Object(g.a)(h,2),m=u[0],O=u[1],x=Object(c.useState)(""),f=Object(g.a)(x,2),v=f[0],y=f[1],N=Object(c.useState)(""),S=Object(g.a)(N,2),C=S[0],D=S[1],k=Object(c.useState)(""),T=Object(g.a)(k,2),E=T[0],L=T[1],B=Object(c.useState)([]),H=Object(g.a)(B,2),I=H[0],z=H[1],M=Object(c.useState)([]),P=Object(g.a)(M,2),R=P[0],X=P[1];Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/owner/"}).then((function(e){X(e.data)}))}),[]),Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/category/"}).then((function(e){z(e.data)}))}),[]);var J=function(){var e=Object(F.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("title",a),c.append("inventory_description",i),c.append("serial_number",j),c.append("price",m),c.append("date_purchase",v),c.append("category",C),c.append("owner",E),!(a&&m&&j)){e.next=14;break}return e.next=12,w()({headers:{"X-CSRFToken":G},method:"post",url:_+"api/v1/inventory/",data:c}).then((function(e){alert("Inventory ".concat(a," has been added")),console.log(c)}));case 12:e.next=15;break;case 14:alert("Title, Serial number & Price must be added");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:J,children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return D(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select category"}),I.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(p.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return L(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select owner"}),R.map((function(e){return Object(p.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(p.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return b(e.target.value)}}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:m,onChange:function(e){return O(e.target.value)}}),Object(p.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function I(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(g.a)(r,2),i=s[0],l=s[1],o=function(){var e=Object(F.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=6;break}return e.next=6,w()({headers:{"X-CSRFToken":G},method:"post",url:_+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(a," has been added"))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:o,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var z=a(109);function M(e){var t=e.match,a=Object(c.useState)({}),n=Object(g.a)(a,2),r=n[0],s=n[1],i=t.params.id;Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/category/".concat(i)}).then((function(e){s(e.data)}))}),[i]);var l=function(){var e=Object(F.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete... Are you sure?")){e.next=3;break}return e.next=3,w()({headers:{"X-CSRFToken":G},method:"delete",url:_+"api/v1/category/".concat(i)}).then((function(e){alert("Category deleted")})).then(Object(p.jsx)(y.a,{to:"/category"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:r.id}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsx)(z.a.Title,{children:r.category_title}),Object(p.jsx)(z.a.Text,{children:r.category_description}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)("div",{children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:l,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})]})]})]})})}function P(e){var t=e.match,a=Object(c.useState)({}),n=Object(g.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/owner/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:r.id}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsxs)(z.a.Title,{children:[r.surname," ",r.name]}),Object(p.jsx)(z.a.Text,{children:r.owner_description})]})]})})}var R=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(g.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/departament/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:r.id}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsx)(z.a.Title,{children:r.departament_title}),Object(p.jsx)(z.a.Text,{children:r.departament_description})]})]})})};function X(e){var t=e.match,a=Object(c.useState)({}),n=Object(g.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/inventory/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsxs)(z.a.Header,{children:[Object(p.jsx)("span",{className:"text-muted",children:"Serial Number: "}),r.serial_number]}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsxs)(z.a.Title,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Title: "}),r.title]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Category: "}),Object(p.jsx)(x.b,{to:{pathname:"/category/".concat(r.category),fromDashboard:!1},children:r.category})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(p.jsx)(x.b,{to:{pathname:"/owner/".concat(r.owner),fromDashboard:!1},children:r.owner})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Price: "}),r.price,"$"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),r.date_purchase]})]}),Object(p.jsx)(z.a.Text,{children:r.inventory_description})]})]})]})}var J=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(x.a,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(y.d,{children:[Object(p.jsx)(y.b,{path:"/category",children:Object(p.jsx)(D,{})}),Object(p.jsx)(y.b,{path:"/departament",children:Object(p.jsx)(T,{})}),Object(p.jsx)(y.b,{path:"/owner",children:Object(p.jsx)(k,{})}),Object(p.jsx)(y.b,{path:"/inventory",children:Object(p.jsx)(C,{})}),Object(p.jsx)(y.b,{path:"/category_detail/:id",exact:!0,component:M}),Object(p.jsx)(y.b,{path:"/departament_detail/:id",exact:!0,component:R}),Object(p.jsx)(y.b,{path:"/owner_detail/:id",exact:!0,component:P}),Object(p.jsx)(y.b,{path:"/inventory_detail/:id",exact:!0,component:X}),Object(p.jsx)(y.b,{path:"/category_add",children:Object(p.jsx)(L,{})}),Object(p.jsx)(y.b,{path:"/departament_add",children:Object(p.jsx)(I,{})}),Object(p.jsx)(y.b,{path:"/owner_add",children:Object(p.jsx)(B,{})}),Object(p.jsx)(y.b,{path:"/inventory_add",children:Object(p.jsx)(H,{})})]})})]})}}]),a}(n.a.Component),q=J,$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),$()},69:function(e,t,a){},70:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.9fdd4518.chunk.js.map