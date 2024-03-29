import React from "react";
import logo from "./logo.png";
import "./Navbar.css";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="index.html">
        <img src={logo} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              About Us<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              How it Works
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="index.html" tabindex="-1">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              FEDPay
            </a>
          </li>
        </ul>

        <Button className="button" buttonText="Sign In" />
        <Button className="buttonYellow" buttonText="Download App" />

        {/* <form className="form-inline my-2 my-lg-0">
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
      </div>
    </nav>
  );
}

// <div classNameName="navbar navbar-expand-lg ">
//    <a classNameName="navbar-brand" href="index.html"><img src= {logo} alt="logo"/></a>
//    <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle navigation">
//     <span classNameName="navbar-toggler-icon"></span>
//     </button>
//     <div id="navItems" classNameName="collapse">
//         <a href="index"> About Us</a>
//         <a href="index"> How it Works</a>
//         <a href="index"> Contact Us</a>
//         <a href="index"> FAQs</a>
//         <a href="index"> fedPay</a>
//     </div>
//     <div classNameName="navItems-right">
{
  /* <ButtonContainer>
                Sign in
            </ButtonContainer>
            <ButtonContainer>
                Download App
            </ButtonContainer> */
}
//     <a href="index" classNameName="btn"> Sign In</a>
//     <a href="index" classNameName="btn"> Download App</a>
//     </div>
// </div>
