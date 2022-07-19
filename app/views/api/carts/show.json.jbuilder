  # @cart.cart_ledgers.each do |cart_item|

#   @cart.cartLedgers.each do |cart_item|
#   json.set! cart_item.id do
#      json.extract! cart_item, :id, :product_id, :quantity, :cart_id
#   end
# end
  total = 0
  @cart_items.each do |cart_item|
    json.set! cart_item.product_id do
    total += cart_item.quantity
     json.extract! cart_item, :id, :product_id, :quantity, :cart_id
     json.extract! cart_item.product, :title, :price
    #  can pull like in line 12, through associations in the model files
  end
end
json.cartCount total

# maybe check if userid matches the cart_user_id?