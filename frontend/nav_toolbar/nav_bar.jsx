import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Amazon_logo from '../../app/assets/images/Amazon_logo.png'



const NavBar = (props) => {
  // {let guest = "Guest"}
  // {console.log(this)}
  // {console.log(guest)}
    // (getState().session.id) ? (guest = window.getState().users.currentUser.username) : (guest = "Guest")
    // {}
  return(
  <div className="navbar-header">
    <Link to='/'>

        <div className="navbar-left-logo" >logo image here</div>
      </Link>
        {/* <img src="../../../app/assets/images/Amazon logo.png"  className="header-logo" alt="" /> */}
        {/* <img src={Amazon_logo} className="header-logo" alt="" />
        <Image src={Amazon_logo} className="header-logo" /> */}
        <div className="navbar-search">
          <input type="text" className="navbar-search-input" />
          <div type="text" className="navbar-search-icon">&#x1F50D;</div>
        </div>

      <div className="navbar-account">
          <div className="navbar-right account-1">
            
            
            <Link to="/login"><span className="navbar-right line-1">Welcome {props.currentUser}</span></Link>
            <span className="navbar-right line-2">login/<Link to="/greeting">logout</Link></span>
          
          </div> 
        
            <div className="navbar-right account-2">
              <span className="navbar-right line-1">Returns</span>
              <span className="navbar-right line-2">& Orders </span>
            </div>

          <div className="navbar-right account-3">
            <Link to='/account'>
            <span className="navbar-right line-1">Your</span>
            <span className="navbar-right line-2" >prime</span>
          </Link>
          </div>

          <div className="navbar-right account-4">
            <Link to="/cart" >
              <span className="navbar-right cart-1">&#128722; </span>
              <span className="navbar-right line-2">0</span> 
          </Link>
        </div>

              {/* I another header type stle below this one, maybe seperate file to make the categories */}
      </div>

  </div>

  )
}


const mapStateToProps = ( state ) => {
  return (state.entities.users[state.session.id]) ? {currentUser: state.entities.users[state.session.id].account_fname} : {currentUser: "guest"} 
  
};

const mapDispatchToProps = dispatch =>({

})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

// export default NavBar