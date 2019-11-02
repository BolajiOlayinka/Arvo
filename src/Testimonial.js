import React from 'react';
import './Testimonial.css';
import ellipse from './images/Ellipse 2.svg';
import ellipse2 from './images/Ellipse 2.1.svg';
import model from './images/Ellipse 3.svg'

export default function Testimonial() {
    return (
    
        
        <div className="testimomialArea">
        <img src ={ellipse} alt="ellipse" className="ellipse1"/>
        <img src ={ellipse2} alt="ellipse" className="ellipse2"/>

       
            {/* <div class="row">
                <div class="col-lg-6">
                    <div className="leftBackground">

                    </div>

                </div>
                <div class="col-lg-6">
                    <div className="rightBackground">

                </div>
            </div>
        </div> */}
        
        </div>
    )
}
