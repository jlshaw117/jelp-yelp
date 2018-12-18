import { merge } from 'lodash';
import { RECIEVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state);
    switch (action.type) {
        case RECIEVE_REVIEW:
            // newState[action.review.id] = action.review;
            // return newState;
            const { review, average_rating } = action;
            newState[review.business_id].reviewIds.push(review.id);
            newState[review.business_id].average_rating = average_rating;
            return newState;
        case REMOVE_REVIEW:
            delete newState[action.review.id];
            return newState;
        case RECEIVE_BUSINESS:
            return action.reviews;
        default:
            return state;
    }
};