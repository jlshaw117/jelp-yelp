import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';

const mapStateToProps = ({ session, entities }, ownProps) => {

    let bizId = ownProps.match.params.businessId;
    let reviewId = ownProps.match.params.reviewId;
    let review = entities[reviewId];
    return ({
        currentUser: entities.users[session.id],
        formType: 'Edit a Review',
        review
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (id) => dispatch(updateReview(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);