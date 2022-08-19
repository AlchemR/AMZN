import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavSubBar =  () => {
  return( 
    <div className="nav-sub">
      <Link to={`/products`}>
      <div className="sub-1 all-dropdown">
      <div className="dropdown-ico">&#9776;</div>
          <div className="all-text">All</div>
      </div>
      </Link>

      <div className="sub-2 best-sellers"><Link to={`/products/category/best`}>Best Sellers</Link></div>
      <div className="sub-3 amzn-basics" ><Link to={`/products/category/basics`}>AMZN Basics</Link></div>
      <div className="sub-4 new-releases"><Link to={`/products/category/electronics`}>Electronics</Link></div>
      <div className="sub-4 new-releases"><Link to={`/products/category/monitors`}>Monitors</Link></div>
      <div className="sub-5 today-deals"><Link to={`/products/category/deals`}>Today's Deals</Link></div>
      <div className="sub-6 customer-service"><Link to={`/products/category/customer`}>Customer Service</Link></div>
      <div className="sub-7 books"><Link to={`/products/category/books`}>Books</Link></div>

    </div>

  )

}

export default withRouter(NavSubBar)