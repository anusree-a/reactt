import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import logo from "../../Assets/react.png"
import me from "../../Assets/ann.jpg"
import {motion} from 'framer-motion'


function Home() {
  return (
    <div className='mh'>
      <Navbar/>
   <motion.div className="h2m2"
   initial={{
    x:'100px'
   }}
   animate={{
    x:'0'
   }}
   transition={{
    type:"tween",
    duration:1

   }}
   > <a href="http://localhost:3000/about"> <img className="im1" src={me} alt="" /></a></motion.div>
      <h1 className="hy">Hey! I am</h1> 
     <h1 className="ann">ANUSREE.A</h1>
     
     
     
      <h3 className="paragra">A blooming developer from Kerala,undergoing Btech in CS at Nehru College of Engineering an Research Centre.</h3>
     
    <motion.div className="logod"
    initial={{
      scale:0.5
    }}
    animate={{
      x:"-300",
      scale:1
    }}
    transition={{
      type:'tween',
      duration:1
    }}
    
    
    > < img className="logo"  src={logo} alt="" /></motion.div>
    </div>
  )
}

export default Home