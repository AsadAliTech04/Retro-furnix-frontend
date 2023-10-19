
  import React from "react";

  import "./Newsletter.scss";

 
const Newsletter = () => {  
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">
                    NewsLetter
                </span>
                <span className="big-text">Sign Up for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="E-mail Addresss" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
               
              
            </div>
        </div> 
    )
};

export default Newsletter;
 