import { RECEIVE_CURRENT_USER } from '../actions/session_actions';



const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextstate = Object.assign({}, state )
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      console.log("user_reducers 1", action)
      nextstate[action.currentUser.id] = action.currentUser
      console.log("user_reducers", action)
      // nextstate["currentUser"] = action.currentUser
      return nextstate
    default:
      return state;
  }
};

export default usersReducer;