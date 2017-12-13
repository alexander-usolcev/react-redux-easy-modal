import { getDispatch } from '../store/dispatch';
import { showModal as show, hideModal as hide } from '../actions';

function getId(e) {
    return typeof e === 'string' ? e : '*';
}

function showModal(e) {
    return getDispatch()(show(getId(e)));
}

function hideModal(e) {
    return getDispatch()(hide(getId(e)));
}

export { showModal, hideModal };