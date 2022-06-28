import React from 'react'
import './Footer.css' 
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      {/*social media links and icons gotten from react-icons*/}
      <div className='leoo'>
        <a href=''target='_blank' ><AiFillFacebook /></a>
        <a href='https://www.linkedin.com/company/paywithreceive'target='_blank'><AiFillLinkedin/></a>
        <a href='https://twitter.com/paywithReceive'target='_blank'><AiOutlineTwitter/></a>
        <a href='https://www.instagram.com/paywithreceive/'target='_blank'><AiFillInstagram/></a>
        <a href='easypayments.receive@gmail.com'target='_blank'><AiTwotoneMail/></a>
      </div>
      <div className='copyright'>
          <small className='footdet'>receive&copy; 2022 - All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
