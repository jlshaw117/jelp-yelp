import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';
import { searchBusinesses } from '../../actions/search_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {

    let id = ownProps.match.params.businessId;
    let biz = entities.businesses[id];
    let hours = biz.hours.map(str => {
        let arr = str.split(',');
        return arr.map(hour => parseInt(hour));
    });
    return ({
        currentUser: entities.users[session.id],
        biz,
        reviews: entities.reviews,
        users: entities.users,
        hours
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        fetchBusiness: (id) => dispatch(fetchBusiness(id)),
        searchBusinesses: (terms) => dispatch(searchBusinesses(terms))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);