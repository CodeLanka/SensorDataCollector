import { OPEN_SELECTOR, CLOSE_SELECTOR } from '../actions/types';

const initialState = {
    visibleLabelSelector: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SELECTOR:
            return { visibleLabelSelector: true };
        case CLOSE_SELECTOR:
            return { visibleLabelSelector: false };
        default:
            return state;
    }
};
