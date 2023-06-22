import React from "react";
import { useState,useEffect } from "react";
const Card = () => {
    const [cartProducts, setCartProducts] = useState([]);
    console.log(cartProducts, "cartProducts")
    useEffect(() => {
        // console.log("Inside cart")
        const products = JSON.parse(localStorage.getItem("products"))
        // console.log(products)
        setCartProducts(products)
    }, [])
return(
    <div>
        <h1>cart</h1>
        <button>buy product</button>
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