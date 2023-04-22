import React from 'react'
import "./About.css"
import Navbar from '../Navbar/Navbar'
import {motion} from "framer-motion"

function About() {
  return (
   <div className="maina">
     <Navbar/>
   <div className="am1"> <h1 className="hb">About Me</h1></div>
   <motion.div className="am2"
   initial={{
    x:'-100px'
   }}
   animate={{
    x:'0px'
   }}
   transition={{
    type:'tween',
   duration:1

   }}
   > <h1 className="h1b">Hey!!</h1></motion.div>
      <div className="al">
        
       <motion.div className="am2"
       initial={{
        x:'-100px'
       }}
       animate={{
        x:'0px'
       }}
       transition={{
        type:'tween',
       duration:1
    
       }}
       > <h3 className="h2b">I am Anusree,18 yr old insightful 1st year CSE student who excels at full stack developing and in react.I am passionate about building excellent softwares that helps to uphold the living standards.I do love creating software for clients ranging from individuals and small buisinesses to large enterprise corporation.</h3></motion.div>
      
      <motion.div className="line"
      initial={{
        y:'100px'
      }}
      animate={{
        y:'0px'
      }}
      transition={{
        type:'tween',
        duration:1

      }}
      ></motion.div>
      <motion.div className="ar"
       initial={{
        x:'100px'
       }}
       animate={{
        x:'0px'
       }}
       transition={{
        type:'tween',
       duration:1
    
       }}
      >
        <h3 className="h2b2">I take part in various technical events and competitions.Also I am an IEEE member.Getting out of a professional life I am an extrovert who really enjoys travelling and a melomaniac person.</h3>
      </motion.div>
    </div>
  </div>
    

    
  )
}

export default About