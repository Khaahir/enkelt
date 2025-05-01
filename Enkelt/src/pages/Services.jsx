import React from 'react'
import Button from '../Comp/button'

function Services() {
  return (
    <section className= ' h-screen flex flex-col  text-center text-[1.5rem] text-blue-400 mx-3'  >

      <header className='flex justify-between'>
      <h2 className='text-4xl mb-4 mt-2.5 ml-20'>Våra Tjänster</h2>
      <Button ><img className='h-7' src="menu.png" alt="menu btn" /></Button>
      </header>
      

      <div className='mb-5'>
      Vi hjälper dig när tekniken krånglar eller känns överväldigande. Oavsett om du behöver hjälp med felsökning, installation eller vill förstå dina prylar bättre – vi kommer till dig.
      </div>

     <h3 className='mb-3'>📱 Felsökning</h3>

     <div className='mb-3.5'>
     Vi lokaliserar och löser problem med datorer, mobiler, surfplattor, nätverk och annan teknik
     </div>

     <h3 className='mb-3'>
     ⚙️ Installation & Uppstart
     </h3>

    <div className='mb-3'>Vi installerar och ställer in allt från skrivare och routrar till smarta telefoner och TV-apparater</div>

    <h3 className='mb-3'>‍🏫 Teknisk rådgivning</h3>

    <div className='mb-3'>Vi förklarar tekniken på ett enkelt och begripligt sätt – utan krångligt språk.</div>

    <h3 className='mb-3'>🌐 Wi-Fi & internetproblem</h3>

    <div className='mb-3'>Vi hjälper dig optimera ditt hemnätverk, felsöka uppkopplingsproblem och förbättra täckningen.</div>


    <div className='mb-3'>Pris
    💰 Startavgift: 300 kr inkl en timme  ⏱️ Timpris därefter: 200 kr/timme 📍 Vi erbjuder hembesök inom en radie på 2,5 mil runt Kristinehamn.</div>

    </section>
  )
}

export default Services