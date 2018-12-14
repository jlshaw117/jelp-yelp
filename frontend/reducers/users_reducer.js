import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/session_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_USER:
            // return merge({}, state, { [action.user.id]: action.user });
            newState[action.user.id] = action.user;
            return newState;
        default:
            return state;
    }
};