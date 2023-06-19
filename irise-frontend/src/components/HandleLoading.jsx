import React from "react";
import { useState } from "react";
const HandleLoading = () => {
    const[message,setmessage] = useState("Hello")
    const[isDatashow,setIsDatashow] =useState(false);
    const[isLoadingshow,setIsLoadingshow] =useState(false);
    function stateHandling(){
       setIsLoadingshow(true)
      
        setTimeout(() =>{
               alert("hii")
              setIsDatashow(true);
        },5000);
    }
    return(
        <div>
            <h1>HandleLoading</h1>
            {isDatashow &&<h2>{message}</h2>}
            {!isDatashow&&isLoadingshow &&<h2>loading..</h2>}
            <button onClick={stateHandling}>click to message</button>
            </div>
    )
}
export default HandleLoading