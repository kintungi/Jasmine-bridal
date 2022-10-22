import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../lib/client'

function CardNewsMedium({title, mainImage, author_name, publishedDate, publishedMonth, publishedYear}) {
  return (
    <div>
    
          <Image src={urlFor(mainImage)} width={1316} height={740} alt={""} />
          <article className='max-w-[782px]'>
            <small><span>{author_name}</span> - <span>{publishedMonth}</span> <span>{publishedDate},</span> <span>{publishedYear}</span></small>
            <h4 className='font-messina font-bold'>{title}</h4>
          </article>
    </div>
  )
}

export default CardNewsMedium
