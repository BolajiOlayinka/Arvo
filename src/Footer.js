import React from 'react';
import logo from './images/logo.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import linkedIn from './images/linkedIn.png';
import Appstore from './images/Available-on-the-App-Store-logo-vector-1024x336-1024x336.png';
import Googleplay from './images/get-it-on-google-play_2_orig.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                   
                        <div className="col-lg-3 col-md-6">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footerTitle">
                                <a href="index.html">Solutions</a>
                            </div>
                            <div  className="footerBody">
                                <p><a href="index.html">FEDPAY</a></p>
                                <p><a href="index.html">Online Application</a></p>
                                <p><a href="index.html">Financial Planning</a></p>
                                <p><a href="index.html">Collateral Free Loan</a></p>
                                <p><a href="index.html">Affordable interest rates</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footerTitle">
                            <a href="index.html">Resources</a>
                            </div>
                            <div  className="footerBody">
                                <p><a href="index.html">Blog</a></p>
                                <p><a href="index.html">Privacy Policy</a></p>
                                <p><a href="index.html">Terms of Service</a></p>
                                <p><a href="index.html">Press</a></p>
                                <p><a href="index.html">Contact Us</a></p>
                                <p><a href="index.html">Fraud ALERTS</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="footerTitle">
                        <a href="index.html">Support</a>
                                
                        </div>
                        <div  className="footerBody">
                                <p><a href="index.html">+2348021810034</a></p>
                                <p><a href="index.html">hello@arvofinance.com</a></p>
                                <p><a href="index.html">ombudsman</a></p>
                                <p><a href="index.html">
                                    <img src={twitter} alt="twitter"/>
                                    <img src={facebook} alt="facebook"/>
                                    <img src={instagram} alt="instagram"/>
                                    <img src={linkedIn} alt="linkedIn"/>

                                </a></p>
                                
                            </div>
                           
                        
                            
                </div>
                
                
            </div>
            <hr className='footerLine'/>  
            <div className="footerEnd">
            <p><a href="index.html">Download Our Mobile App</a></p>
            <div class="footerEndIcon">
            <img src={Appstore} alt="Appstore"/>
            <img src={Googleplay} alt="googleplay"/>
            
            </div>
            <a href="index.html" className="copyRight"><p>© Arvo Finance 2019</p></a>
            </div>

        </div>
    )
}
