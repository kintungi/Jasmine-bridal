import React, { useState } from 'react'
import Portfolio from '../../components/Portfolio'
import Image from 'next/image'
import { client, urlFor } from "../../lib/client.js"
import BlockContent from "@sanity/block-content-to-react"


function project({projects, project_id}) {

  // console.log(projects[0].story)
  // console.log(urlFor(project.image_one))

  // console.log(project_id)

  const project = projects.filter((project) => {
    return project._id === project_id
  }) /* Projects returns an array of all projects but we need only the
  project with the said id hence we filter the projects to return an array
  with the project containing the id
  */

  // console.log(project)

  
console.log(project[0].image_one)

  console.log(urlFor(project[0].image_one))

  

  return (
      <Portfolio title={project[0].project_name}>
        <div className="portfolio-grid project-grid">
            {/* <div className='project-grid-one'><Image src={"https://cdn.sanity.io/images/cbqnmhpv/production/79da24434f93f7bf4697aacde0f1d08882a5e3b3-1028x1440.png"} width={514} height={720}/></div> */}
            <div className='project-grid-one'><Image src={urlFor(project[0].image_one)} width={514} height={720} alt={""}/></div>
            <div className='project-grid-two'><Image src={urlFor(project[0].image_two)} width={1049} height={720} alt={""}/></div>
            <div className='project-grid-three'><Image src={urlFor(project[0].image_three)} width={514} height={720} alt={""}/></div>
            <div className='project-grid-four'><Image src={urlFor(project[0].image_four)} width={782} height={720} alt={""}/></div>
            <div className='project-grid-five'><Image src={urlFor(project[0].image_five)} width={1049} height={720} alt={""}/></div>
            <div className='project-grid-six'><Image src={urlFor(project[0].image_six)} width={514} height={720} alt={""}/></div>
            <div className='project-grid-seven'><Image src={urlFor(project[0].image_seven)} width={782} height={720} alt={""}/></div>
            <div className='project-grid-eight'><Image src={urlFor(project[0].image_eight)} width={514} height={720} alt={""}/></div>
            <div className='project-grid-nine'><Image src={urlFor(project[0].image_nine)} width={1049} height={720} alt={""}/></div>
          
            {/* <div className='project-grid-nine'><Image src="/stephen-melissa-02.png" width={1049} height={720}/></div> */}
            <div className="project-grid-article">
            {/* <PortableText value={project[0].story} components=optional object of custom components to use /> */}
            <BlockContent  blocks={project[0].brief_story} projectId="cbqnmhpv" dataset="production" />
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
  const query = "*[_type == 'project']"; //creating a query on a document with a name of project

  const projects = await client.fetch(query) //fetching projects from sanity using the sanity client

  const project_id = params.project_id //geting the project id from  the url parameter


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

      const project_id = project._id.toLowerCase().replace(/ /g, "-") //making sure the slug is in the right format by replacing space with a dash

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
