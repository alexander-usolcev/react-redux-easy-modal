var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions';
import { Base } from '../index';
import { createStyleForMobile } from '../style';

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
            createStyleForMobile();
        }
    }, {
        key: 'ok',
        value: function ok() {
            var _props = this.props,
                callback = _props.callback,
                dispatch = _props.dispatch;


            dispatch(hideModal());

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


            dispatch(hideModal());

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

            return React.createElement(
                'div',
                { className: isAndroid && "material" },
                React.createElement('div', { className: 'alert-dialog-mask' }),
                React.createElement(
                    'div',
                    { className: 'alert-dialog' },
                    React.createElement(
                        'div',
                        { className: 'alert-dialog-container' },
                        React.createElement(
                            'div',
                            { className: 'alert-dialog-title' },
                            title
                        ),
                        React.createElement(
                            'div',
                            { className: 'alert-dialog-content' },
                            children
                        ),
                        React.createElement(
                            'div',
                            { className: 'alert-dialog-footer' },
                            React.createElement(
                                'div',
                                { className: 'alert-dialog-button', onClick: this.cancel },
                                cancelText
                            ),
                            React.createElement(
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
}(Base);

var mapStateToProps = function mapStateToProps(state) {
    return {
        modal: state.modal
    };
};

export var Confirm = connect(mapStateToProps)(ConfirmRoot);