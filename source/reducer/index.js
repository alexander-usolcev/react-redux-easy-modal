import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

const modal = (state = {showed: false}, action) => {
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