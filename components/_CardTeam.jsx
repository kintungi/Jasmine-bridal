import Image from 'next/image'
import React from 'react'
import jasmine from "../assets/images/team_jasmine.png"

function CardTeam({image, name, title, description}) {
  return (
    <div>
      <div className='relative w-[max-content]'>
      <Image src={jasmine} width="515" height="724.28" />
      <div className="description p-96 absolute hidden bottom-0 bg-uiLight text-defaultText">
        <p>Anna brings a ceaseless love and passion to planning and designing, for any type of event imaginable. She has more than sixteen years of experience in event planning and design and team management. Her scope of work ranges from Weddings to Corporate Events and any type of Social Event one can dream of.</p>
        <p>Because each client is unique, she has strived to create a custom team of experienced professionals to best meet our client’s specific planning and design needs. Everyone on the ANNA LUCIA EVENTS team is dedicated to one goal — a successful event or spectacular wedding designed just for you.</p>
      </div>
      </div>
      <div className='title mt-24'>
        <h3>Jasmine Lida</h3>
        <p className="subtitle mt-4">CEO, Founder</p>
      </div>
    </div>
  )
}

export default CardTeam
