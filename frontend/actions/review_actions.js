import * as ReviewAPIUtils from '../util/review_util'


export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"

const receiveReviews = (reviews) => {
  return { type: RECEIVE_REVIEWS, reviews: reviews }
}

const receiveReview = (review) => {
  return { type: RECEIVE_REVIEW, review: review }
}

const removeReview = (reviewId) => {
  return { type: REMOVE_REVIEW, reviewId: reviewId }
}



export const requestReviews = (data) => dispatch => {
  return ReviewAPIUtils.fetchReviews(data).then(reviews => dispatch(receiveReviews(reviews)))
}

export const requestReview = id => dispatch => {
  return ReviewAPIUtils.fetchReview(id).then(review => dispatch(receiveReview(review)))
}

export const createReview = data => dispatch => {
  return ReviewAPIUtils.createReview(data).then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
  return ReviewAPIUtils.updateReview(review).then(review => dispatch(receiveReview(review)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewAPIUtils.deleteReview(reviewId).then(() => dispatch(removeReview(reviewId)))
}

