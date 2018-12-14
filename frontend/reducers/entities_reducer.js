import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import businessesReducer from './businesses_reducer';


export default combineReducers({
    users: usersReducer,
    businesses: businessesReducer
});