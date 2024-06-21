import React,{useState} from 'react'



function Cart({ cart }) {
  const displayCartItem = () => {
    if (cart.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      {displayCartItem() ? (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="mb-5 mx-auto w-52 border border-grey">
              <div className='bg-gray-100'>
                <img
                  src={item.image}
                  alt={item.description}
                  style={{ width: "250px", height: "250px" }}
                  className='mx-auto mb-5'
                />
              </div>
              <div>
                <h4 className='px-3 py-2'>{item.description}</h4>
                <p className='px-3 pb-3'>{`$${item.price}`}</p>
              </div>
            </div>
          ))}
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


