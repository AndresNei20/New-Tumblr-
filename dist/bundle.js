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

/***/ "./src/screens/login/login.css":
/*!*************************************!*\
  !*** ./src/screens/login/login.css ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n#datainput {\\r\\n    background-color: white;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    border-radius: 30px;\\r\\n    width: 100vh;\\r\\n    margin-right: 10%;\\r\\n    \\r\\n}\\r\\n\\r\\ninput {\\r\\n    background-color: rgb(48, 46, 55);\\r\\n    color: white;\\r\\n    border: none;\\r\\n    border-radius: 10px;\\r\\n    width:100%;\\r\\n    height: 8%;\\r\\n    margin: 2%;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#bigsec {\\r\\n    background-color: white;\\r\\n    width: 50%;\\r\\n    height: fit-content;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    border-radius: 30px;\\r\\n    \\r\\n}\\r\\n\\r\\n#background {\\r\\n    width: 100%;\\r\\n    height:100vh;\\r\\n    background-color: rgb(3, 7, 32);\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    overflow: hidden;\\r\\n    position: fixed;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n#start {\\r\\n    margin-top: 2%;\\r\\n    border: none;\\r\\n    background-color: aqua;\\r\\n    border-radius: 10px;\\r\\n    width: 70%;\\r\\n    height: 10%;\\r\\n}\\r\\n\\r\\n#other {\\r\\n    margin: 0;\\r\\n    border: none;\\r\\n    background-color: white;\\r\\n    border-radius: 10px;\\r\\n    width: 50%;\\r\\n    height: 10%;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://t1/./src/screens/login/login.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://t1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://t1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/button-list/btn-list.ts":
/*!************************************************!*\
  !*** ./src/components/button-list/btn-list.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeIcon\": () => (/* binding */ AttributeIcon),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imagedata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagedata */ \"./src/components/button-list/imagedata.ts\");\n\nvar AttributeIcon;\n(function (AttributeIcon) {\n    AttributeIcon[\"icon\"] = \"icon\";\n})(AttributeIcon || (AttributeIcon = {}));\nclass BtnList extends HTMLElement {\n    static get observedAttributes() {\n        return [\"icon\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    AttributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n        }\n        let btnContent = \"\";\n        _imagedata__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((imagedata, index) => {\n            btnContent += `\r\n            <button id=\"btn${index}\"><img src=\"${imagedata.icon}\"></button>    \r\n            `;\n        });\n        const link = document.createElement('link');\n        link.rel = 'stylesheet';\n        link.href = '../src/components/button-list/btn-list.css';\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(link);\n        const iconsNav = this.ownerDocument.createElement('div');\n        iconsNav.classList.add(\"icons-nav\");\n        iconsNav.innerHTML = btnContent;\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(iconsNav);\n        /*         this.shadowRoot.innerHTML += `\n                <div class=\"icons-nav\">\n                ${btncontent}\n                </div>\n                ` */\n    }\n}\ncustomElements.define('btn-list', BtnList);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnList);\n\n\n//# sourceURL=webpack://t1/./src/components/button-list/btn-list.ts?");

/***/ }),

/***/ "./src/components/button-list/imagedata.ts":
/*!*************************************************!*\
  !*** ./src/components/button-list/imagedata.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        icon: \"../../../img/home-icon-btn.png\"\n    },\n    {\n        icon: \"../../../img/mail-btn.png\"\n    },\n    {\n        icon: \"../../../img/search-icon-btn.png\"\n    },\n    {\n        icon: \"../../../img/user-btn.png\"\n    },\n    {\n        icon: \"../../../img/post.png\"\n    }\n]);\n\n\n//# sourceURL=webpack://t1/./src/components/button-list/imagedata.ts?");

/***/ }),

/***/ "./src/components/description/description.ts":
/*!***************************************************!*\
  !*** ./src/components/description/description.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeDesc\": () => (/* binding */ AttributeDesc),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributeDesc;\n(function (AttributeDesc) {\n    AttributeDesc[\"description\"] = \"description\";\n    AttributeDesc[\"hashtags\"] = \"hashtags\";\n})(AttributeDesc || (AttributeDesc = {}));\nclass profileDes extends HTMLElement {\n    static get observedAttributes() {\n        return [\"description\", \"hashtags\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n         <link rel=\"stylesheet\" href=\"../src/components/description/description.css\">\r\n         <section class=\"profile\">\r\n         <p>${this.description}</p>\r\n         <p>${this.hashtags}</p>\r\n         <p>0 likes</p>\r\n         <btn-act id=\"prueba\"></btn-act>\r\n         </section>\r\n         `;\n    }\n}\ncustomElements.define('new-des', profileDes);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileDes);\n\n\n//# sourceURL=webpack://t1/./src/components/description/description.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnList\": () => (/* reexport safe */ _button_list_btn_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Forms\": () => (/* reexport safe */ _forms_forms__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   \"InputBar\": () => (/* reexport safe */ _input_bar_input_bar__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _screens_login_login__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"MessangerScreen\": () => (/* reexport safe */ _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   \"MssgBox\": () => (/* reexport safe */ _mssgbox_mssg__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   \"MssgInputBar\": () => (/* reexport safe */ _message_bar_message_bar__WEBPACK_IMPORTED_MODULE_11__[\"default\"]),\n/* harmony export */   \"MyInput\": () => (/* reexport safe */ _input_input__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"NavBar\": () => (/* reexport safe */ _navBar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"NewPost\": () => (/* reexport safe */ _post_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"SideMenu\": () => (/* reexport safe */ _sidemenu_sidemenu__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   \"Signup\": () => (/* reexport safe */ _screens_signup_signup__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"profileDes\": () => (/* reexport safe */ _description_description__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"profilePost\": () => (/* reexport safe */ _profile_post_profilePost__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _navBar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar/nav-bar */ \"./src/components/navBar/nav-bar.ts\");\n/* harmony import */ var _button_list_btn_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-list/btn-list */ \"./src/components/button-list/btn-list.ts\");\n/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post */ \"./src/components/post/post.ts\");\n/* harmony import */ var _profile_post_profilePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-post/profilePost */ \"./src/components/profile-post/profilePost.ts\");\n/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./description/description */ \"./src/components/description/description.ts\");\n/* harmony import */ var _input_bar_input_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-bar/input-bar */ \"./src/components/input-bar/input-bar.ts\");\n/* harmony import */ var _screens_login_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/login/login */ \"./src/screens/login/login.ts\");\n/* harmony import */ var _screens_signup_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/signup/signup */ \"./src/screens/signup/signup.ts\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input/input */ \"./src/components/input/input.ts\");\n/* harmony import */ var _forms_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/forms */ \"./src/components/forms/forms.ts\");\n/* harmony import */ var _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../screens/messanges/messages */ \"./src/screens/messanges/messages.ts\");\n/* harmony import */ var _message_bar_message_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message-bar/message-bar */ \"./src/components/message-bar/message-bar.ts\");\n/* harmony import */ var _mssgbox_mssg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mssgbox/mssg */ \"./src/components/mssgbox/mssg.ts\");\n/* harmony import */ var _sidemenu_sidemenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidemenu/sidemenu */ \"./src/components/sidemenu/sidemenu.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_post_post__WEBPACK_IMPORTED_MODULE_2__, _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_10__, _mssgbox_mssg__WEBPACK_IMPORTED_MODULE_12__, _sidemenu_sidemenu__WEBPACK_IMPORTED_MODULE_13__]);\n([_post_post__WEBPACK_IMPORTED_MODULE_2__, _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_10__, _mssgbox_mssg__WEBPACK_IMPORTED_MODULE_12__, _sidemenu_sidemenu__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/forms/forms.ts":
/*!***************************************!*\
  !*** ./src/components/forms/forms.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeForms\": () => (/* binding */ AttributeForms),\n/* harmony export */   \"default\": () => (/* binding */ Forms)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n\n\nconst customPost = {\n    img: \"\",\n    pic: \"https://instagram.fpei2-1.fna.fbcdn.net/v/t51.2885-19/291509149_438415681217081_8296261908460936663_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fpei2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=EfTsnVVGe04AX8ZsLvm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCcQLSW6wE4xZCJpY23U6KJeAWxl-viDS4d_CRydAPHsg&oe=64598B92&_nc_sid=8fd12b\",\n    id: \"user\",\n    description: \"\",\n    hashtags: \"\",\n};\nvar AttributeForms;\n(function (AttributeForms) {\n    AttributeForms[\"image\"] = \"image\";\n    AttributeForms[\"description\"] = \"description\";\n    AttributeForms[\"hashtags\"] = \"hashtags\";\n})(AttributeForms || (AttributeForms = {}));\nclass Forms extends HTMLElement {\n    static get observedAttributes() {\n        return [\"image\", \"description\", \"hashtags\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    sentValuesImg(e) {\n        console.log(\"change\");\n        customPost.img = e.target.value;\n    }\n    sentValueDes(e) {\n        customPost.description = e.target.value;\n    }\n    sentValueHash(e) {\n        customPost.hashtags = e.target.value;\n    }\n    submitForm() {\n        (0,_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.addNewPost)({ payload: customPost }));\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n         <link rel=\"stylesheet\" href=\"../src/components/forms/forms.css\">`;\n        /*        `\n              <link rel=\"stylesheet\" href=\"../src/components/description/description.css\">\n              <form class=\"app-form\">\n              <input type=\"file\"></input>\n              <input>${this.description}</input>\n              <input>${this.hashtags}</input>\n             \n              <button>Add</button>\n              </form>\n              ` */\n        const form = this.ownerDocument.createElement('form');\n        form.className = \"app-form\";\n        const input1 = this.ownerDocument.createElement('input');\n        input1.type = \"file\";\n        input1.addEventListener('change', this.sentValuesImg);\n        input1.placeholder = \"Put your image\";\n        form.appendChild(input1);\n        const input2 = this.ownerDocument.createElement('input');\n        input2.placeholder = \"description here\";\n        input2.addEventListener('change', this.sentValueDes);\n        form.appendChild(input2);\n        const input3 = this.ownerDocument.createElement('input');\n        input3.addEventListener('change', this.sentValueHash);\n        input3.placeholder = \"hashtags here\";\n        form.appendChild(input3);\n        const btnSave = this.ownerDocument.createElement('button');\n        btnSave.innerText = \"Add\";\n        btnSave.addEventListener('click', this.submitForm);\n        form.appendChild(btnSave);\n        const popUp = this.ownerDocument.createElement('figure');\n        popUp.className = \"popUp\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(form);\n    }\n}\ncustomElements.define('app-form', Forms);\n\n\n//# sourceURL=webpack://t1/./src/components/forms/forms.ts?");

/***/ }),

/***/ "./src/components/input-bar/dataicons.ts":
/*!***********************************************!*\
  !*** ./src/components/input-bar/dataicons.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        icon: \"../../../img/font.png\",\n        tag: \"Text\"\n    },\n    {\n        icon: \"../../../img/photo.png\",\n        tag: \"Photo\"\n    },\n    {\n        icon: \"../../../img/quote.png\",\n        tag: \"Quote\"\n    },\n    {\n        icon: \"../../../img/audio.png\",\n        tag: \"Audio\"\n    },\n    {\n        icon: \"../../../img/video.png\",\n        tag: \"Video\"\n    }\n]);\n\n\n//# sourceURL=webpack://t1/./src/components/input-bar/dataicons.ts?");

/***/ }),

/***/ "./src/components/input-bar/input-bar.ts":
/*!***********************************************!*\
  !*** ./src/components/input-bar/input-bar.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeInpBar\": () => (/* binding */ AttributeInpBar),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataicons */ \"./src/components/input-bar/dataicons.ts\");\n\nvar AttributeInpBar;\n(function (AttributeInpBar) {\n    AttributeInpBar[\"dataicons\"] = \"dataicons\";\n})(AttributeInpBar || (AttributeInpBar = {}));\nclass InputBar extends HTMLElement {\n    static get observedAttributes() {\n        return [\"dataicons\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        let inputscont = \"\";\n        _dataicons__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((dataicons, index) => {\n            inputscont += `\r\n           <div id=\"btn-box>\r\n            <button id=\"inp${index}\"><img class=\"options\" src=\"${dataicons.icon}\"></button>\r\n            <p>${dataicons.tag}</p>\r\n            </div>\r\n            `;\n        });\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../src/components/input-bar/input-bar.css\">\r\n            <section id=\"containerbtn\">\r\n                <img id=\"profpic\" src=\"https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780\">\r\n              <div id=\"btn_box\">  ${inputscont}</div>\r\n            </section>\r\n            `;\n    }\n}\ncustomElements.define('input-bar', InputBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBar);\n\n\n//# sourceURL=webpack://t1/./src/components/input-bar/input-bar.ts?");

/***/ }),

/***/ "./src/components/input/input.ts":
/*!***************************************!*\
  !*** ./src/components/input/input.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyInput)\n/* harmony export */ });\nclass MyInput extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n        }\n        const myInput = this.ownerDocument.createElement('input');\n        myInput.innerText = \"info del store\";\n    }\n}\ncustomElements.define('app-input', MyInput);\n\n\n//# sourceURL=webpack://t1/./src/components/input/input.ts?");

/***/ }),

/***/ "./src/components/message-bar/message-bar.ts":
/*!***************************************************!*\
  !*** ./src/components/message-bar/message-bar.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeBar\": () => (/* binding */ AttributeBar),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributeBar;\n(function (AttributeBar) {\n    AttributeBar[\"type\"] = \"type\";\n})(AttributeBar || (AttributeBar = {}));\nclass MssgInputBar extends HTMLElement {\n    static get observedAttributes() {\n        return [\"type\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../src/components/message-bar/message-bar.css\">\r\n            <section id=\"containerbtn\">\r\n                <button id=button>New</button>\r\n                <button id=button>Starred</button>\r\n                <button id=button>All Messages</button>\r\n            </section>\r\n            `;\n    }\n}\ncustomElements.define('message-bar', MssgInputBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MssgInputBar);\n\n\n//# sourceURL=webpack://t1/./src/components/message-bar/message-bar.ts?");

/***/ }),

/***/ "./src/components/mssgbox/mssg.ts":
/*!****************************************!*\
  !*** ./src/components/mssgbox/mssg.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeMssg\": () => (/* binding */ AttributeMssg),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/export */ \"./src/components/export.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_export__WEBPACK_IMPORTED_MODULE_1__]);\n_components_export__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nvar AttributeMssg;\n(function (AttributeMssg) {\n    AttributeMssg[\"userimage\"] = \"userimage\";\n    AttributeMssg[\"username\"] = \"username\";\n})(AttributeMssg || (AttributeMssg = {}));\nclass MssgBox extends HTMLElement {\n    static get observedAttributes() {\n        return [\"userimage\", \"username\"];\n    }\n    constructor() {\n        super();\n        this.userimage = \"\";\n        this.username = \"\";\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        if (propName === propName) {\n            this[propName] = newValue;\n        }\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/mssgbox/mssg.css\">\r\n        <section id=\"profile\">\r\n        <img id=\"img\" src=\"${this.userimage}\"></img>\r\n        <p id=\"this\">${this.username}</p>\r\n        </section>\r\n        <section id=\"message\">\r\n        <p> Hello There!</p>\r\n        </section>\r\n        \r\n        `;\n    }\n}\ncustomElements.define('message-box', MssgBox);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MssgBox);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/components/mssgbox/mssg.ts?");

/***/ }),

/***/ "./src/components/navBar/nav-bar.ts":
/*!******************************************!*\
  !*** ./src/components/navBar/nav-bar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeBtn\": () => (/* binding */ AttributeBtn),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributeBtn;\n(function (AttributeBtn) {\n    AttributeBtn[\"button\"] = \"button\";\n})(AttributeBtn || (AttributeBtn = {}));\nclass NavBar extends HTMLElement {\n    static get observedAttributes() {\n        return [\"button\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    connectedChangeCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        var _a;\n        const link = document.createElement('link');\n        link.rel = \"stylesheet\";\n        link.href = \"../src/components/navBar/nav-bar.css\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(link);\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML += `\r\n        <nav id=\"navBack\">\r\n            <img class=\"logo\" src=\"../../../img/tumblr-1.png\">\r\n            <input type=\"search\" id=\"search\" placeholder=\"search someone\">\r\n            <btn-list></btn-list>\r\n        </nav>\r\n        `;\n    }\n}\ncustomElements.define('nav-bar', NavBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://t1/./src/components/navBar/nav-bar.ts?");

/***/ }),

/***/ "./src/components/post/post.ts":
/*!*************************************!*\
  !*** ./src/components/post/post.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeImg\": () => (/* binding */ AttributeImg),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_ApiPostData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiPostData */ \"./src/services/ApiPostData.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n\n\n\nconsole.log(await _services_ApiPostData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get());\nvar AttributeImg;\n(function (AttributeImg) {\n    AttributeImg[\"image\"] = \"image\";\n})(AttributeImg || (AttributeImg = {}));\nclass NewPost extends HTMLElement {\n    static get observedAttributes() {\n        return [\"image\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.addObserver)(this);\n    }\n    async connectedCallback() {\n        const action = await (0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.getPosts)();\n        (0,_store__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render(action) {\n        console.log(\"rendered\");\n        let newpost = \"\";\n        //Esto se hara como lo que hay en el 17_globalState en el Dashboard\n        action.forEach((postdata) => {\n            console.log(postdata);\n            newpost += `\r\n             <new-prof image =\"${postdata.pic}\" id=\"${postdata.id}\" ></new-prof>\r\n             <img src=\"${postdata.img}\"></img>    \r\n             <new-des description =\"${postdata.description}\" hashtags=\"${postdata.hashtags}\"></new-des>\r\n             `;\n            /*              for (let i = 0; i < appState.newPost.length; i++) {\n                            console.log(i);\n                            newpost += `\n                            <new-prof image =\"${.pic}\" id=\"${i.id}\" ></new-prof>\n                            <img src=\"${postdata.img}\"></img>\n                            <new-des description =\"${postdata.description}\" hashtags=\"${postdata.hashtags}\"></new-des>\n                            `\n                         } */\n        });\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML += `\r\n        <link rel=\"stylesheet\" href=\"../src/components/post/post.css\">\r\n        <section class=\"post\">\r\n        <input-bar></input-bar>\r\n        ${newpost}\r\n        </section>\r\n        `;\n    }\n}\ncustomElements.define('new-post', NewPost);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPost);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://t1/./src/components/post/post.ts?");

/***/ }),

/***/ "./src/components/post/postdata.ts":
/*!*****************************************!*\
  !*** ./src/components/post/postdata.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postdata\": () => (/* binding */ postdata)\n/* harmony export */ });\nconst postdata = [\n    {\n        pic: \"https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780\",\n        id: \"Lolitofernandez69\",\n        img: \"https://pbs.twimg.com/media/FAcceczXoAQfzlx.jpg:large\",\n        description: \"Manga Cap\",\n        hashtags: \"#pics #anime\"\n    },\n    {\n        pic: \"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg\",\n        id: \"elbakubro\",\n        img: \"https://i.pinimg.com/originals/9b/61/9b/9b619b9174c06e1fc07b787b91e954af.jpg\",\n        description: \"bakugou <333\",\n        hashtags: \"#bakugou #mha\"\n    },\n    {\n        pic: \"https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg\",\n        id: \"AndrescarnedeRes\",\n        img: \"https://preview.redd.it/makima-chainsaw-man-v0-f2xaoi58x4t91.jpg?width=640&crop=smart&auto=webp&s=37553425d656de61a5c8d91bc9135a253f980041\",\n        description: \"Fanart\",\n        hashtags: \"#makima #chainsawman #art\"\n    },\n    {\n        pic: \"https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg\",\n        id: \"KiraisQueen\",\n        img: \"https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1596833467/content-items/005/440/308/00F4D0F7-71EC-401E-9E1D-0A87DDEEBF67-original.jpeg?1596833467\",\n        description: \"Spiderman\",\n        hashtags: \"#marvel #art\"\n    },\n];\n\n\n//# sourceURL=webpack://t1/./src/components/post/postdata.ts?");

/***/ }),

/***/ "./src/components/profile-post/profilePost.ts":
/*!****************************************************!*\
  !*** ./src/components/profile-post/profilePost.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributePp\": () => (/* binding */ AttributePp),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/index */ \"./src/store/index.ts\");\n\nvar AttributePp;\n(function (AttributePp) {\n    AttributePp[\"image\"] = \"image\";\n    AttributePp[\"uid\"] = \"uid\";\n})(AttributePp || (AttributePp = {}));\nclass profilePost extends HTMLElement {\n    static get observedAttributes() {\n        return [\"image\", \"uid\"];\n    }\n    constructor() {\n        super();\n        this.image = \"\";\n        this.uid = \"\";\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        if (propName === propName) {\n            this[propName] = newValue;\n        }\n    }\n    render() {\n        console.log(\"re\");\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/profile-post/profilePost.css\">\r\n        <section class=\"profile\">\r\n        <img src=\"${this.image}\"></img>\r\n        <p>${this.id}</p>\r\n        </section>\r\n        `;\n    }\n}\ncustomElements.define('new-prof', profilePost);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profilePost);\n\n\n//# sourceURL=webpack://t1/./src/components/profile-post/profilePost.ts?");

/***/ }),

/***/ "./src/components/sidemenu/sidemenu.ts":
/*!*********************************************!*\
  !*** ./src/components/sidemenu/sidemenu.ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenuA\": () => (/* binding */ SideMenuA),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/export */ \"./src/components/export.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_export__WEBPACK_IMPORTED_MODULE_0__]);\n_components_export__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar SideMenuA;\n(function (SideMenuA) {\n    SideMenuA[\"username\"] = \"username\";\n})(SideMenuA || (SideMenuA = {}));\nclass SideMenu extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            username: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML += `\r\n        <link rel=\"stylesheet\" href=\"../src/components/sidemenu/sidemenu.css\">\r\n       \r\n        <section id=\"whole\">\r\n        <button id=\"button\">All Messages</button>\r\n        <div id=\"all\">\r\n        <h3>User 1</h3>\r\n        <h3>User 2</h3>\r\n        <h3>User 3</h3>\r\n        </div>\r\n        </section>\r\n        \r\n\r\n        `;\n    }\n}\ncustomElements.define('side-menu', SideMenu);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideMenu);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/components/sidemenu/sidemenu.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/profile/profile */ \"./src/screens/profile/profile.ts\");\n/* harmony import */ var _screens_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/dashboard/dashboard */ \"./src/screens/dashboard/dashboard.ts\");\n/* harmony import */ var _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/messanges/messages */ \"./src/screens/messanges/messages.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ \"./src/store/index.ts\");\n/* harmony import */ var _types_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/navigation */ \"./src/types/navigation.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_export__WEBPACK_IMPORTED_MODULE_0__, _screens_profile_profile__WEBPACK_IMPORTED_MODULE_1__, _screens_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__, _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_3__]);\n([_components_export__WEBPACK_IMPORTED_MODULE_0__, _screens_profile_profile__WEBPACK_IMPORTED_MODULE_1__, _screens_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_2__, _screens_messanges_messages__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.login = [];\n        this.attachShadow({ mode: 'open' });\n        (0,_store__WEBPACK_IMPORTED_MODULE_4__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d, _e;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        switch (_store__WEBPACK_IMPORTED_MODULE_4__.appState.screen) {\n            case _types_navigation__WEBPACK_IMPORTED_MODULE_5__.Screens.LOGIN:\n                const login = this.ownerDocument.createElement('log-in');\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(login);\n                break;\n            case _types_navigation__WEBPACK_IMPORTED_MODULE_5__.Screens.SIGNUP:\n                const signup = this.ownerDocument.createElement('sign-up');\n                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(signup);\n                break;\n            case _types_navigation__WEBPACK_IMPORTED_MODULE_5__.Screens.DASHBOARD:\n                const dashboard = this.ownerDocument.createElement('app-dashboard');\n                (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(dashboard);\n                break;\n            case _types_navigation__WEBPACK_IMPORTED_MODULE_5__.Screens.MESSAGES:\n                const messages = this.ownerDocument.createElement('messages-screen');\n                (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(messages);\n                break;\n            case _types_navigation__WEBPACK_IMPORTED_MODULE_5__.Screens.PROFILE:\n                const profile = this.ownerDocument.createElement('profile-screen');\n                (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(profile);\n                break;\n            default:\n                break;\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard/dashboard.ts":
/*!********************************************!*\
  !*** ./src/screens/dashboard/dashboard.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/export */ \"./src/components/export.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_export__WEBPACK_IMPORTED_MODULE_0__]);\n_components_export__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ` \r\n        <nav-bar></nav-bar>\r\n        <new-post> </new-post>  \r\n        `;\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/screens/dashboard/dashboard.ts?");

/***/ }),

/***/ "./src/screens/login/login.ts":
/*!************************************!*\
  !*** ./src/screens/login/login.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.ts\");\n/* harmony import */ var _types_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/navigation */ \"./src/types/navigation.ts\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.css */ \"./src/screens/login/login.css\");\n\n\n\n\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"username\"] = \"username\";\n    Attributes[\"password\"] = \"password\";\n})(Attributes || (Attributes = {}));\nclass Login extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            username: null,\n            password: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const css = this.ownerDocument.createElement(\"style\");\n            css.innerHTML = _login_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n            /*         this.shadowRoot.innerHTML+=`\n                    <link rel=\"stylesheet\" href=\"../src/screens/login/login.css\">\n                    <section id=\"background\">\n                        <section id=\"bigsec\">\n                             <img src=\"https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96\"></img>\n                             <section id=\"datainput\">\n                                     <input placeholder=\"Username\"></input>\n                                     <input type=\"password\" placeholder=\"Password\"></input>\n                                     <button id=\"start\">Log In</button>\n                                     <button id=\"other\">Sign Up</button>\n                             </section>\n                        </section>\n                    </section>\n                    ` */\n            const sectionBack = this.ownerDocument.createElement('section');\n            sectionBack.id = \"background\";\n            const sectionBig = this.ownerDocument.createElement('section');\n            sectionBig.id = \"bigsec\";\n            const logo = this.ownerDocument.createElement('img');\n            logo.src = \"https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96\";\n            const sectionInp = this.ownerDocument.createElement('section');\n            sectionInp.id = \"datainput\";\n            const userInp = this.ownerDocument.createElement('input');\n            userInp.placeholder = \"Username\";\n            const userPass = this.ownerDocument.createElement('input');\n            userPass.placeholder = \"Password\";\n            userPass.type = \"password\";\n            const btnLog = this.ownerDocument.createElement('button');\n            btnLog.id = \"start\";\n            btnLog.innerText = \"Log In\";\n            btnLog.addEventListener('click', () => {\n                (0,_store__WEBPACK_IMPORTED_MODULE_0__.dispatch)((0,_store_actions__WEBPACK_IMPORTED_MODULE_1__.navigate)(_types_navigation__WEBPACK_IMPORTED_MODULE_2__.Screens.DASHBOARD));\n            });\n            const btnSign = this.ownerDocument.createElement('button');\n            btnSign.id = \"other\";\n            btnSign.innerText = \"Sign up\";\n            sectionInp.appendChild(userInp);\n            sectionInp.appendChild(userPass);\n            sectionInp.appendChild(btnLog);\n            sectionInp.appendChild(btnSign);\n            sectionBig.appendChild(logo);\n            sectionBig.appendChild(sectionInp);\n            sectionBack.appendChild(sectionBig);\n            this.shadowRoot.appendChild(sectionBack);\n            const logBtn = this.ownerDocument.getElementById('start');\n            logBtn === null || logBtn === void 0 ? void 0 : logBtn.addEventListener('click', () => {\n                console.log('hola, funciona');\n            });\n            //.addEventlistener(() => {\n            //     dispatch(changeScreen(\"login\"))\n            //s })\n        }\n    }\n}\ncustomElements.define(\"log-in\", Login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n\n//# sourceURL=webpack://t1/./src/screens/login/login.ts?");

/***/ }),

/***/ "./src/screens/messanges/messages.ts":
/*!*******************************************!*\
  !*** ./src/screens/messanges/messages.ts ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessangerScreenApp\": () => (/* binding */ MessangerScreenApp),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/export */ \"./src/components/export.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_export__WEBPACK_IMPORTED_MODULE_0__]);\n_components_export__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar MessangerScreenApp;\n(function (MessangerScreenApp) {\n    MessangerScreenApp[\"username\"] = \"username\";\n})(MessangerScreenApp || (MessangerScreenApp = {}));\nclass MessangerScreen extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            username: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML += `\r\n        <link rel=\"stylesheet\" href=\"../src/screens/messanges/messages.css\">\r\n       \r\n        <section id=\"whole\">\r\n            <nav-bar></nav-bar>\r\n            <section id=\"row\">\r\n                <div id=\"conversation\">\r\n                <message-bar></message-bar>\r\n                    <message-box id=\"box\" username=\"Andres087\" userimage=\"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80\"></message-box>\r\n                    <message-box id=\"box\" username=\"P@oLA21\" userimage=\"https://www.shutterstock.com/image-vector/we-have-winner-vector-banner-600w-616060073.jpg\"></message-box>\r\n                    <message-box id=\"box\" username=\"User404\" userimage=\"https://www.shutterstock.com/image-illustration/shorthaired-blonde-girl-scared-face-600w-2267707401.jpg\"></message-box>\r\n                </div>\r\n                <side-menu id=\"sidemenu\"></side-menu>\r\n            </section>\r\n        </section>\r\n        \r\n\r\n        `;\n    }\n}\ncustomElements.define('messanges-screen', MessangerScreen);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessangerScreen);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/screens/messanges/messages.ts?");

/***/ }),

/***/ "./src/screens/profile/profile.ts":
/*!****************************************!*\
  !*** ./src/screens/profile/profile.ts ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/export */ \"./src/components/export.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_export__WEBPACK_IMPORTED_MODULE_0__]);\n_components_export__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Profile extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/screens/profile/profile.css\">`;\n        }\n        const myInput = this.ownerDocument.createElement('app-input');\n        myInput.innerText = \"info del store\";\n        const navBar = this.ownerDocument.createElement('nav-bar');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(navBar);\n        const back_div = this.ownerDocument.createElement('div');\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(back_div);\n        const bot_section = this.ownerDocument.createElement('section');\n        bot_section.className = \"sectionWhite\";\n        const profilePic = this.ownerDocument.createElement('img');\n        profilePic.src = `https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg`;\n        bot_section.appendChild(profilePic);\n        const userName = this.ownerDocument.createElement('h3');\n        userName.innerText = \"@Paola\";\n        userName.className = \"userName\";\n        bot_section.appendChild(userName);\n        const userDesc = this.ownerDocument.createElement('p');\n        userDesc.innerText = \"My Name is Paola\";\n        bot_section.appendChild(userDesc);\n        const whiteSection = this.ownerDocument.createElement('section');\n        bot_section === null || bot_section === void 0 ? void 0 : bot_section.appendChild(whiteSection);\n        const subTittle = this.ownerDocument.createElement('h3');\n        subTittle.innerText = \"Username\";\n        const inputOne = this.ownerDocument.createElement('input');\n        inputOne.placeholder = 'Paola';\n        bot_section.appendChild(subTittle);\n        bot_section.appendChild(inputOne);\n        const subTittle2 = this.ownerDocument.createElement('h3');\n        subTittle2.innerText = \"Email\";\n        const inputTwo = this.ownerDocument.createElement('input');\n        inputTwo.placeholder = 'Paola@gmail.com';\n        bot_section.appendChild(subTittle2);\n        bot_section.appendChild(inputTwo);\n        const subTittle3 = this.ownerDocument.createElement('h3');\n        subTittle3.innerText = \"Password\";\n        const inputThree = this.ownerDocument.createElement('input');\n        inputThree.placeholder = 'Forget my password?';\n        bot_section.appendChild(subTittle3);\n        bot_section.appendChild(inputThree);\n        const subTittle4 = this.ownerDocument.createElement('h3');\n        subTittle4.innerText = \"Language\";\n        const inputForth = this.ownerDocument.createElement('input');\n        inputForth.placeholder = 'English';\n        bot_section.appendChild(subTittle4);\n        bot_section.appendChild(inputForth);\n        const subTittle5 = this.ownerDocument.createElement('h3');\n        subTittle5.innerText = \"Blocked Tumblr\";\n        const inputFifth = this.ownerDocument.createElement('input');\n        inputFifth.placeholder = 'None';\n        bot_section.appendChild(subTittle5);\n        bot_section.appendChild(inputFifth);\n        const subTittle6 = this.ownerDocument.createElement('h3');\n        subTittle6.innerText = \"Allow Notifications\";\n        const inputSix = this.ownerDocument.createElement('input');\n        inputSix.placeholder = 'Yes';\n        bot_section.appendChild(subTittle6);\n        bot_section.appendChild(inputSix);\n        const subTittle7 = this.ownerDocument.createElement('h3');\n        subTittle7.innerText = \"Private account\";\n        const inputSeven = this.ownerDocument.createElement('input');\n        inputSeven.placeholder = 'No';\n        bot_section.appendChild(subTittle7);\n        bot_section.appendChild(inputSeven);\n        back_div.appendChild(bot_section);\n        const saveChangesBtn = this.ownerDocument.createElement('button');\n        saveChangesBtn.innerText = \"Save\";\n        saveChangesBtn.className = \"btnSave\";\n        bot_section.appendChild(saveChangesBtn);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(back_div);\n        const signOutBtn = this.ownerDocument.createElement('button');\n        signOutBtn.className = \"signOutBtn\";\n        signOutBtn.innerText = \"Sign Out\";\n        back_div.appendChild(signOutBtn);\n        const deleteBtn = this.ownerDocument.createElement('button');\n        deleteBtn.className = \"deleteBtn\";\n        deleteBtn.innerText = \"Delete Account\";\n        back_div.appendChild(deleteBtn);\n    }\n}\ncustomElements.define('profile-screen', Profile);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://t1/./src/screens/profile/profile.ts?");

/***/ }),

/***/ "./src/screens/signup/signup.ts":
/*!**************************************!*\
  !*** ./src/screens/signup/signup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"username\"] = \"username\";\n    Attributes[\"DOB\"] = \"DOB\";\n    Attributes[\"password\"] = \"password\";\n    Attributes[\"email\"] = \"email\";\n})(Attributes || (Attributes = {}));\nclass Signup extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            username: null,\n            DOB: null,\n            password: null,\n            email: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            this.shadowRoot.innerHTML += `\r\n        <section id=\"background\">\r\n        <section id=\"bigsec\">\r\n        <link rel=\"stylesheet\" href=\"../src/screens/signup/signup.css\">\r\n        <img src=\"https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96\"></img>\r\n        <section id=\"datainput\">\r\n        <input placeholder=\"Username\"></input>\r\n        <input type=\"date\" placeholder=\"Date of Birth\"></input>\r\n        <input type=\"password\" placeholder=\"Set Password\"></input>\r\n        <input placeholder=\"your Email / Phone Number\"></input>\r\n        <button id=\"start\">Log In</button>\r\n        </section>\r\n        </section>\r\n        </section>\r\n        \r\n        `;\n        }\n    }\n}\ncustomElements.define(\"sign-up\", Signup);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n\n\n//# sourceURL=webpack://t1/./src/screens/signup/signup.ts?");

/***/ }),

/***/ "./src/services/ApiPostData.ts":
/*!*************************************!*\
  !*** ./src/services/ApiPostData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_post_postdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/post/postdata */ \"./src/components/post/postdata.ts\");\n\nclass PostData {\n    async get() {\n        console.log(\"starting fetch...\");\n        const value = await new Promise((resolve) => {\n            setTimeout(() => resolve(_components_post_postdata__WEBPACK_IMPORTED_MODULE_0__.postdata), 3000);\n        });\n        return value;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new PostData());\n\n\n//# sourceURL=webpack://t1/./src/services/ApiPostData.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewPost\": () => (/* binding */ addNewPost),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts),\n/* harmony export */   \"logIn\": () => (/* binding */ logIn),\n/* harmony export */   \"logOut\": () => (/* binding */ logOut),\n/* harmony export */   \"navigate\": () => (/* binding */ navigate)\n/* harmony export */ });\n/* harmony import */ var _services_ApiPostData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ApiPostData */ \"./src/services/ApiPostData.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\n\nconst navigate = (screen) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.NavigationActions.NAVIGATE,\n        payload: screen,\n    };\n};\nconst logOut = () => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGOUT,\n        payload: undefined //idk why is undefined\n    };\n};\nconst logIn = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.AuthActions.LOGIN,\n        payload\n    };\n};\nconst getPosts = async () => {\n    const post = await _services_ApiPostData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.PostActions.GET,\n        payload: post\n    };\n};\nconst addNewPost = ({ payload }) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.PostActions.ADD_POST,\n        payload\n    };\n};\n\n\n//# sourceURL=webpack://t1/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch),\n/* harmony export */   \"emptyState\": () => (/* binding */ emptyState)\n/* harmony export */ });\n/* harmony import */ var _types_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/navigation */ \"./src/types/navigation.ts\");\n/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\n\n\nconst screenState = {\n    screen: _types_navigation__WEBPACK_IMPORTED_MODULE_0__.Screens.LOGIN\n};\n/* export let appState = screenState; */\nlet emptyState = {\n    user: {\n        username: \"\",\n        email: \"\",\n        password: \"\",\n        birthday: \"\",\n    },\n    postData: [],\n    newPost: [],\n    screen: _types_navigation__WEBPACK_IMPORTED_MODULE_0__.Screens.LOGIN\n};\nlet appState = _utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get({\n    key: _utils_storage__WEBPACK_IMPORTED_MODULE_1__.PersistanceKeys.STORE,\n    defaultValue: emptyState,\n});\nlet observers = [];\nconst persistStore = (state) => _utils_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set({ key: _utils_storage__WEBPACK_IMPORTED_MODULE_1__.PersistanceKeys.STORE, value: state });\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer)(action, clone);\n    appState = newState;\n    persistStore(newState);\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://t1/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.AuthActions.LOGIN:\n            return Object.assign(Object.assign({}, currentState), { user: payload.user });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.AuthActions.LOGOUT:\n            return Object.assign(Object.assign({}, currentState), { user: {\n                    username: \"\",\n                    email: \"\",\n                    password: \"\",\n                    birthday: \"\"\n                } });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.PostActions.ADD_POST:\n            return Object.assign(Object.assign({}, currentState), { newPost: [\n                    payload,\n                    ...currentState.newPost\n                ] });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.PostActions.GET:\n            return Object.assign(Object.assign({}, currentState), { postData: payload });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.PostActions.DELETE:\n            const postState = [...currentState.postData];\n            postState.filter;\n            return Object.assign({}, currentState);\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.NavigationActions.NAVIGATE:\n            return Object.assign(Object.assign({}, currentState), { screen: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://t1/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/navigation.ts":
/*!*********************************!*\
  !*** ./src/types/navigation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Screens\": () => (/* binding */ Screens)\n/* harmony export */ });\nvar Screens;\n(function (Screens) {\n    Screens[\"LOGIN\"] = \"LOGIN\";\n    Screens[\"SIGNUP\"] = \"SIGNUP\";\n    Screens[\"MESSAGES\"] = \"MESSAGES\";\n    Screens[\"DASHBOARD\"] = \"DASHBOARD\";\n    Screens[\"PROFILE\"] = \"PROFILE\";\n})(Screens || (Screens = {}));\n\n\n//# sourceURL=webpack://t1/./src/types/navigation.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthActions\": () => (/* binding */ AuthActions),\n/* harmony export */   \"NavigationActions\": () => (/* binding */ NavigationActions),\n/* harmony export */   \"PostActions\": () => (/* binding */ PostActions)\n/* harmony export */ });\nvar NavigationActions;\n(function (NavigationActions) {\n    NavigationActions[\"NAVIGATE\"] = \"NAVIGATE\";\n})(NavigationActions || (NavigationActions = {}));\nvar AuthActions;\n(function (AuthActions) {\n    AuthActions[\"LOGIN\"] = \"LOGIN\";\n    AuthActions[\"LOGOUT\"] = \"LOGOUT\";\n})(AuthActions || (AuthActions = {}));\nvar PostActions;\n(function (PostActions) {\n    PostActions[\"ADD_POST\"] = \"ADD_POST\";\n    PostActions[\"GET\"] = \"GET\";\n    PostActions[\"DELETE\"] = \"DELETE\";\n})(PostActions || (PostActions = {}));\n\n\n//# sourceURL=webpack://t1/./src/types/store.ts?");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PersistanceKeys\": () => (/* binding */ PersistanceKeys),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar PersistanceKeys;\n(function (PersistanceKeys) {\n    PersistanceKeys[\"STORE\"] = \"STORE\";\n})(PersistanceKeys || (PersistanceKeys = {}));\nconst get = ({ key, defaultValue, }) => {\n    const value = localStorage.getItem(key) || sessionStorage.getItem(key);\n    return value ? JSON.parse(value) : defaultValue;\n};\nconst set = ({ key, value, session = false, }) => {\n    const storage = session ? sessionStorage : localStorage;\n    const parsed = JSON.stringify(value);\n    storage.setItem(key, parsed);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get,\n    set,\n});\n\n\n//# sourceURL=webpack://t1/./src/utils/storage.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;