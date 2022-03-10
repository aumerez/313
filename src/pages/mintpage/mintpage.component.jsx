import React from 'react';

import ImageMint from '../../assets/imgs/Illustration_Mint-01.png';
import MintButton from '../../components/mint-button/mint-button.component';

import './mintpage.styles.scss';

const MintPage = () => (
    <div className='background-mint'>
        {/* <article className='article'>
            <img className='image' src={ImageMint} alt='background' />
            <h1 className='header'>React Is Awesome</h1>
        </article> */}
        <div class='mintpage'>
            <img src={ImageMint} id='bg1' alt="Snow" />
            <button class="btn">Button</button>
            <MintButton />
        </div>
    </div>
  );

  export default MintPage;