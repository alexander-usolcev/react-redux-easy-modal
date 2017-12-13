import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setDispatch } from '../store/dispatch';
import { createStyle } from './style';

class Base extends PureComponent {
    componentDidMount() {
        setDispatch(this.props.dispatch);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.all) {
            return true;
        }

        return !!((!nextProps.show && nextProps.showById) || nextProps.show);
    }
}

class ModalContainerRoot extends Base {
    render() {
        const { show, showById, children } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div>
                {children}
            </div>
        );
    }
}

class ModalRoot extends Base {
    componentWillMount() {
        createStyle();
    }

    render() {
        const { show, children } = this.props;

        if (!show) {
            return null;
        }

        return (
            <div className="react-redux-easy-modal">
                <div className="react-redux-easy-modal-content">
                    {children}
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

export { Base };
export const Modal = connect(mapStateToProps)(ModalRoot);
export const ModalContainer = connect(mapStateToProps)(ModalContainerRoot);