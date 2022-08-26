import React from "react";
import { Link } from "react-router-dom";

const CustomerDetails = () => {

  return (

    <div className="account-information-main grow-main">
      <div className="customer-service-wrapper">
        <div className="customer-service-spacer-top">
          <a href="https://github.com/AlchemR/AMZN">
            <img src="https://readme-typing-svg.herokuapp.com?font=Libre+Franklin&size=25&duration=2000&pause=500&color=000000&center=true&vCenter=true&multiline=true&width=600&height=200&lines=Thanks+for+visiting+AMZN;How's+your+UI+so+far%3F;Want+a+Site+Tour%3F;Click+Me" alt="Typing SVG" />
            </a>
        </div>
        <div className="additonal-resources"> 
          <span className="additional-resources-text" >Additional Resources</span>
        <div className="contact-options">
          <div className="ask-the-experts">
            <a href="https://www.linkedin.com/in/peter-r-173614230/" target="_blank" className="hyperlink" >
              <img src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/GUID-A7ECC701-DE4A-4948-BBB8-EFD5CBC7FC19%3D1%3Den-US%3DNormal.png" alt="" />
              <span className="amzn-creators" > Ask the Community </span>
              <span className="amzn-creators-subtext">Get Answers from the Community about past experiences Collaborating with Peter</span>
              <span className="amzn-creators-subtext">See What other people say</span>
              </a>
            </div>

            <div className="ask-the-experts">
            <a href="https://alchemr.github.io/portfolio/" target="_blank" className="hyperlink">
              <img src="https://amzn-app-seed.s3.us-west-1.amazonaws.com/GUID-384C4769-1F42-4A90-BC6B-50FBF811B4CD%3D1%3Den-US%3DNormal.png" alt="" />
              <span className="amzn-creators">Start a Chat now </span>
              <span className="amzn-creators-subtext">The Creator of this web-site is happy to connect</span>
              <span className="amzn-creators-subtext">Let's Solve Problems Together</span>
              </a>
            </div>
        </div>

        </div>

        {/* <div className="customer-service-spacer-bottom"></div> */}

      </div>
    </div>
  )

}
export default CustomerDetails