import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import{
  FaGithub,
  FaTwitterSquare,
  FaWhatsappSquare,
FaLinkedin,
} from 'react-icons/fa';
const More = () => {
  return (
    <div className='w-full bg-1 sm:flex-none'>
        <div className=' py-5'>
        <div className='text-center pb-8 pl-4'>
            <p className='text-4xl text-white font-bold inline border-b-2 border-[#ED9728]'>
              More
            </p>
            <p className='text-center text-white py-2'>It's also possible to get in contact with me at</p>
          </div>
        <ul className='flex justify-evenly'>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300 '>
            <a
              className='flex justify-between items-center w-full text-white'
              href='/'
            >
              Linkedin <FaLinkedin size={30} color='blue'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} color='violet' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Twitter <FaTwitterSquare size={30} color='blue'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Whats'App <FaWhatsappSquare size={30} color='green'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} color='Red' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default More