(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),i=(a(69),a(25)),o=a(26),l=a(32),d=a(31),j=(a(70),a(105)),m=a(102),u=a(106),b=a(107),h=a(64),p=a(103),x=a(7),O=a.p+"static/media/logo.01bc8a53.png",f=a(0),v=function(){return Object(f.jsx)(j.a,{bg:"light",expand:"lg",children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(j.a.Brand,{href:"/",children:Object(f.jsx)("img",{src:O,alt:"Ateca logo",width:"150"})}),Object(f.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(f.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(f.jsxs)(u.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(f.jsx)(u.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ",children:"Category"})}),Object(f.jsx)(u.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ",children:"Departament"})}),Object(f.jsx)(u.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ",children:"Owner"})}),Object(f.jsx)(u.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})}),Object(f.jsx)(u.a.Link,{children:Object(f.jsx)(x.b,{to:{pathname:"/auth",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Login"})})]}),Object(f.jsxs)(b.a,{className:"d-flex",children:[Object(f.jsx)(h.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(f.jsx)(p.a,{variant:"outline-success",children:"Search"})]})]})]})})},g=a(13),y=a(104),N=a(8),w=a.n(N),_=a(12),S=a(5),D=a(11),k=a.n(D),C="http://ateca.cn73530.tmweb.ru/";var T=function(e){var t=Object(n.useState)([]),a=Object(S.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(_.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"GET",url:C+"api/v1/".concat(e.name,"/")}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),c};function A(){var e=1,t=0,a=0;return T({name:"inventory"}).map((function(e){return a+=e.price,t++})),Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(f.jsxs)("p",{className:"text-end text-light",children:["Total: ",t," pcs, ",a," $"]}),Object(f.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Serial"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Price"}),Object(f.jsx)("th",{children:"Owner"})]})}),Object(f.jsxs)("tbody",{children:[T({name:"inventory"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e++}),Object(f.jsx)("td",{children:t.serial_number}),Object(f.jsx)("td",{children:Object(f.jsx)(x.b,{to:{pathname:"/inventory_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.title})}),Object(f.jsxs)("td",{className:"text-end",children:[t.price," $"]}),Object(f.jsx)("td",{children:t.owner?Object(f.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(t.owner.id),fromDashboard:!1},children:[t.owner.surname," ",t.owner.name[0],"."]}):"-IN STOCK-"})]},t.id)})),Object(f.jsx)("tr",{})]})]}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function I(){var e=1;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Categories"}),Object(f.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center shadow-lg rounded",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Description"})]})}),Object(f.jsx)("tbody",{children:T({name:"category"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"col-1",children:e++}),Object(f.jsx)("td",{className:"col-4 text-start",children:Object(f.jsx)(x.b,{to:{pathname:"/category_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.category_title})}),Object(f.jsx)("td",{className:"col-6",children:t.category_description})]},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function z(){var e=1;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(f.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Departament"})]})}),Object(f.jsx)("tbody",{children:T({name:"owner"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e++}),Object(f.jsx)("td",{children:Object(f.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:[t.surname," ",t.name[0],"."]})}),Object(f.jsx)("td",{children:t.departament?Object(f.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(t.departament.id),fromDashboard:!1},className:"",children:t.departament.departament_title}):"-"})]},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function E(){var e=1;return Object(f.jsxs)("div",{className:"",children:[Object(f.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(f.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"\u2116"}),Object(f.jsx)("th",{children:"Title"}),Object(f.jsx)("th",{children:"Description"})]})}),Object(f.jsx)("tbody",{children:T({name:"departament"}).map((function(t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"col-1",children:e++}),Object(f.jsx)("td",{className:"col-4 text-start",children:Object(f.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.departament_title})}),Object(f.jsx)("td",{className:"col-7",children:t.departament_description})]},t.id)}))})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)(x.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(f.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}!function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}}("csrftoken");function L(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(_.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=new FormData).append("category_title",a),n.append("category_description",i),!a){e.next=9;break}return e.next=7,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"post",url:C+"api/v1/category/",data:n}).then((function(e){"Created"===e.statusText?alert("Category ".concat(a," has been added")):alert("Something wrong")}));case 7:e.next=10;break;case 9:alert("Please enter any title");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:l,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function J(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(S.a)(l,2),j=d[0],m=d[1],u=Object(n.useState)(""),b=Object(S.a)(u,2),h=b[0],p=b[1],x=Object(n.useState)([]),O=Object(S.a)(x,2),v=O[0],g=O[1];Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:C+"api/v1/departament/"}).then((function(e){g(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",a),t.append("surname",i),t.append("owner_description",j),t.append("departament",h),!i||!a){e.next=10;break}return e.next=8,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"post",url:C+"api/v1/owner/",data:t}).then(alert("Owner ".concat(i," ").concat(a," has been added")));case 8:e.next=11;break;case 10:alert("Surname & Name must be added");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:y,children:[Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return m(e.target.value)}}),Object(f.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return p(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function P(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(S.a)(l,2),j=d[0],m=d[1],u=Object(n.useState)(""),b=Object(S.a)(u,2),h=b[0],p=b[1],x=Object(n.useState)(""),O=Object(S.a)(x,2),v=O[0],g=O[1],y=Object(n.useState)(""),N=Object(S.a)(y,2),D=N[0],T=N[1],A=Object(n.useState)(""),I=Object(S.a)(A,2),z=I[0],E=I[1],L=Object(n.useState)([]),J=Object(S.a)(L,2),P=J[0],H=J[1],W=Object(n.useState)([]),B=Object(S.a)(W,2),G=B[0],F=B[1];Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:C+"api/v1/owner/"}).then((function(e){F(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(_.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"GET",url:C+"api/v1/category/"}).then((function(e){H(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var M=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("title",a),t.append("inventory_description",i),t.append("serial_number",j),t.append("price",h),t.append("date_purchase",v),t.append("category",D),t.append("owner",z),!(a&&h&&j)){e.next=13;break}return e.next=11,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"post",url:C+"api/v1/inventory/",data:t}).then(alert("Inventory ".concat(a," has been added")));case 11:e.next=14;break;case 13:alert("Title, Serial number & Price must be added");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:M,children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return T(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select category"}),P.map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(f.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return E(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select owner"}),G.map((function(e){return Object(f.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(f.jsxs)("div",{className:"d-flex my-1",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Title",name:"title",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return m(e.target.value)}})]}),Object(f.jsx)("input",{type:"textarea",className:"form-control mb-1",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:h,onChange:function(e){return p(e.target.value)}}),Object(f.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return g(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function H(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(S.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=8;break}return e.next=6,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"post",url:C+"api/v1/departament/",data:t}).then(alert("departament ".concat(a," has been added")));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:l,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var W=a(108),B=function(e){var t=Object(g.f)(),a=e.name,n=e.id,c=function(){var e=Object(_.a)(w.a.mark((function e(c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!window.confirm("Delete ".concat(a,"... Are you sure?"))){e.next=4;break}return e.next=4,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"delete",url:C+"api/v1/".concat(a,"/").concat(n)}).then(t.push("/".concat(a)),alert("The ".concat(a," was been deleted")),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:c,children:Object(f.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})};var G=function(e){var t=Object(n.useState)({}),a=Object(S.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(_.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"GET",url:C+"api/v1/".concat(e.name,"/").concat(e.id)}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.id]),c};function F(e){var t=Object(g.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.title),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.description),d=Object(S.a)(l,2),j=d[0],m=d[1],u={category_title:i,category_description:j},b=function(){var e=Object(_.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:u}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm mt-5",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit category"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:b,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:j,onChange:function(e){return m(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}var M=function(){return Object(f.jsx)("div",{className:"me-5",children:Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(f.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(f.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})})};function $(e){var t=e.match.params.id,a=G({name:"category",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsx)("div",{className:"container lg-w-50",children:Object(f.jsxs)(W.a,{border:"dark",children:[Object(f.jsx)(W.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:"Category detail"}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)(M,{})}),Object(f.jsx)(B,{id:t,name:"category"})]})]})}),Object(f.jsxs)(W.a.Body,{children:[Object(f.jsx)(W.a.Title,{children:a.category_title}),Object(f.jsx)(W.a.Text,{children:a.category_description})]})]})}),Object(f.jsx)(g.a,{path:"/category_edit/:id",children:Object(f.jsx)(F,{id:t,name:"category",title:a.category_title,description:a.category_description})})]})}function K(e){var t=Object(g.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.ownerName),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.ownerSurname),d=Object(S.a)(l,2),j=d[0],m=d[1],u=Object(n.useState)(e.ownerDescription),b=Object(S.a)(u,2),h=b[0],p=b[1],x=Object(n.useState)(e.ownerDepartament),O=Object(S.a)(x,2),v=O[0],y=O[1],N={name:i,surname:j,owner_description:h,departament:v},D=function(){var e=Object(_.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:N}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit Owner"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:D,children:[Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"ownerSurname",value:j,onChange:function(e){return m(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"ownerName",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(f.jsxs)("div",{className:"d-flex mb-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"ownerDescription",value:h,onChange:function(e){return p(e.target.value)}}),Object(f.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return y(e.target.value)},children:[Object(f.jsx)("option",{value:"",children:"Select departament"}),T({name:"departament"}).map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function U(e){var t=e.match.params.id,a=G({name:"owner",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(W.a,{border:"dark",children:[Object(f.jsx)(W.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:"Owner detail"}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/owner_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)(M,{})}),Object(f.jsx)(B,{id:t,name:"owner"})]})]})}),Object(f.jsxs)(W.a.Body,{children:[Object(f.jsxs)(W.a.Title,{children:[a.surname," ",a.name]}),Object(f.jsx)(W.a.Text,{children:a.owner_description}),Object(f.jsx)(W.a.Text,{children:a.departament?a.departament.departament_title:"-"})]})]})}),Object(f.jsx)(g.a,{path:"/owner_edit/:id",children:Object(f.jsx)(K,{id:t,name:"owner",ownerName:a.name,ownerSurname:a.surname,ownerDescription:a.owner_description,ownerCategory:a.departament})})]})}function q(e){var t=Object(g.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.title),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.description),d=Object(S.a)(l,2),j=d[0],m=d[1],u={departament_title:i,departament_description:j},b=function(){var e=Object(_.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:u}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm mt-5",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit Departament"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:b,children:[Object(f.jsxs)("div",{className:"d-flex my-2",children:[Object(f.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:j,onChange:function(e){return m(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var Q=function(e){var t=e.match.params.id,a=G({name:"departament",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(W.a,{border:"dark",children:[Object(f.jsx)(W.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)(M,{})}),Object(f.jsx)(B,{id:t,name:"departament"})]})]})}),Object(f.jsxs)(W.a.Body,{children:[Object(f.jsx)(W.a.Title,{children:a.departament_title}),Object(f.jsx)(W.a.Text,{children:a.departament_description})]})]})}),Object(f.jsx)(g.a,{path:"/category_edit/:id",children:Object(f.jsx)(q,{id:t,name:"departament",title:a.departament_title,description:a.departament_description})})]})};function R(e){var t=Object(g.f)(),a=e.id,c=e.name,r=Object(n.useState)(e.title),s=Object(S.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(e.inventoryDescription),d=Object(S.a)(l,2),j=d[0],m=d[1],u=Object(n.useState)(e.serialNumber),b=Object(S.a)(u,2),h=b[0],p=b[1],x=Object(n.useState)(e.price),O=Object(S.a)(x,2),v=O[0],y=O[1],N=Object(n.useState)(e.datePurchase),D=Object(S.a)(N,2),A=D[0],I=D[1],z=Object(n.useState)([]),E=Object(S.a)(z,2),L=E[0],J=E[1],P=Object(n.useState)([]),H=Object(S.a)(P,2),W=H[0],B=H[1],G={title:i,inventory_description:j,serial_number:h,price:v,date_purchase:A,category:L.id,owner:W.id},F=function(){var e=Object(_.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,k()({headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))},method:"put",url:C+"api/v1/".concat(c,"/").concat(a,"/"),data:G}).then(alert("The ".concat(c," was been edited")),t.push("/".concat(c)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container sm",children:[Object(f.jsx)("h3",{className:"text-center",children:"Edit Inventory"}),Object(f.jsxs)("form",{className:"form-control p-2",onSubmit:F,children:[Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return J(e.target.value)},children:[Object(f.jsx)("option",{children:"Select category"}),T({name:"category"}).map((function(e){return Object(f.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(f.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return B(e.target.value)},children:[Object(f.jsx)("option",{children:"Select owner"}),T({name:"owner"}).map((function(e){return Object(f.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(f.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:i,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:j,onChange:function(e){return m(e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:h,onChange:function(e){return p(e.target.value)}}),Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:v,onChange:function(e){return y(e.target.value)}}),Object(f.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:A,onChange:function(e){return I(e.target.value)}})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function V(e){var t=e.match.params.id,a=G({name:"inventory",id:t});return Object(f.jsxs)(x.a,{children:[Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(f.jsxs)(W.a,{border:"dark",children:[Object(f.jsx)(W.a.Header,{children:Object(f.jsxs)("div",{className:"d-flex",children:[Object(f.jsx)("div",{className:"me-5",children:Object(f.jsx)("span",{className:"text-muted",children:"Serial Number: "})}),Object(f.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(f.jsx)(x.b,{to:{pathname:"/inventory_edit/".concat(t),fromDashboard:!1},className:"",children:Object(f.jsx)(M,{})}),Object(f.jsx)(B,{id:t,name:"inventory"})]})]})}),Object(f.jsxs)(W.a.Body,{children:[Object(f.jsx)(W.a.Title,{children:Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"text-muted",children:"Title: "}),a.title]})}),Object(f.jsx)(W.a.Text,{children:Object(f.jsx)(y.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"",children:Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsxs)("td",{className:"col-3",children:[Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Serial: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Category: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Owner: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Price: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Date of purchase: "}),Object(f.jsx)("p",{className:"text-muted text-end me-2",children:"Description: "})]}),Object(f.jsxs)("td",{className:"col-9",children:[Object(f.jsx)("p",{className:"ms-2",children:a.serial_number}),Object(f.jsx)("p",{className:"ms-2",children:a.category?a.category.category_title:"---"}),Object(f.jsx)("p",{className:"ms-2",children:a.owner?"".concat(a.owner.surname," ").concat(a.owner.name):"-IN STOCK-"}),Object(f.jsxs)("p",{className:"ms-2",children:[a.price,"$"]}),Object(f.jsx)("p",{className:"ms-2",children:a.date_purchase}),Object(f.jsx)("p",{className:"ms-2",children:a.inventory_description})]})]})})})})]})]})]}),Object(f.jsx)(g.a,{path:"/inventory_edit/:id",children:Object(f.jsx)(R,{id:t,name:"inventory",title:a.title,inventoryDescription:a.inventory_description,serialNumber:a.serial_number,price:a.price,datePurchase:a.date_purchase,inventoryCategory:a.category,inventoryOwner:a.owner})})]})}var X=a(2),Y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(e){var t=Object(X.a)({},e);return t[a]=n,t}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(b.a,{onSubmit:function(t){return e.props.handle_login(t,e.state)},className:"bg-light p-5 rounded shadow",children:[Object(f.jsx)("h4",{children:"Log In"}),Object(f.jsx)("label",{htmlFor:"username",children:"Username"}),Object(f.jsx)("input",{className:"form-control",type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),Object(f.jsx)("input",{type:"submit",className:"btn btn-secondary mt-5"})]})}}]),a}(c.a.Component),Z=Y;var ee=function(e){var t=Object(f.jsx)("ul",{children:Object(f.jsx)("li",{onClick:function(){return e.display_form("login")},children:"LOG IN"})}),a=Object(f.jsx)("ul",{children:Object(f.jsx)("li",{onClick:e.handle_logout,children:"LOG OUT"})});return Object(f.jsx)("div",{className:"text-light",children:e.logged_in?a:t})},te=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handle_login=function(e,t){e.preventDefault(),fetch("".concat(C,"api/auth/token-auth/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.user.username})}))},n.handle_logout=function(){localStorage.removeItem("token"),n.setState({logged_in:!1,username:""})},n.display_form=function(e){n.setState({displayed_form:e})},n.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.logged_in&&fetch("".concat(C,"api/auth/current_user/"),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username})}))}},{key:"render",value:function(){var e;if("login"===this.state.displayed_form)e=Object(f.jsx)(Z,{handle_login:this.handle_login});else e=null;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(ee,{logged_in:this.state.logged_in,display_form:this.display_form,handle_logout:this.handle_logout}),e,Object(f.jsx)("h4",{className:"mt-2 text-light text-center",children:this.state.logged_in?"Hello, ".concat(this.state.username):"Please Log In"})]})}}]),a}(n.Component),ae=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsxs)(x.a,{children:[Object(f.jsx)(v,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{path:"/category",children:Object(f.jsx)(I,{})}),Object(f.jsx)(g.a,{path:"/departament",children:Object(f.jsx)(E,{})}),Object(f.jsx)(g.a,{path:"/owner",children:Object(f.jsx)(z,{})}),Object(f.jsx)(g.a,{path:"/inventory",children:Object(f.jsx)(A,{})}),Object(f.jsx)(g.a,{path:"/category_detail/:id",exact:!0,component:$}),Object(f.jsx)(g.a,{path:"/departament_detail/:id",exact:!0,component:Q}),Object(f.jsx)(g.a,{path:"/owner_detail/:id",exact:!0,component:U}),Object(f.jsx)(g.a,{path:"/inventory_detail/:id",exact:!0,component:V}),Object(f.jsx)(g.a,{path:"/category_add",children:Object(f.jsx)(L,{})}),Object(f.jsx)(g.a,{path:"/departament_add",children:Object(f.jsx)(H,{})}),Object(f.jsx)(g.a,{path:"/owner_add",children:Object(f.jsx)(J,{})}),Object(f.jsx)(g.a,{path:"/inventory_add",children:Object(f.jsx)(P,{})}),Object(f.jsx)(g.a,{path:"/auth",children:Object(f.jsx)(te,{})})]})})]})}}]),a}(c.a.Component),ne=ae;s.a.render(Object(f.jsx)(ne,{}),document.getElementById("root"))},69:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.ebb80a79.chunk.js.map