import { merge } from 'lodash';
import  { RECEIVE_BUSINESS, RECEIVE_ALL_BUSINESSES } from '../actions/business_actions';
import { RECIEVE_REVIEW } from '../actions/review_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        case RECIEVE_REVIEW:
            const { review, average_rating } = action;
            newState[review.business_id].reviewIds.push(review.id);
            newState[review.business_id].average_rating = average_rating;
            return newState;
        default:
            return state;
    }
};