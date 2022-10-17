import React from 'react'
import imageOne from "../assets/images/services-card-one.png"
import Image from 'next/image'

function CardHorizontal() {
  return (
    <div className='flex flex-row h-[auto]' >
      <div className="image bg-cover bg-center bg-[url('../assets/images/services-card-one.png')]  text-white h-[auto] w-[50%]" ></div>
        
      {/* <Image src={imageOne} className="w-[50%]" /> */}
      <div className='card-body bg-woody py-[144px] px-[64px] w-[50%] text-white grid place-items-center'>
        <div className='max-w-[392px]'>
        <h3 className='mb-16'>Custom event design development</h3>
        <p>The first step of our process is to work one-on-one 
            with you to create a detailed design concept for your 
            big day We will help you define your entire vision 
            and preselect items that will go into your wedding so 
            all we then have to do is finalize orders with the 
            various vendors. The Design Plan that we offer is 
            more than just working with the vendors, it is 
            working with you to show the vendors exactly what 
            you want.</p>
        </div>
      </div>
    </div>
  )
}

export default CardHorizontal
