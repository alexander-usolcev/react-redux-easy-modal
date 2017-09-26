import { getDispatch } from '../store/dispatch';
import { showModal as show, hideModal as hide } from '../actions';


function showModal() {
    return getDispatch()(show());
}

function hideModal() {
    return getDispatch()(hide());
}

export { showModal, hideModal };