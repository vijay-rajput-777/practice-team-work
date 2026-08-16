import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
              <span className='logo'> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className='svgg'><path d="M240-280 40-480l200-200 56 56-143 144 143 144-56 56Zm178 132-76-24 200-640 76 24-200 640Zm302-132-56-56 143-144-143-144 56-56 200 200-200 200Z" /></svg> <p> CodeCraft</p></span>

              <span className='details'>
                    <span>home</span>
                    <span>about</span>
                    <span>Service</span>
                    <span>Projects</span>
                    <span>Contacts</span>
              </span>

              <span className='btn'> Get Start </span>
      </nav>
    </div>
  )
}

export default Navbar
