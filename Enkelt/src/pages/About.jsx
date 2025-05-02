import React, { use } from 'react'
import Button from '../Comp/button'
import { toggle } from '../redux/navSlice'
import { useDispatch } from 'react-redux'

function About() {
  const dispatch  = useDispatch()
  return (
    <section className='bg-gradient-to-br from-blue-50 to-indigo-100 text-center'> 
    <header className='flex justify-between mx-3 '>
      <h3 className='text-5xl  text-blue-400 ml-28 my-5' > EneklT</h3>
    <Button onclick={()=> dispatch(toggle())}><img className='h-8' src="menu.png" alt="" /></Button>
    </header>
      <p className='text-2xl leading-relaxed mx-2'>EneklT finns till för dig som tycker att teknik ibland känns krånglig. Vi vet att det inte alltid är lätt att hänga med när prylarna blir allt mer avancerade – därför hjälper vi dig på plats, hemma hos dig.
Vi arbetar med personligt bemötande och tydliga förklaringar, utan tekniskt krångel. Oavsett om du behöver hjälp med att komma igång med en ny mobil, installera något i hemmet eller förstå hur saker fungerar, så är vårt mål att du ska känna dig trygg och nöjd.
Bakom EneklT står Jesper Persson, med lång erfarenhet av teknik, kundservice och tålamod i mängder.
Vi utgår från Kristinehamn och erbjuder hembesök inom 2,5 mils radie. Tjänsten riktar sig till privatpersoner som vill ha enkel, trygg och pålitlig teknikhjälp.</p>
      <img className='h-40 rounded-full grayscale-100 justify-self-center my-4 ' src="me.jpg" alt="profile picture" />
    
    <p className='text-center mx-3 text-2xl'>Jesper Persson</p>
    </section>
  )
}

export default About