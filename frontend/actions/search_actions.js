import * as SearchAPIUtils from '../util/search_api_util';
// import {receiveAllBusinesses} from './business_actions';

export const RECIEVE_BUSINESS_RESULTS = 'RECIEVE_BUSINESS_RESULTS';

export const searchBusinesses = (terms) => dispatch => {
    return (
        SearchAPIUtils.searchBusinesses(terms)
            .then((payload) => dispatch(receiveBusinessResults(payload)))
    );
};

const receiveBusinessResults = ({ businesses, terms, results}) => ({
    type: RECIEVE_BUSINESS_RESULTS,
    businesses,
    terms,
    results
});

