import React from 'react';
import FreshEMart from '../assets/projects/freshemart.png';
import BrickLib from '../assets/projects/bricklib.png';
import FoundInTranslation from '../assets/projects/foundintranslation.png';
import TheBrunchBasket from '../assets/projects/thebrunchbasket.png';
import {
  FaGithub,
  FaLink,
} from 'react-icons/fa';



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Some examples of my work and projects I've worked or I'm currently working on.</p>
        </div>

{/* container for projects */}
<div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

{/* grid item */}
  <div style={{backgroundImage:`url(${FreshEMart})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      HTML and CSS
      </span>
      <div className="pt-8 text-center ">
        <ul className='flex justify-center text-center items-center mx-auto'>
        <li>
        <a href="https://github.com/paulasdev/Fresh-E-Mart" target="_blank">
        <FaGithub size={30} />
        </a>
        </li>
        <li>
        <a href="https://paulasdev.github.io/Fresh-E-Mart/" target="_blank">
        <FaLink size={30} />
        </a>
        </li>
        </ul>
      </div>
    </div>
  </div>
  <div style={{backgroundImage:`url(${TheBrunchBasket})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

  <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      E-Commerce site, built using Django, Python, Stripe, AWS, JQuery, HTML and CSS
      </span>

      <div className="pt-8 text-center ">
        <ul className='flex justify-center text-center items-center mx-auto'>
        <li>
        <a href="https://github.com/paulasdev/The_Brunch_Basket" target="_blank">
        <FaGithub size={30} />
        </a>
        </li>
        <li>
        <a href="https://the-brunch-basket.herokuapp.com/" target="_blank">
        <FaLink size={30} />
        </a>
        </li>
        </ul>
      </div>

    </div>
  </div>


  <div style={{backgroundImage:`url(${BrickLib})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
  <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      HTML, CSS, JavaScript, Django and Bootstrap
      </span>
      <div className="pt-8 text-center ">
        <ul className='flex justify-center text-center items-center mx-auto'>
        <li>
        <a href="https://github.com/paulasdev/BrickLib" target="_blank">
        <FaGithub size={30} />
        </a>
        </li>
        <li>
        <a href="https://bricklib.herokuapp.com/" target="_blank">
        <FaLink size={30} />
        </a>
        </li>
        </ul>
      </div>
    </div>
  </div>


  <div style={{backgroundImage:`url(${FoundInTranslation})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">
  <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      Hackthon Project - CRUD Operations using Python, Flask, MongoDB, HTML, CSS and JQuery
      </span>
      <div className="pt-8 text-center ">
        <ul className='flex justify-center text-center items-center mx-auto'>
        <li>
        <a href="https://github.com/paulasdev/Found-In-Translation" target="_blank">
        <FaGithub size={30} />
        </a>
        </li>
        <li>
        <a href="https://foundintranslationsodaci.herokuapp.com/" target="_blank">
        <FaLink size={30} />
        </a>
        </li>
        </ul>
      </div>
    </div>
  </div>


  
</div>

     </div>
    </div>
  
  );
};

export default Work