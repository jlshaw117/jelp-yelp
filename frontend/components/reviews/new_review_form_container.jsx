import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, clearReviewErrors } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = ({ session, entities, errors }, ownProps) => {

    let id = ownProps.match.params.businessId;
    let biz = entities.businesses[id];
    let bizErrors = Object.values(errors.reviews);
    return ({
        currentUser: entities.users[session.id],
        formType: 'Write a Review',
        review: {
            rating: null,
            body: null,
            user_id: session.id,
            business_id: id
        },
        biz,
        errors: bizErrors
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (review) => dispatch(createReview(review)),
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);