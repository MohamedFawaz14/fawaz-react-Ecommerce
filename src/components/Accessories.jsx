import React from 'react'
import Products from "../products";

function Accessories() {
  return (
    <div className='Accessories grid  xl:grid-cols-6  md:grid-cols-3 sm:grid-cols-2'>
      {
      Products.map((product,index)=>{
       return(product.type ==="accessories" ?
        <div key={index} className=" mb-5 mx-auto  w-52 border border-grey">

      <div className=' bg-gray-100'>
        <img src={product.image} 
        alt={product.description} 
        key={index}
        style={{width:"250px",height:"250px"}}
        className='mx-auto mb-5'></img>
        </div>

        <div>
       <h4 className='px-3  py-2'>{product.description}</h4>
          <p className='px-3 pb-3'>{`$${product.price}`}</p>
          
        <button id="btn-addToCart"
        className=' bg-black text-white px-2 mx-2 mb-3 rounded-lg'>
          AddToCart
          </button>
        </div>

        </div>

        :<></>) 
      })
     }
    </div>
  )
}

export default Accessories