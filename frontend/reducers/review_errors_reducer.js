import { merge } from 'lodash';
import { RECIEVE_REVIEW_ERRORS, RECIEVE_REVIEW } from '../actions/review_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECIEVE_REVIEW_ERRORS:
            return action.errors;
        case RECIEVE_REVIEW:
            return [];
        default:
            return state;
    }
};