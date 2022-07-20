import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Amazon_logo from '../../app/assets/images/Amazon_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { requestCart } from "../actions/cart_actions"



class NavBar extends React.Component{
constructor(props){
  super(props)
}

// const NavBar = (props) => {
  // {let guest = "Guest"}
componentDidMount(){
  // console.log("didmount navbar", typeof this.props.cartId !== "string" )
  // console.log("didmount navbar cartid", this.props.cartId)
  // console.log("didmount navbar undefined", this.props.cartId !== undefined)
  if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined ) { this.props.requestCart(this.props.cartId) }
}


  render(){
    { if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined ) {this.props.requestCart(this.props.cartId), console.log("navbar render header",)}}
    // {console.log("render", this.props.cart)}

  return(
  <div className="navbar-header">
    {/* {console.log("navbarheader",this.props)} */}
          <Link to='/'>
        <div className="navbar-left-logo" ><img className="navbar-left-logo" src={Amazon_logo} alt="" /></div> 
         </Link>
        {/* <img src="../../../app/assets/images/Amazon logo.png"  className="header-logo" alt="" /> */}
        {/* <img src={Amazon_logo} className="header-logo" alt="" />
        <Image src={Amazon_logo} className="header-logo" /> */}
        <div className="navbar-search">
          <input type="text" className="navbar-search-input" />
          <div type="text" className="navbar-search-icon">&#x1F50D;</div>
        </div>

      <div className="navbar-account">
          <div className="navbar-right account-1">
            
            
          <Link to="/login"><span className="navbar-right line-1">Welcome {this.props.currentUser}</span></Link>
            <span className="navbar-right line-2">login/<Link to="/greeting">logout</Link></span>
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
            <span className="navbar-right line-2">{this.props.cartCount}</span> 
            <span className="navbar-right cart-1"> &#128722;</span>
            {/* <FontAwesomeIcon icon="fa-light fa-cart-shopping" /> */}
          </Link>
        </div>

              {/* I another header type stle below this one, maybe seperate file to make the categories */}
      </div>

  </div>

  )
  }} 

const mapStateToProps = ( state ) => {
  // console.log("MSTP navbar",state),
  // console.log("MSTP navbar2", state.entities)
  return  (state.entities.cart && state.entities.users[state.session.id]) ? { 
    currentUser: state.entities.users[state.session.id].account_fname, 
    cartId: state.session.cart , 
    cartCount: state.entities.cart.cartCount
    } : {currentUser: "guest"} 
  
};

const mapDispatchToProps = dispatch =>({
  requestCart: (cartId) => dispatch(requestCart(cartId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

// export default NavBar