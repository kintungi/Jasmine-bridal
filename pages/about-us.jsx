import React from 'react'
import HeroImage from '../components/HeroImage'
import Pages from '../components/Pages'
import heroImg from "../assets/images/aboutus-hero.png"
import FormSection from '../components/FormSection'

function aboutUs() {
  return (
    <Pages title="About us">
      <div className='grid grid-flow-row justify-center justify-items-center'>
      <HeroImage image={heroImg} />
      <section className="articles max-w-[782px] flex flex-col mt-96 items-center">
        <article className='who-we-are flex flex-col items-center'>
          <h4>Who we are</h4>
          <p className='mt-32 mb-[132px]'>Founded in 2013 by Jasmine Lida after 
            her own destination wedding in Phuket, 
            Jasmine Bridal is a group of hard working 
            and fun loving professionals with international 
            and hospitality background based in California 
            providing planning, styling, coordination and 
            rental services for premium events across Calorina. 
            Our style is a combination of good looks (neat and 
            stylish) and amazing feels (personal and exclusive). 
            We pride ourselves in our consistent service excellence 
            and top-tier work quality.</p>
        </article>
        <article className='our-commitment flex flex-col items-center'>
          <h4>Our commitment</h4>
          <p className='mt-32'>
            We are committed to creating unforgettable 
            experiences for our clients and everyone of 
            their guests from the entire wedding planning 
            process until the last guest to leave. We believe 
            that every successful event requires excellent 
            communication skills and thorough preparation 
            and that behind unforgettable experiences are 
            attention to detail, the ability to think outside 
            the box and the willingness to go above and beyond 
            the client’s expectations.
            </p>

           <p>We feel strongly responsible for the planet and its living creatures. In 2018, we have changed the way that we live at home and work, both in the office and on site, in order to minimize waste and to help animals to live a better life. We no longer offer balloons, floating lanterns or elephants. Our regular social services include public beach garbage pick up, visiting stray dog shelters, visiting young kids and educate them about the importance of the ocean.</p>
        </article>
      </section>
      </div>
      <section className="images grid grid-flow-col gap-[20vw] grid-cols-[1fr_1fr]">
        <div className="image w-[100%] mr-[auto] h-[980px] bg-cover bg-center bg-[url('../assets/images/about-one.png')]"></div>
        <div className="image w-[100%] ml-[auto] mt-[512px] h-[980px] bg-cover bg-center bg-[url('../assets/images/about-two.png')]"></div>
      </section>
      <FormSection />
    </Pages>
  )
}

export default aboutUs
