import Image from 'next/image'
import React from 'react'
import jasmine from "../assets/images/team_jasmine.png"

function CardTeam({image, name, title, bio}) {
  return (
    <div>
      <div className='relative w-[max-content]'>
      <Image  src={image} width="515" height="724.28" />
      <div className="team-bio hidden p-96 absolute bottom-0 bg-uiLight text-defaultText">
       <p>{bio}</p>
      </div>
      </div>
      <div className='title mt-24  md:text-yellow lg:text-defaultText'>
        <h3>{name}</h3>
        <p className="subtitle mt-4">{title}</p>
      </div>
    </div>
  )
}

export default CardTeam
