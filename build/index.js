module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hideModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_actions__ = __webpack_require__(1);


function showModal() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__const_actions__["a" /* SHOW_MODAL */],
        showed: true
    };
}

function hideModal() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__const_actions__["b" /* HIDE_MODAL */],
        showed: false
    };
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HIDE_MODAL; });
var SHOW_MODAL = '@@react-redux-easy-modal/SHOW_MODAL';
var HIDE_MODAL = '@@react-redux-easy-modal/HIDE_MODAL';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_dispatch__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Base = function (_PureComponent) {
    _inherits(Base, _PureComponent);

    function Base() {
        _classCallCheck(this, Base);

        return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
    }

    _createClass(Base, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__store_dispatch__["a" /* setDispatch */])(this.props.dispatch);
        }
    }]);

    return Base;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var ModalContainerRoot = function (_Base) {
    _inherits(ModalContainerRoot, _Base);

    function ModalContainerRoot() {
        _classCallCheck(this, ModalContainerRoot);

        return _possibleConstructorReturn(this, (ModalContainerRoot.__proto__ || Object.getPrototypeOf(ModalContainerRoot)).apply(this, arguments));
    }

    _createClass(ModalContainerRoot, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                modal = _props.modal,
                children = _props.children;


            if (!modal.showed) {
                return null;
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                children
            );
        }
    }]);

    return ModalContainerRoot;
}(Base);

var ModalRoot = function (_Base2) {
    _inherits(ModalRoot, _Base2);

    function ModalRoot() {
        _classCallCheck(this, ModalRoot);

        return _possibleConstructorReturn(this, (ModalRoot.__proto__ || Object.getPrototypeOf(ModalRoot)).apply(this, arguments));
    }

    _createClass(ModalRoot, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style__["b" /* createStyle */])();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                modal = _props2.modal,
                children = _props2.children;


            if (!modal.showed) {
                return null;
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'modal' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'modal__content' },
                    children
                )
            );
        }
    }]);

    return ModalRoot;
}(Base);

var mapStateToProps = function mapStateToProps(state) {
    return {
        modal: state.modal
    };
};


var Modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ModalRoot);
var ModalContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ModalContainerRoot);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStyleForMobile;
/* harmony export (immutable) */ __webpack_exports__["b"] = createStyle;
/**
 * Based on onsen ui modal but with small changes.
 *
 * @link https://onsen.io/v2/api/css.html
 */
var stylesForMobile = '\n    .alert-dialog {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        background-clip: padding-box;\n        padding: 0;\n        margin: 0;\n        font: inherit;\n        color: inherit;\n        background: transparent;\n        border: none;\n        line-height: normal;\n        cursor: default;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        font-family: -apple-system, \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 17px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        width: 270px;\n        margin: auto auto;\n        background-color: #f4f4f4;\n        -webkit-border-radius: 8px;\n        border-radius: 8px;\n        overflow: visible;\n        max-width: 95%;\n        color: #1f1f21;\n    }\n    .alert-dialog-container {\n        height: inherit;\n        padding-top: 16px;\n        overflow: hidden;\n    }\n    .alert-dialog-title {\n        font-family: -apple-system, \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 17px;\n        font-weight: 500;\n        padding: 0px 8px 0px 8px;\n        text-align: center;\n        color: #1f1f21;\n    }\n    .alert-dialog-content {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        background-clip: padding-box;\n        padding: 4px 12px 8px 12px;\n        font-size: 14px;\n        min-height: 36px;\n        text-align: center;\n        color: #1f1f21;\n    }\n    .alert-dialog-footer {\n        width: 100%;\n    }\n    .alert-dialog-button {\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        background-clip: padding-box;\n        padding: 0;\n        font: inherit;\n        color: inherit;\n        background: transparent;\n        line-height: normal;\n        font-family: -apple-system, \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-weight: 400;\n        font-size: 17px;\n        cursor: default;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        text-decoration: none;\n        letter-spacing: 0;\n        vertical-align: middle;\n        border: none;\n        border-top: 1px solid #ddd;\n        font-size: 16px;\n        padding: 0 8px;\n        margin: 0;\n        display: block;\n        width: 100%;\n        background-color: transparent;\n        text-align: center;\n        height: 44px;\n        line-height: 44px;\n        outline: none;\n        color: rgba(24, 103, 194, 0.81);\n    }\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n        .alert-dialog-button {\n            border-top: none;\n            background-size: 100% 1px;\n            background-repeat: no-repeat;\n            background-position: top;\n            background-image: -webkit-linear-gradient(270deg, #ddd, #ddd 50%, transparent 50%);\n            background-image: -webkit-gradient(linear, left top, left bottom, from(#ddd), color-stop(50%, #ddd), color-stop(50%, transparent));\n            background-image: -webkit-linear-gradient(top, #ddd, #ddd 50%, transparent 50%);\n            background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%);\n        }\n    }\n    .alert-dialog-button:active {\n        background-color: rgba(0, 0, 0, 0.05);\n    }\n    .alert-dialog-button--primal {\n        font-weight: 500;\n    }\n    .alert-dialog-footer--one {\n        white-space: nowrap;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -moz-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    }\n    .alert-dialog-button--one {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n        -moz-flex: 1;\n        -ms-flex: 1;\n        flex: 1;\n        display: block;\n        width: 100%;\n        border-left: 1px solid #ddd;\n    }\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n        .alert-dialog-button--one {\n            border-top: none;\n            border-left: none;\n            background-size: 100% 1px, 1px 100%;\n            background-repeat: no-repeat;\n            background-position: top, left;\n            background-image: -webkit-linear-gradient(90deg, transparent, transparent 50%, #ddd 50%), -webkit-linear-gradient(0deg, transparent, transparent 50%, #ddd 50%);\n            background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(50%, transparent), color-stop(50%, #ddd)), -webkit-gradient(linear, left top, right top, from(transparent), color-stop(50%, transparent), color-stop(50%, #ddd));\n            background-image: -webkit-linear-gradient(bottom, transparent, transparent 50%, #ddd 50%), -webkit-linear-gradient(left, transparent, transparent 50%, #ddd 50%);\n            background-image: linear-gradient(0deg, transparent, transparent 50%, #ddd 50%), linear-gradient(90deg, transparent, transparent 50%, #ddd 50%);\n        }\n    }\n    .alert-dialog-button--one:first-child {\n        border-left: none;\n    }\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n        .alert-dialog-button--one:first-child {\n            border-top: none;\n            background-size: 100% 1px;\n            background-repeat: no-repeat;\n            background-position: top, left;\n            background-image: -webkit-linear-gradient(90deg, transparent, transparent 50%, #ddd 50%);\n            background-image: -webkit-gradient(linear, left bottom, left top, from(transparent), color-stop(50%, transparent), color-stop(50%, #ddd));\n            background-image: -webkit-linear-gradient(bottom, transparent, transparent 50%, #ddd 50%);\n            background-image: linear-gradient(0deg, transparent, transparent 50%, #ddd 50%);\n        }\n    }\n    .alert-dialog-mask {\n        padding: 0;\n        margin: 0;\n        font: inherit;\n        color: inherit;\n        background: transparent;\n        border: none;\n        line-height: normal;\n        cursor: default;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n    \n    .material .alert-dialog {\n        -webkit-border-radius: 2px;\n        border-radius: 2px;\n        background-color: #fff;\n    }\n    .material .alert-dialog-container {\n        padding-top: 22px;\n        -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n    }\n    .material .alert-dialog-title {\n        font-family: \'Roboto\', \'Noto\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-align: left;\n        font-size: 20px;\n        font-weight: 500;\n        padding: 0 24px;\n        color: #212121;\n    }\n    .material .alert-dialog-content {\n        font-family: \'Roboto\', \'Noto\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-align: left;\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 20px;\n        padding: 0 24px;\n        margin: 24px 0 10px 0;\n        min-height: 0;\n        color: #727272;\n    }\n    .material .alert-dialog-footer {\n        display: inline-block;\n        padding: 0px 8px 0px 24px;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    .material .alert-dialog-button {\n        font-family: \'Roboto\', \'Noto\', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        text-transform: uppercase;\n        display: inline-block;\n        width: auto;\n        min-width: 70px;\n        float: right;\n        background: none;\n        border-top: none;\n        font-size: 14px;\n        font-weight: 500;\n        outline: none;\n        color: #009688;\n    }\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n        .material .alert-dialog-button {\n            background: none;\n        }\n    }\n    .material .alert-dialog-button:active {\n        background-color: initial;\n    }\n    .material .alert-dialog-button--one,\n    .material .alert-dialog-button--one:first-child {\n        border: 0;\n    }\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n        .material .alert-dialog-button--one,\n        .material .alert-dialog-button--one:first-child {\n            background: none;\n        }\n    }\n    .material .alert-dialog-button--primal {\n        font-weight: 500;\n    }\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\n        .material .alert-dialog-button--primal {\n            background: none;\n        }\n    }\n    .material .alert-dialog-mask {\n        background-color: rgba(0, 0, 0, 0.3);\n    }\n';

var styles = '\n    .modal {\n      white-space: nowrap;\n      word-spacing: 0;\n      padding: 0;\n      margin: 0;\n      font: inherit;\n      color: inherit;\n      background: transparent;\n      border: none;\n      line-height: normal;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      background-clip: padding-box;\n      font-family: -apple-system, \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      font-weight: 400;\n      font-size: 17px;\n      overflow: hidden;\n      background-color: rgba(0, 0, 0, 0.7);\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      display: table;\n      z-index: 2147483647;\n    }\n    .modal__content {\n      white-space: nowrap;\n      overflow: hidden;\n      word-spacing: 0;\n      padding: 0;\n      margin: 0;\n      font: inherit;\n      color: inherit;\n      background: transparent;\n      border: none;\n      line-height: normal;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      background-clip: padding-box;\n      font-family: -apple-system, \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      font-weight: 400;\n      font-size: 17px;\n      display: table-cell;\n      vertical-align: middle;\n      text-align: center;\n      color: #fff;\n      white-space: normal;\n    }\n';

function createStyleTag(styles) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = styles;
    document.body.appendChild(style);
}

function createStyleForMobile() {
    createStyleTag(stylesForMobile);
}

function createStyle() {
    createStyleTag(styles);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setDispatch;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDispatch;
var dispatch = function dispatch() {};

function setDispatch(newDispatch) {
    dispatch = newDispatch;
}

function getDispatch() {
    return dispatch;
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_mobile__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return __WEBPACK_IMPORTED_MODULE_1__reducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methods__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return __WEBPACK_IMPORTED_MODULE_2__methods__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return __WEBPACK_IMPORTED_MODULE_2__methods__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainer", function() { return __WEBPACK_IMPORTED_MODULE_3__containers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_3__containers__["b"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MobileModals", function() { return __WEBPACK_IMPORTED_MODULE_0__containers_mobile__; });








/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return Confirm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var isAndroid = navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/);

var ConfirmRoot = function (_Base) {
    _inherits(ConfirmRoot, _Base);

    function ConfirmRoot() {
        _classCallCheck(this, ConfirmRoot);

        var _this = _possibleConstructorReturn(this, (ConfirmRoot.__proto__ || Object.getPrototypeOf(ConfirmRoot)).call(this));

        _this.ok = _this.ok.bind(_this);
        _this.cancel = _this.cancel.bind(_this);
        return _this;
    }

    _createClass(ConfirmRoot, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__style__["a" /* createStyleForMobile */])();
        }
    }, {
        key: 'ok',
        value: function ok() {
            var _props = this.props,
                callback = _props.callback,
                dispatch = _props.dispatch;


            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* hideModal */])());

            if (callback) {
                callback();
            }
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            var _props2 = this.props,
                dispatch = _props2.dispatch,
                cancelCallback = _props2.cancelCallback;


            dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* hideModal */])());

            if (cancelCallback) {
                cancelCallback();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                modal = _props3.modal,
                children = _props3.children,
                _props3$title = _props3.title,
                title = _props3$title === undefined ? 'Confirm' : _props3$title,
                _props3$cancelText = _props3.cancelText,
                cancelText = _props3$cancelText === undefined ? 'Cancel' : _props3$cancelText,
                _props3$okText = _props3.okText,
                okText = _props3$okText === undefined ? 'OK' : _props3$okText;


            if (!modal.showed) {
                return null;
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: isAndroid && "material" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'alert-dialog-mask' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'alert-dialog' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'alert-dialog-container' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'alert-dialog-title' },
                            title
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'alert-dialog-content' },
                            children
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'alert-dialog-footer' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'alert-dialog-button', onClick: this.cancel },
                                cancelText
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'alert-dialog-button alert-dialog-button--primal',
                                    onClick: this.ok },
                                okText
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ConfirmRoot;
}(__WEBPACK_IMPORTED_MODULE_3__index__["c" /* Base */]);

var mapStateToProps = function mapStateToProps(state) {
    return {
        modal: state.modal
    };
};

var Confirm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps)(ConfirmRoot);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_dispatch__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(0);



function showModal() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__store_dispatch__["b" /* getDispatch */])()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions__["b" /* showModal */])());
}

function hideModal() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__store_dispatch__["b" /* getDispatch */])()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions__["a" /* hideModal */])());
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__const_actions__ = __webpack_require__(1);


var modal = function modal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { showed: false };
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__const_actions__["a" /* SHOW_MODAL */]:
            return {
                showed: action.showed
            };
        case __WEBPACK_IMPORTED_MODULE_0__const_actions__["b" /* HIDE_MODAL */]:
            return {
                showed: false
            };
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (modal);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);