import React from "react"
import HomePageProduct from "../components/products/homepage_product_index"

const HomePage = () =>{


  return (
    <div className="home-main">


      <img src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/71Sfdy7hMALSX3000.jpg" className="home-background" />

<div className="home-products"> 
    <HomePageProduct  />      
    </div>

      
    </div>
  )
}

export default HomePage