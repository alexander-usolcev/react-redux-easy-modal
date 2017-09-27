var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setDispatch } from '../store/dispatch';
import { createStyle } from './style';

var Base = function (_PureComponent) {
    _inherits(Base, _PureComponent);

    function Base() {
        _classCallCheck(this, Base);

        return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
    }

    _createClass(Base, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            setDispatch(this.props.dispatch);
        }
    }]);

    return Base;
}(PureComponent);

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

            return React.createElement(
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
            createStyle();
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

            return React.createElement(
                'div',
                { className: 'modal' },
                React.createElement(
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

export { Base };
export var Modal = connect(mapStateToProps)(ModalRoot);
export var ModalContainer = connect(mapStateToProps)(ModalContainerRoot);