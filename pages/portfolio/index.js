import Image from 'next/image';
import Link from 'next/link';
import React, {useContext} from 'react'
import FormSection from '../../components/FormSection';
import NavBar from '../../components/NavBar'
import Pages from '../../components/Pages'
import { profileContext } from '../../contexts/profileContext';
import { urlFor, client } from "../../lib/client"

function portfolio({projects}) {


  const title = "Portfolio";
  
  return (<>
    {portfolio && (<Pages title={title}>
      <div style={{display: "grid", "grid-auto-flow": "row", gridTemplateRows: "1fr", justifyContent: "center",gap: "192px", justifyItems: "center"}}>
        <section className="projects-grid">
          {
              projects && projects.map(project => {
              return (<Link key={project.project_id} href={"portfolio/" + project._id} ><a ><Image width={515} height={720} alt={""} src={urlFor(project.project_cover)} /></a></Link>)
            })
          }
        </section>
        <section className="form">
          <FormSection />
        </section>
      </div>
    </Pages>) }
    </>
  )
}

export default portfolio

export async function getStaticProps() {

  const query = "*[_type == 'project']" //GROQquery syntax for the request
  const projects = await client.fetch(query) //Assigning the sanity client to fetch data


  return {
    props: {
      projects
    }
  }
}
