import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './products_reducer';
import ledgerReducer from './cart_ledger_reducer';
import cartReducer from './cart_reducer';
import reviewReducer from './review_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  review: reviewReducer,
  ledger: ledgerReducer,
  cart: cartReducer
});


export default entitiesReducer