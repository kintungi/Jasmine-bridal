import React from 'react'
import Image from 'next/image'


function CardNews({src, alt, heading, width, height}) {
  return (
    <div className='text-defaultText w-[320px]'>
      <Image src={src} width={width} height={height} alt={alt}/>
      <h5 className='mt-16'>
      {heading}
      </h5>
    </div>
  )
}

export default CardNews

