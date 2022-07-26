import { RECEIVE_LEDGER, RECEIVE_LEDGERS, REMOVE_LEDGER } from "../actions/cart_ledger_actions";

const ledgerReducer = (oldstate = {}, action) => {
  Object.freeze(oldstate)
  let nextstate = Object.assign({},oldstate)
  let nextstate2 = Object.assign({},oldstate)

  switch (action.type) {
    case RECEIVE_LEDGERS:
    return action.ledgers  
    case RECEIVE_LEDGER:

      nextstate[action.ledger.product_id] = action.ledger
      return nextstate
    case REMOVE_LEDGER:
    Object.values(nextstate2).map(stateitem =>
      {stateitem.id == action.ledgerId,
      delete nextstate[stateitem.product_id]
        })  
      return nextstate
    default:
      return oldstate
  }
}

export default ledgerReducer