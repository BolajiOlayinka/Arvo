import React from "react";
import "./Advert.css";
import Button from "./Button";
import loan from "./images/budget.svg";
import phone from "./images/Group 15.svg";
import Carousel from "./Carousel";
import Card from "./Card";
import logo1 from "./images/bd5c0c35e3efaf9a64457e2be35560b0.png";
import logo2 from "./images/Vector (2).png";
import logo3 from "./images/Vector (1).png";
import logo4 from "./images/Vector.png";
import footerWrapper from "./FooterWrapper";

export default function Advert() {
  return (
    <div>
      <div className="advertContent">
        <div className="col-lg-12">
          <div className="row">
            <div className="advertArea">
              <p>INVEST WITH ARVO FINANCE</p>
              <p className="advertInvest">
                The best way to invest your money and get quick access to loans.
              </p>

              <div className="buttonArea">
                <Button
                  className={"button"}
                  id={"buttonWhite"}
                  // theme={props.backgroundColor}
                  // onClick={props.onClick}
                  buttonText={"Arvo Loans"}
                />
                <Button
                  className={"buttonYellow"}
                  id={"buttonAdvert"}
                  // theme={props.backgroundColor}
                  // onClick={props.onClick}
                  buttonText={"P2P Investment"}
                />
              </div>
              <hr className="line" />
            </div>
          </div>
          <div className="arvoLoan">
            <div className="row">
              <div class="col-lg-6">
                <div class="loanLeft">
                  <img src={loan} alt="loan" />
                  <h2> Arvo Loan</h2>
                  <p>
                    {" "}
                    With ArvoFinance, you can easily get a quick loan within an
                    hour without collaterals and delays, you can also invest
                    your money through our peer-to-peer platform
                  </p>
                  <Button
                    className={"buttonYellow"}
                    id={"start"}
                    // theme={props.backgroundColor}
                    // onClick={props.onClick}
                    buttonText={"Get Started"}
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="loanRight">
                  <img src={phone} alt="phone" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel />

        <div className="row">
          <div className="col-lg-12">
            <div className="logoArea">
              <img src={logo2} alt="logo1" className={"col-lg-3 col-md-6 "} />
              <img
                src={logo1}
                alt="logo2"
                className={"col-lg-3 col-md-6"}
                id={"bigLogo"}
              />
              <img src={logo4} alt="logo3" className={"col-lg-3 col-md-6"} />
              <img src={logo3} alt="logo4" className={"col-lg-3 col-md-6"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
