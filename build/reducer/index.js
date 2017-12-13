import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

var modal = function modal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { show: false, id: '*' };
    var action = arguments[1];

    switch (action.type) {
        case SHOW_MODAL:
            return {
                show: action.show,
                id: action.id
            };
        case HIDE_MODAL:
            return {
                show: action.show,
                id: action.id
            };
        default:
            return state;
    }
};

export default modal;