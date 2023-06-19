import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getFakeStoreProducts() {
      // console.log("Fetching products from fake store api!")
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data)
      // console.log(response.data, "- response from fake store api!!")
    }
    getFakeStoreProducts();

  }, [])

  return (
    <div>
      <h1>GetProducts</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-between' }}>
        {products.map((pro) => (
          <div style={{ width: '23%', border: "1px solid black", marginBottom:'40px' }} key={pro.id}>
            <img style={{ width: "50%", height:"180px",marginTop:'40px' }} src={pro.image} />
            <h3>Title : {pro.title}</h3>
            <p>Price : {pro.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GetProducts