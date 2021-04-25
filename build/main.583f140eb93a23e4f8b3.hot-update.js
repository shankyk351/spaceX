exports.id = "main";
exports.modules = {

/***/ "./src/components/launchesList.js":
/*!****************************************!*\
  !*** ./src/components/launchesList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LaunchesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _launchCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launchCard */ "./src/components/launchCard.js");
var _jsxFileName = "/Users/admin/Desktop/spaceX/sapient-spacex-app/src/components/launchesList.js";


function LaunchesList(props) {
  return props.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-list-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, props.launches.length > 0 ? props.launches.map(function (launch) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_launchCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: launch.flightNumber,
      launch: launch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "no-launches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "dang... no launches for your query..."));
}

/***/ })

};
//# sourceMappingURL=main.583f140eb93a23e4f8b3.hot-update.js.map