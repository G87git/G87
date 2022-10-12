import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';

import Logo from '../assets/logo.gif';
import MyResume from '../assets/NZANMENE DIT DIBRIL HASSAN.pdf';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-1 text-[#8892b0] text-base font-mono'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '70px' }} />
        {/* <h1 className='text-5xl'><strong>G87</strong></h1> */}
      </div>
      {/* menu */}
      <ul className='hidden md:flex cursor-pointer'>
        <li className='hover:text-[#ED9728]  mx-5'>
          <Link to='home' smooth={true} duration={500}>
            {/* <span className='bg-[#ED9728] rounded-full px-1 mx-1 text-[#391D0C]'>1</span> */}
            Home
          </Link>
        </li>
        <li className='hover:text-[#ED9728]  mx-5'>
          <Link to='about' smooth={true} duration={500}>
          {/* <span className='bg-[#ED9728] rounded-full px-1 mx-1 text-[#391D0C]'>2</span> */}
            About
          </Link>
        </li>
        <li className='hover:text-[#ED9728] mx-5'>
          <Link to='skills' smooth={true} duration={500}>
          {/* <span className='bg-[#ED9728] rounded-full px-1 mx-1 text-[#391D0C]'>3</span> */}
            Experience
          </Link>
        </li>
        <li className='hover:text-[#ED9728]'>
          <Link to='work' smooth={true} duration={500}>
          {/* <span className='bg-[#ED9728] rounded-full px-1 mx-1 text-[#391D0C]'>4</span> */}
            Work
          </Link>
        </li>
        <li className='hover:text-[#ED9728] mx-5'>
          <Link to='contact' smooth={true} duration={500}>
          {/* <span className='bg-[] rounded-full px-1 mx-1 text-[#391D0C]'>5</span> */}
            Contact
          </Link>
        </li>
        <li className=''>
          <a
            className='border border-[#ED9728] p-2 text-[#ED9728] rounded-md hover:bg-[#4f301d] duration-200'
            href={MyResume} download={'G87_Code Resume'}
          >
            Resume 
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes  color='#391d0c'/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center text-[#391d0c]'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        
      </ul>

      {/* Social icons */}
      
    </div>
  );
};

export default Navbar;
