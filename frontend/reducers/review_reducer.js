import { merge } from 'lodash';
import { RECIEVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state);
    switch (action.type) {
        case RECIEVE_REVIEW:
            newState[action.review.id] = action.review;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.review.id];
            return newState;
        case RECEIVE_BUSINESS:
            if (action.reviews) {
                return action.reviews;
            } else {
                return newState;
            };
        default:
            return state;
    }
};