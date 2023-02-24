import React from 'react'

function Hero() {
  return (
    <div className='contain-hero'>
      <div className='hero-head'>
        <h1>Hi i'm Eryk</h1>
        <p>
          Young Web3 Marketing Specialist: Pushing The Boundaries with Crypto,
          NFTs and AI
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
        <p>Education: Marketing & Law</p>
        <p>Experience: 3+ Years</p>
        <p>Based: Helsinki, Finland</p>
      </div>
    </div>
  )
}

export default Hero