import { merge } from 'lodash';
import { RECIEVE_BUSINESS_RESULTS } from '../actions/search_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    
    let newState = merge({}, state);
    switch (action.type) {
        case RECIEVE_BUSINESS_RESULTS:
            return {
                terms: action.terms,
                results: action.results
            };
        default:
            return state;
    }
};