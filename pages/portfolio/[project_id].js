import React, { useState } from 'react'
import Portfolio from '../../components/Portfolio'
import Image from 'next/image'
import { client, urlFor } from "../../lib/client.js"
import BlockContent from "@sanity/block-content-to-react"
import {PortableText} from '@portabletext/react'

function project({projects, project_id}) {

  // console.log(projects[0].story)
  console.log(urlFor(projects[0].image_one))

  console.log(project_id)

  const [pageIndex, setPageIndex] = useState(null)


  

  return (
      <Portfolio title={projects[0].project_name}>
        <div className="portfolio-grid project-grid">
            <div className='project-grid-one'><img src={urlFor(projects[0].image_one)} width={514} height={720}/></div>
            <div className='project-grid-two'><img src={urlFor(projects[0].image_two)} width={1049} height={720}/></div>
            <div className='project-grid-three'><img src={urlFor(projects[0].image_three)} width={514} height={720}/></div>
            <div className='project-grid-four'><img src={urlFor(projects[0].image_four)} width={781.57} height={720}/></div>
            <div className='project-grid-five'><img src={urlFor(projects[0].image_five)} width={1049} height={720}/></div>
            <div className='project-grid-six'><img src={urlFor(projects[0].image_six)} width={514} height={720}/></div>
            <div className='project-grid-seven'><img src={urlFor(projects[0].image_seven)} width={782} height={720}/></div>
            <div className='project-grid-eight'><img src={urlFor(projects[0].image_eight)} width={514} height={720}/></div>
            <div className='project-grid-nine'><img src={urlFor(projects[0].image_nine)} width={1049} height={720}/></div>
          
            {/* <div className='project-grid-nine'><Image src="/stephen-melissa-02.png" width={1049} height={720}/></div> */}
            <div className="project-grid-article">
            {/* <PortableText value={project[0].story} components=optional object of custom components to use /> */}
            <BlockContent  blocks={projects[0].story} projectId="cbqnmhpv" dataset="production" />
            </div>
        </div>
      </Portfolio>
  )
}

export default project

// export async function getServerSideProps({params}) {
//   const query = "*[_type == 'project']";

//   const projects = await client.fetch(query)

//   const project_id = params.project_id


//   return {
//     props: {
//       projects
//     }
//   }

// }

export async function getStaticProps({params}) {
  const query = "*[_type == 'project']";

  const projects = await client.fetch(query)

  const project_id = params.project_id

  


  return {
    props: {
      projects,
      project_id
    }
  }

}

export async function getStaticPaths() {
  const query = "*[_type == 'project']";

  const projects = await client.fetch(query)

  return {
    paths: projects.map((project, i) => {

      const project_id = project._id

      return {
        params: {
          project_id
        }
      }
    }),
    fallback: false
  }
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: {
//         project_id: xxx
//       }},
//       { params: {
//         project_id: xxx
//       }},
//       { params: {
//         project_id: xxx
//       }}
//     ]
//   }
// }
