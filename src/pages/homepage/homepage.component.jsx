import React from 'react';
import Ticker from 'react-ticker'
import './homepage.styles.scss';
import Image from 'react-bootstrap/Image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/LeagueGothic-Italic.otf';

import homeImage from '../../assets/imgs/Illustration-02_sm.png';
import backgroundImage from '../../assets/imgs/Background_Orange_sm.png';
import scroll from '../../assets/imgs/ScrollBar-01.png';

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div>
      <div className="home-page">
        <img src= {backgroundImage} className='home-bg-image' alt=""/>
        
        <div >
          <Image src={homeImage}  className='home-img'/> 
          {/*<img src= {homeImage} className='img' alt="" />*/}

        </div>
        
      </div>
      { !matches ? (
        <div >
          <h1 className="sm-text-home">
          LET'S BUILD AND<br />MAKE CHANGE TOGETHER.<br />
          ROOTED IN DETROIT,<br />MISSION WORLDWIDE
          </h1>

        </div>
      ) : null }
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
}

export default HomePage;