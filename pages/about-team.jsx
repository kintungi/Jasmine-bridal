import React from 'react'
import Pages from '../components/Pages'
import HeroImage from '../components/HeroImage'
import teamHero from "../assets/images/team-hero.png"
import CardTeam from '../components/CardTeam'
import team from "../data/team.json"
import jasmine from "../assets/images/team_jasmine.png"
import FormSection from '../components/FormSection'


function aboutTeam() {
  console.log(team)
  return (
    <Pages title="Team">
      <HeroImage image={teamHero} />
      <section className="team team-grid">
        {/* <CardTeam image={team[0].imageUrl} name={team[0].name} title={team[0].title} bio={team[0].bio} /> */}
        {team && team.map((member, i) => {
            return (<CardTeam key={i} image={member.imageUrl} name={member.name} title={member.title} bio={member.bio} />)
          })
        }
      </section>
      <FormSection />
    </Pages>
  )
}

export default aboutTeam
