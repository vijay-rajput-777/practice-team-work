import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FtLast from './FtLast'
import About from './About'

const App = () => {
  return (
    <div style={{padding:'50px 0px'}}>
      <Navbar/>
      <About/>
      <Footer/>
      <FtLast/>
    </div>
  )
}

export default App
