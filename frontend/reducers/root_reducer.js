import { combineReducers } from 'redux';

import entities from './entities_reducer';
// import ui from './ui_reducer';

import sessionReducer from './session_reducers';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  // ui: uiReducer
  errors: errorsReducer
});

export default rootReducer;
