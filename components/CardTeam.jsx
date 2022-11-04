import Image from 'next/image'
import React from 'react'
import jasmine from "../assets/images/team_jasmine.png"
import BlockContent from "@sanity/block-content-to-react"

function CardTeam({image, name, title, bio}) {
  return (
    <div>
      <div className='relative'>
      <div className="team-bio  p-96 absolute bottom-0 bg-uiLight text-defaultText">
       {/* <p>{bio}</p> */}
      <BlockContent blocks={bio} projectId={"cbqnmhpv"} dataset="production" />
      </div>
      <div>
      <Image src={image} width="515" height="724.28" alt='' />
      </div>
      
      </div>
      <div className='flex flex-col items-start title mt-24 text-defaultText'>
        <h3 className='h2-sm'>{name}</h3>
        <p className="lg:subtitle mt-4">{title}</p>
      </div>
    </div>
  )
}

export default CardTeam
