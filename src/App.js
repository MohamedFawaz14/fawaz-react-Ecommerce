import React,{useState} from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import { Route,Routes,Navigate } from 'react-router-dom';
import Electronics from "./components/Electronics";
import Accessories from './components/Accessories';
import Games from './components/Games';
import Cart from './components/Cart';
import products from './products';
import Footer from './components/Footer';

function App() {

  const [cart, setCart] = useState([]);
  const [show,setShow] = useState(true);



  const addToCart = (item) => {
    
   
    const existingItem = cart.find((cartItem) => cartItem.description === item.description);
  
    if (existingItem) {
      alert("Already in Cart");
     const updatedCart = cart.map((cartItem) =>
        cartItem.description === item.description
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } 
    else
     {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    
  };
  

  const handleDisplay = (boolean)=>
    {
        setShow(boolean);
    }
    
    

    return (
      <div className="App ">
        <div className=' container mx-auto'>
        <Header handleDisplay={handleDisplay} cart ={cart}/>
       
       {show ? <div> 
        <Carousel/>
        <NavBar/>
       <div className='container mx-auto mt-20'>
       <Routes> 
             <Route path ='/Electronics' 
             element ={<Electronics addToCart={addToCart}/>}></Route>
            

             <Route path='/Accessories'
              element = {<Accessories addToCart={addToCart}/>}>
             </Route>
             
             <Route path='/Games' 
             element = {<Games addToCart={addToCart}/>}></Route>

             <Route path="*" element={<Navigate to="/Electronics" replace />} />
          </Routes>
       </div>
       </div>
       :<Cart cart={cart} setCart={setCart}/> }

      
        </div> 
        <Footer/>
        
      </div>
    )
}

export default App;
