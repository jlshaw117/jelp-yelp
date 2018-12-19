import { merge } from 'lodash';
import { RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';

export default (state = [], action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BUSINESS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};