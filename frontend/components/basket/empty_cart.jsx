import React from "react";

const EmptyCart = () => {

  return(
<div className="cart-container">
  <div className="cart-wrapper">
        <div className="cart-img-container"> <img className="cart-img" src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"  /> </div>


        <div className="cart-text"> <h1>Your AMZN Cart is empty</h1> <br /> <h2>this definitely isn't a placeholder because I'm distractable</h2>
          <a href="/">Shop TOday's deals</a> </div>

  </div>

</div>
  )
}

export default EmptyCart