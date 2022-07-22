import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {createLedger} from './actions/cart_ledger_actions'
import { requestReviews } from './actions/review_actions';



document.addEventListener("DOMContentLoaded", ()=> {
const root = document.getElementById('root');
  let store;
  let preloadedState;
  // { window.currentUser ? ( console.log("addeventlistener",currentUser), preloadedState = { entities: { users: { [window.currentUser.id]: window.currentUser } }, session: { id: window.currentUser.id } }, store = configureStore(preloadedState), delete window.currentUser ) : ( store = configureStore() )}
  { window.currentUser ? (console.log("addeventlistener", currentUser), preloadedState = { entities: { users: { [window.currentUser.id]: window.currentUser } }, session: { id: window.currentUser.id, cart: window.currentUser.currentCart , currentUser: window.currentUser.currentUser} }, store = configureStore(preloadedState), delete window.currentUser) : (store = configureStore()) }


ReactDOM.render( <Root store={store} /> , root)
  // ReactDOM.render( <h1>Test upload to heroku</h1>, root)

//testing
window.requestReviews = requestReviews
window.getState = store.getState
window.dispatch = store.dispatch
window.store = store
window.createLedger = createLedger
// testing

});