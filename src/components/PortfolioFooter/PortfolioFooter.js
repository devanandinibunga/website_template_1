import React from 'react';
import './PortfolioFooter.scss';
import {FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa';

export const PortfolioFooter = () => {
    const portfolioIconsData=[
        <FaFacebookF/>,<FaLinkedinIn/>,<FaInstagram/>,<FaTwitter/>
    ]

  return (
    <div className='portfolio-footer-container'>
        <div className='portfolio-footer-top-container'>
        <img className='portfolio-footer-image' src='https://trydo.rainbowit.net/assets/images/logo/logo.png' alt='/'/>
        <div className='portfolio-footer-icons-container'>
            {portfolioIconsData.map((icon,i)=>
                <div key={i} className='portfolio-footer-icon'>{icon}</div>
            )}
        </div>
        </div>
        <p className='portfolio-footer-para'>
        Copyright © 2022 Rainbow-Themes. All Rights Reserved.
        </p>
    </div>
  )
}
