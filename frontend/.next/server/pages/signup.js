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

eval("// Exports\nmodule.exports = {\n\t\"login_register_container\": \"LoginAndRegister_login_register_container__QF2OY\",\n\t\"login_register_form\": \"LoginAndRegister_login_register_form__YGbAB\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTG9naW5BbmRSZWdpc3Rlci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3N0eWxlcy9Mb2dpbkFuZFJlZ2lzdGVyLm1vZHVsZS5jc3M/ZGVlMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXJcIjogXCJMb2dpbkFuZFJlZ2lzdGVyX2xvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lcl9fUUYyT1lcIixcblx0XCJsb2dpbl9yZWdpc3Rlcl9mb3JtXCI6IFwiTG9naW5BbmRSZWdpc3Rlcl9sb2dpbl9yZWdpc3Rlcl9mb3JtX19ZR2JBQlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/LoginAndRegister.module.css\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Signup() {\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: firstname , 1: setFirstName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: lastname , 1: setLastName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: building , 1: setBuilding  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: phone_number , 1: setPhoneNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: answerFromServer , 1: setAnswerFromServer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRegister = async (e1)=>{\n        e1.preventDefault();\n        await fetch(\"http://localhost:3001/register\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                username: username,\n                password: password,\n                firstname: firstname,\n                lastname: lastname,\n                building: building,\n                phone_number: phone_number\n            })\n        }).then((response)=>response.json()\n        ).then((data)=>{\n            console.log(data);\n            setAnswerFromServer(data);\n            document.querySelector(\"my-form\").request();\n        }).catch((e)=>console.log(e)\n        );\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default().login_register_container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n            id: \"my-form\",\n            onSubmit: handleRegister,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default().login_register_form),\n            __source: {\n                fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Register Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: (e)=>setUsername(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: (e)=>setPassword(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"First Name...\",\n                    onChange: (e)=>setFirstName(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Last Name...\",\n                    onChange: (e)=>setLastName(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Building...\",\n                    onChange: (e)=>setBuilding(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Phone Number...\",\n                    onChange: (e)=>setPhoneNumber(e.target.value)\n                    ,\n                    required: true,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"REGISTER\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                answerFromServer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\evamf\\\\neighbor-favor\\\\frontend\\\\pages\\\\signup.js\",\n                        lineNumber: 85,\n                        columnNumber: 30\n                    },\n                    __self: this,\n                    children: answerFromServer\n                })\n            ]\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDbUI7U0FFakRHLE1BQU0sR0FBRyxDQUFDO0lBQ2pCLEtBQUssTUFBRUMsUUFBUSxNQUFFQyxXQUFXLE1BQUlKLCtDQUFRLENBQUMsQ0FBRTtJQUMzQyxLQUFLLE1BQUVLLFFBQVEsTUFBRUMsV0FBVyxNQUFJTiwrQ0FBUSxDQUFDLENBQUU7SUFDM0MsS0FBSyxNQUFFTyxTQUFTLE1BQUVDLFlBQVksTUFBSVIsK0NBQVEsQ0FBQyxDQUFFO0lBQzdDLEtBQUssTUFBRVMsUUFBUSxNQUFFQyxXQUFXLE1BQUlWLCtDQUFRLENBQUMsQ0FBRTtJQUMzQyxLQUFLLE1BQUVXLFFBQVEsTUFBRUMsV0FBVyxNQUFJWiwrQ0FBUSxDQUFDLENBQUU7SUFDM0MsS0FBSyxNQUFFYSxZQUFZLE1BQUVDLGNBQWMsTUFBSWQsK0NBQVEsQ0FBQyxDQUFFO0lBQ2xELEtBQUssTUFBRWUsZ0JBQWdCLE1BQUVDLG1CQUFtQixNQUFJaEIsK0NBQVEsQ0FBQyxDQUFFO0lBRTNELEtBQUssQ0FBQ2lCLGNBQWMsVUFBVUMsRUFBQyxHQUFLLENBQUM7UUFDbkNBLEVBQUMsQ0FBQ0MsY0FBYztRQUVoQixLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFnQyxpQ0FBRSxDQUFDO1lBQzdDQyxNQUFNLEVBQUUsQ0FBTTtZQUNkQyxPQUFPLEVBQUUsQ0FBQztnQkFDUixDQUFjLGVBQUUsQ0FBa0I7WUFDcEMsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7Z0JBQ3BCdEIsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkUsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkUsWUFBWSxFQUFFQSxZQUFZO1lBQzVCLENBQUM7UUFDSCxDQUFDLEVBQ0VhLElBQUksRUFBRUMsUUFBUSxHQUFLQSxRQUFRLENBQUNDLElBQUk7VUFDaENGLElBQUksRUFBRUcsSUFBSSxHQUFLLENBQUM7WUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7WUFDaEJiLG1CQUFtQixDQUFDYSxJQUFJO1lBQ3hCRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFTLFVBQUVDLE9BQU87UUFDM0MsQ0FBQyxFQUNBQyxLQUFLLEVBQUVqQixDQUFDLEdBQUtZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixDQUFDOztJQUMvQixDQUFDO0lBRUQsTUFBTSxzRUFDSGtCLENBQUc7UUFBQ0MsU0FBUyxFQUFFcEMscUdBQStCOzs7Ozs7O3dGQUM1Q3NDLENBQUk7WUFDSEMsRUFBRSxFQUFDLENBQVM7WUFDWkMsUUFBUSxFQUFFeEIsY0FBYztZQUN4Qm9CLFNBQVMsRUFBRXBDLGdHQUEwQjs7Ozs7Ozs7cUZBRXBDMEMsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFhOztxRkFDaEJDLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsR0FBRzdCLENBQUMsR0FBS2QsV0FBVyxDQUFDYyxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUMzQ0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFVO29CQUNmQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsR0FBRzdCLENBQUMsR0FBS1osV0FBVyxDQUFDWSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUMzQ0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBZTtvQkFDM0JDLFFBQVEsR0FBRzdCLENBQUMsR0FBS1YsWUFBWSxDQUFDVSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUM1Q0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYztvQkFDMUJDLFFBQVEsR0FBRzdCLENBQUMsR0FBS1IsV0FBVyxDQUFDUSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUMzQ0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsR0FBRzdCLENBQUMsR0FBS04sV0FBVyxDQUFDTSxDQUFDLENBQUM4QixNQUFNLENBQUNDLEtBQUs7O29CQUMzQ0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBaUI7b0JBQzdCQyxRQUFRLEdBQUc3QixDQUFDLEdBQUtKLGNBQWMsQ0FBQ0ksQ0FBQyxDQUFDOEIsTUFBTSxDQUFDQyxLQUFLOztvQkFDOUNDLFFBQVE7Ozs7Ozs7O3FGQUdUTixDQUFLO29CQUFDQyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ0ksS0FBSyxFQUFDLENBQVU7Ozs7Ozs7O2dCQUNwQ2xDLGdCQUFnQix5RUFBS29DLENBQUU7Ozs7Ozs7OEJBQUVwQyxnQkFBZ0I7Ozs7O0FBSWxELENBQUM7QUFFRCxpRUFBZWIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9zaWdudXAuanM/Y2E4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xvZ2luQW5kUmVnaXN0ZXIubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3RuYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnVpbGRpbmcsIHNldEJ1aWxkaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZV9udW1iZXIsIHNldFBob25lTnVtYmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthbnN3ZXJGcm9tU2VydmVyLCBzZXRBbnN3ZXJGcm9tU2VydmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVnaXN0ZXJcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lLFxyXG4gICAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZSxcclxuICAgICAgICBidWlsZGluZzogYnVpbGRpbmcsXHJcbiAgICAgICAgcGhvbmVfbnVtYmVyOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0QW5zd2VyRnJvbVNlcnZlcihkYXRhKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibXktZm9ybVwiKS5yZXF1ZXN0KCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coZSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lcn0+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgaWQ9XCJteS1mb3JtXCJcclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfZm9ybX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMT5SZWdpc3RlciBIZXJlPC9oMT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUuLi5cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZS4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZS4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVpbGRpbmcuLi5cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCdWlsZGluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlci4uLlwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJFR0lTVEVSXCIgLz5cclxuICAgICAgICB7YW5zd2VyRnJvbVNlcnZlciAmJiA8aDI+e2Fuc3dlckZyb21TZXJ2ZXJ9PC9oMj59XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWdudXAiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0bmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3RuYW1lIiwic2V0TGFzdE5hbWUiLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwicGhvbmVfbnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJhbnN3ZXJGcm9tU2VydmVyIiwic2V0QW5zd2VyRnJvbVNlcnZlciIsImhhbmRsZVJlZ2lzdGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZXF1ZXN0IiwiY2F0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXIiLCJmb3JtIiwiaWQiLCJvblN1Ym1pdCIsImxvZ2luX3JlZ2lzdGVyX2Zvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcXVpcmVkIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

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