import React from 'react'

function Hero() {
  return (
    <div className='contain-hero'>
      <div className="hero-img">
        <div className='hero-head'>
          <h1>Hi i'm Eryk</h1>
          <p>Young Web3 Marketing Specialist: Pushing The Boundaries with NFTs and AI</p>
        </div>
        {/* <div className='laptop'>
          <img src="/object_laptop.png" alt="" />
        </div>
        <div className='headphone'>
          <img src="/object_headphones.png" alt="" />
        </div> */}
        <div className="about-sm">
          <p>Education: Management & Law</p>
          <p>Experience: 3+ Years</p>
          <p>Based: Helsinki, Finland</p>
        </div>
      </div>
    </div>
  )
}

export default Hero