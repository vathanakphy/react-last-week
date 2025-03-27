import React, { useState } from "react";

export default function App() {
  const[inputVal,setInputval] =  useState(0);
  
  function calculatePercent(e){
    setInputval(()=>e.target.value);
  }
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = ((inputVal/10)*100).toString()+'%';
    // 2- Compute color (optional)
    let scoreColor = `#f`+inputVal.toString()+`bc`+((inputVal)*8).toString();

    // 3 - Return the style object  
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={calculatePercent} ></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
