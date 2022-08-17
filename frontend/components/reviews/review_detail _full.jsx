import React from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { createReview, updateReview, deleteReview, requestReviews } from "../../actions/review_actions"

class ReviewFullDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructor props reviewdetail", this.props)
  }

  // this.handleQuantity = this.handleQuantity.bind(this)


  componentDidMount() {
    this.props.requestReviews()
    console.log("reviewdetail component did mount", this)
    // consider doing active record on index search
    // .where(product_id: params[:product_id])
    //This is kind of getting into searching territory
  }

  displayStars(num) {
    console.log("displaystars -- add symbols and remove this when complete")
    let output = []
    for (let index = 1; index < 5; index++) {
      if (num >= index) { output.push("fullstar") } else if ((num < index) && (num > index - 0.6)) { output.push("halfstar") } else if (num < index) { output.push("emptystar") }
    }
    return output
  }


  render() {
    const { reviews } = this.props

    if (!reviews) { return null } else {
      return (

        <div className="review-details-main">
          <hr />

          <div className="review-left-col">


          </div>

          <div className="review-right-col">

            <div className="review-images-all">
              <span className="reviews-with-images-header"><h1>Reviews with Images</h1> </span>
              placeholder for 4 image grid boxes
              <div className="review-images-small" > links to each review on clicking on image</div><div className="review-images-small" > links to each review on clicking on image</div><div className="review-images-small" > links to each review on clicking on image</div><div className="review-images-small" > links to each review on clicking on image</div>
              <a href="#" className="see-all-customer-images"> See All Customer images </a>
            </div>
            <div className="reviews-wordcloud">
              <span className="reviews-wordcloud-header"> Read Reviews that mention:</span>
              <span className="reviews-wordcloud-indi" >wordcloud sort by placeholder</span> <span className="reviews-wordcloud-indi" >wordcloud sort by placeholder</span> <span className="reviews-wordcloud-indi" >wordcloud sort by placeholder</span> <span className="reviews-wordcloud-indi" >wordcloud sort by placeholder</span> <span className="reviews-wordcloud-indi" >wordcloud sort by placeholder</span>
            </div>

            <div className="sort-by-dropdown">
              <select onChange={(e) => console.log("dropdown sort by most recent, or top rated")} className="dropdown" >
                <option value={1}>Top Reviews</option>
                <option value={2}>Most Recent</option>
              </select>
            </div>

            <div className="reviews-list">
              <h1>Reviews: </h1>

              {reviews.map(review =>
                <div className="individual-review">
                  <div className="individual-review-author-info"> <span className="individual-review-pfp" > default profile pic </span>  <div className="review-author-name"> {(review.review_author) ? (review.review_author) : ("AMZN Customer")}  </div> </div>

                  <div className="individual-review-header" ><span className="star-rating">{this.displayStars(review.rating)}</span>   {review.review_header} </div>
                  <div className="review-time">Reviewed on{review.updated_at} </div>
                  <div className="review-verified-purchase" > {(review.verified_purchase) ? ("Verified Purchase") : ("Unverified Customer")}  </div>

                </div>
              )}

              <hr />
            </div>

          </div>



          <span>below reviews</span>

        </div>
      )

    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  console: console.log("review details show state", state),
  console: console.log("review details show ownprops", ownProps),
  reviews: Object.values(state.entities.review)
  // cartId: state.session.cart

});

const mapDispatchToProps = dispatch => ({
  requestReviews: () => dispatch(requestReviews()),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (ledgerId) => dispatch(deleteReview(ledgerId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewFullDetail)