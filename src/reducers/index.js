import { combineReducers } from 'redux';
import inputEventReducer from './inputEventReducer';
import levelReducer from './levelReducer';

export default combineReducers({
    modals: inputEventReducer,
    lavels: levelReducer,
});
