import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/session_actions';
import { RECIEVE_REVIEW } from '../actions/review_actions';
import { RECIEVE_BUSINESS } from '../actions/business_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            // return merge({}, state, { [action.user.id]: action.user });
            newState[action.user.id] = action.user;
            return newState;
        case RECIEVE_REVIEW:
            newState[action.user.id] = action.user;
            return newState;
        case RECIEVE_BUSINESS:
            return merge({}, newState, action.users);
        default:
            return state;
    }
};