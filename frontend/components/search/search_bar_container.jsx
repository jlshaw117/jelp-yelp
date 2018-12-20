import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchBusinesses } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

    return ({
        placeHolder: ownProps.placeHolder
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        searchBusinesses: (terms) => dispatch(searchBusinesses(terms))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));