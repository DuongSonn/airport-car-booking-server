(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{1102:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n(20),i=n(732),o=n(17),l=Object(o.jsx)("div",{className:"pt-3 text-center",children:Object(o.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),d=function(e){return Object(o.jsx)("main",{className:"c-main",children:Object(o.jsx)(i.l,{fluid:!0,children:Object(o.jsx)(a.Suspense,{fallback:l,children:Object(o.jsxs)(r.d,{children:[e.routes.map((function(e,t){return e.component&&Object(o.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(i.r,{children:Object(o.jsx)(e.component,Object(c.a)({},t))})}},t)})),Object(o.jsx)(r.a,{to:"/404"})]})})})})},m=s.a.memo(d),u=function(){return Object(o.jsxs)(i.s,{fixed:!1,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"CoreUI"}),Object(o.jsx)("span",{className:"ml-1",children:"\xa9 2020 creativeLabs."})]}),Object(o.jsxs)("div",{className:"mfs-auto",children:[Object(o.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(o.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI for React"})]})]})},j=s.a.memo(u),b=n(185),h=n(781),p=n(22),O=s.a.lazy((function(){return n.e(26).then(n.bind(null,1091))})),x=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(19)]).then(n.bind(null,1092))})),f=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,1093))})),v=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,1106))})),g=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(5),n.e(18)]).then(n.bind(null,1094))})),N=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,1095))})),S=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,1096))})),_=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,1101))})),C=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(17)]).then(n.bind(null,1103))})),w=s.a.lazy((function(){return Promise.all([n.e(23),n.e(25)]).then(n.bind(null,1097))})),y=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,1098))})),k=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(11)]).then(n.bind(null,1099))})),I=[{path:"/",exact:!0,component:O,name:"Home"},{path:"/dashboard",name:"Dashboard",component:O,permission:[p.d.ADMIN,p.d.AGENCY,p.d.HOST]},{path:"/requests",name:"Requests",component:x,permission:[p.d.AGENCY,p.d.HOST],exact:!0},{path:"/requests/create",name:"Create Request",component:f,permission:[p.d.AGENCY],exact:!0},{path:"/requests/:id",name:"Request Detail",component:v,permission:[p.d.AGENCY,p.d.HOST],exact:!0},{path:"/contracts",name:"Contracts",component:g,permission:[p.d.AGENCY,p.d.HOST],exact:!0},{path:"/contracts/:id",name:"Contract Detail",component:N,permission:[p.d.AGENCY,p.d.HOST],exact:!0},{path:"/cars",name:"Cars",component:S,permission:[p.d.HOST],exact:!0},{path:"/drivers",name:"Drivers",component:_,permission:[p.d.HOST],exact:!0},{path:"/host-details",name:"Host Details",component:C,permission:[p.d.HOST],exact:!0},{path:"/profile",name:"Profile",component:w,permission:[p.d.AGENCY,p.d.HOST],exact:!0},{path:"/transactions/requests",name:"Requests' Transaction",component:y,permission:[p.d.ADMIN],exact:!0},{path:"/transactions/drivers",name:"Drivers' Transaction",component:k,permission:[p.d.ADMIN],exact:!0}],A=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.changeState.sidebarShow}));return Object(o.jsxs)(i.t,{withSubheader:!0,children:[Object(o.jsx)(i.Q,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:n})}}),Object(o.jsx)(i.Q,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(o.jsx)(i.u,{className:"mx-auto d-lg-none",to:"/",children:Object(o.jsx)(h.a,{name:"logo",height:"48",alt:"Logo"})}),Object(o.jsx)(i.v,{className:"d-md-down-none mr-auto",children:Object(o.jsx)(i.w,{className:"px-3",children:Object(o.jsx)(i.x,{to:"/dashboard",children:"Dashboard"})})}),Object(o.jsxs)(i.v,{className:"px-3",children:[Object(o.jsx)(q,{}),Object(o.jsx)(D,{}),Object(o.jsx)(T,{})]}),Object(o.jsx)(i.P,{className:"px-3 justify-content-between",children:Object(o.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:I})})]})},H=n(184),E=n(851),T=Object(H.b)()((function(e){var t=e.t,n=Object(b.c)((function(e){return e.user})),a=Object(r.g)(),s=Object(b.b)();return Object(o.jsxs)(i.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(o.jsx)(i.q,{className:"c-header-nav-link",caret:!1,children:Object(o.jsx)("div",{className:"c-avatar",children:Object(o.jsx)(i.y,{src:"avatars/".concat(n.data.avatar),className:"c-avatar-img"})})}),Object(o.jsxs)(i.p,{className:"pt-0",placement:"bottom-end",children:[Object(o.jsxs)(i.o,{to:"/profile",children:[Object(o.jsx)(h.a,{name:"cil-user",className:"mfe-2"})," ",t("Profile")]}),Object(o.jsx)(i.o,{divider:!0}),Object(o.jsxs)(i.o,{onClick:function(){return function(){var e=Object(E.c)();s(e),a.push("/login")}()},children:[Object(o.jsx)(h.a,{name:"cil-account-logout",className:"mfe-2"}),t("Logout")]})]})]})})),G=n(418),D=Object(H.b)()((function(e){var t=e.t,n=Object(b.b)(),a=Object(b.c)((function(e){return e.user})),s=function(e){n(Object(E.a)(e));var t=window.localStorage.getItem("".concat("ddsb","_user"));(t=JSON.parse(t)).language=e,window.localStorage.setItem("".concat("ddsb","_user"),JSON.stringify(t)),G.a.changeLanguage(e)};return Object(o.jsxs)(i.n,{inNav:!0,className:"c-header-nav-item mx-2",direction:"down",children:[Object(o.jsx)(i.q,{className:"c-header-nav-link",caret:!1,children:a&&"vi"===a.data.language?Object(o.jsx)(h.a,{name:"cif-vn"}):a&&"en"===a.data.language?Object(o.jsx)(h.a,{name:"cif-us"}):null}),Object(o.jsxs)(i.p,{className:"pt-0",placement:"bottom-end",children:[Object(o.jsx)(i.o,{onClick:function(){return s("vi")},children:Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{name:"cif-vn"})," \xa0 ",t("Vietnamese")]})}),Object(o.jsx)(i.o,{onClick:function(){return s("en")},children:Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{name:"cif-us"})," \xa0 ",t("English")]})})]})]})})),q=function(){return Object(o.jsxs)(i.n,{inNav:!0,className:"c-header-nav-item mx-2",children:[Object(o.jsxs)(i.q,{className:"c-header-nav-link",caret:!1,children:[Object(o.jsx)(h.a,{name:"cil-bell"}),Object(o.jsx)(i.a,{shape:"pill",color:"danger",children:5})]}),Object(o.jsxs)(i.p,{placement:"bottom-end",className:"pt-0",children:[Object(o.jsx)(i.o,{header:!0,tag:"div",className:"text-center",color:"light",children:Object(o.jsxs)("strong",{children:["You have ",5," notifications"]})}),Object(o.jsxs)(i.o,{children:[Object(o.jsx)(h.a,{name:"cil-user-follow",className:"mr-2 text-success"})," New user registered"]}),Object(o.jsxs)(i.o,{children:[Object(o.jsx)(h.a,{name:"cil-user-unfollow",className:"mr-2 text-danger"})," User deleted"]}),Object(o.jsxs)(i.o,{children:[Object(o.jsx)(h.a,{name:"cil-chart-pie",className:"mr-2 text-info"})," Sales report is ready"]}),Object(o.jsxs)(i.o,{children:[Object(o.jsx)(h.a,{name:"cil-basket",className:"mr-2 text-primary"})," New client"]}),Object(o.jsxs)(i.o,{children:[Object(o.jsx)(h.a,{name:"cil-speedometer",className:"mr-2 text-warning"})," Server overloaded"]}),Object(o.jsx)(i.o,{header:!0,tag:"div",color:"light",children:Object(o.jsx)("strong",{children:"Server"})}),Object(o.jsxs)(i.o,{className:"d-block",children:[Object(o.jsx)("div",{className:"text-uppercase mb-1",children:Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"CPU Usage"})})}),Object(o.jsx)(i.F,{size:"xs",color:"info",value:25}),Object(o.jsx)("small",{className:"text-muted",children:"348 Processes. 1/4 Cores."})]}),Object(o.jsxs)(i.o,{className:"d-block",children:[Object(o.jsx)("div",{className:"text-uppercase mb-1",children:Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"Memory Usage"})})}),Object(o.jsx)(i.F,{size:"xs",color:"warning",value:70}),Object(o.jsx)("small",{className:"text-muted",children:"11444GB/16384MB"})]}),Object(o.jsxs)(i.o,{className:"d-block",children:[Object(o.jsx)("div",{className:"text-uppercase mb-1",children:Object(o.jsx)("small",{children:Object(o.jsx)("b",{children:"SSD 1 Usage"})})}),Object(o.jsx)(i.F,{size:"xs",color:"danger",value:90}),Object(o.jsx)("small",{className:"text-muted",children:"243GB/256GB"})]})]})]})},L=function(e){for(var t=e.navigation,n=e.t,a=(e.tReady,Object(b.b)()),s=Object(b.c)((function(e){return e.changeState.sidebarShow})),c=0;c<t.length;c++)if(t[c]._children){t[c].name&&(t[c].name=n(t[c].name));for(var r=0;r<t[c]._children.length;r++)t[c]._children[r].name?t[c]._children[r].name=n(t[c]._children[r].name):t[c]._children[r]=n(t[c]._children[r])}else t[c].name=n(t[c].name);return Object(o.jsxs)(i.H,{show:s,onShowChange:function(e){return a({type:"set",sidebarShow:e})},children:[Object(o.jsxs)(i.I,{className:"d-md-down-none",to:"/",children:[Object(o.jsx)(h.a,{className:"c-sidebar-brand-full",name:"logo-negative",height:35}),Object(o.jsx)(h.a,{className:"c-sidebar-brand-minimized",name:"sygnet",height:35})]}),Object(o.jsx)(i.K,{children:Object(o.jsx)(i.m,{items:t,components:{CSidebarNavDivider:i.L,CSidebarNavDropdown:i.M,CSidebarNavItem:i.N,CSidebarNavTitle:i.O}})}),Object(o.jsx)(i.J,{className:"c-d-md-down-none"})]})},P=Object(H.b)()(s.a.memo(L)),z=n(736),U=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(o.jsx)(h.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:"NEW"}},{_tag:"CSidebarNavTitle",_children:["Host services"],permission:[p.d.HOST]},{_tag:"CSidebarNavItem",name:"Host's Cars",icon:"cil-car-alt",permission:[p.d.HOST],to:"/cars"},{_tag:"CSidebarNavItem",name:"Host's Drivers",icon:"cil-user",permission:[p.d.HOST],to:"/drivers"},{_tag:"CSidebarNavItem",name:"Host's Working Provinces",icon:"cil-location-pin",permission:[p.d.HOST],to:"/host-details"},{_tag:"CSidebarNavTitle",_children:["Airport services"]},{_tag:"CSidebarNavDropdown",name:"Requests",icon:"cil-airplane-mode",permission:[p.d.AGENCY,p.d.HOST],_children:[{_tag:"CSidebarNavItem",name:"List Requests",to:"/requests",permission:[p.d.AGENCY,p.d.HOST]},{_tag:"CSidebarNavItem",name:"Create Request",to:"/requests/create",permission:[p.d.AGENCY]}]},{_tag:"CSidebarNavDropdown",name:"Contracts",icon:"cil-car-alt",permission:[p.d.AGENCY,p.d.HOST],_children:[{_tag:"CSidebarNavItem",name:"List Contracts",to:"/contracts",permission:[p.d.AGENCY,p.d.HOST]}]},{_tag:"CSidebarNavDropdown",name:"Transactions",icon:"cil-cash",permission:[p.d.ADMIN],_children:[{_tag:"CSidebarNavItem",name:"List Requests' Transaction",to:"/transactions/requests",permission:[p.d.ADMIN]},{_tag:"CSidebarNavItem",name:"List Drivers' Transaction",to:"/transactions/drivers",permission:[p.d.ADMIN]}]}],Y=n(864),R=n(832),M=n(868);t.default=function(e){var t=Object(b.c)((function(e){return e.user})),n=[],s=[];return Object(a.useEffect)((function(){Y.a.getInstance(t.data._id,t.data.role).on("notification",(function(e){R.a.success({message:"Notification",description:"".concat(e.message),placement:"bottomRight",duration:1.5})}))}),[]),!t||M.isEmpty(t.data)?Object(o.jsx)(r.a,{to:"/login"}):(n=Object(z.b)(I,t.data.role),s=Object(z.a)(U,t.data.role),Object(o.jsxs)("div",{className:"c-app c-default-layout",children:[Object(o.jsx)(P,{navigation:s}),Object(o.jsxs)("div",{className:"c-wrapper",children:[Object(o.jsx)(A,{}),Object(o.jsx)("div",{className:"c-body",children:Object(o.jsx)(m,{routes:n})}),Object(o.jsx)(j,{})]})]}))}},736:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return o}));var a=n(22),s=Object(a.b)();function c(e,t){var n=[];return e.forEach((function(e){e.permission?e.permission.includes(t)&&n.push(e):n.push(e)})),n}function r(e,t){var n=[];return e.forEach((function(e){e.permission?e.permission.includes(t)&&(e._children&&e._children.forEach((function(n,a){n.permission&&!n.permission.includes(t)&&e._children.splice(a,1)})),n.push(e)):(e._children&&e._children.forEach((function(n,a){n.permission&&!n.permission.includes(t)&&e._children.splice(a,1)})),n.push(e))})),n}function i(e){var t={avatar:e.avatar,language:e.language,username:e.username,role:e.role,email:e.email,phone:e.phone,_id:e._id};localStorage.setItem("".concat("ddsb","_user"),JSON.stringify(t))}function o(e){s.post("".concat("https://ddsbvn.herokuapp.com","/api/users/token"),{refresh_token:localStorage.getItem("".concat("ddsb","_refresh_token"))}).then((function(t){localStorage.setItem("".concat("ddsb","_access_token"),t.data.access_token),e()})).catch((function(e){e.response&&(401!==e.response.status&&403!==e.response.status||(localStorage.removeItem("".concat("ddsb","_user")),localStorage.removeItem("".concat("ddsb","_access_token")),localStorage.removeItem("".concat("ddsb","_refresh_token")),window.location.href="/login"))}))}},851:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return u}));var a=n(83),s=n.n(a),c=n(132),r=n(22),i=n(78),o=n.n(i),l=n(736);function d(e){return function(){var t=Object(c.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("".concat("https://ddsbvn.herokuapp.com","/api/users/login"),e).then((function(e){localStorage.setItem("".concat("ddsb","_access_token"),e.data.access_token),localStorage.setItem("".concat("ddsb","_refresh_token"),e.data.refresh_token),n({type:r.a.LOGIN_SUCCESS,payload:{user:e.data,message:""}})})).catch((function(e){e.response&&n({type:r.a.LOGIN_FAIL,payload:{message:e.response.data.message}})}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function m(e,t){return function(){var n=Object(c.a)(s.a.mark((function n(a,c){var i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=Object(r.b)(),n.next=3,i.get("".concat("https://ddsbvn.herokuapp.com","/api/language?lang=").concat(e)).then((function(e){a({type:r.a.CHANGE_LANGUAGE_SUCCESS,payload:{language:e.data.language,message:""}})})).catch((function(n){n.response&&(403===n.response.status?Object(l.c)(m(e,t)):a({type:r.a.CHANGE_LANGUAGE_FAIL,payload:{message:n.response.data.message}}))}));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}function u(e){return function(){var e=Object(c.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(r.b)(),e.next=3,a.post("/users/logout").then((function(e){localStorage.removeItem("".concat("ddsb","_user")),localStorage.removeItem("".concat("ddsb","_access_token")),localStorage.removeItem("".concat("ddsb","_refresh_token")),t({type:r.a.LOGOUT_SUCCESS})})).catch((function(e){e.response&&t({type:r.a.LOGOUT_FAIL})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}n(189).config()},864:function(e,t,n){"use strict";var a=n(978),s=function(){var e;return{init:function(t,n){return e=new a.io("https://ddsbvn.herokuapp.com",{query:{_id:t,role:n}})},getInstance:function(t,n){return e||this.init(t,n),e},clearInstance:function(){e=null}}}();t.a=s}}]);
//# sourceMappingURL=24.d4b02dcf.chunk.js.map