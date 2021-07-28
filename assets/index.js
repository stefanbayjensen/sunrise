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

/***/ "./node_modules/srraf/dist/srraf.es.js":
/*!*********************************************!*\
  !*** ./node_modules/srraf/dist/srraf.es.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar n,e,i,o,t,r,f,d,p,u=[];function w(n,a){return e=window.pageXOffset,o=window.pageYOffset,r=window.innerHeight,d=window.innerWidth,void 0===i&&(i=e),void 0===t&&(t=o),void 0===p&&(p=d),void 0===f&&(f=r),(a||o!==t||e!==i||r!==f||d!==p)&&(!function(n){for(var w=0;w<u.length;w++)u[w]({x:e,y:o,px:i,py:t,vh:r,pvh:f,vw:d,pvw:p},n)}(n),i=e,t=o,f=r,p=d),requestAnimationFrame(w)}/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e){return u.indexOf(e)<0&&u.push(e),n=n||w(performance.now()),{update:function(){return w(performance.now(),!0),this},destroy:function(){u.splice(u.indexOf(e),1)}}}\n//# sourceMappingURL=srraf.es.js.map\n\n\n//# sourceURL=webpack://sunrise/./node_modules/srraf/dist/srraf.es.js?");

/***/ }),

/***/ "./node_modules/vsbl/dist/vsbl.es.js":
/*!*******************************************!*\
  !*** ./node_modules/vsbl/dist/vsbl.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var srraf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! srraf */ \"./node_modules/srraf/dist/srraf.es.js\");\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(r,o){return void 0===o&&(o={}),function(e,n){var a=!1,i=parseFloat(r.getAttribute(\"data-threshold\")||o.threshold||0);return (0,srraf__WEBPACK_IMPORTED_MODULE_0__.default)(function(){for(var t=[],o=arguments.length;o--;)t[o]=arguments[o];var d=t[0],h=d.y,l=d.vh,p=r.getBoundingClientRect(),u=p.top+h,f=i>=.5?i:i*l,v=u+p.height-f>=h&&u+f<=h+l;v&&!a?(a=!0,e&&e.apply(void 0,t)):!v&&a&&(a=!1,n&&n.apply(void 0,t))})}}\n//# sourceMappingURL=vsbl.es.js.map\n\n\n//# sourceURL=webpack://sunrise/./node_modules/vsbl/dist/vsbl.es.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _lib_hmr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hmr */ \"./scripts/lib/hmr.js\");\n/* harmony import */ var _lib_hmr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_hmr__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var picoapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! picoapp */ \"./node_modules/picoapp/dist/picoapp.es.js\");\n/* harmony import */ var _lib_lazim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/lazim */ \"./scripts/lib/lazim.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app */ \"./scripts/app.js\");\n\n\n\n\n\n\nwindow.app = _app__WEBPACK_IMPORTED_MODULE_4__.default;\nwindow.component = picoapp__WEBPACK_IMPORTED_MODULE_2__.component;\n\n(0,_lib_lazim__WEBPACK_IMPORTED_MODULE_3__.bind)();\n_app__WEBPACK_IMPORTED_MODULE_4__.default.on('mount', () => (0,_lib_lazim__WEBPACK_IMPORTED_MODULE_3__.bind)());\n\n\n//# sourceURL=webpack://sunrise/./scripts/index.js?");

/***/ }),

/***/ "./scripts/lib/hmr.js":
/*!****************************!*\
  !*** ./scripts/lib/hmr.js ***!
  \****************************/
/***/ (() => {

eval("const eventSource = new EventSource('/hot-reload');\n\neventSource.onmessage = () => {\n  setTimeout(() => {\n    window.app.mount();\n  }, 600);\n};\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/hmr.js?");

/***/ }),

/***/ "./scripts/lib/lazim.js":
/*!******************************!*\
  !*** ./scripts/lib/lazim.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"update\": () => (/* binding */ update),\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var vsbl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vsbl */ \"./node_modules/vsbl/dist/vsbl.es.js\");\n\n\nconst globalWidths = [120, 512, 768, 1280, 1440, 1920, 2140, 3200];\nlet srrafInstance;\n\nfunction update() {\n  if (srrafInstance) srrafInstance.update();\n}\n\nfunction bind(attr = 'data-src') {\n  let images;\n  const nodes = document.querySelectorAll(`[${attr}],[data-srcset]`);\n\n  for (let i = 0; i < nodes.length; i++) {\n    const node = nodes[i];\n    const img =\n      node.nodeName === 'IMG' || node.nodeName === 'SOURCE'\n        ? node\n        : node.getElementsByTagName('img')[0];\n    const src = node.getAttribute(attr);\n    const { maxWidth, desktop, mobile } = node.dataset;\n    const widthsObj = {\n      desktop: globalWidths.filter(w => w <= maxWidth && w > 1024),\n      mobile: globalWidths.filter(w => w <= maxWidth && w <= 1024),\n    };\n    const generatedSrcset = Object.entries({ mobile, desktop })\n      .map(([key, p]) => widthsObj[key].map(w => `${p.replace('{width}', w)} ${w}w`).join(','))\n      .join(',');\n\n    img.onload = () => {\n      node.classList.add('is-loaded');\n    };\n\n    node.removeAttribute(attr);\n    node.removeAttribute('data-desktop');\n    node.removeAttribute('data-mobile');\n    node.removeAttribute('data-max-width');\n\n    images = (0,vsbl__WEBPACK_IMPORTED_MODULE_0__.default)(node)(() => {\n      node.classList.add('is-visible');\n      if (src) img.src = src;\n      if (generatedSrcset) img.srcset = generatedSrcset;\n    });\n  }\n\n  if (images) {\n    images.update();\n    if (!srrafInstance) srrafInstance = images;\n  }\n}\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/lazim.js?");

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