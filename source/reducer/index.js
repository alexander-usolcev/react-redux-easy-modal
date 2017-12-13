import { SHOW_MODAL, HIDE_MODAL } from '../const/actions';

const modal = (state = {show: false, id: '*'}, action) => {
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