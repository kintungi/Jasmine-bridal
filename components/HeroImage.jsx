import React from 'react'
import Image from 'next/image'

function HeroImage({image}) {
  return (
    <Image  src={image} width="1316" height="740"/>
  )
}

export default HeroImage
