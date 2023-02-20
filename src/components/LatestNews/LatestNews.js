import React from 'react';
import './LatestNews.scss';
import { portfoliocontext } from '../PortfolioDataContext/PortfolioDataContext';

export const LatestNews = () => {

  return (
    <div className='latest-news-container'>
        <h1 className='latest-news-container-title'>Latest News</h1>
        <p className='latest-news-container-para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
        <div className='latest-news-main-container'>
        <portfoliocontext.Consumer>
          {({latestNewsData})=>{
            return(
              <>
              {latestNewsData.map((news,i)=>
                <div key={i} className='latest-news-inner-container' style={{ backgroundImage: `url(${news.backgroundImage})`,}}>
                  <div className='latest-news-inner-main-container' >
                    <p className='latest-news-inner-container-para'>{news.para}</p>
                    <h1 className='latest-news-inner-container-title'>{news.title}</h1>
                    {/* <button className='latest-news-inner-container-btn'>VIEW DETAILS</button> */}
                  </div>
                  <div className='latest-news-inner-main-overlay-container' >
                    <div className='overlay'>
                      <p className='latest-news-inner-container-para'>{news.para}</p>
                      <h1 className='latest-news-inner-container-title'>{news.title}</h1>
                      <button className='latest-news-inner-container-btn'>VIEW DETAILS</button>
                    </div>
                  </div>
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
