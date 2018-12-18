import { merge } from 'lodash';
import { RECIEVE_BUSINESS_ERRORS } from '../actions/business_actions';

export default (state = [], action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECIEVE_BUSINESS_ERRORS:
            return action.errors;
        default:
            return state;
    }
};