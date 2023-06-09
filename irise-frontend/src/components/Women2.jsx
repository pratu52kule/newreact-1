import { useEffect, useState } from "react";

const Women = ({isLogged}) =>{
    console.log(isLogged,"isLogged")
    const[counter, setCounter]=useState(0)
    const [counter2, setcounter2]=useState(0)
    //type 1
    //useEffect(()=>{
       
      //  console.log("code executed inside useeffect.")
    //})
    //type 2
    // useEffect(()=>{
       
     //   console.log("code executed inside useeffect for type 2.")
    //},[])
     //type 3
     // useEffect(()=>{
       //
        //console.log("code executed inside useeffect for type 3.")
    //},[counter])
    //type 4
    useEffect(()=>{
       
        console.log("code executed inside useeffect for type 4.")
    },[counter,counter2])

    function Increment(){
        setCounter((prevState)=>prevState +1)
    }
    function Increment2(){
        setcounter2((prevState)=>prevState +1)
    }
    return(
        <div>
            {isLogged === "true" ?<h1>welcome!</h1> :<h1>please login!</h1>}
            <h2>Women</h2>
            <h3>Counter 1  : {counter}</h3>
            <button onClick={Increment}>+</button>
            <h3>Counter 2  : {counter2}</h3>
            <button onClick={Increment2}>+</button>
        </div>
    )
}
export default Women;

