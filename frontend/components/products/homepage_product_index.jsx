import React from "react";
// import "../../../app/assets/stylesheets/homepage_product.css"

// const HomePageProduct = ({image, catrating, title, prodrating, price }) => {
  //Catrating = category rating
  //prodrating = product rating
const HomePageProduct = () => {

return (
<div className="product-container">
  <div className="product-container-wrapper">
      <div className="product-img">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51ucuU-qoyL._SX394_BO1,204,203,200_.jpg" className="mock-product" />
        <div className="number-rating"></div>  {/* #1 , #2 in category up to #10, tag found in top left corner of images */}
      </div>

      <div className="product-info">
        <div className="product-title"> Ruby on Rails for Dummies </div>
        <div className="product-rating"> &#9733; &#9733; &#9733; &#9734; &#9734; </div>
        <div className="product-price">$ 19.99 </div>
      </div>


  </div>
</div>

)
}

export default HomePageProduct