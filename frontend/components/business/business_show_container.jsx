import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {

    let id = ownProps.match.params.businessId;
    let biz = entities.businesses[id];
    return ({
        currentUser: entities.users[session.id],
        biz,
        reviews: entities.reviews,
        users: entities.users
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        fetchBusiness: (id) => dispatch(fetchBusiness(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);