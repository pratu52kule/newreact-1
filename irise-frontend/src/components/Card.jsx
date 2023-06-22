import React from "react";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Card = () => {
    const [cartProducts, setCartProducts] = useState([]);//step 3
    const router = useNavigate();
    console.log(cartProducts, "cartProducts")
    useEffect(() => {
        // console.log("Inside cart")
        const products = JSON.parse(localStorage.getItem("products"))//step1
        // console.log(products)
        setCartProducts(products)//step 2
    }, [])
    function buyproduct(){
       // alert("inside the function")
       localStorage.removeItem("products") // 4 step - removing from browser
       setCartProducts([]) // step 5 - removing from component state
       router('/')
       alert("Congracts, Products will deliver soon.")
    }
return(
    <div>
        <h1>cart</h1>
        <button onClick={buyproduct}>buy product</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-around' }}>
                {cartProducts.map((pro) => (
                    <div style={{ width: "23%", height: "400px", border: '1px solid black' }}>
                        <img style={{ width: '80%', height: '200px', paddingTop:'25px' }} src={pro.image} />
                        <h3>{pro.title}</h3>
                        <h3>{pro.price}</h3>
                    </div>
                ))}
            </div>
        </div>
)
}
export default Card;