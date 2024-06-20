import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className='Navbar flex justify-evenly'>
    <div className='Electronics '>
      <Link to="/Electronics" >
      <div>
     <img 
     style={{width:"100px",borderRadius:"50px",}} src="Banner/Electronics_logo.webp">
      </img>
                        
                    <p style={{
                        textAlign:"center",
                        fontSize:"18px",
                        fontWeight:"500",
                        padding:"0px",
                        
                    }}>Electronics</p>    
                        </div>
      </Link>
    </div>

    <div className='Accessories'>
    <Link to="/Accessories" > 
    
                        <div>
                    <img 
                    style={{width:"100px",borderRadius:"50px",}} src="Banner/Accessories_logo.webp">
                    </img>
                        
                    <p style={{
                        textAlign:"center",
                        fontSize:"18px",
                        fontWeight:"500",
                        padding:"0px",
                        
                    }}>Accessories</p>    
                        </div>                   
                        </Link>
    </div>

    <div className='Games'>
      <Link to="/Games" ><div>
      <img 
       style={{width:"100px",borderRadius:"50px",}} src="Banner/Games_logo.webp">
      </img>
      
      <p style={{
        textAlign:"center",fontSize:"18px",fontWeight:"500",padding:"0px",
        }}>Games</p>    
        </div>
       </Link>
    </div>
  </div>
  )
}

export default NavBar