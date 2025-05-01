import React, { Children } from 'react'
import Button from '../Comp/button'

function Home() {
  return (
    <section className='h-screen grid grid-cols-12 grid-rows-12'>
    <nav className='col-start-1 col-end-13 flex  w-screen h-[6rem] justify-between items-center'>
        <h2 className='text-5xl ml-5 text-blue-400' >EnkelT</h2>
        <Button> <img className='h-8 w-8 mr-4' src="/menu.png" alt="stripe menu" /></Button>
    </nav>
    <header className='col-start-1 col-end-13 row-start-2 row-end-4 grid grid-cols-12 grid-rows-12 mt-3'>
        <img className='col-start-5 col-end-10
        ' src="technical-support.png" alt="guy at a cumputer" />
        <img className='col-start-3 col-end-5 row-start-3' src="computer.png" alt="a computer" />
        <img className='col-start-9 col-end-11 row-start-4' src="smartphone.png" alt="a smartphone
        " />
    </header>
    <main className='col-start-1 col-end-13 row-start-4 row-end-8  flex flex-col text-center p-5  mt-5' >
    <div className='text-5xl mb-3' >Vi löser dina tekniska problem</div>
    <div className='text-2xl' >Vi åker ut till dig och ser till att din teknik fungerar vi hjälper även ed felsökning installation och annan teknisk support</div>
    </main>

    <footer className='col-start-1 col-end-13 row-start-8 row-end-13 flex flex-col text-center items-center mt-5 '>

    <h3 className='text-3xl mb-4'>Kontakta oss</h3>
    
    <input className='bg-gray-200 w-60 h-10 rounded-2xl mb-4 text-black p-3 ' type="text" placeholder='För o Efternamn'/>
    <input className='bg-gray-200 w-60 h-10 rounded-2xl mb-4 text-black p-3 ' type="email" placeholder='Email'/>
    <textarea
  className="w-72 h-24 p-3  rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Skriv ditt meddelande här..."
></textarea>
    <Button classname={"h-[2rem] w-28 bg-blue-500 mt-2 mb-2" }> Skicka</Button>
    </footer>
    </section>

  )
}

export default Home