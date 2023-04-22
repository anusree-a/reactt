import React from 'react'
import "./Contact.css"
import { RiInstagramLine } from 'react-icons/ri';
import { RiWhatsappFill } from 'react-icons/ri';
import { AiOutlineGithub } from 'react-icons/ai';
import {SiGmail  } from 'react-icons/si';
import Navbar from '../Navbar/Navbar';
import {motion} from "framer-motion"


function Contact() {
  return (
    <div className='mc'>
       <Navbar/>
        <h1 className="mhc">CONTACT ME</h1>
       
       
        <div className="icons">
        <a href="https://instagram.com/an.sree._?igshid=ZDdkNTZiNTM="> <  RiInstagramLine className='ico' /></a>
        <a href="https://wa.me/qr/QLHLHY763CGLE1"> < RiWhatsappFill className='ico'  /></a>
         <a href="https://github.com/anusree-a">< AiOutlineGithub className='ico' /></a>
         <a href="mail.com">< SiGmail className='ico' /></a></div>
         
        
        <div className="input">
        <motion.div className="an1"
        initial={{
          x:"-150px"
        }}
        animate={{
          x:"0px"
        }}
        transition={{
          type:"tween",
          duration:1

        }}
        ><input className='ib1' type='text' placeholder='Name' name='name' /></motion.div> 
         <motion.div className="an1"
        initial={{
          x:"150px"
        }}
        animate={{
          x:"0px"
        }}
        transition={{
          type:"tween",
          duration:1

        }}
        > <input className='ib1' type='email' placeholder='Email' name='email' /></motion.div>
          <motion.div className="an1"
        initial={{
          x:"-150px"
        }}
        animate={{
          x:"0px"
        }}
        transition={{
          type:"tween",
          duration:1

        }}
        >  <input className='ib1' type='number' placeholder='Number' name='number' /></motion.div>
          <motion.div className="an1"
        initial={{
          x:"150px"
        }}
        animate={{
          x:"0px"
        }}
        transition={{
          type:"tween",
          duration:1

        }}
        >  <input className='cb1' type='text' placeholder='Comment' name='comment' /></motion.div>
        </div>
        
       <button className='btn'>Lets collaborate</button>
        
         
      
     </div>
     
  )
}

export default Contact
