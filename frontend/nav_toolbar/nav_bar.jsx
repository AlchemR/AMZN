import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Amazon_logo from '../../app/assets/images/Amazon_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { requestCart } from "../actions/cart_actions"
import SearchBar from "./search_bar"


let fetched = false

class NavBar extends React.Component{
constructor(props){
  super(props)
  
}


// const NavBar = (props) => {
  // {let guest = "Guest"}
 
  componentDidUpdate(){
    console.log("navbar, component did upate cartcount same as ledgercount", this.props.ledgerCount == this.props.cartCount)
    console.log("navbar, component did upate this.props ledgercount", this.props.ledgerCount)
    console.log("navbar, component did upate this.props cartcount", this.props.cartCount)
    console.log("fetched", fetched)
    // console.log("navbar, component did upate this.props cartcount typeof", typeof this.props.cartCount)
    // console.log("navbar, component did upate this.props cartcount == ", this.props.cartCount == undefined)
    if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined && !!this.props.cartCount == false && fetched == false) { this.props.requestCart(this.props.cartId), console.log("nav bar 29, requested cart"), fetched = true } else {
      if (fetched == false && this.props.ledgerCount != this.props.cartCount && !this.props.ledgerCount == false) { this.props.requestCart(this.props.cartId), console.log("not fetched else clause, requested cart"), fetched = true } }
      console.log("fetched", fetched)
      if (this.props.ledgerCount == this.props.cartCount) { fetched = false }
      console.log("fetched", fetched)
  }
  
componentDidMount(){
  console.log("how often does componentdidmount hit?")
  // console.log("didmount navbar", typeof this.props.cartId !== "string" )
  // console.log("didmount navbar cartid", this.props.cartId)
  // console.log("didmount navbar undefined", this.props.cartId !== undefined)
  if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined ) { this.props.requestCart(this.props.cartId), console.log("nav bar 29, requested cart") }
}

componentWillUnmount(){
  console.log("component will unmount test time")
}

  render(){
    // { if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined ) {this.props.requestCart(this.props.cartId), console.log("navbar render header",)}}
    // {console.log("render", this.props.cart)}

  return(
  <div className="navbar-header">
    {console.log("navbarheader line 32 props",this.props)}
    {console.log("navbarheader line 32 state",this.state)}
          <Link to='/'>
        <div className="navbar-left-logo" >
          {/* <img className="navbar-left-logo" src={Amazon_logo} alt="" /> */}
          <img className="navbar-left-logo" src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/Amazon_logo.png" alt="Amazon IMG logo" />
          </div> 
         </Link>
        {/* <img src="../../../app/assets/images/Amazon logo.png"  className="header-logo" alt="" /> */}
        {/* <img src={Amazon_logo} className="header-logo" alt="" />
        <Image src={Amazon_logo} className="header-logo" /> */}
          <SearchBar/>
        {/* <div className="navbar-search">
          <SearchBar/>
          <input type="text" className="navbar-search-input" />
          <div type="text" className="navbar-search-icon">&#x1F50D;</div>
        </div> */}

      <div className="navbar-account">
          <div className="navbar-right account-1">
            
            
          <Link to="/login"><span className="navbar-right line-1">Welcome {this.props.currentUser}</span></Link>
          <span className="navbar-right line-2"><Link to="/greeting">login/logout</Link></span>
            </div> 
        
            <div className="navbar-right account-2">
              <span className="navbar-right line-1">Returns</span>
              <span className="navbar-right line-2">& Orders </span>
            </div>

          <div className="navbar-right account-3">
            <Link to='/account'>
            <span className="navbar-right line-1">Your</span>
            <span className="navbar-right line-2" >prime</span>
          </Link>
          </div>

          <div className="navbar-right account-4">
            <Link to="/cart" >
            <span className="navbar-right cartcount">{this.props.cartCount}</span> 
            <span className="navbar-right cart-1"> <img className="cart-1" src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/clipart1303615.png" alt="shopping-cart" /></span>
            {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
          </Link>
        </div>

              {/* I another header type stle below this one, maybe seperate file to make the categories */}
      </div>

  </div>

  )
  }} 

const mapStateToProps = ( state, ownProps ) => {
  console.log("MSTP navbar state",state)
  // console.log("MSTP navbar ownprops",ownProps)
  // console.log("MSTP navbar2", state.entities)
  return  (state.entities.cart && state.entities.users[state.session.id]) ? { 
    currentUser: state.entities.users[state.session.id].account_fname, 
    cartId: state.session.cart , 
    cartCount: state.entities.cart.cartCount,
    ledgerCount: state.entities.ledger.ledgerCount
    } : {currentUser: "guest"} 
  
};

const mapDispatchToProps = dispatch =>({
  requestCart: (cartId) => dispatch(requestCart(cartId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

// export default NavBar