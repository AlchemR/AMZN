import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { requestCart } from "../actions/cart_actions"
import { BsSearch } from "react-icons/bs"



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
    // let querydata = this.state
    // console.log("searchSubmit", querydata)
    // console.log("!= All", (this.state.category != "All" ) )
    // console.log("!= query", (this.state.query === "" ) )

    if (this.state.category === "All" && this.state.query === "" ) { alert("Please enter a query to use the search function") } else{
      if (this.state.category != "All" && this.state.query === "") {this.props.history.push(`/products/category/${this.state.category}`)} else{ 
        if (this.state.category === "All") { this.props.history.push(`/products/search/${this.state.query}`) } else { this.props.history.push(`/products/category/${this.state.category}/search/${this.state.query}`) }
      }
    }
    
    this.setState({ query: "", category: "All" } )
  } 



  render(){
    return (
      <div className="navbar-search">
        <form onSubmit={(e) => this.searchSubmit(e)} className="navbar-search" > 
          {/* <select onChange={() => this.updateSearchInput("category")}> */}
                      

          <select style={{width:`${ 8 * this.state.category.length + 20 }px`}} className="search-dropdown" value={this.state.category} onChange={(e) => this.updateSearchInput(e, "category")}>
            <option value="All" defaultValue>All</option>
            <option value="books">books</option>
            <option value="best">best sellers</option>
            <option value="deals">Deals</option>
            <option value="basics">basics</option>
            <option value="mats">mats</option>
            <option value="exercise">exercise</option>
            <option value="weights">weights</option>

          </select>
        {/* <input type="text" className="navbar-search-input" onChange={() => this.updateSearchInput("query")} /> */}
          <input type="text" className="navbar-search-input" placeholder={"Search product names or brands: eg. 'TV' 'Exercise' or 'Acer' "} onChange={(e) => this.updateSearchInput(e, "query")} value={this.state.query} />
          {/* <div type="text" className="navbar-search-icon">&#x1F50D;</div> */}
          <button className="navbar-search-icon" onClick={(e) => this.searchSubmit(e)} ><BsSearch size={20} color={'black'} /></button>
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