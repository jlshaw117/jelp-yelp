import { connect } from 'react-redux';
import IndexItem from './business_index_item';
import { searchBusinesses } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {

    return ({
        biz: ownProps.biz,
        index: ownProps.index
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        searchBusinesses: (term) => dispatch(searchBusinesses(term))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexItem);