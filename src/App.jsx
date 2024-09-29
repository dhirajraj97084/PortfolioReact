import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Aos from "aos";
import "aos/dist/aos.css" 

function App() {

  useEffect(()=>{
    Aos.init();    
  })
  
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
