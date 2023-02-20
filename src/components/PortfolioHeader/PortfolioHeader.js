// import Button from 'react-bootstrap/Button';
import React from 'react';
import './PortfolioHeader.scss';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {FaFacebookF,FaLinkedinIn,FaInstagram,FaTwitter} from 'react-icons/fa';


function PortfolioHeader() {
    const PortfolioHeaderData=["Home","About","Service","Portfolio",'Blog',"Contact"]
    const portfolioIconsData=[
        <FaFacebookF/>,<FaLinkedinIn/>,<FaInstagram/>,<FaTwitter/>
    ]
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
        <Navbar className="portfolio-header-container" key='lg'  expand='lg' >
          <Container fluid>
            <Navbar.Brand href="#">
                <img src='https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png' alt='/'/>
                {/* <div> */}
                    {portfolioIconsData.map((icon,i)=>
                        <span key={i} className='header-icon ms-3'>{icon}</span>
                    )}
                {/* </div> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className='portfolio-header-sidenavbar'
            >
              <Offcanvas.Header className='ms-auto' closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  {/* <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link> */}
                  {PortfolioHeaderData.map((each,i)=>
                    <p key={i} className='portfolio-header-each-navlink'>{each}</p>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      {/* ))} */}
    </>
  );
}

export default PortfolioHeader;