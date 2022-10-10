import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-1 flex'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8892b0]'>Hi everyone, my name is</p>
        <h1 className='text-3xl  sm:text-7xl font-bold text-[#ED9728]'>
          NZAGMENE HASSAN
        </h1>
        <h2 className='text-sm sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full-Stack Developer.
        </h2>
        <p className='text-[#eceef6] py-4 max-w-[700px]'>
        A programmer who concentrates on software development and has knowledge
        of both the front-end and back-end of an application.
        I employ a variety of skills to produce a seamless user experience. 
        I also understand how to set up a server, a database, and a user interface.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
        <button className='text-white group border-[1px] px-6 py-3 my-2 flex items-center rounded-sm'>
            Work done
            <span className='group-hover:text-[25px] text-green-900 duration-300'>
              <HiCheck className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
