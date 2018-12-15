import React from 'react';
import GreetingContainer from './greeting/greeitng_container';
import { Route } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import BusinessIndexContainer from './businesses/business_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => {

    return (
        <div>
            <header>
                
            </header>

            <Route exact path="/" component={GreetingContainer} />
            <Route exact path="/businesses" component={BusinessIndexContainer} />
            {/* <Route exact path="/businesses/:business_id" component={BusinessShowContainer} /> */}
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
};

export default App;