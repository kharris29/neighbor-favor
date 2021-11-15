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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Signup() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), username = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), firstname = ref2[0], setFirstName = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), lastname = ref3[0], setLastName = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), building = ref4[0], setBuilding = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), phone_number = ref5[0], setPhoneNumber = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), answerFromServer = ref6[0], setAnswerFromServer = ref6[1];\n    var handleRegister = _asyncToGenerator(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e1) {\n        return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e1.preventDefault();\n                    _ctx.next = 3;\n                    return fetch(\"http://localhost:3001/register\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            username: username,\n                            password: password,\n                            firstname: firstname,\n                            lastname: lastname,\n                            building: building,\n                            phone_number: phone_number\n                        })\n                    }).then(function(response) {\n                        return response.json();\n                    }).then(function(data) {\n                        setAnswerFromServer(data);\n                    }).catch(function(e) {\n                        return console.log(e);\n                    });\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_container),\n        __source: {\n            fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n            onSubmit: handleRegister,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_3___default().login_register_form),\n            __source: {\n                fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Register Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: function(e) {\n                        return setUsername(e.target.value);\n                    },\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    },\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"First Name...\",\n                    onChange: function(e) {\n                        return setFirstName(e.target.value);\n                    },\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Last Name...\",\n                    onChange: function(e) {\n                        return setLastName(e.target.value);\n                    },\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Building...\",\n                    onChange: function(e) {\n                        return setBuilding(e.target.value);\n                    },\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Phone Number...\",\n                    onChange: function(e) {\n                        return setPhoneNumber(e.target.value);\n                    },\n                    required: true,\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"LOGIN\",\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                answerFromServer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/signup.js\",\n                        lineNumber: 79,\n                        columnNumber: 30\n                    },\n                    __self: this,\n                    children: answerFromServer\n                })\n            ]\n        })\n    }));\n}\n_s(Signup, \"wNx89HhJyUTeNnv/l1qFDbuAxBQ=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRWpERyxNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENHLFFBQVEsR0FBaUJILEdBQVksS0FBM0JJLFdBQVcsR0FBSUosR0FBWTtJQUM1QyxHQUFLLENBQTJCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFwQ0ssUUFBUSxHQUFpQkwsSUFBWSxLQUEzQk0sV0FBVyxHQUFJTixJQUFZO0lBQzVDLEdBQUssQ0FBNkJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXRDTyxTQUFTLEdBQWtCUCxJQUFZLEtBQTVCUSxZQUFZLEdBQUlSLElBQVk7SUFDOUMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENTLFFBQVEsR0FBaUJULElBQVksS0FBM0JVLFdBQVcsR0FBSVYsSUFBWTtJQUM1QyxHQUFLLENBQTJCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFwQ1csUUFBUSxHQUFpQlgsSUFBWSxLQUEzQlksV0FBVyxHQUFJWixJQUFZO0lBQzVDLEdBQUssQ0FBa0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTNDYSxZQUFZLEdBQW9CYixJQUFZLEtBQTlCYyxjQUFjLEdBQUlkLElBQVk7SUFDbkQsR0FBSyxDQUEyQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcERlLGdCQUFnQixHQUF5QmYsSUFBWSxLQUFuQ2dCLG1CQUFtQixHQUFJaEIsSUFBWTtJQUU1RCxHQUFLLENBQUNpQixjQUFjLHFGQUFHLFFBQVEsU0FBREMsRUFBQyxFQUFLLENBQUM7Ozs7b0JBQ25DQSxFQUFDLENBQUNDLGNBQWM7OzJCQUVWQyxLQUFLLENBQUMsQ0FBZ0MsaUNBQUUsQ0FBQzt3QkFDN0NDLE1BQU0sRUFBRSxDQUFNO3dCQUNkQyxPQUFPLEVBQUUsQ0FBQzs0QkFDUixDQUFjLGVBQUUsQ0FBa0I7d0JBQ3BDLENBQUM7d0JBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQzs0QkFDcEJ0QixRQUFRLEVBQUVBLFFBQVE7NEJBQ2xCRSxRQUFRLEVBQUVBLFFBQVE7NEJBQ2xCRSxTQUFTLEVBQUVBLFNBQVM7NEJBQ3BCRSxRQUFRLEVBQUVBLFFBQVE7NEJBQ2xCRSxRQUFRLEVBQUVBLFFBQVE7NEJBQ2xCRSxZQUFZLEVBQUVBLFlBQVk7d0JBQzVCLENBQUM7b0JBQ0gsQ0FBQyxFQUNFYSxJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRO3dCQUFLQSxNQUFNLENBQU5BLFFBQVEsQ0FBQ0MsSUFBSTt1QkFDaENGLElBQUksQ0FBQyxRQUFRLENBQVBHLElBQUksRUFBSyxDQUFDO3dCQUNmYixtQkFBbUIsQ0FBQ2EsSUFBSTtvQkFDMUIsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFQWixDQUFDO3dCQUFLYSxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxDQUFDOzs7Ozs7O0lBQy9CLENBQUM7SUFFRCxNQUFNLHNFQUNIZSxDQUFHO1FBQUNDLFNBQVMsRUFBRWpDLHFHQUErQjs7Ozs7Ozt3RkFDNUNtQyxDQUFJO1lBQUNDLFFBQVEsRUFBRXBCLGNBQWM7WUFBRWlCLFNBQVMsRUFBRWpDLGdHQUEwQjs7Ozs7Ozs7cUZBQ2xFc0MsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFhOztxRkFDaEJDLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsRUFBRSxRQUFRLENBQVB6QixDQUFDO3dCQUFLZCxNQUFNLENBQU5BLFdBQVcsQ0FBQ2MsQ0FBQyxDQUFDMEIsTUFBTSxDQUFDQyxLQUFLOztvQkFDM0NDLFFBQVE7Ozs7Ozs7O3FGQUVUTixDQUFLO29CQUNKQyxJQUFJLEVBQUMsQ0FBVTtvQkFDZkMsV0FBVyxFQUFDLENBQWE7b0JBQ3pCQyxRQUFRLEVBQUUsUUFBUSxDQUFQekIsQ0FBQzt3QkFBS1osTUFBTSxDQUFOQSxXQUFXLENBQUNZLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQ0MsS0FBSzs7b0JBQzNDQyxRQUFROzs7Ozs7OztxRkFFVE4sQ0FBSztvQkFDSkMsSUFBSSxFQUFDLENBQU07b0JBQ1hDLFdBQVcsRUFBQyxDQUFlO29CQUMzQkMsUUFBUSxFQUFFLFFBQVEsQ0FBUHpCLENBQUM7d0JBQUtWLE1BQU0sQ0FBTkEsWUFBWSxDQUFDVSxDQUFDLENBQUMwQixNQUFNLENBQUNDLEtBQUs7O29CQUM1Q0MsUUFBUTs7Ozs7Ozs7cUZBRVROLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYztvQkFDMUJDLFFBQVEsRUFBRSxRQUFRLENBQVB6QixDQUFDO3dCQUFLUixNQUFNLENBQU5BLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDMEIsTUFBTSxDQUFDQyxLQUFLOztvQkFDM0NDLFFBQVE7Ozs7Ozs7O3FGQUVUTixDQUFLO29CQUNKQyxJQUFJLEVBQUMsQ0FBTTtvQkFDWEMsV0FBVyxFQUFDLENBQWE7b0JBQ3pCQyxRQUFRLEVBQUUsUUFBUSxDQUFQekIsQ0FBQzt3QkFBS04sTUFBTSxDQUFOQSxXQUFXLENBQUNNLENBQUMsQ0FBQzBCLE1BQU0sQ0FBQ0MsS0FBSzs7b0JBQzNDQyxRQUFROzs7Ozs7OztxRkFFVE4sQ0FBSztvQkFDSkMsSUFBSSxFQUFDLENBQU07b0JBQ1hDLFdBQVcsRUFBQyxDQUFpQjtvQkFDN0JDLFFBQVEsRUFBRSxRQUFRLENBQVB6QixDQUFDO3dCQUFLSixNQUFNLENBQU5BLGNBQWMsQ0FBQ0ksQ0FBQyxDQUFDMEIsTUFBTSxDQUFDQyxLQUFLOztvQkFDOUNDLFFBQVE7Ozs7Ozs7O3FGQUdUTixDQUFLO29CQUFDQyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ0ksS0FBSyxFQUFDLENBQU87Ozs7Ozs7O2dCQUNqQzlCLGdCQUFnQix5RUFBS2dDLENBQUU7Ozs7Ozs7OEJBQUVoQyxnQkFBZ0I7Ozs7O0FBSWxELENBQUM7R0EvRVFiLE1BQU07S0FBTkEsTUFBTTtBQWlGZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cC5qcz9jYThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xvZ2luQW5kUmVnaXN0ZXIubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBTaWdudXAoKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaXJzdG5hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xhc3RuYW1lLCBzZXRMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2J1aWxkaW5nLCBzZXRCdWlsZGluZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bob25lX251bWJlciwgc2V0UGhvbmVOdW1iZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbnN3ZXJGcm9tU2VydmVyLCBzZXRBbnN3ZXJGcm9tU2VydmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZWdpc3RlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcbiAgICAgICAgbGFzdG5hbWU6IGxhc3RuYW1lLFxuICAgICAgICBidWlsZGluZzogYnVpbGRpbmcsXG4gICAgICAgIHBob25lX251bWJlcjogcGhvbmVfbnVtYmVyLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QW5zd2VyRnJvbVNlcnZlcihkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfY29udGFpbmVyfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfZm9ybX0+XG4gICAgICAgIDxoMT5SZWdpc3RlciBIZXJlPC9oMT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZC4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZS4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZS4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVpbGRpbmcuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QnVpbGRpbmcoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlci4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQaG9uZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTE9HSU5cIiAvPlxuICAgICAgICB7YW5zd2VyRnJvbVNlcnZlciAmJiA8aDI+e2Fuc3dlckZyb21TZXJ2ZXJ9PC9oMj59XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU2lnbnVwIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJmaXJzdG5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0bmFtZSIsInNldExhc3ROYW1lIiwiYnVpbGRpbmciLCJzZXRCdWlsZGluZyIsInBob25lX251bWJlciIsInNldFBob25lTnVtYmVyIiwiYW5zd2VyRnJvbVNlcnZlciIsInNldEFuc3dlckZyb21TZXJ2ZXIiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dpbl9yZWdpc3Rlcl9jb250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJsb2dpbl9yZWdpc3Rlcl9mb3JtIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

/***/ })

});