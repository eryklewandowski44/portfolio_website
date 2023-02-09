import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({ linkEnter, linkLeave }) {
  const [activeLink, setActiveLink] = useState(1)

  return (
    <nav>
      <div className="nav-left">
        <picture>
          <source media='(max-width: 480px)' srcSet='images/logo.png' />
          <img src="" alt="" />
        </picture>
        <p onClick={() => { setActiveLink(1) }} onMouseEnter={linkEnter} onMouseLeave={linkLeave}><Link to={'/'}>Eryk Lewandowski</Link></p>
      </div>
      <div className="nav-right">
        <ul>
          <li className={activeLink === 1 ? "activeLink" : ""} onMouseEnter={linkEnter} onMouseLeave={linkLeave}> <Link to={'/'} onClick={() => { setActiveLink(1) }} >Portfolio</Link></li>
          <li className={activeLink === 2 ? "activeLink" : ""} onMouseEnter={linkEnter} onMouseLeave={linkLeave}><a onClick={() => { setActiveLink(2) }} href="https://www.linkedin.com/in/eryk-lewandowski44/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li className={activeLink === 3 ? "activeLink" : ""} onMouseEnter={linkEnter} onMouseLeave={linkLeave}> <Link to={'/about'} onClick={() => { setActiveLink(3) }} >About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar