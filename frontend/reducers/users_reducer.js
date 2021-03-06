import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_REVIEW:
            newState[action.user.id] = action.user;
            return newState;
        case RECEIVE_BUSINESS:
            return merge(newState, action.users);
        default:
            return state;
    }
};