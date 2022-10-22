import React from 'react'
import Image from 'next/image'
import CardNewsMedium from './CardNewsMedium'

function PostTemplate({children}) {
  return (
    <div className='post-wrapper mt-[96px] py-[256px] text-defaultText'>
      <section className="post-intro flex flex-col items-center">
        <h3 className='mb-32 max-w-[514px] text-center'> 5 Favourite Alternative Unity Ceremony Ideas</h3>
        <div className="writer flex flex-row">
        <div className='post-writer-image mr-8'><Image src={"/post-writer.png"} width={100} height={100} alt={""} /></div>
            <div className='flex flex-col'>
            <p className='body-bold mb-0' >Jon Lavender</p> 
            <p>Writer at Rollingstone</p>
            </div>
        </div>
        <p className="date mt-8 mb-64 text-subtleText font-bold">August 18, 2022</p>
      </section>
      <div className="post-hero"><Image src={"/post-hero.png"} height={740} width={1316} alt={""} /></div>
      <div className="post-body  mx-auto max-w-[512px] mb-192 mt-64">
      
      <div className="content">
        <p>Civil weddings, and purely spiritual non-religious weddings, offer more creative options for a symbolic marriage ceremony, so you can really think outside the box when it comes to planning your alternative unity ceremony.</p>
        <p>You have lots of choices, such as hiring a wedding celebrant to personalise your wedding service, and you could explore a totally different type of unity ceremony. We’ve rounded up 15 unique ways to make your wedding ceremony different, and asked wedding celebrant Ali Fleming of Cariad Personal Ceremonies to explain what they mean.
</p>
        <h5>Our 5 Favourite Alternative Unity Ceremony Ideas</h5>
        <h6>1. Sand Ceremony</h6>
        <p>A growing favourite wedding trend, the sand ceremony is a wonderful ceremony alternative. Its meaning is simple and beautiful: two becoming one. The couple mix two different colours of sand into one container, thereby symbolising their lives and hearts entwined. Once combined, it would be extremely difficult to separate the sand out again, just as the couple are so joined together.</p>
        <p>A growing favourite wedding trend, the sand ceremony is a wonderful ceremony alternative. Its meaning is simple and beautiful: two becoming one. The couple mix two different colours of sand into one container, thereby symbolising their lives and hearts entwined. Once combined, it would be extremely difficult to separate the sand out again, just as the couple are so joined together.</p>
        <p>A growing favourite wedding trend, the sand ceremony is a wonderful ceremony alternative. Its meaning is simple and beautiful: two becoming one. The couple mix two different colours of sand into one container, thereby symbolising their lives and hearts entwined. Once combined, it would be extremely difficult to separate the sand out again, just as the couple are so joined together.</p>
        <p>A growing favourite wedding trend, the sand ceremony is a wonderful ceremony alternative. Its meaning is simple and beautiful: two becoming one. The couple mix two different colours of sand into one container, thereby symbolising their lives and hearts entwined. Once combined, it would be extremely difficult to separate the sand out again, just as the couple are so joined together.</p>
        <p>A growing favourite wedding trend, the sand ceremony is a wonderful ceremony alternative. Its meaning is simple and beautiful: two becoming one. The couple mix two different colours of sand into one container, thereby symbolising their lives and hearts entwined. Once combined, it would be extremely difficult to separate the sand out again, just as the couple are so joined together.</p>
      </div>
      </div>

      <div className="post-related-posts">
        <h3 className='mb-64'>Related posts</h3>
        <div className='post-related-posts-cards'>
        <div><CardNewsMedium /></div>
        <div><CardNewsMedium /></div>
        </div>
      </div>
    </div>
  )
}

export default PostTemplate
