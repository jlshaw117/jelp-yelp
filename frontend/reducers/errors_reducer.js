import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import reviewErrorsReducer from './review_errors_reducer';
import businessErrorsReducer from './business_errors_reducer';

export default combineReducers({
    session: sessionErrorsReducer,
    reviews: reviewErrorsReducer,
    business: businessErrorsReducer
});