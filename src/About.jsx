import React from 'react'
import"./About.css"

const About = () => {
  return (
        <section className='hero'>
            <div className='hero-content'>
                <p className='small-title'>ABOUT US</p>
                <h1>We Build <span>Solutions,</span>
                <br />
                Not Just <span>Websites.</span>
                </h1>
                <p className='paragraph'>
                    We are a team of passionate developers and designers who
                     love to create clean ,simple and user friendly digital
                      experiences.our goal is to help
                      businesses and individuals
                      bring their ideas to life through
                       modern web solutions.
                </p>
                <button className='learn-btn'>
                    Learn more
                </button>
            </div>
            <div className='image'>
                <image src=""></image>
            </div>
            <div className='image'>
            <img src="https://media.istockphoto.com/id/1747446180/vector/studying-kid-student-writing-on-paper-sheet-education-scene-with-girl-sitting-at-table.jpg?s=612x612&w=0&k=20&c=AMP28jUHphmR_D4hbGfDnP28hHpRYK8Xe34uOclGCI4="></img>
            </div>
        </section>
  )
}

export default About
