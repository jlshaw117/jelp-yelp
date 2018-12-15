import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import DropDownMenu from './drop_down';

const mapStateToProps = ({ session, entities }) => {

    return ({
        currentUser: entities.users[session.id]
    });
};

const mapDispatchtoProps = dispatch => {

    return ({
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchtoProps)(DropDownMenu);