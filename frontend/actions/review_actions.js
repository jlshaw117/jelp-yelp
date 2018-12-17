import * as ReviewAPIUtil from '../util/reviews_api_utils';

export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const RECIEVE_REVIEW_ERRORS = 'RECIEVE_REVIEW_ERRORS';
esport const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const createReview = (review) => dispatch => {

    return ReviewAPIUtil.createReview(review)
    .then((review) => dispatch(recieveReview(review)),
    (err) => dispatch(recieveReviewErrors(err.responseJSON)));
};

export const updateReview = (review) => dispatch => {

    return ReviewAPIUtil.updateReview(review)
    .then((review) => dispatch(recieveReview(review)),
    (err) => dispatch(recieveReviewErrors(err.responseJSON)));
};

export const deleteReview = (id) => dispatch => {

    return ReviewAPIUtil.deleteReview(id)
    .then(() => dispatch(removeReview()),
    (err) => dispatch(recieveReviewErrors(err.responseJSON)));
};

const removeReview = () => ({
    type: REMOVE_REVIEW
});

const recieveReview = (review) => ({
    type: RECIEVE_REVIEW,
    review
});

const recieveReviewErrors = (errors) => ({
    type: RECIEVE_REVIEW_ERRORS,
    errors
});