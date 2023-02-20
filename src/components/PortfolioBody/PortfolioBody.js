import React from 'react'
import { portfoliocontext,latestNewsData,projectsData,servicesData } from '../PortfolioDataContext/PortfolioDataContext'
import { AboutMe } from '../AboutMe/AboutMe'
import { HireMe } from '../HireMe/HireMe'
import { HomePage } from '../HomePage/HomePage'
import { LatestNews } from '../LatestNews/LatestNews'
import { Projects } from '../Projects/Projects';
import { Services } from '../Services/Services'

export const PortfolioBody = () => {
  return (
    <>
      <HomePage/>
      <AboutMe/>
      <portfoliocontext.Provider value={{projectsData,servicesData,latestNewsData}}>
          <Services/>
          <Projects/>
          <LatestNews/>
      </portfoliocontext.Provider>
      <HireMe/>
    </>
  )
}
