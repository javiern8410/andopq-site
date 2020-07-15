import React from 'react';
import './styles/app.scss';
import Header from './components/header/Header'
import SitesCard from './components/cards/SitesCard'

function App() {
  return (
    <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="left-content box">
          sdfdfd
        </div>
        <div className="right-content box">
         sfdsfsfdsf
        </div>
        <div className="main-content box">
          adadsad
        </div>
        <div className="div7 box">
          <SitesCard text="Web Site Planes" />
        </div>
        <div className="div7 box">
          <SitesCard text="Android & IOS App Design" />
        </div>
        <div className="div7 box">
          <SitesCard text="Design and Marketing Solutions" />
        </div>
        <div className="footer">
          asdasd234234324
        </div>
    </div>
  );
}

export default App;