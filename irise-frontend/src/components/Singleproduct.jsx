import axios,{all} from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate ,useParams } from 'react-router-dom';
const Singleproduct = () => {
    const[product,setproduct]=useState({});
    const {id} = useParams();
    const router = useNavigate();
  // console.log(product,"-product");
   
    useEffect(() => {
         async function getsingleproductdata(){
        const res = await axios.get("https://fakestoreapi.com/products")
        const allproduct =res.data;
        const pro=allproduct.find((product)=>product.id == id)
       // console.log(pro,"-pro")
        setproduct(pro);
    }
    getsingleproductdata()
    },[])
     // JSON.parse - json -> js
    // JSON.stringify - js -> json 
    // localStorage.getItem - to acesss data from localStorage 
    // localStorage.setItem - to set data into localStorage 
       
    function addCart(product) {
        console.log(product, "product")

        var array = JSON.parse(localStorage.getItem('products')) || [];
        array.push(product);
        localStorage.setItem("products", JSON.stringify(array))
        router('/card')
        alert("Product added to cart successfully.")
    }
     

    return(
        <div>
          {product.title ? <div style={{ width: '90%', margin: 'auto', border: '2px solid black', height: '500px', display: 'flex' }}>

<div style={{ width: '50%', paddingTop: '40px' }}>
    <img style={{ width: "60%", height: '400px' }} src={product.image} />
</div>
<div>
    <h1> Product Name : {product.title}</h1>
    <h1>Price : {product.price} Rs.</h1>
    <button onClick={() => addCart(product)}>Add to Cart</button><br/>
   
</div>

</div> : <h1>Loading...</h1>}

            
        </div>
    )
}
export default Singleproduct;