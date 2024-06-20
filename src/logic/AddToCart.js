import React, { useState } from 'react'
import Acessories from "../components/Accessories";
import Electronics from "../components/Electronics";
import Games from "../components/Games";



function AddToCart() {
    const [cart,setCart] = useState([]);
 
    const addToCart = (item)=>
        {
            setCart([...cart,item]);
        }
    return (
   
    <div>
        <Acessories addToCart={addToCart} />
        <Electronics addToCart={addToCart}/>
        <Games addToCart={addToCart}/>
    </div>
  )
}

export default AddToCart;