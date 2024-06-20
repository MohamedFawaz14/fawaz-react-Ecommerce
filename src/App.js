import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import NavBar from './components/NavBar';
import ProductDisplay from './components/ProductDisplay';


function App() {
    return (
      <div className="App">
        <div className=' container mx-auto'>
        <Header/>
        <Carousel/>
        <NavBar/>
        <ProductDisplay/>
        
        
        </div> 
      </div>
    )
}

export default App;