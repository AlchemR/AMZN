import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { requestCart } from "../actions/cart_actions"


class SearchBar extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      query: "",
      category: "All"
    }
    // this.handleClick = this.handleClick.bind(this)
    this.updateSearchInput = this.updateSearchInput.bind(this)
  }

  // componentDidUpdate(){
  //   console.log("this.state", this.state)
  // }

// updateSearchInput = (feild) => {
updateSearchInput = (e, feild) => {
  // console.log("feild", feild)
  this.setState({ [feild]: e.target.value })
  // return e => this.setState({ [feild]: e.target.value })
  // return e => this.setState({ [feild]: e.target.value }, () => console.log(this.state))
  // return e => this.setState({ [feild]: e.currentTarget.value }), console.log(this.state, e)
}

  searchSubmit(e){
    e.preventDefault()
    let querydata = this.state
    // console.log("searchSubmit", querydata)
    if (this.state.category === "All") { this.props.history.push(`/products/search/${this.state.query}`) } else { this.props.history.push(`/products/${this.state.category}/search/${this.state.query}`) }
    this.setState({ query: "", category: "All" },  () => console.log("searchsubmit, this state", this.state) )
  }

  render(){

    return (
      <div className="navbar-search">
        <form onSubmit={(e) => this.searchSubmit(e)} className="navbar-search" > 
          {/* <select onChange={() => this.updateSearchInput("category")}> */}
          <select onChange={(e) => this.updateSearchInput(e, "category")}>
            <option value="All" selected>All</option>
            <option value="Electronics">Electronics</option>
          </select>
        {/* <input type="text" className="navbar-search-input" onChange={() => this.updateSearchInput("query")} /> */}
        <input type="text" className="navbar-search-input" onChange={(e) => this.updateSearchInput(e, "query")} />
          {/* <div type="text" className="navbar-search-icon">&#x1F50D;</div> */}
        <button className="navbar-search-icon" onClick={(e) => this.searchSubmit(e)} >&#x1F50D;</button>
        </form>
       </div>
    )
  }

}



const mapStateToProps = (state, ownProps) => {
  // console.log("MSTP searchbar state",state),
  // console.log("MSTP navbar2 ownProps", ownProps)
return (
  <div></div>
)
};

const mapDispatchToProps = dispatch => ({
  requestCart: (cartId) => dispatch(requestCart(cartId)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))