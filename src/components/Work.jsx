import React from 'react';
// import WorkImg from '../assets/workImg.jpeg';
// import realEstate from '../assets/realestate.jpg';
import work1 from '../assets/work.jpg'
import work2 from '../assets/work.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import work5 from '../assets/work5.jpg'
import work6 from '../assets/work6.jpg'


const Work = () => {
  return (
    <div name='work' className='w-full text-white bg-2 h-full'>
      <div className='max-w-[1000px] mx-auto p-4 py-10 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-2 border-[#ED9728] text-[#8892b0]'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div rounded-sm'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                School Login Page
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Preview
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                School Registration Page
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Preview
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work3})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Online Student Registration System
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Preview
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Help Assistance
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Preview
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work5})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-xl font-bold text-white tracking-wider '>
                Business Consulting Website(BigBaz)
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Preview
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work6})` }}
            className='shadow-lg shadow-[#040c16] group container  flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-xl font-bold text-white tracking-wider'>
                Real Estate Website(JIC)
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Preview
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-sm rounded-sm'>
                    Code
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

export default Work;
