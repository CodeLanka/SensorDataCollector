import {
    LEVEL_ONE_CHANGED,
    LEVEL_TWO_CHANGED,
    LEVEL_THREE_CHANGED,
    LEVEL_FOUR_CHANGED,
} from '../actions/types';

const initialState = {
    selectedLevelOneType: null,
    selectedLevelTwoType: null,
    selectedLevelThreeType: null,
    selectedLevelFourType: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LEVEL_ONE_CHANGED:
            return { ...state, selectedLevelOneType: action.payload };
        case LEVEL_TWO_CHANGED:
            return { ...state, selectedLevelTwoType: action.payload };
        case LEVEL_THREE_CHANGED:
            return { ...state, selectedLevelThreeType: action.payload };
        case LEVEL_FOUR_CHANGED:
            return { ...state, selectedLevelFourType: action.payload };
        default:
            return state;
    }
};
