import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, clearReviewErrors } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = ({ session, entities, errors }, ownProps) => {
    
    let bizId = ownProps.match.params.businessId;
    let reviewId = ownProps.match.params.reviewId;
    let review = entities.reviews[reviewId];
    let biz = entities.businesses[bizId];
    return ({
        currentUser: entities.users[session.id],
        formType: 'Edit a Review',
        review,
        biz,
        errors: Object.values(errors.reviews)
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (id) => dispatch(updateReview(id)),
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);