import React from 'react';

import ilustration from '../../assets/imgs/Illustration-02.png';
import scroll from '../../assets/imgs/ScrollBar-01.png';
import styletext from '../../assets/fonts/LeagueGothic-Italic.otf';

import './homepage.styles.scss';

import Ticker from 'react-ticker'

import '../../assets/fonts/LeagueGothic-Italic.otf';

const HomePage = () => (
  <div>
    <div className='homepage'>
      <img src= {ilustration} id="bg" alt="" />
    </div>
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
);

export default HomePage;