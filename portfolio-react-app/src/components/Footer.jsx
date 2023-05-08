import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/cv.pdf';
import {
    FaGithub,
    FaLinkedin,
  } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='px-4 bg-[#0a192f] text-gray-300'>
       
          <div className='flex justify-center text-center items-center mx-auto'>
            <ul className='flex'>
              <li>
              <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/paulacgsilva/' target="_blank">
              <FaLinkedin size={20} />
              </a>
            </li>
            <li>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/paulasdev' target="_blank">
            <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:carolpaulag@gmail.com' target="_blank"
            >
          <HiOutlineMail size={20} />
            </a>
          </li>
          <li>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href= {CV} target="_blank">
            <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
        </div> 

        <div className='p-4 text-center text-neutral-700'>
            © 2023 Paula da Silva. All rights reserved.
        </div>
</div>
    );
};

export default Footer