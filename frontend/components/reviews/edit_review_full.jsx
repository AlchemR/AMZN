import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createReview } from "../../actions/review_actions";
import { requestProduct } from '../../actions/product_actions'
import ProductSingleCard from '../products/product_single_card'
import { Route } from "react-router-dom";

class EditReviewFull extends React.Component {
  constructor(props) {
    super(props)
    console.log("create review constructor", this)

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


    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);

  }

  componentDidMount() {
    // console.log(this.state)
    // if (!this.props.review) {
    //   this.props.requestProduct(this.props.productId)
    // } else { this.props.requestProduct(this.props.product.id) }
    // console.log("component did mount create review after after 2", this)

  }



  componentDidUpdate(prevProps) {
    // console.log("prevprops", prevProps)
    // if (prevProps.productId !== this.props.productId) { this.props.requestProduct(this.props.productId) }
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    // let reviewCreate = Object.assign({}, this.state)
    // this.props.updateReview(reviewCreate).then(this.props.history.push(`/products/${this.props.productId}`))
  }



  handleUpdate = (feild) => {
    // return e => this.setState({ [feild]: e.target.value }, () => console.log(this.state))
  }

  displayStars(num) {
    // let output = []
    // for (let index = 1; index < 6; index++) {
    //   if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
    //   // else if (num < index && num > index - 0.6) { output.push("halfstar") }
    // }
    // return output
  }

  render() {
  //   if (!this.props.product) { return null } else {
  //     console.log("product create review", this.props.product)
  //     return (
  //       <div className="review-create-wrapper">
  //         <h1 className="review-header" >Item Reviewing:</h1>
  //         <div className="review-header-items">
  //           <div className="singlecard-constraint">
  //             <ProductSingleCard prod={this.props.product} />
  //           </div>

  //           <div className="review-form">


  //             <h1 className="createreview-header">Create Review:</h1>


  //             <form className="review-create" onSubmit={this.handleSubmit}>
  //               <div className="review-header-form">
  //                 <label className="review-header" >Review Header: <input className="review-header 1" type="text" value={this.state.review_header} onChange={this.handleUpdate('review_header')} /></label>
  //               </div>
  //               <div className="review-rating">
  //                 <label>Rating: {this.displayStars(this.state.rating)}</label>
  //                 <input type="text" onChange={this.handleUpdate('rating')} value={this.state.rating} placeholder="5" />
  //               </div>
  //               <div className="review-body">
  //                 <input className="review-body-box" type="textarea" onChange={this.handleUpdate('review_body')} value={this.state.review_body} placeholder="Review body goes here" />
  //               </div>
  //               <input type="submit" value="Submit Review!" onClick={this.handleSubmit} />
  //             </form>
  //           </div>

  //         </div>
  //       </div>

  //     )
  //   }
  }

}


const mapStateToProps = (state, ownProps) => {
  console.log("MSTP, ", state.entities.products[ownProps.match.params.productId])
  console.log("MSTP,State ", state)
  console.log("MSTP, ownprops ", ownProps)

  return {
    console: console.log("create review show state", state),
    console: console.log("create review show ownprops", ownProps),
    product: state.entities.products[ownProps.match.params.productId],
    user: state.entities.users[state.session.id],
    productId: parseInt(ownProps.match.params.productId)
  }
};


const mapDispatchToProps = dispatch => ({
  updateReview: (review) => dispatch(updateReview(review)),
  requestProduct: (id) => dispatch(requestProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewFull)