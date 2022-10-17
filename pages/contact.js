import Image from 'next/image'
import React from 'react'
import NavBar from '../components/NavBar'
import Pages from '../components/Pages'
import heroImg from "../assets/images/contact-minazi.png"
import Form from '../components/Form'
import HeroImage from '../components/HeroImage'

function contact() {
  return (
    <Pages title="Contact">
      <div className='grid grid-auto-cols justify-center gap-[192px] text-defaultText'>
        <HeroImage image={heroImg} />
        {/* <Image  src={heroImg} width="1316" height="740"/> */}
      {/* <div className='cover w-[76] h-[auto] bg-cover bg-center bg-[url("../assets/images/contact-minazi.png")]'></div> */}
      <div className=' grid grid-flow-row justify-center justify-items-center justify-self-center w-[100%]'>
      <h2 className='text-center max-w-[595px] mb-64'>Amazing things happen when you say hi</h2>
      <p className="subtitle text-center mb-[16px]">Call or email us</p>
      <p><span className='font-bold mb-4'>Phone</span>: +255 (0)692098805</p>
      <p className='mb-96'><span className='font-bold '>Email</span>: franciskintungi@gmail.com</p>

      <p className="subtitle max-w-[417px] text-center mb-[36px]">Drop us a line by filling the form below and we will get back to you.</p>
      <Form />
      <div className="location grid grid-flow-row justify-center justify-items-center mt-[196px]">
      <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.8661 43.7753C26.8364 41.6447 38.5875 28.4971 38.5875 17.9949C38.5875 10.2657 32.3218 4 24.5926 4C16.8634 4 10.5977 10.2657 10.5977 17.9949C10.5977 28.4174 22.3434 41.6348 24.3097 43.7745C24.4642 43.9425 24.7112 43.9428 24.8661 43.7753ZM24.5922 24.99C28.4554 24.99 31.5872 21.8582 31.5872 17.995C31.5872 14.1318 28.4554 11 24.5922 11C20.7289 11 17.5972 14.1318 17.5972 17.995C17.5972 21.8582 20.7289 24.99 24.5922 24.99Z" fill="#8C6339"/>
</svg>
      <p className="subtitle mt-4">Visit our office</p>
      <p className='mt-16'>436 Valley View St.
Los Angeles, CA 90037</p>
      </div>
      </div>
      </div>
    </Pages>
  )
}

export default contact
