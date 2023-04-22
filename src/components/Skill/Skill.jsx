import React from 'react'
import "./Skill.css"
import html from "../../Assets/html.png"
import css from "../../Assets/css.png"
import js from "../../Assets/javascript.png"
import react from "../../Assets/react.png"
import github from "../../Assets/github.png"
import Navbar from '../Navbar/Navbar'
import tailwind from "../../Assets/tailwind.png"
import {motion} from "framer-motion"


function Skill() {
  return (
    <div className='ms'>
       <Navbar/>
      <h1 className="sh">SKILLS</h1>
     <div className="d2s">
     <div className="row1">
      <motion.div className="card"
      initial={{
        x:'-200px'
      }}
      animate={{
        x:"0px"
      }}
      transition={{
        type:"tween",
        duration:1

      }}
      > 
      <img className='img' src={html} alt=""  />
      <h2 className="h2h">HTML</h2>
      </motion.div>

      <motion.div className="card"
       initial={{
        y:'-200px'
      }}
      animate={{
        y:"0px"
      }}
      transition={{
        type:"tween",
        duration:1

      }}
      > 
      <img className='img' src={css} alt="" />
      <h2 className="h2h">CSS</h2>
      </motion.div>

      <motion.div className="card"
      initial={{
        x:'200px'
      }}
      animate={{
        x:"0px"
      }}
      transition={{
        type:"tween",
        duration:1

      }}
      > 
      <img className='img' src={js} alt="" />
      <h2 className="h2h">JAVASCRIPT</h2>
        </motion.div>
      </div>


      <div className="row2">
      <motion.div className="card"
       initial={{
        x:'-200px'
      }}
      animate={{
        x:"0px"
      }}
      transition={{
        type:"tween",
        duration:1

      }}
      > 
      <img className='img' src={react} alt="" />
      <h2 className="h2h">REACT</h2>
      </motion.div>

      <motion.div className="card"
        initial={{
          y:'200px'
        }}
        animate={{
          y:"0px"
        }}
        transition={{
          type:"tween",
          duration:1
  
        }}
      > 
      <img className='img' src={github} alt="" />
      <h2 className="h2h">GITHUB</h2>
      </motion.div>

      <motion.div className="card"
      initial={{
        x:'200px'
      }}
      animate={{
        x:"0px"
      }}
      transition={{
        type:"tween",
        duration:1

      }}
      > 
      <img className='img' src={tailwind} alt="" />
      <h2 className="h2h">TAILWIND CSS</h2>
      </motion.div>
      </div>
      
      </div>



</div>
  )
}

export default Skill