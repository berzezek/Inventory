(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(26),s=a.n(r),i=(a(69),a(29)),o=a(30),l=a(35),d=a(34),j=(a(70),a(105)),b=a(102),m=a(106),u=a(107),h=a(64),p=a(103),x=a(8),O=a(0),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(j.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(j.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(O.jsx)(j.a.Toggle,{"aria-controls":"navbarScroll"}),Object(O.jsxs)(j.a.Collapse,{id:"navbarScroll",children:[Object(O.jsxs)(m.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(x.b,{to:{pathname:"/category",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Category"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(x.b,{to:{pathname:"/departament",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Departament"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(x.b,{to:{pathname:"/owner",fromDashboard:!1},className:"btn btn-outline-secondary ms-1",children:"Owner"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(x.b,{to:{pathname:"/inventory",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Inventory"})}),Object(O.jsx)(m.a.Link,{children:Object(O.jsx)(x.b,{to:{pathname:"/login",fromDashboard:!1},className:"btn btn-outline-secondary",children:"Login"})})]}),Object(O.jsxs)(u.a,{className:"d-flex",children:[Object(O.jsx)(h.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(O.jsx)(p.a,{variant:"outline-success",children:"Search"})]})]})]})})}}]),a}(c.a.Component),v=f,N=a(13),y=a(104),g=a(7),w=a.n(g),S=a(12),_=a(4),D=a(10),C=a.n(D),k="http://127.0.0.1:8000/";var T=function(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(Object(S.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C()({method:"GET",url:k+"api/v1/".concat(e.name,"/")}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)}))),[]),c};function I(){var e=1,t=0,a=0;return T({name:"inventory"}).map((function(e){return a+=e.price,t++})),Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Inventories"}),Object(O.jsxs)("p",{className:"text-end text-light",children:["Total: ",t," pcs, ",a," $"]}),Object(O.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Serial"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{children:"Owner"})]})}),Object(O.jsxs)("tbody",{children:[T({name:"inventory"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e++}),Object(O.jsx)("td",{children:t.serial_number}),Object(O.jsx)("td",{children:Object(O.jsx)(x.b,{to:{pathname:"/inventory_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.title})}),Object(O.jsxs)("td",{className:"text-end",children:[t.price," $"]}),Object(O.jsx)("td",{children:t.owner?Object(O.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(t.owner.id),fromDashboard:!1},children:[t.owner.surname," ",t.owner.name[0],"."]}):"-IN STOCK-"})]},t.id)})),Object(O.jsx)("tr",{})]})]}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(x.b,{to:{pathname:"/inventory_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Inventory"})})})]})}function A(){var e=1;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Categories"}),Object(O.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center shadow-lg rounded",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Description"})]})}),Object(O.jsx)("tbody",{children:T({name:"category"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"col-1",children:e++}),Object(O.jsx)("td",{className:"col-4 text-start",children:Object(O.jsx)(x.b,{to:{pathname:"/category_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.category_title})}),Object(O.jsx)("td",{className:"col-6",children:t.category_description})]},t.id)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(x.b,{to:{pathname:"/category_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Category"})})})]})}function X(){var e=1;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Owner`s"}),Object(O.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Departament"})]})}),Object(O.jsx)("tbody",{children:T({name:"owner"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e++}),Object(O.jsx)("td",{children:Object(O.jsxs)(x.b,{to:{pathname:"/owner_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:[t.surname," ",t.name[0],"."]})}),Object(O.jsx)("td",{children:t.departament?Object(O.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(t.departament.id),fromDashboard:!1},className:"",children:t.departament.departament_title}):"-"})]},t.id)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(x.b,{to:{pathname:"/owner_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Owner"})})})]})}function M(){var e=1;return Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("h3",{className:"text-center",children:"All Departament`s"}),Object(O.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,variant:"light",className:"text-center",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u2116"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:"Description"})]})}),Object(O.jsx)("tbody",{children:T({name:"departament"}).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"col-1",children:e++}),Object(O.jsx)("td",{className:"col-4 text-start",children:Object(O.jsx)(x.b,{to:{pathname:"/departament_detail/".concat(t.id),fromDashboard:!1},className:"ms-2",children:t.departament_title})}),Object(O.jsx)("td",{className:"col-7",children:t.departament_description})]},t.id)}))})]}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(x.b,{to:{pathname:"/departament_add",fromDashboard:!1},children:Object(O.jsx)("button",{className:"btn btn-success",children:"Add Departament"})})})]})}var J=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var c=a[n];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null}("csrftoken");function E(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(S.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=new FormData).append("category_title",a),n.append("category_description",i),"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4MjY3OTAzLCJpYXQiOjE2MzgyNjc2MDMsImp0aSI6IjU4ZTA3Yjk5NjNkMjRhMDJhODBjN2E1ZjAzODZjNGM3IiwidXNlcl9pZCI6MX0.GcfmIku_qLcr58G5fKeKJq6NC88DnoOxemvy8AlDbP0",!a){e.next=10;break}return e.next=8,C()({headers:{Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4MjY3OTAzLCJpYXQiOjE2MzgyNjc2MDMsImp0aSI6IjU4ZTA3Yjk5NjNkMjRhMDJhODBjN2E1ZjAzODZjNGM3IiwidXNlcl9pZCI6MX0.GcfmIku_qLcr58G5fKeKJq6NC88DnoOxemvy8AlDbP0"),"X-CSRFToken":J},method:"post",url:k+"api/v1/category/",data:n}).then((function(e){alert("Category ".concat(a," has been added")),console.log(e)}));case 8:e.next=11;break;case 10:alert("Please enter any title");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Category"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:l,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function z(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(_.a)(l,2),j=d[0],b=d[1],m=Object(n.useState)(""),u=Object(_.a)(m,2),h=u[0],p=u[1],x=Object(n.useState)([]),f=Object(_.a)(x,2),v=f[0],N=f[1];Object(n.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({method:"GET",url:k+"api/v1/departament/"}).then((function(e){N(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]);var y=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("name",a),t.append("surname",i),t.append("owner_description",j),t.append("departament",h),!i||!a){e.next=10;break}return e.next=8,C()({headers:{"X-CSRFToken":J},method:"post",url:k+"api/v1/owner/",data:t}).then((function(e){alert("Owner ".concat(i," ").concat(a," has been added"))}));case 8:e.next=11;break;case 10:alert("Surname & Name must be added");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Owner"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:y,children:[Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"owner_description",value:j,onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return p(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select departament"}),v.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function L(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(""),d=Object(_.a)(l,2),j=d[0],b=d[1],m=Object(n.useState)(""),u=Object(_.a)(m,2),h=u[0],p=u[1],x=Object(n.useState)(""),f=Object(_.a)(x,2),v=f[0],N=f[1],y=Object(n.useState)(""),g=Object(_.a)(y,2),D=g[0],T=g[1],I=Object(n.useState)(""),A=Object(_.a)(I,2),X=A[0],M=A[1],E=Object(n.useState)([]),z=Object(_.a)(E,2),L=z[0],B=z[1],P=Object(n.useState)([]),F=Object(_.a)(P,2),G=F[0],Z=F[1];Object(n.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({method:"GET",url:k+"api/v1/owner/"}).then((function(e){Z(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(n.useEffect)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()({method:"GET",url:k+"api/v1/category/"}).then((function(e){B(e.data)}));case 2:case"end":return e.stop()}}),e)}))),[]);var R=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("title",a),t.append("inventory_description",i),t.append("serial_number",j),t.append("price",h),t.append("date_purchase",v),t.append("category",D),t.append("owner",X),!(a&&h&&j)){e.next=13;break}return e.next=11,C()({headers:{"X-CSRFToken":J},method:"post",url:k+"api/v1/inventory/",data:t}).then((function(e){alert("Inventory ".concat(a," has been added")),console.log(t)}));case 11:e.next=14;break;case 13:alert("Title, Serial number & Price must be added");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Inventory"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:R,children:[Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return T(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select category"}),L.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(O.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return M(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select owner"}),G.map((function(e){return Object(O.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(O.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:j,onChange:function(e){return b(e.target.value)}}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:h,onChange:function(e){return p(e.target.value)}}),Object(O.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:v,onChange:function(e){return N(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function B(){var e=Object(n.useState)(""),t=Object(_.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(_.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=new FormData).append("departament_title",a),t.append("departament_description",i),!a){e.next=8;break}return e.next=6,C()({headers:{"X-CSRFToken":J},method:"post",url:k+"api/v1/departament/",data:t}).then((function(e){alert("departament ".concat(a," has been added"))}));case 6:e.next=9;break;case 8:alert("Please enter any title");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Add new Departament"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:l,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:a,onChange:function(e){return c(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:i,onChange:function(e){return o(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var P=a(108),F=function(e){var t=Object(N.f)(),a=e.name,n=e.id,c=function(){var e=Object(S.a)(w.a.mark((function e(c){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),!window.confirm("Delete ".concat(a,"... Are you sure?"))){e.next=4;break}return e.next=4,C()({headers:{"X-CSRFToken":J},method:"delete",url:k+"api/v1/".concat(a,"/").concat(n)}).then((function(e){alert("The ".concat(a," was been deleted"))})).then(t.push("/".concat(a)),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-eraser",viewBox:"0 0 16 16",onClick:c,children:Object(O.jsx)("path",{d:"M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"})})})};var G=function(e){var t=Object(n.useState)({}),a=Object(_.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(Object(S.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C()({method:"GET",url:k+"api/v1/".concat(e.name,"/").concat(e.id)}).then((function(e){r(e.data)}));case 2:case"end":return t.stop()}}),t)}))),[e.id]),c};function Z(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1]),r=Object(N.f)(),s=e.id,i=e.name,o=Object(n.useState)(e.title),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(e.description),m=Object(_.a)(b,2),u=m[0],h=m[1],p={category_title:d,category_description:u},x=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":J},method:"put",url:k+"api/v1/".concat(i,"/").concat(s,"/"),data:p}).then((function(e){c(e.data),alert("The ".concat(i," was been edited"))})).then(r.push("/".concat(i)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm mt-5",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit category"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:x,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50  me-1",placeholder:"Category",name:"category_title",value:d,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"category_description",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}var R=function(){return Object(O.jsx)("div",{className:"me-5",children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[Object(O.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(O.jsx)("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]})})};function H(e){var t=e.match.params.id,a=G({name:"category",id:t});return Object(O.jsxs)(x.a,{children:[Object(O.jsx)("div",{className:"container lg-w-50",children:Object(O.jsxs)(P.a,{border:"dark",children:[Object(O.jsx)(P.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:"Category detail"}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(x.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)(R,{})}),Object(O.jsx)(F,{id:t,name:"category"})]})]})}),Object(O.jsxs)(P.a.Body,{children:[Object(O.jsx)(P.a.Title,{children:a.category_title}),Object(O.jsx)(P.a.Text,{children:a.category_description})]})]})}),Object(O.jsx)(N.a,{path:"/category_edit/:id",children:Object(O.jsx)(Z,{id:t,name:"category",title:a.category_title,description:a.category_description})})]})}function K(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1],Object(N.f)()),r=e.id,s=e.name,i=Object(n.useState)(e.ownerName),o=Object(_.a)(i,2),l=o[0],d=o[1],j=Object(n.useState)(e.ownerSurname),b=Object(_.a)(j,2),m=b[0],u=b[1],h=Object(n.useState)(e.ownerDescription),p=Object(_.a)(h,2),x=p[0],f=p[1],v=Object(n.useState)(e.ownerDepartament),y=Object(_.a)(v,2),g=y[0],D=y[1],I={name:l,surname:m,owner_description:x,departament:g},A=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":J},method:"put",url:k+"api/v1/".concat(s,"/").concat(r,"/"),data:I}).then((function(e){console.log(e.data),alert("The ".concat(s," was been edited"))})).then(c.push("/".concat(s)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit Owner"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:A,children:[Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Surname",name:"ownerSurname",value:m,onChange:function(e){return u(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Name",name:"ownerName",value:l,onChange:function(e){return d(e.target.value)}})]}),Object(O.jsxs)("div",{className:"d-flex mb-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Description",name:"ownerDescription",value:x,onChange:function(e){return f(e.target.value)}}),Object(O.jsxs)("select",{className:"form-select w-50",name:"departament",onChange:function(e){return D(e.target.value)},children:[Object(O.jsx)("option",{value:"",children:"Select departament"}),T({name:"departament"}).map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.departament_title},e.id)}))]})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})]})}function Y(e){var t=e.match.params.id,a=G({name:"owner",id:t});return Object(O.jsxs)(x.a,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(P.a,{border:"dark",children:[Object(O.jsx)(P.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:"Owner detail"}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(x.b,{to:{pathname:"/owner_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)(R,{})}),Object(O.jsx)(F,{id:t,name:"owner"})]})]})}),Object(O.jsxs)(P.a.Body,{children:[Object(O.jsxs)(P.a.Title,{children:[a.surname," ",a.name]}),Object(O.jsx)(P.a.Text,{children:a.owner_description}),Object(O.jsx)(P.a.Text,{children:a.departament?a.departament.departament_title:"-"})]})]})}),Object(O.jsx)(N.a,{path:"/owner_edit/:id",children:Object(O.jsx)(K,{id:t,name:"owner",ownerName:a.name,ownerSurname:a.surname,ownerDescription:a.owner_description,ownerCategory:a.departament})})]})}function q(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1]),r=Object(N.f)(),s=e.id,i=e.name,o=Object(n.useState)(e.title),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(e.description),m=Object(_.a)(b,2),u=m[0],h=m[1],p={departament_title:d,departament_description:u},x=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":J},method:"put",url:k+"api/v1/".concat(i,"/").concat(s,"/"),data:p}).then((function(e){c(e.data),alert("The ".concat(i," was been edited"))})).then(r.push("/".concat(i)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm mt-5",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit Departament"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:x,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control w-50 me-1",placeholder:"Departament",name:"departament_title",value:d,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control w-50",placeholder:"Description",name:"departament_description",value:u,onChange:function(e){return h(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}var U=function(e){var t=e.match.params.id,a=G({name:"departament",id:t});return Object(O.jsxs)(x.a,{children:[Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(P.a,{border:"dark",children:[Object(O.jsx)(P.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:"Departament detail"}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(x.b,{to:{pathname:"/category_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)(R,{})}),Object(O.jsx)(F,{id:t,name:"departament"})]})]})}),Object(O.jsxs)(P.a.Body,{children:[Object(O.jsx)(P.a.Title,{children:a.departament_title}),Object(O.jsx)(P.a.Text,{children:a.departament_description})]})]})}),Object(O.jsx)(N.a,{path:"/category_edit/:id",children:Object(O.jsx)(q,{id:t,name:"departament",title:a.departament_title,description:a.departament_description})})]})};function Q(e){var t=Object(n.useState)([]),a=Object(_.a)(t,2),c=(a[0],a[1]),r=Object(N.f)(),s=e.id,i=e.name,o=Object(n.useState)(e.title),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(n.useState)(e.inventoryDescription),m=Object(_.a)(b,2),u=m[0],h=m[1],p=Object(n.useState)(e.serialNumber),x=Object(_.a)(p,2),f=x[0],v=x[1],y=Object(n.useState)(e.price),g=Object(_.a)(y,2),D=g[0],I=g[1],A=Object(n.useState)(e.datePurchase),X=Object(_.a)(A,2),M=X[0],E=X[1],z=Object(n.useState)([]),L=Object(_.a)(z,2),B=L[0],P=L[1],F=Object(n.useState)([]),G=Object(_.a)(F,2),Z=G[0],R=G[1],H={title:d,inventory_description:u,serial_number:f,price:D,date_purchase:M,category:B.id,owner:Z.id};console.log(H);var K=function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C()({headers:{"X-CSRFToken":J},method:"put",url:k+"api/v1/".concat(i,"/").concat(s,"/"),data:H}).then((function(e){c(e.data),alert("The ".concat(i," was been edited"))})).then(r.push("/".concat(i)),window.location.reload());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container sm",children:[Object(O.jsx)("h3",{className:"text-center",children:"Edit Inventory"}),Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:K,children:[Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsxs)("select",{className:"form-select w-50 me-1",name:"category",onChange:function(e){return P(e.target.value)},children:[Object(O.jsx)("option",{children:"Select category"}),T({name:"category"}).map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.category_title},e.id)}))]}),Object(O.jsxs)("select",{className:"form-select w-50",name:"owner",onChange:function(e){return R(e.target.value)},children:[Object(O.jsx)("option",{children:"Select owner"}),T({name:"owner"}).map((function(e){return Object(O.jsxs)("option",{value:e.id,children:[e.surname," ",e.name[0],"."]},e.id)}))]})]}),Object(O.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Title",name:"title",value:d,onChange:function(e){return j(e.target.value)}}),Object(O.jsx)("input",{type:"textarea",className:"form-control mb-2",placeholder:"Description",name:"inventory_description",value:u,onChange:function(e){return h(e.target.value)}}),Object(O.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Serial number",name:"serial_number",value:f,onChange:function(e){return v(e.target.value)}}),Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("input",{type:"text",className:"form-control mb-2 w-50",placeholder:"Price",name:"price",value:D,onChange:function(e){return I(e.target.value)}}),Object(O.jsx)("input",{type:"date",className:"form-control mb-2 w-50 ms-1",placeholder:"Date of purchase",name:"date_purchase",value:M,onChange:function(e){return E(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})]})}function $(e){var t=e.match.params.id,a=G({name:"inventory",id:t});return Object(O.jsxs)(x.a,{children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h3",{className:"text-center",children:"InventoryDetail"}),Object(O.jsxs)(P.a,{border:"dark",children:[Object(O.jsx)(P.a.Header,{children:Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)("div",{className:"me-5",children:Object(O.jsx)("span",{className:"text-muted",children:"Serial Number: "})}),Object(O.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(O.jsx)(x.b,{to:{pathname:"/inventory_edit/".concat(t),fromDashboard:!1},className:"",children:Object(O.jsx)(R,{})}),Object(O.jsx)(F,{id:t,name:"inventory"})]})]})}),Object(O.jsxs)(P.a.Body,{children:[Object(O.jsx)(P.a.Title,{children:Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{className:"text-muted",children:"Title: "}),a.title]})}),Object(O.jsx)(P.a.Text,{children:Object(O.jsx)(y.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"",children:Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{className:"col-3",children:[Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Serial: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Category: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Owner: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Price: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Date of purchase: "}),Object(O.jsx)("p",{className:"text-muted text-end me-2",children:"Description: "})]}),Object(O.jsxs)("td",{className:"col-9",children:[Object(O.jsx)("p",{className:"ms-2",children:a.serial_number}),Object(O.jsx)("p",{className:"ms-2",children:a.category?a.category.category_title:"---"}),Object(O.jsx)("p",{className:"ms-2",children:a.owner?"".concat(a.owner.surname," ").concat(a.owner.name):"-IN STOCK-"}),Object(O.jsxs)("p",{className:"ms-2",children:[a.price,"$"]}),Object(O.jsx)("p",{className:"ms-2",children:a.date_purchase}),Object(O.jsx)("p",{className:"ms-2",children:a.inventory_description})]})]})})})})]})]})]}),Object(O.jsx)(N.a,{path:"/inventory_edit/:id",children:Object(O.jsx)(Q,{id:t,name:"inventory",title:a.title,inventoryDescription:a.inventory_description,serialNumber:a.serial_number,price:a.price,datePurchase:a.date_purchase,inventoryCategory:a.category,inventoryOwner:a.owner})})]})}var V=function(){var e=Object(N.f)(),t=Object(n.useState)(""),a=Object(_.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(_.a)(s,2),o=i[0],l=i[1],d=function(){var t=Object(S.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={username:c,password:o},!c||!o){t.next=7;break}return t.next=5,C()({method:"post",url:k+"api/auth/token/",data:n}).then((function(t){if("OK"==t.statusText){console.log(t);var a=t.data.access;C.a.defaults.headers.common.access="Bearer "+a,console.log(a),console.log(C.a.defaults.headers),alert("You are logged in"),e.push("/")}else alert("Please enter corect"),window.location.reload()}));case 5:t.next=8;break;case 7:alert("Please enter email & password");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"bg-light p-5 rounded",children:Object(O.jsxs)("form",{className:"form-control p-2",onSubmit:d,children:[Object(O.jsxs)("div",{className:"d-flex my-2",children:[Object(O.jsx)("input",{type:"text",className:"form-control me-1",placeholder:"Username",name:"username",value:c,onChange:function(e){return r(e.target.value)}}),Object(O.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(O.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Submit"})]})})},W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(x.a,{children:[Object(O.jsx)(v,{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(N.c,{children:[Object(O.jsx)(N.a,{path:"/category",children:Object(O.jsx)(A,{})}),Object(O.jsx)(N.a,{path:"/departament",children:Object(O.jsx)(M,{})}),Object(O.jsx)(N.a,{path:"/owner",children:Object(O.jsx)(X,{})}),Object(O.jsx)(N.a,{path:"/inventory",children:Object(O.jsx)(I,{})}),Object(O.jsx)(N.a,{path:"/category_detail/:id",exact:!0,component:H}),Object(O.jsx)(N.a,{path:"/departament_detail/:id",exact:!0,component:U}),Object(O.jsx)(N.a,{path:"/owner_detail/:id",exact:!0,component:Y}),Object(O.jsx)(N.a,{path:"/inventory_detail/:id",exact:!0,component:$}),Object(O.jsx)(N.a,{path:"/category_add",children:Object(O.jsx)(E,{})}),Object(O.jsx)(N.a,{path:"/departament_add",children:Object(O.jsx)(B,{})}),Object(O.jsx)(N.a,{path:"/owner_add",children:Object(O.jsx)(z,{})}),Object(O.jsx)(N.a,{path:"/inventory_add",children:Object(O.jsx)(L,{})}),Object(O.jsx)(N.a,{path:"/login",children:Object(O.jsx)(V,{})})]})})]})}}]),a}(c.a.Component),ee=W;s.a.render(Object(O.jsx)(ee,{}),document.getElementById("root"))},69:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.41c7371b.chunk.js.map