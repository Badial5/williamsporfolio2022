import React from 'react'
import { Link } from 'react-router-dom'
import "./home.style.scss"

//import LogoTitle from "../../assets/images/cw_trans.png"

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
            <b>Hello</b> Calvin Williams is my name 
            <span className='img_logo'> (CW) </span>
            {/* (<img src={LogoTitle}  alt="developer" />) */}
               

            <br />
            Web Developer
        </h1>
        <h2>
            <span className='fullstack'>FullStack Developer </span> / 
            IT Support / 
            <span className='javascript'>JavaScript </span> / YouTuber
        </h2>

        <Link to='contact' className='flat-button'>Contact Me </Link>

      </div>
    </div>
  )
}

export default Home
