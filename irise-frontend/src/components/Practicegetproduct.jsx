import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Practicegetproduct = () => {
const [products ,setproducts] = useState([]);
const [isloading, setisloading] = useState(false);
console.log(products,"-products")
const router = useNavigate();
  useEffect(()=> {
    async function getdata(){
        setisloading(true);
        const responce = await axios.get("https://fakestoreapi.com/products");
    //console.log("responce -",responce.data)
     setproducts(responce.data)
     setisloading(false);
    }

    getdata();
  },[])
  function singlepage(id ){
     router(`/Singleproduct/${id}`)
    //alert(id);
  }
    return(
        <div>
            <h1>PracticeGetproduct</h1>
            {isloading ? <h1>Loading.....</h1>:
            <div style={{display:"flex",flexWrap:'wrap',justifyContent:"space-around"}}>
                {products.map((products) =>(
                    <div onClick={ () =>singlepage(products.id)} style={{width:'23%',border:'1px solid black',marginBottom:'25px',height:'400px',cursor:'pointer'}} key={products.id}>
                       <img style={{width:'60%',height:'200px',marginTop:'20px'}}src={products.image}/> 
                        <h3 style={{height:'80px'}}>name : {products.title}</h3>
                        <h3>price: {products.price}</h3>
                    </div>
                ))}

            </div>
}  
            </div>
    )
}
export default Practicegetproduct