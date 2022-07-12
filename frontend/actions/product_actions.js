import * as ProductAPIUtils from '../util/products_util'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

const receiveProducts = products => {
  return {type: RECEIVE_PRODUCTS, products: products}
}

const receiveProduct = product => {
  return {type: RECEIVE_PRODUCT, product: product}
}
window.requestproducts = requestProducts
export const requestProducts = data => dispatch => {
  return ProductAPIUtils.fetchProducts(data).then(products => dispatch(receiveProducts(products))) 
}


// export const requestProduct = data => dispatch => {
//   return ProductAPIUtils.fetchProduct(data)
// }

// maybe it's  ID instead of data?
// maybe that makes the controller show by ID, params[:id]
