
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
json.currentCart do 

  # do a conditional instead of fetching all of them all the time?  if?
  # it would be in users controller where you pull @active_carts
  # vs @current_cart
# debugger
  json.currentCartCount @user.carts.cartCount
  # json.currentCartCount @user.carts.cartCount()

# I dont think I need to do it this way -- it is better to get the cartcount on login using the above method instead of iterating through and doing math in the jbuilder

  # @user.carts.cartLedgers 
  #   @user.carts.cartLedgers.each do |cart_item|
  #     json.set! cart_item.id do
  #       json.extract! cart_item, :id, :product_id, :quantity, :cart_id
  #     end
  #   end


  end


json.partial! "api/users/user", user: @user