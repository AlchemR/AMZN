import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({ id: null , cart: "Guest", currentUser: "Guest"  });

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return { id: action.currentUser.id };
      console.log("sessionreducers",action.currentUser)
      console.log("sessionreducers action",action)
      return { id: action.currentUser.id, cart: action.currentUser.currentCart , currentUser: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
