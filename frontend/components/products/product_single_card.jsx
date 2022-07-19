import React from "react"


class ProductSingleCard extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    const {prod} = this.props
    return(
    
      <div className="innercard">
        <div className="imagetop">

          <img src="https://m.media-amazon.com/images/I/71jFn3LK0-L._AC_UL1500_.jpg" className="single-card-image" />
          </div>
        <div className="details" >
          <div className="details title" >{prod.title}</div>
            <div className="details price" >{prod.price}</div>
            
          </div>
      

    </div>
    )
  }

}


export default ProductSingleCard