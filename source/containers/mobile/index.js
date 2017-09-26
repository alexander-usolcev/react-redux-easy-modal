import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions';
import { Base } from '../index';
import { createStyleForMobile } from '../style';

const isAndroid = navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/);

class ConfirmRoot extends Base {
    constructor() {
        super();

        this.ok = this.ok.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentWillMount() {
        createStyleForMobile();
    }

    ok() {
        const { callback, dispatch } = this.props;

        dispatch(hideModal());

        if (callback) {
            callback();
        }
    }

    cancel() {
        const { dispatch, cancelCallback } = this.props;

        dispatch(hideModal());

        if (cancelCallback) {
            cancelCallback();
        }
    }

    render() {
        const { modal, children, title = 'Confirm', cancelText = 'Cancel', okText = 'OK' } = this.props;

        if (!modal.showed) {
            return null;
        }

        return (
            <div className={isAndroid && "material"}>
                <div className="alert-dialog-mask"></div>
                <div className="alert-dialog">
                    <div className="alert-dialog-container">
                        <div className="alert-dialog-title">{title}</div>

                        <div className="alert-dialog-content">
                            {children}
                        </div>

                        <div className="alert-dialog-footer">
                            <div className="alert-dialog-button" onClick={this.cancel}>{cancelText}</div>

                            <div className="alert-dialog-button alert-dialog-button--primal"
                                 onClick={this.ok}>{okText}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    };
};

export const Confirm = connect(mapStateToProps)(ConfirmRoot);