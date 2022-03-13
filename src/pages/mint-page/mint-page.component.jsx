import React from 'react';

import Image from 'react-bootstrap/Image';
import MintButton from '../../components/mint-button/mint-button.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/fonts/LeagueGothic-Italic.otf';
import './mint-page.styles.scss';

import mintImage from '../../assets/imgs/Illustration_Mint-01.png';
import backgroundImage from "../../assets/imgs/background_mint-01.png";


const MintPage = () => (
  <div>
    <div className="page">
      <img src= {backgroundImage} className='bg-image' alt=""/>
      
      <div >
        <Image src={mintImage} position='sticky' className='img'/> 
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