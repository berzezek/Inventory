(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),s=n.n(r),i=(n(93),n(28)),o=n(29),j=n(45),d=n(43),b=(n(94),n(95),n(134)),l=n(87),h=n(135),u=n(133),O=n(86),p=n(82),x=n(6),m=n(11),f=n.n(m),v=n(24),g=n(132);var y=n(1);function w(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Category",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsx)(v.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/addcategory/",fromDashboard:!1},children:"Add category"})})]})}function N(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsxs)(v.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/addowner/",fromDashboard:!1},children:"Add owner"})})]})}function S(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(g.a,{title:"Departament",id:"offcanvasCategoryDropdown",children:[n.map((function(e){return Object(y.jsx)(g.a.Item,{children:Object(y.jsx)(v.b,{to:{pathname:"/departament/".concat(e.id),fromDashboard:!1},children:e.departament_title})},e.id)})),Object(y.jsx)("hr",{}),Object(y.jsx)("div",{className:"text-center",children:Object(y.jsx)(v.b,{to:{pathname:"/adddepartament/",fromDashboard:!1},children:"Add departament"})})]})}var T=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsx)(b.a,{bg:"light",expand:!1,children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(b.a.Brand,{href:"/",children:"Ateca hotel suites"}),Object(y.jsx)(b.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(y.jsxs)(b.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(y.jsx)(l.a.Header,{closeButton:!0,children:Object(y.jsx)(l.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(y.jsxs)(l.a.Body,{children:[Object(y.jsxs)(h.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(y.jsx)(h.a.Link,{href:"/",children:"Home"}),Object(y.jsx)(N,{}),Object(y.jsx)(w,{}),Object(y.jsx)(S,{})]}),Object(y.jsxs)(u.a,{className:"d-flex",children:[Object(y.jsx)(O.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(y.jsx)(p.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),n}(c.a.Component),k=T,C=n(9),_=n(136);var D=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(x.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(_.a,{border:"dark",children:[Object(y.jsx)(_.a.Header,{children:r.id}),Object(y.jsxs)(_.a.Body,{children:[Object(y.jsx)(_.a.Title,{children:r.category_title}),Object(y.jsx)(_.a.Text,{children:r.category_description})]})]})})};var E=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(x.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(_.a,{border:"dark",children:[Object(y.jsx)(_.a.Header,{children:r.id}),Object(y.jsxs)(_.a.Body,{children:[Object(y.jsxs)(_.a.Title,{children:[r.surname," ",r.name]}),Object(y.jsx)(_.a.Text,{children:r.owner_description})]})]})})};var B=function(e){var t=e.match,n=Object(a.useState)({}),c=Object(x.a)(n,2),r=c[0],s=c[1],i=t.params.id;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/departament/".concat(i)}).then((function(e){s(e.data)}))}),[i]),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(_.a,{border:"dark",children:[Object(y.jsx)(_.a.Header,{children:r.id}),Object(y.jsxs)(_.a.Body,{children:[Object(y.jsx)(_.a.Title,{children:r.departament_title}),Object(y.jsx)(_.a.Text,{children:r.departament_description})]})]})})},F=n(47),G=n.n(F),A=n(67);function I(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(x.a)(r,2),i=s[0],o=s[1],j=function(){var e=Object(A.a)(G.a.mark((function e(){var t,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("category_title",n),t.append("category_description",i),c=a("csrftoken"),!n){e.next=8;break}return e.next=8,f()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/category/",data:t}).then((function(e){alert("Category ".concat(n," has been added"))}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"container sm",children:Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:j,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Category",name:"category_title",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"category_description",value:i,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}function H(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(x.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(""),d=Object(x.a)(j,2),b=d[0],l=d[1],h=Object(a.useState)(""),u=Object(x.a)(h,2),O=(u[0],u[1],function(){var e=Object(A.a)(G.a.mark((function e(){var t,a,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var c=n[a];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null},(t=new FormData).append("name",n),t.append("surname",i),t.append("owner_description",b),t.append("departament",2),c=a("csrftoken"),!i){e.next=10;break}return e.next=10,f()({headers:{"X-CSRFToken":c},method:"post",url:"http://127.0.0.1:8000/api/v1/owner/",data:t}).then((function(e){alert("Owner ".concat(i," ").concat(n," has been added"))}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(y.jsx)("div",{className:"container sm",children:Object(y.jsxs)("form",{className:"form-control p-2",onSubmit:O,children:[Object(y.jsx)("input",{type:"text",className:"form-control my-2",placeholder:"Surname",name:"surname",value:i,onChange:function(e){return o(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Name",name:"name",value:n,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",name:"owner_description",value:b,onChange:function(e){return l(e.target.value)}}),Object(y.jsx)("button",{type:"submit",className:"btn btn-secondary my-2",children:"Submit"})]})})}var L=n(131);function J(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),n=t[0],c=t[1],r=1;return Object(a.useEffect)((function(){f()({method:"GET",url:"http://127.0.0.1:8000/api/v1/inventory/"}).then((function(e){c(e.data)}))}),[]),Object(y.jsxs)(L.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",className:"text-center",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"\u2116"}),Object(y.jsx)("th",{children:"Serial"}),Object(y.jsx)("th",{children:"Category"}),Object(y.jsx)("th",{children:"Title"}),Object(y.jsx)("th",{children:"Owner"}),Object(y.jsx)("th",{children:"Description"})]})}),Object(y.jsx)("tbody",{children:n.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:r++}),Object(y.jsx)("td",{children:e.serial_number}),Object(y.jsx)("td",{children:e.category}),Object(y.jsx)("td",{children:e.title}),Object(y.jsx)("td",{children:e.owner}),Object(y.jsx)("td",{children:e.inventory_description})]},e.id)}))})]})}var P=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(v.a,{children:[Object(y.jsx)(k,{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(C.c,{children:[Object(y.jsxs)(C.a,{path:"/",children:[Object(y.jsx)(H,{}),Object(y.jsx)(J,{})]}),Object(y.jsx)(C.a,{path:"/owner/:id",exact:!0,component:E}),Object(y.jsx)(C.a,{path:"/category/:id",exact:!0,component:D}),Object(y.jsx)(C.a,{path:"/departament/:id",exact:!0,component:B}),Object(y.jsx)(C.a,{path:"/addcategory",children:Object(y.jsx)(I,{})}),Object(y.jsx)(C.a,{path:"/addowner",children:Object(y.jsx)(H,{})})]})})]})}}]),n}(c.a.Component),R=P,X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root")),X()},93:function(e,t,n){},94:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.00c0a479.chunk.js.map