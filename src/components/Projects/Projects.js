import React from "react";
import "./Projects.scss";
import { portfoliocontext } from "../PortfolioDataContext/PortfolioDataContext";

export const Projects = () => {
 
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  return (
    <div className="projects-container">
      <h1 className="projects-container-title">My Latest Project</h1>
      <p className="projects-container-para">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration
      </p>
      <div className="projects-main-container">
        <portfoliocontext.Consumer>
          {({projectsData})=>{
            return(
              <>
              {projectsData.map((project, i) => (
              <div className="projects-inner-container" key={i} style={{backgroundImage: `url(${project.backgroundImage})`}}>
                <div className="projects-inner-main-container">
                  <p className="projects-inner-container-para">{project.para}</p>
                  <h1 className="projects-inner-container-title">
                    {project.title}
                  </h1>
                  <button className="projects-inner-container-btn">
                    VIEW DETAILS
                  </button>
                </div>
            </div>         
        ))}
              </>
            )
          }}
        
        </portfoliocontext.Consumer>
      </div>
      <button className="projects-container-bottom-btn">VIEW MORE</button>
    </div>
  );
};
