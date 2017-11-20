import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { setDispatch } from '../store/dispatch';
import { createStyle } from './style';

class Base extends PureComponent {
    componentDidMount() {
        setDispatch(this.props.dispatch);
    }
}

class ModalContainerRoot extends Base {
    render() {
        const { modal, children } = this.props;

        if (!modal.showed) {
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
        const { modal, children } = this.props;

        if (!modal.showed) {
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

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    };
};

export { Base };
export const Modal = connect(mapStateToProps)(ModalRoot);
export const ModalContainer = connect(mapStateToProps)(ModalContainerRoot);