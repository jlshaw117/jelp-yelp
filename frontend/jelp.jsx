import React from  'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { fetchAllBusinesses, fetchBusiness, createBusiness, updateBusiness } from './actions/business_actions';

document.addEventListener('DOMContentLoaded', () => {

    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        let preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: { id: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // let store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);

    //testing
    window.fetchAllBusinesses = fetchAllBusinesses;
    window.fetchBusiness = fetchBusiness;
    window.createBusiness = createBusiness;
    window.updateBusiness = updateBusiness;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    //end testing
});

