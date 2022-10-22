import React from 'react'
import PostTemplate from '../../../components/PostTemplate'
import { client } from '../../../lib/client'


function Post({posts, post_slug}) {

  // console.log(posts)

  const singlePost = posts.filter(post => {
    return post.slug === post_slug
  })
  

  const {title, author_name, author_image, body, mainImage, author_title, publishedAt, slug, _id} = singlePost[0]
  
  // console.log( typeof new Date())
  // console.log(tite)
  // console.log(publishedAt.split("-") , "date here")

  const dateArr = publishedAt.split("-") //spliting the date string to get date, month and year

  let month;

  // console.log(dateArr, "date array")
  // console.log(dateArr[1], "month")

  // ['2022', '10', '21T15:46:17.435Z']

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

  // console.log(publishedYear, "year again")
  // console.log(publishedDate, "Date again")

  return (
    <div>
      <PostTemplate title={title} author_image={author_image} author_name={author_name} createdAt={publishedAt} mainImage={mainImage} body={body} author_title={author_title} publishedDate={publishedDate} publishedYear={publishedYear} publishedMonth={publishedMonth} />
    </div>
  )
}

export default Post

export async function getStaticProps({params}) {
  // const query_ = "*[_type == 'project']";


  const post_slug = params.slug

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
      post_slug
    }
  }
}

export async function getStaticPaths() {

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
    paths: posts.map(post => {
      return {
        params: {slug: post.slug}
      }
    }),
    fallback: false
  }
}
