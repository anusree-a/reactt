import React from 'react'
import "./App.css"
import {Routes,Route} from "react-router-dom"

import Home from "./components/Home/Home"
import About from './components/About/About'
import Skill from "./components/Skill/Skill"
import Contact from "./components/Contact/Contact"



function App() {
  return (
    <div className='app'>
      
      <Routes>
  
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Skill" element={<Skill/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      </Routes>



    </div>
  )
}

export default App
