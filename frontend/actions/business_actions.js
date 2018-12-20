import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES'; 
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'; 
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';

export const fetchAllBusinesses = () => dispatch => {

    return (
        BusinessAPIUtil.fetchAllBusinesses()
        .then((businesses) => dispatch(receiveAllBusinesses(businesses)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const searchBusinesses = (terms) => dispatch => {

    return (
        BusinessAPIUtil.searchBusinesses(terms)
        .then((businesses) => dispatch(receiveAllBusinesses(businesses)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const fetchBusiness = (id) => dispatch => {

    return (
        BusinessAPIUtil.fetchBusiness(id)
        .then((payload) => dispatch(receiveBusiness(payload)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const createBusiness = (business) => dispatch => {

    return (
        BusinessAPIUtil.createBusiness(business)
        .then((business) => dispatch(receiveBusiness(business)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const updateBusiness = (business) => dispatch => {

    return (
        BusinessAPIUtil.updateBusiness(business)
        .then((business) => dispatch(receiveBusiness(business)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const clearBusinessErrors = () => ({
    type: RECEIVE_BUSINESS_ERRORS,
    errors: []
});

const receiveBusiness = ({ business, reviews, users}) => ({
    type: RECEIVE_BUSINESS,
    business,
    reviews,
    users
});

const receiveAllBusinesses = (businesses) => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
});

const receiveErrors = (errors) => ({
    type: RECEIVE_BUSINESS_ERRORS,
    errors
});

