import React from 'react'
import Image from 'next/image'


function CardNews({src, alt, heading}) {
  return (
    <div className='text-defaultText w-[320px]'>
      <Image src={src} width="320" height="221" alt={alt}/>
      <h5 className='mt-16'>
      {heading}
      </h5>
    </div>
  )
}

export default CardNews

