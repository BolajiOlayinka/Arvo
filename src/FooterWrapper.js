import React from 'react';
import './footerWrapper.css';
import Button from './Button';
import styled, { css } from 'styled-components';

export default function footerWrapper() {
    return (
        // <div className="Wrapper">
            
        // </div>
        <div className="Wrapper">
            <h5>Ready to get started?</h5>
            <p>With ArvoFinance, you can easily get a quick loan within an hour without collaterals and delays, you can also invest.</p>
            <Button
            className={"buttonYellow"} 
            id={"create"}
            buttonText={"Create an Account"}
            />
        </div>
    )
}

