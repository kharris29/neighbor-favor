/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./styles/LoginAndRegister.module.css":
/*!********************************************!*\
  !*** ./styles/LoginAndRegister.module.css ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"login_register_container\": \"LoginAndRegister_login_register_container__QF2OY\",\n\t\"login_register_form\": \"LoginAndRegister_login_register_form__YGbAB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTG9naW5BbmRSZWdpc3Rlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N0eWxlcy9Mb2dpbkFuZFJlZ2lzdGVyLm1vZHVsZS5jc3M/ZGVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXJcIjogXCJMb2dpbkFuZFJlZ2lzdGVyX2xvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lcl9fUUYyT1lcIixcblx0XCJsb2dpbl9yZWdpc3Rlcl9mb3JtXCI6IFwiTG9naW5BbmRSZWdpc3Rlcl9sb2dpbl9yZWdpc3Rlcl9mb3JtX19ZR2JBQlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/LoginAndRegister.module.css\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Login() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleLogin = async (e1)=>{\n        e1.preventDefault();\n        await fetch(\"http://localhost:3001/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username: username,\n                password: password\n            })\n        }).then((response)=>response.json()\n        ).then((data)=>{\n            if (data.length != 0) {\n                sessionStorage.setItem(\"username\", data[0].username);\n                sessionStorage.setItem(\"firstname\", data[0].firstname);\n                sessionStorage.setItem(\"lastname\", data[0].lastname);\n                sessionStorage.setItem(\"building\", data[0].building);\n                sessionStorage.setItem(\"phone_number\", data[0].phone_number);\n                setTimeout(()=>{\n                    router.push(\"/\");\n                }, 800);\n            } else {\n                console.log(\"No Such User\");\n            }\n        }).catch((e)=>console.log(e)\n        );\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\login.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n            id: \"my-form\",\n            onSubmit: handleLogin,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_form),\n            __source: {\n                fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\login.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\login.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Login Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: (e)=>setUsername(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\login.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: (e)=>setPassword(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\login.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"LOGIN\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\login.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTG9naW5BbmRSZWdpc3Rlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW5cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgZGF0YVswXS51c2VybmFtZSk7XHJcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RuYW1lXCIsIGRhdGFbMF0uZmlyc3RuYW1lKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsYXN0bmFtZVwiLCBkYXRhWzBdLmxhc3RuYW1lKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJidWlsZGluZ1wiLCBkYXRhWzBdLmJ1aWxkaW5nKTtcclxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJwaG9uZV9udW1iZXJcIiwgZGF0YVswXS5waG9uZV9udW1iZXIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gU3VjaCBVc2VyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfY29udGFpbmVyfT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBpZD1cIm15LWZvcm1cIlxyXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVMb2dpbn1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9yZWdpc3Rlcl9mb3JtfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgxPkxvZ2luIEhlcmU8L2gxPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZS4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMT0dJTlwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVJvdXRlciIsIkxvZ2luIiwicm91dGVyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsZW5ndGgiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImJ1aWxkaW5nIiwicGhvbmVfbnVtYmVyIiwic2V0VGltZW91dCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXIiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsImxvZ2luX3JlZ2lzdGVyX2Zvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();