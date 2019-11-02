import React from 'react';
import './Banner.css';
import  Appstore from "./images/get-it-on-google-play_2_orig.png";
import googleStore from "./images/Available-on-the-App-Store-logo-vector-1024x336-1024x336.png";
import phone from "./images/Group 14.svg";
import Card from './Card';
import budget from './images/mortgage (1).svg';
import mortgage from './images/cash 2.svg';
import money from './images/tax.svg';
export default function Banner() {
    return (
        <div className="bannerContent">
        <div className="col-lg-12">
        <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="bannerLeft">
            
                <h3>The best way to invest your money and get quick access to loans.</h3>
                <p>With ArvoFinance, you can easily get a quick loan within 
                an hour without collaterals and delays, you can also invest 
                your money through our peer-to-peer platform.</p>
                <p>Download and use on the go!</p>

                <div class="app">
                    <img className="Appstore" src ={Appstore} alt="appstore"/>
                    <img className="googleApp" src ={googleStore} alt="googleapp"/>
                </div>

            </div>
               </div> 
              
               <div className="col-lg-6 col-md-6-col-sm-12 col-xs-12">
               <div className="bannerRight">
                    <img className="phone" src={phone} alt="phone"/>
                   </div> 
                   </div>
                   </div>


                   
                

                 </div>
                 <div class="row">
                 <Card
                            cardColClass={"col-sm-4 col-lg-4 col-md-12"}
                            
                            cardImage={<img src= {mortgage} alt="mortgage" className="card-image"/> }
                            cardBorder={"card border-default mx-auto"}
                            cardTitle={"Quick Loans"}
                            cardText={"At Arvo, we've developed our application to be as straightforward and convenient as possible. There is no need to take the time to travel to a location" }
                        /> 
                     <Card
                            cardColClass={"col-sm-4 col-lg-4 col-md-12"}
                            cardImage={<img src= {budget} alt="budget" className="card-image"/> }
                            cardBorder={"card border-default mx-auto"}
                            cardTitle={"No Collaterals"}
                            cardText={"Through a novelly structured loan, we are able to minimise the risk associated with consumer loans in Nigeria. Making loans available for." }
                        />
                     <Card
                            cardColClass={"col-sm-4 col-lg-4 col-md-12"}
                            cardImage={<img src= {money} alt="money" className="card-image"/> }
                            cardBorder={"card border-default mx-auto"}
                            cardTitle={"Guranteed Lowest Interest Rates"}
                            cardText={"As a responsible fintech company, we design our products to ensure our customers get the lowest interest rate in the market" }
                        />  
                 </div>
                  
                  </div> 


    )
}

