(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{75:function(e,t,n){e.exports=n(94)},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(139),l=n(138),u=n(137),s=n(97),m=n(141),f=n(131),p=n(130),d=n(40);function g(e){return r.a.createElement(d.a,e,r.a.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))}var b=Object(p.a)((function(e){return{root:{margin:e.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:e.spacing(1)}}}));function h(){var e=b();return r.a.createElement(s.a,{className:e.root,color:"textSecondary"},r.a.createElement(g,{className:e.lightBulb}),"Pro tip: See more ",r.a.createElement(f.a,{href:"https://github.com/webdevic/STTail"},"code")," on GitHub.")}var v=n(64),y=n(33),E=n(13),k=n(15),x=n.n(k),j=n(32),w=n(143),S=n(140),O=n(132);var I=n(65),F=n.n(I),D=Object(p.a)((function(e){return{deleteButton:{marginTop:e.spacing(1),marginBottom:e.spacing(1),position:"absolute",right:0}}})),C=function(e){var t=D(),n=e.label,c=e.onInputFieldChange,o=e.onInputFieldFocus,i=Object(a.useState)(""),l=Object(E.a)(i,2),u=l[0],s=l[1],m=function(e,t){var n=Object(a.useState)(e),r=Object(E.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c}(u,600);Object(a.useEffect)((function(){c(m)}),[m]);return r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(S.a,{"aria-autocomplete":"none",autoComplete:"",fullWidth:!0,id:"standard-basic",label:n,onChange:function(e){e.preventDefault(),s(e.currentTarget.value)},value:u,onFocus:o}),u&&u.length>0&&r.a.createElement(O.a,{"aria-label":"delete",className:t.deleteButton,onClick:function(e){e.preventDefault(),s("")}},r.a.createElement(F.a,{fontSize:"small"})))},T=n(145),A=n(146),B=function(e){var t=e.menuItems,n=e.onItemClick,a=e.style,c=function(e){n(e.currentTarget.id)};return r.a.createElement(T.a,{onKeyDown:function(e){"Tab"===e.key&&e.preventDefault()},style:a},t&&t.map((function(e){return r.a.createElement(A.a,{id:e.id,onClick:c,key:e.symbol},"$",e.symbol," | ",e.title)})))},N=Object(p.a)((function(){return Object(w.a)({root:{display:"flex",flexDirection:"column",margin:10}})})),L=function(e){var t=N(),n=e.dropdownVisible,a=e.inputLabel,c=e.menuItems,o=e.onInputFieldChange,i=e.onItemClick,l=e.onInputFieldFocus;return r.a.createElement(m.a,{className:t.root},r.a.createElement(C,{label:a,onInputFieldChange:o,onInputFieldFocus:l}),r.a.createElement(B,{menuItems:c,onItemClick:i,style:{display:n&&c&&c.length>0?"block":"none"}}))},M=n(147),_=n(148),V=function(e){var t=e.className,n=e.symbol,a=e.onSymbolDelete,c=n.messages?n.messages.length>999?"999+":n.messages.length:0;return r.a.createElement(M.a,{avatar:r.a.createElement(_.a,{style:{background:"#9999FF"}},c),className:t,color:"primary",label:"$".concat(n.symbol),onDelete:function(){return a(n.id)},variant:"outlined"})},W=Object(p.a)((function(e){return Object(w.a)({root:{display:"flex",justifyContent:"left",flexWrap:"wrap",listStyle:"none",padding:e.spacing(.5),margin:0},chip:{margin:e.spacing(.5)}})})),$=function(e){var t=e.stockSymbols,n=e.onSymbolDelete,a=W();return r.a.createElement(m.a,{component:"ul",className:a.root},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(V,{symbol:e,onSymbolDelete:n,className:a.chip}))})))},J=function(e){var t=e.dropdownVisible,n=e.inputLable,a=e.menuItems,c=e.stockSymbols,o=e.onInputFieldChange,i=e.onItemClick,l=e.onSymbolDelete,u=e.onInputFieldFocus;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(L,{dropdownVisible:t,inputLabel:n,menuItems:a,onInputFieldChange:o,onItemClick:i,onInputFieldFocus:u}),r.a.createElement($,{stockSymbols:c,onSymbolDelete:l}))},P=n(136),Y=n(67),z=n(133),q=n(134),H=n(135),R=function(e){var t=e.href,n=e.text;return r.a.createElement("a",{href:t,target:"_blank",style:{textDecoration:"none",color:"#607d8b"}},n)},Z=function(e){var t,n,a=e.messageBody,c=null===(t=a.match(/\$(.*?)(?=\$)|\$\S+/gi))||void 0===t?void 0:t.map((function(e){e=e.replace(" ","");var t="https://stocktwits.com/symbol/".concat(e.replace("$","").toUpperCase());return a=a.replace(e,"<S>"),{text:e,link:t}})),o=null===(n=a.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi))||void 0===n?void 0:n.map((function(e){return a=a.replace(e,"<L>"),{text:e,link:e}}));return r.a.createElement(r.a.Fragment,null,a.split("<S>").map((function(e,t){var n=null===c||void 0===c?void 0:c.shift();return r.a.createElement(r.a.Fragment,{key:t},-1===e.indexOf("<L>")?e:e.split("<L>").map((function(e,t){var n=null===o||void 0===o?void 0:o.shift();return r.a.createElement(r.a.Fragment,{key:t},e,n&&r.a.createElement(R,{text:n.text,href:n.link}))})),n&&r.a.createElement(R,{text:n.text,href:n.link}))})))},G=["January","February","March","April","May","June","July","August","September","October","November","December"],K=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.getDate(),r=G[e.getMonth()],c=e.getFullYear(),o=e.getHours(),i=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes().toString();return t?"".concat(t," at ").concat(o,":").concat(i):n?"".concat(a," ").concat(r," at ").concat(o,":").concat(i):"".concat(a," ").concat(r," ").concat(c,". at ").concat(o,":").concat(i)},U=function(e){if(!e)return null;var t=new Date,n=new Date(t.getTime()-864e5),a=Math.round((t.getTime()-e.getTime())/1e3),r=Math.round(a/60),c=t.toDateString()===e.toDateString(),o=n.toDateString()===e.toDateString(),i=t.getFullYear()===e.getFullYear();return a<5?"now":a<60?"".concat(a," seconds ago"):a<90?"about a minute ago":r<60?"".concat(r," minutes ago"):c?K(e,"Today"):o?K(e,"Yesterday"):i?K(e,void 0,!0):K(e)},Q=Object(p.a)((function(){return Object(w.a)({root:{display:"flex",flexDirection:"row",justifyContent:"space-bewteen",alignContent:"center",alignItems:"center",margin:20},details:{display:"flex",flexDirection:"column",width:"100%"},content:{flex:"1 0 auto",whiteSpace:"pre-line",textDecoration:"none",color:"hotpink",overflowWrap:"anywhere"},cover:{minWidth:50,height:50,margin:20}})})),X=function(e){var t=e.message,n=Object(a.useState)(U(new Date(t.created_at))),c=Object(E.a)(n,2),o=c[0],i=c[1],l=Q();return setInterval((function(){i(U(new Date(t.created_at)))}),1e3),r.a.createElement(z.a,{className:l.root},r.a.createElement(q.a,{className:l.cover,image:t.user.avatar_url?t.user.avatar_url:"/logo192.png",title:"Live from space album cover"}),r.a.createElement("div",{className:l.details},r.a.createElement(H.a,{className:l.content},r.a.createElement(s.a,{component:"h6",variant:"h6"},r.a.createElement(Z,{messageBody:t.body})),r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("span",null,t.user.name?t.user.name:t.user.username),r.a.createElement("span",null,o)))))},ee=function(e){var t=e.messages;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(X,{message:e,key:e.id})})))},te=n(142),ne=n(49),ae=n.n(ne),re=ae()("unique utils"),ce=function(e){return re("uniqueArrayById",{data:e}),Array.from(new Set(e.map((function(e){return e.id})))).map((function(t){return e.find((function(e){return e.id===t}))}))},oe=ae()("StockPage"),ie=function(){var e=Object(j.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/message/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(j.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/v1/symbol/search?keys=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.json());case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=Date.now()-60*t*60*1e3;return e.filter((function(e){return new Date(e.created_at).getTime()>n}))},se=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(E.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(0),m=Object(E.a)(s,2),f=m[0],p=m[1],d=Object(a.useState)(!1),g=Object(E.a)(d,2),b=g[0],h=g[1],k=Object(a.useState)([]),w=Object(E.a)(k,2),S=w[0],O=w[1],I=Object(a.useState)(0),F=Object(E.a)(I,2),D=F[0],C=F[1],T=Object(a.useState)(!1),A=Object(E.a)(T,2),B=A[0],N=A[1],L=Object(a.useState)(!1),M=Object(E.a)(L,2),_=M[0],V=M[1],W=function(){var e=Object(j.a)(x.a.mark((function e(){var t,n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(y.a)(S),n=Object(v.a)(l),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=22;break}return r=a.value,V(!0),e.t0=ce,e.t1=[],e.t2=Object(y.a)(t),e.t3=y.a,e.next=13,ie(r.id);case 13:e.t4=e.sent,e.t5=(0,e.t3)(e.t4),e.t6=e.t1.concat.call(e.t1,e.t2,e.t5),(t=(0,e.t0)(e.t6)).length>300&&(t=ue(t)),O(t.sort((function(e,t){return t.id-e.id}))),V(!1);case 20:e.next=4;break;case 22:e.next=27;break;case 24:e.prev=24,e.t7=e.catch(2),n.e(e.t7);case 27:return e.prev=27,n.f(),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[2,24,27,30]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){if(oe("stockSymbols Changed:",{stockSymbols:l}),f>0){var e=setInterval((function(){W()}),12e4);return function(){return clearInterval(e)}}}),[f,S,O]),Object(a.useEffect)((function(){S&&(oe("Message Count: ",S.length,l),C(S.length),l.forEach((function(e){return e.messages=S.filter((function(t){return-1!==t.symbols.findIndex((function(t){return t.id===e.id}))}))})),u(l))}),[S]);var $=function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.t0=c,e.next=4,le(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1),h(!0),e.next=11;break;case 9:c([]),h(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(j.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h(!1),!(l.length>=10)){e.next=4;break}return N(!0),e.abrupt("return");case 4:return a=l.filter((function(e){return e.id!==parseInt(t)})).concat(n.filter((function(e){return e.id===parseInt(t)}))),u(a),p(a.length),V(!0),e.t0=O,e.t1=ce,e.t2=[],e.t3=Object(y.a)(S),e.t4=y.a,e.next=15,ie(parseInt(t));case 15:e.t5=e.sent,e.t6=(0,e.t4)(e.t5),e.t7=e.t2.concat.call(e.t2,e.t3,e.t6),e.t8=(0,e.t1)(e.t7).sort((function(e,t){return t.id-e.id})),(0,e.t0)(e.t8),V(!1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{severity:"error",style:{marginBottom:10,display:B?"flex":"none"}},"Free API only supports 10 Symbols!"),r.a.createElement(P.a,{position:"sticky",color:"default"},r.a.createElement(J,{dropdownVisible:b,inputLable:"Search for stock(s), eg: AAPL or AAPL,BABA,BAC, etc...",menuItems:n,stockSymbols:l,onInputFieldChange:$,onItemClick:z,onSymbolDelete:function(e){l.length<=10&&N(!1);var t=S.filter((function(t){return-1===t.symbols.findIndex((function(t){return t.id===parseInt(e)}))})),n=l.filter((function(t){return t.id!==parseInt(e)}));n.forEach((function(e){return e.messages=t.filter((function(t){return-1!==t.symbols.findIndex((function(t){return t.id===e.id}))}))})),O(t),u(n),p(n.length)},onInputFieldFocus:function(){h(!0)}})),r.a.createElement(Y.a,{variant:"outlined",style:{background:"#ffcc80"}},r.a.createElement(te.a,{severity:"info",style:{marginTop:20,marginBottom:20,marginLeft:50,marginRight:50,display:_?"none":"flex"}},"Total Tweets: ",D,"."),r.a.createElement(te.a,{severity:"success",style:{marginTop:20,marginBottom:20,marginLeft:50,marginRight:50,display:_?"flex":"none"}},"Fetching messages..."),r.a.createElement(ee,{messages:S})))};function me(){return r.a.createElement(s.a,{variant:"body2",color:"textSecondary",align:"right"},"Copyright \xa9 ",r.a.createElement(f.a,{color:"inherit",href:"https://haos.io/"},"STTail")," ",(new Date).getFullYear(),".")}function fe(){return r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement(m.a,{my:4},r.a.createElement(s.a,{variant:"h4",component:"h1",gutterBottom:!0},"StockTwits Tail"),r.a.createElement(se,null),r.a.createElement(h,null),r.a.createElement(me,null)))}var pe=n(50),de=n(66),ge=Object(de.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:pe.a.A400},background:{default:"#fff"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{theme:ge},r.a.createElement(i.a,null),r.a.createElement(fe,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.8716b10d.chunk.js.map