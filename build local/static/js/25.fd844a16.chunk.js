(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{1097:function(e,t,c){"use strict";c.r(t);var n=c(749),o=c(1),s=c(732),a=c(832),r=c(1105),i=c(713),u=c(872),b=c(185),d=c(184),p=c(17);t.default=Object(d.b)()((function(e){var t=e.t,c=Object(o.useState)(),d=Object(n.a)(c,2),m=d[0],j=d[1],l=Object(b.c)((function(e){return e.user}));Object(o.useEffect)((function(){Object(u.b)(l.data._id,(function(e){e.user?j(e.user):a.a.error({message:t("Notification"),description:"".concat(e.message),placement:"bottomRight",duration:1.5})}))}),[]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(s.G,{className:"justify-content-center",children:Object(p.jsx)(s.j,{xs:"12",sm:"12",children:Object(p.jsx)(s.f,{children:Object(p.jsx)(s.g,{children:m?Object(p.jsxs)(r.b,{title:t("User's Info"),bordered:!0,children:[Object(p.jsx)(r.b.Item,{label:t("Username"),span:3,children:m.username}),Object(p.jsx)(r.b.Item,{label:t("Phone"),span:3,children:m.phone}),Object(p.jsx)(r.b.Item,{label:t("E-mail"),span:3,children:m.email}),Object(p.jsx)(r.b.Item,{label:t("Promo Code"),span:3,children:m.promo_code?"".concat("https://airport-car-booking-vdmtb.ondigitalocean.app/register?code=").concat(m.promo_code):Object(p.jsx)(i.a,{onClick:function(){Object(u.a)((function(e){e.promo_code?(a.a.success({message:t("Notification"),description:"".concat(e.message),placement:"bottomRight",duration:1.5}),Object(u.b)(l.data._id,(function(e){e.user?j(e.user):a.a.error({message:t("Notification"),description:"".concat(e.message),placement:"bottomRight",duration:1.5})}))):a.a.error({message:t("Notification"),description:"".concat(e.message),placement:"bottomRight",duration:1.5})}))},children:t("Generate Code")})})]}):null})})})})})}))},872:function(e,t,c){"use strict";c.d(t,"c",(function(){return r})),c.d(t,"b",(function(){return i})),c.d(t,"a",(function(){return u}));var n=c(78),o=c.n(n),s=c(22),a=c(736);function r(e,t){o.a.post("".concat("http://localhost:8080","/api/users/register"),e).then((function(e){t(e.data)})).catch((function(e){e.response&&t(e.response.data)}))}function i(e,t){Object(s.b)().get("/users/".concat(e)).then((function(e){t(e.data)})).catch((function(c){c.response&&(403===c.response.status?Object(a.c)(i(e,t)):t(c.response.data))}))}function u(e){Object(s.b)().post("/users/promo_code").then((function(t){e(t.data)})).catch((function(t){t.response&&(403===t.response.status?Object(a.c)(u(e)):e(t.response.data))}))}}}]);
//# sourceMappingURL=25.fd844a16.chunk.js.map