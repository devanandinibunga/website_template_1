import React from 'react';
import { Tabs } from 'antd';
// import { Tabs } from 'react-bootstrap';
import './AboutMe.scss';

export const AboutMe = () => {

  const onChange = (key) => {
    console.log(key);
  };
  const item1Data=[
    {service:"User Experience Design -UI/UX",caption:"Delight the users and make it work."},
    {service:"User Experience Design -UI/UX",caption:"Delight the users and make it work."},
    {service:"User Experience Design -UI/UX",caption:"Delight the users and make it work."},
  ]

  const item2Data=[
    {service:"Awwwards.com-Winner",caption:"2019-2020"},
    {service:"CSS Design Awards ",caption:"2017-2018"},
    {service:"Design Nominees- site of the day",caption:"2013-2014"},
  ]

  const item3Data=[
    {service:"Sr. Front-end Engineer - Google",caption:"2018-current"},
    {service:"Front-end Engineer - Microsoft",caption:"2017-2018"},
    {service:"Software Engineer - Alibaba",caption:"2013-2014"},
  ]
  
  const item4Data=[
    {service:"BSc In CSE - ABC University, Los Angeles, CA",caption:"2010"},
    {service:"Diploma in Computer Science - Gamma Technical Institute ",caption:"2009"},
    {service:"Graphic Designer - ABC Institute, Los Angeles, CA",caption:"2007"},
  ]
  const items = [
    {
      key: '1',
      label: `Main skills`,
      children: (
        <>
          {item1Data.map((each,i)=>
          <div key={i}>
            <h6>{each.service}</h6>
            <p>{each.caption}</p>
          </div>
          )}
        </>
        )
    },
    {
      key: '2',
      label: `Awards`,
      children: 
      <>
      {item2Data.map((each,i)=>
      <div key={i}>
        <h6>{each.service}</h6>
        <p>{each.caption}</p>
      </div>
      )}
    </>,
    },
    {
      key: '3',
      label: `Experience`,
      children: 
      <>
      {item3Data.map((each,i)=>
      <div key={i}>
        <h6>{each.service}</h6>
        <p>{each.caption}</p>
      </div>
      )}
    </>,
    },
    {
      key: '4',
      label: `Education & Certification`,
      children: 
      <>
      {item4Data.map((each,i)=>
      <div key={i}>
        <h6>{each.service}</h6>
        <p>{each.caption}</p>
      </div>
      )}
    </>,
    },
  ];

  return (
    <div className='about-me-container'>
        <img className='about-me-image-container' src='https://trydo.rainbowit.net/assets/images/about/about-8.jpg' alt='about-me-img'/>
        <div className='about-me-right-container'>
            <h1 className='about-me-title'>About Me</h1>
            <p className='about-me-para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
            <Tabs className='tabs' defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    </div>
  )
}
