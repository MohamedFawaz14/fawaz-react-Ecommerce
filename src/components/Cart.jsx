import React,{useState} from 'react';




function Cart({ cart ,setCart}) {
  const displayCartItem = () => {
    if (cart.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const handleRemove =(item)=>{
    const newArray = cart.filter(cart=>cart.description !==item.description);
   
    setCart(newArray);
    
    
  }

 
  
  const subtotalFunction = () => {
     const newSubtotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    
    return newSubtotal;
  }
  

  const totalTax = () => {
     const totalTax = cart.reduce((accumulator, item) => {
      const itemTax = 0.25 * item.quantity;
      return accumulator + itemTax;
    }, 0);
  
    return totalTax;
  };
 
  const total = () => {
    const subtotal =subtotalFunction();
    const tax = totalTax(cart);
    return subtotal + tax;
  };
  const totalAmount = total();
  

  return (
    <div>
      {displayCartItem() ? (
        <div className=' container mx-auto'>
          {cart.map((item, index) => (
            <div key={index} className=" mb-5 mt-5  mx-auto border border-grey flex lg:text-xl w-5/6">
              <div className='bg-gray-50'
              style={{maxWidth:"30%",minWidth:"120px"}}
              >
                <img
                  src={item.image}
                  alt={item.description}
                  style={{ width: "250px", maxHeight: "250px",minHeight:"150px" }}
                  className='mx-auto mb-5'
                />
              </div>
              <div className='mt-6 lg:ms-5 '>
                <h4 className='px-3 py-2 text-sm font-serif lg:font-sans lg:text-lg'>{item.description}</h4>
                <p className='px-3 pb-3 lg:mt-3 text-sm   lg:font-sans lg:text-lg'>{`$${item.price}`}</p>
                <div className='flex'>
                <select className='border border-gray-300 border-1 rounded-lg lg:mt-3 ms-3 md:ms-5 cursor-pointer active:border-gray-300 focus:outline-none p-2' 
                value={item.quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  const updatedCart = cart.map((cartItem) =>
                    cartItem.description === item.description
                      ? { ...cartItem, quantity: newQuantity }
                      : cartItem
                  );
                  setCart(updatedCart);
                 
                }} 
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <p className='text-rose-600 lg:mt-3 ms-6 pt-1 cursor-pointer' onClick={()=>handleRemove(item)}>Remove</p>
                </div>
              </div>

            </div>
          ))}
           <div className='orderTotal mx-6 lg:ms-32  py-5  border border-1 border-gray-200 mb-10'
           style={{maxWidth:"500px"}}>
            <h3 className= 'text-xl font-serif font-bold ms-10 lg:ms-6'>Order Summary :</h3>
             <div className='flex mt-3 justify-around'>
              <p className='text-lg lg:me-72  font-serif'>Sub Total :</p>
              <p className=' font-sans'>${subtotalFunction()}</p>
             </div>

             <div className='flex mt-3 justify-around '>
              <p className='text-lg lg:me-72 pe-14 font-serif'>Tax :</p>
              <p>${totalTax()}</p>
             </div>

             <div className='flex mt-3 justify-around '>
              <p className='text-lg lg:me-72 font-serif ms-2'>Order Total :</p>
              <p className='me-1'>${totalAmount}</p>
             </div>
              <button className=' bg-black  font-serif px-16 py-2 rounded-xl
               mx-14 lg:mx-12 lg:px-40 mt-5 text-white font-semibold  md:mx-32'>
                Checkout
              </button>
           </div>



        </div>

       
      ) : (
        <div>
          <h1 className=' text-3xl  mt-14 ms-10 font-serif ' > Cart is Empty 🛒</h1>
        </div>
        
      )}
    </div>
  );
}



  

export default Cart;


