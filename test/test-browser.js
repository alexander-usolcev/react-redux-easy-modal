import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createLogger } from 'redux-logger';

import { reducer as modal, showModal, hideModal, Modal, ModalContainer, MobileModals } from '../source';


const rootReducer = combineReducers({
    modal
});

let store = createStore(rootReducer, applyMiddleware(createLogger({ collapsed: true })));


const App = () => (
    <div>
        <button onClick={() => showModal('main-modal')}>showModal</button>
        <button onClick={showModal}>show all modals</button>
        <button onClick={() => showModal('mobile-modal')}>show mobile</button>

        <ModalContainer id="main-modal">
            <div>
                Some content.
                <div onClick={() => hideModal('main-modal')}>Hide modal</div>
            </div>
        </ModalContainer>

        <ModalContainer>
            Clear html.
            <div onClick={hideModal}>Hide all modals</div>
        </ModalContainer>

        <MobileModals.Confirm
            id="mobile-modal"
            title="Confirm"
            callback={() => alert('OK')}
            cancelCallback={() => alert('Cancel')}
            okText="OK"
            cancelText="Cancel">
            Delete?
        </MobileModals.Confirm>
    </div>
);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,

        document.getElementById('app')
    )
};

render(App);


if (module.hot) {
    module.hot.accept(App, () => {
        render(App);
    });
}