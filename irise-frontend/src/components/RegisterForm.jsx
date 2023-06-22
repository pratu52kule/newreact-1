import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const RegisterForm = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({ name: '', email: '', password: '', confirmPassword: "" });
    console.log(userData, "userData")

    function handleChange(event) {
       // console.log("Function called")
        //console.log(event.target.name, "event.target.name")
        //console.log(event.target.value, "event.target.value")
        setUserData({...userData, [event.target.name]:event.target.value});
    }
//...userdata,   tostore the previous state i,e sped operator
     function handlesubmit(event){
            event.preventDefault();
            //to strictly check fill details
            if(userData.name && userData.email && userData.password.length && userData.confirmPassword){
                
            if(userData.password.length < 8 && userData.confirmPassword.length < 8){
                if(userData.password===userData.confirmPassword){
                     // call backend api and pass the data or use localstorage

                     var array = JSON.parse(localStorage.getItem("Users")) || [];
                     array.push(userData)
                     localStorage.setItem("Users", JSON.stringify(array))
                     router('/login-form')
                     alert("Data Submitted to backend!")
                     setUserData({ name: '', email: '', password: '', confirmPassword: "" });
 
                    
                }else{
                    alert("password and confirm password not match")
                }
               }else {
                alert("data submitted")
            }
        } else {
            alert("Something is missing, Please fill the all details..")
        }
        } 
    
            
     
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handlesubmit}>
                <label>Name</label><br />
                <input type='text' name='name' onChange={handleChange} placeholder='Type your name..' /><br />
                <label>Email </label><br />
                <input type='email' name='email' onChange={handleChange}placeholder='Type your email..' /><br />
                <label>Password</label><br />
                <input type='password' name='password' onChange={handleChange} placeholder='Type your password..' /><br />
                <label>Confirm Password</label><br />
                <input type='password' name='confirmPassword' onChange={handleChange} placeholder='Type your confirm password..' /><br />
                <input type='submit' value='Sign Up' /><br />
            </form>
        </div>
    )
}

export default RegisterForm