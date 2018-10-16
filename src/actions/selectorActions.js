import {
    OPEN_SELECTOR,
    CLOSE_SELECTOR,
    LEVEL_ONE_CHANGED,
    LEVEL_TWO_CHANGED,
    LEVEL_THREE_CHANGED,
    LEVEL_FOUR_CHANGED,
} from './types';

export const openSelectorAction = () => ({ type: OPEN_SELECTOR });
export const closeSelectorAction = () => ({ type: CLOSE_SELECTOR });

export const levelOneChangeAction = payload => ({ type: LEVEL_ONE_CHANGED, payload });
export const levelTwoChangeAction = payload => ({ type: LEVEL_TWO_CHANGED, payload });
export const levelThreeChangeAction = payload => ({ type: LEVEL_THREE_CHANGED, payload });
export const levelFourChangeAction = payload => ({ type: LEVEL_FOUR_CHANGED, payload });
