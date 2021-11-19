/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/Menu */ \"./src/Menu.js\");\nvar _jsxFileName = \"H:\\\\JavaScript Projects\\\\ReactApps\\\\Course\\\\react-and-server\\\\server\\\\index.js\";\n\n\n\n\n\n\nconst PORT = process.env.PORT || 4000;\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a.static(\"./build\"));\napp.get(\"/*\", (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 45\n    }\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"./build/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", (err, data) => {\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/Ingredient.js":
/*!***************************!*\
  !*** ./src/Ingredient.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ingredient; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"H:\\\\JavaScript Projects\\\\ReactApps\\\\Course\\\\react-and-server\\\\src\\\\Ingredient.js\";\n\nfunction Ingredient(_ref) {\n  let {\n    amount,\n    measurement,\n    name\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, amount, \" \", measurement, \" \", name);\n}\n\n//# sourceURL=webpack:///./src/Ingredient.js?");

/***/ }),

/***/ "./src/IngredientsList.js":
/*!********************************!*\
  !*** ./src/IngredientsList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IngredientsList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredient */ \"./src/Ingredient.js\");\nvar _jsxFileName = \"H:\\\\JavaScript Projects\\\\ReactApps\\\\Course\\\\react-and-server\\\\src\\\\IngredientsList.js\";\n\n\nfunction IngredientsList(_ref) {\n  let {\n    list\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"ingredients\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, list.map((ingredient, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ingredient__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({\n    key: i\n  }, ingredient, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }))));\n}\n\n//# sourceURL=webpack:///./src/IngredientsList.js?");

/***/ }),

/***/ "./src/Instructions.js":
/*!*****************************!*\
  !*** ./src/Instructions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Instructions; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"H:\\\\JavaScript Projects\\\\ReactApps\\\\Course\\\\react-and-server\\\\src\\\\Instructions.js\";\n\nfunction Instructions(_ref) {\n  let {\n    title,\n    steps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"instructions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, title), steps.map((s, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    key: i,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, s)));\n}\n\n//# sourceURL=webpack:///./src/Instructions.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipe */ \"./src/Recipe.js\");\nvar _jsxFileName = \"H:\\\\JavaScript Projects\\\\ReactApps\\\\Course\\\\react-and-server\\\\src\\\\Menu.js\";\n\n\nfunction Menu(_ref) {\n  let {\n    recipes,\n    title\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"recipes\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, recipes.map((recipe, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Recipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({\n    key: i\n  }, recipe, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  })))));\n}\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/Recipe.js":
/*!***********************!*\
  !*** ./src/Recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recipe; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _IngredientsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IngredientsList */ \"./src/IngredientsList.js\");\n/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instructions */ \"./src/Instructions.js\");\nvar _jsxFileName = \"H:\\\\JavaScript Projects\\\\ReactApps\\\\Course\\\\react-and-server\\\\src\\\\Recipe.js\";\n\n\n\nfunction Recipe(_ref) {\n  let {\n    name,\n    ingredients,\n    steps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, \"-\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IngredientsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    list: ingredients,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Instructions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"cooking instructions\",\n    steps: steps,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./src/Recipe.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });