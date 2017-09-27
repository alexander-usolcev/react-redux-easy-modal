import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

function showModal() {
    return {
        type: SHOW_MODAL,
        showed: true
    };
}

function hideModal() {
    return {
        type: HIDE_MODAL,
        showed: false
    };
}

export { showModal, hideModal };