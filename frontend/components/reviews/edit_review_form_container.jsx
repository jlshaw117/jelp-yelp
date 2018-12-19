import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = ({ session, entities }, ownProps) => {

    let bizId = ownProps.match.params.businessId;
    let reviewId = ownProps.match.params.reviewId;
    let review = entities[reviewId];
    let biz = entities[bizId];
    return ({
        currentUser: entities.users[session.id],
        formType: 'Edit a Review',
        review,
        biz
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (id) => dispatch(updateReview(id)),
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);