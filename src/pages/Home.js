import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Web2 from '../components/Home/Web2'
import Web3 from '../components/Home/Web3'

function Home() {
  return (
    <>
      <Hero />
      <h1 className='port-head'>Portfolio</h1>
      <Web3 />
      <Web2 />
      <hr className='h-line' />
      <Footer/>
    </>
  )
}

export default Home
