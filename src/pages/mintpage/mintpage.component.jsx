import React from 'react';

import ImageMint from '../../assets/imgs/Illustration_Mint-01.png';

import './mintpage.styles.scss';

const MintPage = () => (
    <div classNames='mintpage'>
        <img src={ImageMint} id='bg1' />
        <div className='text-wrapper'>
            <h1>MINT A</h1>
            <h1>DETROIT</h1>
            <h1>SOCIALITE</h1>
            <button className="btn">CLICK HERE</button>
        </div>
    </div>
  );

  export default MintPage;