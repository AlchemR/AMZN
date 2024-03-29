import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_actions";

const productReducer = (oldstate = {}, action ) =>{
  Object.freeze(oldstate)
  let nextState = Object.assign({}, oldstate)
// console.log("Products reducer action",action)
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products
      
      case RECEIVE_PRODUCT:
        nextState[action.product.id] = action.product
        return nextState
    default:
      return oldstate
  }
}

export default productReducer