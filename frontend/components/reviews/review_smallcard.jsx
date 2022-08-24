import React from "react"
import EditReview from "./edit_review"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

class ReviewSmallCard extends React.Component{
  constructor(props){
  super(props)

  // console.log("reviewsmallcard", this.props)
    this.state = { displayConfirm: false, displayEdit: false, helpful: false, abuse: false }

    this.toggleDelete = this.toggleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleHelpful = this.toggleHelpful.bind(this);
    this.reportAbuse = this.reportAbuse.bind(this);

}


  reportAbuse() {
    (this.state.abuse) ? (this.setState({ abuse: false })) : (this.setState({ abuse: true }), setTimeout(() => this.reportAbuse(), 2000))
  }

  toggleHelpful() {
    (this.state.helpful) ? (this.setState({ helpful: false })) : (this.setState({ helpful: true }), setTimeout(() => this.toggleHelpful(), 2000))
  }


  displayStars(num) {
    let output = []
    for (let index = 1; index < 6; index++) {
      if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
      // else if (num < index && num > index - 0.6) { output.push("halfstar") }
    }
    return output
  }

  // toggle(feild){
  //    ({this.state.[feild]}) ? { this.setState({[feild]: false}) } : { this.setState({[feild]: true})  
  // }

  toggleDelete() {
    (this.state.displayConfirm) ? (this.setState({ displayConfirm: false })) : (this.setState({ displayConfirm: true }))
  }

  toggleEdit() {
    (this.state.displayEdit) ? (this.setState({ displayEdit: false })) : (this.setState({ displayEdit: true }))
  }


  displayEditButtons(review) {
    // console.log("display edit buttons",review, "this.props.currentuser", this.props.currentUser)
    if (this.props.currentUser == review.user_id)

      return <div className="button-edit-delete-container"> <button className="review-edit" onClick={() => this.props.history.push(`/products/${this.props.review.product_id}/editreview/${this.props.review.id}`)}> Edit Review</button> <button onClick={() => this.toggleDelete()} >{(this.state.displayConfirm) ? "Are you Sure?" : "Delete Review"} </button> {(this.state.displayConfirm) ? <button onClick={() => this.props.deleteReview(review.id)}>Confirm Delete</button> : null}  </div>
    else
      return null

  }


render(){
  const {review} = this.props
  // console.log("review smallcard props line 73 -- smallcard getting mapped over", this.props)

  if (!review) { return null } else {
return( 
  <div className="individual-review" key={review.id} >
    <div className="individual-review-author-info"> <span className="individual-review-pfp" > <img src={window.default_profile} alt="default pfp" /> </span>  <div className="review-author-name"> Reviewed by: {(review.review_author) ? (review.review_author) : ("AMZN Customer")}  </div> </div>
    {/* <div className="individual-review-author-info"> <span className="individual-review-pfp" > <img src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/defaultCR0010241024SX48jpg" alt="default pfp" /> </span>  <div className="review-author-name"> {(review.review_author) ? (review.review_author) : ("AMZN Customer")}  </div> </div> */}
    

    <div className="individual-review-header" ><span className="star-rating">{this.displayStars(review.rating)}</span>   {review.review_header} </div>

    {/* {console.log("review",review)} */}

    <div className="review-time">Reviewed on: {new Date(review.updated_at).toDateString()}</div>
    <div className="review-verified-purchase" > {(review.verified_purchase) ? ("Verified Purchase") : ("Unverified Customer")}  </div>
    <div className="individual-review-body">{review.review_body}</div>
    {/* {let review.id.abuse = false} */}
    <div className="helpful-buttons"> <button className="helpful-button-helpful" onClick={() => this.toggleHelpful()} > Helpful </button> | <button className="helpful-button-report" onClick={() => this.reportAbuse} >report abuse</button> </div> <div> {(this.state.helpful) ? "marked as helpful!" : null} {(this.state.abuse) ? "marked as abuse" : null}  </div>
    <div className="review-edit-delete"> {this.displayEditButtons(review)} </div>

  </div>

)}
}

}

export default withRouter(ReviewSmallCard)