import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
        <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{"z-index":3 ,"width":"300px"}} id="mySidebar"><br/>
            <div className="w3-container">
                <a href="#" onclick="w3_close()" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
                <i className="fa fa-remove"></i>
                </a>
                <img src="./Image/logo.jpg" style={{"width":"45%" }}className="w3-round" /><br/><br/>
                <h4><b>PORTFOLIO</b></h4>
                <p className="w3-text-grey">Template by W3.CSS</p>
            </div>
            <div className="w3-bar-block">
            <Link to="" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-text-teal"> <i className="fa fa-th-large fa-fw w3-margin-right"></i>Home</Link> 
            <Link to="about" onclick="w3_close()" className="w3-bar-item w3-button w3-padding">   <i className="fa fa-user fa-fw w3-margin-right"></i>ABOUT </Link>
            <Link to="contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding">   <i className="fa fa-user fa-fw w3-margin-right"></i>CONTACT </Link>
            </div>
            <div className="w3-panel w3-large">
                <i className="fa fa-facebook-official w3-hover-opacity"></i>&nbsp;
                <i className="fa fa-instagram w3-hover-opacity"></i>&nbsp;
                <i className="fa fa-snapchat w3-hover-opacity"></i>&nbsp;
                <i className="fa fa-pinterest-p w3-hover-opacity"></i>&nbsp;
                <i className="fa fa-twitter w3-hover-opacity"></i>&nbsp;
                <i className="fa fa-linkedin w3-hover-opacity"></i>
            </div>
        </nav>
      {/* <!-- Overlay effect when opening sidebar on small screens --> */ }
        <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>

    </>
  )
}

export default Sidebar