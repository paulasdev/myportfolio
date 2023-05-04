import React from 'react';
import FreshEMart from '../assets/projects/freshemart.png';
import BrickLib from '../assets/projects/bricklib.png';
import FoundInTranslation from '../assets/projects/foundintranslation.png';
import Hangman from '../assets/projects/hangman.png';
import TheBrunchBasket from '../assets/projects/thebrunchbasket.png';



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
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
        <a href="https://github.com/paulasdev/Fresh-E-Mart" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
        <a href="https://paulasdev.github.io/Fresh-E-Mart/" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
  <div style={{backgroundImage:`url(${TheBrunchBasket})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      HTML and CSS
      </span>
      <div className="pt-8 text-center ">
        <a href="https://github.com/paulasdev/Fresh-E-Mart" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
        <a href="https://paulasdev.github.io/Fresh-E-Mart/" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
  <div style={{backgroundImage:`url(${BrickLib})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      HTML and CSS
      </span>
      <div className="pt-8 text-center ">
        <a href="https://github.com/paulasdev/Fresh-E-Mart" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
        <a href="https://paulasdev.github.io/Fresh-E-Mart/" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
  <div style={{backgroundImage:`url(${FoundInTranslation})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      HTML and CSS
      </span>
      <div className="pt-8 text-center ">
        <a href="https://github.com/paulasdev/Fresh-E-Mart" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
        <a href="https://paulasdev.github.io/Fresh-E-Mart/" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
  <div style={{backgroundImage:`url(${Hangman})`}} className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div ">

    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
      HTML and CSS
      </span>
      <div className="pt-8 text-center ">
        <a href="https://github.com/paulasdev/Fresh-E-Mart" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
        <a href="https://paulasdev.github.io/Fresh-E-Mart/" target="_blank">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Live
          </button>
        </a>
      </div>
    </div>
  </div>


  
</div>

     </div>
    </div>
  
  );
};

export default Work