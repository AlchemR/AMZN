import React from "react"
import { connect } from "react-redux"
import { Link, NavLink, Redirect } from "react-router-dom"
import { createReview, updateReview, deleteReview, requestReviews } from "../../actions/review_actions"
import EditReview from "./edit_review"
import ReviewSmallCard from "./review_smallcard"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"




class ReviewDetail extends React.Component {

  constructor(props) {
    super(props)
    // console.log("constructor props reviewdetail" , this.props)
    this.state = { displayConfirm: false, displayEdit: false, helpful: false, abuse: false, sortBy: "4", tags: {}, stateTags: ""}
    // this.state = { displayConfirm: false, displayEdit: false, helpful: false, this.state.id: false}
    this.toggleDelete = this.toggleDelete.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.toggleHelpful = this.toggleHelpful.bind(this);
    this.reportAbuse = this.reportAbuse.bind(this);
    this.writeReview = this.writeReview.bind(this);
    this.tagsclick = this.tagsclick.bind(this);
    this.returnFiltered = this.returnFiltered.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
  }
  
    // this.handleQuantity = this.handleQuantity.bind(this)


  componentDidMount(){
    this.props.requestReviews(this.props.product.id)
    // console.log("requested reviews plural in review_detail")
    // consider doing active record on index search
    // .where(product_id: params[:product_id])
    //This is kind of getting into searching territory
  }


  reportAbuse() {
    (this.state.abuse) ? (this.setState({ abuse: false })) : (this.setState({ abuse: true }), setTimeout(() => this.reportAbuse(), 2000))
  }

  toggleHelpful() {
    (this.state.helpful) ? (this.setState({ helpful: false })) : (this.setState({ helpful: true }) , setTimeout(() => this.toggleHelpful(), 2000))
  }


displayStars(num){
  let output = []
  for (let index = 1; index < 6; index++) { 
    

    if (num >= index) { output.push(<RiStarSFill />) } else if (num < index) { output.push(<RiStarSLine />)}
    // if (num >= index) { output.push("★") } else if (num < index) { output.push("☆") }        
    // else if (num < index && num > index - 0.6) { output.push("halfstar") }
  }
  return output
}

// toggle(feild){
//    ({this.state.[feild]}) ? { this.setState({[feild]: false}) } : { this.setState({[feild]: true})  
// }

toggleDelete(){
  (this.state.displayConfirm) ? (this.setState({displayConfirm: false})) : (this.setState({displayConfirm: true }))
}

toggleEdit(){
  (this.state.displayEdit) ? (this.setState({displayEdit: false})) : (this.setState({displayEdit: true }))
}

handleUpdate = (feild, e) => {
    this.setState({ [feild]: e.currentTarget.value })
  }

// displayEditButtons(review){
//   if (this.props.currentUser == review.user_id)
//     // return <div className="button-edit-delete-container"> <button className="review-edit" onClick={() => this.props.history.push(`/products/${this.props.product.id}}/editreview/:id`)}> Edit Review</button> <button onClick={() => this.toggleDelete()} >{(this.state.displayConfirm) ? "Are you Sure?" : "Delete Review" } </button> {(this.state.displayConfirm) ? <button onClick={() => this.props.deleteReview(review.id) }>Confirm Delete</button> : null}
//      return <div className="button-edit-delete-container"> <button className="review-edit" onClick={() => this.toggleEdit()}> Edit Review</button> <button onClick={() => this.toggleDelete()} >{(this.state.displayConfirm) ? "Are you Sure?" : "Delete Review" } </button> {(this.state.displayConfirm) ? <button onClick={() => this.props.deleteReview(review.id) }>Confirm Delete</button> : null} 
//     <br />
//     {(this.state.displayEdit) ? < EditReview review={review} key={review.id} /> : null}
//      </div>
//     // return <div className="button-edit-delete-container"> <button className="review-edit" onClick={() => console.log("hitting edit review") }> Edit Review</button> <button onClick={()=> this.deleteConfirm} >Delete Review </button></div>
//     // return <div className="button-edit-delete-container"> <button className="review-edit" onClick={() => this.showEditReview}> Edit Review</button> <button onClick={()=> this.deleteConfirm} >Delete Review </button></div>
//     // return <div className="button-edit-delete-container"> <button className="review-edit" onClick={() => this.showEditReview(review)}> Edit Review</button> <button onClick={()=> this.deleteConfirm} >Delete Review </button></div>
//   else 
//   return null

// }

tagsclick(num, e){
e.preventDefault();
// console.log(this.state.tags)
// console.log("state typeof", typeof this.state.tags)
// console.log("state typeof",  Object.keys(this.state.tags).length )
// console.log("tagsclick", num)
// console.log("tagsclick arr", this.props.product.wordcloud_tags[num])
// console.log("current target", e.currentTarget)
// console.log("current state ===", this.state.tags === {})
// console.log("current state same ==", this.state.tags == e.currentTarget)
// console.log("current target == 0", this.state.tags.length == 0)
// console.log("current target", typeof e.currentTarget)


 let flagged = false  
  if (Object.keys(this.state.tags).length == 0) {  e.currentTarget.classList.toggle("reviews-wordcloud-indi-clicked"), this.setState({ tags: e.currentTarget, stateTags: this.props.product.wordcloud_tags[num] }), flagged = true } 
  if (!flagged == true) {
    if (this.state.tags == e.currentTarget) { e.currentTarget.classList.toggle("reviews-wordcloud-indi-clicked"), this.setState({ tags: {}, stateTags: "" }) } else { 
      e.currentTarget.classList.toggle("reviews-wordcloud-indi-clicked"), this.state.tags.classList.toggle("reviews-wordcloud-indi-clicked"), this.setState({ tags: e.currentTarget, stateTags: this.props.product.wordcloud_tags[num] }) 
    }
  }
    
}

returnFiltered(stateTags){
  let newfilter
  if (stateTags == "") {
      // console.log("filter empty", this.props.reviews)
      newfilter = this.props.reviews
  } else {
    newfilter = this.props.reviews.filter(review => review.wordcloud == stateTags)
    // console.log(this.props.reviews.filter( review => review.wordcloud == stateTags))
  }
return newfilter
}

sortReviews(reviews, filter) {
  // console.log("reviews", reviews)
  // console.log("filter", filter)
  // console.log("filter typeof", typeof filter)
  switch (filter) {
    case "1":
      reviews.sort((a,b) => b.rating - a.rating) // highest to lowest
      // console.log("1 case")
      // console.log("reviews", reviews)
      // console.log("reviews typeof", typeof reviews)
      // return reviews
      break;
      case "2":
        reviews.sort((a, b) => a.rating - b.rating) // lowest to highest
        // console.log("2 case")
        // console.log("reviews", reviews)
        // console.log("reviews typeof", typeof reviews)
        // return reviews
        break;
        case "3":
          reviews.sort((a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at)) // oldest to newest
          // console.log("3 case")
          // console.log("reviews", reviews)
          // console.log("reviews typeof", typeof reviews)
          // return reviews
          break;
          case "4":
            reviews.sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)) // newest to oldest
            // console.log("4 case")
            // console.log("reviews", reviews)
            // console.log("reviews typeof", typeof reviews)
            // console.log("reviews typeof obj", typeof Object.values(reviews))
            // console.log("reviews typeof arr", typeof Array.from(reviews))
            // return Object.values(Object.assign({}, reviews))
            break;
            
            default:
              console.log("default case, something went wrong here")
              break;
            }
            

            // console.log("do we hit here at all or nah")
            // console.log("reviews", reviews)
            // console.log("reviews", typeof reviews)
            // output = reviews
            return (
              <div>
                {reviews.map(review =>
                  <ReviewSmallCard review={review} key={`t${review.id}t${review.id}t`} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview} />
               
                )}
              </div>
              )
            // return Array.from(reviews)
            // return Object.values(reviews)
}

writeReview(currentUser, product){
  // console.log("this.props", this.props.currentUser)
  // console.log("this.props", typeof this.props.currentUser)
  // console.log("this.props", typeof this.props.currentUser == 'string')
  // if (this.props.currentUser == 'string') { return <Link to={`/products/${product.id}/createreview`}  >  Write a customer review </Link> } else {return "Write a customer review" }
  if (typeof this.props.currentUser == 'number') { return <Link to={`/products/${product.id}/createreview`}  >  Write a customer review </Link> } else { return <Link to={`/login`} > Log In to Write a Review </Link> }
}

render() {
    let output 
    // console.log("reviewdetail props in render", this.props)
    const { reviews, product, currentUser } = this.props
    let sum = 0; reviews.map(review1 => sum += review1.rating) ; let averagerating = (sum / reviews.length)
    
    
    if (reviews.length < 1) {return null} else {
      // console.log("when do we hit here")
      
      return (
        <div className="review-details-outer"  >
          {/* <hr style={{ color: '#000000', backgroundColor: '#000000', height: .5, borderColor: '#000000' }} /> */}
        <div className="review-details-main">
          {/* <hr style={{borderColor: black}} /> */}



          <div className="review-left-col"> 
              <div className="review-left-customer-reviews-average">
                <div className="review-left-head">
              <h1 className="customer-reviews-header1" >Customer Reviews</h1>
                <h3 className="customer-reviews-header3"> average review (stars) <br /><span className="star-rating"> {this.displayStars(averagerating)}</span> {averagerating.toFixed(1)} / 5 </h3>
                </div>
                <div className="review-left-bar-chart" > 
                  <img src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/Screen+Shot+2022-07-22+at+2.31.18+AM.png" alt="" />
                </div>
                  <br />
                  <div className="review-left-bar-chart" >
                    
                <img src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/Screen+Shot+2022-07-22+at+2.30.23+AM.png" alt="" /></div>
                
                <hr />

<div className="create-review-buttons-left">
              <h1>review this product</h1>
              share your thoughts with other customers
              <br />
                <button className="add-to-cart" >{this.writeReview(currentUser, product)}</button>
              <hr />
                </div>

            <div className="sponsored" >  "sponsored" div  </div>
                </div>
          




          
          </div>
            <div className="review-mid-spacer">
            </div>

          <div className="review-right-col">
  
                {/* <span className="reviews-with-images-header"><h1>Reviews with Images</h1> </span>
            <div className="review-images-all">
                <div className="review-images-small" > links to each review on clicking on image</div><div className="review-images-small" > links to each review on clicking on image</div><div className="review-images-small" > links to each review on clicking on image</div><div className="review-images-small" > links to each review on clicking on image</div>
            </div> */}
            {/* placeholder until upload images with review is possible */}
              {/* <div className="wordcloud-link"> <a className="see-all-customer-images blue-text"> See All Customer images </a></div> */}
              {/* <div className="wordcloud-link"> <a href="" className="see-all-customer-images"> See All Customer images </a></div> */}
              <span className="reviews-wordcloud-header"> Highlight Reviews that mention:</span>
               <div className="reviews-wordcloud">
                 {/* {console.log("wordcloud", this.props)} */}
              <span className="reviews-wordcloud-indi" onClick={(e) => this.tagsclick(0, e)} >{this.props.product.wordcloud_tags[0]}</span> 
                <span className="reviews-wordcloud-indi" onClick={(e) => this.tagsclick(1, e)} >{this.props.product.wordcloud_tags[1]} </span> 
                <span className="reviews-wordcloud-indi" onClick={(e) => this.tagsclick(2, e)} >{this.props.product.wordcloud_tags[2]} </span> 
                <span className="reviews-wordcloud-indi" onClick={(e) => this.tagsclick(3, e)} >{this.props.product.wordcloud_tags[3]} </span> 
                <span className="reviews-wordcloud-indi" onClick={(e) => this.tagsclick(4, e)} >{this.props.product.wordcloud_tags[4]}</span>
              </div>

              <div className="sort-by-dropdown">
              <select value={this.state.sortBy} onChange={(e) => this.handleUpdate('sortBy', e)} className="dropdown" >
                <option value={"1"}>Top Reviews</option>
                <option value={"2"}>Lowest Rated</option>
                <option value={"3"}>Oldest First</option>
                  <option value={"4"} defaultValue>Most Recent</option>
              </select>
              </div>

          <div className="reviews-list"> 
          <h1>Reviews: </h1>

            { this.sortReviews(this.returnFiltered(this.state.stateTags), this.state.sortBy) }

          {/* {reviews.map(review => 
            // 
            // <ReviewSmallCard review={review} key={`t${review.id}t${review.id}t`} currentUser={currentUser} deleteReview={this.props.deleteReview} />
              console.log("in map",review)
            )} */}

          <hr />
            </div>

          </div>
          </div>


<span>below reviews</span>

        </div>
      )

}
}
}

const mapStateToProps = (state, ownProps) => ({
  // console: console.log("review details show state", state),
  // console: console.log("review details show ownprops", ownProps),
  reviews: Object.values(state.entities.review),
  currentUser: state.session.currentUser,
  // currentUserName: state.session.currentUser
  // cartId: state.session.cart

});

const mapDispatchToProps = dispatch => ({
  requestReviews: (productid) => dispatch(requestReviews(productid)),
  // requestReview: id => dispatch(requestReview(id)),
  // createReview: (review) => dispatch(createReview(review)),
  // updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail)