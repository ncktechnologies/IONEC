(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(t,e,r){var content=r(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7240cfa6",content,!0,{sourceMap:!1})},226:function(t,e,r){"use strict";var n=r(7),o=r(227)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(73)(c)},227:function(t,e,r){var n=r(29),o=r(72),c=r(30),l=r(21),v=r(228);t.exports=function(t,e){var r=1==t,d=2==t,_=3==t,f=4==t,m=6==t,h=5==t||m,C=e||v;return function(e,v,x){for(var w,y,P=c(e),O=o(P),j=n(v,x,3),k=l(O.length),A=0,D=r?C(e,k):d?C(e,0):void 0;k>A;A++)if((h||A in O)&&(y=j(w=O[A],A,P),t))if(r)D[A]=y;else if(y)switch(t){case 3:return!0;case 5:return w;case 6:return A;case 2:D.push(w)}else if(f)return!1;return m?-1:_||f?f:D}}},228:function(t,e,r){var n=r(229);t.exports=function(t,e){return new(n(t))(e)}},229:function(t,e,r){var n=r(10),o=r(113),c=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},230:function(t,e,r){"use strict";var n=r(213);r.n(n).a},231:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,"span[data-v-3c9cacbe]{display:block;margin-bottom:1rem}",""])},241:function(t,e,r){"use strict";r.r(e);r(74),r(31),r(22),r(13),r(57);var n=r(51),o=(r(226),r(39),r(114));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"Services",middleware:"page",methods:{bg:function(image){return{backgroundImage:"url('".concat(image,"')")}}},computed:{prevPage:function(){var t;return 0===this.index?(t=o.length-1,o[t]):(t=this.index-1,o[t])},nextPage:function(){var t;return this.index===o.length-1?o[t=0]:(t=this.index+1,o[t])}},asyncData:function(t){var e=t.route,r=o.filter((function(t){return t.name===e.params.id})),n=o.findIndex((function(t){return t.name===e.params.id}));return{page:l({},r[0]),index:n}}},d=(r(230),r(5)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"product-page"}},[r("div",{staticClass:"hero",style:t.bg(t.page.image)}),t._v(" "),t.page.first_part?r("section",{staticClass:"problem container"},[r("ul",{staticClass:"list"},t._l(t.page.first_part.list,(function(li){return r("li",[t._v(" — "+t._s(li))])})),0),t._v(" "),r("div",{staticClass:"more"},[r("h1",{staticClass:"title",class:t.page.name},[t._v(t._s(t.page?t.page.first_part.title:""))]),t._v(" "),r("p",{staticClass:"content"},t._l(t.page.first_part.problem,(function(e){return r("span",[t._v("  "+t._s(e)+" ")])})),0)])]):t._e(),t._v(" "),t.page.second_part?r("section",{staticClass:"card-wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"image"},[r("img",{attrs:{src:t.page.second_part.image}})])]):t._e(),t._v(" "),t.page.third_part?r("section",{staticClass:"solution-wrapper container"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:t.page.third_part.image}})]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-aos":"fade-right"}},[r("h1",{staticClass:"title",class:t.page.name},[t._v(t._s(t.page.third_part.title))]),t._v(" "),r("div",{staticClass:"content"},t._l(t.page.third_part.text,(function(e){return r("span",[t._v("\n          "+t._s(e)+"\n        ")])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"drinks-wrapper"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:t.page.fourth_part.image}})]),t._v(" "),r("div",{staticClass:"text",class:t.page.name},[r("p",{attrs:{"data-aos":"fade-down"}},[t._v(t._s(t.page.fourth_part.text)+" ")])])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"pages-wrapper"},[r("a",{attrs:{href:"/product/"+t.prevPage.name}},[r("div",{staticClass:"page",class:t.prevPage.name},[r("p",{staticClass:"control"},[t._v(" Previous Project")]),t._v(" "),r("h1",{staticClass:"title"},[t._v(" "+t._s(t.prevPage.name)+" ")])])]),t._v(" "),r("a",{attrs:{href:"/product/"+t.nextPage.name}},[r("div",{staticClass:"page",class:t.nextPage.name},[r("p",{staticClass:"control"},[t._v(" Next Project")]),t._v(" "),r("h1",{staticClass:"title"},[t._v(" "+t._s(t.nextPage.name)+" ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("div",{staticClass:"text-wrap",attrs:{"data-aos":"slide-right"}},[e("span",[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta dolor dolorem ea error\n        impedit,\n        inventore ipsam itaque laboriosam minus mollitia nobis numquam porro quo repudiandae suscipit temporibus.\n        ")]),this._v(" "),e("span",[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta dolor dolorem ea error\n        impedit,\n        inventore ipsam itaque laboriosam minus mollitia nobis numquam porro quo repudiandae suscipit temporibus.\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"work"}},[e("h1",{staticClass:"title"},[this._v("Let's get to work")]),this._v(" "),e("p",{staticClass:"sub"},[this._v("\n      Have an unsolvable problem or an audacious idea?\n    ")]),this._v(" "),e("span",{staticClass:"subtitle"},[this._v("\n        We'd love to hear about it.\n      ")]),this._v(" "),e("a",{staticClass:"contact",attrs:{href:"/contact"}},[this._v(" Contact us ")])])}],!1,null,"3c9cacbe",null);e.default=component.exports}}]);