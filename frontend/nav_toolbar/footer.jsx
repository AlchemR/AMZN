import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Amazon_logo from '../../app/assets/images/Amazon_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { requestCart } from "../actions/cart_actions"
import SearchBar from "./search_bar"
import { IoMdArrowDropdown } from "react-icons/io"



class Footer extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidUpdate() {
    console.log("how often does componentdidupdate hit?")
  }

  componentDidMount() {
    console.log("how often does componentdidmount hit?")
    if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined) { this.props.requestCart(this.props.cartId), console.log("nav bar 29, requested cart") }
  }

  // componentWillUnmount() {
  //   console.log("component will unmount test time")
  // }

  loginlogout() {
    if (this.props.currentUser == "guest") { return "/login" } else { return "/greeting" }
  }

  render() {
    // { if (typeof this.props.cartId !== "string" && this.props.cartId !== undefined ) {this.props.requestCart(this.props.cartId), console.log("navbar render header",)}}
    // {console.log("render", this.props.cart)}

    return (
      <div className="navbar-footer">
        <div className="navbar-footer-spacer"></div>
        <div className="nav-footer-above">
          <button className="built-in-location ">Built in California <img className="navbar-footer-ca-logo" width="25" src={window.ca_flag} alt="caifornia flag IMG" />, <img className="navbar-footer-usa-logo" width="25" src={window.usa_flag} alt="usa flag IMG" /> USA</button>
          <img className="navbar-footer-logo white-hover-border" height="50"  src={window.amzn_logo} alt="Amazon IMG logo" />
          <a href="https://www.linkedin.com/in/peter-r-173614230/"><img className="navbar-footer-linkedin-logo white-hover-border" height="50" src={window.linkedin_logo} alt="linkedin logo IMG" /></a>
          <a href="https://github.com/AlchemR/"><img className="navbar-footer-github-logo white-hover-border" height="50" src={window.github_logo} alt="github logo IMG" /></a>
          <a href="https://angel.co/u/peter-romo"><img className="navbar-footer-angels-list-logo white-hover-border" height="50" src={window.angels_list} alt="angels list logo IMG" /></a>
          <a href="https://alchemr.github.io/portfolio/"> <img className="navbar-footer-portfolio-logo white-hover-border" height="50" src={window.portfolio} alt="portfoilio logo IMG" /></a>


          <select placeholder="Select a Language to Contact Peter in" className="language-dropdown" >
            <option value={1} >Select a Language to Contact Peter in</option>
            <option value={1} >English</option>
            <option value={2}>Spanish</option>
            <option value={3}>German</option>
          </select>


        </div>
        <div className="navbar-footer-below">

        </div>
      </div>

    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   console.log("MSTP navbar state", state)
//   // console.log("MSTP navbar ownprops",ownProps)
//   // console.log("MSTP navbar2", state.entities)
//   return (state.entities.cart && state.entities.users[state.session.id]) ? {
//     currentUser: state.entities.users[state.session.id].account_fname,
//     cartId: state.session.cart,
//     cartCount: state.entities.cart.cartCount,
//     ledgerCount: state.entities.ledger.ledgerCount
//   } : { currentUser: "guest" }

// };

// const mapDispatchToProps = dispatch => ({
//   requestCart: (cartId) => dispatch(requestCart(cartId)),
// })


export default (Footer)
// export default connect(mapStateToProps, mapDispatchToProps)(Footer)