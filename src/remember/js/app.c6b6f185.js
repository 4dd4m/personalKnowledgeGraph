(function(e){function t(t){for(var c,i,u=t[0],l=t[1],s=t[2],a=0,b=[];a<u.length;a++)i=u[a],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09b1":function(e,t,n){},"0a9e":function(e,t,n){"use strict";n("8c25")},"46e0":function(e,t,n){},5373:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,o,i){var u=Object(c["q"])("TheHeader"),l=Object(c["q"])("TheResource");return Object(c["l"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(u,{title:"Do you Remember me?"}),Object(c["j"])(l)],64)}function o(e,t,n,r,o,i){return Object(c["l"])(),Object(c["g"])("header",null,[Object(c["h"])("h1",null,Object(c["s"])(n.title),1)])}var i={props:["title"]},u=(n("a5d6"),n("6b0d")),l=n.n(u);const s=l()(i,[["render",o],["__scopeId","data-v-4ed961a0"]]);var d=s,a=Object(c["i"])("Stored Resources"),b=Object(c["i"])("Add Resource");function f(e,t,n,r,o,i){var u=Object(c["q"])("base-button"),l=Object(c["q"])("base-card");return Object(c["l"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(l,null,{default:Object(c["t"])((function(){return[Object(c["j"])(u,{onClick:t[0]||(t[0]=function(e){return i.setSelectedTab("StoredResources")}),mode:i.storedResButtonMode},{default:Object(c["t"])((function(){return[a]})),_:1},8,["mode"]),Object(c["j"])(u,{onClick:t[1]||(t[1]=function(e){return i.setSelectedTab("AddResource")}),mode:i.addResButtonMode},{default:Object(c["t"])((function(){return[b]})),_:1},8,["mode"])]})),_:1}),(Object(c["l"])(),Object(c["e"])(c["b"],null,[(Object(c["l"])(),Object(c["e"])(Object(c["r"])(o.selectedTab)))],1024))],64)}n("d3b7"),n("25f0"),n("c740"),n("a434"),n("a4d3"),n("e01a"),n("9911");function j(e,t,n,r,o,i){var u=Object(c["q"])("LearningResources");return Object(c["l"])(),Object(c["g"])("ul",null,[(Object(c["l"])(!0),Object(c["g"])(c["a"],null,Object(c["o"])(i.resources,(function(e){return Object(c["l"])(),Object(c["e"])(u,{key:e.id,title:e.title,id:e.id,description:e.description,link:e.link},null,8,["title","id","description","link"])})),128))])}var O=Object(c["i"])("Delete"),p=["href"];function h(e,t,n,r,o,i){var u=Object(c["q"])("base-button"),l=Object(c["q"])("base-card");return Object(c["l"])(),Object(c["g"])("li",null,[Object(c["j"])(l,null,{default:Object(c["t"])((function(){return[Object(c["h"])("header",null,[Object(c["h"])("h3",null,Object(c["s"])(n.title),1),Object(c["j"])(u,{onClick:t[0]||(t[0]=function(e){return i.removeResource(n.id)}),mode:"flat",id:n.id},{default:Object(c["t"])((function(){return[O]})),_:1},8,["id"])]),Object(c["h"])("p",null,Object(c["s"])(n.description),1),Object(c["h"])("nav",null,[Object(c["h"])("a",{href:n.link},"View Resource",8,p)])]})),_:1})])}var v={props:["id","title","description","link"],inject:["removeResource"]};n("ad18");const m=l()(v,[["render",h],["__scopeId","data-v-4cc3aa04"]]);var R=m,y={inject:["resources"],components:{LearningResources:R}};n("de97");const k=l()(y,[["render",j],["__scopeId","data-v-1b551f84"]]);var g=k,_=function(e){return Object(c["n"])("data-v-a5081d82"),e=e(),Object(c["m"])(),e},I=_((function(){return Object(c["h"])("p",null,"One of the input is invalid",-1)})),T=_((function(){return Object(c["h"])("p",null,"Check them",-1)})),S=Object(c["i"])("Okay"),w={type:""},C={class:"form-control"},q=_((function(){return Object(c["h"])("label",{for:"title"},"Title",-1)})),x=_((function(){return Object(c["h"])("form",{type:""},null,-1)})),$={type:"text",name:"title",id:"title",ref:"titleInput"},B={class:"form-control"},M=_((function(){return Object(c["h"])("label",{for:"description"},"Description",-1)})),P={type:"text",name:"description",id:"description",row:"3",ref:"descInput"},D={class:"form-control"},A=_((function(){return Object(c["h"])("label",{for:"link"},"Link",-1)})),E={type:"url",name:"link",id:"link",ref:"linkInput"},G=Object(c["i"])("Submit");function L(e,t,n,r,o,i){var u=Object(c["q"])("base-button"),l=Object(c["q"])("base-dialog"),s=Object(c["q"])("base-card");return Object(c["l"])(),Object(c["g"])(c["a"],null,[o.isInvalid?(Object(c["l"])(),Object(c["e"])(l,{key:0,onClose:i.confirmError,title:"Invalid Title"},{default:Object(c["t"])((function(){return[I,T]})),actions:Object(c["t"])((function(){return[Object(c["j"])(u,{onClick:i.confirmError},{default:Object(c["t"])((function(){return[S]})),_:1},8,["onClick"])]})),_:1},8,["onClose"])):Object(c["f"])("",!0),Object(c["j"])(s,null,{default:Object(c["t"])((function(){return[Object(c["h"])("form",w,[Object(c["h"])("div",C,[q,x,Object(c["h"])("input",$,null,512)]),Object(c["h"])("div",B,[M,Object(c["h"])("textarea",P,null,512)])]),Object(c["h"])("div",D,[A,Object(c["h"])("input",E,null,512)]),Object(c["j"])(u,{onClick:i.submitData,type:"submit"},{default:Object(c["t"])((function(){return[G]})),_:1},8,["onClick"])]})),_:1})],64)}n("498a");var H={inject:["addResource"],data:function(){return{isInvalid:!1}},methods:{submitData:function(){var e=this.$refs.titleInput.value,t=this.$refs.descInput.value,n=this.$refs.linkInput.value;""!==n.trim()&&""!==e.trim()&&""!==t.trim()?this.addResource(e,t,n):this.isInvalid=!0},confirmError:function(){this.isInvalid=!1}}};n("ad9f");const J=l()(H,[["render",L],["__scopeId","data-v-a5081d82"]]);var V=J,z={components:{StoredResources:g,AddResource:V},data:function(){return{selectedTab:"StoredResources",storedResources:[{id:"official-guide",title:"Official Guide",description:"The official vue documentation",link:"https://vuejs.org"},{id:"official-guide2",title:"Grepolis.com",description:"Bible",link:"https://Grepolis.com"}]}},methods:{setSelectedTab:function(e){this.selectedTab=e},addResource:function(e,t,n){var c={id:(new Date).toString(),title:e,description:t,link:n};this.storedResources.unshift(c),this.selectedTab="storedResources"},removeResource:function(e){var t=this.storedResources.findIndex((function(t){return e===t.id}));this.storedResources.splice(t,1)}},provide:function(){return{resources:this.storedResources,addResource:this.addResource,removeResource:this.removeResource}},computed:{storedResButtonMode:function(){return"StoredResources"===this.selectedTab?null:"flat"},addResButtonMode:function(){return"AddResource"===this.selectedTab?null:"flat"}}};const F=l()(z,[["render",f]]);var K=F,N={components:{TheHeader:d,TheResource:K}};n("0a9e");const Q=l()(N,[["render",r]]);var U=Q;function W(e,t){return Object(c["l"])(),Object(c["g"])("div",null,[Object(c["p"])(e.$slots,"default",{},void 0,!0)])}n("b5cd");const X={},Y=l()(X,[["render",W],["__scopeId","data-v-6ab4c19a"]]);var Z=Y,ee=["type"];function te(e,t,n,r,o,i){return Object(c["l"])(),Object(c["g"])("button",{type:n.type,class:Object(c["k"])(n.mode),onClick:t[0]||(t[0]=function(){return i.deleteButton&&i.deleteButton.apply(i,arguments)})},[Object(c["p"])(e.$slots,"default",{},void 0,!0)],10,ee)}var ne={props:["id","type","mode"],methods:{deleteButton:function(){}}};n("6173");const ce=l()(ne,[["render",te],["__scopeId","data-v-fe7f0de0"]]);var re=ce,oe={open:""};function ie(e,t,n,r,o,i){var u=Object(c["q"])("base-button");return Object(c["l"])(),Object(c["e"])(c["c"],{to:"body"},[Object(c["h"])("div",{onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(c["h"])("dialog",oe,[Object(c["h"])("header",null,[Object(c["p"])(e.$slots,"header",{},(function(){return[Object(c["h"])("h2",null,Object(c["s"])(n.title),1)]}),!0)]),Object(c["h"])("section",null,[Object(c["p"])(e.$slots,"default",{},void 0,!0)]),Object(c["h"])("menu",null,[Object(c["p"])(e.$slots,"actions",{},(function(){return[Object(c["j"])(u,{onClick:t[1]||(t[1]=function(t){return e.$emit("close")})})]}),!0)])])])}var ue={emits:["close"],props:{title:{type:String,required:!1}}};n("a3bb");const le=l()(ue,[["render",ie],["__scopeId","data-v-1d1fd1e8"]]);var se=le,de=Object(c["d"])(U);de.component("base-card",Z),de.component("base-button",re),de.component("base-dialog",se),de.mount("#app")},6173:function(e,t,n){"use strict";n("46e0")},"8c25":function(e,t,n){},"8d87":function(e,t,n){},9619:function(e,t,n){},a3bb:function(e,t,n){"use strict";n("5373")},a5d6:function(e,t,n){"use strict";n("8d87")},ad18:function(e,t,n){"use strict";n("9619")},ad9f:function(e,t,n){"use strict";n("09b1")},b5cd:function(e,t,n){"use strict";n("d63c")},d63c:function(e,t,n){},de97:function(e,t,n){"use strict";n("df3d")},df3d:function(e,t,n){}});
//# sourceMappingURL=app.c6b6f185.js.map