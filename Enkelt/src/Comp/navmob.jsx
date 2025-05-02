import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggle } from '../redux/navSlice'


function navmob() {
    
     
      const isOpen = useSelector(state => state.toggle.value)
      const dispatch = useDispatch()
    

  return (<>
    {isOpen && (
        <div className='absolute h-[20rem] w-[10rem] bg-blue-400 text-4xl flex flex-col justify-around rounded-3xl top-20 right-1 text-center' >
            <Link onClick={()=> dispatch(toggle())} to={"/"}>Hem</Link>
            <Link onClick={()=> dispatch(toggle())} to={"/services"}>Tjänster</Link>
            <Link onClick={()=> dispatch(toggle())} to={"/about"}>Om</Link>
        </div>


)}
</>
  )
}

export default navmob