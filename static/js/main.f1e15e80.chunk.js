(this.webpackJsonpinventory_react=this.webpackJsonpinventory_react||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),i=a.n(r),s=(a(92),a(24)),j=a(25),o=a(35),l=a(34),d=(a(93),a(94),a(132)),b=a(129),h=a(86),u=a(133),O=a(131),f=a(85),x=a(81),v=a(6),p=a(26),m=a.n(p),g=a(43),y=a(130);var S=a(1);function C(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/category/"}).then((function(e){c(e.data)}))}),[]),Object(S.jsx)(y.a,{title:"Category",id:"offcanvasCategoryDropdown",children:a.map((function(e){return Object(S.jsx)(y.a.Item,{children:Object(S.jsx)(g.b,{to:{pathname:"/category/".concat(e.id),fromDashboard:!1},children:e.category_title})},e.id)}))})}function T(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/v1/owner/"}).then((function(e){c(e.data)}))}),[]),Object(S.jsx)(y.a,{title:"Owner",id:"offcanvasOwnerDropdown",children:a.map((function(e){return Object(S.jsx)(y.a.Item,{children:Object(S.jsxs)(g.b,{to:{pathname:"/owner/".concat(e.id),fromDashboard:!1},children:[e.surname," ",e.name[0],"."]})},e.id)}))})}var w=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(S.jsx)(d.a,{bg:"light",expand:!1,children:Object(S.jsxs)(b.a,{fluid:!0,children:[Object(S.jsx)(d.a.Brand,{href:"#",children:"Ateca hotel suites"}),Object(S.jsx)(d.a.Toggle,{"aria-controls":"offcanvasNavbar"}),Object(S.jsxs)(d.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",children:[Object(S.jsx)(h.a.Header,{closeButton:!0,children:Object(S.jsx)(h.a.Title,{id:"offcanvasNavbarLabel",children:"Inventory"})}),Object(S.jsxs)(h.a.Body,{children:[Object(S.jsxs)(u.a,{className:"justify-content-end flex-grow-1 pe-3",children:[Object(S.jsx)(u.a.Link,{href:"#action1",children:"Home"}),Object(S.jsx)(T,{}),Object(S.jsx)(C,{})]}),Object(S.jsxs)(O.a,{className:"d-flex",children:[Object(S.jsx)(f.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),Object(S.jsx)(x.a,{variant:"outline-success",children:"Search"})]})]})]})]})})}}]),a}(c.a.Component),k=w,N=a(9),E=a(134);var B=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(v.a)(a,2),r=c[0],i=c[1],s=t.params.id;return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/category/".concat(s)}).then((function(e){i(e.data)}))}),[s]),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)(E.a,{border:"dark",children:[Object(S.jsx)(E.a.Header,{children:r.id}),Object(S.jsxs)(E.a.Body,{children:[Object(S.jsx)(E.a.Title,{children:r.category_title}),Object(S.jsx)(E.a.Text,{children:r.category_description})]})]})})},_=a(48),D=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={category_title:""},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(_.a)(n)),n}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){m()({method:"post",url:"http://127.0.0.1:8000/api/v1/category/",data:{category_title:"Mouse"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.preventDefault()}},{key:"render",value:function(){return Object(S.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(S.jsxs)("label",{children:["\u0418\u043c\u044f:",Object(S.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(S.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}]),a}(c.a.Component);var I=function(e){var t=e.match,a=Object(n.useState)({}),c=Object(v.a)(a,2),r=c[0],i=c[1],s=t.params.id;return Object(n.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/"+"api/v1/owner/".concat(s)}).then((function(e){i(e.data)}))}),[s]),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)(E.a,{border:"dark",children:[Object(S.jsx)(E.a.Header,{children:r.id}),Object(S.jsxs)(E.a.Body,{children:[Object(S.jsxs)(E.a.Title,{children:[r.surname," ",r.name]}),Object(S.jsx)(E.a.Text,{children:r.description})]})]})})},L=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsxs)(g.a,{children:[Object(S.jsx)(k,{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(N.c,{children:Object(S.jsx)(N.a,{path:"/owner/:id",exact:!0,component:I})}),Object(S.jsx)(N.c,{children:Object(S.jsx)(N.a,{path:"/category/:id",exact:!0,component:B})})]})]}),Object(S.jsx)(D,{})]})}}]),a}(c.a.Component),F=L,G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(F,{})}),document.getElementById("root")),G()},92:function(e,t,a){},93:function(e,t,a){}},[[123,1,2]]]);
//# sourceMappingURL=main.f1e15e80.chunk.js.map