"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleLogin = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e1) {\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e1.preventDefault();\n                    _ctx.next = 3;\n                    return fetch(\"http://localhost:3001/login\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            username: username,\n                            password: password\n                        })\n                    }).then(function(response) {\n                        return response.json();\n                    }).then(function(data) {\n                        sessionStorage.setItem('username');\n                    }).catch(function(e) {\n                        return console.log(e);\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_container),\n        __source: {\n            fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n            onSubmit: handleLogin,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_form),\n            __source: {\n                fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Login Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: function(e) {\n                        return setUsername(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"LOGIN\",\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(Login, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFakRHLEtBQUssR0FBRyxDQUFDOztJQUNoQixHQUFLLENBQTJCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFwQ0csUUFBUSxHQUFpQkgsR0FBWSxLQUEzQkksV0FBVyxHQUFJSixHQUFZO0lBQzVDLEdBQUssQ0FBMkJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDSyxRQUFRLEdBQWlCTCxJQUFZLEtBQTNCTSxXQUFXLEdBQUlOLElBQVk7SUFFNUMsR0FBSyxDQUFDTyxXQUFXLHFGQUFHLFFBQVEsU0FBREMsRUFBQyxFQUFLLENBQUM7Ozs7b0JBQ2hDQSxFQUFDLENBQUNDLGNBQWM7OzJCQUVWQyxLQUFLLENBQUMsQ0FBNkIsOEJBQUUsQ0FBQzt3QkFDMUNDLE1BQU0sRUFBRSxDQUFNO3dCQUNkQyxPQUFPLEVBQUUsQ0FBQzs0QkFDUixDQUFjLGVBQUUsQ0FBa0I7d0JBQ3BDLENBQUM7d0JBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQzs0QkFDcEJaLFFBQVEsRUFBRUEsUUFBUTs0QkFDbEJFLFFBQVEsRUFBRUEsUUFBUTt3QkFDcEIsQ0FBQztvQkFDSCxDQUFDLEVBQ0VXLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVE7d0JBQUtBLE1BQU0sQ0FBTkEsUUFBUSxDQUFDQyxJQUFJO3VCQUNoQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsSUFBSSxFQUFLLENBQUM7d0JBQ2ZDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLENBQVU7b0JBQ25DLENBQUMsRUFDQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUGQsQ0FBQzt3QkFBS2UsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLENBQUM7Ozs7Ozs7SUFDL0IsQ0FBQztJQUVELE1BQU0sc0VBQ0hpQixDQUFHO1FBQUNDLFNBQVMsRUFBRXpCLHFHQUErQjs7Ozs7Ozt3RkFDNUMyQixDQUFJO1lBQUNDLFFBQVEsRUFBRXRCLFdBQVc7WUFBRW1CLFNBQVMsRUFBRXpCLGdHQUEwQjs7Ozs7Ozs7cUZBQy9EOEIsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFVOztxRkFDYkMsQ0FBSztvQkFDSkMsSUFBSSxFQUFDLENBQU07b0JBQ1hDLFdBQVcsRUFBQyxDQUFhO29CQUN6QkMsUUFBUSxFQUFFLFFBQVEsQ0FBUDNCLENBQUM7d0JBQUtKLE1BQU0sQ0FBTkEsV0FBVyxDQUFDSSxDQUFDLENBQUM0QixNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7OztxRkFFNUNMLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFVO29CQUNmQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsRUFBRSxRQUFRLENBQVAzQixDQUFDO3dCQUFLRixNQUFNLENBQU5BLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDNEIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7cUZBRTVDTCxDQUFLO29CQUFDQyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ0ksS0FBSyxFQUFDLENBQU87Ozs7Ozs7Ozs7O0FBSTFDLENBQUM7R0ExQ1FuQyxLQUFLO0tBQUxBLEtBQUs7QUE0Q2QsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xvZ2luQW5kUmVnaXN0ZXIubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW5cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJylcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfY29udGFpbmVyfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfZm9ybX0+XG4gICAgICAgIDxoMT5Mb2dpbiBIZXJlPC9oMT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTE9HSU5cIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImNhdGNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImxvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImxvZ2luX3JlZ2lzdGVyX2Zvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});