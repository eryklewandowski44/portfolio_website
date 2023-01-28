import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import SideNav from './components/SideNav'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  const location = useLocation()

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [cursorVarient, setCursorVarient] = useState('default')

  // console.log(mousePosition)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      width: 50,
      height: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      mixBlendMode: 'difference',
    },
    link: {
      width: 70,
      height: 70,
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      border: '2px solid white',
      mixBlendMode: 'difference',
    },
  }

  const linkEnter = () => {
    setCursorVarient('link')
  }
  const linkLeave = () => {
    setCursorVarient('default')
  }

  return (
    <>
      <Navbar linkEnter={linkEnter} linkLeave={linkLeave} />
      <div className='flex-row'>
        {location.pathname === '/' && (
          <div className='side-nav'>
            <SideNav />
          </div>
        )}
        <div className='main-content'>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </div>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVarient}
        transition={{ type: 'spring' }}
      ></motion.div>
    </>
  )
}

export default App
