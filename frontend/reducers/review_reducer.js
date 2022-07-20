import { RECEIVE_PRODUCT } from '../actions/product_actions'
import {RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions'

const reviewReducer = (state = [], action ) => {
Object.freeze(state)
const nextstate = Object.assign({}, state)
switch (action.type) {

  case RECEIVE_REVIEWS:
    return action.reviews
  case RECEIVE_REVIEW:
    nextstate[action.review.id] = action.review
    return action.review
  case REMOVE_REVIEW:
    delete nextstate[action.reviewId]
    return nextstate
  case RECEIVE_PRODUCT:
  return Object.assign({}, action.product.review)
  default:
    return state
}


}


export default reviewReducer