/*! For license information please see main.js.LICENSE.txt */
<<<<<<< HEAD
(()=>{var t={591:(t,e,n)=>{var r=n(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function v(){}function p(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,L=g&&g(g(A([])));L&&L!==n&&i.call(L,c)&&(y=L);var b=m.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,c,u){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=m,l(b,"constructor",m),l(m,"constructor",p),p.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),l(b,s,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,n)=>{var r=n(591)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section'),r="active",o=document.querySelectorAll('[data-animation="scroll"]'),i="active",a=.6*window.innerHeight;function c(){o.forEach((function(t){t.getBoundingClientRect().top-a<0?t.classList.add(i):t.classList.contains(i)&&t.classList.remove(i)}))}var u={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+24,"px"),this.tooltipBox.style.left="".concat(t.pageX+24,"px")}},s={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",s),this.element.removeEventListener("mousemove",u)}};function l(){var t=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);u.tooltipBox=t,this.addEventListener("mousemove",u),s.tooltipBox=t,s.element=this,this.addEventListener("mouseleave",s)}function f(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,i)}))})),t.setAttribute(o,""))}function d(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,c,"next",t)}function c(t){d(i,r,o,a,c,"throw",t)}a(void 0)}))}}var v=n(757),p=n.n(v);function m(){var t=document.querySelector(".numbers"),e=new MutationObserver((function(t){t[0].target.classList.contains("active")&&(e.disconnect(),document.querySelectorAll("[data-number]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var b,x,w,E,k,S,_,A,T=function(){function t(e,n){y(this,t),this.innerLinks=document.querySelectorAll(e),this.options=void 0===n?{behavior:"smooth",block:"start"}:n,this.scrollToSection=this.scrollToSection.bind(this)}return L(t,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.innerLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.addLinkEvent(),this}}]),t}(),j=function(){function t(e){y(this,t),this.accordionList=document.querySelectorAll(e),this.classActive="active"}return L(t,[{key:"toggleAccordion",value:function(t){t.classList.toggle(this.classActive),t.nextElementSibling.classList.toggle(classActive)}},{key:"addAccordionEvent",value:function(){var t=this;accordionList.forEach((function(e){e.addEventListener("click",(function(){return t.toggleAccordion(e)}))}))}},{key:"init",value:function(){this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent())}}]),t}(),O=new T('[data-animation="smooth"] a[href^="#"]'),q=new j('[data-animation="accordion"] dt');O.init(),q.init(),t.length&&e.length&&(e[0].classList.add(r),t.forEach((function(t,n){t.addEventListener("click",(function(){!function(t){e.forEach((function(t){t.classList.remove(r)}));var n=e[t].dataset.animation;e[t].classList.add(r,n)}(n)}))}))),o&&c(),c(),window.addEventListener("scroll",c),function(){var t=document.querySelector('[data-modal="open"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector('[data-modal="container"]');function r(t){t.preventDefault(),n.classList.toggle("active")}t&&e&&n&&(t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(t){t.target===n&&r(t)})))}(),document.querySelectorAll("[data-tooltip]").forEach((function(t){t.addEventListener("mouseover",l)})),function(){var t=document.querySelectorAll("[data-dropdown]"),e="active";function n(t){var n=this;t.preventDefault(),this.classList.toggle(e),f(this,["touchstart","click"],(function(){n.classList.remove(e)}))}t.forEach((function(t){["touchstart","click"].forEach((function(e){t.addEventListener(e,n)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n="active",r=["click","touchstart"];if(t){var o=function(o){e.classList.add(n),t.classList.add(n),f(e,r,(function(){e.classList.remove(n),t.classList.remove(n)}))};r.forEach((function(e){return t.addEventListener(e,o)}))}}(),x=(b=document.querySelector("[data-week]")).dataset.week.split(",").map(Number),w=b.dataset.hour.split(",").map(Number),k=(E=new Date).getDay(),S=E.getHours(),_=-1!==x.indexOf(k),A=S>=w[0]&&S<w[1],_&&A&&b.classList.add("opened"),function(){function t(t){var e=document.createElement("div");return e.classList.add("number-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-number>").concat(t.total,"<span>"),e}function e(){return(e=h(p().mark((function e(n){var r,o,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,i=document.querySelector(".numbers-grid"),o.forEach((function(e){var n=t(e);i.appendChild(n)})),m(),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("./animals.json")}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-value").innerText=(1e3/t.BRL.sell).toFixed(4)}))})()})();
=======
(()=>{var t={591:(t,e,n)=>{var r=n(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function v(){}function p(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(T([])));b&&b!==n&&i.call(b,c)&&(y=b);var L=m.prototype=v.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,c,u){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,l(L,"constructor",m),l(m,"constructor",p),p.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},x(w.prototype),l(w.prototype,u,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},757:(t,e,n)=>{var r=n(591)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section'),r="active",o="active";function i(){this.classList.toggle(o),this.nextElementSibling.classList.toggle(o)}var a=document.querySelectorAll('[data-animation="scroll"]'),c="active",u=.6*window.innerHeight;function s(){a.forEach((function(t){t.getBoundingClientRect().top-u<0?t.classList.add(c):t.classList.contains(c)&&t.classList.remove(c)}))}var l={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+24,"px"),this.tooltipBox.style.left="".concat(t.pageX+24,"px")}},f={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",f),this.element.removeEventListener("mousemove",l)}};function d(){var t=function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);l.tooltipBox=t,this.addEventListener("mousemove",l),f.tooltipBox=t,f.element=this,this.addEventListener("mouseleave",f)}function h(t,e,n){var r=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){r.removeEventListener(t,i)})),n())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return r.addEventListener(t,i)}))})),t.setAttribute(o,""))}function v(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){v(i,r,o,a,c,"next",t)}function c(t){v(i,r,o,a,c,"throw",t)}a(void 0)}))}}var m,y,g,b,L,x,w,E,S,k=n(757),_=n.n(k);function T(){var t=document.querySelector(".numbers"),e=new MutationObserver((function(t){t[0].target.classList.contains("active")&&(e.disconnect(),document.querySelectorAll("[data-number]").forEach((function(t){var e=+t.innerText,n=Math.floor(e/100),r=0,o=setInterval((function(){r+=n,t.innerText=r,r>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.innerLinks=document.querySelectorAll(e),this.options=void 0===n?{behavior:"smooth",block:"start"}:n,this.scrollToSection=this.scrollToSection.bind(this)}var e,n;return e=t,(n=[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.innerLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.addLinkEvent(),this}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())('[data-animation="smooth"] a[href^="#"]').init(),t.length&&e.length&&(e[0].classList.add(r),t.forEach((function(t,n){t.addEventListener("click",(function(){!function(t){e.forEach((function(t){t.classList.remove(r)}));var n=e[t].dataset.animation;e[t].classList.add(r,n)}(n)}))}))),(m=document.querySelectorAll('[data-animation="accordion"] dt')).length&&(m[0].classList.add(o),m[0].nextElementSibling.classList.add(o),m.forEach((function(t){t.addEventListener("click",i)}))),a&&s(),s(),window.addEventListener("scroll",s),function(){var t=document.querySelector('[data-modal="open"]'),e=document.querySelector('[data-modal="close"]'),n=document.querySelector('[data-modal="container"]');function r(t){t.preventDefault(),n.classList.toggle("active")}t&&e&&n&&(t.addEventListener("click",r),e.addEventListener("click",r),n.addEventListener("click",(function(t){t.target===n&&r(t)})))}(),document.querySelectorAll("[data-tooltip]").forEach((function(t){t.addEventListener("mouseover",d)})),function(){var t=document.querySelectorAll("[data-dropdown]"),e="active";function n(t){var n=this;t.preventDefault(),this.classList.toggle(e),h(this,["touchstart","click"],(function(){n.classList.remove(e)}))}t.forEach((function(t){["touchstart","click"].forEach((function(e){t.addEventListener(e,n)}))}))}(),function(){var t=document.querySelector('[data-menu="button"]'),e=document.querySelector('[data-menu="list"]'),n="active",r=["click","touchstart"];if(t){var o=function(o){e.classList.add(n),t.classList.add(n),h(e,r,(function(){e.classList.remove(n),t.classList.remove(n)}))};r.forEach((function(e){return t.addEventListener(e,o)}))}}(),g=(y=document.querySelector("[data-week]")).dataset.week.split(",").map(Number),b=y.dataset.hour.split(",").map(Number),x=(L=new Date).getDay(),w=L.getHours(),E=-1!==g.indexOf(x),S=w>=b[0]&&w<b[1],E&&S&&y.classList.add("opened"),function(){function t(t){var e=document.createElement("div");return e.classList.add("number-animal"),e.innerHTML="<h3>".concat(t.specie,"</h3><span data-number>").concat(t.total,"<span>"),e}function e(){return(e=p(_().mark((function e(n){var r,o,i;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,i=document.querySelector(".numbers-grid"),o.forEach((function(e){var n=t(e);i.appendChild(n)})),T(),e.next=15;break;case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("./animals.json")}(),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){document.querySelector(".btc-value").innerText=(1e3/t.BRL.sell).toFixed(4)}))})()})();
>>>>>>> main
