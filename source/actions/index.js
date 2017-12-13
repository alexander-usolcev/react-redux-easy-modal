import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

function showModal(id) {
    return {
        type: SHOW_MODAL,
        show: true,
        id,
    }
}

function hideModal(id) {
    return {
        type: HIDE_MODAL,
        show: false,
        id
    }
}

export { showModal, hideModal };