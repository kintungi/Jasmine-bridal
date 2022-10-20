import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import FormSection from '../../components/FormSection';
import NavBar from '../../components/NavBar'
import Pages from '../../components/Pages'
import { urlFor, client } from "../../lib/client"

function portfolio({projects}) {

  const title = "Portfolio";
  
  return (<>
    {portfolio && (<Pages title={title}>
      <div style={{display: "grid", "grid-auto-flow": "row", gridTemplateRows: "1fr", justifyContent: "center",gap: "192px", justifyItems: "center"}}>
        {/* <section className="projects-grid">
          <Link href="portfolio/project"><a ><Image width={515} height="720" src={"/project-image-04.png"} /></a></Link>
          <Link href="#"><a ><Image width={515} height="720" src={"/project-image-01.png"} /></a></Link>
          <Link href="#"><a ><Image width={515} height="720" src={"/project-image-02.png"} /></a></Link>
          <Link href="#"><a ><Image width={515} height="720" src={"/project-image-03.png"} /></a></Link>
        </section> */}
        <section className="projects-grid">
          {
              projects && projects.map(project => {
              return (<Link key={project.project_id} href={"portfolio/" + project._id} ><a ><Image width={515} height="720" src={urlFor(project.project_cover).url()} /></a></Link>)
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

  const query = "*[_type == 'project']"
  const projects = await client.fetch(query)


  return {
    props: {
      projects
    }
  }
}
