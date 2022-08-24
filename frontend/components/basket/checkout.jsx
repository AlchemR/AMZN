import { FcCheckmark } from 'react-icons/fc'
import { ImPointRight } from 'react-icons/im'
import React from 'react'


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

export default Checkout;