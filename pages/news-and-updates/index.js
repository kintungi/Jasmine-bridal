import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CardNewsMedium from '../../components/CardNewsMedium'
import FormSection from '../../components/FormSection'
import Pages from '../../components/Pages'
import { client } from '../../lib/client'
import { urlFor } from '../../lib/client'

function newsAndUpdates({posts}) {



  

  return (
    <Pages title="News & updates">
      <div className="news-grid">
      <section className="news-hero">
        <Link href="#"><a >
         <div className='news-hero-grid'>
         <Image src={"/news-updates-one.png"} width={1316} height={740} alt=""  />
          <article className='max-w-[782px] mt-[20px]'>
            <p className='mb-8'>Jon Lavender - August 18, 2022</p>
            <h2 className='font-messina font-bold'>Best 5 venues for your next wedding ceremony</h2>
          </article>
         </div>
        </a></Link>
      </section>
      <section className="other-news">
        { posts && posts.map(post => {

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
    
      </section>
      <FormSection className="news-form" />
      </div>
    </Pages>
  )
}

export default newsAndUpdates

export async function getStaticProps() {

  const query = `*[_type == 'post']{
    _id, 
    body, 
    mainImage,
    'slug': slug.current,
    publishedAt, 
    title,
    'author_name': author -> name,
    'author_image': author -> image,
    'author_title': author -> title
  }
  `

  const posts = await client.fetch(query)

  return {
    props: {
      posts,
    }
  }
}
