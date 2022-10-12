import React from 'react'

import Linkedin from '../assets/account/icons8_linkedin_2_100px.png';
import Whatsapp from '../assets/account/icons8_whatsapp_100px.png';
import Github from '../assets/account/icons8_github_100px.png';
import Twitter from '../assets/account/icons8_twitter_100px.png';
import Gmail from '../assets/account/icons8_Gmail_Logo_100px.png';
import Instagram from '../assets/account/icons8_Instagram_100px.png';
import Hashnode from '../assets/account/icons8_Hashnode_100px.png'
const Contact = () => {
  return (
    <div name='contact' className='w-full bg-2  justify-center items-center p-4 h-full'>
        <form method='POST' action="https://getform.io/f/bdc8d9d0-3c8b-4f6d-b86b-bd9dbefcd1f7" className='flex flex-col max-w-[1000px] mx-auto w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-2 border-[#ED9728] text-[#8892b0]'>Contact</p>
                <p className='text-white py-4'> Submit the form below or shoot me an email - nzangmenedit@gmail.com</p>
            </div>
            <label htmlFor="" className='text-white'>Name :</label>
            <input className='bg-white p-3 rounded-sm' type="text" placeholder='Enter your name' name='name' required />
            <label htmlFor="" className='text-white pt-5'>Email :</label>
            <input className=' p-3 bg-white rounded-sm' type="email" placeholder='Enter your email' name='email'  required/>
            <label htmlFor="" className='text-white pt-5'>Message :</label>
            <textarea className='bg-white p-2 rounded-sm' name="message" rows="10" placeholder='Give us your feedback here' required></textarea>
            <button className='text-white border group px-4 py-3 my-8 mx-auto flex items-center rounded-sm'>Send to <strong className='group-hover:text-xl duration-500 pl-1 text-[#ED9728]'> G87</strong></button>
        </form>

        <ul className='  sm:fixed top-[100px] ml-5'>
          <li className=' py-4'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='/'
            >
              <img className='hover:-rotate-12 duration-700' src={Linkedin} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/G87git'
            >
              <img className='hover:-rotate-12 duration-700' src={Github} alt="" srcset="" width={30}/>
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/G87_Code'
            >
              <img className='hover:-rotate-12 duration-700' src={Twitter} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <img className='hover:-rotate-12 duration-700' src={Instagram} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <img className='hover:-rotate-12 duration-700' src={Hashnode} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://api.whatsapp.com/send?phone=+237671993744text=Hi.%20Welcome%20How%20can%20I%20help%20you'
            >
              <img className='hover:-rotate-12 duration-700' src={Whatsapp} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto: nzangmenedit@gmail.com"
            >
              <img className='hover:-rotate-12 duration-700' src={Gmail} alt="" width={30}/>
            </a>
          </li>
          <div className='w-[1px] h-40 bg-white ml-3 rounded-lg'>
          </div>
        </ul>
        <ul className='flex justify-evenly sm:hidden'>
          <li className=' py-4'>
            <a
              className='flex justify-between items-center w-full text-white'
              href='/'
            >
              <img className='hover:-rotate-12 duration-700' src={Linkedin} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/G87git'
            >
              <img className='hover:-rotate-12 duration-700' src={Github} alt="" srcset="" width={30}/>
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/G87_Code'
            >
              <img className='hover:-rotate-12 duration-700' src={Twitter} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <img className='hover:-rotate-12 duration-700' src={Instagram} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <img className='hover:-rotate-12 duration-700' src={Hashnode} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://api.whatsapp.com/send?phone=+237671993744text=Hi.%20Welcome%20How%20can%20I%20help%20you'
            >
              <img className='hover:-rotate-12 duration-700' src={Whatsapp} alt="" width={30} />
            </a>
          </li>
          <li className='py-4'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto: nzangmenedit@gmail.com"
            >
              <img className='hover:-rotate-12 duration-700' src={Gmail} alt="" width={30}/>
            </a>
          </li>
          
        </ul>
    </div>
  )
}

export default Contact