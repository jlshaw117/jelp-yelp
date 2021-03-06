import { merge } from 'lodash';
import  { RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES } from '../actions/business_actions';
import { RECEIVE_REVIEW } from '../actions/review_actions';
import { RECIEVE_BUSINESS_RESULTS } from '../actions/search_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            newState[review.business_id].reviewIds.push(review.id);
            newState[review.business_id].average_rating = average_rating;
            return newState;
        case RECIEVE_BUSINESS_RESULTS:
            if (action.businesses) {
                return action.businesses;
            } else {
                return {};
            }
        default:
            return state;
    }
};