import React from 'react';
import Ticker from 'react-ticker'
import './homepage.styles.scss';
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/LeagueGothic-Italic.otf';

import homeImage from '../../assets/imgs/Illustration-02.png';
import backgroundImage from '../../assets/imgs/Background_Orange.png';
import scroll from '../../assets/imgs/ScrollBar-01.png';

const HomePage = () => (
  <div>
    <div className="page">
      <img src= {backgroundImage} className='bg-image' alt=""/>
      
      <div >
        <Image src={homeImage} position='sticky' className='img'/> 
        {/*<img src= {homeImage} className='img' alt="" />*/}

      </div>
      
    </div>
    <div className='bottonBand fixed-bottom' 
      style={{ backgroundImage: `url(${scroll})`, marginBottom: '80px'}}>
      <Ticker>{({ index }) => (
        <>
          <h1 className='textBand'>BUILDING IN A CITY WE LOVE.  </h1>
          <img src="www.my-image-source.com/" alt=""/>
        </>)}
      </Ticker>
    </div>
  </div>
);

export default HomePage;