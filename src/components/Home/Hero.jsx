import React from 'react'

function Hero() {
  return (
    <div className='contain-hero'>
      <div className='hero-head'>
        <h1>Hi i'm Eryk</h1>
        <p>
          The Digital Builder: Pushing The Boundaries Of Web2 And Web3
        </p>
      </div>
      <div>
        <picture>
          <source
            media='(max-width: 480px)'
            srcSet='images/Eryk-3D-mobile.png'
          />
          <img src='images/Eryk-3D.png' alt='' />
        </picture>
      </div>
      <div className='about-sm'>
        <p>Education: Management: Marketing & Business Law</p>
        <p>Experience: 3+ Years</p>
        <p>Based: Europe (Copenhagen, Helsinki, Barcelona)</p>
      </div>
    </div>
  )
}

export default Hero
