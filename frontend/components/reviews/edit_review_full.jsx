import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createReview } from "../../actions/review_actions";
import { requestProduct } from '../../actions/product_actions'

class CreateReview extends React.Component {
  constructor(props) {
    super(props)
    console.log("create review constructor", this)
    debugger
    this.state = {
      user_id: props.user.id,
      product_id: props.productId,
      review_header: '',
      review_body: '',
      review_author: props.user.account_fname,
      rating: 0,
      verified_purchase: true
    }


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }

  componentDidMount() {
    // console.log(this.state)

    console.log("component did mount create review", this)
    if (!this.props.product) {
      this.props.requestProduct(this.props.productId)
    } else { this.props.requestProduct(this.props.product.id) }
    // .then(() => this.setState({
    //   user_id: this.props.user.id,
    //   product_id: this.props.product.id,
    //   review_header: '',
    //   review_body: '',
    //   review_author: this.props.user.account_fname,
    //   rating: 0,
    //   verified_purchase: true
    // }), console.log("do we hit here componentdidmount", this.state), 
    // )
    console.log("component did mount create review after after 2", this)

    // use ownprops to get product id
    // mapstate to props will have state of current user
    // console.log("redirect hit?")
    // setTimeout( () => <Redirect to={`/products/${this.props.match.params.productId}`}/>, 2000 )

    //<Redirect to={`/products/${this.props.match.params.productId}`}/>

  }

  componentDidUpdate(prevProps) {
    console.log("prevprops", prevProps)
    if (prevProps.productId !== this.props.productId) { this.props.requestProduct(this.props.productId) }
  }

  handleSubmit(e) {
    e.preventDefault()
    let reviewUpdate = Object.assign({}, this.state)
    this.props.createReview(reviewUpdate)
  }



  handleUpdate = (feild) => {
    return e => this.setState({ [feild]: e.currentTarget.value })
  }

  render() {
    console.log("review render", this)
    // this.forceUpdate()
    console.log("review render", this)
    if (!this.props.product) { return null } else {
      return (
        <div>

          placeholder for review form feilds

          <form onSubmit={this.handleSubmit}>
            {console.log(this)}
            <label>Review Header<input type="text" value={this.state.review_header} onChange={this.handleUpdate('review_header')} /></label>
            <label>Rating: </label>
            <input type="text" value={this.state.rating} onChange={this.handleUpdate('rating')} placeholder="5" />
            <input type="textarea" value={this.state.review_body} onChange={this.handleUpdate('review_body')} placeholder="Review body goes here" />

            {/* review_author */}
            {/* user_id */}
            {/* product_id */}
            {/* verified purchase (true default -- to be modified at later date) */}

            <input type="submit" value="Submit Review!" />
          </form>

        </div>
      )
    }
  }

}


const mapStateToProps = (state, ownProps) => {
  console.log("MSTP, ", state.entities.products[ownProps.match.params.productId])

  return {
    console: console.log("create review show state", state),
    console: console.log("create review show ownprops", ownProps),
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