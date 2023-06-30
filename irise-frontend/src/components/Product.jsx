import React, { useEffect, useState } from 'react'

const Product = () => {
    const [allproducts,setallproducts] = useState([]);
    console.log(allproducts,"allproducts")
    useEffect(() => {
      const data = JSON.parse (localStorage.getItem("products"));
      setallproducts(data)
        },[])
  return (
    <div>
     <h1>Products</h1> 
     <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
      {allproducts && allproducts.map((Product) => (
        <div style={{border:'2px solid black',width:'30%' , marginBottom:'20px',height:'300px'}}>
          <img style={{height:'200px'}} src={Product.image} alt='product image'/>
          <h3>Name :{Product.name}</h3>
          <h4>Price :{Product.price}</h4>
        </div>
     ) )}
     </div>
    </div>
  )
}

export default Product
