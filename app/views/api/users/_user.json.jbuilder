json.extract! user, :id, :email, :account_fname, :username
# json.extract! user, :id, :email, :account_fname, :username, :carts
json.currentUser user.id
json.currentCart user.carts.id

# it is more efficent to use the method through association than iterate in the jbuilder file
# count = 0
# user.carts.cartLedgers.each do |ledger|
#   count += ledger.quantity
# end

# json.cartItems count
json.cartItems user.carts.cartCount