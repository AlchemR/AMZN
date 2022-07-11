# Backend Routes

## HTML
+ `GET /` - `StaticPagesController#root`


## API Endpoints 

### `users`

+ `GET /api/users` - returns the user information of current cart (saved for later, transaction history)
+ `POST /api/users` - sign up. (create)

### `session`

+ `POST /api/session` - log in
+ `DELETE /api/session` - log out


### `cart_items`

+ `GET api/cart_items`  — get index page
+ `POST api/cart_items` — add cart item
+ `GET api/cart_items` — display cart
+ `DELETE api/cart_items` — delete item from cart


### `items`

+ `GET api/items` — get index page listing many items
+  ( `GET api/items` — get individual item page) (tentative same route — may be handled by different reducer)
