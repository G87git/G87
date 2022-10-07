import React from 'react'
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import MyResume from '../assets/NZANMENE DIT DIBRIL HASSAN.pdf';
import Linkedin from '../assets/linkedin.png';
import Whatsapp from '../assets/Whatsapp_3.png';
import Github from '../assets/github.png';
import Twitter from '../assets/twitter.png';
import Gmail from '../assets/gmail.png';
import CV from '../assets/cv.png';
import{
  // FaGithub,
  // FaTwitterSquare,
  // FaWhatsappSquare,
// FaLinkedin,
} from 'react-icons/fa';
const More = () => {
  return (
    <div className='w-full bg-2' name='more'>
        <div className=' py-5'>
        <div className='text-center '>
            <p className='text-4xl text-[#8892b0] font-bold inline border-b-2 border-[#ED9728]'>
              More
            </p>
          </div>
          <p className='text-center text-white py-5'>It's also possible to get in contact with me at</p>
        <ul className='grid gap-0 grid-cols-1 grid-rows-3 place-items-center'>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300 '>
            <a
              className='flex justify-between items-center w-full text-white'
              href='/'
            >
              Linkedin <img className='hover:-rotate-12 duration-700' src={Linkedin} alt="" width={70} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/G87git'
            >
              Github <img className='hover:-rotate-12 duration-700' src={Github} alt="" srcset="" width={50}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/G87_Code'
            >
              Twitter <img className='hover:-rotate-12 duration-700' src={Twitter} alt="" width={70} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://api.whatsapp.com/send?phone=+237671993744text=Hi.%20Welcome%20How%20can%20I%20help%20you'
            >
              Whats'App<img className='hover:-rotate-12 duration-700' src={Whatsapp} alt="" width={50} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto: nzangmenedit@gmail.com"
            >
              Email <img className='hover:-rotate-12 duration-700' src={Gmail} alt="" width={70}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center hover:scale-110 duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href={MyResume} download={'G87_Code Resume'}
            >
              Resume <img className='hover:-rotate-12 duration-700' src={CV} alt="" width={50} />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className='text-center text-gray-300 text-sm '> Designed and Built by **Nzangmene Hassan**</p>
      </div>
    </div>
  )
}

export default More