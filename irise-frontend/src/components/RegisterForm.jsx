import React, { useState } from 'react'

const RegisterForm = () => {
    const [userData, setUserData] = useState({ name: '', email: '', password: '', confirmPassword: "" });
    console.log(userData, "userData")

    function handleChange(event) {
        console.log("Function called")
        console.log(event.target.value, "event.target.value")
    }

    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>Name</label><br />
                <input type='text' onChange={handleChange} placeholder='Type your name..' /><br />
                <label>Email </label><br />
                <input type='email' placeholder='Type your email..' /><br />
                <label>Password</label><br />
                <input type='password' placeholder='Type your password..' /><br />
                <label>Confirm Password</label><br />
                <input type='password' placeholder='Type your confirm password..' /><br />
                <input type='submit' value='Sign Up' /><br />
            </form>
        </div>
    )
}

export default RegisterForm