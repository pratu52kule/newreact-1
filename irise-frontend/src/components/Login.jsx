

import { useState } from "react"

export const Login =() => {
    const [isLoggedIn ,setIsLoggedIn] =useState(false);
    console.log(isLoggedIn,"isLoggedIn")
    return(
        <div>
            <h1>Login</h1>
            {
                isLoggedIn?
                <div>
                   <h1>Welcome ,user!</h1>
                   <button onClick={()=>setIsLoggedIn(false)}>logout!</button>
            
                </div>
                :
                <button onClick={()=>setIsLoggedIn(true)}> click to login!</button>
            }
        </div>
    )
}