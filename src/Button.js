
import React from 'react';
import './Button.css';

const Button = (props) => {
 return (
  <button className={props.className} id={props.id} theme={props.backgroundColor} color={props.color} onClick={props.onClick}> {props.buttonText} </button> 
)}
export default Button;