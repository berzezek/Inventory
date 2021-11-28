(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),l=(a(69),a(20)),i=a(21),o=a(27),d=a(26),j=(a(70),a(71),a(106)),h=a(103),b=a(107),u=a(108),m=a(64),x=a(104),O=a(9),p=a(0),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{bg:"light",expand:"lg",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(j.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(p.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(p.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(p.jsxs)(b.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(p.jsx)(b.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(p.jsx)(b.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(p.jsx)(b.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(p.jsx)(b.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})}),Object(p.jsx)(b.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/login",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Login"})})]}),Object(p.jsxs)(u.a,{className:"d-flex",children:[Object(p.jsx)(m.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(p.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})})}}]),a}(c.a.Component),v=f,g=a(11),y=a(5),w=a(7),N=a.n(w),_=a(105),S="http://ateca.cn73530.tmweb.ru/";function C(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=1;return Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/inventory/"}).then((function(e){c(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(p.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Serial"}),Object(p.jsx)("th",{children:"Category"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Owner"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-2",children:e.serial_number}),Object(p.jsx)("td",{className:"col-2",children:e.category}),Object(p.jsx)("td",{className:"text-start col-2",children:Object(p.jsx)(O.b,{to:{pathname:"/inventory_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.title})}),Object(p.jsx)("td",{className:"col-3",children:e.inventory_description}),Object(p.jsx)("td",{className:"col-2",children:e.owner})]},e.id)}))})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function k(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=1;return Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Categories"}),Object(p.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(O.b,{to:{pathname:"/category_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.category_title})}),Object(p.jsx)("td",{className:"col-6",children:e.category_description})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function D(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=1;return Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(p.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Category"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsxs)(O.b,{to:{pathname:"/owner_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:[e.surname," ",e.name[0],"."]})}),Object(p.jsx)("td",{className:"col-5",children:e.owner_description}),Object(p.jsx)("td",{className:"col-2",children:e.category})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function T(){var e=Object(n.useState)([]),t=Object(y.a)(e,2),a=t[0],c=t[1],r=1;return Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/departament/"}).then((function(e){c(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(p.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(O.b,{to:{pathname:"/departament_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.departament_title})}),Object(p.jsx)("td",{className:"col-7",children:e.departament_description})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}var A=a(10),L=a.n(A),z=a(15);var E=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null}("csrftoken");function H(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(y.a)(r,2),l=s[0],i=s[1],o=function(){var e=Object(z.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=new FormData).append("category_title",a),n.append("category_description",l),!a){e.next=7;break}return e.next=7,N()({headers:{"X-CSRFToken":E},method:"post",url:S+"api/v1/category/",data:n}).then((function(e){alert("Category ".concat(a," has been added"))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:o,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function F(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(y.a)(r,2),l=s[0],i=s[1],o=Object(n.useState)(""),d=Object(y.a)(o,2),j=d[0],h=d[1],b=Object(n.useState)(""),u=Object(y.a)(b,2),m=u[0],x=u[1],O=Object(n.useState)([]),f=Object(y.a)(O,2),v=f[0],g=f[1];Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/departament/"}).then((function(e){g(e.data)}))}),[]);var w=function(){var e=Object(z.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=new FormData).append("name",a),n.append("surname",l),n.append("owner_description",j),n.append("departament",m),!l||!a){e.next=11;break}return e.next=9,N()({headers:{"X-CSRFToken":E},method:"post",url:S+"api/v1/owner/",data:n}).then((function(e){alert("Owner ".concat(l," ").concat(a," has been added"))}));case 9:e.next=12;break;case 11:alert("Surname & Name must be added");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:w,children:[Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:l,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return h(e.target.value)}}),Object(p.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return x(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function M(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(y.a)(r,2),l=s[0],i=s[1],o=Object(n.useState)(""),d=Object(y.a)(o,2),j=d[0],h=d[1],b=Object(n.useState)(""),u=Object(y.a)(b,2),m=u[0],x=u[1],O=Object(n.useState)(""),f=Object(y.a)(O,2),v=f[0],g=f[1],w=Object(n.useState)(""),_=Object(y.a)(w,2),C=_[0],k=_[1],D=Object(n.useState)(""),T=Object(y.a)(D,2),A=T[0],H=T[1],F=Object(n.useState)([]),M=Object(y.a)(F,2),I=M[0],B=M[1],G=Object(n.useState)([]),P=Object(y.a)(G,2),R=P[0],X=P[1];Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/owner/"}).then((function(e){X(e.data)}))}),[]),Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/category/"}).then((function(e){B(e.data)}))}),[]);var q=function(){var e=Object(z.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=new FormData).append("title",a),n.append("inventory_description",l),n.append("serial_number",j),n.append("price",m),n.append("date_purchase",v),n.append("category",C),n.append("owner",A),!(a&&m&&j)){e.next=14;break}return e.next=12,N()({headers:{"X-CSRFToken":E},method:"post",url:S+"api/v1/inventory/",data:n}).then((function(e){alert("Inventory ".concat(a," has been added")),console.log(n)}));case 12:e.next=15;break;case 14:alert("Title, Serial number & Price must be added");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:q,children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return k(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select category"}),I.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(p.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return H(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select owner"}),R.map((function(e){return Object(p.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(p.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:l,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return h(e.target.value)}}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:m,onChange:function(e){return x(e.target.value)}}),Object(p.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return g(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function I(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(y.a)(r,2),l=s[0],i=s[1],o=function(){var e=Object(z.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",l),!a){e.next=6;break}return e.next=6,N()({headers:{"X-CSRFToken":E},method:"post",url:S+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(a," has been added"))}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:o,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var B=a(109);function G(e){var t=e.match,a=Object(n.useState)({}),c=Object(y.a)(a,2),r=c[0],s=c[1],l=t.params.id,i=Object(g.f)();Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/category/".concat(l)}).then((function(e){s(e.data)}))}),[l]);var o=function(){var e=Object(z.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Delete... Are you sure?")){e.next=4;break}return e.next=4,N()({headers:{"X-CSRFToken":E},method:"delete",url:S+"api/v1/category/".concat(l)}).then((function(e){alert("Category was been deleted")})).then(i.push("/category"),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container lg-w-50",children:Object(p.jsxs)(B.a,{border:"dark",children:[Object(p.jsx)(B.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Category detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)("div",{className:"me-3",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:o,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})]})]})}),Object(p.jsxs)(B.a.Body,{children:[Object(p.jsx)(B.a.Title,{children:r.category_title}),Object(p.jsx)(B.a.Text,{children:r.category_description})]})]})})}function P(e){var t=e.match,a=Object(n.useState)({}),c=Object(y.a)(a,2),r=c[0],s=c[1],l=t.params.id,i=Object(g.f)();Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/owner/".concat(l)}).then((function(e){s(e.data)}))}),[l]);var o=function(){var e=Object(z.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Delete... Are you sure?")){e.next=4;break}return e.next=4,N()({headers:{"X-CSRFToken":E},method:"delete",url:S+"api/v1/owner/".concat(l)}).then((function(e){alert("Inventory was been deleted")})).then(i.push("/owner"),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(B.a,{border:"dark",children:[Object(p.jsx)(B.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Category detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)("div",{className:"me-3",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:o,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})]})]})}),Object(p.jsxs)(B.a.Body,{children:[Object(p.jsxs)(B.a.Title,{children:[r.surname," ",r.name]}),Object(p.jsx)(B.a.Text,{children:r.owner_description})]})]})})}var R=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(y.a)(a,2),r=c[0],s=c[1],l=t.params.id,i=Object(g.f)();Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/departament/".concat(l)}).then((function(e){s(e.data)}))}),[l]);var o=function(){var e=Object(z.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Delete... Are you sure?")){e.next=4;break}return e.next=4,N()({headers:{"X-CSRFToken":E},method:"delete",url:S+"api/v1/departament/".concat(l)}).then((function(e){alert("Departament was been deleted")})).then(i.push("/departament"),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(B.a,{border:"dark",children:[Object(p.jsx)(B.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)("div",{className:"me-3",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:o,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})]})]})}),Object(p.jsxs)(B.a.Body,{children:[Object(p.jsx)(B.a.Title,{children:r.departament_title}),Object(p.jsx)(B.a.Text,{children:r.departament_description})]})]})})};function X(e){var t=e.match,a=Object(n.useState)({}),c=Object(y.a)(a,2),r=c[0],s=c[1],l=t.params.id,i=Object(g.f)();Object(n.useEffect)((function(){N()({method:"GET",url:S+"api/v1/inventory/".concat(l)}).then((function(e){s(e.data)}))}),[l]);var o=function(){var e=Object(z.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!window.confirm("Delete... Are you sure?")){e.next=4;break}return e.next=4,N()({headers:{"X-CSRFToken":E},method:"delete",url:S+"api/v1/inventory/".concat(l)}).then((function(e){alert("Inventory was been deleted")})).then(i.push("/inventory"),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(p.jsxs)(B.a,{border:"dark",children:[Object(p.jsx)(B.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("div",{className:"me-5",children:[Object(p.jsx)("span",{className:"text-muted",children:"Serial Number: "}),r.serial_number]}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)("div",{className:"me-3",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})}),Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:o,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})]})]})}),Object(p.jsxs)(B.a.Body,{children:[Object(p.jsxs)(B.a.Title,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Title: "}),r.title]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Category: "}),Object(p.jsx)(O.b,{to:{pathname:"/category/".concat(r.category),fromDashboard:!1},children:r.category})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(p.jsx)(O.b,{to:{pathname:"/owner/".concat(r.owner),fromDashboard:!1},children:r.owner})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Price: "}),r.price,"$"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),r.date_purchase]})]}),Object(p.jsx)(B.a.Text,{children:r.inventory_description})]})]})]})}var q=function(e){var t=Object(p.jsx)("button",{onClick:function(){return e.display_form("login")},className:"btn btn-success",children:"login"}),a=Object(p.jsx)("button",{onClick:e.handle_logout,className:"btn btn-success",children:"login"});return Object(p.jsx)("div",{children:e.logged_in?a:t})},J=a(2),U=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(e){var t=Object(J.a)({},e);return t[a]=n,t}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(u.a,{onSubmit:function(t){return e.props.handle_login(t,e.state)},children:[Object(p.jsx)("h4",{children:"Log In"}),Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{className:"form-control",type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),Object(p.jsx)("input",{className:"btn btn-secondary",type:"submit"})]})}}]),a}(c.a.Component),W=U,$=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handle_login=function(e,t){e.preventDefault(),fetch("http://localhost:8000/token-auth/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.user.username})}))},n.handle_logout=function(){localStorage.removeItem("token"),n.setState({logged_in:!1,username:""})},n.display_form=function(e){n.setState({displayed_form:e})},n.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.logged_in&&fetch("http://127.0.0.1:8000/api/v1/current_user/",{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username})}))}},{key:"render",value:function(){var e;if("login"===this.state.displayed_form)e=Object(p.jsx)(W,{handle_login:this.handle_login});else e=null;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(q,{logged_in:this.state.logged_in,display_form:this.display_form,handle_logout:this.handle_logout}),e,Object(p.jsx)("h3",{children:this.state.logged_in?"Hello, ".concat(this.state.username):"Please Log In"})]})}}]),a}(n.Component),K=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(O.a,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{path:"/category",children:Object(p.jsx)(k,{})}),Object(p.jsx)(g.a,{path:"/departament",children:Object(p.jsx)(T,{})}),Object(p.jsx)(g.a,{path:"/owner",children:Object(p.jsx)(D,{})}),Object(p.jsx)(g.a,{path:"/inventory",children:Object(p.jsx)(C,{})}),Object(p.jsx)(g.a,{path:"/category_detail/:id",exact:!0,component:G}),Object(p.jsx)(g.a,{path:"/departament_detail/:id",exact:!0,component:R}),Object(p.jsx)(g.a,{path:"/owner_detail/:id",exact:!0,component:P}),Object(p.jsx)(g.a,{path:"/inventory_detail/:id",exact:!0,component:X}),Object(p.jsx)(g.a,{path:"/category_add",children:Object(p.jsx)(H,{})}),Object(p.jsx)(g.a,{path:"/departament_add",children:Object(p.jsx)(I,{})}),Object(p.jsx)(g.a,{path:"/owner_add",children:Object(p.jsx)(F,{})}),Object(p.jsx)(g.a,{path:"/inventory_add",children:Object(p.jsx)(M,{})}),Object(p.jsx)(g.a,{path:"/login",children:Object(p.jsx)($,{})})]})})]})}}]),a}(c.a.Component),Q=K,V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,110)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),V()},69:function(e,t,a){},70:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.60e17b09.chunk.js.map