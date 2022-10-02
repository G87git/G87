import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
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
        <h2 className='text-2xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full-Stack Developer.
        </h2>
        <p className='text-[#eceef6] py-4 max-w-[700px]'>
        A programmer with experience in both the front end and back end of an application who focuses on software development.
        I work to create a seamless user experience using my diverse skill set.
        I also have understanding of database configuration, server setup, and user interface.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
        <button className='text-white group border-[1px] px-6 py-3 my-2 flex items-center rounded-sm'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
