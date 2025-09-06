import React from 'react';
import { Link } from 'react-router-dom';

function About() {

  
  return (
    <section className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
      {/* Header */}
      <header className='flex justify-between items-center p-6 max-w-7xl mx-auto ' >
        <Link to={"/"}>
        <h1 className='text-4xl md:text-5xl text-blue-400 font-bold'>EnkelT</h1>
        </Link>
      </header>

      {/* Main Content */}
      <main className='max-w-4xl mx-auto px-6 py-8 space-y-8'>
        <article className='prose prose-lg mx-auto'>
          <p className='text-xl md:text-2xl leading-relaxed text-gray-800'>
            EnkelT finns till för dig som tycker att teknik ibland känns krånglig. Vi vet att det inte alltid är lätt att hänga med när prylarna blir allt mer avancerade – därför hjälper vi dig på plats, hemma hos dig.
          </p>
          <p className='text-xl md:text-2xl leading-relaxed text-gray-800'>
            Vi arbetar med personligt bemötande och tydliga förklaringar, utan tekniskt krångel. Oavsett om du behöver hjälp med att komma igång med en ny mobil, installera något i hemmet eller förstå hur saker fungerar, så är vårt mål att du ska känna dig trygg och nöjd.
          </p>
          <p className='text-xl md:text-2xl leading-relaxed text-gray-800'>
            Bakom EnkelT står Jesper Persson, med lång erfarenhet av teknik, kundservice och tålamod i mängder.
          </p>
          <p className='text-xl md:text-2xl leading-relaxed text-gray-800'>
            Vi utgår från Kristinehamn och erbjuder hembesök inom 2,5 mils radie. Tjänsten riktar sig till privatpersoner som vill ha enkel, trygg och pålitlig teknikhjälp.
          </p>
        </article>

        {/* Profile Section */}
        <div className='flex flex-col items-center space-y-4'>
          <img 
            className='h-48 w-48 rounded-full object-cover border-4 border-white shadow-lg'
            src="/me.jpg" 
            alt="Jesper Persson, grundare av EnkelT" 
          />
          <h2 className='text-3xl font-medium text-gray-800'>Jesper Persson</h2>
        </div>
      </main>
    </section>
  );
}

export default About;