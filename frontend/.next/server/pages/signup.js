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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./styles/LoginAndRegister.module.css":
/*!********************************************!*\
  !*** ./styles/LoginAndRegister.module.css ***!
  \********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"login_register_container\": \"LoginAndRegister_login_register_container__10_1O\",\n\t\"login_register_form\": \"LoginAndRegister_login_register_form__2szIv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTG9naW5BbmRSZWdpc3Rlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N0eWxlcy9Mb2dpbkFuZFJlZ2lzdGVyLm1vZHVsZS5jc3M/ZGVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXJcIjogXCJMb2dpbkFuZFJlZ2lzdGVyX2xvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lcl9fMTBfMU9cIixcblx0XCJsb2dpbl9yZWdpc3Rlcl9mb3JtXCI6IFwiTG9naW5BbmRSZWdpc3Rlcl9sb2dpbl9yZWdpc3Rlcl9mb3JtX18yc3pJdlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/LoginAndRegister.module.css\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Signup() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: firstname , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: lastname , 1: setLastName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: building , 1: setBuilding  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: phone_number , 1: setPhoneNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: answerFromServer , 1: setAnswerFromServer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRegister = async (e1)=>{\n        e1.preventDefault();\n        await fetch(\"http://localhost:3001/register\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username: username,\n                password: password,\n                firstname: firstname,\n                lastname: lastname,\n                building: building,\n                phone_number: phone_number\n            })\n        }).then((response)=>response.json()\n        ).then((data)=>{\n            setAnswerFromServer(data);\n            document.querySelector(\"my-form\").request();\n        }).catch((e)=>console.log(e)\n        );\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default().login_register_container),\n        __source: {\n            fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n            lineNumber: 39,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n            id: \"my-form\",\n            onSubmit: handleRegister,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default().login_register_form),\n            __source: {\n                fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Register Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: (e)=>setUsername(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: (e)=>setPassword(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"First Name...\",\n                    onChange: (e)=>setFirstName(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Last Name...\",\n                    onChange: (e)=>setLastName(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Building...\",\n                    onChange: (e)=>setBuilding(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Phone Number...\",\n                    onChange: (e)=>setPhoneNumber(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"REGISTER\",\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                answerFromServer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 84,\n                        columnNumber: 30\n                    },\n                    __self: this,\n                    children: answerFromServer\n                })\n            ]\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRzdCLENBQUMsR0FBS1IsV0FBVyxDQUFDUSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUMzQ0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsR0FBRzdCLENBQUMsR0FBS04sV0FBVyxDQUFDTSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUMzQ0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBaUI7b0JBQzdCQyxRQUFRLEdBQUc3QixDQUFDLEdBQUtKLGNBQWMsQ0FBQ0ksQ0FBQyxDQUFDOEIsTUFBTSxDQUFDQyxLQUFLOztvQkFDOUNDLFFBQVE7Ozs7Ozs7O3FGQUdUTixDQUFLO29CQUFDQyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ0ksS0FBSyxFQUFDLENBQVU7Ozs7Ozs7O2dCQUNwQ2xDLGdCQUFnQix5RUFBS29DLENBQUU7Ozs7Ozs7OEJBQUVwQyxnQkFBZ0I7Ozs7O0FBSWxELENBQUM7QUFFRCxpRUFBZWIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9zaWdudXAuanM/Y2E4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Mb2dpbkFuZFJlZ2lzdGVyLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gU2lnbnVwKCkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtidWlsZGluZywgc2V0QnVpbGRpbmddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwaG9uZV9udW1iZXIsIHNldFBob25lTnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYW5zd2VyRnJvbVNlcnZlciwgc2V0QW5zd2VyRnJvbVNlcnZlcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVnaXN0ZXJcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXG4gICAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZSxcbiAgICAgICAgYnVpbGRpbmc6IGJ1aWxkaW5nLFxuICAgICAgICBwaG9uZV9udW1iZXI6IHBob25lX251bWJlcixcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFuc3dlckZyb21TZXJ2ZXIoZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJteS1mb3JtXCIpLnJlcXVlc3QoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfY29udGFpbmVyfT5cbiAgICAgIDxmb3JtXG4gICAgICAgIGlkPVwibXktZm9ybVwiXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfZm9ybX1cbiAgICAgID5cbiAgICAgICAgPGgxPlJlZ2lzdGVyIEhlcmU8L2gxPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZS4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdWlsZGluZy4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCdWlsZGluZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSRUdJU1RFUlwiIC8+XG4gICAgICAgIHthbnN3ZXJGcm9tU2VydmVyICYmIDxoMj57YW5zd2VyRnJvbVNlcnZlcn08L2gyPn1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWdudXAiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0bmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3RuYW1lIiwic2V0TGFzdE5hbWUiLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwicGhvbmVfbnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJhbnN3ZXJGcm9tU2VydmVyIiwic2V0QW5zd2VyRnJvbVNlcnZlciIsImhhbmRsZVJlZ2lzdGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlcXVlc3QiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXIiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsImxvZ2luX3JlZ2lzdGVyX2Zvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcXVpcmVkIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/signup.js"));
module.exports = __webpack_exports__;

})();