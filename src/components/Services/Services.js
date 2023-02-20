import React from 'react';
import './Services.scss';
import { portfoliocontext } from '../PortfolioDataContext/PortfolioDataContext';
// import {TfiMobile} from 'react-icons/tfi';


export const Services = () => {


  return (
    <div className='services-container'>
        <h1 className='services-container-title'>My Awesome Service</h1>
        <p className='services-container-para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
        <div className='services-main-container'>
        <portfoliocontext.Consumer>
          {({servicesData})=>{
            return(
              <>
                {servicesData.map((service,i)=>
                <div key={i} className='services-inner-container'>
                    <p className='services-inner-container-icon'>{service.icon}</p>
                    <h1 className='services-inner-container-title'>{service.title}</h1>
                    <p className='services-inner-container-para'>{service.description}</p>
                </div>
                )}
              </>
            )
          }}
        </portfoliocontext.Consumer>
        </div>
    </div>
  )
}
