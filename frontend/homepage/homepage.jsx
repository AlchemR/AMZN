import React from "react"
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import HomePageProduct from "../components/products/homepage_product_index"
import { useState, useEffect } from 'react'

const HomePage = () =>{

  const backgroundImages = [
    "https://amzn-app-seed.s3.us-west-1.amazonaws.com/71Sfdy7hMALSX3000.jpg",
    "https://amzn-app-seed.s3.us-west-1.amazonaws.com/f3vx-2863_December_meals_multitile.jpg",
    "https://amzn-app-seed.s3.us-west-1.amazonaws.com/PF_Strip_1500x440.jpg",
    "https://amzn-app-seed.s3.us-west-1.amazonaws.com/61GpLGCLURL._SX3000_-1.jpg",
    "https://amzn-app-seed.s3.us-west-1.amazonaws.com/2022Q3_HCT_Storefront_Hero_NewTraditional_D_1500x500_EN.jpg",
    "https://amzn-app-seed.s3.us-west-1.amazonaws.com/1367476_us_he_handpicked_headphones_1500x440.jpg"
  ]
    const [currentIdx, setCurrentIdx] = useState(0)

  const timer = setTimeout((e) => { const newIdx = Math.floor((currentIdx + 1) % backgroundImages.length); setCurrentIdx(newIdx) }, 5000)

  useEffect(() => { 
      // console.log("use effect used"); 
      timer
    // console.log("backgroundImages", backgroundImages.length)
    })

    const handleRight = (e) => {
      e.preventDefault()
      clearTimeout(timer)
      // console.log("currentIdx", currentIdx)
      const newIdx = Math.floor((currentIdx + 1) % backgroundImages.length); setCurrentIdx(newIdx); 
      // console.log("reset interval right newIdx", newIdx) 
    }

    const handleLeft = (e) => {
      e.preventDefault()
      clearTimeout(timer)
      // console.log("left arrow hit", currentIdx)
      let newIdx = Math.floor((currentIdx - 1) % backgroundImages.length)
      // console.log("left arrow newidx", newIdx)
      if (newIdx < 0) { 
        // console.log("do we hit here in if handle left"); 
        let newIdx = backgroundImages.length - 1; setCurrentIdx(newIdx) } else { setCurrentIdx(newIdx) }
    }



  return (
    <div className="home-main grow-main">

      <div className="mask-layer">
      {/* <div  className="home-background" /> */}
        
        <div className="mask-wrapper"><img src={backgroundImages[currentIdx]} className="home-background" /> </div>
        </div>
      <div className="arrow-container-container"><div id="arrow-container" className="arrow-container"><div id="left-arrow" onClick={(e) => handleLeft(e)} className="left-arrow"><RiArrowLeftSLine className="left-arrow" /></div><div id="right-arrow" onClick={(e) => handleRight(e)} className="right-arrow"><RiArrowRightSLine className="right-arrow" /></div></div></div>
<div className="home-wrapper">
<div className="home-products"> 
    <div className="outercard">
    <HomePageProduct  />      

    </div>
      </div>
      </div>

    </div>
  )
}

export default HomePage
