import React from 'react'
import Image from 'next/image'
import CardNewsMedium from './CardNewsMedium'
import { urlFor } from '../lib/client'
import BlockContent from "@sanity/block-content-to-react"
import Link from 'next/link'

function PostTemplate({relatedPosts,posts,children, title, author_image, author_name, createdAt, mainImage, body, author_title, publishedYear, publishedDate, publishedMonth}) {
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
        { relatedPosts && relatedPosts.map(post => {

// console.log(post.slug)

const dateArr = post.publishedAt.split("-") //spliting the date string to get date, month and year

let month;

/*Since the date returned is a string written in numerals 
but I want them displayed in words or names I have to 
use a switch statement for that */

let monthNum = dateArr[1]

switch (monthNum) {
  case "01":
    month = "January";
    break;

  case "02":
    month = "February";
    break;

  case "03":
    month = "March";
    break;

  case "04":
    month = "April";
    break;

  case "05":
    month = "May";
    break;

  case "06":
    month = "June";
    break;

  case "07":
    month = "July";
    break;

  case "08":
    month = "August";
    break;

  case "09":
    month = "September";
    break;

  case "10":
    month = "October";
    break;

  case "11":
    month = "November";
    break;

  case "12":
    month = "December";
    break;
}

const publishedYear = dateArr[0]
const publishedMonth = month
const publishedDate = dateArr[2].split("T")[0] //fetching the date from the date array
// const [mainImage, author_name, publishedDate, publishedMonth, publishedYear] = post
return (<Link key={post._id} href={"/news-and-updates/" + post.slug}><a><CardNewsMedium  title={post.title} mainImage={post.mainImage} author_name={post.author_name} publishedDate={publishedDate} publishedMonth={publishedMonth} publishedYear={publishedYear} /></a></Link>)
})}
        </div>
      </div>
    </div>
  )
}

export default PostTemplate


