import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";
import { useState } from "react";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  function inc(id){
    const orderUp = orders.map((item,index)=>{
      if(index===id){
        return { ...item, quantity: item.quantity + 1 }; 
      }
      return item;
    })
    setOrders(orderUp);
  }
  function dcr(id){
    const orderUp = orders.map((item,index)=>{
      if(index===id){
        if(item.quantity!==0){
          return { ...item, quantity: item.quantity - 1 }; 
        }
      }
      return item;
    })
    setOrders(orderUp);
  }
  function countTotal(){
    let total = 0;
    orders.map((item)=>{
      total+=(item.quantity *item.price)
    })
    return total;
  }
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((item,index)=>(
          <OrderCard key={index} item={item} inc={()=>inc(index)} dcr={()=>dcr(index)}  />
        ))}
      </div>

      <CheckoutButton total={countTotal()} />
    </>
  );
}
