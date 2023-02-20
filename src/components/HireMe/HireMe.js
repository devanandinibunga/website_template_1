import React from 'react'
import './HireMe.scss';

export const HireMe = () => {
  return (
    <div className='hire-me-container'>
        <img className='hire-me-image' src='https://trydo.rainbowit.net/assets/images/about/about-9.jpg' alt='/'/>
        <div className='hire-me-details-container'>
            <h1 className='hire-me-title'>Hire Me.</h1>
            <p className='hire-me-para'>I am available for freelance work. Connect with me via phone:<span className='hire-me-span'> 01923 088574</span>  or email:<span className='hire-me-span'> admin@example.com</span></p>
            <input className='hire-me-input' placeholder='Your Name*'/>
            <input className='hire-me-input' placeholder='Your email*'/>
            <input className='hire-me-input' placeholder='Write a Subject'/>
            <textarea className='hire-me-textarea' placeholder='Your Message'></textarea>
            <button className='hire-me-btn'>SUBMIT</button>
        </div>
    </div>
  )
}
