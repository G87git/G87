import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Mysql from '../assets/mysql.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png';
import Flutter from "../assets/flutter.png";
import Php from "../assets/php.png";
import Figma from '../assets/figma.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-3 text-white'>
      {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 py-10 flex flex-col justify-center w-full h-full'>
            <div className='text-center'>
                <p className='text-4xl font-bold inline border-b-2 border-[#ED9728] '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with so far</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-sm  shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={Php} alt="HTML icon" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                    <p className='my-4'>MYSQL</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={Flutter} alt="HTML icon" />
                    <p className='my-4'>FLUTTER</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05'>
                    <img className='w-20 mx-auto' src={Figma} alt="HTML icon" />
                    <p className='my-4'>FIGMA</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-indigo-900'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;
