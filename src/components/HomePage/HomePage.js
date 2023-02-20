import React from 'react'
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className='home-page-container'>
        <div className='home-page-inner-container'>
            <p className='home-page-inner-container-title'>WELCOME TO MY WORLD</p>
            <h1 className='home-page-inner-container-heading'>Hi, I’m Jone Doe <br/>
            <div className='home-page-sliding-text'>
              <span>Js Developer.</span>
              <span>Content writer.</span>
              <span>UI/UX.</span>
            </div></h1>
            <h2 className='home-page-inner-container-heading2'>based in USA.</h2>
        </div>
    </div>
  )
}
