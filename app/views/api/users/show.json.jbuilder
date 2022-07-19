
# create Key pair of carts
# json.carts do 
#   @user.carts.each do |cart|
#     json.set! cart.id do 
#       json.extract! cart.cartL
#       # cart.cartLedgers.each do |cart_item|
#       #   json.set! cart_item do
#       #       json.extract! cart_item, :id, :product_id, :quantity, :cart_id

#       end
#   end
# end


# json.cartId @user.carts.id

# json.banana do 
json.carts do 
  
  # do a conditional instead of fetching all of them all the time?  if?
  # it would be in users controller where you pull @active_carts
  # vs @current_cart
  json.set! "currentCart" do 
  # json.set! @user.carts.id do 
  @user.carts.cartLedgers 
    @user.carts.cartLedgers.each do |cart_item|
      json.set! cart_item.id do
        json.extract! cart_item, :id, :product_id, :quantity, :cart_id
        # json.partial! 'api/cart_ledger/cart_ledger', cart_ledger: cart_item
      end
    end


  end
end

json.partial! "api/users/user", user: @user