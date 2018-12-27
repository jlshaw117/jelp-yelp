import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchAllBusinesses } from '../../actions/business_actions';
import { searchBusinesses } from '../../actions/search_actions';

const mapStateToProps = ({ session, entities }) => {

    let businesses = Object.values(entities.businesses);
    return ({
        currentUser: entities.users[session.id],
        businesses,
        search: entities.search.terms,
        results: entities.search.results
    });
};

const mapDisptchToProps = dispatch => {

    return ({
        fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
        searchBusinesses: (terms) => dispatch(searchBusinesses(terms))
    });
};

export default connect(mapStateToProps, mapDisptchToProps)(BusinessIndex);