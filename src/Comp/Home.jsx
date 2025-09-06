import React, { useState } from "react";
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // helper for Netlify encoding
  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const sendMail = async (e) => {
    e.preventDefault();

    // --- Netlify form submission (static form handling) ---
    try {
      const formData = {
        "form-name": "contact",
        name,
        email,
        message,
        "bot-field": "",
      };

      const resp = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(formData),
      });

      if (resp.ok) {
        alert("Meddelandet har skickats!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Netlify form skickning misslyckades");
      }
    } catch (err) {
      console.error("Fel vid Netlify skickning:", err);
    }

    // --- OPTIONAL: also ping your backend API ---
    try {
      const req = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const res = await req.json();
      console.log("API svar:", res);
    } catch (err) {
      console.error("Fel vid API skickning:", err);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-12 grid-rows-[auto_auto_1fr_auto]">
      <nav className="col-span-full flex justify-between items-center h-24 px-5 bg-white shadow-sm">
        <h1 className="text-4xl md:text-5xl text-blue-400 font-bold">EnkelT</h1>
      </nav>

      <header className="col-span-full flex justify-center items-center gap-4 p-4 bg-gray-50">
        <img className="h-16 w-16 object-contain" src="technical-support.png" alt="Technical support" />
        <img className="h-16 w-16 object-contain" src="computer.png" alt="Computer" />
        <img className="h-16 w-16 object-contain" src="smartphone.png" alt="Smartphone" />
      </header>

      <main className="col-span-full p-5 text-center">
        <h2 className="text-4xl md:text-5xl mb-4 font-semibold">Vi löser dina tekniska problem</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
          Vi åker ut till dig och ser till att din teknik fungerar. Vi hjälper även med felsökning, installation och annan teknisk support.
        </p>
      </main>

      <footer className="col-span-full bg-gray-50 p-6 flex flex-col items-center">
        <h3 className="text-3xl mb-6 font-medium">Kontakta oss</h3>
        <div className="mb-6 text-xl">
          Ring oss direkt:{" "}
          <a href="tel:0701471434" className="text-blue-600 font-medium">
            070-147 14 34
          </a>
        </div>

        {/* Netlify-aware form */}
        <form
          className="w-full max-w-md space-y-4"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={sendMail}
        >
          {/* required hidden field for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* honeypot anti-spam field (must match netlify-honeypot) */}
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" onChange={() => {}} />
            </label>
          </p>

          <input
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="För- och Efternamn"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full p-3 h-32 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
            placeholder="Skriv ditt meddelande här..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* submit button (was missing) */}
          <button
            type="submit"
            className="h-12 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors"
          >
            Skicka
          </button>


        </form>
      </footer>
    </section>
  );
}

export default Home;
