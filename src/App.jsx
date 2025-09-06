import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Comp/Home"
import Services from "./Comp/Services";
import About from "./Comp/About";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element=
          
          {<>
          <Home/>
          <Services/>
          <About/>
          
          
          </>} 
          />


          
        </Routes>
      </Router>
  );
}

export default App;
