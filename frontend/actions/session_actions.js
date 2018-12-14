import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => dispatch => {

    return SessionAPIUtil.login(user)
    .then((user) => dispatch(receiveUser(user)),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

export const fetchUser = id => dispatch => {

    return SessionAPIUtil.fetchUser(id)
    .then((user) => dispatch(receiveUser(user)),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

export const clearErrors = () => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors: []
    });
}

export const logout = () => dispatch => {

    return SessionAPIUtil.logout()
    .then(() => dispatch(logoutUser()),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

export const signup = (user) => dispatch => {

    return SessionAPIUtil.signup(user)
    .then((user) => dispatch(receiveUser(user)),
    (err) => dispatch(recieveErrors(err.responseJSON)));
};

const recieveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const logoutUser = () => ({
    type: LOGOUT_USER
});


const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});