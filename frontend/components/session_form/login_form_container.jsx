import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';


const mapStateToProps = ({errors}) => {

    return ({
        user: {
            email: '',
            password: '',
        },
        formType: 'Log in to',
        formBTN: 'Log in',
        navLink: <Link to='/signup'>Sign up</Link>,
        errors: errors
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        action: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);