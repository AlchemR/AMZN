
import React from "react";
import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { withRouter } from "react-router-dom";

const AccountDetails = (props) => {

  const [open, setOpen] = useState(false);
  const container = useRef(null)

  const clickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });

  return (

    <div className="dropdown-cont" ref={container} onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)} >
    {/* <div className="dropdown-container" ref={container}> */}
      <span className="navbar-right line-1">Your</span>
      <span className="navbar-right line-2"  >prime
      {/* <button className="dropdown-button" onClick={() => setOpen(!open)}> */}
      {open ? <IoMdArrowDropup/> : <IoMdArrowDropdown />}
      {/* </button> */}
      </span>

      {open ? (
        <div className="dropdown-wrap">
          <div className="account-information-main-1">
            <div className="account-information-wrapper-1">
              <div className="dropdown-prime-text" onClick={() => props.history.push("/cart")} >Your shopping Cart</div>
              <div className="dropdown-prime-text">Your Reviews</div>
              <div className="dropdown-prime-text">Your order history</div>
              <div className="dropdown-prime-text">Your saved for later</div>
              <div className="dropdown-prime-text">Recommended for you</div>
            </div>
          </div>

        </div>
      )
        : null
      }
    </div>


  )

}


export default withRouter(AccountDetails)