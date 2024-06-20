import React from 'react'
import Electronics from "./Electronics";
import Accessories from "./Accessories";
import Games from "./Games";
import { Route,Routes,Navigate } from 'react-router-dom';


function ProductDisplay() {
  return (
    <div className=' container  my-10'>
     
           <Routes>
             
              <Route path ='/Electronics' element ={<Electronics/>}></Route>
             

              <Route path='/Accessories' element = {<Accessories/>}>
              </Route>
              
              <Route path='/Games' element = {<Games/>}></Route>

              <Route path="*" element={<Navigate to="/Electronics" replace />} />
           </Routes>
          
           </div>
  )
}

export default ProductDisplay