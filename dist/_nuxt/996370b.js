(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(t,e,r){var content=r(265);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("86086344",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";r(250)},265:function(t,e,r){(e=r(27)(!1)).push([t.i,"h1[data-v-085b6032]{text-align:center;margin-top:15px}",""]),t.exports=e},273:function(t,e,r){"use strict";r.r(e);r(24),r(49);var l=r(6),n={name:"VolunteerPage",head:function(){return{title:this.getVolunteerData.name,meta:[{name:"twitter:title",content:"This Volunteer Rocks:"},{name:"twitter:description",content:this.getVolunteerData.name},{name:"twitter:image",content:this.getVolunteerData.image_url},{name:"twitter:card",content:"summary_large_image"}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,l=t.$axios,e.next=3,l.$get("volunteers/".concat(r.voloId));case 3:return n=e.sent,e.abrupt("return",{getVolunteerData:n});case 5:case"end":return e.stop()}}),e)})))()},created:function(){console.clear()}},o=(r(264),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap w-full justify-center "},[r("h1",{staticClass:"text-gray-900  bg-transparent w-5/6 font-semibold text-5xl font-sans"},[t._v("\n          Here Is Someone Special For You")]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center lg:flex-no-wrap  m-12 w-3/4 md:w-1/2 border-solid border-gray-600 border-2 px-6 py-6 bg-gray-500 rounded-lg",attrs:{id:"card-container"}},[r("div",{staticClass:"max-w-1/2 lg:max-w-2/6 m-4"},[r("img",{staticClass:"rounded-full",attrs:{src:t.getVolunteerData.image_url}})]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center lg:justify-between mx-2 lg:mx-8 px-2 w-full lg:w-4/6 border-0 border-solid lg:border-l-2 border-gray-600 "},[r("h1",{staticClass:"text-gray-900 bg-transparent tracking-tight font-semibold text-3xl lg:text-4xl font-sans"},[t._v("\n          "+t._s(t.getVolunteerData.name))]),t._v(" "),r("h2",{staticClass:"text-xl lg:text-2xl pb-2 w-full text-center lg:text-left"},[t._v(t._s(t.getVolunteerData.roles))]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-start"},[r("p",{staticClass:"text-base md:text-lg lg:text-xl font-semibold w-full my-2"},[t._v("Short Bio:")]),t._v(" "),r("p",{staticClass:"text-sm md:text-base lg:text-lg"},[t._v(" "+t._s(t.getVolunteerData.bio))]),t._v(" "),r("p",{staticClass:"text-base md:text-lg lg:text-xl font-semibold w-full my-2"},[t._v("Skillz:")]),t._v(" "),r("p",{staticClass:"text-sm md:text-base lg:text-lg"},[t._v(" "+t._s(t.getVolunteerData.skills))])])])])])}),[],!1,null,"085b6032",null);e.default=component.exports}}]);