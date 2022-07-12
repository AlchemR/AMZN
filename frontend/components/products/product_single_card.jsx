import React from "react"

class ProductSingleCard extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    console.log(this.props)
    return(
    <div className="outercard">
      <div className="innercard">
        <div className="imagetop">
          
          </div>
        <div className="details" >

          </div>
      </div>
    </div>
    )
  }

}


export default ProductSingleCard