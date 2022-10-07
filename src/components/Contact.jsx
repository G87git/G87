import React from 'react'
const Contact = () => {
  return (
    <div name='contact' className='w-full bg-2  justify-center items-center p-4 h-full'>
        <form method='POST' action="https://getform.io/f/bdc8d9d0-3c8b-4f6d-b86b-bd9dbefcd1f7" className='flex flex-col max-w-[1000px] mx-auto w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-2 border-[#ED9728] text-[#8892b0]'>Contact</p>
                <p className='text-white py-4'> Submit the form below or shoot me an email - nzangmenedit@gmail.com</p>
            </div>
            <label htmlFor="" className='text-white'>Name :</label>
            <input className='bg-white p-3 rounded-sm' type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="" className='text-white pt-5'>Email :</label>
            <input className=' p-3 bg-white rounded-sm' type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="" className='text-white pt-5'>Message :</label>
            <textarea className='bg-white p-2 rounded-sm' name="message" rows="10" placeholder='Give us your feedback here'></textarea>
            <button className='text-white border group px-4 py-3 my-8 mx-auto flex items-center rounded-sm'>Collaborate with <strong className='group-hover:text-2xl duration-500 pl-1 text-[#ED9728]'> G87</strong></button>
        </form>
    </div>
  )
}

export default Contact