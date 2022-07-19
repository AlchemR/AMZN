import React from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { requestProduct } from "../../actions/product_actions"
import { createLedger, updateLedger } from "../../actions/cart_ledger_actions"
import { requestCart } from '../../actions/cart_actions'

class ProductShowDetails extends React.Component {
  constructor(props){
    super(props)
if (this.props.product) {this.state = {
      product_id: this.props.product.id,
      quantity: 1,
      cart_id: this.props.cartId }
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    // this.handleQuantity = this.handleQuantity.bind(this)
  }

  componentDidMount(){
    this.props.requestProduct(this.props.match.params.id)

  }

    handleAddToCart = (itemID, cartID, product) => e => {
      e.preventDefault()
      let productexists = false
      let tempnum = 0

      for (let index = 0; index < this.props.tempcart.length; index++) {
        if (this.props.tempcart[index].product_id == itemID) { productexists = true, tempnum = this.props.tempcart[index].quantity }
      }
      console.log("product", product)
      console.log("quantity typeof", typeof tempnum)
      if (productexists) { this.props.updateLedger({ product_id: itemID, quantity: tempnum + this.state.quantity, cart_id: cartID, id: product.id }).then(() => setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 10)) } else { this.props.createLedger({ product_id: itemID, quantity: this.state.quantity, cart_id: cartID }).then(setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 10)) }
      console.log("handle add to cart",this.state)
      // this.props.createLedger({ product_id: itemID, quantity: this.state.quantity, cart_id: cartID }).then(this.props.requestCart(cartID))
    }

    handleQuantity = (e) => {
      e.preventDefault() 

      return this.setState({quantity: parseInt(e.target.value) })
    // console.log("e",e)
    // console.log("etargervalue",e.target.value)
    }

  render(){
    const {product, cartId} = this.props 
    if (!product) {return null} else {
    return(
      
    <div className="product-details-main">
        <div className="history-nav"> 
          <NavLink to={'/products'}> <span onClick={console.log("goback")} > {"<"} {/* placeholder for arrow icons */} back to results</span></NavLink>
          
          <span>"sponsored"</span>
        </div>
        <hr />
      <div className="product-container">
       <div className="image-left-col">
            <div className="detailed-imagetop"> <img src="https://m.media-amazon.com/images/I/81Fpec4E0zL._AC_SL1500_.jpg" className="detailed-view-image" /> </div>
         <div className="image-instruction"> roll over image to zoom in </div>
            <div className="images-array"> <div className="subgrid"> (placeholder) 8x8 grid </div><div className="subgrid"> (placeholder) 8x8 grid </div><div className="subgrid"> (placeholder) 8x8 grid </div><div className="subgrid"> (placeholder) 8x8 grid </div> </div>
          </div>
        <div className="details-center-col">
            <div className="details-title" > {product.title} </div>
            <div className="seller blue-text" > visit seller store</div>
            <hr />
            <div className="details-rating"> 
              <span className="rating-start"> | </span> <span className="ratings-redirect blue-text">placeholder for redirect</span></div>
             
             <div className="details-price" > $ {product.price} </div>
              <div className="details-options"> placeholder for buttons of options </div>
            <div className="details-description" > {product.description} </div>
            <div className="details-descriptive" > {product.detailed_description} </div>
           </div>

          <div className="checkout-right-col">
          <div className="checkout-delivery"> Order within X hours </div>
          <div className="in-stock"> in stock </div>

          <div className="qty-dropdown">
  
  {console.log("detailshow",product)}

              <form onSubmit={this.handleAddToCart(product.id, cartId, product)} >
              {/* <select id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleQuantity} className="dropdown" > */}
              <select onChange={(e) => this.handleQuantity(e)}  className="dropdown" >
                  <option value={1}>Qty: 1</option>
                  <option value={2}>Qty: 2</option>
                  <option value={3}>Qty: 3</option>
                  <option value={4}>Qty: 4</option>
                  <option value={5}>Qty: 5</option>
                  <option value={6}>Qty: 6</option>
                  <option value={7}>Qty: 7</option>
                  <option value={8}>Qty: 8</option>
                  <option value={9}>Qty: 9</option>

            </select>
            <button type="submit" className="add-to-cart" >Add to Cart</button>
              </form>
          </div>
          <div className="checkout-buttons">
            <button className="buy-now" onClick={() => console.log("onwards to the hypothetical checkout page!")}>Buy Now</button>
          </div>
          <div className="secure" >secure transaction</div>
          <div className="returns"> return policy</div>
          <div className="protection-plan"> if applicable, checkboxes for "insurance"</div>
          <button>Add to Saved-for-later List</button>
          </div>

         </div>
        
    </div>
      )
    }
  }

}

const mapStateToProps = (state, ownProps) => ({
  console: console.log("product details show", state, ownProps),
  product: state.entities.products[ownProps.match.params.id],
  tempcart: Object.values(state.entities.cart),
  cartId: state.session.cart

});

const mapDispatchToProps = dispatch => ({
requestProduct: id => dispatch(requestProduct(id)),
createLedger: (ledger) => dispatch(createLedger(ledger)),
requestCart: (cartId) => dispatch(requestCart(cartId)),
updateLedger: (ledger) => dispatch(updateLedger(ledger)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowDetails)