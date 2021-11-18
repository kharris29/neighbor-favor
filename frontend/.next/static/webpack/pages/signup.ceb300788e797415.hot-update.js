"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Signup() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), firstname = ref2[0], setFirstName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), lastname = ref3[0], setLastName = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), building = ref4[0], setBuilding = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), phone_number = ref5[0], setPhoneNumber = ref5[1];\n    var handleLogin = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e1) {\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e1.preventDefault();\n                    _ctx.next = 3;\n                    return fetch(\"http://localhost:3001/login\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            username: username,\n                            password: password\n                        })\n                    }).then(function(response) {\n                        return response.json();\n                    }).then(function(data) {\n                        if (data.length != 0) {\n                            sessionStorage.setItem(\"username\", data[0].username);\n                            sessionStorage.setItem(\"firstname\", data[0].firstname);\n                            sessionStorage.setItem(\"lastname\", data[0].lastname);\n                            sessionStorage.setItem(\"building\", data[0].building);\n                            sessionStorage.setItem(\"phone_number\", data[0].phone_number);\n                            setTimeout(function() {\n                                router.push(\"/\");\n                            }, 800);\n                        } else {\n                            console.log(\"No Such User\");\n                        }\n                    }).catch(function(e) {\n                        return console.log(e);\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_container),\n        __source: {\n            fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n            onSubmit: handleRegister,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_form),\n            __source: {\n                fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Register Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: function(e) {\n                        return setUsername(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"First Name...\",\n                    onChange: function(e) {\n                        return setFirstName(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Last Name...\",\n                    onChange: function(e) {\n                        return setLastName(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Building...\",\n                    onChange: function(e) {\n                        return setBuilding(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Phone Number...\",\n                    onChange: function(e) {\n                        return setPhoneNumber(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"LOGIN\",\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(Signup, \"vi8I2SscJ0d+4IEWf8gGPXfM0dA=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztxRkFFNUNMLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBaUI7b0JBQzdCQyxRQUFRLEVBQUUsUUFBUSxDQUFQaEMsQ0FBQzt3QkFBS0YsTUFBTSxDQUFOQSxjQUFjLENBQUNFLENBQUMsQ0FBQ2lDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7O3FGQUcvQ0wsQ0FBSztvQkFBQ0MsSUFBSSxFQUFDLENBQVE7b0JBQUNJLEtBQUssRUFBQyxDQUFPOzs7Ozs7Ozs7OztBQUkxQyxDQUFDO0dBL0VRaEQsTUFBTTtLQUFOQSxNQUFNO0FBaUZmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzP2NhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTG9naW5BbmRSZWdpc3Rlci5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIFNpZ251cCgpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpcnN0bmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdG5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnVpbGRpbmcsIHNldEJ1aWxkaW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGhvbmVfbnVtYmVyLCBzZXRQaG9uZU51bWJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgZGF0YVswXS51c2VybmFtZSk7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0bmFtZVwiLCBkYXRhWzBdLmZpcnN0bmFtZSk7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxhc3RuYW1lXCIsIGRhdGFbMF0ubGFzdG5hbWUpO1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJidWlsZGluZ1wiLCBkYXRhWzBdLmJ1aWxkaW5nKTtcbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwicGhvbmVfbnVtYmVyXCIsIGRhdGFbMF0ucGhvbmVfbnVtYmVyKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICB9LCA4MDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gU3VjaCBVc2VyXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lcn0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX3JlZ2lzdGVyX2Zvcm19PlxuICAgICAgICA8aDE+UmVnaXN0ZXIgSGVyZTwvaDE+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZS4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWUuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdWlsZGluZy4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCdWlsZGluZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlci4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxPR0lOXCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTaWdudXAiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0bmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3RuYW1lIiwic2V0TGFzdE5hbWUiLCJidWlsZGluZyIsInNldEJ1aWxkaW5nIiwicGhvbmVfbnVtYmVyIiwic2V0UGhvbmVOdW1iZXIiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsZW5ndGgiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzZXRUaW1lb3V0Iiwicm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsImxvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImhhbmRsZVJlZ2lzdGVyIiwibG9naW5fcmVnaXN0ZXJfZm9ybSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ })

});