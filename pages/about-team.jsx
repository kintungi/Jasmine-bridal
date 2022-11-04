import React from 'react'
import Pages from '../components/Pages'
import HeroImage from '../components/HeroImage'
import teamHero from "../assets/images/team-hero.png"
import CardTeam from '../components/CardTeam'
// import team from "../data/team.json"
import jasmine from "../assets/images/team_jasmine.png"
import FormSection from '../components/FormSection'
import { client, urlFor } from '../lib/client'
import BlockContent from "@sanity/block-content-to-react"


function aboutTeam({team}) {
  console.log(team)
  return (
    <Pages title="Team">
      <div className="wrapper flex flex-col items-center">
      <div className="mx-24">
      <HeroImage  image={teamHero} />
      </div>
      <h2 className='h2-sm text-center max-w-[40px]  mt-64 mb-48'>Meet our amazing team</h2>
      {/* <section className="team team-grid"> */}
      <section className="team px-24 grid grid-cols-1 grid-rows-[max-content] gap-y-[64px] mb-128">
        {/* <CardTeam image={team[0].imageUrl} name={team[0].name} title={team[0].title} bio={team[0].bio} /> */}
        {team && team.map((member, i) => {

          
            return (<CardTeam key={member._id} image={urlFor(member.profile_image)} name={member.name} title={member.title} bio={member.bio} />)
          })
        }
      </section>
      <FormSection />
      </div>
    </Pages>
  )
}

export default aboutTeam

export async function getStaticProps() {

  const query = `*[_type == "team"] {
    _id, bio, name, profile_image, title
  }`

  const team = await client.fetch(query)

  return {
    props: {
      team
    }
  }
}
