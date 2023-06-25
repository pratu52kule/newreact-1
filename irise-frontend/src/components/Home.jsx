import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const Home =() =>{
  const [currentUser, setCurrentUser] = useState({});
  console.log(currentUser, "currentUser")
  const router = useNavigate();

   const style ={
        color:"red",
        backgroundColor:"green",
        padding:"30px"
    }
    const styleForHome = {
        backgroundColor: "blue"
      }
      useEffect(() => {
        // alert("Called")
        const CurrentUser = JSON.parse(localStorage.getItem("current-user"))
        setCurrentUser(CurrentUser);
      }, [])
    
      function logout() {
        // alert("Logout")
        localStorage.removeItem("current-user")
        setCurrentUser({});
        alert("You are successfully logout!")
      }
    return(
        
      <div style={style}>
      {currentUser?.email ? <button onClick={logout}>Logout</button> : <button onClick={() => router('/login-form')}>Login</button>}
      <h1 style={styleForHome}>Home</h1>
    </div>
    
    )
}
export default Home;