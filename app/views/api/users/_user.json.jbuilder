json.extract! user, :id, :email, :account_fname, :username
# json.extract! user, :id, :email, :account_fname, :username, :carts
json.currentUser user.id
json.currentCart user.carts.id

count = 0
user.carts.cartLedgers.each do |ledger|
  count += ledger.quantity
  print count
end

json.cartItems count