import React from 'react';

function Services() {
  
  const services = [
    {
      icon: '📱',
      title: 'Felsökning',
      description: 'Vi lokaliserar och löser problem med datorer, mobiler, surfplattor, nätverk och annan teknik'
    },
    {
      icon: '⚙️',
      title: 'Installation & Uppstart',
      description: 'Vi installerar och ställer in allt från skrivare och routrar till smarta telefoner och TV-apparater'
    },
    {
      icon: '‍🏫',
      title: 'Teknisk rådgivning',
      description: 'Vi förklarar tekniken på ett enkelt och begripligt sätt – utan krångligt språk'
    },
    {
      icon: '🌐',
      title: 'Wi-Fi & internetproblem',
      description: 'Vi hjälper dig optimera ditt hemnätverk, felsöka uppkopplingsproblem och förbättra täckningen'
    }
  ];

  return (
    <section className='min-h-screen bg-blue-50 p-6'>
      {/* Header */}
      <header className='flex justify-between items-center mb-8 max-w-6xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-blue-600'>Våra Tjänster</h1>

      </header>

      {/* Introduction */}
      <div className='max-w-3xl mx-auto mb-12 text-lg md:text-xl text-gray-700 leading-relaxed'>
        Vi hjälper dig när tekniken krånglar eller känns överväldigande. Oavsett om du behöver 
        hjälp med felsökning, installation eller vill förstå dina prylar bättre – vi kommer till dig.
      </div>

      {/* Services List */}
      <div className='max-w-4xl mx-auto space-y-8 mb-12'>
        {services.map((service, index) => (
          <div key={index} className='bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-2xl font-semibold text-blue-600 mb-3'>
              {service.icon} {service.title}
            </h2>
            <p className='text-lg text-gray-700'>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing */}
      <div className='max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md'>
        <h2 className='text-2xl font-semibold text-blue-600 mb-4'>Priser</h2>
        <ul className='space-y-3 text-lg text-gray-700'>
          <li>💰 Startavgift: 300 kr (inkluderar första timmen)</li>
          <li>⏱️ Timpris därefter: 200 kr/timme</li>
          <li>📍 Vi erbjuder hembesök inom en radie på 2,5 mil runt Kristinehamn</li>
        </ul>
      </div>
    </section>
  );
}

export default Services;