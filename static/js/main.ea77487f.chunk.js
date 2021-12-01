(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(69),a(29)),l=a(30),o=a(35),d=a(34),j=(a(70),a(105)),b=a(102),m=a(106),u=a(107),h=a(64),x=a(103),p=a(8),O=a(0),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)(j.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(O.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(O.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(O.jsxs)(m.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(p.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(p.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(p.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(p.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})})]}),Object(O.jsxs)(u.a,{className:"d-flex",children:[Object(O.jsx)(h.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(O.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})})}}]),a}(c.a.Component),v=f,y=a(13),g=a(104),N=a(7),w=a.n(N),S=a(11),_=a(4),D=a(12),C=a.n(D),k="http://127.0.0.1:8000/";var T=function(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(Object(S.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C()({method:"GET",url:k+"api/v1/".concat(e.name,"/")}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)}))),[]),c};function E(){var e=1,t=0,a=0;return T({name:"inventory"}).map((function(e){return a+=e.price,t++})),Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(O.jsxs)("p",{className:"text-end text-light",children:["Total: ",t," pcs, ",a," $"]}),Object(O.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Serial"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{children:"Owner"})]})}),Object(O.jsxs)("tbody",{children:[T({name:"inventory"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e++}),Object(O.jsx)("td",{children:t.serial_number}),Object(O.jsx)("td",{children:Object(O.jsx)(p.b,{to:{pathname:"/inventory_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.title})}),Object(O.jsxs)("td",{className:"text-end",children:[t.price," $"]}),Object(O.jsx)("td",{children:t.owner?Object(O.jsxs)(p.b,{to:{pathname:"/owner_detail/".concat(t.owner.id),fromDashboard:!1},children:[t.owner.surname," ",t.owner.name[0],"."]}):"-IN STOCK-"})]},t.id)})),Object(O.jsx)("tr",{})]})]}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(p.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function A(){var e=1;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Categories"}),Object(O.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center shadow-lg rounded",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Description"})]})}),Object(O.jsx)("tbody",{children:T({name:"category"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"col-1",children:e++}),Object(O.jsx)("td",{className:"col-4 text-start",children:Object(O.jsx)(p.b,{to:{pathname:"/category_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.category_title})}),Object(O.jsx)("td",{className:"col-6",children:t.category_description})]},t.id)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(p.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function F(){var e=1;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(O.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Departament"})]})}),Object(O.jsx)("tbody",{children:T({name:"owner"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e++}),Object(O.jsx)("td",{children:Object(O.jsxs)(p.b,{to:{pathname:"/owner_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:[t.surname," ",t.name[0],"."]})}),Object(O.jsx)("td",{children:t.departament?Object(O.jsx)(p.b,{to:{pathname:"/departament_detail/".concat(t.departament.id),fromDashboard:!1},className:"",children:t.departament.departament_title}):"-"})]},t.id)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(p.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function P(){var e=1;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(O.jsxs)(g.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Description"})]})}),Object(O.jsx)("tbody",{children:T({name:"departament"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"col-1",children:e++}),Object(O.jsx)("td",{className:"col-4 text-start",children:Object(O.jsx)(p.b,{to:{pathname:"/departament_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.departament_title})}),Object(O.jsx)("td",{className:"col-7",children:t.departament_description})]},t.id)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(p.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}var I=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null}("csrftoken");function L(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],l=s[1],o=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("category_title",a),t.append("category_description",i),!a){e.next=8;break}return e.next=6,C()({headers:{"X-CSRFToken":I},method:"post",url:k+"api/v1/category/",data:t}).then((function(e){alert("Category ".concat(a," has been added"))}));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:o,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function R(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(""),d=Object(_.a)(o,2),j=d[0],b=d[1],m=Object(n.useState)(""),u=Object(_.a)(m,2),h=u[0],x=u[1],p=Object(n.useState)([]),f=Object(_.a)(p,2),v=f[0],y=f[1];Object(n.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({method:"GET",url:k+"api/v1/departament/"}).then((function(e){y(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]);var g=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",a),t.append("surname",i),t.append("owner_description",j),t.append("departament",h),!i||!a){e.next=10;break}return e.next=8,C()({headers:{"X-CSRFToken":I},method:"post",url:k+"api/v1/owner/",data:t}).then((function(e){alert("Owner ".concat(i," ").concat(a," has been added"))}));case 8:e.next=11;break;case 10:alert("Surname & Name must be added");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:g,children:[Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return l(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return x(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function H(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],l=s[1],o=Object(n.useState)(""),d=Object(_.a)(o,2),j=d[0],b=d[1],m=Object(n.useState)(""),u=Object(_.a)(m,2),h=u[0],x=u[1],p=Object(n.useState)(""),f=Object(_.a)(p,2),v=f[0],y=f[1],g=Object(n.useState)(""),N=Object(_.a)(g,2),D=N[0],T=N[1],E=Object(n.useState)(""),A=Object(_.a)(E,2),F=A[0],P=A[1],L=Object(n.useState)([]),R=Object(_.a)(L,2),H=R[0],X=R[1],B=Object(n.useState)([]),z=Object(_.a)(B,2),G=z[0],M=z[1];Object(n.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({method:"GET",url:k+"api/v1/owner/"}).then((function(e){M(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({method:"GET",url:k+"api/v1/category/"}).then((function(e){X(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]);var $=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("title",a),t.append("inventory_description",i),t.append("serial_number",j),t.append("price",h),t.append("date_purchase",v),t.append("category",D),t.append("owner",F),!(a&&h&&j)){e.next=13;break}return e.next=11,C()({headers:{"X-CSRFToken":I},method:"post",url:k+"api/v1/inventory/",data:t}).then((function(e){alert("Inventory ".concat(a," has been added")),console.log(t)}));case 11:e.next=14;break;case 13:alert("Title, Serial number & Price must be added");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:$,children:[Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return T(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select category"}),H.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(O.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return P(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select owner"}),G.map((function(e){return Object(O.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(O.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return l(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:h,onChange:function(e){return x(e.target.value)}}),Object(O.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function X(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],l=s[1],o=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=8;break}return e.next=6,C()({headers:{"X-CSRFToken":I},method:"post",url:k+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(a," has been added"))}));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:o,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var B=a(108),z=function(e){var t=Object(y.f)(),a=e.name,n=e.id,c=function(){var e=Object(S.a)(w.a.mark((function e(c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!window.confirm("Delete ".concat(a,"... Are you sure?"))){e.next=4;break}return e.next=4,C()({headers:{"X-CSRFToken":I},method:"delete",url:k+"api/v1/".concat(a,"/").concat(n)}).then((function(e){alert("The ".concat(a," was been deleted"))})).then(t.push("/".concat(a)),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:c,children:Object(O.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})};var G=function(e){var t=Object(n.useState)({}),a=Object(_.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(Object(S.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C()({method:"GET",url:k+"api/v1/".concat(e.name,"/").concat(e.id)}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)}))),[e.id]),c};function M(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1]),r=Object(y.f)(),s=e.id,i=e.name,l=Object(n.useState)(e.title),o=Object(_.a)(l,2),d=o[0],j=o[1],b=Object(n.useState)(e.description),m=Object(_.a)(b,2),u=m[0],h=m[1],x={category_title:d,category_description:u},p=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":I},method:"put",url:k+"api/v1/".concat(i,"/").concat(s,"/"),data:x}).then((function(e){c(e.data),alert("The ".concat(i," was been edited"))})).then(r.push("/".concat(i)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm mt-5",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit category"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:p,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:d,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}var $=function(){return Object(O.jsx)("div",{className:"me-5",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(O.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(O.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})})};function J(e){var t=e.match.params.id,a=G({name:"category",id:t});return Object(O.jsxs)(p.a,{children:[Object(O.jsx)("div",{className:"container lg-w-50",children:Object(O.jsxs)(B.a,{border:"dark",children:[Object(O.jsx)(B.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:"Category detail"}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(p.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)($,{})}),Object(O.jsx)(z,{id:t,name:"category"})]})]})}),Object(O.jsxs)(B.a.Body,{children:[Object(O.jsx)(B.a.Title,{children:a.category_title}),Object(O.jsx)(B.a.Text,{children:a.category_description})]})]})}),Object(O.jsx)(y.a,{path:"/category_edit/:id",children:Object(O.jsx)(M,{id:t,name:"category",title:a.category_title,description:a.category_description})})]})}function K(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1],Object(y.f)()),r=e.id,s=e.name,i=Object(n.useState)(e.ownerName),l=Object(_.a)(i,2),o=l[0],d=l[1],j=Object(n.useState)(e.ownerSurname),b=Object(_.a)(j,2),m=b[0],u=b[1],h=Object(n.useState)(e.ownerDescription),x=Object(_.a)(h,2),p=x[0],f=x[1],v=Object(n.useState)(e.ownerDepartament),g=Object(_.a)(v,2),N=g[0],D=g[1],E={name:o,surname:m,owner_description:p,departament:N},A=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":I},method:"put",url:k+"api/v1/".concat(s,"/").concat(r,"/"),data:E}).then((function(e){console.log(e.data),alert("The ".concat(s," was been edited"))})).then(c.push("/".concat(s)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit Owner"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:A,children:[Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"ownerSurname",value:m,onChange:function(e){return u(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"ownerName",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"ownerDescription",value:p,onChange:function(e){return f(e.target.value)}}),Object(O.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return D(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select departament"}),T({name:"departament"}).map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function q(e){var t=e.match.params.id,a=G({name:"owner",id:t});return Object(O.jsxs)(p.a,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(B.a,{border:"dark",children:[Object(O.jsx)(B.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:"Owner detail"}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(p.b,{to:{pathname:"/owner_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)($,{})}),Object(O.jsx)(z,{id:t,name:"owner"})]})]})}),Object(O.jsxs)(B.a.Body,{children:[Object(O.jsxs)(B.a.Title,{children:[a.surname," ",a.name]}),Object(O.jsx)(B.a.Text,{children:a.owner_description}),Object(O.jsx)(B.a.Text,{children:a.departament?a.departament.departament_title:"-"})]})]})}),Object(O.jsx)(y.a,{path:"/owner_edit/:id",children:Object(O.jsx)(K,{id:t,name:"owner",ownerName:a.name,ownerSurname:a.surname,ownerDescription:a.owner_description,ownerCategory:a.departament})})]})}function Q(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1]),r=Object(y.f)(),s=e.id,i=e.name,l=Object(n.useState)(e.title),o=Object(_.a)(l,2),d=o[0],j=o[1],b=Object(n.useState)(e.description),m=Object(_.a)(b,2),u=m[0],h=m[1],x={departament_title:d,departament_description:u},p=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":I},method:"put",url:k+"api/v1/".concat(i,"/").concat(s,"/"),data:x}).then((function(e){c(e.data),alert("The ".concat(i," was been edited"))})).then(r.push("/".concat(i)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm mt-5",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit Departament"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:p,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:d,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var U=function(e){var t=e.match.params.id,a=G({name:"departament",id:t});return Object(O.jsxs)(p.a,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(B.a,{border:"dark",children:[Object(O.jsx)(B.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(p.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)($,{})}),Object(O.jsx)(z,{id:t,name:"departament"})]})]})}),Object(O.jsxs)(B.a.Body,{children:[Object(O.jsx)(B.a.Title,{children:a.departament_title}),Object(O.jsx)(B.a.Text,{children:a.departament_description})]})]})}),Object(O.jsx)(y.a,{path:"/category_edit/:id",children:Object(O.jsx)(Q,{id:t,name:"departament",title:a.departament_title,description:a.departament_description})})]})};function V(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1]),r=Object(y.f)(),s=e.id,i=e.name,l=Object(n.useState)(e.title),o=Object(_.a)(l,2),d=o[0],j=o[1],b=Object(n.useState)(e.inventoryDescription),m=Object(_.a)(b,2),u=m[0],h=m[1],x=Object(n.useState)(e.serialNumber),p=Object(_.a)(x,2),f=p[0],v=p[1],g=Object(n.useState)(e.price),N=Object(_.a)(g,2),D=N[0],E=N[1],A=Object(n.useState)(e.datePurchase),F=Object(_.a)(A,2),P=F[0],L=F[1],R=Object(n.useState)([]),H=Object(_.a)(R,2),X=H[0],B=H[1],z=Object(n.useState)([]),G=Object(_.a)(z,2),M=G[0],$=G[1],J={title:d,inventory_description:u,serial_number:f,price:D,date_purchase:P,category:X.id,owner:M.id};console.log(J);var K=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":I},method:"put",url:k+"api/v1/".concat(i,"/").concat(s,"/"),data:J}).then((function(e){c(e.data),alert("The ".concat(i," was been edited"))})).then(r.push("/".concat(i)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit Inventory"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:K,children:[Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return B(e.target.value)},children:[Object(O.jsx)("option",{children:"Select category"}),T({name:"category"}).map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(O.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return $(e.target.value)},children:[Object(O.jsx)("option",{children:"Select owner"}),T({name:"owner"}).map((function(e){return Object(O.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(O.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:d,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:u,onChange:function(e){return h(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:f,onChange:function(e){return v(e.target.value)}}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:D,onChange:function(e){return E(e.target.value)}}),Object(O.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:P,onChange:function(e){return L(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function W(e){var t=e.match.params.id,a=G({name:"inventory",id:t});return Object(O.jsxs)(p.a,{children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(O.jsxs)(B.a,{border:"dark",children:[Object(O.jsx)(B.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:Object(O.jsx)("span",{className:"text-muted",children:"Serial Number: "})}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(p.b,{to:{pathname:"/inventory_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)($,{})}),Object(O.jsx)(z,{id:t,name:"inventory"})]})]})}),Object(O.jsxs)(B.a.Body,{children:[Object(O.jsx)(B.a.Title,{children:Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"text-muted",children:"Title: "}),a.title]})}),Object(O.jsx)(B.a.Text,{children:Object(O.jsx)(g.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"",children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"col-3",children:[Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Serial: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Category: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Owner: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Price: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Date of purchase: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Description: "})]}),Object(O.jsxs)("td",{className:"col-9",children:[Object(O.jsx)("p",{className:"ms-2",children:a.serial_number}),Object(O.jsx)("p",{className:"ms-2",children:a.category?a.category.category_title:"---"}),Object(O.jsx)("p",{className:"ms-2",children:a.owner?"".concat(a.owner.surname," ").concat(a.owner.name):"-IN STOCK-"}),Object(O.jsxs)("p",{className:"ms-2",children:[a.price,"$"]}),Object(O.jsx)("p",{className:"ms-2",children:a.date_purchase}),Object(O.jsx)("p",{className:"ms-2",children:a.inventory_description})]})]})})})})]})]})]}),Object(O.jsx)(y.a,{path:"/inventory_edit/:id",children:Object(O.jsx)(V,{id:t,name:"inventory",title:a.title,inventoryDescription:a.inventory_description,serialNumber:a.serial_number,price:a.price,datePurchase:a.date_purchase,inventoryCategory:a.category,inventoryOwner:a.owner})})]})}var Y=function(){return Object(O.jsx)("section",{class:"vh-100",style:"background-color: #9A616D;",children:Object(O.jsx)("div",{class:"container py-5 h-100",children:Object(O.jsx)("div",{class:"row d-flex justify-content-center align-items-center h-100",children:Object(O.jsx)("div",{class:"col col-xl-10",children:Object(O.jsx)("div",{class:"card",style:"border-radius: 1rem;",children:Object(O.jsxs)("div",{class:"row g-0",children:[Object(O.jsx)("div",{class:"col-md-6 col-lg-5 d-none d-md-block",children:Object(O.jsx)("img",{src:"https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img1.jpg",alt:"login form",class:"img-fluid",style:"border-radius: 1rem 0 0 1rem;"})}),Object(O.jsx)("div",{class:"col-md-6 col-lg-7 d-flex align-items-center",children:Object(O.jsx)("div",{class:"card-body p-4 p-lg-5 text-black",children:Object(O.jsxs)("form",{children:[Object(O.jsxs)("div",{class:"d-flex align-items-center mb-3 pb-1",children:[Object(O.jsx)("i",{class:"fas fa-cubes fa-2x me-3",style:"color: #ff6219;"}),Object(O.jsx)("span",{class:"h1 fw-bold mb-0",children:"Logo"})]}),Object(O.jsx)("h5",{class:"fw-normal mb-3 pb-3",style:"letter-spacing: 1px;",children:"Sign into your account"}),Object(O.jsxs)("div",{class:"form-outline mb-4",children:[Object(O.jsx)("input",{type:"email",id:"form2Example17",class:"form-control form-control-lg"}),Object(O.jsx)("label",{class:"form-label",for:"form2Example17",children:"Email address"})]}),Object(O.jsxs)("div",{class:"form-outline mb-4",children:[Object(O.jsx)("input",{type:"password",id:"form2Example27",class:"form-control form-control-lg"}),Object(O.jsx)("label",{class:"form-label",for:"form2Example27",children:"Password"})]}),Object(O.jsx)("div",{class:"pt-1 mb-4",children:Object(O.jsx)("button",{class:"btn btn-dark btn-lg btn-block",type:"button",children:"Login"})}),Object(O.jsx)("a",{class:"small text-muted",href:"#!",children:"Forgot password?"}),Object(O.jsxs)("p",{class:"mb-5 pb-lg-2",style:"color: #393f81;",children:["Don't have an account? ",Object(O.jsx)("a",{href:"#!",style:"color: #393f81;",children:"Register here"})]}),Object(O.jsx)("a",{href:"#!",class:"small text-muted",children:"Terms of use."}),Object(O.jsx)("a",{href:"#!",class:"small text-muted",children:"Privacy policy"})]})})})]})})})})})})},Z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(p.a,{children:[Object(O.jsx)(v,{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{path:"/category",children:Object(O.jsx)(A,{})}),Object(O.jsx)(y.a,{path:"/departament",children:Object(O.jsx)(P,{})}),Object(O.jsx)(y.a,{path:"/owner",children:Object(O.jsx)(F,{})}),Object(O.jsx)(y.a,{path:"/inventory",children:Object(O.jsx)(E,{})}),Object(O.jsx)(y.a,{path:"/category_detail/:id",exact:!0,component:J}),Object(O.jsx)(y.a,{path:"/departament_detail/:id",exact:!0,component:U}),Object(O.jsx)(y.a,{path:"/owner_detail/:id",exact:!0,component:q}),Object(O.jsx)(y.a,{path:"/inventory_detail/:id",exact:!0,component:W}),Object(O.jsx)(y.a,{path:"/category_add",children:Object(O.jsx)(L,{})}),Object(O.jsx)(y.a,{path:"/departament_add",children:Object(O.jsx)(X,{})}),Object(O.jsx)(y.a,{path:"/owner_add",children:Object(O.jsx)(R,{})}),Object(O.jsx)(y.a,{path:"/inventory_add",children:Object(O.jsx)(H,{})}),Object(O.jsx)(y.a,{path:"/login",children:Object(O.jsx)(Y,{})})]})})]})}}]),a}(c.a.Component),ee=Z;s.a.render(Object(O.jsx)(ee,{}),document.getElementById("root"))},69:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.ea77487f.chunk.js.map