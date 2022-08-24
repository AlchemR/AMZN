import { RECEIVE_CART, RECEIVE_CARTS } from "../actions/cart_actions";
import { RECEIVE_LEDGER, REMOVE_LEDGER } from "../actions/cart_ledger_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";


const cartReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate)
  let nextstate = Object.assign({}, oldstate)
  // console.log("cart reducer action", action)
  switch (action.type) {
    case RECEIVE_CARTS:
      return action.carts
    case RECEIVE_CART:      
        // nextstate["currentCart"] = action.cart
        // return nextstate
        return action.cart
        
      // case RECEIVE_CURRENT_USER:
      // console.log("cartreducer nextstate 1", nextstate[action.currentUser.carts.id])
      // nextstate[action.currentUser.carts.id] = action.currentUser.carts
      // console.log("cartreducer after nextstate",nextstate)
      // return nextstate
      // nextstate["currentCart"] = action.currentUser.carts

// console.log("receive user carts reducer",action)
      // if (action.currentUser.currentCart) {return action.currentUser.currentCart} else {return {}}
      
      // return action.currentUser.carts
        // ????
    case RECEIVE_LEDGER:
      nextstate[action.ledger.product_id] = action.ledger
      return nextstate
    case REMOVE_LEDGER:
      Object.values(nextstate).map(stateitem => { if (stateitem.id == action.ledgerId) { delete nextstate[stateitem.product_id] } })  
      return nextstate
      // case REMOVE_LEDGER:
    //   console.log("cart reducer remove ledger",action)
    // return {}
      case LOGOUT_CURRENT_USER:
        return {}
        // return null
        // If receive takes cart into state, logout should probably remove it...???
        // causes issues?
    default:
      return oldstate
  }
}

export default cartReducer;