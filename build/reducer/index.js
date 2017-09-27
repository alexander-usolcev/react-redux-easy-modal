import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

var modal = function modal() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { showed: false };
    var action = arguments[1];

    switch (action.type) {
        case SHOW_MODAL:
            return {
                showed: action.showed
            };
        case HIDE_MODAL:
            return {
                showed: false
            };
        default:
            return state;
    }
};

export default modal;