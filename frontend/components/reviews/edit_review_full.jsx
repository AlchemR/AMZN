import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createReview, requestReview, updateReview } from "../../actions/review_actions";
import { requestProduct } from '../../actions/product_actions'
import ProductSingleCard from '../products/product_single_card'
import { Route } from "react-router-dom";
import { RiStarSFill } from 'react-icons/ri'


class EditReviewFull extends React.Component {
  constructor(props) {
    super(props)
    // console.log("edit review constructor", this)
    // if (!this.state) {
    //   this.state = {
    //     user_id: props.user.id,
    //     product_id: props.productId,
    //     review_header: '',
    //     review_body: '',
    //     review_author: props.user.account_fname,
    //     rating: 0,
    //     verified_purchase: true
    //     // this would change in the future
      // }
    // }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    // this.timeoutCount = this.timeoutCount.bind(this)

  }

  // async timeoutCount() {
  //   for (let index = 0; index < 10; index++) {
  //     await this.timeout(100)
  //     console.log(`timeout # ${index}`)
  //   }
  // }

  // timeout(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms))
  // }

  componentDidMount() {
    // console.log(this.state)      
    this.props.requestReview(this.props.reviewId)
    this.props.requestProduct(this.props.productId)
    // this.timeoutCount()
    // console.log("component did mount edit review after after mount", this)
  }

  componentDidUpdate() {
    // console.log("when does component did update hit?", this.props),
    // console.log("when does component did update hit this state?", this.state)

    if (!this.state && this.props.review) { 
      const {id, product_id, rating, review_author, review_body, review_header, user_id, verified_purchase } = this.props.review
      this.setState({ id, product_id, rating, review_author, review_body, review_header, user_id, verified_purchase, error_review_header: false, error_review_body: false, error_rating: false, display_errors: false })
    }

  }

  handleSubmit = (e) => {
    e.preventDefault()
    let errors = (this.state.error_review_header || this.state.error_review_body || this.state.error_rating)
if (!errors) {
  this.props.updateReview(this.state).then(this.props.history.push(`/products/${this.props.productId}`) )
} else { setTimeout(() => this.setState({ display_errors: true }, () => { console.log("first timeout", this.state), setTimeout(() => this.setState({ display_errors: false, console: console.log("set display errors to false") }), 10000) })) }

  }



  handleUpdate = (feild) => {
    return e => {this.setState({ [feild]: e.target.value }, () => {
      if (this.state.review_header.length > 1) { if (this.state.error_review_header) { this.setState({ error_review_header: false }) } } else { this.setState({ error_review_header: "Review Header Required" }) }
      if (this.state.review_body.length > 1) { if (this.state.error_review_body) { this.setState({ error_review_body: false }) } } else { this.setState({ error_review_body: "Review Body Required" }) }
      if (parseInt(this.state.rating) > 0) { if (this.state.error_rating) { this.setState({ error_rating: false }) } } else { this.setState({ error_rating: "Review Rating Required" }) }
    }
      
      )}
  }

  // displayStars(num) {
  //   let output = []
  //   for (let index = 1; index < 6; index++) {
  //     if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
  //     // else if (num < index && num > index - 0.6) { output.push("halfstar") }
  //   }
  //   return output
  // }

  displayStars() {
    {
      return <div className="star-div" >
        {[...Array(5)].map((star, idx) => {
          let ratingValue = idx + 1
          let hover = null
          return (
            <RiStarSFill size={24} key={idx} className='star' color={ratingValue <= (hover || this.state.rating) ? "rgb(250,156,27)" : "lightgray"} onMouseEnter={(() => hover = ratingValue)} onMouseLeave={(() => hover = null)}
              onClick={() => this.setState({ rating: ratingValue }, () => { if (parseInt(this.state.rating) > 0) { if (this.state.error_rating) { this.setState({ error_rating: false }) } } else { this.setState({ error_rating: "Review Rating Required" }) } })}
            />
          )
        })}
      </div>
    }
  }

  render() {

    if (this.props.product && this.props.review && this.state) {
      return (
        <div className="review-create-wrapper">
          <h1 className="review-header" >Item Reviewing:</h1>
          <div className="review-header-items">
            <div className="singlecard-constraint">
              <ProductSingleCard prod={this.props.product} />
            </div>

            <div className="review-form">


              <h1 className="createreview-header">Update Review: </h1>


              <form className="review-create" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="review-header-form">
                  <div className='review-errors'>
                    {this.state.display_errors && this.state.error_review_header && <p>{this.state.error_review_header}</p>}
                  </div>
                  <label className="review-header" >Review Header: <input className="review-header 1" type="text" value={this.state.review_header} onChange={this.handleUpdate('review_header')} /></label>
                </div>
                <div className="review-rating">
                  <div className='review-errors'>
                    {this.state.display_errors && this.state.error_rating && <p>{this.state.error_rating}</p> }
                  </div>
                  <label className="rating-const">Rating {this.state.rating} / 5 : {this.displayStars(this.state.rating)}</label>
                  {/* <input type="text" onChange={this.handleUpdate('rating')} value={this.state.rating} placeholder="5" /> */}
                </div>
                <div className="review-body">
                  <div className='review-errors'>
                    {this.state.display_errors && this.state.error_review_body && <p>{this.state.error_review_body}</p>}
                  </div>
                  <input className="review-body-box" type="textarea" onChange={this.handleUpdate('review_body')} value={this.state.review_body} placeholder="Review body goes here" />
                </div>
                <input type="submit" value="Submit Review!" onClick={(e) => this.handleSubmit(e)} />
              </form>
            </div>

          </div>
        </div>

      )} else {return null}
    }
  }

// }


const mapStateToProps = (state, ownProps) => {
  // console.log("MSTP,State ", state),
  // console.log("MSTP, ownprops ", ownProps)

  return {
    user: state.entities.users[state.session.id],
    productId: ownProps.match.params.productId,
    reviewId: ownProps.match.params.id,
    // review: (state.entities.review[ownProps.match.params.id]) ? state.entities.review[ownProps.match.params.id] : undefined,
    review: state.entities.review[ownProps.match.params.id],
    product: state.entities.products[ownProps.match.params.productId],
    sessionCurrentUser: state.session.currentUser
  }
};


const mapDispatchToProps = dispatch => ({
  updateReview: (review) => dispatch(updateReview(review)),
  requestProduct: (id) => dispatch(requestProduct(id)),
  requestReview: (id) => dispatch(requestReview(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewFull)