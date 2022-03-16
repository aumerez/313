import React from 'react';

import Image from 'react-bootstrap/Image';
import MintButton from '../../components/mint-button/mint-button.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/LeagueGothic-Italic.otf';
import './mint-page.styles.scss';

import mintImage from '../../assets/imgs/Illustration_Mint-01_Text2_sm.png';
import backgroundImage from "../../assets/imgs/background_mint-01_sm.png";


const MintPage = () => (
  <div>
    <div className="mint-page">
      <img src= {backgroundImage} className='mint-bg-image' alt=""/>
      
      <div >
        <Image src={mintImage} position='sticky' className='mint-img'/> 
        {/*<img src= {homeImage} className='img' alt="" />*/}

      </div>
      
    </div>
    <div className='fixed-bottom d-flex align-items-center justify-content-center text-center' 
      style={{ marginBottom: '100px'}}>
      <MintButton />
    </div>
  </div>
);

export default MintPage;