import { connect } from 'react-redux';
import { deleteReview, updateReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = ({ entities, session }, {reviews, users}) => {

    return ({
        currentUser: entities.users[session.id],
        reviews,
        users
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        deleteReview: (id) => dispatch(deleteReview(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);

