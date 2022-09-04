import {  applyMiddleware, compose } from 'redux';
import {legacy_createStore  as createStore} from 'redux'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => (
  // for production enviroment
  createStore( rootReducer, preloadedState, applyMiddleware(thunk)

  // for DEV enviroment
  // createStore( rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk, logger) )
  )
);

export default configureStore;

