import React from 'react';

import ilustration from '../../assets/imgs/Illustration-02.png';
import scroll from '../../assets/imgs/ScrollBar-01.png';
import styletext from '../../assets/fonts/LeagueGothic-Italic.otf';

import './homepage.styles.scss';
import { fontGrid } from '@mui/material/styles/cssUtils';

import '../../assets/fonts/LeagueGothic-Italic.otf';

const HomePage = () => (
  <div>
    <div className='homepage'>
      <img src= {ilustration} id="bg" alt="" />
    </div>
    <div className='bottonBand' style={{ backgroundImage: `url(${scroll})`}}>
      <h1 className='textBand' > BUILDING IN A CITY WE LOVE. BUILDING IN A CITY WE LOVE. BUILDING IN A CITY WE LOVE. BUILDING IN A CITY WE LOVE. BUILDING IN A CITY WE LOVE. BUILDING IN A CITY WE LOVE. BUILDING IN A C </h1>
      {/* <img src= {scroll} id="bg-scroll" alt="" /> */}
    </div>
  </div>
);

export default HomePage;