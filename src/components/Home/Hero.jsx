import React from 'react'

function Hero() {
  return (
    <div className='contain-hero'>

      <div className="hero-img">
        <div className='hero-head'>
          <h1>Hi i'm Eryk</h1>
          <p>22y Web3 marketing specialist: Pushing the boundaries with NFTs and Al</p>
        </div>
        <div className='laptop'>
          <img src="/object_laptop.png" alt="" />
        </div>
        <div className='headphone'>
          <img src="/object_headphones.png" alt="" />
        </div>
        <div className="about-sm">
          <p>Education: Management & Law</p>
          <p>Experience: Marketing 3+ Years</p>
          <p>Based: Helsinki, Finland</p>
        </div>
      </div>
    </div>
  )
}

export default Hero