/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/components/base/accordion.js":
/*!**********************************************!*\
  !*** ./scripts/components/base/accordion.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_choozy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/choozy */ \"./scripts/lib/choozy.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const { group } = node.dataset;\n  const { inner, toggle } = (0,_lib_choozy__WEBPACK_IMPORTED_MODULE_0__.default)(node, null);\n  const activeClass = 'open';\n\n  const updateHeight = () => {\n    node.style.setProperty('--innerHeight', `${inner.scrollHeight}px`);\n  };\n\n  updateHeight();\n\n  window.addEventListener('resize', updateHeight, { passive: true });\n\n  toggle.addEventListener('click', () => {\n    ctx.emit('accordion:toggle', null, {\n      open: !node.classList.contains(activeClass),\n      node,\n      group,\n    });\n  });\n\n  ctx.on('accordion:toggle', (state, a = {}) => {\n    if (group !== a.group) return;\n    node.classList[a.open && a.node === node ? 'add' : 'remove'](activeClass);\n  });\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/accordion.js?");

/***/ }),

/***/ "./scripts/components/base/cart-drawer.js":
/*!************************************************!*\
  !*** ./scripts/components/base/cart-drawer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/cart */ \"./scripts/lib/cart.js\");\n/* harmony import */ var _lib_choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/choozy */ \"./scripts/lib/choozy.js\");\n/* harmony import */ var _lib_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/listeners */ \"./scripts/lib/listeners.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const parent = node.parentNode;\n  const el = node;\n  const { toggle, clear, focusEl } = (0,_lib_choozy__WEBPACK_IMPORTED_MODULE_1__.default)(node, null);\n\n  const toggleDrawer = ({ cartOpen }) => {\n    node.classList[cartOpen ? 'add' : 'remove']('open');\n    if (cartOpen) {\n      el.tabIndex = '0';\n      (focusEl || node).focus();\n    } else {\n      el.tabIndex = '-1';\n    }\n  };\n\n  toggle.forEach(btn => {\n    btn.addEventListener('click', () =>\n      ctx.emit('cart:toggle', ({ cartOpen }) => ({ cartOpen: !cartOpen ?? true }))\n    );\n  });\n\n  toggleDrawer(ctx.getState());\n\n  if (clear) clear.addEventListener('click', () => (0,_lib_cart__WEBPACK_IMPORTED_MODULE_0__.clearCart)());\n\n  node.addEventListener('keyup', e => (0,_lib_listeners__WEBPACK_IMPORTED_MODULE_2__.default)(e, { type: 'cart:toggle', boolean: 'cartOpen' }));\n\n  ctx.on('cart:toggle', toggleDrawer);\n\n  ctx.on('cart:render', ({ cart }) => {\n    if (parent) parent.outerHTML = cart.sections['cart-drawer'];\n    window.app.unmount();\n    window.app.mount();\n  });\n\n  return () => {\n    ctx.on(['cart:toggle', 'cart:render'], () => {})();\n    node.removeEventListener('keyup', e => (0,_lib_listeners__WEBPACK_IMPORTED_MODULE_2__.default)(e, { type: 'cart:toggle', boolean: 'cartOpen' }));\n  };\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/cart-drawer.js?");

/***/ }),

/***/ "./scripts/components/base/cart-item.js":
/*!**********************************************!*\
  !*** ./scripts/components/base/cart-item.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/cart */ \"./scripts/lib/cart.js\");\n/* harmony import */ var _lib_choozy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/choozy */ \"./scripts/lib/choozy.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component(node => {\n  const { update } = (0,_lib_choozy__WEBPACK_IMPORTED_MODULE_1__.default)(node, null);\n  const { key } = node.dataset;\n\n  [].concat(update).forEach(btn => {\n    const { value } = btn.dataset;\n    btn.addEventListener('click', () => (0,_lib_cart__WEBPACK_IMPORTED_MODULE_0__.updateAddon)(key, value));\n  });\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/cart-item.js?");

/***/ }),

/***/ "./scripts/components/base/components.js":
/*!***********************************************!*\
  !*** ./scripts/components/base/components.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _section_rendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-rendering */ \"./scripts/components/base/section-rendering.js\");\n/* harmony import */ var _console_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./console-log */ \"./scripts/components/base/console-log.js\");\n/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ \"./scripts/components/base/accordion.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"./scripts/components/base/header.js\");\n/* harmony import */ var _cart_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-drawer */ \"./scripts/components/base/cart-drawer.js\");\n/* harmony import */ var _cart_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-item */ \"./scripts/components/base/cart-item.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  sectionRendering: _section_rendering__WEBPACK_IMPORTED_MODULE_0__.default,\n  consoleLog: _console_log__WEBPACK_IMPORTED_MODULE_1__.default,\n  accordion: _accordion__WEBPACK_IMPORTED_MODULE_2__.default,\n  header: _header__WEBPACK_IMPORTED_MODULE_3__.default,\n  cartDrawer: _cart_drawer__WEBPACK_IMPORTED_MODULE_4__.default,\n  cartItem: _cart_item__WEBPACK_IMPORTED_MODULE_5__.default,\n});\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/components.js?");

/***/ }),

/***/ "./scripts/components/base/console-log.js":
/*!************************************************!*\
  !*** ./scripts/components/base/console-log.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component(node => {\n  const { text } = node.dataset;\n  console.log('console:log', text);\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/console-log.js?");

/***/ }),

/***/ "./scripts/components/base/header.js":
/*!*******************************************!*\
  !*** ./scripts/components/base/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_choozy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/choozy */ \"./scripts/lib/choozy.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component((node, ctx) => {\n  const { cartCount, cartToggle } = (0,_lib_choozy__WEBPACK_IMPORTED_MODULE_0__.default)(node, null);\n\n  const updateCartCount = cart => {\n    if (!cart?.token) return;\n    cartCount.textContent = cart.item_count;\n  };\n\n  ctx.on('cart:updated', ({ cart }) => updateCartCount(cart));\n\n  cartToggle.addEventListener('click', e => {\n    e.preventDefault();\n    ctx.emit('cart:toggle', ({ cartOpen }) => ({ cartOpen: !cartOpen ?? true }));\n  });\n\n  updateCartCount(ctx.getState()?.cart);\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/header.js?");

/***/ }),

/***/ "./scripts/components/base/section-rendering.js":
/*!******************************************************!*\
  !*** ./scripts/components/base/section-rendering.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.component(() => {\n  document.addEventListener('shopify:section:load', () => {\n    window.app.unmount();\n    window.app.mount();\n  });\n}));\n\n\n//# sourceURL=webpack://sunrise/./scripts/components/base/section-rendering.js?");

/***/ }),

/***/ "./scripts/lib/cart.js":
/*!*****************************!*\
  !*** ./scripts/lib/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCart\": () => (/* binding */ fetchCart),\n/* harmony export */   \"fetchCartMarkup\": () => (/* binding */ fetchCartMarkup),\n/* harmony export */   \"clearCart\": () => (/* binding */ clearCart),\n/* harmony export */   \"addItemsById\": () => (/* binding */ addItemsById),\n/* harmony export */   \"addVariant\": () => (/* binding */ addVariant),\n/* harmony export */   \"updateAddon\": () => (/* binding */ updateAddon),\n/* harmony export */   \"removeAddon\": () => (/* binding */ removeAddon)\n/* harmony export */ });\nfunction fetchCart() {\n  return fetch(`${window.Phill.routes.cart}.js`, {\n    method: 'GET',\n    credentials: 'include',\n  }).then(res => res.json());\n}\n\nfunction fetchCartMarkup() {\n  return fetch(`${window.Phill.routes.cart}?sections=cart-drawer`, {\n    method: 'GET',\n    credentials: 'include',\n  }).then(res => res.json());\n}\n\nfunction changeAddon(id, quantity) {\n  window.app.emit('cart:updating');\n\n  return fetch(`${window.Phill.routes.cartChange}.js`, {\n    method: 'POST',\n    credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ id, quantity, sections: 'cart-drawer' }),\n  })\n    .then(res => res.json())\n    .then(async cart => {\n      window.app.emit(['cart:updated', 'cart:render'], { cart });\n      return cart;\n    });\n}\n\nfunction clearCart() {\n  window.app.emit('cart:updating');\n\n  return fetch(`${window.Phill.routes.cartClear}.js`, {\n    method: 'POST',\n    credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ sections: 'cart-drawer' }),\n  })\n    .then(r => r.json())\n    .then(cart => {\n      window.app.emit(['cart:updated', 'cart:render'], { cart });\n      return cart;\n    });\n}\n\nfunction addItemsById(items = []) {\n  window.app.emit('cart:updating');\n\n  return fetch(`${window.Phill.routes.cartAdd}.js`, {\n    method: 'POST',\n    credentials: 'include',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ items }),\n  })\n    .then(r => r.json())\n    .then(async item => {\n      if (item.status) {\n        window.app.emit(['cart:updated', 'cart:error'], null, item);\n        return { item, cart: window.app.getState().cart, error: item?.description };\n      }\n\n      const [cart, cartMarkup] = await Promise.all([fetchCart(), fetchCartMarkup()]);\n\n      cart.sections = cartMarkup;\n\n      window.app.emit(['cart:updated', 'cart:render'], { cart });\n\n      return {\n        item,\n        cart,\n      };\n    });\n}\n\nfunction addVariant(variant, quantity, properties = {}) {\n  return addItemsById([{ id: variant.id, quantity, properties }]);\n}\n\nfunction updateAddon(key, quantity) {\n  return changeAddon(key, quantity);\n}\n\nfunction removeAddon(key) {\n  return updateAddon(key, 0);\n}\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/cart.js?");

/***/ }),

/***/ "./scripts/lib/choozy.js":
/*!*******************************!*\
  !*** ./scripts/lib/choozy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-prototype-builtins */\n/* eslint-disable no-nested-ternary */\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(container = document.body, prefix = 'js-') {\n  const elements = [...container.querySelectorAll(!prefix ? '*' : `[class*=\"${prefix}\"]`)];\n  const property = !prefix ? 'dataset' : 'classList';\n  return elements.reduce((res, el) => {\n    [].slice.call(!prefix ? Object.entries(el[property]) : el[property]).forEach(property => {\n      let key;\n      if (prefix && property.slice(0, prefix.length) === prefix)\n        key = property.slice(prefix.length, property.length);\n      else if (!prefix) [key] = property;\n      if (key) {\n        res[key] = res.hasOwnProperty(key)\n          ? res[key].constructor === Array\n            ? res[key].concat(el)\n            : [res[key], el]\n          : el;\n      }\n    });\n    return res;\n  }, {});\n}\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/choozy.js?");

/***/ }),

/***/ "./scripts/lib/listeners.js":
/*!**********************************!*\
  !*** ./scripts/lib/listeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst escKey = ({ keyCode }, { type, boolean }) => {\n  if (keyCode === 27 && type && boolean) window.app.emit(type, { [boolean]: false });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (escKey);\n\n\n//# sourceURL=webpack://sunrise/./scripts/lib/listeners.js?");

/***/ }),

/***/ "./scripts/util/base.js":
/*!******************************!*\
  !*** ./scripts/util/base.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_base_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base/components */ \"./scripts/components/base/components.js\");\n\n\nwindow.app.add(_components_base_components__WEBPACK_IMPORTED_MODULE_0__.default);\nwindow.app.mount();\n\n\n//# sourceURL=webpack://sunrise/./scripts/util/base.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/util/base.js");
/******/ 	
/******/ })()
;