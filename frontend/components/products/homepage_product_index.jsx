import React from "react"
import { connect } from "react-redux"
import { requestProduct } from "../../actions/product_actions"
import { Link } from "react-router-dom"

class HomePageProduct extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {totalrating: 0, count: 0 }
  }


  componentDidMount(){
    console.log("do we hit here on update")
    this.props.requestProduct(1) 
  }

  displayStars(num) {
    let output = []
    for (let index = 1; index < 6; index++) {
      if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
      // else if (num < index && num > index - 0.6) { output.push("halfstar") }
    }
    return output
  }

  render() {

    console.log(this.props)
    const { product } = this.props
    // if (product) {Object.values(product.reviews).map(review => this.setState({firstrating: review.rating})) }
    if (!product) {return null} else{
    return (

      <div className="innercard">
        <div className="imagetop">
          <h1>Featured Product For You:</h1>
          <br />

        <Link to={`/products/1`}>
          {/* <img src="https://m.media-amazon.com/images/I/71jFn3LK0-L._AC_UL1500_.jpg" className="single-card-image" /> */}
          <img src={product.photoUrl} className="single-card-image" />
        </Link>
        </div>
        <Link to={`/products/1`}>
        <div className="details" >
          <div className="details title" >{(product.title.length > 60) ? product.title.substring(0, 60) + `....` : product.title}</div>
          {console.log(product)}
          <div className="in-stock-details-card"> {(product.inventory_count) ? "In Stock" : "Out of Stock"} </div>
          {/* <div className="in-stock-details-card"> {(product.in_stock) ? "In Stock" : "Out of Stock" } </div> */}
          {/* <div className="details-rating" >{this.state.firstrating}</div> */}
          <h3> <span className="star-rating"> {this.displayStars(product.reviews_avg)}</span> {product.reviews_avg} / 5 </h3>
          {/* {averagerating.toFixed(1)}  */}
          <div className="details price" >{product.price}</div>
          <div className="primeshipping-singlecard"> <img className="primeshipping-singlecard" src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/Screen+Shot+2022-07-22+at+2.28.40+AM.png" alt="prime shipping" /> </div>
        </div>
        </Link>


      </div>
    )
  }
  }
}





const mapStateToProps = (state, ownProps) => ({
  console: console.log("product details show", state, ownProps),
  product: state.entities.products[1],
  // tempcart: Object.values(state.entities.cart),
  // cartId: state.session.cart

});

const mapDispatchToProps = dispatch => ({
  requestProduct: id => dispatch(requestProduct(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePageProduct)