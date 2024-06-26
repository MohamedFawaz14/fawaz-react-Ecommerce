import React, { useState } from 'react'
import Products from "../products.js";


function Electronics({addToCart}) {

  return (
    
    <div className='Electronics grid  xl:grid-cols-6  md:grid-cols-3 sm:grid-cols-2'>
     {
      Products.map((product)=>{
       return(product.type ==="electronics" ?
        <div key={product.id} className=" mb-5 mx-auto  w-52 border border-grey">
          
          <div className=' bg-gray-100'>
          <img src={product.image} 
        alt={product.description} 
        style={{width:"250px",height:"250px"}}
        className='mx-auto mb-5'
        ></img> 
        </div>

        <div >
       <h4 className='px-3  py-2'>{product.description}</h4>
          <p className='px-3 pb-3 text-lg'>{`$${product.price}`}</p>
          <button id="btn-addToCart" className=' bg-black text-white p-2 lg:py-1 mx-2 mb-3 rounded-lg'
        onClick={()=>addToCart(product)}>AddToCart</button>
        </div>
        
        
        </div>
        
        
        :<></>) 
      })
     }
      </div>
  )
}


export default Electronics;