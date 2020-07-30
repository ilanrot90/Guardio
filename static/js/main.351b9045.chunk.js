(this.webpackJsonpGuardio=this.webpackJsonpGuardio||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n.n(a),c=n(0),i=n.n(c),l=n(27),o=n(20),u={themeKey:(localStorage.getItem("userPref")?JSON.parse(localStorage.getItem("userPref")||""):{theme:"dark"}).theme},s=function(e,t){var n=t.type;switch(n){case"TOGGLE_THEME":var a="dark"===e.themeKey?"light":"dark";return localStorage.setItem("userPref",JSON.stringify({theme:a})),Object(o.a)(Object(o.a)({},e),{},{themeKey:a});case"RESET_STATE":return Object(o.a)({},u);default:throw new Error("Unhandled action type: ".concat(n))}},m=i.a.createContext(u),f=i.a.createContext((function(){return u})),d=function(e){var t=e.children,n=i.a.useReducer(s,u),a=Object(l.a)(n,2),r=a[0],c=a[1];return i.a.createElement(m.Provider,{value:r},i.a.createElement(f.Provider,{value:c},t))};function b(){var e=i.a.useContext(m);if(void 0===e)throw new Error("FirebaseStateContext must be used within a FirebaseContextProvider");return e}function h(){var e=i.a.useContext(f);if(void 0===e)throw new Error("FirebaseDispatchContext must be used within a FirebaseContextProvider");return e}var p=n(5),g=n(6),v=n(70);function E(){var e=Object(g.a)(["\n\tbackground-color: ",";\n\tmargin-top: auto;\n"]);return E=function(){return e},e}function x(){var e=Object(g.a)(["\n\t&::-webkit-scrollbar-track {\n\t\tbox-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 6px;\n\t\tbackground-color: #ffffff;\n\t}\n\t&::-webkit-scrollbar {\n\t\twidth: 0;\n\t\theight: 0;\n\t\t/* height: 6px; */\n\t\tbackground-color: rgba(166, 185, 200, 0.5);\n\t}\n\t&::-webkit-scrollbar-thumb {\n\t\tborder-radius: 6px;\n\t\tbackground-color: rgba(166, 185, 200, 0.5);\n\t}\n\t&::-webkit-scrollbar-thumb:hover {\n\t\tbackground-color: rgba(166, 185, 200, 1);\n\t}\n\n\t&:hover::-webkit-scrollbar {\n\t\twidth: 6px;\n\t\theight: 6px;\n\t}\n"]);return x=function(){return e},e}function O(){var e=Object(g.a)(["\n\t\tfont-size: ","px;\n\t\tfont-weight: ",";\n\t\tcolor: ",";\n\t\tmargin: 0;\n\t"]);return O=function(){return e},e}function j(){var e=Object(g.a)(["\n\t","\n"]);return j=function(){return e},e}function y(){var e=Object(g.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100vh;\n\tflex-direction: column;\n\tbackground-image: ",";\n"]);return y=function(){return e},e}function k(){var e=Object(g.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return k=function(){return e},e}var w=Object(p.b)(k()),C=p.c.div(y(),(function(e){return e.theme.background})),P=p.c.p.attrs((function(e){return{as:e.as}}))(j(),(function(e){var t=e.theme,n=e.color,a=e.size,r=e.weight;return Object(p.b)(O(),a||t.text.m,r||300,n||t.contrastText)})),S=Object(p.b)(x()),T=Object(p.c)(v.a)(E(),(function(e){return e.theme.main}));function D(){var e=Object(g.a)(["\n\t\t\tbox-shadow: 0 -2px 10px rgba(0, 0, 0, 1);\n\t\t"]);return D=function(){return e},e}var F={text:{s:10,m:14,l:18,xl:24},utils:{centerFlex:w,scrollbar:S},spacing:{s:4,m:8,l:16,xl:24,xxl:32},shadow:{m:Object(p.b)(D())}},z={light:Object(o.a)({background:"linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",light:"#e7cbeb",main:"#e1bee7",dark:"#9d85a1",contrastText:"#222831"},F),dark:Object(o.a)({background:"linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);\n background-blend-mode: multiply;",light:"#757ce8",main:"#3f50b5",dark:"#222831",contrastText:"#f9fafa"},F)},G=(n(84),n(85),n(86),function(e){var t=e.children,n=b().themeKey;return i.a.createElement(p.a,{theme:z[n]},i.a.createElement(C,null,t))}),B=n(74),I=n(75);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=i.a.createElement("title",null,"Guardio"),N=i.a.createElement("linearGradient",{id:"a",x1:"0%",x2:"69.1105%",y1:"-3.174819%",y2:"63.459464%"},i.a.createElement("stop",{offset:0,stopColor:"#0f9def"}),i.a.createElement("stop",{offset:1,stopColor:"#02c198"})),K=i.a.createElement("path",{d:"m14.220718 37.5458054-11.68945577-11.6279874c-1.57766885-1.5678283-2.4644664-3.6976155-2.4644664-5.9188133 0-2.2211977.88679755-4.350985 2.4644664-5.9188133l11.68945577-11.62798731c3.2895174-3.26960545 8.6111453-3.26960545 11.9006627 0l11.6904568 11.62798731c1.5776689 1.5678283 2.4644664 3.6976156 2.4644664 5.9188133 0 2.2211978-.8867975 4.350985-2.4644664 5.9188133l-11.6864528 11.6279874c-3.2899801 3.2722595-8.6146866 3.2722595-11.9046667 0zm6.0068868-6.9749955c.2002464.0003209.3972818-.0501793.5725611-.1467475l.0560549-.0239587c2.4694201-1.0901239 4.476387-2.963899 5.9778584-5.5694147.3773698-.6558711.945927-1.9087149.9699506-1.9616239l.8238073-1.8188696-6.3392125-.1607233-.0670657 2.6474436 2.261216.0559037c-1.0670458 1.8328455-2.4383896 3.2014901-4.0699886 4.0749867l-.2532483.134768-.2622569-.1527371c-4.838742-2.6214883-6.0579369-8.9296314-6.3582312-11.435319 1.2412165-.4312577 2.3773299-1.1979382 3.4864168-1.944653 1.2221977-.8235827 2.4864367-1.6751171 3.4553863-1.6751171h.0080078c.8498329.0039931 1.9779384.839555 3.0690077 1.6381805.9809614.7207596 2.0590179 1.5143937 3.2491842 1.9636206-.0973994.8394879-.2427782 1.6727453-.4354267 2.4957047l2.5815299.601964c.320069-1.3293669.5187413-2.6849151.5935817-4.0500297l.0360353-1.1929468-1.1851614-.1597252c-1.0199997-.1377628-2.1651219-.9773179-3.266201-1.7909176-1.4304017-1.0561822-2.9168584-2.14630606-4.6335408-2.15442785-1.7967609-.00984728-3.4033354 1.07728175-4.9628637 2.12847255-1.2151909.8185911-2.471422 1.6651342-3.5985266 1.8168729l-1.1851614.1597252.0360352 1.1929468c.0190187.4691925.4494405 11.5111884 8.7085345 15.1579122l.053052.0229604c.1796722.0973485.3811014.1478276.5855739.1467809z",fill:"url(#a)"}),A=function(e){var t=e.svgRef,n=e.title,a=R(e,["svgRef","title"]);return i.a.createElement("svg",L({viewBox:"0 0 40 40",width:60,height:42,ref:t},a),void 0===n?M:n?i.a.createElement("title",null,n):null,N,K)},H=i.a.forwardRef((function(e,t){return i.a.createElement(A,L({svgRef:t},e))}));n.p;function J(){var e=Object(g.a)(["\n\tmargin-left: auto;\n\t& .custom-control-label {\n\t\tcursor: pointer;\n\t}\n"]);return J=function(){return e},e}function _(){var e=Object(g.a)(["\n\tbackground-color: ",";\n\tdisplay: flex;\n\talign-items: center;\n"]);return _=function(){return e},e}var q=Object(p.c)(B.a)(_(),(function(e){return e.theme.dark})),Q=Object(p.c)(I.a)(J()),V=function(){var e,t=[b(),h()],n=Object(l.a)(t,2),a=n[0].themeKey,r=n[1],o=Object(c.useCallback)((function(){r({type:"TOGGLE_THEME"})}),[r]);return i.a.createElement(q,null,i.a.createElement(H,null),i.a.createElement(P,{as:"h2"},"Gruadio"),i.a.createElement(Q,{type:"switch",id:"theme-switch",label:i.a.createElement(P,{weight:400},"Dark Theme"),checked:(e=a,"dark"===e),onChange:o}))},W=n(46);function U(){var e=Object(g.a)(["\n\tdisplay: flex;\n\twidth: 60px;\n\tjustify-content: space-between;\n\tmargin-left: ","px;\n\n\t& .page-link {\n\t\tbackground-color: ",";\n\t\tborder: none;\n\t\tcolor: ",";\n\t\ttransition: opacity 0.125s ease-in-out;\n\t\t&:hover {\n\t\t\topacity: 0.8;\n\t\t}\n\t}\n\n\t& .page-item.disabled .page-link {\n\t\tbackground-color: ",";\n\t\topacity: 0.4;\n\t}\n"]);return U=function(){return e},e}function X(){var e=Object(g.a)(["\n\tdisplay: flex;\n\talign-items: center;\n"]);return X=function(){return e},e}function Y(){var e=Object(g.a)(["\n\twidth: 100%;\n\theight: 60px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin-top: auto;\n\tpadding: 10px;\n"]);return Y=function(){return e},e}var Z=Object(p.c)(W.a)(Y()),$=p.c.div(X()),ee=p.c.div(U(),(function(e){return e.theme.spacing.m}),(function(e){return e.theme.dark}),(function(e){return e.theme.light}),(function(e){return e.theme.main})),te=i.a.memo((function(e){var t=e.currentPage,n=e.total,a=e.callback,r=Object(c.useMemo)((function(){return Math.ceil(n/10)}),[n]);return i.a.createElement(Z,null,i.a.createElement(P,{as:"span",size:11,weight:500},"Page ".concat(t+1," of ").concat(r)),i.a.createElement($,null,i.a.createElement(P,{as:"span",size:11,weight:500},"".concat(10*t+1," of ").concat(10*t+10)),i.a.createElement(ee,null,i.a.createElement(W.a.Prev,{disabled:0===t,onClick:function(){return a(!1)}}),i.a.createElement(W.a.Next,{disabled:t===r,onClick:function(){return a(!0)}}))))}));function ne(){var e=Object(g.a)(["\n\tbackground-color: ",";\n\tborder-radius: 50%;\n\twidth: 10px;\n\theight: 10px;\n\tmargin: 0 5px;\n\t/* Animation */\n\tanimation: "," 0.5s linear infinite;\n\tanimation-delay: ",";\n"]);return ne=function(){return e},e}function ae(){var e=Object(g.a)(["\n\tdisplay: flex;\n\talign-items: flex-end;\n\tmargin: auto;\n"]);return ae=function(){return e},e}function re(){var e=Object(g.a)(["\n  0% { margin-bottom: 0; }\n  50% { margin-bottom: 15px }\n  100% { margin-bottom: 0 }\n"]);return re=function(){return e},e}var ce=Object(p.d)(re()),ie=p.c.div(ae()),le=p.c.div(ne(),(function(e){return e.theme.light}),ce,(function(e){return e.delay})),oe=i.a.memo((function(e){var t=e.displayText;return i.a.createElement(ie,null,i.a.createElement(le,{delay:"0s"}),i.a.createElement(le,{delay:".1s"}),i.a.createElement(le,{delay:".2s"}),t&&i.a.createElement(P,{weight:500,size:12},"Loading"," "))})),ue=n(32),se=n(8),me=n(51),fe=n.n(me),de=function(e){return fe.a.stringify(e,{addQueryPrefix:!0})};function be(){var e=Object(se.h)(),t=Object(se.g)(),n=Object(se.f)();return Object(c.useMemo)((function(){var a=Object(o.a)(Object(o.a)({},fe.a.parse(t.search,{ignoreQueryPrefix:!0})),e);return{push:n.push,replace:n.replace,pathname:t.pathname,query:a,location:t,history:n}}),[e,t,n])}function he(){var e=Object(g.a)(["\n\twidth: 120px;\n\theight: 60px;\n\tmargin: 0 auto;\n"]);return he=function(){return e},e}function pe(){var e=Object(g.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\theight: 200px;\n\tbackground-color: ",";\n\tpadding: ","px;\n"]);return pe=function(){return e},e}var ge=Object(p.c)(ue.a)(pe(),(function(e){return e.theme.dark}),(function(e){return e.theme.spacing.m})),ve=Object(p.c)(ue.a.Img)(he()),Ee=i.a.memo((function(e){var t=e.breach,n=be(),a=n.history,r=n.query,l=Object(c.useCallback)((function(e){return function(){a.push("/".concat(e).concat(de({page:r.page||0})))}}),[a,r]);return i.a.createElement(ge,{style:{width:"18rem"}},i.a.createElement(ve,{variant:"top",src:t.LogoPath}),i.a.createElement(ue.a.Body,null,i.a.createElement(ue.a.Title,null,i.a.createElement(P,{weight:500}," Title: ",t.Title)),i.a.createElement(ue.a.Subtitle,null,i.a.createElement(P,{size:10,weight:500},"Added at: ",new Date(t.AddedDate).toLocaleString()))),i.a.createElement(T,{variant:"primary",onClick:l(t.Title)},i.a.createElement(P,{weight:500},"Explore Breach")))}));function xe(){var e=Object(g.a)(["\n\tdisplay: grid;\n\tgrid-gap: 10px;\n\tgrid-template-columns: repeat(auto-fill, 250px);\n\tmax-height: 70vh;\n\toverflow: overlay;\n\tjustify-content: center;\n\tlist-style: none;\n\t","\n"]);return xe=function(){return e},e}var Oe=p.c.ul(xe(),(function(e){return e.theme.utils.scrollbar})),je=i.a.memo((function(e){var t=e.breaches;return i.a.createElement(Oe,null,i.a.createElement(c.Suspense,{fallback:i.a.createElement(oe,null)},t.map((function(e){return i.a.createElement("li",{key:e.Name},i.a.createElement(Ee,{breach:e}))}))))})),ye=n(54),ke=n.n(ye),we=n(71),Ce=n(44),Pe=n(43),Se=n.n(Pe),Te=function(e){var t=e.method,n=e.url,a=e.data,r=e.params;return Se()({method:t,url:n,params:r,data:a,headers:{"X-Best-Pokemon":"Bulbasaur"}})};var De=n(31),Fe=n(76),ze=n(73),Ge=n(72),Be=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,121))})),Ie=function(e){return i.a.createElement(c.Suspense,{fallback:i.a.createElement("i",{id:e.name},"\xa0")},i.a.createElement(Be,e))};function Le(){var e=Object(g.a)(["\n\tmargin-left: ","px;\n\topacity: ",";\n"]);return Le=function(){return e},e}function Re(){var e=Object(g.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]);return Re=function(){return e},e}function Me(){var e=Object(g.a)(["\n\twidth: 25px;\n\theight: 25px;\n\tmargin: 0 ","px;\n"]);return Me=function(){return e},e}function Ne(){var e=Object(g.a)(["\n\tmargin-top: ","px;\n\tbackground-color: ",";\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]);return Ne=function(){return e},e}function Ke(){var e=Object(g.a)(["\n\t& .modal-content {\n\t\tbackground-color: ",";\n\t\t& .modal-header {\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t\t& .modal-title {\n\t\t\t\tmargin-right: ","px;\n\t\t\t}\n\t\t}\n\t}\n"]);return Ke=function(){return e},e}var Ae={Names:"user","Email addresses":"email",Genders:"genders","Geographic locations":"location","IP addresses":"sphere",Passwords:"password"},He=Object(p.c)(De.a)(Ke(),(function(e){return e.theme.dark}),(function(e){return e.theme.spacing.l})),Je=Object(p.c)(Fe.a)(Ne(),(function(e){return e.theme.spacing.l}),(function(e){return e.theme.dark})),_e=p.c.span(Me(),(function(e){return e.theme.spacing.s})),qe=Object(p.c)(P)(Re()),Qe=Object(p.c)(Ie).attrs({name:"checkbox"})(Le(),(function(e){return e.theme.spacing.s}),(function(e){return e.isChecked?1:.2})),Ve=i.a.memo((function(e){var t=e.breach,n=be().history,a=Object(c.useCallback)((function(){n.push("/")}),[n]);return i.a.createElement(He,{show:!0,onHide:a,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},i.a.createElement(De.a.Header,{closeButton:!0},i.a.createElement(De.a.Title,{id:"contained-modal-title-vcenter"},i.a.createElement(P,{as:"h2",weight:500,size:16},t.Title)),t.DataClasses.map((function(e){return i.a.createElement(ze.a,{key:e,placement:"top",overlay:i.a.createElement(Ge.a,{id:"tooltip-".concat(e)},i.a.createElement("strong",null,e))},i.a.createElement(_e,{key:e},i.a.createElement(Ie,{name:(t=e,Ae[t]||"")})));var t}))),i.a.createElement(De.a.Body,null,i.a.createElement(P,null,t.Description),i.a.createElement(Je,null,i.a.createElement("div",null,i.a.createElement(P,null,"Name: ",t.Name),i.a.createElement(P,null,"Domain: ",t.Domain),i.a.createElement(P,null,"BreachDate: ",t.BreachDate),i.a.createElement(P,null,"Pwn Count: ",t.PwnCount),i.a.createElement(P,null,"Lest Modified Date: ",new Date(t.ModifiedDate).toLocaleString())),i.a.createElement("div",null,i.a.createElement(qe,null,"Verified: ",i.a.createElement(Qe,{isChecked:t.IsVerified})),i.a.createElement(qe,null,"Fabricated: ",i.a.createElement(Qe,{isChecked:t.IsFabricated})),i.a.createElement(qe,null,"Sensitive: ",i.a.createElement(Qe,{isChecked:t.IsSensitive})),i.a.createElement(qe,null,"Retired: ",i.a.createElement(Qe,{isChecked:t.IsRetired})),i.a.createElement(qe,null,"SpamList: ",i.a.createElement(Qe,{isChecked:t.IsSpamList}))))),i.a.createElement(De.a.Footer,null,i.a.createElement(T,{onClick:a},"Close")))}));function We(){var e=Object(g.a)(["\n\tmargin: auto;\n"]);return We=function(){return e},e}function Ue(){var e=Object(g.a)(["\n\tmargin-bottom: ","px;\n\tmargin-left: ","px;\n"]);return Ue=function(){return e},e}function Xe(){var e=Object(g.a)(["\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: ","px;\n"]);return Xe=function(){return e},e}var Ye=p.c.div(Xe(),(function(e){return e.theme.spacing.xxl})),Ze=Object(p.c)(P).attrs({as:"h1",size:24})(Ue(),(function(e){return e.theme.spacing.xxl}),(function(e){return e.theme.spacing.xxl})),$e=Object(p.c)(P)(We()),et=function(e){var t=e.id,n=be(),a=n.history,r=n.query,o=Object(c.useState)(Number((null===r||void 0===r?void 0:r.page)||0)),u=Object(l.a)(o,2),s=u[0],m=u[1],f=function(e){return Object(Ce.b)(["breaches",{page:e}],function(){var e=Object(we.a)(ke.a.mark((function e(t,n){var a,r,c,i;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.page,r=Se.a.CancelToken.source(),e.next=4,Te({url:"https://guard.io/v2/hiring/fe/breaches",params:{offset:a},cancelToken:r.token});case 4:return c=e.sent,i=c.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),{suspense:!0,refetchOnWindowFocus:!1,initialData:{items:[],total:0,error:null},initialStale:!0})}(s),d=f.data,b=f.isFetching,h=f.isError,p=Object(c.useMemo)((function(){return t?null===d||void 0===d?void 0:d.items.find((function(e){return e.Title===t})):null}),[t,d]),g=Object(c.useCallback)((function(e){var t=e?s+1:s-1;a.push(de({page:t})),m(e?s+1:s-1)}),[s,a]);return console.log(t),i.a.createElement(Ye,null,i.a.createElement(Ze,null,"Known Data Breaches ( By Gruadio )"),b?i.a.createElement(oe,null):h?i.a.createElement($e,{size:18,weight:600,as:"h1"}):i.a.createElement(je,{breaches:d.items}),i.a.createElement(te,{currentPage:s,total:(null===d||void 0===d?void 0:d.total)||0,callback:g}),p&&i.a.createElement(Ve,{breach:p}))},tt=n(50),nt=function(){return i.a.createElement(tt.a,{basename:"/Guardio"},i.a.createElement(V,null),i.a.createElement(se.c,null,i.a.createElement(se.a,{path:"/:id",render:function(e){var t=e.match;return i.a.createElement(et,{id:t.params.id})},id:"modal"}),i.a.createElement(se.a,{path:"/",component:et})))},at={shared:{suspense:!0,refetchOnWindowFocus:!1}},rt=function(e){var t=e.children;return i.a.createElement(d,null,i.a.createElement(Ce.a,{config:at},i.a.createElement(c.Suspense,{fallback:i.a.createElement(oe,null)},i.a.createElement(G,null,t))," "))},ct=document.getElementById("root");r.a.unstable_createRoot(ct).render(i.a.createElement(rt,null,i.a.createElement(nt,null)))},78:function(e,t,n){e.exports=n(112)},85:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.351b9045.chunk.js.map