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

/***/ "./src/components/button-list/btn-list.ts":
/*!************************************************!*\
  !*** ./src/components/button-list/btn-list.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeIcon\": () => (/* binding */ AttributeIcon),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imagedata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imagedata */ \"./src/components/button-list/imagedata.ts\");\n\nvar AttributeIcon;\n(function (AttributeIcon) {\n    AttributeIcon[\"icon\"] = \"icon\";\n})(AttributeIcon || (AttributeIcon = {}));\nclass BtnList extends HTMLElement {\n    static get observedAttributes() {\n        return [\"icon\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    AttributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n        }\n        let btnContent = \"\";\n        _imagedata__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((imagedata, index) => {\n            btnContent += `\n            <button id=\"btn${index}\"><img src=\"${imagedata.icon}\"></button>    \n            `;\n        });\n        const link = document.createElement('link');\n        link.rel = 'stylesheet';\n        link.href = '../src/components/button-list/btn-list.css';\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(link);\n        const iconsNav = this.ownerDocument.createElement('div');\n        iconsNav.classList.add(\"icons-nav\");\n        iconsNav.innerHTML = btnContent;\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(iconsNav);\n        /*         this.shadowRoot.innerHTML += `\n                <div class=\"icons-nav\">\n                ${btncontent}\n                </div>\n                ` */\n    }\n}\ncustomElements.define('btn-list', BtnList);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BtnList);\n\n\n//# sourceURL=webpack://t1/./src/components/button-list/btn-list.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeDesc\": () => (/* binding */ AttributeDesc),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributeDesc;\n(function (AttributeDesc) {\n    AttributeDesc[\"description\"] = \"description\";\n    AttributeDesc[\"hashtags\"] = \"hashtags\";\n})(AttributeDesc || (AttributeDesc = {}));\nclass profileDes extends HTMLElement {\n    static get observedAttributes() {\n        return [\"description\", \"hashtags\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n         <link rel=\"stylesheet\" href=\"../src/components/description/description.css\">\n         <section class=\"profile\">\n         <p>${this.description}</p>\n         <p>${this.hashtags}</p>\n         <p>0 likes</p>\n         <btn-act id=\"prueba\"></btn-act>\n         </section>\n         `;\n    }\n}\ncustomElements.define('new-des', profileDes);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileDes);\n\n\n//# sourceURL=webpack://t1/./src/components/description/description.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BtnList\": () => (/* reexport safe */ _button_list_btn_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"InputBar\": () => (/* reexport safe */ _input_bar_input_bar__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _screens_login_login__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"NavBar\": () => (/* reexport safe */ _navBar_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"NewPost\": () => (/* reexport safe */ _post_post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Signup\": () => (/* reexport safe */ _screens_signup_signup__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"profileDes\": () => (/* reexport safe */ _description_description__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"profilePost\": () => (/* reexport safe */ _profile_post_profilePost__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _navBar_nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar/nav-bar */ \"./src/components/navBar/nav-bar.ts\");\n/* harmony import */ var _button_list_btn_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-list/btn-list */ \"./src/components/button-list/btn-list.ts\");\n/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post */ \"./src/components/post/post.ts\");\n/* harmony import */ var _profile_post_profilePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-post/profilePost */ \"./src/components/profile-post/profilePost.ts\");\n/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./description/description */ \"./src/components/description/description.ts\");\n/* harmony import */ var _input_bar_input_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-bar/input-bar */ \"./src/components/input-bar/input-bar.ts\");\n/* harmony import */ var _screens_login_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../screens/login/login */ \"./src/screens/login/login.ts\");\n/* harmony import */ var _screens_signup_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../screens/signup/signup */ \"./src/screens/signup/signup.ts\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://t1/./src/components/export.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeInpBar\": () => (/* binding */ AttributeInpBar),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dataicons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataicons */ \"./src/components/input-bar/dataicons.ts\");\n\nvar AttributeInpBar;\n(function (AttributeInpBar) {\n    AttributeInpBar[\"dataicons\"] = \"dataicons\";\n})(AttributeInpBar || (AttributeInpBar = {}));\nclass InputBar extends HTMLElement {\n    static get observedAttributes() {\n        return [\"dataicons\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        let inputscont = \"\";\n        _dataicons__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((dataicons, index) => {\n            inputscont += `\n           <div id=\"btn-box>\n            <button id=\"inp${index}\"><img class=\"options\" src=\"${dataicons.icon}\"></button>\n            <p>${dataicons.tag}</p>\n            </div>\n            `;\n        });\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n            <link rel=\"stylesheet\" href=\"../src/components/input-bar/input-bar.css\">\n            <section id=\"containerbtn\">\n                <img id=\"profpic\" src=\"https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780\">\n              <div id=\"btn_box\">  ${inputscont}</div>\n            </section>\n            `;\n    }\n}\ncustomElements.define('input-bar', InputBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBar);\n\n\n//# sourceURL=webpack://t1/./src/components/input-bar/input-bar.ts?");

/***/ }),

/***/ "./src/components/navBar/nav-bar.ts":
/*!******************************************!*\
  !*** ./src/components/navBar/nav-bar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeBtn\": () => (/* binding */ AttributeBtn),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributeBtn;\n(function (AttributeBtn) {\n    AttributeBtn[\"button\"] = \"button\";\n})(AttributeBtn || (AttributeBtn = {}));\nclass NavBar extends HTMLElement {\n    static get observedAttributes() {\n        return [\"button\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    connectedChangeCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        var _a;\n        const link = document.createElement('link');\n        link.rel = \"stylesheet\";\n        link.href = \"../src/components/navBar/nav-bar.css\";\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(link);\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML += `\n        <nav id=\"navBack\">\n            <img class=\"logo\" src=\"../../../img/tumblr-1.png\">\n            <input type=\"search\" placeholder=\"search someone\">\n            <btn-list></btn-list>\n        </nav>\n        `;\n    }\n}\ncustomElements.define('nav-bar', NavBar);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n\n//# sourceURL=webpack://t1/./src/components/navBar/nav-bar.ts?");

/***/ }),

/***/ "./src/components/post/post.ts":
/*!*************************************!*\
  !*** ./src/components/post/post.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeImg\": () => (/* binding */ AttributeImg),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postdata */ \"./src/components/post/postdata.ts\");\n\nvar AttributeImg;\n(function (AttributeImg) {\n    AttributeImg[\"image\"] = \"image\";\n})(AttributeImg || (AttributeImg = {}));\nclass NewPost extends HTMLElement {\n    static get observedAttributes() {\n        return [\"image\"];\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    render() {\n        console.log(\"rendered\");\n        let newpost = \"\";\n        _postdata__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((postdata) => {\n            newpost += `\n            <new-prof image =\"${postdata.pic}\" id=\"${postdata.id}\" ></new-prof>\n            <img src=\"${postdata.img}\"></img>    \n            <new-des description =\"${postdata.description}\" hashtags=\"${postdata.hashtags}\"></new-des>\n           \n            `;\n        });\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML += `\n        <link rel=\"stylesheet\" href=\"../src/components/post/post.css\">\n        <section class=\"post\">\n        <input-bar></input-bar>\n        ${newpost}\n        </section>\n        `;\n    }\n}\ncustomElements.define('new-post', NewPost);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewPost);\n\n\n//# sourceURL=webpack://t1/./src/components/post/post.ts?");

/***/ }),

/***/ "./src/components/post/postdata.ts":
/*!*****************************************!*\
  !*** ./src/components/post/postdata.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n    {\n        pic: \"https://api.time.com/wp-content/uploads/2014/11/140372563.jpg?quality=85&w=3780\",\n        id: \"Lolitofernandez69\",\n        img: \"https://pbs.twimg.com/media/FAcceczXoAQfzlx.jpg:large\",\n        description: \"Manga Cap\",\n        hashtags: \"#pics #anime\"\n    },\n    {\n        pic: \"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg\",\n        id: \"elbakubro\",\n        img: \"https://i.pinimg.com/originals/9b/61/9b/9b619b9174c06e1fc07b787b91e954af.jpg\",\n        description: \"bakugou <333\",\n        hashtags: \"#bakugou #mha\"\n    },\n    {\n        pic: \"https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg\",\n        id: \"AndrescarnedeRes\",\n        img: \"https://preview.redd.it/makima-chainsaw-man-v0-f2xaoi58x4t91.jpg?width=640&crop=smart&auto=webp&s=37553425d656de61a5c8d91bc9135a253f980041\",\n        description: \"Fanart\",\n        hashtags: \"#makima #chainsawman #art\"\n    },\n    {\n        pic: \"https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg\",\n        id: \"KiraisQueen\",\n        img: \"https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1596833467/content-items/005/440/308/00F4D0F7-71EC-401E-9E1D-0A87DDEEBF67-original.jpeg?1596833467\",\n        description: \"Spiderman\",\n        hashtags: \"#marvel #art\"\n    }\n]);\n\n\n//# sourceURL=webpack://t1/./src/components/post/postdata.ts?");

/***/ }),

/***/ "./src/components/profile-post/profilePost.ts":
/*!****************************************************!*\
  !*** ./src/components/profile-post/profilePost.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributePp\": () => (/* binding */ AttributePp),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar AttributePp;\n(function (AttributePp) {\n    AttributePp[\"image\"] = \"image\";\n    AttributePp[\"uid\"] = \"uid\";\n})(AttributePp || (AttributePp = {}));\nclass profilePost extends HTMLElement {\n    static get observedAttributes() {\n        return [\"image\", \"id\"];\n    }\n    constructor() {\n        super();\n        this.image = \"\";\n        this.uid = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        if (propName === propName) {\n            this[propName] = newValue;\n        }\n    }\n    render() {\n        console.log(\"re\");\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        <link rel=\"stylesheet\" href=\"../src/components/profile-post/profilePost.css\">\n        <section class=\"profile\">\n        <img src=\"${this.image}\"></img>\n        <p>${this.id}</p>\n        </section>\n        `;\n    }\n}\ncustomElements.define('new-prof', profilePost);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profilePost);\n\n\n//# sourceURL=webpack://t1/./src/components/profile-post/profilePost.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.login = [];\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\n        <nav-bar></nav-bar>\n        <new-post> </new-post>  \n        `;\n        /*         const navBar = this.ownerDocument.createElement('nav-bar')\n                this.shadowRoot?.appendChild(navBar)\n                const newPost = this.ownerDocument.createElement('new-post')\n                this.shadowRoot?.appendChild(newPost) */\n        // if(this.shadowRoot){\n        //     this.shadowRoot.innerHTML=``\n        //     const Login = this.ownerDocument.createElement(\"log-in\")as Login;\n        //     this.shadowRoot?.appendChild(Login);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://t1/./src/index.ts?");

/***/ }),

/***/ "./src/screens/login/login.ts":
/*!************************************!*\
  !*** ./src/screens/login/login.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"username\"] = \"username\";\n    Attributes[\"password\"] = \"password\";\n})(Attributes || (Attributes = {}));\nclass Login extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            username: null,\n            password: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            this.shadowRoot.innerHTML += `\n        <link rel=\"stylesheet\" href=\"../src/screens/login/login.css\">\n        <section id=\"background\">\n        <section id=\"bigsec\">\n        <img src=\"https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96\"></img>\n        <section id=\"datainput\">\n        <input placeholder=\"Username\"></input>\n        <input type=\"password\" placeholder=\"Password\"></input>\n        <button id=\"start\">Log In</button>\n        <button id=\"other\">Sign Up</button>\n        </section>\n        </section>\n        </section>\n        \n        `;\n            //.addEventlistener(() => {\n            //     dispatch(changeScreen(\"login\"))\n            //s })\n        }\n    }\n}\ncustomElements.define(\"log-in\", Login);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n\n//# sourceURL=webpack://t1/./src/screens/login/login.ts?");

/***/ }),

/***/ "./src/screens/signup/signup.ts":
/*!**************************************!*\
  !*** ./src/screens/signup/signup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributes\": () => (/* binding */ Attributes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Attributes;\n(function (Attributes) {\n    Attributes[\"username\"] = \"username\";\n    Attributes[\"DOB\"] = \"DOB\";\n    Attributes[\"password\"] = \"password\";\n    Attributes[\"email\"] = \"email\";\n})(Attributes || (Attributes = {}));\nclass Signup extends HTMLElement {\n    static get observedAttributes() {\n        const attributes = {\n            username: null,\n            DOB: null,\n            password: null,\n            email: null,\n        };\n        return Object.keys(attributes);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            this.shadowRoot.innerHTML += `\n        <section id=\"background\">\n        <section id=\"bigsec\">\n        <link rel=\"stylesheet\" href=\"../src/screens/signup/signup.css\">\n        <img src=\"https://assets.tumblr.com/images/logo_page/1x/t-black.png?_v=6cd7fb4b68e5e395b4ae20f748214a96\"></img>\n        <section id=\"datainput\">\n        <input placeholder=\"Username\"></input>\n        <input type=\"date\" placeholder=\"Date of Birth\"></input>\n        <input type=\"password\" placeholder=\"Set Password\"></input>\n        <input placeholder=\"your Email / Phone Number\"></input>\n        <button id=\"start\">Log In</button>\n        </section>\n        </section>\n        </section>\n        \n        `;\n        }\n    }\n}\ncustomElements.define(\"sign-up\", Signup);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n\n\n//# sourceURL=webpack://t1/./src/screens/signup/signup.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;