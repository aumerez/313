import React from 'react';
import Ticker from 'react-ticker'
import './homepage.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/LeagueGothic-Italic.otf';

import homeImage from '../../assets/imgs/Illustration-02.png';
import backgroundImage from '../../assets/imgs/Background_Orange.png';

import scroll from '../../assets/imgs/ScrollBar-01.png';

const HomePage = () => (
  <div className="page">
    <img src= {backgroundImage} className='bg-image' alt=""/>
    <div >
      <img src= {homeImage} className='img' alt="" />
      <div className='bottonBand' style={{ backgroundImage: `url(${scroll})`}}>
        <Ticker>
          {({ index }) => (
            <>
              <h1 className='textBand'>BUILDING IN A CITY WE LOVE.  </h1>
              <img src="www.my-image-source.com/" alt=""/>
            </>
          )}
        </Ticker>
      </div>
    </div>
    
  </div>
);

export default HomePage;