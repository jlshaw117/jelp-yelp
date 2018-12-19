import * as ReviewAPIUtil from '../util/reviews_api_utils';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const createReview = (review) => dispatch => {

    return ReviewAPIUtil.createReview(review)
    .then((review) => dispatch(receiveReview(review)),
    (err) => {
        dispatch(receiveReviewErrors(err.responseJSON));
    });
};

export const updateReview = (review) => dispatch => {

    return ReviewAPIUtil.updateReview(review)
    .then((review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON)));
};

export const deleteReview = (id) => dispatch => {

    return ReviewAPIUtil.deleteReview(id)
    .then((review) => dispatch(removeReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON)));
};

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review,
});

const receiveReview = ({ review, user}) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating: review.biz_average_rating,
    user
});

const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});