import { FcCheckmark } from 'react-icons/fc'
import { ImPointRight } from 'react-icons/im'
import React from 'react'
import { connect } from "react-redux"


const Checkout = () => {
  const handleToggle = () => { $('.rotate-load').toggleClass('load-complete'); $('.checkmark-animate').toggle(); $('.with-checkmark').toggle(); $('.without-checkmark').toggle() }

  setTimeout(() => handleToggle(), 1)
  setTimeout(() => handleToggle(), 10)
  setTimeout(() => handleToggle(), 5000)
  return (
    <div className='grow-main'>
      <div className="payment-box">
        <div className="payment-confirm">

          <div className='checkmark'>
            <div className='rotate-load' onClick={handleToggle}> <div className='checkmark-animate'></div> </div>
            
            <div className='checkout-text-placeholder'>
            <p className='with-checkmark'>Thank you, your AMZN order has been Processed!</p>
            <p className='without-checkmark'>Obtaining Payment Details....</p>
            </div>
          </div>

          <div className='connect-me'>

            <p> Let's connect</p>
              <div className='connect-socials'>
                <a href="https://www.linkedin.com/in/peter-r-173614230/" target="_blank"><img className="navbar-footer-linkedin-logo white-hover-border" height="50" src={window.linkedin_logo} alt="linkedin logo IMG" /></a>
                <a href="https://github.com/AlchemR/" target="_blank"><img className="navbar-footer-github-logo white-hover-border" height="50" src={window.github_logo} alt="github logo IMG" /></a>
                <a href="https://angel.co/u/peter-romo" target="_blank"><img className="navbar-footer-angels-list-logo white-hover-border" height="50" src={window.angels_list} alt="angels list logo IMG" /></a>
                <a href="https://alchemr.github.io/portfolio/" target="_blank"> <img className="navbar-footer-portfolio-logo white-hover-border" height="50" src={window.portfolio} alt="portfoilio logo IMG" /></a>


            </div>
          </div>
        </div>


      </div>
      <footer>
      </footer>
    </div>



  )
}


// const mapStateToProps = (state, ownProps) => ({
//   cartId: state.session.cart,
//   // console1: console.log("state", state),
//   // console2: console.log("ownProps", ownProps),
//   // console3: console.log("state entities cart", state.entities.cart),
//   cart: state.entities.cart ? Object.values(state.entities.cart) : null,
//   products: state.entities.products ? Object.values(state.entities.products) : null
//   // cart: state.entities.cart,
// });

// const mapDispatchToProps = dispatch => ({
//   requestProducts: () => dispatch(requestProducts()),
//   requestLedger: (ledgerId) => dispatch(requestLedger(ledgerId)),
//   updateLedger: (ledger) => dispatch(updateLedger(ledger)),
//   deleteLedger: (ledgerId) => dispatch(deleteLedger(ledgerId)),
//   requestCart: (cartId) => dispatch(requestCart(cartId)),
// })

export default Checkout;