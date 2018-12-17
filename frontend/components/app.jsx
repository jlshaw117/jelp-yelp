import React from 'react';
import GreetingContainer from './greeting/greeitng_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import BusinessIndexContainer from './businesses/business_index_container';
import { AuthRoute } from '../util/route_util';
import BusinessShowContainer from './business/business_show_container';
import NewReviewFormContainer from './reviews/new_review_form_container';
import EditReviewFormContainer from './reviews/edit_review_form_container';

const App = () => {

    return (
        <div>
            <header>
                
            </header>

            <Route exact path="/" component={GreetingContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
            <Route exact path="/businesses/:businessId/newReview" component={NewReviewFormContainer} />
            <Route exact path="/businesses/:businessId/editReview/:reviewId" component={EditReviewFormContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
};

export default App;