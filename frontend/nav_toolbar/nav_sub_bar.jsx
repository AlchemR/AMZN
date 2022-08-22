import React from "react";
import { Link, withRouter } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const NavSubBar =  () => {
  return( 
    <div className="nav-sub">
      <Link to={`/products`}>
        <div className="sub-1 all-dropdown">
      <div className="nav-sub spacer"></div>
      <div className="dropdown-wrapper sub">
            <div className="dropdown-ico"><GiHamburgerMenu size={20} /></div>
          <div className="all-text">All</div>
          </div>
      </div>
      </Link>

      <div className="sub-2  best-sellers"><div className="sub"><Link to={`/products/category/best`}>Best Sellers</Link></div></div>
      <div className="sub-3 amzn-basics" ><div className="sub"><Link to={`/products/category/basics`}>AMZN Basics</Link></div></div>
      <div className="sub-4 new-releases"><div className="sub"><Link to={`/products/category/electronics`}>Electronics</Link></div></div>
      <div className="sub-4 new-releases"><div className="sub"><Link to={`/products/category/monitors`}>Monitors</Link></div></div>
      <div className="sub-5 today-deals"><div className="sub"><Link to={`/products/category/deals`}>Today's Deals</Link></div></div>
      <div className="sub-6 customer-service"><div className="sub"><Link to={`/products/category/customer`}>Customer Service</Link></div></div>
      <div className="sub-7 books"> <div className="sub"> <Link to={`/products/category/books`}>Books</Link></div><div id="books"></div></div>

    </div>

  )

}

export default withRouter(NavSubBar)