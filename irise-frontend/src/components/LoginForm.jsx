import React, { useState } from "react";
const LoginForm = () => {
    const[userdata,setuserdata]=useState({email:'',password:''});
    console.log(userdata,"userdata")
    function handlechange(event){
       // console.log(event.target.value,"event.target.value")
        //console.log(event.target.name,"event.target.name")
        setuserdata({...userdata ,[event.target.name]:event.target.value})
    }
    function handlesubmit(event){
        event.preventDefault();
        console.log("hiii");
        if(userdata.email && userdata.password){
            alert("got it...")
            setuserdata({ email: '',password: ''})
        }
        else{
            alert("all fields Required")
        }
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <label>Email : </label><br/>
                <input value={userdata.email }name="email" onChange={handlechange} type="email" placeholder="type your email.." /><br/>
                <label>password :</label><br/>
                <input value={userdata.password}name="password" onChange={handlechange} type="password " placeholder="type your password" /><br/>
                <input type="submit" value="login"/>
            </form>
        </div>
    )   
    }

export default LoginForm;