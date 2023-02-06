import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Web2 from '../components/Web2'
import Web3 from '../components/Home/Web3'
import Steps from '../components/Home/Web3/Steps'

function Home() {
  return (
    <div className='home'>
      <div id='hero'>
        <Hero />
        <h1 className='port-head'>Portfolio</h1>
      </div>
      <div id='rens'>
        <div className='web-pxl'>
          <img src='images/web3.png' alt='' />
        </div>
        <Web3 />
      </div>
      <Steps />
      <div className='web-pxl'>
        <img src='images/web2.png' alt='' />
      </div>
      <Web2 />
      <hr className='h-line' />
      <Footer />
    </div>
  )
}

export default Home
