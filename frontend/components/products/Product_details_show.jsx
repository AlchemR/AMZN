import React from "react"
import { connect } from "react-redux"
import { Link, NavLink, Redirect, withRouter } from "react-router-dom"
import { requestProduct } from "../../actions/product_actions"
import { createLedger, updateLedger } from "../../actions/cart_ledger_actions"
import { requestCart } from '../../actions/cart_actions'
import ReviewDetail from '../reviews/review_detail'
import { IoMdArrowDropdown } from "react-icons/io"
import { RiArrowDropDownLine, RiChat2Line } from "react-icons/ri"


class ProductShowDetails extends React.Component {
  constructor(props){
    super(props)
    // console.log("product show details constructor", this.props)
if (this.props.product) {this.state = {
      product_id: this.props.product.id,
      quantity: 1,
      cart_id: this.props.cartId }
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    // this.handleQuantity = this.handleQuantity.bind(this)
  }

  componentWillMount(){
    // console.log("does componentwillmount fire")
    this.props.requestProduct(this.props.match.params.id)
    // console.log("componentwillmount Product details show this props", this.props)
    // console.log("componentwillmount Product details show this state", this.state)
    // console.log("componentwillmount Product details show this props productid", this.props.product === undefined)
    // console.log("componentwillmount Product details show this props match params", this.props.match.params.id)
  }

  componentDidMount(){
    // this.props.requestProduct(this.props.match.params.id)
    // console.log("componentdidmount Product details show this props",this.props)
    // console.log("componentdidmount Product details show this state",this.state)
    // console.log("componentdidmount Product details show this props productid",this.props.product === undefined)
    // console.log("componentdidmount Product details show this props match params",this.props.match.params.id)
  }

  componentDidUpdate(){
    // console.log("component did update product details state" , this.state)
    if (this.state === null && this.props.product) {
      this.setState({
        product_id: this.props.product.id,
        quantity: 1,
        cart_id: this.props.cartId })
        // console.log("after setstate")
      }
      // console.log("component did update product details show", this.props)
      // console.log("component did update product details state" , this.state === null)

  }

    handleAddToCart = (itemID, cartID, product) => e => {
      e.preventDefault()

      if (cartID == 'Guest') {

        // console.log("cartID", cartID)
        alert("Please login to use Cart Functionality");
        this.props.history.push('/login')
        return ( <Redirect to={"/login"} /> )
      } else {

      let productexists = false
      let tempnum = 0
      let tempId = 0
      for (let index = 0; index < this.props.tempcart.length; index++) {
        // console.log("tempcart at index", this.props.tempcart[index])
        if (this.props.tempcart[index].product_id == itemID) { productexists = true, tempnum = this.props.tempcart[index].quantity, tempId = this.props.tempcart[index].id }
      }
       if (productexists) { this.props.updateLedger({ product_id: itemID, quantity: tempnum + this.state.quantity, cart_id: cartID, id: tempId }).then(() => setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 200)) } else { this.props.createLedger({ product_id: itemID, quantity: this.state.quantity, cart_id: cartID }).then(setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 200)) }
     
    }
    }

    handleQuantity = (e) => {
      e.preventDefault() 

      return this.setState({quantity: parseInt(e.target.value) })
    // console.log("e",e)
    // console.log("etargervalue",e.target.value)
    }

  displayStars(num) {
    let output = []
    for (let index = 1; index < 6; index++) {
      if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
      // else if (num < index && num > index - 0.6) { output.push("halfstar") }
    }
    return output
  }

  // averagerating(product){
//   let averagerate = 0;
//   Object.values(product.reviews).map(review => averagerate += review.rating)
//   averagerate = (averagerate / reviews.count)
//  return averagerate
// }

  render(){
    const {product, cartId} = this.props 
    if (!product) {return null} else {
      let a;
       a = new String(product.price).split(".")

    return(
      
    <div className="product-details-main grow-main">
        <div className="history-nav"> 
          <NavLink to={'/products'}> <span > {"<"} {/* placeholder for arrow icons */} back to results</span></NavLink>
          {/* <NavLink to={'/products'}> <span onClick={() => console.log("goback")} > {"<"} placeholder for arrow icons back to results</span></NavLink> */}
          
          <span>"sponsored"</span>
        </div>
        <hr />
      <div className="product-container">
       <div className="image-left-col">
            <div className="detailed-imagetop"> <img src={product.photoUrl} className="detailed-view-image" /> </div>
         <div className="image-instruction"> roll over image to zoom in </div>
            <div className="images-array"> <div className="subgrid"> 8x8 grid </div><div className="subgrid"> 8x8 grid </div><div className="subgrid"> 8x8 grid </div><div className="subgrid">  8x8 grid </div> </div>
          </div>
        <div className="details-center-col">
            <div className="details-title" > {product.title} </div>
            <div className="seller blue-text" > visit seller store</div>
            <hr />
            <div className="details-rating"> 
              <span className="rating-start"><span className="star-rating">{this.displayStars(product.reviews_avg)}</span> < RiArrowDropDownLine /> | </span> <span className="ratings-redirect blue-text"> 
              {/* <Link >{product.reviews.length}Reviews</Link>  */}
            {/* {console.log("product 92",product)}   */}
            {/* {console.log("this.state 93",this.state)}   */}
            </span> <span className="details-descriptive" > {product.detailed_description} </span></div>
             
            <div className="details-price" > <span className="dollarsign" >$</span> {product.price} </div>
            <div className="discount-available">
              <span className="discount-1">Was: </span> <span className="discount-2">${(product.price + product.price *.15).toFixed(2)}</span>
              <span className="discount-1">With Deal:</span> <div className="discount-2-upsell-div"><span className="discount-2-upsell">${product.price}</span> <span className="free-returns blue-text">Free Returns< RiArrowDropDownLine /></span></div>
              <span className="discount-1">You Save</span> <span className="discount-2"></span>
            </div>
            <div className="discount-financing-available"> <span className="blue-text">Pay </span><span className="redtext">{(product.price / 5).toFixed(2)} or less for 3 Months</span><span className="blue-text"> with Affirm.  Learn More</span> </div>
            <div className="details-options"> <span className="options-block">option1</span> | <span className="options-block" >option2</span> </div>

            <div className="details-description" > {product.description} </div>
            <table className="details-description-table">
              {/* <thead><tr><th>quality</th><th>quality2</th></tr></thead> */}
              <tbody>
                 {/* {product.details_description_array.map((ele1, idx) => { if (idx % 2 < 1) { console.log("first row option") } else {console.log("blank row")} }   )} */}
                {product.details_description_array.map((ele1, idx) => { if (idx % 2 == 0) { return (<tr><td> <span className="bold-1">  {ele1}</span></td><td> <span className="non-bold-text-2"> {product.details_description_array[idx + 1]}</span></td></tr> ) } else {} }   )}
              </tbody>
            </table>
            
           
            <hr />
            <h2 className="bold-1 details-descriptive-header">About this item:</h2>
            <div className="details-descriptive" > {product.additional_details.map(ele => 
              <li>{ele}</li>
              // <li> <span className="details-descriptive-text-indi">{ele}</span></li>
              )} </div>
              <br /><br /><br />
            <span className="incorrect-product-info blue-text"><RiChat2Line /> Report Incorrect product informaton</span>
              <hr />
           </div>

          <div className="checkout-right-col">
              <div className="checkout-inner-right-col">
            <div className="details-price" > <span className="dollarsign" >$</span> <span className="price-whole">{a[0]}</span><span className="price-fraction">{a[1]}</span> </div>
            {/* <div className="details-price" > <span className="dollarsign" >$</span> {product.price} </div> */}
            {/* {console.log("a", a)} */}
            {/* {console.log(product.price)} */}
            {/* {console.log(typeof product.price)} */}
            {/* {console.log(let a = new String(product.price))} */}
          <div className="checkout-delivery"> Order within 12 hours </div>
          <div className="in-stock"> in stock </div>

            <div className="layaway-product"> Reserve with Layaway. <br /> Make <span className="redtext"> 5 payments of {(product.price / 5).toFixed(2)} every 2 weeks</span>. <br /> No interest or fees. Item ships after payments are complete. <br /></div> <span className="blue-text"> Learn more</span>
          <br />
              & <span className="blue-text">FREE Returns</span> < RiArrowDropDownLine />
              <br />
            FREE delivery

            <div className="primeshipping"> <img className="primeshipping-show" src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/Screen+Shot+2022-07-22+at+2.28.40+AM.png" alt="prime shipping" /> </div>
          <div className="qty-dropdown">
  
  {/* {console.log("detailshow",product)} */}

              <form onSubmit={this.handleAddToCart(product.id, cartId, product)} >
              {/* <select id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleQuantity} className="dropdown" > */}
              <select onChange={(e) => this.handleQuantity(e)}  className="dropdown" >
                  <option value={1} selected>Qty: 1</option>
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
                <Link to="/checkout"> <button className="buy-now">Buy Now</button> </Link>

          </div>
            <div className="secure" >&#x1F512; secure transaction</div>
            <div className="secure-transacrion-ships">
              <span className="checkout-span-1">Ships from</span><span className="checkout-span-2">AMZN.com</span>
              <span className="checkout-span-1">Sold by</span><span className="checkout-span-2">AMZN.ccom</span>
              <span className="checkout-span-1">Customer Service</span><span className="checkout-span-2">AMZN.com ....</span>
              <span className="checkout-span-1">Packaging</span><span className="checkout-span-2">Show what's in ...</span>
            </div>
            <hr />
            <span className="details blue-text">Detai;s</span>
          <div className="returns"> return policy</div>
            <div className="protection-plan"> 
            <div>
              <input type="checkbox" id="insurance" name="insurance" />
                <label for="insurance">add Insurance for {(product.price * .15).toFixed(2)}</label>
            </div>
            </div>
          <button>Add to Saved-for-later List</button>
          </div>
          </div>

          <div className="checkout-right-spacer"></div>

         </div>
        
        <ReviewDetail key={`x${product.id}x${product.id}x`} product={product}  />

    </div>
      )
    }
  }

}

const mapStateToProps = (state, ownProps) => ({
  // console: console.log("product details show", state, ownProps),
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShowDetails))