import { RECEIVE_LEDGER, RECEIVE_LEDGERS, REMOVE_LEDGER } from "../actions/cart_ledger_actions";

const ledgerReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate)
  let nextstate = Object.assign({},oldstate)

console.log("ledger reducer", action)
  switch (action.type) {
    case RECEIVE_LEDGERS:
    return action.ledgers  
    case RECEIVE_LEDGER:

      nextstate[action.ledger.product_id] = action.ledger
      nextstate["ledgerCount"] = action.ledger.ledgerCount
      return nextstate
    case REMOVE_LEDGER:

    Object.values(nextstate).map(stateitem => { 
      if (stateitem.id == action.ledgerId) {
        delete nextstate[stateitem.product_id]} 
      })  
    // Object.values(nextstate2).map((stateitem, idx) => {(stateitem.id == action.ledgerId) ? (nextstate.slice(0,idx).concat(nextstate.slide())) : ({}) })  
      return nextstate
    default:
      return oldstate
  }
}

export default ledgerReducer