import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ linkEnter, linkLeave }) {
  const [activeLink, setActiveLink] = useState(1)

  return (
    <nav>
      <div className="nav-left">
        <p onClick={() => { setActiveLink(1) }} onMouseEnter={linkEnter} onMouseLeave={linkLeave}><Link to={''}>Eryk Lewandowski</Link></p>
      </div>
      <div className="nav-right">
        <ul>
          <li className={activeLink === 1 ? "activeLink" : ""} onMouseEnter={linkEnter} onMouseLeave={linkLeave}><Link onClick={() => { setActiveLink(1) }} to={''}>Portfolio</Link></li>
          <li className={activeLink === 2 ? "activeLink" : ""} onMouseEnter={linkEnter} onMouseLeave={linkLeave}><Link onClick={() => { setActiveLink(2) }} to={''}>Linkedin</Link></li>
          <li className={activeLink === 3 ? "activeLink" : ""} onMouseEnter={linkEnter} onMouseLeave={linkLeave}><Link onClick={() => { setActiveLink(3) }} to={'/about'}>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar