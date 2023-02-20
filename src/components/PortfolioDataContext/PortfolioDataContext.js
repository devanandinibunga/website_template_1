import React from "react";
import {BiCast} from 'react-icons/bi';
import {ImStack} from 'react-icons/im';
import {MdSupervisorAccount} from 'react-icons/md';
import {FiMonitor} from 'react-icons/fi'

export const latestNewsData=[
    {para:"Development",title:"Getting tickets to the big show.",backgroundImage:"https://trydo.rainbowit.net/assets/images/blog/blog-01.jpg"},
    {para:"Management",title:"A big ticket gone to be an interesting",backgroundImage:"https://trydo.rainbowit.net/assets/images/blog/blog-02.jpg"},
    {para:"Design",title:"The Home of the Future Could Bebes",backgroundImage:'https://trydo.rainbowit.net/assets/images/blog/blog-03.jpg'},
]

export const projectsData = [
    {
      para: "Development",
      title: "Getting tickets to the big show.",
      backgroundImage:
        "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-1.jpg",
    },
    {
      para: "Development",
      title: "Getting tickets to the big show.",
      backgroundImage:
        "	https://trydo.rainbowit.net/assets/images/portfolio/portfolio-2.jpg",
    },
    {
      para: "Development",
      title: "Getting tickets to the big show.",
      backgroundImage:
        "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-3.jpg",
    },
    {
      para: "Development",
      title: "Getting tickets to the big show.",
      backgroundImage:
        "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-4.jpg",
    },
    {
      para: "Development",
      title: "Getting tickets to the big show.",
      backgroundImage:
        "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-5.jpg",
    },
    {
      para: "Development",
      title: "Getting tickets to the big show.",
      backgroundImage:
        "https://trydo.rainbowit.net/assets/images/portfolio/portfolio-6.jpg",
    },
  ];

export const servicesData=[
    {icon:<BiCast/>,title:"Business Stratagy",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},
    {icon:<ImStack/>,title:"Web Development",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},
    {icon:<MdSupervisorAccount/>,title:"Marketing & Reporting",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},
    {icon:<FiMonitor/>,title:"Mobile App Development",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},
    {icon:<MdSupervisorAccount/>,title:"Marketing & Reporting",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},
    {icon:<FiMonitor/>,title:"Mobile App Development",description:"I throw myself down among the tall grass by the stream as I lie close to the earth."},
]
export const portfoliocontext = React.createContext();
