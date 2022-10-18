import React from 'react'
import Image from 'next/image'
import CardNewsMedium from './CardNewsMedium'

function PostTemplate({children}) {
  return (
    <div className='mt-[96px] py-[256px] text-defaultText'>
      <section className="intro">
        <h3> 5 Favourite Alternative Unity Ceremony Ideas</h3>
        <div className="writer">
            <div><Image src={"/image.png"} width={100} height={100}/></div>
            <div><p className='body-bold'>Jon Lavender</p> <p>Writer at Rollingstone</p></div>
        </div>
        <p className="date">August 18, 2022</p>
      </section>
      <div className="body">
      <div className='post-writer-image'><Image src={"/team_iren.png"} width={100} height={100} /></div>
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
      <div className="related-posts">
        <div><CardNewsMedium /></div>
        <div><CardNewsMedium /></div>
      </div>
    </div>
  )
}

export default PostTemplate
