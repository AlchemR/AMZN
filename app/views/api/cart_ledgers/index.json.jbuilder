@cart_ledgers.each do |cart_ledger|
  json.set! cart_ledger.id do
    # json.partial! 'api/cart_ledger/cart_ledger', cart_ledger: cart_ledger
    json.extract! cart_ledger, :id, :product_id, :quantity, :cart_id
  end

end