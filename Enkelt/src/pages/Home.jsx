import React, { useState } from 'react';
import Button from '../Comp/button';
import { useDispatch } from 'react-redux';
import { toggle } from '../redux/navSlice';
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;


function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const res = await req.json();
      console.log(res);

      if (req.ok) {
        alert("Meddelandet har skickats!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.log("Något blev fel: " + res.message);
      }
    } catch (err) {
      console.error("Fel vid skickande:", err);
    }
  };

  return (
    <section className='min-h-screen grid grid-cols-12 grid-rows-[auto_auto_1fr_auto]'>
      <nav className='col-span-full flex justify-between items-center h-24 px-5 bg-white shadow-sm'>
        <h1 className='text-5xl text-blue-400'>EnkelT</h1>
        <Button onclick={() => dispatch(toggle())} aria-label="Toggle menu">
          <img className='h-8 w-8' src="/menu.png" alt="Menu" />
        </Button>
      </nav>

      <header className='col-span-full flex justify-center items-center gap-4 p-4 bg-gray-50'>
        <img className='h-16 w-16 object-contain' src="technical-support.png" alt="Technical support" />
        <img className='h-16 w-16 object-contain' src="computer.png" alt="Computer" />
        <img className='h-16 w-16 object-contain' src="smartphone.png" alt="Smartphone" />
      </header>

      <main className='col-span-full p-5 text-center'>
        <h2 className='text-4xl md:text-5xl mb-4 font-semibold'>
          Vi löser dina tekniska problem
        </h2>
        <p className='text-xl md:text-2xl max-w-3xl mx-auto mb-6'>
          Vi åker ut till dig och ser till att din teknik fungerar. Vi hjälper även med felsökning, installation och annan teknisk support.
        </p>
      </main>

      <footer className='col-span-full bg-gray-50 p-6 flex flex-col items-center'>
        <h3 className='text-3xl mb-6 font-medium'>Kontakta oss</h3>
        <div className='mb-6 text-xl'>
          Ring oss direkt: <a href="tel:0701471434" className='text-blue-600 font-medium'>070-147 14 34</a>
        </div>

        <form className='w-full max-w-md space-y-4' onSubmit={sendMail}>
          <input
            className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="text"
            placeholder='För- och Efternamn'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="email"
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full p-3 h-32 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Skriv ditt meddelande här..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            classname="h-12 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
          >
            Skicka
          </Button>
        </form>
      </footer>
    </section>
  );
}

export default Home;
