(this.webpackJsonpaplicacion=this.webpackJsonpaplicacion||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(22),r=c.n(a),s=(c(55),c(33),c(56),c(57),c(24)),i=c(3),o=c(14),d=c(12),l=c(31),u=c.n(l),j=c(45),b=c(13),m=c(46),h=c.n(m);function p(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{var n={method:t,url:e,headers:{Accept:"application/json","Content-Type":"application/json"}};if("get"==(t=t.toLowerCase()))n=n;else{if("post"!=t)throw"Metodo Desconocido";if(!c)throw"Para realizar la peticion post se necesita pasar el cuerpo con la informacion";n=Object(b.a)(Object(b.a)({},n),{},{data:c})}return h()(n)}catch(a){return a}}var O=function(e){return localStorage.setItem("auth","true"),{type:"user-authentication",payload:e}},g=c(5),x=c(1),f=function(){var e=Object(g.c)((function(e){return e.auth_reducer.isAuthenticaded})),t=Object(n.useState)(null),c=Object(o.a)(t,2),a=c[0],r=c[1],s=Object(g.b)();return Object(n.useEffect)((function(){0==e&&r("Datos incorrectos")}),[e]),Object(x.jsx)(n.Fragment,{children:Object(x.jsxs)("section",{className:"login",children:[Object(x.jsxs)("div",{className:"card p-3",children:[Object(x.jsx)("h1",{children:"LOGIN"}),Object(x.jsx)(d.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Correo electronico invalido"):t.email="Por favor, introduzca un correo electronico",e.password||(t.password="Introduzca una contrase\xf1a"),t},onSubmit:function(e){var t,c;s((t="http://challenge-react.alkemy.org/",c=e,function(){var e=Object(j.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,"post",c).then((function(){return!0})).catch((function(){return!1}));case 2:return a=e.sent,e.abrupt("return",n(O(a)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:function(e){var t=e.errors;return Object(x.jsxs)(d.c,{className:"form-group",children:[Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(x.jsx)(d.b,{type:"email",name:"email",className:"form-control",id:"email",placeholder:"name@example.com"}),Object(x.jsx)(d.a,{name:"email",component:function(){return Object(x.jsx)("div",{className:"text-danger",children:t.email})}})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{htmlFor:"contrase\xf1a",className:"form-label",children:"Contrase\xf1a"}),Object(x.jsx)(d.b,{type:"password",name:"password",className:"form-control",id:"contrase\xf1a",placeholder:"Introduce tu Contrase\xf1a"}),Object(x.jsx)(d.a,{name:"password",component:function(){return Object(x.jsx)("div",{className:"text-danger",children:t.password})}})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("button",{type:"submit",className:"form-control btn btn-success",children:"Iniciar sesion"}),a&&Object(x.jsx)("div",{className:"text-danger text-center",children:"Datos incorrectos"})]})]})}})]}),Object(x.jsx)("button",{style:{position:"absolute",bottom:"10px",left:"10px",padding:"5px",border:"none",borderRadius:"5px",color:"#333"},onClick:function(){return s(O(!0))},children:"Ingresar como invitado"})]})})},v=c(27),y=function(){var e=Object(g.b)();return Object(x.jsx)(n.Fragment,{children:Object(x.jsx)(d.d,{initialValues:{search:""},validate:function(e){var t={};return""==e.search?t.search="No puedes dejar este campo vacio":/[\W\d]/.test(e.search)&&(t.search="No puede contener numeros y simbolos, solo caracteres de tipo alfabeticos"),t},onSubmit:function(t){var c="https://www.superheroapi.com/api.php/3009719749316257/search/".concat(t.search);e(function(e){return function(t){t({type:"request_sent",payload:!0}),p(e,"get").then((function(e){var c,n;"error"==e.data.response?t({type:"request_error",payload:!0}):t((c=!0,n=e.data.results,{type:"request_success",payload:c,data:n}))}))}}(c))},children:function(e){var t=e.errors;return Object(x.jsxs)("div",{className:"buscador row justify-content-center p-3",style:{marginLeft:"0px",marginRight:"0px"},children:[Object(x.jsx)("h2",{className:"text-center",children:"BUSCA A TU INTEGRANTE"}),Object(x.jsxs)(d.c,{className:"formulario col-lg-5",children:[Object(x.jsx)(d.b,{name:"search",className:"form-control",type:"text",placeholder:"Ingrese un superheroe..."}),Object(x.jsx)("button",{className:"btn btn-warning",type:"submit",children:"Buscar"})]}),Object(x.jsx)(d.a,{name:"search",component:function(){return Object(x.jsx)("div",{className:"error text-danger",children:t.search})}})]})}})})},N=c(47),w={combat:{pts:0,urlImg:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631066388/icons/yelmo_hb3fme.svg"},durability:{pts:0,urlImg:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067132/icons/shield_mnhntn.svg"},intelligence:{pts:0,urlImg:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067785/icons/artificial-intelligence_tq5wyj.svg"},power:{pts:0,urlImg:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067521/icons/lighting_ignlfz.svg"},speed:{pts:0,urlImg:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067432/icons/speed_wqx1zg.svg"},strength:{pts:0,urlImg:"https://res.cloudinary.com/dcea83ydd/image/upload/v1631067640/icons/strength_azrxnu.svg"}},I=function(e){return function(e){var t=Object(n.useState)({combat:0,durability:0,intelligence:0,power:0,speed:0,strength:0}),c=Object(o.a)(t,2),a=c[0],r=c[1],s=JSON.parse(JSON.stringify(w));e=e;return Object(n.useEffect)((function(){e.map((function(e){var t=Object.entries(e.powerstats);for(var c in a){var n,r=Object(N.a)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;c==i[0]&&"null"!=i[1]&&(s[c].pts+=parseInt(i[1]))}}catch(o){r.e(o)}finally{r.f()}}})),r(s)}),[e]),Object(x.jsx)("div",{className:"contenedor-powerstats",children:Object.keys(a).map((function(e){return Object(x.jsx)(_,{stat:a[e],nameStat:e})}))})}(e.team)},_=function(e){var t=e.stat,c=e.nameStat;return Object(x.jsxs)("div",{className:"meter",children:[Object(x.jsx)("span",{style:{width:"25px"},children:Object(x.jsx)("img",{src:t.urlImg,style:{width:"100%"}})}),"\xa0 ",c," \xa0",Object(x.jsx)("b",{className:"text-warning",children:t.pts})]})},S=function(e){var t=e.elemento,c=e.handlerDelete;return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:t.image.url,style:{width:"100%",height:"100%"}}),Object(x.jsx)("a",{href:"/#/details?id=".concat(t.id),target:"_blank",className:"icon info",children:Object(x.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1630961529/icons/informacion_ajstkw.svg",style:{width:"100%",height:"100%"}})}),Object(x.jsx)("button",{className:"icon trash",onClick:function(){return c(t.id)},children:Object(x.jsx)("img",{src:"https://res.cloudinary.com/dcea83ydd/image/upload/v1630961529/icons/eliminar_bm4npo.svg",style:{width:"100%",height:"100%"}})}),Object(x.jsx)("span",{className:"good"==t.biography.alignment?"bg-success":"bg-danger",style:{borderTop:"1px solid #333",position:"absolute",bottom:"0px",right:"0px",left:"0px",textAlign:"center"},children:t.biography.alignment})]})},A=c.p+"static/media/superman2.7b14ab17.jpg",k=function(e){var t=e.team,c=e.deleteMiembro;return Object(x.jsxs)("div",{className:"contenedor-team_stats mt-5 mb-5",children:[Object(x.jsx)("div",{className:"d-flex justify-content-center",children:t.length>0?Object(x.jsx)("div",{className:"grid-team ",children:t.map((function(e){return Object(x.jsx)(S,{handlerDelete:c,elemento:e},e.id)}))}):Object(x.jsx)("div",{children:Object(x.jsx)("img",{class:"w-100",src:A})})}),Object(x.jsxs)("div",{className:"grid-powerstats",children:[Object(x.jsx)("h2",{className:"text-center",children:"POWERSTATS"}),Object(x.jsx)(I,{team:t})]})]})},q=function(e){var t=e.elemento,c=e.onclick,a=Object.entries(t.powerstats);return Object(x.jsxs)("div",{className:"grid-card",children:[Object(x.jsx)("div",{className:"contenedor-imagen",children:Object(x.jsx)("img",{src:t.image.url})}),Object(x.jsxs)("div",{className:"contenedor-descripcion",children:[Object(x.jsx)("h5",{children:t.name}),Object(x.jsx)("div",{className:"powerstats",children:Object(x.jsxs)("span",{children:[a.map((function(e){return Object(x.jsxs)(n.Fragment,{children:[e[0],": ",Object(x.jsx)("span",{className:"text-warning",children:e[1]}),Object(x.jsx)("br",{})]})})),"Team: ","good"==t.biography.alignment?Object(x.jsx)("span",{className:"text-success",children:t.biography.alignment}):Object(x.jsx)("span",{className:"text-danger",children:t.biography.alignment})]})}),Object(x.jsx)("button",{onClick:function(){return c(t)},className:" btn btn-primary w-100 mt-1",children:"Agregar"})]})]})},C=function(e){var t=e.addMiembro,c=Object(g.c)((function(e){return e.dataHeroes_reducer.data}));return Object(x.jsx)(n.Fragment,{children:Object(x.jsx)("div",{className:"grid-resultados mt-4",children:c&&c.map((function(e){return Object(x.jsx)(q,{onclick:t,elemento:e},e.id)}))})})},F=function(){var e=Object(g.b)();return Object(x.jsxs)("h1",{className:"header text-center bg-primary text-white",children:["SUPERHERO API",Object(x.jsx)("button",{onClick:function(){localStorage.removeItem("auth"),e(O(null))},className:"logout btn btn-primary",children:"Logout"})]})},E=c.p+"static/media/warning.7e688bdd.svg",T=function(){var e=Object(g.c)((function(e){return e.dataHeroes_reducer.loading})),t=Object(g.c)((function(e){return e.dataHeroes_reducer.error}));return Object(x.jsxs)(n.Fragment,{children:[e&&Object(x.jsx)(L,{}),t&&Object(x.jsx)(P,{message:"El superheroe no existe"})]})},L=function(){return Object(x.jsxs)("div",{class:"lds-roller",children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},P=function(e){var t=e.message;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"w-100",children:Object(x.jsx)("img",{style:{width:"100%"},src:E})}),Object(x.jsx)("h3",{children:t})]})},R=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({bad:0,good:0,uniqueId:[]}),s=Object(o.a)(r,2),i=s[0],d=s[1],l=Object(n.useState)(null),u=Object(o.a)(l,2),j=u[0],m=u[1],h=Object(g.c)((function(e){return e.dataHeroes_reducer.data})),p=function(e,t,n){t<3?i.uniqueId.includes(e.id)?O("No puedes agregar un mismo personaje","danger"):(d(Object(b.a)(Object(b.a)(Object(b.a)({},i),n),{},{uniqueId:[].concat(Object(v.a)(i.uniqueId),[e.id])})),a([].concat(Object(v.a)(c),[e])),O("Buenisimo, se ha agregado al team","success")):O("No puedes agregar mas heroes del mismo Bando","danger")},O=function(e,t){m({message:e,color:t}),setTimeout((function(){m(null)}),1e3)};return document.body.style.background="#000",Object(x.jsxs)("section",{className:"home",children:[Object(x.jsx)(F,{}),Object(x.jsx)(k,{team:c,deleteMiembro:function(e){var t=c.filter((function(t){if(t.id==e){var c=i.uniqueId.indexOf(e),n=Object(v.a)(i.uniqueId);return n.splice(c,1),"good"==t.biography.alignment?d(Object(b.a)(Object(b.a)({},i),{},{good:i.good-1,uniqueId:n})):d(Object(b.a)(Object(b.a)({},i),{},{bad:i.bad-1,uniqueId:n})),!1}return!0}));a(t)}}),Object(x.jsx)(y,{}),Object(x.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"70vh"},children:h?Object(x.jsx)(C,{addMiembro:function(e){"good"==e.biography.alignment?p(e,i.good,{good:i.good+1}):p(e,i.bad,{bad:i.bad+1})}}):Object(x.jsx)(T,{})}),j&&Object(x.jsx)(D,{modal:j})]})},D=function(e){var t=e.modal;return Object(x.jsx)("div",{className:"modals d-flex justify-content-center align-items-center text-light bg-"+t.color,children:Object(x.jsx)("div",{className:"text-center",children:t.message})})},H=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(i.g)(),s=new URLSearchParams(r.search).get("id");return Object(n.useEffect)((function(){p("https://www.superheroapi.com/api.php/3009719749316257/".concat(s),"get").then((function(e){return 200==e.status&&a(e.data)})).catch((function(e){return console.log(e)}))}),[]),document.body.classList.add("background_body"),Object(x.jsx)(n.Fragment,{children:c&&Object(x.jsx)(z,{character:c})})},z=function(e){var t=e.character;return Object(x.jsxs)(n.Fragment,{children:[Object(x.jsx)(F,{}),Object(x.jsx)("section",{className:"contenedor-details",children:Object(x.jsxs)("div",{className:"details",children:[Object(x.jsx)("div",{className:"contenedor-imagen",children:Object(x.jsx)("img",{src:t.image.url})}),Object(x.jsxs)("div",{className:"contenedor-info",children:[Object(x.jsx)("h2",{children:t.name}),Object(x.jsx)("h4",{children:"Alias: "}),Object(x.jsx)("p",{children:t.biography.aliases.join(", ")}),Object(x.jsx)("h4",{children:"Altura:"}),Object(x.jsx)("p",{children:t.appearance.height[1]}),Object(x.jsx)("h4",{children:"Peso:"}),Object(x.jsx)("p",{children:t.appearance.weight[1]}),Object(x.jsx)("h4",{children:"Lugar de trabajo:"}),Object(x.jsx)("p",{children:t.work.base})]}),Object(x.jsx)("button",{onClick:function(){window.close()},className:"volver btn btn-primary",children:"VOLVER"})]})})]})},B=function(e){var t=e.path,c=e.component,n=Object(g.c)((function(e){return e.auth_reducer.isAuthenticaded}));return Object(x.jsx)(i.b,{exact:!0,path:t,children:n?Object(x.jsx)(c,{}):Object(x.jsx)(i.a,{to:"/"})})};var M=function(){var e=Object(g.c)((function(e){return e.auth_reducer.isAuthenticaded}));return Object(x.jsx)(s.a,{children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(B,{path:"/details",component:H}),Object(x.jsx)(B,{path:"/home",component:R}),Object(x.jsx)(i.b,{exact:!0,path:"/",children:e?Object(x.jsx)(i.a,{to:"/home"}):Object(x.jsx)(f,{})})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},U=c(20),V=c(49),W=c(50),Z={isAuthenticaded:!!localStorage.getItem("auth")||null},G={loading:!1,success:!1,error:!1,data:null},$=Object(U.combineReducers)({auth_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user-authentication":return{isAuthenticaded:t.payload};default:return e}},dataHeroes_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"request_sent":return{data:null,loading:t.payload,success:!1,error:!1};case"request_success":return{loading:!1,success:t.payload,error:!1,data:t.data};case"request_error":return{data:null,loading:!1,success:!1,error:t.payload};default:return e}}}),K=Object(U.createStore)($,Object(W.composeWithDevTools)(Object(U.applyMiddleware)(V.a)));r.a.render(Object(x.jsx)(g.a,{store:K,children:Object(x.jsx)(M,{})}),document.getElementById("root")),J()}},[[83,1,2]]]);
//# sourceMappingURL=main.31f1c94d.chunk.js.map