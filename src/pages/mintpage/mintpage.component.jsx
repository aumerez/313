import React from 'react';

import ImageMint from '../../assets/imgs/Illustration_Mint-01.png';
import MintButton from '../../components/mint-button/mint-button.component';

import { Container, Row, Col, Image } from 'react-bootstrap';

import backgroundImageMint from '../../assets/imgs/background_mint-01.png'

import './mintpage.styles.scss';

const MintPage = () => (

    <div className='page'>
        <img className='bg-image' src={backgroundImageMint} alt=''/>
        <div className='container'>
            <img src={ImageMint} alt=''/>
                    <div className='text-wrapper'>
                        <h1>MINT A</h1>
                        <h1>DETROIT</h1>
                        <h1>SOCIALITE</h1>
                    </div>
                    <div className='btn'>
                        <MintButton />
                    </div>
                
        </div>
    </div>
  );

  export default MintPage;