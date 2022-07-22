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
  this.props.requestProducts()
  // console.log("componentmount props",this.props)
}

handleClick = (itemID, cartID, prod) => e => {
e.preventDefault()

let productexists = false
let tempnum = 0
for (let index = 0; index < this.props.tempcart.length; index++) {
  if (this.props.tempcart[index].product_id == itemID) { productexists = true, tempnum = this.props.tempcart[index].quantity }
}
// console.log("prod",prod)
//   console.log("quantity typeof", typeof tempnum)
  if (productexists) { this.props.updateLedger({ product_id: itemID, quantity: tempnum + 1, cart_id: cartID, id: prod.id }).then(() => setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 2000)) } else { this.props.createLedger({ product_id: itemID, quantity: 1, cart_id: cartID }).then(setTimeout(function () { this.props.requestCart(cartID) }.bind(this) , 2000) ), console.log("second one") }
// this.props.createLedger({product_id: itemID, quantity: 1 ,cart_id: cartID})


}

render(){
  const {products, cartId, createLedger} = this.props
  // console.log("products",this.props)
return(
  <div><h1>Product Category: All</h1>
  <div className='product-index main'>
    
    {products.map(prod => 
      <div className="outercard">
    <Link to={`/products/${prod.id}`}>
      <ProductSingleCard key={prod.id} prod={prod} />
      </Link>
      
      <button className='addcart index' onClick={this.handleClick(prod.id, cartId, prod)} >Add to Cart</button> 
      {/* handleclick is not defined */}
      </div>
      
      ) }

  </div>
  </div>
)
}

}



const mapStateToProps = state => ({
console1: console.log("MSTP Productindex",state),
products: Object.values(state.entities.products),
tempcart: Object.values(state.entities.cart),
cartId: state.session.cart
});

const mapDispatchToProps = dispatch => ({
requestProducts: () => dispatch(requestProducts()),
createLedger: (ledger) => dispatch(createLedger(ledger)),
updateLedger: (ledger) => dispatch(updateLedger(ledger)),
requestCart: (cartId) => dispatch(requestCart(cartId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)

// export default ProductIndex