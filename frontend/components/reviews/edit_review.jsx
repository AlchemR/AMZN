import React from "react";
import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";



class EditReview extends React.Component{
  constructor(props){
   super(props)
   this.state = this.props.review
this.handleSubmit = this.handleSubmit.bind(this);
this.handleUpdate = this.handleUpdate.bind(this);

 } 



 handleSubmit(e){
  e.preventDefault()
  let reviewfull = Object.assign({},this.state )
this.props.updateReview(this.state).then()


 }



 handleUpdate = (feild) => {
return e  => this.setState({[feild]: e.currentTarget.value}), console.log(this.state, e)
 }

 render(){
   console.log("review render",this.state)
  if (!this.state) {return null} else{
   return (
     <div>
       
       placeholder for review form feilds

<form onSubmit={this.handleSubmit}>
<label>Review Header<input type="text" value={this.state.review_header} onChange={(e) => this.handleUpdate('review_header', e)} /></label>
<label>Rating: </label>
<input type="text" value={this.state.rating} onChange={() => this.handleUpdate('rating')}  placeholder="5" />
         <input type="textarea" value={this.state.review_body} onChange={() => this.handleUpdate('review_body')} placeholder="Review body goes here" />

{/* review_author */}
{/* user_id */}
{/* product_id */}
{/* verified purchase (true default -- to be modified at later date) */}

<input type="submit" value="Submit Review!" />
</form>

     </div>
   )
   } }

}


const mapStateToProps = (state, ownProps) => ({
  // console: console.log("review details show state", state),
  // console: console.log("review details show ownprops", ownProps),
});


const mapDispatchToProps = dispatch => ({
updateReview: (review) => dispatch(updateReview(review)),

})

export default connect(mapStateToProps, mapDispatchToProps)(EditReview)