export const fetchLedgers = () => {
  return $.ajax({
    method: "GET",
    url: '/api/cart_ledgers'
  })
}


export const fetchLedger = ledgerId => {
  return $.ajax({
    method: "GET",
    url: `/api/cart_ledgers/${ledgerId}`
  })
}

export const createLedger = cart_ledger => {
  return $.ajax({
    method: "POST",
    url: '/api/cart_ledgers',
    data: {cart_ledger}
  })
}

export const updateLedger = cart_ledger => {
  console.log("do we hit utils before error")
  return $.ajax ({
    method: "PATCH",
    url: `/api/cart_ledgers/${cart_ledger.id}`,
    data: { cart_ledger }
  })
}

export const deleteLedger = ledgerId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/cart_ledgers/${ledgerId}`
  }) 
}