import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className='main'>
            <h1 className="h1">Anusree.A</h1>
            <ul className="u1">
                <div className="hmh"><a href="/" className="hm"><li>Home</li></a></div>
               
                <div className="hmh"><a href="/about" className="hm"><li>About</li></a></div>
                <div className="hmh"><a href="/skill" className="hm"><li>Skill</li></a></div>
                <div className="hmh"> <a href="/contact" className="hm"><li>Contact</li></a></div>






            </ul>

        </div>
   </div>
  )
}

export default Navbar