import React from "react";
import CartLedgerDetails from './cart_show'
import CartIndex from './cart_index'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const EmptyCart = () => {

  return(
<div className="cart-container">
  <div className="cart-wrapper">
        <div className="cart-img-container"> <img className="cart-img" src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"  /> </div>
        {/* <div className="cart-img-container"> <img className="cart-img" src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/kettle.svg"  /> </div> */}

        <div className="cart-text"> <h1>Your AMZN Cart is empty</h1> <br /> 
          <Link to={"/"}>Shop Today's deals</Link> </div>

        



        <br /><br /><br />
        {/* < CartLedgerDetails /> */}
        {/* < CartIndex /> */}

  </div>

</div>
  )
}

export default withRouter(EmptyCart)