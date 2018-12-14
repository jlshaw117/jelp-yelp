import { merge } from 'lodash';
import  { RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES } from '../actions/business_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state)
    // debugger
    switch (action.type) {
        case RECEIVE_BUSINESS:
            // newState = merge({}, state, { [action.business.id]: action.business});
            newState[action.business.id] = action.business;
            return newState;
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        default:
            return state;
    }
};