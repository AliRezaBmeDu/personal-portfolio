import React, { useEffect, useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <h2 className='head-text'>If you need any assistance to develop your website, please don't hesitate to contact me</h2>
      <div className='app__footer-cards'>
        <img src={images.email} alt='email' />
        <a href='mailto:ali.reza.buet@gmail.com' className='p-text'>ali.reza.buet@gmail.com</a>
      </div>
      <div className='app__footer-cards'>
        <img src={images.mobile} alt='mobile' />
        <a href='tel: +880 1876-863-547' className='p-text'>+880 1876-863-547</a>
      </div>

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)