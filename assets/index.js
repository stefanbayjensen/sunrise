/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://sunrise/./styles/main.css?");

/***/ }),

/***/ "./node_modules/picoapp/dist/picoapp.es.js":
/*!*************************************************!*\
  !*** ./node_modules/picoapp/dist/picoapp.es.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"component\": () => (/* binding */ u),\n/* harmony export */   \"picoapp\": () => (/* binding */ c)\n/* harmony export */ });\nvar n=function(n){if(\"object\"!=typeof(t=n)||Array.isArray(t))throw\"state should be an object\";var t},t=function(n,t,r,e){return(o=n,o.reduce(function(n,t,r){return n.indexOf(t)>-1?n:n.concat(t)},[])).reduce(function(n,r){return n.concat(t[r]||[])},[]).map(function(n){return n(r,e)});var o};function r(r){void 0===r&&(r={});var e={};return{getState:function(){return Object.assign({},r)},hydrate:function(o){return n(o),Object.assign(r,o),function(){var n=[\"*\"].concat(Object.keys(o));t(n,e,r)}},on:function(n,t){return(n=[].concat(n)).map(function(n){return e[n]=(e[n]||[]).concat(t)}),function(){return n.map(function(n){return e[n].splice(e[n].indexOf(t),1)})}},emit:function(o,u,c){var i=(\"*\"===o?[]:[\"*\"]).concat(o);(u=\"function\"==typeof u?u(r):u)&&(n(u),Object.assign(r,u),i=i.concat(Object.keys(u))),t(i,e,r,c)}}}r();var e=function(n){return\"object\"==typeof n&&!Array.isArray(n)},o=function(n){return\"function\"==typeof n};function u(n){return function(t,r){var e=[];return{subs:e,unmount:n(t,Object.assign({},r,{on:function(n,t){var o=r.on(n,t);return e.push(o),o}})),node:t}}}function c(n,t,u){void 0===n&&(n={}),void 0===t&&(t={}),void 0===u&&(u=[]);var c=r(t),i=[];return{on:c.on,emit:c.emit,getState:function(){return c.getState()},add:function(t){if(!e(t))throw\"components should be an object\";Object.assign(n,t)},use:function(n){if(!o(n))throw\"plugins should be a function\";u.push(n)},hydrate:function(n){return c.hydrate(n)},mount:function(t){void 0===t&&(t=\"data-component\"),t=[].concat(t);for(var r=0;r<t.length;r++){for(var a=t[r],f=[].slice.call(document.querySelectorAll(\"[\"+a+\"]\")),s=function(){for(var t=f.pop(),r=t.getAttribute(a).split(/\\s/),s=0;s<r.length;s++){var v=n[r[s]];if(v){t.removeAttribute(a);try{var d=u.reduce(function(n,r){var o=r(t,c);return e(o)?Object.assign(n,o):n},{}),m=v(t,Object.assign({},d,c));o(m.unmount)&&i.push(m)}catch(n){console.error(n),c.emit(\"error\",{error:n}),c.hydrate({error:void 0})}}}};f.length;)s();c.emit(\"mount\")}},unmount:function(){for(var n=i.length-1;n>-1;n--){var t=i[n],r=t.subs;(0,t.unmount)(t.node),r.map(function(n){return n()}),i.splice(n,1)}c.emit(\"unmount\")}}}\n//# sourceMappingURL=picoapp.es.js.map\n\n\n//# sourceURL=webpack://sunrise/./node_modules/picoapp/dist/picoapp.es.js?");

/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picoapp */ \"./node_modules/picoapp/dist/picoapp.es.js\");\n\n\nconst state = {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,picoapp__WEBPACK_IMPORTED_MODULE_0__.picoapp)({}, state));\n\n\n//# sourceURL=webpack://sunrise/./scripts/app.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _lib_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hmr */ \"./scripts/lib/hmr.js\");\n/* harmony import */ var _lib_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_hmr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! picoapp */ \"./node_modules/picoapp/dist/picoapp.es.js\");\n/* harmony import */ var _lib_snorlax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/snorlax */ \"./scripts/lib/snorlax.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./scripts/app.js\");\n\n\n\n\n\n\nwindow.app = _app__WEBPACK_IMPORTED_MODULE_4__.default;\nwindow.component = picoapp__WEBPACK_IMPORTED_MODULE_2__.component;\n\n(0,_lib_snorlax__WEBPACK_IMPORTED_MODULE_3__.default)();\n_app__WEBPACK_IMPORTED_MODULE_4__.default.on('mount', () => (0,_lib_snorlax__WEBPACK_IMPORTED_MODULE_3__.default)());\n\n\n//# sourceURL=webpack://sunrise/./scripts/index.js?");

/***/ }),

/***/ "./scripts/lib/hmr.js":
/*!****************************!*\
  !*** ./scripts/lib/hmr.js ***!
  \****************************/
/***/ (() => {

eval("if (window.Shopify.theme.role === 'development') {\n  const eventSource = new EventSource('/hot-reload');\n\n  eventSource.onmessage = () => {\n    setTimeout(() => {\n      window.app.mount();\n    }, 600);\n  };\n}\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/hmr.js?");

/***/ }),

/***/ "./scripts/lib/snorlax.js":
/*!********************************!*\
  !*** ./scripts/lib/snorlax.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst globalWidths = [120, 390, 512, 768, 1280, 1440, 1920, 2140, 2560];\n\nconst generateSrcset = ({ initial, mobile, maxWidth } = {}) => {\n  const array = [\n    globalWidths\n      .filter(w => w <= maxWidth && w < 768)\n      .map(w => `${mobile.replace('{width}', w)} ${w}w`)\n      .join(','),\n    globalWidths\n      .filter(w => w <= maxWidth && w >= 768)\n      .map(w => `${initial.replace('{width}', w)} ${w}w`)\n      .join(','),\n  ];\n\n  return array.join(',');\n};\n\nconst observer = new IntersectionObserver(\n  entries => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const node = entry.target;\n        const { src } = node.dataset;\n        const srcset = generateSrcset(node.dataset);\n\n        node.classList.add('is-visible');\n        if (src) node.src = src;\n        if (srcset) node.srcset = srcset;\n\n        observer.unobserve(entry.target);\n      }\n    });\n  },\n  {\n    rootMargin: '0px',\n    threshold: 0,\n  }\n);\n\nconst snorlax = (attr = 'data-src') => {\n  const nodes = [...document.querySelectorAll(`[${attr}],[data-initial]:not([data-observed])`)];\n\n  nodes.map(node => {\n    const el = node;\n\n    el.onload = () => {\n      el.classList.add('is-loaded');\n    };\n\n    el.setAttribute('data-observed', true);\n\n    return observer.observe(el);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (snorlax);\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/snorlax.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;