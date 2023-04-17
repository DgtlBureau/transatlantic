/*! For license information please see 493.46af2c00.chunk.js.LICENSE.txt */
(self.webpackChunktransatlantic=self.webpackChunktransatlantic||[]).push([[493],{1694:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&t.push(u)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},6399:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},u=this&&this.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};Object.defineProperty(e,"__esModule",{value:!0}),e.HandySvg=void 0;var a=i(r(2791)),c=r(4819);e.HandySvg=function(t){var e=t.src,r=t.loadTimeot,n=t.loadRetryCount,o=u(t,["src","loadTimeot","loadRetryCount"]),i=(0,a.useRef)(!0);return(0,a.useEffect)((function(){if(i.current)return c.injector.load(e,{timeout:r,retryCount:n}),void(i.current=!1);c.injector.load(e,{timeout:r,retryCount:n,flushImmediate:!0})}),[e]),a.default.createElement("svg",Object.assign({},o),a.default.createElement("use",{href:"#".concat(c.injector.getId(e))}))}},4643:function(t,e,r){"use strict";var n=r(7061).default,o=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function u(t){try{c(n.next(t))}catch(e){i(e)}}function a(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,a)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.fetchSvg=void 0;var i=r(6501),u=4800;e.fetchSvg=function(t,e){var r=void 0===(null===e||void 0===e?void 0:e.retryCount)?2:null===e||void 0===e?void 0:e.retryCount;return function t(e,i){return function(t,e){return o(this,void 0,void 0,n().mark((function r(){var o,i,a;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=(null===e||void 0===e?void 0:e.timeout)||u,i=new AbortController,a=setTimeout((function(){return i.abort()}),o),r.abrupt("return",fetch(t,Object.assign(Object.assign({},e),{signal:i.signal})).then((function(t){return clearTimeout(a),t})).catch((function(t){throw clearTimeout(a),t})));case 4:case"end":return r.stop()}}),r)})))}(e,i).then((function(t){if(t.ok)return t.text();throw new Error("Unable to load SVG file: ".concat(e))})).catch((function(n){if(r>0)return r--,t(e,i);throw n}))}(t,e).then((function(t){return(0,i.checkSvgContent)(t),t}))}},4819:function(t,e,r){"use strict";var n=r(7061).default,o=r(6690).default,i=r(9728).default,u=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function u(t){try{c(n.next(t))}catch(e){i(e)}}function a(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,a)}c((n=n.apply(t,e||[])).next())}))},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.injector=void 0;var c=a(r(5095)),f=r(4643),s=r(6501),l="http://www.w3.org/2000/svg",h=function(){function t(){var e=this;o(this,t),this.fragment=null,this.cache=new Set,this.accumulateSvg=function(t){var r=t.url,n=t.svgString,o=e.getId(r),i=e.svgToSymbol({id:o,svgString:n});e.fragment=e.fragment||document.createDocumentFragment(),e.fragment.append(i)},this.flushSvg=function(){var t=e.getSymbolMountPoint();e.fragment&&(t.appendChild(e.fragment),e.fragment=null)},this.deboucedflushSvg=(0,c.default)(this.flushSvg,20)}return i(t,[{key:"parseSvgString",value:function(t){return(new DOMParser).parseFromString(t,"image/svg+xml").children[0]}},{key:"svgToSymbol",value:function(t){var e=t.id,r=t.svgString,n=this.parseSvgString(r),o=n.getAttribute("viewBox"),i=document.createElementNS(l,"symbol");return o&&i.setAttributeNS(null,"viewBox",o),i.setAttributeNS(null,"id",e),i.innerHTML=n.innerHTML,i}},{key:"getSymbolMountPoint",value:function(){if(!this.symbolsMountingPoint){var t=document.createElementNS(l,"svg");this.symbolsMountingPoint=t,t.ariaHidden="true",t.style.width="0",t.style.height="0",t.style.overflow="hidden",document.body.appendChild(t)}return this.symbolsMountingPoint}},{key:"getId",value:function(t){return(0,s.extractFileName)(t)}},{key:"load",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.flushImmediate,o=e.timeout,i=e.retryCount;return u(this,void 0,void 0,n().mark((function e(){var u=this;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cache.has(t)){e.next=2;break}return e.abrupt("return");case 2:return this.cache.add(t),e.abrupt("return",(0,f.fetchSvg)(t,{timeout:o,retryCount:i}).then((function(e){u.accumulateSvg({url:t,svgString:e}),r?u.flushSvg():u.deboucedflushSvg()})).catch((function(e){throw u.cache.delete(t),e})));case 4:case"end":return e.stop()}}),e,this)})))}}]),t}();e.injector=new h},6501:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.checkSvgContent=e.extractFileName=void 0,e.extractFileName=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(/([0-9a-zA-z\-_.]+)\.svg$/i);if(!t)throw new Error("svg url does not match pattern");return t[1]},e.checkSvgContent=function(t){var e=["javascript","onload","onerror","iframe","script"].join("|");if(new RegExp(e,"gim").test(t))throw new Error("Possible XSS attack")}},5095:function(t,e,r){var n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,l="object"==typeof self&&self&&self.Object===Object&&self,h=s||l||Function("return this")(),v=Object.prototype.toString,p=Math.max,d=Math.min,y=function(){return h.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&v.call(t)==o}(t))return n;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||c.test(t)?f(t.slice(2),r?2:8):u.test(t)?n:+t}t.exports=function(t,e,r){var n,o,i,u,a,c,f=0,s=!1,l=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var r=n,i=o;return n=o=void 0,f=e,u=t.apply(i,r)}function b(t){var r=t-c;return void 0===c||r>=e||r<0||l&&t-f>=i}function w(){var t=y();if(b(t))return x(t);a=setTimeout(w,function(t){var r=e-(t-c);return l?d(r,i-(t-f)):r}(t))}function x(t){return a=void 0,h&&n?v(t):(n=o=void 0,u)}function S(){var t=y(),r=b(t);if(n=arguments,o=this,c=t,r){if(void 0===a)return function(t){return f=t,a=setTimeout(w,e),s?v(t):u}(c);if(l)return a=setTimeout(w,e),v(c)}return void 0===a&&(a=setTimeout(w,e)),u}return e=m(e)||0,g(r)&&(s=!!r.leading,i=(l="maxWait"in r)?p(m(r.maxWait)||0,e):i,h="trailing"in r?!!r.trailing:h),S.cancel=function(){void 0!==a&&clearTimeout(a),f=0,n=c=o=a=void 0},S.flush=function(){return void 0===a?u:x(y())},S}},6690:function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},9728:function(t,e,r){var n=r(4062);function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}t.exports=function(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},7061:function(t,e,r){var n=r(8698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",f=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(T){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new L(n||[]);return u(i,"_invoke",{value:j(t,r,a)}),i}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=h;var p={};function d(){}function y(){}function g(){}var m={};l(m,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(k([])));w&&w!==r&&i.call(w,c)&&(m=w);var x=g.prototype=d.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,u,a,c){var f=v(t[o],t,u);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==n(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(f.arg)}var o;u(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=O(u,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=v(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=v(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:M}}function M(){return{value:void 0,done:!0}}return y.prototype=g,u(x,"constructor",{value:g,configurable:!0}),u(g,"constructor",{value:y,configurable:!0}),y.displayName=l(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},S(_.prototype),l(_.prototype,f,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var u=new _(h(t,r,n,o),i);return e.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},S(x),l(x,s,"Generator"),l(x,c,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},5036:function(t,e,r){var n=r(8698).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},4062:function(t,e,r){var n=r(8698).default,o=r(5036);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},4942:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(9142);function o(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}}}]);
//# sourceMappingURL=493.46af2c00.chunk.js.map