import React from 'react'
import { Link } from 'react-scroll'

function SideNav() {
  return (
    <div className='contain-side-nav'>
      <ul>
        <Link to='hero' spy={true} smooth={true} offset={-100} duration={500}><li className='side-item'></li></Link>
        <Link to='rens' spy={true} smooth={true} offset={-150} duration={500}><li className='side-item '></li></Link>
        <Link to='step1' spy={true} smooth={true} offset={-150} duration={500}><li className='side-item '></li></Link>
        <Link to='step2' spy={true} smooth={true} offset={-150} duration={500}><li className='side-item '></li></Link>
        <Link to='step3' spy={true} smooth={true} offset={-150} duration={500}><li className='side-item '></li></Link>
        <Link to='step4' spy={true} smooth={true} offset={-150} duration={500}><li className='side-item '></li></Link>
        <Link to='card1' spy={true} smooth={true} offset={-50} duration={500}><li className='side-item '></li></Link>
        <Link to='card2' spy={true} smooth={true} offset={-50} duration={500}><li className='side-item '></li></Link>
      </ul>
    </div>
  )
}

export default SideNav