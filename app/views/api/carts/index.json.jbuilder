# have to make an association in the carts to cart_ledgers models to make this work

  @carts.cartLedgers.each do |cart_item|
  json.set! cart_item do
     json.extract! cart_item, :id, :product_id, :quantity, :cart_id
    #  cart item should have same feilds as cart_ledger_item

  end
end

# this is looking through the entire transaction history of everyone.  
# Maybe should not be permissible except for admin
# Instead maybe user transaction history is
# @carts.where(cart.user.id == user.id)


