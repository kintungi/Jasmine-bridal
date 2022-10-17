import React from 'react'

function Form() {
  return (
    <div className='text-defaultText'>
    <div className='name mb-32'>
      <label className=' text-body' htmlFor="name">Full name</label>
      <input className='mt-8 border-2 block rounded-[8px] py-[12px] h-48 border-woody pl-[20px] w-[320px]' id='name' placeholder='Full name' type="text" />
      <small className='mt-4 invisible'>message</small>
    </div>
    <div className='name mb-32'>
      <label className=' text-body' htmlFor="email">Email</label>
      <input className='mt-8 border-2 block rounded-[8px] h-48 py-[12px] border-woody pl-[20px] w-[320px]' id='email' placeholder='Email' type="email" />
      <small className='mt-4 invisible'>message</small>
    </div>
    <div className='name mb-32'>
      <label className=' text-body' htmlFor="message">Message</label>
      <textarea className='resize-y mt-8 border-2 block rounded-[8px] min-h-[140px] py-[12px] border-woody pl-[20px] w-[320px]' id='message' placeholder='Message' type="text"></textarea>
      <small className='mt-4 invisible'>message</small>
    </div>

    <button className='h-48 bg-woody text-white w-[320px] rounded-[999px] font-medium uppercase' type='submit'>Send</button>
    
    </div>
  )
}

export default Form
