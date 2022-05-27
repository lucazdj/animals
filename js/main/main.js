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

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionList)\n/* harmony export */ });\nconst classActive = 'active';\n\nfunction activeAccordion() {\n  this.classList.toggle(classActive);\n  this.nextElementSibling.classList.toggle(classActive);\n}\n\nfunction initAccordionList() {\n  const accordionList = document.querySelectorAll('[data-animation=\"accordion\"] dt');\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(classActive);\n    accordionList[0].nextElementSibling.classList.add(classActive);\n\n    accordionList.forEach(((item) => {\n      item.addEventListener('click', activeAccordion);\n    }));\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/animate-numbers.js":
/*!***************************************!*\
  !*** ./js/modules/animate-numbers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateNumbers)\n/* harmony export */ });\nfunction initAnimateNumbers() {\n  const classActive = 'active';\n\n  function animate() {\n    const numbers = document.querySelectorAll('[data-number]');\n\n    numbers.forEach((number) => {\n      const total = +number.innerText;\n      const increment = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += increment;\n        number.innerText = start;\n        if (start > total) {\n          number.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(classActive)) {\n      observer.disconnect();\n      animate();\n    }\n  }\n\n  const observerTarget = document.querySelector('.numbers');\n  const observer = new MutationObserver(handleMutation);\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n\n//# sourceURL=webpack://javascript/./js/modules/animate-numbers.js?");

/***/ }),

/***/ "./js/modules/animate-scroll.js":
/*!**************************************!*\
  !*** ./js/modules/animate-scroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimateScroll)\n/* harmony export */ });\nconst sections = document.querySelectorAll('[data-animation=\"scroll\"]');\nconst classActive = 'active';\nconst windowHalf = window.innerHeight * 0.6;\n\nfunction animate() {\n  sections.forEach((section) => {\n    const sectionTop = section.getBoundingClientRect().top - windowHalf;\n    if (sectionTop < 0) {\n      section.classList.add(classActive);\n    } else if (section.classList.contains(classActive)) {\n      section.classList.remove(classActive);\n    }\n  });\n}\n\nfunction initAnimateScroll() {\n  if (sections) {\n    animate();\n  }\n\n  animate();\n\n  window.addEventListener('scroll', animate);\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/animate-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n  const classActive = 'active';\r\n\r\n  dropdownMenus.forEach(menu => {\r\n    ['touchstart', 'click'].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.toggle(classActive);\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n      this.classList.remove(classActive);\r\n    });\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://javascript/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animals.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _animate_numbers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate-numbers.js */ \"./js/modules/animate-numbers.js\");\n\n\nfunction initFetchAnimals() {\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('number-animal');\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}<span>`;\n    return div;\n  }\n\n  async function fetchAnimals(url) {\n    try {\n      const animalsResponse = await fetch(url);\n      const animalsJSON = await animalsResponse.json();\n      const numbers = document.querySelector('.numbers-grid');\n      animalsJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numbers.appendChild(divAnimal);\n      });\n      (0,_animate_numbers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch {\n      return false;\n    }\n    return true;\n  }\n\n  fetchAnimals('./animals.json');\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/fetch-animals.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker')\n    .then((response) => response.json())\n    .then((bitcoin) => {\n      const btcValue = document.querySelector('.btc-value');\n      btcValue.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n    });\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/mobile-menu.js":
/*!***********************************!*\
  !*** ./js/modules/mobile-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iniMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction iniMenuMobile() {\r\n  const btnMenu = document.querySelector('[data-menu=\"button\"]');\r\n  const listMenu = document.querySelector('[data-menu=\"list\"]');\r\n  const classActive = 'active';\r\n  const events = ['click', 'touchstart'];\r\n\r\n  if (btnMenu) {\r\n\r\n    function openMenu(event) {\r\n      listMenu.classList.add(classActive);\r\n      btnMenu.classList.add(classActive);\r\n      (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(listMenu, events, () => {\r\n        listMenu.classList.remove(classActive);\r\n        btnMenu.classList.remove(classActive);\r\n      })\r\n    }\r\n\r\n    events.forEach((event) => btnMenu.addEventListener(event, openMenu));\r\n  }\r\n}\n\n//# sourceURL=webpack://javascript/./js/modules/mobile-menu.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const btnOpen = document.querySelector('[data-modal=\"open\"]');\n  const btnClose = document.querySelector('[data-modal=\"close\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n  const classActive = 'active';\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(classActive);\n  }\n\n  if (btnOpen && btnClose && containerModal) {\n    btnOpen.addEventListener('click', toggleModal);\n    btnClose.addEventListener('click', toggleModal);\n\n    containerModal.addEventListener('click', (event) => {\n      if (event.target === containerModal) {\n        toggleModal(event);\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/operating.js":
/*!*********************************!*\
  !*** ./js/modules/operating.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOperating)\n/* harmony export */ });\nfunction initOperating() {\n  const funcionamento = document.querySelector('[data-week]');\n  const diasSemana = funcionamento.dataset.week.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.hour.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('opened');\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/operating.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n\r\n    element.setAttribute(outside, '');\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n\r\n      callback();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://javascript/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/smooth-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/smooth-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSmoothScroll)\n/* harmony export */ });\nfunction initSmoothScroll() {\r\n  const innerLinks = document.querySelectorAll('[data-animation=\"smooth\"] a[href^=\"#\"]');\r\n\r\n  function scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start',\r\n    });\r\n  }\r\n\r\n  innerLinks.forEach((link) => {\r\n    link.addEventListener('click', scrollToSection);\r\n  });\r\n}\n\n//# sourceURL=webpack://javascript/./js/modules/smooth-scroll.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nconst tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\nconst tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\nconst classActive = 'active';\n\nfunction activeTab(index) {\n  tabContent.forEach((section) => {\n    section.classList.remove(classActive);\n  });\n  const classDirection = tabContent[index].dataset.animation;\n  tabContent[index].classList.add(classActive, classDirection);\n}\n\nfunction initTabNav() {\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add(classActive);\n\n    tabMenu.forEach((item, index) => {\n      item.addEventListener('click', () => {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nconst onMouseMove = {\n  handleEvent(event) {\n    this.tooltipBox.style.top = `${event.pageY + 24}px`;\n    this.tooltipBox.style.left = `${event.pageX + 24}px`;\n  },\n};\n\nconst onMouseLeave = {\n  handleEvent() {\n    this.tooltipBox.remove();\n    this.element.removeEventListener('mouseleave', onMouseLeave);\n    this.element.removeEventListener('mousemove', onMouseMove);\n  },\n};\n\nfunction createTooltipBox(element) {\n  const tooltipBox = document.createElement('div');\n  const text = element.getAttribute('aria-label');\n  tooltipBox.classList.add('tooltip');\n  tooltipBox.innerText = text;\n  document.body.appendChild(tooltipBox);\n  return tooltipBox;\n}\n\nfunction onMouseOver() {\n  const tooltipBox = createTooltipBox(this);\n\n  onMouseMove.tooltipBox = tooltipBox;\n  this.addEventListener('mousemove', onMouseMove);\n\n  onMouseLeave.tooltipBox = tooltipBox;\n  onMouseLeave.element = this;\n  this.addEventListener('mouseleave', onMouseLeave);\n}\n\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://javascript/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ \"./js/modules/smooth-scroll.js\");\n/* harmony import */ var _modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/animate-scroll.js */ \"./js/modules/animate-scroll.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mobile-menu.js */ \"./js/modules/mobile-menu.js\");\n/* harmony import */ var _modules_operating_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/operating.js */ \"./js/modules/operating.js\");\n/* harmony import */ var _modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animals.js */ \"./js/modules/fetch-animals.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_animate_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_operating_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://javascript/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;