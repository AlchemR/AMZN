import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createReview } from "../../actions/review_actions";
import {requestProduct} from '../../actions/product_actions'
import ProductSingleCard from '../products/product_single_card'
import { Route } from "react-router-dom";
import { RiStarSFill } from 'react-icons/ri'

class CreateReview extends React.Component {
  constructor(props) {
    super(props)
    // console.log("create review constructor", this)

   if (!this.state) {this.state = {
      user_id: props.user.id,
      product_id: props.productId,
      review_header: '',
      review_body: '',
      review_author: props.user.account_fname,
      rating: 0,
      verified_purchase: true ,
      error_review_header: "Review Header Required",
      error_review_body: "Review Body Required" , 
      error_rating: "Review Rating Required" ,
      display_errors: false
      // verified purchase part would change in the future
    }}


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

componentDidMount(){
// console.log(this.state)
if (!this.props.product){ 
  this.props.requestProduct(this.props.productId)
} 
// }  else { this.props.requestProduct(this.props.product.id) }
// console.log("component did mount create review after after 2",this)

}



componentDidUpdate(prevProps){
// console.log("prevprops", prevProps.productId == this.props.productId)
// console.log("component did update", this.state)
  if (prevProps.productId !== this.props.productId) {  this.props.requestProduct(this.props.productId) } 
}

  handleSubmit = (e) =>{
    e.preventDefault()



    let errors = (this.state.error_review_header || this.state.error_review_body || this.state.error_rating)
    console.log("errors",errors)

    if (!errors) {  
      this.props.createReview(this.state).then(this.props.history.push(`/products/${this.props.productId}`) )
    } else { setTimeout(() => this.setState({ display_errors: true }, () => {  setTimeout(() => this.setState({ display_errors: false }), 10000) }) ) }
    
  }



  handleUpdate = (feild) => {
    return e => {
      this.setState({ [feild]: e.target.value }, () => {
        

          if (this.state.review_header.length > 1 ) { if (this.state.error_review_header) {this.setState({ error_review_header: false })} } else { this.setState({ error_review_header: "Review Header Required" }) }      
          if (this.state.review_body.length > 1) { if (this.state.error_review_body) { this.setState({ error_review_body: false }) } } else { this.setState({ error_review_body: "Review Body Required" }) }
          if (parseInt(this.state.rating) > 0) { if (this.state.error_rating) { this.setState({ error_rating: false }) } } else { this.setState({ error_rating: "Review Rating Required" }) }
      
      } )

    }
  }

  displayStars(){
    {
      return <div className="star-div">
      {[...Array(5)].map((star, idx) => { 
      let ratingValue = idx + 1
      let hover = null
          return (
            <RiStarSFill size={24} key={idx} className='star' color={ratingValue <= (hover || this.state.rating) ? "rgb(250,156,27)" : "lightgray"} onMouseEnter={(() => hover = ratingValue )} onMouseLeave={(() => hover = null )}
            onClick={() => this.setState({rating: ratingValue}, () => {if (parseInt(this.state.rating) > 0) { if (this.state.error_rating) { this.setState({ error_rating: false }) } } else { this.setState({ error_rating: "Review Rating Required" }) }}) } />
        )
      })}
    </div>
    }
  }

  render() {
    if (!this.props.product) { return null } else {
      // console.log("product create review",this.props.product)
    
      return (
        <div className="review-create-wrapper">
          <h1 className="review-header" >Item Reviewing:</h1>
        <div className="review-header-items">
          <div className="singlecard-constraint">
          <ProductSingleCard prod={this.props.product} />
          </div>

<div className="review-form">


          <h1 className="createreview-header">Create Review:</h1>

          <form className="review-create" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="review-header-form">
                  <div className='review-errors'>
                    {this.state.display_errors && this.state.error_review_header && <p>{this.state.error_review_header}</p>}
                  </div>
              <label className="review-header" >Review Header: <input className="review-header 1" type="text" value={this.state.review_header} onChange={this.handleUpdate('review_header') } /></label>
              </div>
            <div className="review-rating">
                  <div className='review-errors'>
                    {this.state.display_errors && this.state.error_rating && <p>{this.state.error_rating}</p>}
                  </div>
            {/* <label>Rating: {this.displayStars(this.state.rating)}</label>  */}
                  <div className="rating-stars"> <label className="rating-const" >Rating {this.state.rating} / 5 : {this.displayStars()}</label> </div>
            {/* <input type="text" onChange={this.handleUpdate('rating')} value={this.state.rating} placeholder="5" /> */}
            </div>
            <div className="review-body">
                  <div className='review-errors'>
                    {this.state.display_errors && this.state.error_review_body && <p>{this.state.error_review_body}</p>}
                  </div>
            <input className="review-body-box"  type="textarea" onChange={this.handleUpdate('review_body')} value={this.state.review_body} placeholder="Review body goes here" />
            </div>
            <input type="submit" value="Submit Review!" onClick={(e) => this.handleSubmit(e)} />
          </form>
        </div>

        </div>
        </div>

      )
    }
  }

}


const mapStateToProps = (state, ownProps) => {
//  console.log("MSTP, ",state.entities.products[ownProps.match.params.productId])

 return {
  //  console: console.log("create review show state", state),
  //  console: console.log("create review show ownprops", ownProps),
   product: state.entities.products[ownProps.match.params.productId],
   user: state.entities.users[state.session.id],
   productId: parseInt(ownProps.match.params.productId)
}
};


const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  requestProduct: (id) => dispatch(requestProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)