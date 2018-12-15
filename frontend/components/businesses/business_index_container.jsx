import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchAllBusinesses } from '../../actions/business_actions';

const mapStateToProps = ({ session, entities }) => {

    let businesses = Object.values(entities.businesses);
    return ({
        currentUser: entities.users[session.id],
        businesses
    });
};

const mapDisptchToProps = dispatch => {

    return ({
        fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
    });
};

export default connect(mapStateToProps, mapDisptchToProps)(BusinessIndex);