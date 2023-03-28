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

/***/ "./src/components/button-list/btn-list.js":
/*!************************************************!*\
  !*** ./src/components/button-list/btn-list.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imagedata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagedata.js */ \"./src/components/button-list/imagedata.js\");\n\r\nclass BtnList extends HTMLElement {\r\n   static get observedAttributes(){\r\n    return[\"icon\"]\r\n   }\r\n\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode:'open'})\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    AttributeChangedCallback(propName, oldValue, newValue){\r\n        this[propName] = newValue;\r\n        this.render()\r\n    }\r\n\r\n    render(){\r\n        let btncontent = \"\";\r\n\r\n        _imagedata_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((imagedata, index)=>{\r\n            btncontent += `\r\n            <button id=\"btn${index}\"><img src=\"${imagedata.icon}\"></button>\r\n           \r\n            `\r\n        })\r\n\r\n        const link = document.createElement('link')\r\n        link.rel = 'stylesheet';\r\n        link.href = '../src/components/button-list/btn-list.css';\r\n        this.shadowRoot.appendChild(link)\r\n\r\n        this.shadowRoot.innerHTML += `\r\n        <div class=\"icons-nav\">\r\n        ${btncontent}\r\n        </div>\r\n        `\r\n\r\n    }\r\n}\r\ncustomElements.define('btn-list', BtnList)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnList);\n\n//# sourceURL=webpack://t1/./src/components/button-list/btn-list.js?");

/***/ }),

/***/ "./src/components/button-list/imagedata.js":
/*!*************************************************!*\
  !*** ./src/components/button-list/imagedata.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        icon: \"../../../img/home-icon-btn.png\" \r\n    },\r\n    {\r\n        icon: \"../../../img/mail-btn.png\" \r\n    },\r\n    {\r\n        icon: \"../../../img/search-icon-btn.png\" \r\n    },\r\n    {\r\n        icon: \"../../../img/user-btn.png\" \r\n    },\r\n    {\r\n        icon: \"../../../img/post.png\"\r\n    }\r\n\r\n]);\n\n//# sourceURL=webpack://t1/./src/components/button-list/imagedata.js?");

/***/ }),

/***/ "./src/components/description/description.js":
/*!***************************************************!*\
  !*** ./src/components/description/description.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _post_btn_actions_btn_act_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post/btn-actions/btn-act.js */ \"./src/components/post/btn-actions/btn-act.js\");\n\r\nclass profileDes extends HTMLElement {\r\n    static get observedAttributes(){\r\n     return[\"description\",\"hashtags\"]\r\n    }\r\n \r\n     constructor(){\r\n         super();\r\n         this.attachShadow({mode:'open'})\r\n     }\r\n \r\n     connectedCallback(){\r\n         this.render();\r\n     }\r\n \r\n     attributeChangedCallback(propName, oldValue, newValue){\r\n         this[propName] = newValue;\r\n         this.render()\r\n     }\r\n \r\n     render(){\r\n        \r\n         this.shadowRoot.innerHTML = `\r\n         <link rel=\"stylesheet\" href=\"../src/components/description/description.css\">\r\n         <section class=\"profile\">\r\n         <p>${this.description}</p>\r\n         <p>${this.hashtags}</p>\r\n         <btn-act id=\"prueba\"></btn-act>\r\n         </section>\r\n         `\r\n     }\r\n    \r\n }\r\n customElements.define('new-des', profileDes)\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileDes);\n\n//# sourceURL=webpack://t1/./src/components/description/description.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnList\": () => (/* reexport safe */ _button_list_btn_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"NavBar\": () => (/* reexport safe */ _navBar_nav_bar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"NewPost\": () => (/* reexport safe */ _post_post_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"profileDes\": () => (/* reexport safe */ _description_description_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"profilePost\": () => (/* reexport safe */ _profile_post_profilePost_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _navBar_nav_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar/nav-bar.js */ \"./src/components/navBar/nav-bar.js\");\n/* harmony import */ var _button_list_btn_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-list/btn-list.js */ \"./src/components/button-list/btn-list.js\");\n/* harmony import */ var _post_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post.js */ \"./src/components/post/post.js\");\n/* harmony import */ var _profile_post_profilePost_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-post/profilePost.js */ \"./src/components/profile-post/profilePost.js\");\n/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./description/description.js */ \"./src/components/description/description.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://t1/./src/components/index.js?");

/***/ }),

/***/ "./src/components/navBar/nav-bar.js":
/*!******************************************!*\
  !*** ./src/components/navBar/nav-bar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _button_list_btn_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button-list/btn-list.js */ \"./src/components/button-list/btn-list.js\");\n\r\nclass NavBar extends HTMLElement{\r\n    static get observedAttributes(){\r\n        return [\"button\"]\r\n    }\r\n\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode:'open'})\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    connectedChangeCallback(propName, oldValue, newValue){\r\n        this[propName] = newValue;\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n        const link = document.createElement('link')\r\n        link.rel = \"stylesheet\"\r\n        link.href = \"../src/components/navBar/nav-bar.css\"\r\n        \r\n        this.shadowRoot.appendChild(link)\r\n\r\n        this.shadowRoot.innerHTML += `\r\n        <nav id=\"navBack\">\r\n            <img class=\"logo\" src=\"../../../img/tumblr-1.png\">\r\n            <input type=\"search\" placeholder=\"search someone\">\r\n            <btn-list></btn-list>\r\n        </nav>\r\n        `\r\n        \r\n    }\r\n}\r\ncustomElements.define('nav-bar', NavBar)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n//# sourceURL=webpack://t1/./src/components/navBar/nav-bar.js?");

/***/ }),

/***/ "./src/components/post/btn-actions/btn-act.js":
/*!****************************************************!*\
  !*** ./src/components/post/btn-actions/btn-act.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _othericon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./othericon */ \"./src/components/post/btn-actions/othericon.js\");\n\r\nclass BtnAct extends HTMLElement {\r\n   static get observedAttributes(){\r\n    return[\"icon\", \"index\"]\r\n   }\r\n\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode:'open'})\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    AttributeChangedCallback(propName, oldValue, newValue){\r\n        this[propName] = newValue;\r\n        this.render()\r\n    }\r\n\r\n    render(){\r\n        let btnicons = \"\";\r\n\r\n        _othericon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((othericon, index)=>{\r\n            btnicons += `\r\n            <button id=\"btn${index}\"><img src=\"${othericon.icon}\"></button>\r\n            `\r\n        })\r\n\r\n/*         const link = document.createElement('link')\r\n        link.rel = 'stylesheet';\r\n        link.href = '../src/components/post/btn-actions/btn-act.css';\r\n        this.shadowRoot.appendChild(link)\r\n         */\r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/post/btn-actions/btn-act.css\">\r\n        <div class=\"icons-act\">\r\n        ${btnicons}\r\n        </div>\r\n        `\r\n\r\n    }\r\n}\r\ncustomElements.define('btn-act', BtnAct)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnAct);\n\n//# sourceURL=webpack://t1/./src/components/post/btn-actions/btn-act.js?");

/***/ }),

/***/ "./src/components/post/btn-actions/othericon.js":
/*!******************************************************!*\
  !*** ./src/components/post/btn-actions/othericon.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        icon: \"../../../img/share.png\" \r\n    },\r\n    {\r\n        icon: \"../../../img/comment.png\"\r\n    },\r\n    {\r\n        icon: \"../../../img/repost.png\" \r\n    },\r\n    {\r\n        icon: \"../../../img/heart.png\" \r\n    },\r\n]);\n\n//# sourceURL=webpack://t1/./src/components/post/btn-actions/othericon.js?");

/***/ }),

/***/ "./src/components/post/post.js":
/*!*************************************!*\
  !*** ./src/components/post/post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postdata.js */ \"./src/components/post/postdata.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ \"./src/components/index.js\");\n\r\n\r\n\r\nclass NewPost extends HTMLElement {\r\n   static get observedAttributes(){\r\n    return[\"image\"]\r\n   }\r\n\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode:'open'})\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue){\r\n        this[propName] = newValue;\r\n        this.render()\r\n    }\r\n\r\n    render(){\r\n        console.log(\"rendered\");\r\n       \r\n        let newpost = \"\";\r\n\r\n        _postdata_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((postdata)=>{\r\n            newpost += `\r\n            <new-prof image =\"${postdata.pic}\" id=\"${postdata.id}\" ></new-prof>\r\n            <img src=\"${postdata.img}\"></img>    \r\n            <new-des description =\"${postdata.description}\" hashtags=\"${postdata.hashtags}\"></new-des>\r\n           \r\n            `\r\n        })\r\n         this.shadowRoot.innerHTML += `\r\n        <link rel=\"stylesheet\" href=\"../src/components/post/post.css\">\r\n        <section class=\"post\">\r\n        ${newpost}\r\n        </section>\r\n        `\r\n\r\n    }\r\n}\r\ncustomElements.define('new-post', NewPost)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPost);\n\n//# sourceURL=webpack://t1/./src/components/post/post.js?");

/***/ }),

/***/ "./src/components/post/postdata.js":
/*!*****************************************!*\
  !*** ./src/components/post/postdata.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        pic: \"https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780\",\r\n        id : \"Lolitofernandez69\",\r\n        img: \"https://pbs.twimg.com/media/FAcceczXoAQfzlx.jpg:large\",\r\n        description: \"Manga Cap\",\r\n        hashtags : \"#pics #anime\"\r\n    },\r\n    {\r\n        pic:\"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg\",\r\n        id: \"elbakubro\",\r\n        img: \"https://i.pinimg.com/originals/9b/61/9b/9b619b9174c06e1fc07b787b91e954af.jpg\" ,\r\n        description: \"bakugou <333\",\r\n        hashtags : \"#bakugou #mha\"\r\n    },\r\n    {\r\n        pic:\"https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg\",\r\n        id: \"AndrescarnedeRes\",\r\n        img: \"https://preview.redd.it/makima-chainsaw-man-v0-f2xaoi58x4t91.jpg?width=640&crop=smart&auto=webp&s=37553425d656de61a5c8d91bc9135a253f980041\",\r\n        description: \"Fanart\",\r\n        hashtags : \"#makima #chainsawman #art\"\r\n    },\r\n    {\r\n        pic:\"https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg\",\r\n        id: \"KiraisQueen\",\r\n        img:\"https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1596833467/content-items/005/440/308/00F4D0F7-71EC-401E-9E1D-0A87DDEEBF67-original.jpeg?1596833467\",\r\n        description: \"Spiderman\",\r\n        hashtags : \"#marvel #art\"\r\n    }\r\n]);\n\n//# sourceURL=webpack://t1/./src/components/post/postdata.js?");

/***/ }),

/***/ "./src/components/profile-post/profilePost.js":
/*!****************************************************!*\
  !*** ./src/components/profile-post/profilePost.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nclass profilePost extends HTMLElement {\r\n\r\n    image = \"\"\r\n    id = \"\"\r\n    \r\n   static get observedAttributes(){\r\n    return[\"image\",\"id\"]\r\n   }\r\n\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode:'open'})\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    attributeChangedCallback(propName, oldValue, newValue){\r\n      this[propName] = newValue;\r\n        this.render()\r\n    }\r\n    \r\n    render(){\r\n        console.log(\"re\");\r\n       \r\n        this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/profile-post/profilePost.css\">\r\n        <section class=\"profile\">\r\n        <img src=\"${this.image}\"></img>\r\n        <p>${this.id}</p>\r\n        </section>\r\n        `\r\n    }\r\n   \r\n}\r\ncustomElements.define('new-prof', profilePost)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profilePost);\n\n//# sourceURL=webpack://t1/./src/components/profile-post/profilePost.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n\r\nclass AppContainer extends HTMLElement{\r\n    constructor(){\r\n        super();\r\n        this.attachShadow({mode:'open'})\r\n    }\r\n\r\n    connectedCallback(){\r\n        this.render();\r\n    }\r\n\r\n    render(){\r\n     /*    const figure = document.createElement('figure');\r\n        this.shadowRoot.appendChild(figure); */\r\n        this.shadowRoot.innerHTML = `<nav-bar></nav-bar>\r\n        \r\n        <new-post> </new-post>\r\n        \r\n        `\r\n    }\r\n}\r\ncustomElements.define('app-container', AppContainer)\r\n\n\n//# sourceURL=webpack://t1/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;