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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/LoginAndRegister.module.css */ \"./styles/LoginAndRegister.module.css\");\n/* harmony import */ var _styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), username = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var handleLogin = function() {\n        e.preventDefault();\n        fetch('https://httpbin.org/post', {\n            method: 'POST',\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                a: 1,\n                b: 'Textual content'\n            })\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default().login_register_container),\n        __source: {\n            fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n            onSubmit: handleLogin,\n            className: (_styles_LoginAndRegister_module_css__WEBPACK_IMPORTED_MODULE_2___default().login_register_form),\n            __source: {\n                fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: \"Login Here\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Username...\",\n                    onChange: function(e) {\n                        return setUsername(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"password\",\n                    placeholder: \"Password...\",\n                    onChange: function(e) {\n                        return setPassword(e.target.value);\n                    },\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                    type: \"submit\",\n                    value: \"LOGIN\",\n                    __source: {\n                        fileName: \"/Users/anushtadevosyan/Desktop/neighbor-favor-web/neighbor-favor/frontend/pages/login.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(Login, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFDbUI7O1NBRWpERyxLQUFLLEdBQUcsQ0FBQzs7SUFDaEIsR0FBSyxDQUEyQkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENHLFFBQVEsR0FBaUJILEdBQVksS0FBM0JJLFdBQVcsR0FBSUosR0FBWTtJQUM1QyxHQUFLLENBQTJCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFwQ0ssUUFBUSxHQUFpQkwsSUFBWSxLQUEzQk0sV0FBVyxHQUFJTixJQUFZO0lBRTVDLEdBQUssQ0FBQ08sV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJDLENBQUMsQ0FBQ0MsY0FBYztRQUVoQkMsS0FBSyxDQUFDLENBQTBCLDJCQUFFLENBQUM7WUFDbkNDLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLE9BQU8sRUFBRSxDQUFDO2dCQUNSLENBQVEsU0FBRSxDQUFrQjtnQkFDNUIsQ0FBYyxlQUFFLENBQWtCO1lBQ3BDLENBQUM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDQztnQkFBQUEsQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLENBQUMsRUFBRSxDQUFpQjtZQUFBLENBQUM7UUFDbkQsQ0FBQztJQUNELENBQUM7SUFFRCxNQUFNLHNFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRWxCLHFHQUErQjs7Ozs7Ozt3RkFDNUNvQixDQUFJO1lBQUNDLFFBQVEsRUFBRWYsV0FBVztZQUFFWSxTQUFTLEVBQUVsQixnR0FBMEI7Ozs7Ozs7O3FGQUMvRHVCLENBQUU7Ozs7Ozs7OEJBQUMsQ0FBVTs7cUZBQ2JDLENBQUs7b0JBQ0pDLElBQUksRUFBQyxDQUFNO29CQUNYQyxXQUFXLEVBQUMsQ0FBYTtvQkFDekJDLFFBQVEsRUFBRSxRQUFRLENBQVBwQixDQUFDO3dCQUFLSixNQUFNLENBQU5BLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDcUIsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7cUZBRTVDTCxDQUFLO29CQUNKQyxJQUFJLEVBQUMsQ0FBVTtvQkFDZkMsV0FBVyxFQUFDLENBQWE7b0JBQ3pCQyxRQUFRLEVBQUUsUUFBUSxDQUFQcEIsQ0FBQzt3QkFBS0YsTUFBTSxDQUFOQSxXQUFXLENBQUNFLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7O3FGQUU1Q0wsQ0FBSztvQkFBQ0MsSUFBSSxFQUFDLENBQVE7b0JBQUNJLEtBQUssRUFBQyxDQUFPOzs7Ozs7Ozs7OztBQUkxQyxDQUFDO0dBbkNRNUIsS0FBSztLQUFMQSxLQUFLO0FBcUNkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Mb2dpbkFuZFJlZ2lzdGVyLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZmV0Y2goJ2h0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2E6IDEsIGI6ICdUZXh0dWFsIGNvbnRlbnQnfSlcbiAgfSlcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfY29udGFpbmVyfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPXtzdHlsZXMubG9naW5fcmVnaXN0ZXJfZm9ybX0+XG4gICAgICAgIDxoMT5Mb2dpbiBIZXJlPC9oMT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmQuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTE9HSU5cIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhIiwiYiIsImRpdiIsImNsYXNzTmFtZSIsImxvZ2luX3JlZ2lzdGVyX2NvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImxvZ2luX3JlZ2lzdGVyX2Zvcm0iLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});