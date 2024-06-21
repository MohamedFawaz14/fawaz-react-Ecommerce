import React from 'react'

function Header({handleDisplay}) {
  return (
    <div className='flex  justify-between'>
      <img className='w-60 p-0'
        src='Banner/shopInLogo.png' onClick={()=>handleDisplay(true)}></img>

       <div onClick={()=>handleDisplay(false)}>
       
       <img className='w-10 h-10 mt-6 me-4 relative'
        src='Banner/cartLogo.png'  ></img>
         <span 
         className=' font-bold absolute transform translate-y-[-210%] translate-x-[178%] text-lg'>
          0
          </span>
       </div>
      </div>
  )
}

export default Header;