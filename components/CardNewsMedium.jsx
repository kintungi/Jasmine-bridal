import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CardNewsMedium() {
  return (
    <div>
      <Link href="/news-and-updates/posts"><a className='news-hero-grid'>
          <Image src={"/news-updates-one.png"} width={1316} height={740}  />
          <article className='max-w-[782px]'>
            <small>Jon Lavender - August 18, 2022</small>
            <h4 className='font-messina font-bold'>Best 5 venues for your next wedding ceremony</h4>
          </article>
        </a></Link>
    </div>
  )
}

export default CardNewsMedium
