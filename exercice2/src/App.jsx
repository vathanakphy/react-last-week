import React from "react";

import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";
import { useState } from "react";
const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },  
  {
    name: "Table",
    price: 60,
  },
];

export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);
  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header> 

      <StuffForm stuffs={stuffs} setStaff={setStuffs} />

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}
