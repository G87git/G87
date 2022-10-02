import React from 'react'
const Contact = () => {
  return (
    <div name='contact' className='w-full bg-3  justify-center items-center p-4 h-full'>
        <form method='POST' action="https://getform.io/f/bdc8d9d0-3c8b-4f6d-b86b-bd9dbefcd1f7" className='flex flex-col max-w-[1000px] mx-auto w-full'>
            <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-2 border-[#ED9728] text-white'>Contact</p>
                <p className='text-white py-4'> Submit the form below or shoot me an email - nzangmenedit@gmail.com</p>
            </div>
            <input className='bg-white p-3' type="text" placeholder='Enter your name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Enter your email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="10" placeholder='Give us your feedback here'></textarea>
            <button className='text-white border-2 hover:bg-[#391D0C] hover:border-transparent px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact