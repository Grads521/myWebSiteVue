(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/myWebSiteVue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0414":function(t,e,n){},"279d":function(t,e,n){t.exports=n.p+"img/photo1.83b472d6.jpg"},"3e27":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"menu-container"},[n("router-link",{attrs:{to:"/"}},[t._v("Биография")]),n("router-link",{attrs:{to:"/achievements"}},[t._v("Достижения")]),n("router-link",{attrs:{to:"/game"}},[t._v("Викторина")])],1)])},i=[]},"4beb":function(t,e,n){},"4d9e":function(t,e,n){"use strict";n("0414")},"4de6":function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"positioner"},[n("Header"),n("router-view")],1)},a=[],o=n("71c2"),s={components:{Header:o["default"]}},c=s,u=(n("034f"),n("2877")),l=Object(u["a"])(c,i,a,!1,null,null,null),f=l.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"wrapper"},[r("div",[r("img",{attrs:{src:n("279d"),alt:"",width:"20%",height:"20%"}})]),r("p",{staticClass:"fio"},[t._v(" "+t._s(t.fio)+" ")]),r("transition",{attrs:{name:"fade"}},[t.isPhoneVisible?r("p",[t._v("89211834241")]):t._e()]),r("button",{on:{click:t.togglePhoneVisibility}},[r("p",[t._v(t._s(t.isPhoneVisible?"Скрыть телефон":" Показать телефон"))])])],1)])},v=[],h={data:function(){return{fio:"Исаев Максим Сергеевич",isPhoneVisible:!1}},methods:{togglePhoneVisibility:function(){this.isPhoneVisible=!this.isPhoneVisible}}},b=h,x=(n("d19c"),Object(u["a"])(b,d,v,!1,null,"572f9aa8",null)),m=x.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("ul",{attrs:{id:"example-2"}},[t._l(t.chapters,(function(e,r){return n("li",{key:r},[t._v(" "+t._s(r+1)+". "+t._s(e)+" ")])})),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newChapter,expression:"newChapter"}],attrs:{cols:"40",rows:"3"},domProps:{value:t.newChapter},on:{input:function(e){e.target.composing||(t.newChapter=e.target.value)}}})],2),n("button",{on:{click:t.addChapter}},[t._v("Добавить")]),n("button",{on:{click:t.cleanTextarea}},[t._v("Очистить")])])},w=[],y={data:function(){return{chapters:["Глава 1","Глава 2","Глава 3"],newChapter:""}},methods:{addChapter:function(){this.chapters.push(this.newChapter),this.newChapter=""},cleanTextarea:function(){this.newChapter=""}}},g=y,C=(n("8099"),Object(u["a"])(g,_,w,!1,null,"a94d67c0",null)),O=C.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"nameGame"},[t._v(t._s(t.title)+" ")]),t.visibleStartButton?n("button",{staticClass:"startButton",on:{click:t.startGame}},[t._v("Старт")]):t._e(),t.visibleGame?n("div",[t._l(t.questions,(function(e,r){return n("div",{key:e.text},[r===t.questionIndex?n("div",[n("div",{staticClass:"question"},[t._v(" "+t._s(e.text)+" ")]),n("div",{staticClass:"allAnswer"},t._l(e.answers,(function(e,i){return n("div",{key:e.text,staticClass:"answer"},[n("input",{attrs:{type:"radio",id:i,name:r},domProps:{value:i}}),n("label",{attrs:{for:i}},[t._v(t._s(e.text))])])})),0)]):t._e()])})),n("button",{on:{click:t.acceptButton}},[t._v("Потвердить")])],2):t._e()])])},j=[],k={data:function(){return{title:"Кто хочет стать миллионером?",questions:[{text:"Ио это спутник...?",answers:[{text:"Земли"},{text:"Марса"},{text:"Юпитера",correct:!0},{text:"Венеры"}]},{text:"На какой планете кратеры называют в честь деятелей культуры?",answers:[{text:"Меркурий",correct:!0},{text:"Нептун"},{text:"Венера"},{text:"Марс"}]},{text:"Сколько спутников Юпитера было открыто Галилео Галилеем?",answers:[{text:"2"},{text:"5"},{text:"12"},{text:"4",correct:!0}]},{text:"Какое небесное тело вращается вокруг Земли?",answers:[{text:"Луна",correct:!0},{text:"Юпитер"},{text:"Фобос"},{text:"Уран"}]},{text:"Какова температура закипания воды в градусах по Цельсию?",answers:[{text:"80"},{text:"0"},{text:"40"},{text:"100",correct:!0}]}],visibleGame:!1,visibleStartButton:!0,questionIndex:0,id:null}},methods:{startGame:function(){this.visibleGame=!0,this.visibleStartButton=!1},acceptButton:function(){this.questionIndex++}}},S=k,V=(n("4d9e"),Object(u["a"])(S,P,j,!1,null,"aebadf16",null)),q=V.exports,B=new p["a"]({mode:"history",routes:[{path:"/",component:m},{path:"/achievements",component:O},{path:"/game",component:q}]});r["a"].use(p["a"]),new r["a"]({render:function(t){return t(f)},router:B}).$mount("#app")},"6d91":function(t,e,n){},"71c2":function(t,e,n){"use strict";var r=n("3e27"),i=n("d385"),a=(n("e3e8"),n("2877")),o=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"24c5f302",null);e["default"]=o.exports},"75a6":function(t,e,n){},8099:function(t,e,n){"use strict";n("6d91")},"85ec":function(t,e,n){},d19c:function(t,e,n){"use strict";n("4beb")},d385:function(t,e,n){"use strict";var r=n("4de6"),i=n.n(r);e["default"]=i.a},e3e8:function(t,e,n){"use strict";n("75a6")}});
//# sourceMappingURL=app.ebe94644.js.map