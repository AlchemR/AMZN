import React from "react"


class ProductSingleCard extends React.Component {
  constructor(props){
    super(props)

// this.state = {totalrating: 0, count: 0 }
    this.state = {firstrating: 0}
  }


  displayStars(num) {
    let output = []
    for (let index = 1; index < 6; index++) {
      if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }
      // else if (num < index && num > index - 0.6) { output.push("halfstar") }
    }
    return output
  }

  render(){
    const {prod} = this.props
    // if (prod) {Object.values(prod.reviews).map(review => this.setState({firstrating: review.rating})) }
    return(
    
      <div className="innercard">
        <div className="imagetop">

          {/* <img src="https://m.media-amazon.com/images/I/71jFn3LK0-L._AC_UL1500_.jpg" className="single-card-image" /> */}
          <img src={prod.photoUrl} className="single-card-image" />
          </div>
        <div className="details" >
          <div className="details title" >{(prod.title.length > 60) ? prod.title.substring(0,60) +`....` : prod.title}</div>

          <div className="in-stock-details-card"> {(prod.inventory_count) ? "In Stock" : "Out of Stock" } </div>
          {/* <div className="in-stock-details-card"> {(prod.in_stock) ? "In Stock" : "Out of Stock" } </div> */}
          {/* <div className="details-rating" >{this.state.firstrating}</div> */}
          <h3> <span className="star-rating"> {this.displayStars(prod.reviews_avg)}</span> {prod.reviews_avg} / 5 </h3>
          {/* {averagerating.toFixed(1)}  */}
          <div className="details price" >{prod.price}</div>
          <div className="primeshipping-singlecard"> <img className="primeshipping-singlecard" src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/Screen+Shot+2022-07-22+at+2.28.40+AM.png" alt="prime shipping" /> </div>
            
          </div>
      

    </div>
    )
  }

}


export default ProductSingleCard