import React from 'react';
import './Footer.scss';
import { LogoGithub, LogoTwitter, LogoInstagram } from 'react-ionicons';

const Footer = () => {
  return (
    <div className='footer relative w-full flex flex-col items-center justify-center overflow-hidden'>
      <div>
        <span className='text-white text-sm'>
          @all right reserved {new Date().getFullYear()}
        </span>
      </div>
      <div className='flex items-center justify-center followUs'>
        <a href='https://github.com/itsgratien' target='_blank' rel="noreferrer">
          <LogoGithub color="white" />
        </a>
        <a href='https://twitter.com/itsgratien' target='_blank' rel="noreferrer">
          <LogoTwitter color="white" />
        </a>
        <a href='https://www.instagram.com/itsgratien/' target='_blank' rel="noreferrer">
          <LogoInstagram color="white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
