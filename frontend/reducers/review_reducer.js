import { RECEIVE_PRODUCT } from '../actions/product_actions'
import {RECEIVE_REVIEW, REMOVE_REVIEW, RECEIVE_REVIEWS } from '../actions/review_actions'

const reviewReducer = (state = {}, action ) => {
  Object.freeze(state)
  const nextstate = Object.assign({}, state)
  // console.log("review_reducer state", state)
  // console.log("review_reducer action", action)
switch (action.type) {

  case RECEIVE_REVIEWS:
    return action.reviews
  case RECEIVE_REVIEW:
    // console.log("nextstate before", nextstate)

    nextstate[action.review.id] = action.review[action.review.id]
    // console.log("nextstate after", nextstate)
    return nextstate

  case REMOVE_REVIEW:
//I think i can get away with this because of how I defined reviews in the controller, and returned the index json that omits it
// that makes it so that I don't have to muck around with slicing the current state
    return action.reviews
  // case RECEIVE_PRODUCT:
  // return Object.assign({}, action.product.review)
  default:
    return state
}


}


export default reviewReducer