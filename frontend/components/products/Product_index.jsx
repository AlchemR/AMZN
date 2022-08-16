import React from 'react'
import { requestProducts } from '../../actions/product_actions'
import { connect } from 'react-redux'
import ProductSingleCard from './product_single_card'
import { Link } from 'react-router-dom'
import { createLedger, updateLedger } from "../../actions/cart_ledger_actions"
import {requestCart } from '../../actions/cart_actions'

class ProductIndex extends React.Component{
constructor(props){
  super(props)
  // console.log("product constructor props",props)
  this.handleClick = this.handleClick.bind(this)
}


  displayStars(num) {
    let output = []
    for (let index = 1; index < 6; index++) {
      if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
      // else if (num < index && num > index - 0.6) { output.push("halfstar") }
    }
    return output
  }


componentDidMount(){
  // console.log("componentmount props before", this.props)
  let searchData = {
    category: this.props.match.params.category,
    query: this.props.match.params.query
  }
  // console.log("searchdata",searchData)
  this.props.requestProducts(searchData)
}

handleClick = (itemID, cartID, prod) => e => {
e.preventDefault()

let productexists = false
let tempnum = 0
let tempId = 0
for (let index = 0; index < this.props.tempcart.length; index++) {
  // console.log("tempcart at index", this.props.tempcart[index])
  if (this.props.tempcart[index].product_id == itemID) { productexists = true, tempnum = this.props.tempcart[index].quantity, tempId = this.props.tempcart[index].id }
}
// console.log("prod",prod)
//   console.log("quantity typeof", typeof tempnum)
  if (productexists) { this.props.updateLedger({ product_id: itemID, quantity: tempnum + 1, cart_id: cartID, id: tempId }).then(() => setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 50)) } else { this.props.createLedger({ product_id: itemID, quantity: 1, cart_id: cartID }).then(setTimeout(function () { this.props.requestCart(cartID) }.bind(this) , 50) ) }
  // if (productexists) { this.props.updateLedger({ product_id: itemID, quantity: tempnum + 1, cart_id: cartID, id: prod.id }).then(() => setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 50)) } else { this.props.createLedger({ product_id: itemID, quantity: 1, cart_id: cartID }).then(setTimeout(function () { this.props.requestCart(cartID) }.bind(this) , 50) ), console.log("second one") }
// this.props.createLedger({product_id: itemID, quantity: 1 ,cart_id: cartID})
}

queryCategoryShow(){
console.log("query category show this.props",this.props)
  if (this.props.match.params.query && this.props.match.params.category) {
    return (<div> <h1>Product Category: {this.props.match.params.category}</h1>
      <h1>Search Query: {this.props.match.params.query} </h1>
    </div>) }
  

    
    if (this.props.match.params.query && !this.props.match.params.category)  {  return ( <div> <h1>Product Category: All</h1> 
    <h1>Search Query: {this.props.match.params.query} </h1>
    </div>) }
      
    
    if (!this.props.match.params.query && this.props.match.params.category)  { return(
    <div> <h1>Product Category: {this.props.match.params.category}</h1> 
    </div> ) }
    
   if (!this.props.match.params.query && !this.props.match.params.category) { return (<div> <h1>Product Category: All</h1> </div>) }


  }
  


render(){
  const {products, cartId, createLedger} = this.props
  // console.log("products",this.props)
return(
  <div>
    {console.log("line 60 product index", this.props)}
    {this.queryCategoryShow()}
  <div className='product-index main'>
    
    {products.map(prod => 
      <div className="outercard">
    <Link to={`/products/${prod.id}`}>
      <ProductSingleCard key={prod.id} prod={prod} />
      </Link>
      <button className='addcart index' onClick={this.handleClick(prod.id, cartId, prod)} >Add to Cart</button>
      </div>
      
      ) }

  </div>
  </div>
)
}

}



const mapStateToProps = (state, ownProps) => {
// console.log("MSTP Productindex state",state),
// console.log("MSTP Productindex ownprops",ownProps),
// console.log("MSTP Productindex ownprops 2",ownProps.match.params)
// console.log("MSTP Productindex ownprops 2", typeof ownProps.match.params)
// console.log("MSTP Productindex ownprops 2 category ",  ownProps.match.params.category)
// console.log("MSTP Productindex ownprops 2 query",  ownProps.match.params.query)
return {
products: Object.values(state.entities.products),
tempcart: Object.values(state.entities.cart),
cartId: state.session.cart
}};

const mapDispatchToProps = dispatch => ({
requestProducts: (querydata) => dispatch(requestProducts(querydata)),
createLedger: (ledger) => dispatch(createLedger(ledger)),
updateLedger: (ledger) => dispatch(updateLedger(ledger)),
requestCart: (cartId) => dispatch(requestCart(cartId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

// export default ProductIndex