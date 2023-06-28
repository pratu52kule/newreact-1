import React, { useState } from 'react'

const Addproduct = () => {
    const [productdata , setproductdata]=useState({name:"" ,description:"",image:"",price:""});
    console.log(productdata,"productdata")
    function handleChange(event){
       console.log(event.target.value)
       console.log(event.target.name)
       setproductdata({...productdata,[event.target.name]:event.target.value})
    }
    function handleSubmit(event){
          event.preventDefault();
          if(productdata.name && productdata.description && productdata.image && productdata.price ){
            var array = JSON.parse(localStorage.getItem("products")) || [] ;
            array.push(productdata);
            localStorage.setItem("products",JSON.stringify(array))
             alert("got all data")
             setproductdata({name: "" ,description : "" ,image: "",price: ""})
          }
          else{
          alert("all fields are mandetory")
        }
    }
  return (
    <div>
     <h1>Addproduct</h1> 
     <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input value ={productdata.name} type='text' name= 'name' onChange= {handleChange} placeholder='type the name of product'/><br/>
        <label>Description</label><br/>
        <input value ={productdata.description} type='text' name= 'description' onChange= {handleChange}  placeholder='type the description of product'/><br/>
        <label>image</label><br/>
        <input value={productdata.image} type='text'  name= 'image' onChange= {handleChange}  placeholder='submit the url of image'/><br/>
        <label>price</label><br/>
        <input value={productdata.price} type='number'  name= 'price' onChange= {handleChange}  placeholder='type the price of product'/><br/>
        <input type='submit' value="Add product"/>
        </form>
    </div>
  )
}

export default Addproduct
