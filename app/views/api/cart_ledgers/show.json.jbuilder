# json.partial! 'api/cart_ledger/cart_ledger'

json.extract! @cart_ledger, :product_id, :quantity, :cart_id, :id
json.extract! @cart_ledger.product, :title, :price
json.ledgerCount @cart_ledger.cart.cartCount