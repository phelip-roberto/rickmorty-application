(this["webpackJsonprickmorty-application"]=this["webpackJsonprickmorty-application"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(4),i=c.n(a),r=(c(31),c(32),c(10)),l=c.n(r),o=c(21),m=c(6),j=c(22),d=c.n(j),u=c.p+"static/media/logo.d8bb791a.svg",b=c(79),p=c(1),h=function(e){var t=e.img,c=e.status,n=e.name,a=e.species,i=e.origin,r=e.location,l=e.gender,o=Object(s.useState)(c),j=Object(m.a)(o,2),d=j[0];j[1];var u=Object(s.useState)(!1),h=Object(m.a)(u,2),x=h[0],O=h[1],f=function(){O(!1)},g=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:"Card-image "+("Alive"===d?"":"dead"),src:t,alt:n}),Object(p.jsxs)("span",{className:"Card-footer",children:[Object(p.jsx)("p",{className:"name",children:n}),Object(p.jsx)("p",{className:"species",children:a})]})]})},N=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"row mt-2 mb-3",children:[Object(p.jsx)("p",{className:"info-title",children:"A B O U T"}),Object(p.jsxs)("h6",{children:["Name: ",n,";  Status: ",c,";   Specie: ",a,";   Gender: ",l," "]})]}),Object(p.jsxs)("div",{className:"row mt-2 mb-3",children:[Object(p.jsx)("p",{className:"info-title",children:"O R I G I N"}),Object(p.jsxs)("span",{className:"mt-2",children:[Object(p.jsx)("p",{className:"p-type",children:i.type}),Object(p.jsx)("p",{className:"p-name",children:i.name}),Object(p.jsx)("p",{className:"p-dimension",children:i.dimension})]})]}),Object(p.jsxs)("div",{className:"row mt-2 mb-3",children:[Object(p.jsx)("p",{className:"info-title",children:"L O C A T I O N"}),Object(p.jsxs)("span",{className:"mt-2",children:[Object(p.jsx)("p",{className:"p-type",children:r.type}),Object(p.jsx)("p",{className:"p-name",children:r.name}),Object(p.jsx)("p",{className:"p-dimension",children:r.dimension})]})]})]})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){O(!0)},className:"card mx-auto my-2",children:Object(p.jsx)("div",{className:"card-body Card-image-wrapper",children:Object(p.jsx)(g,{})})}),Object(p.jsx)(b.a,{open:x,onClose:f,"aria-labelledby":"Modal de Informa\xe7\xf5es","aria-describedby":"Modal com as informa\xe7\xf5es complementares de cada personagem",className:"Modal",children:Object(p.jsx)("div",{className:"info-modal d-flex justify-content-center",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("span",{className:"mx-3 mt-4 btn d-sm-none",style:{position:"absolute",color:"white"},onClick:function(){return f()},children:Object(p.jsx)("i",{className:"far fa-times-circle"})}),Object(p.jsxs)("div",{className:"row mx-auto my-auto",style:{width:"75%",minHeight:"50vh"},children:[Object(p.jsx)("div",{className:"col-10 col-sm-4 my-5 my-sm-0 ",children:Object(p.jsx)(g,{})}),Object(p.jsx)("div",{className:"col-10 col-sm-8",children:Object(p.jsx)(N,{})})]})]})})})]})},x=function(e){var t=e.res.results;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"card-wrapper",children:t.map((function(e){return Object(p.jsx)(h,{img:e.image,status:e.status,name:e.name,species:e.species,origin:e.origin,location:e.location,gender:e.gender},e.id)}))})})},O=c(11),f=function(e){var t=e.info,c=e.consumeApi,s=t.next?t.next-1:t.pages,n=function(e){for(var c=[],s=e;s>0&&s>=e-2;s--)c.push(s);c=c.reverse();for(var n=e+1;n<=t.pages&&n<=e+2;n++)c.push(n);if(1===e){var a=c.length-1,i=c[a];c.push(i+1,i+2)}else if(2===e){var r=c.length-1,l=c[r];c.push(l+1)}else if(e===t.pages){var o=c[0];c=[o-2,o-1].concat(Object(O.a)(c))}else if(e===t.pages-1){var m=c[0];c=[m-1].concat(Object(O.a)(c))}return c}(s);return Object(p.jsx)("div",{className:"col-8 mx-auto my-3 d-flex justify-content-center",children:Object(p.jsxs)("ul",{className:"card-pages list-group list-group-horizontal",children:[Object(p.jsx)("li",{className:"mx-2 list-group-item btn ".concat(null===t.prev?"disabled":""),onClick:function(){return c(t.prev)},children:Object(p.jsx)("i",{className:"fas fa-angle-left"})},"prev"),n.map((function(e){return Object(p.jsx)("li",{onClick:function(){return c(e)},className:"btn d-none d-sm-block mx-2 list-group-item ".concat(e===s?"actualPage":""),children:e},e)})),Object(p.jsx)("li",{className:"btn d-sm-none mx-2 list-group-item actualPage",children:s},"actualPage"),Object(p.jsx)("li",{className:"mx-2 list-group-item btn ".concat(null===t.next?"disabled":""),onClick:function(){return c(t.next)},children:Object(p.jsx)("i",{className:"fas fa-angle-right"})},"next")]})})},g=c(25),N=c.n(g),v="https://rickandmortyapi.com/graphql",y=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(m.a)(a,2),r=i[0],j=i[1],b=Object(s.useState)(""),h=Object(m.a)(b,2),O=h[0],g=h[1],y=Object(s.useState)(!1),C=Object(m.a)(y,2),w=C[0],S=C[1];function k(){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(l.a.mark((function e(){var t,s,n,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,S(!0),s="\n      query {\n        characters(page: ".concat(t,', filter: { name: "').concat(c,'" }) {\n          info {\n            count\n            pages\n            next\n            prev\n          }\n          results {\n            id\n            name\n            status\n            species\n            image\n            gender\n            origin {\n              name\n              type\n              dimension\n            }\n            location {\n              name\n              type\n              dimension\n            }\n          }\n        }\n      }\n    '),e.next=5,d()({method:"POST",url:v,data:{query:s}});case 5:200===(n=e.sent).status?(g(n.data.data.characters.info),j(n.data.data.characters),S(!1)):(g([]),j([]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-8 mx-auto mt-5",children:Object(p.jsx)("img",{src:u,className:"Logo",alt:"logo"})}),Object(p.jsxs)("div",{className:"col-sm-8 col-10 mx-auto mt-5",children:[Object(p.jsx)("input",{type:"text",className:"Search Inputs mr-sm-2 mr-1",placeholder:"Search characters",value:c,onChange:function(e){n(e.target.value)}}),Object(p.jsx)("button",{className:"Btn-search Inputs ml-sm-2 ml-1",onClick:function(){return k()},children:"Search"})]}),Object(p.jsx)("div",{className:"col-10 mx-auto mt-3 mt-sm-5",children:Object(p.jsx)("section",{children:r?Object(p.jsx)(x,{res:r}):""})}),r?Object(p.jsx)(f,{info:O,consumeApi:k}):""]}),Object(p.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:250,width:250,timeout:3e3,visible:w})]})};var C=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:"Body",children:Object(p.jsx)(y,{})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};c(73);i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),w()}},[[74,1,2]]]);
//# sourceMappingURL=main.dc2e7e00.chunk.js.map