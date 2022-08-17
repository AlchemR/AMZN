import { RECEIVE_PRODUCT } from '../actions/product_actions'
import {RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions'

const reviewReducer = (state = [], action ) => {
Object.freeze(state)
const nextstate = Object.assign({}, state)
  console.log("review_reducer action", action)
switch (action.type) {

  case RECEIVE_REVIEWS:
    return action.reviews
  case RECEIVE_REVIEW:
    nextstate[action.review.id] = action.review
    return action.review

  case REMOVE_REVIEW:
    console.log("reviewReducer remove review", action)
    return action.reviews
  // case RECEIVE_PRODUCT:
  // return Object.assign({}, action.product.review)
  default:
    return state
}


}


export default reviewReducer