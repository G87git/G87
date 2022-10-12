import React from 'react';

import HTML from '../assets/skill/html.png';
import CSS from '../assets/skill/css.png';
import JavaScript from '../assets/skill/javascript.png';
import ReactImg from '../assets/skill/react.png';
import Mysql from '../assets/skill/mysql.png';
import FireBase from '../assets/skill/firebase.png';
import GitHub from '../assets/skill/github.png';
import Tailwind from '../assets/skill/tailwind.png';
import Python from '../assets/skill/python.png';
import Flutter from "../assets/skill/flutter.png";
import Php from "../assets/skill/php.png";
import Figma from '../assets/skill/figma.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-2 text-white'>
      {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 py-10 flex flex-col justify-center w-full h-full'>
            <div className='text-center'>
                <p className='text-4xl font-bold inline border-b-2 border-[#ED9728] text-[#8892b0] '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with so far</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-2 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <strong><p className='my-4 text-black'>HTML</p></strong>
                </div>
                <div className='shadow-sm  shadow-[#040c16] hover:scale-110 duration-500 py-2 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                    <p className='my-4 text-black'>CSS</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4 text-black'>TAILWIND CSS</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={Php} alt="HTML icon" />
                    <p className='my-4 text-black'>PHP</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                    <p className='my-4 text-black'>MYSQL</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-[#ffd600] rounded-md'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                    <p className='my-4 text-black'>PYTHON</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-2 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4 text-black'>REACT JS</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-05 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={Flutter} alt="HTML icon" />
                    <p className='my-4 text-black'>FLUTTER</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-2 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={FireBase} alt="HTML icon" />
                    <p className='my-4 text-black'>FIREBASE</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-2 bg-white rounded-md'>
                    <img className='w-20 mx-auto' src={Figma} alt="HTML icon" />
                    <p className='my-4 text-black'>FIGMA</p>
                </div>
                <div className='shadow-sm shadow-[#040c16] hover:scale-110 duration-500 py-2 bg-[#380f38] rounded-md'>
                    <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;
