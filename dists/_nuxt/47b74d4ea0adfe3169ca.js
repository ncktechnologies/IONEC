(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{215:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("271c7bab",content,!0,{sourceMap:!1})},228:function(t,e,r){"use strict";var n=r(8),o=r(229)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(74)(c)},229:function(t,e,r){var n=r(30),o=r(73),c=r(31),l=r(22),v=r(230);t.exports=function(t,e){var r=1==t,d=2==t,_=3==t,m=4==t,f=6==t,h=5==t||f,C=e||v;return function(e,v,x){for(var w,y,P=c(e),O=o(P),j=n(v,x,3),k=l(O.length),A=0,D=r?C(e,k):d?C(e,0):void 0;k>A;A++)if((h||A in O)&&(y=j(w=O[A],A,P),t))if(r)D[A]=y;else if(y)switch(t){case 3:return!0;case 5:return w;case 6:return A;case 2:D.push(w)}else if(m)return!1;return f?-1:_||m?m:D}}},230:function(t,e,r){var n=r(231);t.exports=function(t,e){return new(n(t))(e)}},231:function(t,e,r){var n=r(11),o=r(115),c=r(2)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},232:function(t,e,r){"use strict";var n=r(215);r.n(n).a},233:function(t,e,r){(e=r(20)(!1)).push([t.i,"span[data-v-12667a92]{display:block;margin-bottom:1rem}",""]),t.exports=e},243:function(t,e,r){"use strict";r.r(e);r(75),r(32),r(23),r(15),r(59);var n=r(53),o=(r(228),r(41),r(116));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"Services",middleware:"page",methods:{bg:function(image){return{backgroundImage:"url('".concat(image,"')")}}},computed:{prevPage:function(){var t;return 0===this.index?(t=o.length-1,o[t]):(t=this.index-1,o[t])},nextPage:function(){var t;return this.index===o.length-1?o[t=0]:(t=this.index+1,o[t])}},asyncData:function(t){var e=t.route,r=o.filter((function(t){return t.name===e.params.id})),n=o.findIndex((function(t){return t.name===e.params.id}));return{page:l({},r[0]),index:n}}},d=(r(232),r(5)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"product-page"}},[r("div",{staticClass:"hero",style:t.bg(t.page.image)}),t._v(" "),t.page.first_part?r("section",{staticClass:"problem container"},[r("ul",{staticClass:"list"},t._l(t.page.first_part.list,(function(li){return r("li",[t._v(" — "+t._s(li))])})),0),t._v(" "),r("div",{staticClass:"more"},[r("h1",{staticClass:"title",class:t.page.name},[t._v(t._s(t.page?t.page.first_part.title:""))]),t._v(" "),r("p",{staticClass:"content"},t._l(t.page.first_part.problem,(function(e){return r("span",[t._v("  "+t._s(e)+" ")])})),0)])]):t._e(),t._v(" "),t.page.second_part?r("section",{staticClass:"card-wrapper"},[t._m(0),t._v(" "),r("div",{staticClass:"image"},[r("img",{attrs:{src:t.page.second_part.image}})])]):t._e(),t._v(" "),t.page.third_part?r("section",{staticClass:"solution-wrapper container"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:t.page.third_part.image}})]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-aos":"fade-right"}},[r("h1",{staticClass:"title",class:t.page.name},[t._v(t._s(t.page.third_part.title))]),t._v(" "),r("div",{staticClass:"content"},t._l(t.page.third_part.text,(function(e){return r("span",[t._v("\n          "+t._s(e)+"\n        ")])})),0)])]):t._e(),t._v(" "),r("div",{staticClass:"drinks-wrapper"},[r("div",{staticClass:"image"},[r("img",{attrs:{src:t.page.fourth_part.image}})]),t._v(" "),r("div",{staticClass:"text",class:t.page.name},[r("p",{attrs:{"data-aos":"fade-down"}},[t._v(t._s(t.page.fourth_part.text)+" ")])])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"pages-wrapper"},[r("a",{attrs:{href:"/product/"+t.prevPage.name}},[r("div",{staticClass:"page",class:t.prevPage.name},[r("p",{staticClass:"control"},[t._v(" Previous Project")]),t._v(" "),r("h1",{staticClass:"title"},[t._v(" "+t._s(t.prevPage.name)+" ")])])]),t._v(" "),r("a",{attrs:{href:"/product/"+t.nextPage.name}},[r("div",{staticClass:"page",class:t.nextPage.name},[r("p",{staticClass:"control"},[t._v(" Next Project")]),t._v(" "),r("h1",{staticClass:"title"},[t._v(" "+t._s(t.nextPage.name)+" ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("div",{staticClass:"text-wrap",attrs:{"data-aos":"slide-right"}},[e("span",[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta dolor dolorem ea error\n        impedit,\n        inventore ipsam itaque laboriosam minus mollitia nobis numquam porro quo repudiandae suscipit temporibus.\n        ")]),this._v(" "),e("span",[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta dolor dolorem ea error\n        impedit,\n        inventore ipsam itaque laboriosam minus mollitia nobis numquam porro quo repudiandae suscipit temporibus.\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"work"}},[e("h1",{staticClass:"title"},[this._v("Let's get to work")]),this._v(" "),e("p",{staticClass:"sub"},[this._v("\n      Have an unsolvable problem or an audacious idea?\n    ")]),this._v(" "),e("span",{staticClass:"subtitle"},[this._v("\n        We'd love to hear about it.\n      ")]),this._v(" "),e("a",{staticClass:"contact",attrs:{href:"/contact"}},[this._v(" Contact us ")])])}],!1,null,"12667a92",null);e.default=component.exports}}]);