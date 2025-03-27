import React from "react";
export default function OrderCard({item,inc,dcr}) {
  return (
    <div className="order">
      <div>
        <h4>{item.product}</h4>
        <small>{item.price}</small>
      </div>

      <div className = "order-quantity ">  
        <div className="order-button" onClick={dcr} >-</div>
        <h4>{item.quantity}</h4>
        <div className="order-button" onClick={inc} >+</div>
      </div>
    </div>
  );
}
