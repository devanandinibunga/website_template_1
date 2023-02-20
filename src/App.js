import React from 'react';
import './App.css';
import { PortfolioBody } from './components/PortfolioBody/PortfolioBody';
import { PortfolioFooter } from './components/PortfolioFooter/PortfolioFooter';
import PortfolioHeader from './components/PortfolioHeader/PortfolioHeader';

function App() {
  return (
    <>
      <PortfolioHeader/>
      <PortfolioBody/>
      <PortfolioFooter/>
    </>
  );
}

export default App;
