import React from 'react'
import { requestProducts } from '../../actions/product_actions'
import { connect } from 'react-redux'
import ProductSingleCard from './product_single_card'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { createLedger, updateLedger } from "../../actions/cart_ledger_actions"
import {requestCart } from '../../actions/cart_actions'

class ProductIndex extends React.Component{
constructor(props){
  super(props)

  // this.state = {
  //   pageStart: 0,
  //   pageEnd: 4
  // }

  // console.log("product constructor props")
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
  // console.log("component did mount", this)
}

componentDidUpdate(prevProps, prevState){

  let searchData = {
    category: this.props.match.params.category,
    query: this.props.match.params.query
  }
 
  if ((this.props.match.params.category !== prevProps.match.params.category) || (this.props.match.params.query !== prevProps.match.params.query)) { this.props.requestProducts(searchData)} else {console.log("no request")}

  // console.log("component didupdate prevprops category", prevProps.match.params.category)
  // console.log("component didupdate this.props category", this.props.match.params.category)
  // console.log("component didupdate this.props category !==", this.props.match.params.category !== prevProps.match.params.category)
  // console.log("component didupdate prevprops query", prevProps.match.params.query)
  // console.log("component didupdate this.props query", this.props.match.params.query)
  // console.log("component didupdate this.props query !==", this.props.match.params.query !== prevProps.match.params.query)

}

componentWillReceiveProps(nextProps){
  // console.log("nextprops", nextProps)
  // console.log("nextprops this.props", this.props)
  // console.log("nextprops == this.props category", nextProps.match.params.category !== this.props.match.params.category)
  // console.log("nextprops == this.props query", nextProps.match.params.query !== this.props.match.params.query)
  // console.log("nextprops == this.props one is ", ((nextProps.match.params.category !== this.props.match.params.category) !== (nextProps.match.params.query !== this.props.match.params.query)) ? "one is not the other true" : " both are same false" )
 
  // let searchData = {
  //   category: this.props.match.params.category,
  //   query: this.props.match.params.query
  // }

    // if ((nextProps.match.params.category !== this.props.match.params.category) !== (nextProps.match.params.query !== this.props.match.params.query)) {console.log("should request") }
    // if ((nextProps.match.params.category !== this.props.match.params.category) !== (nextProps.match.params.query !== this.props.match.params.query)) {this.props.requestProducts(searchData) }
//     this.props.requestProducts(searchData)
}

handleClick = (itemID, cartID, prod) => e => {
e.preventDefault()

if (cartID == 'Guest') { 
  // console.log("cartID", cartID)
  alert("Please login to use Cart Functionality");
  this.props.history.push('/login')
  return (<Redirect to={"/login"} />) 
} else {
let productexists = false
let tempnum = 0
let tempId = 0
for (let index = 0; index < this.props.tempcart.length; index++) {
  // console.log("tempcart at index", this.props.tempcart[index])
  if (this.props.tempcart[index].product_id == itemID) { productexists = true, tempnum = this.props.tempcart[index].quantity, tempId = this.props.tempcart[index].id }
}

  if (productexists) { this.props.updateLedger({ product_id: itemID, quantity: tempnum + 1, cart_id: cartID, id: tempId }).then(() => setTimeout(function () { this.props.requestCart(cartID) }.bind(this), 50)) } else { this.props.createLedger({ product_id: itemID, quantity: 1, cart_id: cartID }).then(setTimeout(function () { this.props.requestCart(cartID) }.bind(this) , 50) ) }

  }
}

// pageNavigate(num){
// if (num == undefined){} else{
// let temp = num / this.state.pageEnd
// let count = []
// for (let idx = 0; idx < temp; idx++) {
//   count = count.concat(idx)  
// }
//   <div><button>"<"</button> <button>">"</button> </div>
// }
// }

queryCategoryShow(){
// console.log("query category show this.props",this.props)
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
  <div className='grow-main'>
    {/* {console.log("line 60 product index", this.props)} */}
    {this.queryCategoryShow()}
    <div className='product-index-spacer-wrapper'>
      <div className='product-index-spacer'></div>
  <div className='product-index main'>
    
        {products.map(prod => 
        // {products.slice(this.state.pageStart, this.state.pageEnd).map(prod => 
      <div className="outercard">
    <Link to={`/products/${prod.id}`}>
      <ProductSingleCard key={prod.id} prod={prod} />
      </Link>
      <button className='addcart index' onClick={this.handleClick(prod.id, cartId, prod)} >Add to Cart</button>
      </div>
      )}

  </div>
      <div className='product-index-spacer'></div>
    </div>
  </div>
)
}

}



const mapStateToProps = (state, ownProps) => {
// console.log("MSTP Productindex state",state)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductIndex))

// export default ProductIndex