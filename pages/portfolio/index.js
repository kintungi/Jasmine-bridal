import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import FormSection from '../../components/FormSection';
import NavBar from '../../components/NavBar'
import Pages from '../../components/Pages'

function portfolio() {

  const title = "Portfolio";
  
  return (<>
    {portfolio && (<Pages title={title}>
      <div style={{display: "grid", "grid-auto-flow": "row", gridTemplateRows: "1fr", justifyContent: "center",gap: "192px", justifyItems: "center"}}>
        <section className="projects-grid">
          <Link href="portfolio/project"><a ><Image width={515} height="720" src={"/project-image-04.png"} /></a></Link>
          <Link href="#"><a ><Image width={515} height="720" src={"/project-image-01.png"} /></a></Link>
          <Link href="#"><a ><Image width={515} height="720" src={"/project-image-02.png"} /></a></Link>
          <Link href="#"><a ><Image width={515} height="720" src={"/project-image-03.png"} /></a></Link>
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
