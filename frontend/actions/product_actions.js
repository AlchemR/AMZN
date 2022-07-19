import * as ProductAPIUtils from '../util/products_util'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

const receiveProducts = products => {
  return {type: RECEIVE_PRODUCTS, products: products}
}

const receiveProduct = product => {
  return {type: RECEIVE_PRODUCT, product: product}
}

export const requestProducts = data => dispatch => {
  return ProductAPIUtils.fetchProducts(data).then(products => dispatch(receiveProducts(products))) 
}

export const requestProduct = id => dispatch => {
  // console.log("do we hit here on submit")
  return ProductAPIUtils.fetchProduct(id).then(product => dispatch(receiveProduct(product)))
}
