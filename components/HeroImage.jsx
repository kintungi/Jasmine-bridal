import React from 'react'
import Image from 'next/image'

function HeroImage({image}) {
  return (
    <Image className='' alt={""} src={image} width={1316} height={740}/>
    // <Image className='' src={image} width={"1316"} height="740"/>
  )
}

export default HeroImage
