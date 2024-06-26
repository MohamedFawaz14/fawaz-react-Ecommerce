import React from 'react'
import Products from "../products";
function Games({addToCart}) {
  return (
    <div className='Games grid  xl:grid-cols-6  md:grid-cols-3 sm:grid-cols-2' >
      {
      Products.map((product)=>{
       
       return(product.type ==="games" ?
        <div key={product.id} className=" mb-3 mx-auto  w-52 border border-grey">

      <div className=' bg-gray-100'>
        <img src={product.image} 
        alt={product.description}
         key={product.id}
         style={{ width: "250px", height: "250px" }}
        className='mx-auto mb-5'
        ></img>
        </div>

        <div>
       <h4 className='px-3  py-2'>{product.description}</h4>
          <p className='px-3 pb-3 text-lg'>{`$${product.price}`}</p>

        <button id="btn-addToCart" 
        className=' bg-black text-white px-2 mx-2 mb-2 rounded-lg text-md p-2 lg:py-1'
        onClick={()=>addToCart(product)}>
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

export default Games