import { useState } from "react";

const Mens = ()=>{
    const[number,setnumber]=useState(9876);
    const [isliked,setisliked]=useState(true);
   // console.log(number,"number")
   function counter(){
    setnumber((prevstate)=>prevstate +1)
   }
   function decrement(){
    setnumber((prevstate)=>prevstate-1)
   }
   function like(){
    setisliked(false);
    alert("liked");
   }
    return(
        <div>
            <h1>Mens</h1>
        <h3>counter : {number}</h3>
        <button onClick={counter} >+</button>
        <button onClick={decrement}>-</button>
        {isliked ? <h2>not liked!</h2>:<h2>liked</h2>}
        
        <button onClick={like}>like</button>
        </div>
    )
}
export default Mens;