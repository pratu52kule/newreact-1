import React, { useEffect, useState } from 'react'

const Product = () => {
    const [allproducts,setallproducts] = useState([]);
    useEffect(() => {
        localStorage.getItem("product")
    },[])
  return (
    <div>
      Product
    </div>
  )
}

export default Product
