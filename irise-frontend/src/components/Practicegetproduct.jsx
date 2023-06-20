import axios from "axios";
import React, { useEffect, useState } from "react";
const Practicegetproduct = () => {
const [products ,setproducts] = useState([]);
console.log(products,"-products")
  useEffect(()=> {
    async function getdata(){
        const responce = await axios.get("https://fakestoreapi.com/products");
    //console.log("responce -",responce.data)
setproducts(responce.data)
    }

    getdata();
  },[])
    return(
        <div>
            <h1>PracticeGetproduct</h1>
            <div style={{display:"flex",flexWrap:'wrap',justifyContent:"space-around"}}>
                {products.map((products) =>(
                    <div style={{width:'23%',border:'1px solid black',marginBottom:'25px'}} key={products}>
                       <img style={{width:'60%',height:'200px',marginTop:'20px'}}src={products.image}/> 
                        <h3 style={{height:'80px'}}>name : {products.title}</h3>
                        <h3>price: {products.price}</h3>
                    </div>
                ))}

            </div>
            
            </div>
    )
}
export default Practicegetproduct