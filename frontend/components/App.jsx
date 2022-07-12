import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greetingContainer';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBar from '../nav_toolbar/nav_bar';
import NavSubBar from '../nav_toolbar/nav_sub_bar';
import EmptyCart from './basket/empty_cart';
import HomePage from '../homepage/homepage';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import AccountDetails from './account/account_info';
import ProductIndex from './products/Product_index';

const App = (currentUsername) => (
  
  <div>
    <header>
  
    < NavBar />
    <NavSubBar />


    </header>
    <Switch>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <Route exact path="/greeting" component={GreetingContainer}/>
    <Route exact path='/account' component={AccountDetails}/>
    <Route exact path='/products' component={ProductIndex}  />
    <Route exact path="/cart" component={EmptyCart}/>
    <Route path='/' component={HomePage}/>
    </Switch>
  </div>

);

export default App;



