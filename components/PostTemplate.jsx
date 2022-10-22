import React from 'react'
import Image from 'next/image'
import CardNewsMedium from './CardNewsMedium'
import { urlFor } from '../lib/client'
import BlockContent from "@sanity/block-content-to-react"

function PostTemplate({children, title, author_image, author_name, createdAt, mainImage, body, author_title, publishedYear, publishedDate, publishedMonth}) {
  return (
    <div className='post-wrapper mt-[96px] py-[256px] text-defaultText'>
      <section className="post-intro flex flex-col items-center">
        <h3 className='mb-32 max-w-[514px] text-center'>{title}</h3>
        <div className="writer flex flex-row">
        <div className='post-writer-image mr-8'><Image src={urlFor(author_image)} width={100} height={100} alt={""} /></div>
            <div className='flex flex-col'>
            <p className='body-bold mb-0' >{author_name}</p> 
            <p>{author_title}</p>
            </div>
        </div>
        <p className="date mt-32 mb-64 text-subtleText font-bold"><span>{publishedMonth}</span> <span>{publishedDate},</span> <span>{publishedYear}</span></p>
      </section>
      <div className="post-hero"><Image src={urlFor(mainImage)} height={740} width={1316} alt={""} /></div>
      
      <div className="post-body  mx-auto max-w-[512px] mb-192 mt-64">
      
      <BlockContent blocks={body} dataset="production" projectId="cbqnmhpv"/>
      
      </div>

      <div className="post-related-posts">
        <h4 className='mb-64'>Related posts</h4>
        <div className='post-related-posts-cards'>
        <div><CardNewsMedium /></div>
        <div><CardNewsMedium /></div>
        </div>
      </div>
    </div>
  )
}

export default PostTemplate
