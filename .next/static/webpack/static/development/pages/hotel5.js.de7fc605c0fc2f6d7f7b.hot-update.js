webpackHotUpdate("static/development/pages/hotel5.js",{

/***/ "./components/gallery/Container.js":
/*!*****************************************!*\
  !*** ./components/gallery/Container.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row */ "./components/gallery/Row.js");
var _jsxFileName = "/Users/stamp/node/hotel/components/gallery/Container.js";



var Container = function Container(_ref) {
  var name = _ref.name,
      images = _ref.images,
      desc = _ref.desc;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "bg-light",
    id: "portfolio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    style: {
      marginBottom: '50px;'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "section-heading text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, name.split('\n').map(function (text, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, text);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-subheading text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, desc))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, images.map(function (i, k) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "name",
      key: k,
      desc: "description",
      modal: "#gallery-".concat(k),
      img: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=hotel5.js.de7fc605c0fc2f6d7f7b.hot-update.js.map