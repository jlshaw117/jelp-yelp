import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';


const mapStateToProps = ({ errors }) => {

    return ({
        user: {
            email: '',
            password: '',
            f_name: '',
            l_name: ''
        },
        formType: 'Sign up for',
        formBTN: 'Sign up',
        navLink: <Link to='/login'>Log in</Link>,
        errors: errors
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));