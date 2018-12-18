import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = ({ session, entities }, ownProps) => {

    let id = ownProps.match.params.businessId;
    let biz = entities.businesses[id];
    return ({
        currentUser: entities.users[session.id],
        formType: 'Write a Review',
        review: {
            rating: null,
            body: null,
            user_id: session.id,
            business_id: id
        },
        biz
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (review) => dispatch(createReview(review))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);