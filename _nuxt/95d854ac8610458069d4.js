(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{237:function(t,e,r){var map={"./dos/README.md":[274,12],"./uno/README.md":[275,13]};function n(t){var e=map[t];return e?r.e(e[1]).then(function(){var t=e[0];return r.t(t,7)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(map)},n.id=237,t.exports=n},422:function(t,e,r){"use strict";r.r(e);r(21),r(96),r(45);var n=r(6),o=["uno","dos"],c={head:function(){return{title:"Folders"}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var c,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f=function(){return(f=Object(n.a)(regeneratorRuntime.mark(function t(e){var content;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(237)("./"+e+"/README.md");case 2:return(content=t.sent).path="/folders/"+e,t.abrupt("return",content);case 5:case"end":return t.stop()}},t,this)}))).apply(this,arguments)},c=function(t){return f.apply(this,arguments)},e.store,e.params,t.abrupt("return",Promise.all(o.map(function(t){return c(t)})).then(function(t){return{folders:t}}));case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},f=r(25),l=r(95),d=r.n(l),m=r(420),v=r(88),h=r(89),component=Object(f.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",[r("v-data-table",{attrs:{items:t.folders},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.attributes.name))]),t._v(" "),r("td",[t._v(t._s(e.item.attributes.tags))]),t._v(" "),r("td",{staticClass:"justify-center layout px-0"},[r("router-link",{attrs:{to:e.item.path}},[t._v("Ver")])],1)]}}])})],1)],1)},[],!1,null,null,null);e.default=component.exports;d()(component,{VDataTable:m.a,VFlex:v.a,VLayout:h.a})}}]);