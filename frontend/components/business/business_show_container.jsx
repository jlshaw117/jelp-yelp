import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchAllBusinesses } from '../../actions/business_actions';

const mapStateToProps = ({ entities }, ownProps) => {

    let id = ownProps.match.params.businessId;
    let biz = entities.businesses[id];
    // debugger
    return ({
        biz
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);