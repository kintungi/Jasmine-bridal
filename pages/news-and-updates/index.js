import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CardNewsMedium from '../../components/CardNewsMedium'
import FormSection from '../../components/FormSection'
import Pages from '../../components/Pages'

function newsAndUpdates() {
  return (
    <Pages title="News & updates">
      <div className="news-grid">
      <section className="news-hero">
        <Link href="#"><a >
         <div className='news-hero-grid'>
         <Image src={"/news-updates-one.png"} width={1316} height={740}  />
          <article className='max-w-[782px] mt-[20px]'>
            <p className='mb-8'>Jon Lavender - August 18, 2022</p>
            <h2 className='font-messina font-bold'>Best 5 venues for your next wedding ceremony</h2>
          </article>
         </div>
        </a></Link>
      </section>
      <section className="other-news">
        <CardNewsMedium />
        <CardNewsMedium />
        <CardNewsMedium />
        <CardNewsMedium />
      </section>
      <FormSection className="news-form" />
      </div>
    </Pages>
  )
}

export default newsAndUpdates
