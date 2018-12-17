import {merge} from 'lodash';
import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';


export default (state = {id: null}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_USER:
            newState.id = action.user.id;
            return newState;
        case LOGOUT_USER:
            newState.id = null;
            return newState;
        // case RECEIVE_BUSINESS:
        //     newState.businessId = action.business.id;
        //     return newState;
        default:
            return state;
    }
};