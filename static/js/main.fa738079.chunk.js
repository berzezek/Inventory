(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(24),s=a.n(r),i=(a(69),a(27)),l=a(28),d=a(35),o=a(34),j=(a(70),a(105)),b=a(102),h=a(106),m=a(107),u=a(64),x=a(103),O=a(8),p=a(0),f=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(j.a,{bg:"light",expand:"lg",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(p.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(p.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(p.jsxs)(h.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})})]}),Object(p.jsxs)(m.a,{className:"d-flex",children:[Object(p.jsx)(u.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(p.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})})}}]),a}(n.a.Component),v=f,y=a(9),N=a(104),g=a(10),w=a.n(g),_=a(15),S=a(6),C=a(11),k=a.n(C),D="http://127.0.0.1:8000/";var T=function(e){var t=Object(c.useState)([]),a=Object(S.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)(Object(_.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"GET",url:D+"api/v1/".concat(e.name,"/")}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)}))),[]),n};function A(){var e=1;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(p.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Serial"}),Object(p.jsx)("th",{children:"Category"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Owner"})]})}),Object(p.jsx)("tbody",{children:T({name:"inventory"}).map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:e++}),Object(p.jsx)("td",{className:"col-2",children:t.serial_number}),Object(p.jsx)("td",{className:"col-2",children:t.category}),Object(p.jsx)("td",{className:"text-start col-2",children:Object(p.jsx)(O.b,{to:{pathname:"/inventory_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.title})}),Object(p.jsx)("td",{className:"col-3",children:t.inventory_description}),Object(p.jsx)("td",{className:"col-2",children:t.owner})]},t.id)}))})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function E(){var e=1;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Categories"}),Object(p.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center shadow-lg rounded",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:T({name:"category"}).map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:e++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(O.b,{to:{pathname:"/category_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.category_title})}),Object(p.jsx)("td",{className:"col-6",children:t.category_description})]},t.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function F(){var e=1;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(p.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Category"})]})}),Object(p.jsx)("tbody",{children:T({name:"owner"}).map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:e++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsxs)(O.b,{to:{pathname:"/owner_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:[t.surname," ",t.name[0],"."]})}),Object(p.jsx)("td",{className:"col-5",children:t.owner_description}),Object(p.jsx)("td",{className:"col-2",children:t.category})]},t.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function B(){var e=1;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(p.jsxs)(N.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:T({name:"departament"}).map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:e++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(O.b,{to:{pathname:"/departament_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.departament_title})}),Object(p.jsx)("td",{className:"col-7",children:t.departament_description})]},t.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}var H=function(e){for(var t=e+"=",a=document.cookie.split(";"),c=0;c<a.length;c++){for(var n=a[c];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}("csrftoken");function I(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(S.a)(r,2),i=s[0],l=s[1],d=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("category_title",a),t.append("category_description",i),!a){e.next=8;break}return e.next=6,k()({headers:{"X-CSRFToken":H},method:"post",url:D+"api/v1/category/",data:t}).then((function(e){alert("Category ".concat(a," has been added"))}));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function R(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(S.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)(""),o=Object(S.a)(d,2),j=o[0],b=o[1],h=Object(c.useState)(""),m=Object(S.a)(h,2),u=m[0],x=m[1],O=Object(c.useState)([]),f=Object(S.a)(O,2),v=f[0],y=f[1];Object(c.useEffect)((function(){k()({method:"GET",url:D+"api/v1/departament/"}).then((function(e){y(e.data)}))}),[]);var N=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",a),t.append("surname",i),t.append("owner_description",j),t.append("departament",u),!i||!a){e.next=10;break}return e.next=8,k()({headers:{"X-CSRFToken":H},method:"post",url:D+"api/v1/owner/",data:t}).then((function(e){alert("Owner ".concat(i," ").concat(a," has been added"))}));case 8:e.next=11;break;case 10:alert("Surname & Name must be added");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:N,children:[Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return b(e.target.value)}}),Object(p.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return x(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function X(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(S.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)(""),o=Object(S.a)(d,2),j=o[0],b=o[1],h=Object(c.useState)(""),m=Object(S.a)(h,2),u=m[0],x=m[1],O=Object(c.useState)(""),f=Object(S.a)(O,2),v=f[0],y=f[1],N=Object(c.useState)(""),g=Object(S.a)(N,2),C=g[0],T=g[1],A=Object(c.useState)(""),E=Object(S.a)(A,2),F=E[0],B=E[1],I=Object(c.useState)([]),R=Object(S.a)(I,2),X=R[0],G=R[1],L=Object(c.useState)([]),P=Object(S.a)(L,2),z=P[0],J=P[1];Object(c.useEffect)((function(){k()({method:"GET",url:D+"api/v1/owner/"}).then((function(e){J(e.data)}))}),[]),Object(c.useEffect)((function(){k()({method:"GET",url:D+"api/v1/category/"}).then((function(e){G(e.data)}))}),[]);var M=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("title",a),t.append("inventory_description",i),t.append("serial_number",j),t.append("price",u),t.append("date_purchase",v),t.append("category",C),t.append("owner",F),!(a&&u&&j)){e.next=13;break}return e.next=11,k()({headers:{"X-CSRFToken":H},method:"post",url:D+"api/v1/inventory/",data:t}).then((function(e){alert("Inventory ".concat(a," has been added")),console.log(t)}));case 11:e.next=14;break;case 13:alert("Title, Serial number & Price must be added");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:M,children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return T(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select category"}),X.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(p.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return B(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select owner"}),z.map((function(e){return Object(p.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(p.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return b(e.target.value)}}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:u,onChange:function(e){return x(e.target.value)}}),Object(p.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function G(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(S.a)(r,2),i=s[0],l=s[1],d=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=8;break}return e.next=6,k()({headers:{"X-CSRFToken":H},method:"post",url:D+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(a," has been added"))}));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var L=a(108),P=function(e){var t=Object(y.f)(),a=e.name,c=e.id,n=function(){var e=Object(_.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!window.confirm("Delete ".concat(a,"... Are you sure?"))){e.next=4;break}return e.next=4,k()({headers:{"X-CSRFToken":H},method:"delete",url:D+"api/v1/".concat(a,"/").concat(c)}).then((function(e){alert("The ".concat(a," was been deleted"))})).then(t.push("/".concat(a)),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:n,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})};var z=function(e){var t=Object(c.useState)({}),a=Object(S.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)(Object(_.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"GET",url:D+"api/v1/".concat(e.name,"/").concat(e.id)}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)}))),[e.id]),n};function J(e){e.match;var t=Object(c.useState)(""),a=Object(S.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(S.a)(s,2),l=i[0],d=i[1],o=Object(c.useState)(null),j=Object(S.a)(o,2),b=(j[0],j[1]);return Object(p.jsx)("div",{className:"container p-3",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{classNames:"form-group",children:[Object(p.jsx)("label",{htmlFor:"category_title",children:"category_title"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"category_title",placeholder:"category_title",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(p.jsxs)("div",{classNames:"form-group",children:[Object(p.jsx)("label",{htmlFor:"category_description",className:"mt-2",children:"category_description"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"category_description",placeholder:"category_description",value:l,onChange:function(e){return d(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",onClick:function(){k.a.put("http://127.0.0.1:8000/api/v1/category/32/",{category_title:"category_title",category_description:"category_description"},{"X-CSRFToken":H}).then((function(e){b(e.data),r(""),d("")}))},children:"--"})]})})}var M=function(e){return Object(p.jsx)("button",{children:"Edit"})};function $(e){var t=e.match.params.id,a=z({name:"category",id:t});return Object(p.jsx)("div",{className:"container lg-w-50",children:Object(p.jsxs)(L.a,{border:"dark",children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Category detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(O.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(p.jsx)(P,{id:t,name:"category"})]})]})}),Object(p.jsxs)(L.a.Body,{children:[Object(p.jsx)(L.a.Title,{children:a.category_title}),Object(p.jsx)(L.a.Text,{children:a.category_description})]})]})})}function q(e){var t=e.match.params.id,a=z({name:"owner",id:t});return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(L.a,{border:"dark",children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Category detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(M,{id:t,name:"owner"}),Object(p.jsx)(P,{id:t,name:"owner"})]})]})}),Object(p.jsxs)(L.a.Body,{children:[Object(p.jsxs)(L.a.Title,{children:[a.surname," ",a.name]}),Object(p.jsx)(L.a.Text,{children:a.owner_description})]})]})})}var K=function(e){var t=e.match.params.id,a=z({name:"departament",id:t});return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(L.a,{border:"dark",children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(M,{id:t,name:"departament"}),Object(p.jsx)(P,{id:t,name:"departament"})]})]})}),Object(p.jsxs)(L.a.Body,{children:[Object(p.jsx)(L.a.Title,{children:a.departament_title}),Object(p.jsx)(L.a.Text,{children:a.departament_description})]})]})})};function Q(e){var t=e.match.params.id,a=z({name:"inventory",id:t});return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(p.jsxs)(L.a,{border:"dark",children:[Object(p.jsx)(L.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("div",{className:"me-5",children:[Object(p.jsx)("span",{className:"text-muted",children:"Serial Number: "}),a.serial_number]}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(M,{id:t,name:"inventory"}),Object(p.jsx)(P,{id:t,name:"inventory"})]})]})}),Object(p.jsxs)(L.a.Body,{children:[Object(p.jsxs)(L.a.Title,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Title: "}),a.title]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Category: "}),Object(p.jsx)(O.b,{to:{pathname:"/category_detail/".concat(a.category),fromDashboard:!1},children:a.category})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(p.jsx)(O.b,{to:{pathname:"/owner_detail/".concat(a.owner),fromDashboard:!1},children:a.owner})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Price: "}),a.price,"$"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),a.date_purchase]})]}),Object(p.jsx)(L.a.Text,{children:a.inventory_description})]})]})]})}var U=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(O.a,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{path:"/category",children:Object(p.jsx)(E,{})}),Object(p.jsx)(y.a,{path:"/departament",children:Object(p.jsx)(B,{})}),Object(p.jsx)(y.a,{path:"/owner",children:Object(p.jsx)(F,{})}),Object(p.jsx)(y.a,{path:"/inventory",children:Object(p.jsx)(A,{})}),Object(p.jsx)(y.a,{path:"/category_detail/:id",exact:!0,component:$}),Object(p.jsx)(y.a,{path:"/departament_detail/:id",exact:!0,component:K}),Object(p.jsx)(y.a,{path:"/owner_detail/:id",exact:!0,component:q}),Object(p.jsx)(y.a,{path:"/inventory_detail/:id",exact:!0,component:Q}),Object(p.jsx)(y.a,{path:"/category_add",children:Object(p.jsx)(I,{})}),Object(p.jsx)(y.a,{path:"/departament_add",children:Object(p.jsx)(G,{})}),Object(p.jsx)(y.a,{path:"/owner_add",children:Object(p.jsx)(R,{})}),Object(p.jsx)(y.a,{path:"/inventory_add",children:Object(p.jsx)(X,{})}),Object(p.jsx)(y.a,{path:"/category_edit/:id",children:Object(p.jsx)(J,{})})]})})]})}}]),a}(n.a.Component),V=U;s.a.render(Object(p.jsx)(V,{}),document.getElementById("root"))},69:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.fa738079.chunk.js.map