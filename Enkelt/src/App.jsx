import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About"
import Services from './pages/Services'
import Home from './pages/Home'
import Nav from "./Comp/navmob"

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
      </Routes>
    </Router>
  )
}

export default App
