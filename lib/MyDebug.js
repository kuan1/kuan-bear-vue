!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyDebug=t():e.MyDebug=t()}(window,function(){return r={},o.m=n=[function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5).default)("bbccffdc",r,!0,{})},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".debug-outer[data-v-68d2d14e] {\n  min-height: 100vh;\n  background: #f7f7f7;\n  overflow: hidden;\n}\n.debug-container[data-v-68d2d14e] {\n  width: 350px;\n  max-width: 90%;\n  margin: 0 auto;\n}\n.debug-container .tip[data-v-68d2d14e] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    line-height: 3;\n    color: #999;\n    font-size: 12px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.k-btn[data-v-68d2d14e] {\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(n){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<e.length;r++){var i=e[r];null!=i[0]&&n[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),a.push(i))}},a}},function(e,t,n){"use strict";n.r(t);var r={methods:{clearStorage:function(){localStorage.clear(),alert("清空localStorage缓存成功")},clearCookie:function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t++){var n=e[t],r=n.indexOf("="),o=-1<r?n.substr(0,r):n;document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}alert("清空cookie缓存成功")},toHome:function(){this.$router.push({path:"/"})},changeConsole:function(){this.$route.query.vconsole?this.$router.replace({query:{vconsole:""}}):this.$router.replace({query:{vconsole:1}})}}};n(1);var o=function(e,t,n,r,o,i,a,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"debug-outer"},[n("div",{staticClass:"debug-container"},[n("button",{staticClass:"k-btn",class:e.$route.query.vconsole?"danger":"",on:{click:e.changeConsole}},[e._v(e._s(e.$route.query.vconsole?"隐藏":"显示")+"vconsole")]),e._v(" "),n("button",{staticClass:"k-btn k-btn-danger",on:{click:e.clearStorage}},[e._v("清空localStorage")]),e._v(" "),n("button",{staticClass:"k-btn k-btn-danger",on:{click:e.clearCookie}},[e._v("清空cookie")]),e._v(" "),n("button",{staticClass:"k-btn k-btn-primary",on:{click:e.toHome}},[e._v("返回首页")]),e._v(" "),n("div",{staticClass:"tip"},[e._v("需要引入v-console组件")])])])},[],!1,null,"68d2d14e",null);t.default=o.exports},function(e,t,n){"use strict";function u(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",function(){return v});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},o=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,a=0,l=!1,s=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(a,e,t,n){l=t,d=n||{};var s=u(a,e);return h(s),function(e){for(var t=[],n=0;n<s.length;n++){var r=s[n];(o=c[r.id]).refs--,t.push(o)}e?h(s=u(a,e)):s=[];for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var i=0;i<o.parts.length;i++)o.parts[i]();delete c[o.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(g(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(g(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:i}}}}function b(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(t){var n,r,e=document.querySelector("style["+f+'~="'+t.id+'"]');if(e){if(l)return s;e.parentNode.removeChild(e)}if(p){var o=a++;e=i||(i=b()),n=_.bind(null,e,o,!1),r=_.bind(null,e,o,!0)}else e=b(),n=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,e),r=function(){e.parentNode.removeChild(e)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}var m,y=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4);function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});