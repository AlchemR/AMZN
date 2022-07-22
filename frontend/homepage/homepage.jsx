import React from "react"
import HomePageProduct from "../components/products/homepage_product_index"

const HomePage = () =>{


  return (
    <div className="home-main">

    <img src="https://m.media-amazon.com/images/I/71Sfdy7hMAL._SX3000_.jpg" className="home-background" />

<div className="home-products"> 
    <HomePageProduct  />      
    </div>

      
    </div>
  )
}

export default HomePage