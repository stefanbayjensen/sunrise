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

/***/ "./scripts/components/product/components.js":
/*!**************************************************!*\
  !*** ./scripts/components/product/components.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _product_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-selection */ \"./scripts/components/product/product-selection.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  productSelection: _product_selection__WEBPACK_IMPORTED_MODULE_0__.default,\n});\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/product/components.js?");

/***/ }),

/***/ "./scripts/components/product/product-selection.js":
/*!*********************************************************!*\
  !*** ./scripts/components/product/product-selection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/options */ \"./scripts/lib/options.js\");\n/* harmony import */ var _lib_set_url_params__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/set-url-params */ \"./scripts/lib/set-url-params.js\");\n/* harmony import */ var _lib_update_prices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/update-prices */ \"./scripts/lib/update-prices.js\");\n/* harmony import */ var _lib_update_prices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_update_prices__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const opts = (0,_lib_options__WEBPACK_IMPORTED_MODULE_0__.default)(node);\n  const {\n    product: { variants },\n    selectedOrFirstAvailableVariant,\n  } = JSON.parse(document.querySelector('.js-product-json').innerHTML);\n\n  let variant = variants.find(v => v.id === selectedOrFirstAvailableVariant);\n\n  opts.onUpdate(({ id }) => {\n    variant = variants.find(v => v.id === parseInt(id, 10));\n    _lib_update_prices__WEBPACK_IMPORTED_MODULE_2___default()(variant, node);\n    (0,_lib_set_url_params__WEBPACK_IMPORTED_MODULE_1__.default)([{ name: 'variant', value: id }]);\n    ctx.emit('variant:change', null, variant);\n  });\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/product/product-selection.js?");

/***/ }),

/***/ "./scripts/lib/options.js":
/*!********************************!*\
  !*** ./scripts/lib/options.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ productSelection)\n/* harmony export */ });\n/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio */ \"./scripts/lib/radio.js\");\n/* eslint-disable no-throw-literal */\n\n\nfunction productSelection(node, opts) {\n  // eslint-disable-next-line no-param-reassign\n  opts = {\n    select: '[data-option-select]',\n    radio: '[data-option-radio]',\n    main: '[data-option-main]',\n    ...opts,\n  };\n\n  const listeners = [];\n\n  const state = {\n    id: null,\n    options: [],\n  };\n\n  const selects = node.querySelectorAll(opts.select);\n  const radios = node.querySelectorAll(opts.radio);\n  const main = node.querySelectorAll(opts.main);\n\n  if (!main || !main.length) throw 'data-option-main is missing';\n  if (radios.length > 3) throw 'you have more than three radio groups';\n  if (selects.length > 3) throw 'you have more than three select inputs';\n\n  const variants = [].slice.call(main.children).reduce((variant, child) => {\n    const obj = variant;\n    obj[child.innerHTML] = child.value;\n    return obj;\n  }, {});\n\n  function updateSelection() {\n    state.id = variants[state.options.join(' / ')];\n    main.value = state.id;\n    // eslint-disable-next-line no-restricted-syntax\n    for (const fn of listeners) fn(state);\n  }\n\n  selects.forEach(select => {\n    if (select.nodeName !== 'SELECT')\n      throw 'data-option-select should be defined on the individual option selectors';\n\n    const index = Number(select.getAttribute('data-index'));\n\n    // set initial value\n    state.options[index] = select.value;\n\n    select.addEventListener('change', e => {\n      state.options[index] = e.target.value;\n      updateSelection();\n    });\n  });\n\n  radios.forEach(r => {\n    if (r.nodeName === 'INPUT')\n      throw 'data-option-radio should be defined on a parent of the radio group, not the inputs themselves';\n\n    const index = Number(r.getAttribute('data-index'));\n    const inputs = [].slice.call(r.getElementsByTagName('input'));\n\n    // set initial value\n    inputs.forEach(r => {\n      if (r.checked) state.options[index] = r.value;\n    });\n\n    (0,_radio__WEBPACK_IMPORTED_MODULE_0__.default)(inputs, value => {\n      state.options[index] = value;\n      updateSelection();\n    });\n  });\n\n  updateSelection();\n\n  return {\n    get state() {\n      return state;\n    },\n    onUpdate(fn) {\n      // eslint-disable-next-line no-unused-expressions\n      listeners.indexOf(fn) < 0 && listeners.push(fn);\n      return () => listeners.splice(listeners.indexOf(fn), 1);\n    },\n  };\n}\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/options.js?");

/***/ }),

/***/ "./scripts/lib/radio.js":
/*!******************************!*\
  !*** ./scripts/lib/radio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ radio)\n/* harmony export */ });\nfunction radio(radios, cb) {\n  radios.map(r => (r.onclick = e => cb(e.target.value)));\n}\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/radio.js?");

/***/ }),

/***/ "./scripts/lib/set-url-params.js":
/*!***************************************!*\
  !*** ./scripts/lib/set-url-params.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parameters => {\n  const url = new URL(window.location.href);\n  const params = new URLSearchParams(url.search.slice(1));\n\n  parameters.forEach(({ name, value }) => {\n    if (value !== '') params.set(name, encodeURIComponent(value));\n    else params.delete(name);\n  });\n\n  window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);\n});\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/set-url-params.js?");

/***/ }),

/***/ "./scripts/lib/update-prices.js":
/*!**************************************!*\
  !*** ./scripts/lib/update-prices.js ***!
  \**************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://sunrise/./scripts/lib/update-prices.js?");

/***/ }),

/***/ "./scripts/util/product.js":
/*!*********************************!*\
  !*** ./scripts/util/product.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_product_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/components */ \"./scripts/components/product/components.js\");\n\n\nwindow.app.add(_components_product_components__WEBPACK_IMPORTED_MODULE_0__.default);\n\nif (window?.app?.getState()?.cart) window.app.mount();\n\n\n//# sourceURL=webpack://sunrise/./scripts/util/product.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/util/product.js");
/******/ 	
/******/ })()
;