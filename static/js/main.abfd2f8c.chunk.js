(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(24),s=a.n(r),i=(a(69),a(27)),l=a(28),d=a(35),j=a(34),o=(a(70),a(105)),b=a(102),h=a(106),m=a(107),u=a(64),x=a(103),O=a(9),p=a(0),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(o.a,{bg:"light",expand:"lg",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(o.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(p.jsx)(o.a.Toggle,{"aria-controls":"navbarScroll"}),Object(p.jsxs)(o.a.Collapse,{id:"navbarScroll",children:[Object(p.jsxs)(h.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(p.jsx)(h.a.Link,{children:Object(p.jsx)(O.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})})]}),Object(p.jsxs)(m.a,{className:"d-flex",children:[Object(p.jsx)(u.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(p.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})})}}]),a}(n.a.Component),v=f,y=a(10),N=a(5),g=a(8),w=a.n(g),S=a(104),_="http://127.0.0.1:8000/";function D(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/inventory/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Serial"}),Object(p.jsx)("th",{children:"Category"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Owner"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-2",children:e.serial_number}),Object(p.jsx)("td",{className:"col-2",children:e.category}),Object(p.jsx)("td",{className:"text-start col-2",children:Object(p.jsx)(O.b,{to:{pathname:"/inventory_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.title})}),Object(p.jsx)("td",{className:"col-3",children:e.inventory_description}),Object(p.jsx)("td",{className:"col-2",children:e.owner})]},e.id)}))})]}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function C(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/category/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center text-success",children:"All Categories"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(O.b,{to:{pathname:"/category_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.category_title})}),Object(p.jsx)("td",{className:"col-6",children:e.category_description})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function k(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/owner/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Description"}),Object(p.jsx)("th",{children:"Category"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsxs)(O.b,{to:{pathname:"/owner_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:[e.surname," ",e.name[0],"."]})}),Object(p.jsx)("td",{className:"col-5",children:e.owner_description}),Object(p.jsx)("td",{className:"col-2",children:e.category})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function T(){var e=Object(c.useState)([]),t=Object(N.a)(e,2),a=t[0],n=t[1],r=1;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/departament/"}).then((function(e){n(e.data)}))}),[]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(p.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"\u2116"}),Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("th",{children:"Description"})]})}),Object(p.jsx)("tbody",{children:a.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"col-1",children:r++}),Object(p.jsx)("td",{className:"col-4 text-start",children:Object(p.jsx)(O.b,{to:{pathname:"/departament_detail/".concat(e.id),fromDashboard:!1},className:"ms-2",children:e.departament_title})}),Object(p.jsx)("td",{className:"col-7",children:e.departament_description})]},e.id)}))})]}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"text-center",children:Object(p.jsx)(O.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(p.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}var E=a(14),A=a.n(E),G=a(23);var F=function(e){for(var t=e+"=",a=document.cookie.split(";"),c=0;c<a.length;c++){for(var n=a[c];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(t))return n.substring(t.length,n.length)}return null}("csrftoken");function H(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(N.a)(r,2),i=s[0],l=s[1],d=function(){var e=Object(G.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("category_title",a),c.append("category_description",i),!a){e.next=9;break}return e.next=7,w()({headers:{"X-CSRFToken":F},method:"post",url:_+"api/v1/category/",data:c}).then((function(e){alert("Category ".concat(a," has been added"))}));case 7:e.next=10;break;case 9:alert("Please enter any title");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function B(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(N.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)(""),j=Object(N.a)(d,2),o=j[0],b=j[1],h=Object(c.useState)(""),m=Object(N.a)(h,2),u=m[0],x=m[1],O=Object(c.useState)([]),f=Object(N.a)(O,2),v=f[0],y=f[1];Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/departament/"}).then((function(e){y(e.data)}))}),[]);var g=function(){var e=Object(G.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("name",a),c.append("surname",i),c.append("owner_description",o),c.append("departament",u),!i||!a){e.next=11;break}return e.next=9,w()({headers:{"X-CSRFToken":F},method:"post",url:_+"api/v1/owner/",data:c}).then((function(e){alert("Owner ".concat(i," ").concat(a," has been added"))}));case 9:e.next=12;break;case 11:alert("Surname & Name must be added");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:g,children:[Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(p.jsxs)("div",{className:"d-flex mb-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:o,onChange:function(e){return b(e.target.value)}}),Object(p.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return x(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function L(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(N.a)(r,2),i=s[0],l=s[1],d=Object(c.useState)(""),j=Object(N.a)(d,2),o=j[0],b=j[1],h=Object(c.useState)(""),m=Object(N.a)(h,2),u=m[0],x=m[1],O=Object(c.useState)(""),f=Object(N.a)(O,2),v=f[0],y=f[1],g=Object(c.useState)(""),S=Object(N.a)(g,2),D=S[0],C=S[1],k=Object(c.useState)(""),T=Object(N.a)(k,2),E=T[0],H=T[1],B=Object(c.useState)([]),L=Object(N.a)(B,2),I=L[0],z=L[1],P=Object(c.useState)([]),R=Object(N.a)(P,2),X=R[0],M=R[1];Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/owner/"}).then((function(e){M(e.data)}))}),[]),Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/category/"}).then((function(e){z(e.data)}))}),[]);var J=function(){var e=Object(G.a)(A.a.mark((function e(t){var c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(c=new FormData).append("title",a),c.append("inventory_description",i),c.append("serial_number",o),c.append("price",u),c.append("date_purchase",v),c.append("category",D),c.append("owner",E),!(a&&u&&o)){e.next=14;break}return e.next=12,w()({headers:{"X-CSRFToken":F},method:"post",url:_+"api/v1/inventory/",data:c}).then((function(e){alert("Inventory ".concat(a," has been added")),console.log(c)}));case 12:e.next=15;break;case 14:alert("Title, Serial number & Price must be added");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:J,children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return C(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select category"}),I.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(p.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return H(e.target.value)},children:[Object(p.jsx)("option",{value:"",children:"Select owner"}),X.map((function(e){return Object(p.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(p.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:o,onChange:function(e){return b(e.target.value)}}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:u,onChange:function(e){return x(e.target.value)}}),Object(p.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function I(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(N.a)(r,2),i=s[0],l=s[1],d=function(){var e=Object(G.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=8;break}return e.next=6,w()({headers:{"X-CSRFToken":F},method:"post",url:_+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(a," has been added"))}));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"container sm",children:[Object(p.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(p.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(p.jsxs)("div",{className:"d-flex my-2",children:[Object(p.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var z=a(108),P=function(e){var t=Object(y.f)(),a=e.name,c=e.id,n=function(){var e=Object(G.a)(A.a.mark((function e(n){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!window.confirm("Delete ".concat(a,"... Are you sure?"))){e.next=4;break}return e.next=4,w()({headers:{"X-CSRFToken":F},method:"delete",url:_+"api/v1/".concat(a,"/").concat(c)}).then((function(e){alert("The ".concat(a," was been deleted"))})).then(t.push("/".concat(a)),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:n,children:Object(p.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})},R=function(){return Object(p.jsx)("div",{className:"me-3",children:Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(p.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})})};function X(e){var t=e.match,a=Object(c.useState)({}),n=Object(N.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/category/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsx)("div",{className:"container lg-w-50",children:Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Category detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(R,{id:i,name:"category"}),Object(p.jsx)(P,{id:i,name:"category"})]})]})}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsx)(z.a.Title,{children:r.category_title}),Object(p.jsx)(z.a.Text,{children:r.category_description})]})]})})}function M(e){var t=e.match,a=Object(c.useState)({}),n=Object(N.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/owner/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Category detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(R,{id:i,name:"owner"}),Object(p.jsx)(P,{id:i,name:"owner"})]})]})}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsxs)(z.a.Title,{children:[r.surname," ",r.name]}),Object(p.jsx)(z.a.Text,{children:r.owner_description})]})]})})}var J=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(N.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/departament/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(R,{id:i,name:"departament"}),Object(p.jsx)(P,{id:i,name:"departament"})]})]})}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsx)(z.a.Title,{children:r.departament_title}),Object(p.jsx)(z.a.Text,{children:r.departament_description})]})]})})};function q(e){var t=e.match,a=Object(c.useState)({}),n=Object(N.a)(a,2),r=n[0],s=n[1],i=t.params.id;return Object(c.useEffect)((function(){w()({method:"GET",url:_+"api/v1/inventory/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(p.jsxs)(z.a,{border:"dark",children:[Object(p.jsx)(z.a.Header,{children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("div",{className:"me-5",children:[Object(p.jsx)("span",{className:"text-muted",children:"Serial Number: "}),r.serial_number]}),Object(p.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(p.jsx)(R,{id:i,name:"inventory"}),Object(p.jsx)(P,{id:i,name:"inventory"})]})]})}),Object(p.jsxs)(z.a.Body,{children:[Object(p.jsxs)(z.a.Title,{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Title: "}),r.title]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Category: "}),Object(p.jsx)(O.b,{to:{pathname:"/category_detail/".concat(r.category),fromDashboard:!1},children:r.category})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Owner: "}),Object(p.jsx)(O.b,{to:{pathname:"/owner_detail/".concat(r.owner),fromDashboard:!1},children:r.owner})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Price: "}),r.price,"$"]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{className:"text-muted",children:"Date of purchase: "}),r.date_purchase]})]}),Object(p.jsx)(z.a.Text,{children:r.inventory_description})]})]})]})}var $=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(O.a,{children:[Object(p.jsx)(v,{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(y.c,{children:[Object(p.jsx)(y.a,{path:"/category",children:Object(p.jsx)(C,{})}),Object(p.jsx)(y.a,{path:"/departament",children:Object(p.jsx)(T,{})}),Object(p.jsx)(y.a,{path:"/owner",children:Object(p.jsx)(k,{})}),Object(p.jsx)(y.a,{path:"/inventory",children:Object(p.jsx)(D,{})}),Object(p.jsx)(y.a,{path:"/category_detail/:id",exact:!0,component:X}),Object(p.jsx)(y.a,{path:"/departament_detail/:id",exact:!0,component:J}),Object(p.jsx)(y.a,{path:"/owner_detail/:id",exact:!0,component:M}),Object(p.jsx)(y.a,{path:"/inventory_detail/:id",exact:!0,component:q}),Object(p.jsx)(y.a,{path:"/category_add",children:Object(p.jsx)(H,{})}),Object(p.jsx)(y.a,{path:"/departament_add",children:Object(p.jsx)(I,{})}),Object(p.jsx)(y.a,{path:"/owner_add",children:Object(p.jsx)(B,{})}),Object(p.jsx)(y.a,{path:"/inventory_add",children:Object(p.jsx)(L,{})})]})})]})}}]),a}(n.a.Component),K=$;s.a.render(Object(p.jsx)(K,{}),document.getElementById("root"))},69:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.abfd2f8c.chunk.js.map