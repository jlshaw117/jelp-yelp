import { connect } from 'react-redux';
import SampleBusinesses from './sample_businesses';
import { fetchAllBusinesses } from '../../actions/business_actions';

const mapStateToProps = ({ entities}) => {

    return ({
        businesses: Object.values(entities.businesses)
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleBusinesses);