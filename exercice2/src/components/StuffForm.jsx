import { useState } from "react";
export default function StuffForm({stuffs,setStaff}) {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  function addStaff(event){
    event.preventDefault();
    if(name===''||price===''){
      alert("Form must be fill");
    }else{
      setStaff([...stuffs,{name:name,price:parseFloat(price)}]);
      setName("");
      setPrice("");
    }
  }
  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" value={name} placeholder="Banana" onChange={(e)=>setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="search" value={price} placeholder="15" onChange={(e)=>setPrice(e.target.value)} />

      <button onClick={addStaff} >Add Stuff</button>
    </form>
  );
}
