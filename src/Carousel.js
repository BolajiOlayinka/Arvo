import React from 'react'
import model from './images/Ellipse 3.svg';
import './Carousel.css'

export default function Carousel() {
    return (
        <div className="carouselArea">
                <img src={model} alt="model"/>
                <h5>Best Investment App Ever!</h5>
                <p>With ArvoFinance, you can easily get a quick loan within an hour without collaterals and delays, you can also invest.</p>
                <span className="dotSection">
                    <div className="dotActive"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </span>
                
            </div>
    )
}
