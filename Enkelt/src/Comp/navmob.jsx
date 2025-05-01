import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function navmob() {
    const[isOpen, setIsOpen] = useState(false)
  return (<>
    {isOpen && (
        <div className='absolute h-[20rem] w-[10rem] bg-blue-400 text-4xl flex flex-col justify-around rounded-3xl top-20 right-1 text-center' >
            <Link to={"/"}>Hem</Link>
            <Link to={"/services"}>Tjänster</Link>
            <Link to={"/about"}>Om</Link>
        </div>


)}
</>
  )
}

export default navmob