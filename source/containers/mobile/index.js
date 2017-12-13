import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../methods';
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
        const { callback } = this.props;

        hideModal(this.props.id);

        if (callback) {
            callback();
        }
    }

    cancel() {
        const { cancelCallback } = this.props;

        hideModal(this.props.id);

        if (cancelCallback) {
            cancelCallback();
        }
    }

    render() {
        const { show, children, title = 'Confirm', cancelText = 'Cancel', okText = 'OK' } = this.props;

        if (!show) {
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

const mapStateToProps = ({modal}, ownProps) => {
    if (modal.id === '*') {
        return {
            show: modal.show,
            all: true
        }
    }

    let showById = ownProps.id && ownProps.id === modal.id;

    return {
        show: modal.show && showById,
        showById
    };
};

export const Confirm = connect(mapStateToProps)(ConfirmRoot);