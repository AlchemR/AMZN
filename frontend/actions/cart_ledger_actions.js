import * as LedgerAPIUtils from '../util/cart_ledger_util'

export const RECEIVE_LEDGERS = "RECEIVE_LEDGERS"
export const RECEIVE_LEDGER = "RECEIVE_LEDGER"
export const REMOVE_LEDGER = "REMOVE_LEDGER"

const receiveLedgers = (ledgers) => {
  return { type: RECEIVE_LEDGERS, ledgers: ledgers }
}

const receiveLedger = (ledger) => {
  return { type: RECEIVE_LEDGER, ledger: ledger }
}
const removeLedger = (ledgerId) => {
  return {type: REMOVE_LEDGER, ledgerId: ledgerId}
}



export const requestLedgers = data => dispatch => {
  return LedgerAPIUtils.fetchLedgers(data).then(ledgers => dispatch(receiveLedgers(ledgers)))
}

export const requestLedger = id => dispatch => {
  // console.log("do we hit here on submit")
  return LedgerAPIUtils.fetchLedger(id).then(ledger => dispatch(receiveLedger(ledger)))
}

export const createLedger = data => dispatch =>{
  return LedgerAPIUtils.createLedger(data).then(ledger => dispatch(receiveLedger(ledger)))
}

export const updateLedger = ledger => dispatch =>{
  // console.log("do we hit ledger actions before error")
  // console.log("do we hit ledger actions before error", ledger)
  return LedgerAPIUtils.updateLedger(ledger).then(ledger => dispatch(receiveLedger(ledger)))
}

export const deleteLedger = ledgerId => dispatch =>{
  return LedgerAPIUtils.deleteLedger(ledgerId).then( () => dispatch(removeLedger(ledgerId)))
}

