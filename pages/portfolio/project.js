import React from 'react'
import Portfolio from '../../components/Portfolio'
import Image from 'next/image'

function project() {
  return (
      <Portfolio title="Stephen & Melissa">
        <div className="portfolio-grid project-grid">
            <div className='project-grid-one'><Image src="/stephen-melissa-07.png" width={514} height={720}/></div>
            <div className='project-grid-two'><Image src="/stephen-melissa-06.png" width={1049} height={720}/></div>
            <div className='project-grid-three'><Image src="/stephen-melissa-04.png" width={514} height={720}/></div>
            <div className='project-grid-four'><Image src="/stephen-melissa-08.png" width={781.57} height={720}/></div>
            <div className='project-grid-five'><Image src="/stephen-melissa-05.png" width={1049} height={720}/></div>
            <div className='project-grid-six'><Image src="/stephen-melissa-01.png" width={514} height={720}/></div>
            <div className='project-grid-seven'><Image src="/stephen-melissa-03.png" width={782} height={720}/></div>
            <div className='project-grid-eight'><Image src="/stephen-melissa-09.png" width={514} height={720}/></div>
            <div className='project-grid-nine'><Image src="/stephen-melissa-02.png" width={1049} height={720}/></div>
            <div className="project-grid-article">
            <p>Anna brings a ceaseless love and passion to planning and designing, for any type of event imaginable. She has more than sixteen years of experience in event planning and design and team management. Her scope of work ranges from Weddings to Corporate Events and any type of Social Event one can dream of.</p>
            <p>Because each client is unique, she has strived to create a custom team of experienced professionals to best meet our client’s specific planning and design needs. Everyone on the ANNA LUCIA EVENTS team is dedicated to one goal — a successful event or spectacular wedding designed just for you.</p>
            </div>
        </div>
      </Portfolio>
  )
}

export default project
