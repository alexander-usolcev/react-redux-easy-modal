import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

function showModal(id) {
    return {
        type: SHOW_MODAL,
        show: true,
        id: id
    };
}

function hideModal(id) {
    return {
        type: HIDE_MODAL,
        show: false,
        id: id
    };
}

export { showModal, hideModal };