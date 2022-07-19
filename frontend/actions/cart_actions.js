import * as CartAPIUtils from '../util/cart_util'

export const RECEIVE_CARTS = "RECEIVE_CARTS"
export const RECEIVE_CART = "RECEIVE_CART"

const receiveCarts = (carts) => {
  return {type: RECEIVE_CARTS, carts: carts}
}

const receiveCart = (cart) =>{
  return {type: RECEIVE_CART, cart: cart }
}

export const requestCarts = data => dispatch => {
  return CartAPIUtils.fetchCarts(data).then(carts => dispatch(receiveCarts(carts)))
}

export const requestCart = id => dispatch => {
  return CartAPIUtils.fetchCart(id).then(cart => dispatch(receiveCart(cart)))
}

export const createCart = cart => dispatch => {
  return CartAPIUtils.createCart(cart).then(cart => dispatch(receiveCart(cart)))
}

