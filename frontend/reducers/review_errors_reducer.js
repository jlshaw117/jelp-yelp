import { merge } from 'lodash';
import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW } from '../actions/review_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case RECEIVE_REVIEW:
            return [];
        default:
            return state;
    }
};