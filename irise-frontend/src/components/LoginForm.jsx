import { useDebugValue, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({ email: '', password: '' });
    // console.log(userData, "- userdata")

    function handleChange(event) {
        // console.log(event.target.value, "event.target.value")
        // console.log(event.target.name, "event.target.name ")
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        // check conditions
        if (userData.email && userData.password) {
            // alert("Got it..")
            // call backend and send data

            var Users = JSON.parse(localStorage.getItem('Users'));

            var isUserFound = false;
            for (var i = 0; i < Users.length; i++) {
                // console.log(Users[i].email, Users[i].password)
                if (Users[i].email == userData.email && Users[i].password == userData.password) {
                    isUserFound = true;
                }
            }
            if (isUserFound == true) {
                alert("You are logged In.")
                router('/');
                setUserData({ email: '', password: '' })
            } else {
                alert("Please check your credentials..")
            }
        } else {
            alert("All fields Required!")
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email : </label><br />
                <input value={userData.email} name='email' onChange={handleChange} type="email" placeholder="Type your email.." /><br />
                <label>Password : </label><br />
                <input value={userData.password} name='password' onChange={handleChange} type="password" placeholder="Type your password.." /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm;