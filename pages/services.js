import React from 'react'
import Pages from '../components/Pages'
import CardHorizontal from '../components/CardHorizontal'
import Form from '../components/Form'

function services() {
  return (
    <Pages title="services">
      <div className="grid grid-flow-row text-defaultText gap-[192px] pb-[256px] w-[100vw]">
      <div className='cards w-[100%]'>
      <div className='flex flex-row h-[auto]' >
      <div className="image bg-cover bg-center bg-[url('../assets/images/services-card-one.png')]  text-white h-[auto] w-[50%]" ></div>
        
      {/* <Image src={imageOne} className="w-[50%]" /> */}
      <div className='card-body bg-woody py-[144px] px-[64px] w-[50%] text-white grid place-items-center'>
        <div className='max-w-[392px]'>
        <h3 className='mb-16'>Custom event design development</h3>
        <p>The first step of our process is to work one-on-one 
            with you to create a detailed design concept for your 
            big day We will help you define your entire vision 
            and preselect items that will go into your wedding so 
            all we then have to do is finalize orders with the 
            various vendors. The Design Plan that we offer is 
            more than just working with the vendors, it is 
            working with you to show the vendors exactly what 
            you want.</p>
        </div>
      </div>
    </div>


    <div className='flex flex-row-reverse h-[auto]' >
      <div className="image bg-cover bg-center bg-[url('../assets/images/services-card-two.png')]  text-white h-[auto] w-[50%]" ></div>
        
      {/* <Image src={imageOne} className="w-[50%]" /> */}
      <div className='card-body bg-midnight py-[144px] px-[64px] w-[50%] text-white grid place-items-center'>
        <div className='max-w-[392px]'>
        <h3 className='mb-16'>Rental</h3>
        <p className='mb-24'>This service is suitable for couples who are looking for only wedding rentals and optional delivery.</p>
        <p>Welcome table I Ceremony Set up I Reception Dinner Decoration | Dessert Table | Props | Lighting | Signage | Vase & Container | Picture Frame</p>
        </div>
      </div>
    </div>

    <div className='flex flex-row h-[auto]' >
      <div className="image bg-cover bg-center bg-[url('../assets/images/services-card-three.png')]  text-white h-[auto] w-[50%]" ></div>
        
      {/* <Image src={imageOne} className="w-[50%]" /> */}
      <div className='card-body bg-woody py-[144px] px-[64px] w-[50%] text-white grid place-items-center'>
        <div className='max-w-[392px]'>
        <h3 className='mb-16'>Full wedding planning</h3>
        <p className='mb-24'>This comprehensive service is suitable for couples looking for the whole package. An experienced team of wedding planners, designers, coordinators and carefully selected vendors all dedicated to creating the wedding of your dream. </p>

        <p>Unlimited Instant messaging support and update / Venue inspection arrangement / Food tasting arrangement / Make up and hair trial arrangement / Vendor booking / Budget management / Decoration design, delivery and set up / Three reviews of wedding program and floor plan prior to wedding date (virtual or face to face meeting) / A Rehearsal at the actual venue with clients and key vendors / On-the-day coordination</p>
        </div>
      </div>
    </div>

    <div className='flex flex-row-reverse h-[auto]' >
      <div className="image bg-cover bg-center bg-[url('../assets/images/services-card-four.png')]  text-white h-[auto] w-[50%]" ></div>
        
      {/* <Image src={imageOne} className="w-[50%]" /> */}
      <div className='card-body bg-woody py-[144px] px-[64px] w-[50%] text-white grid place-items-center'>
        <div className='max-w-[392px]'>
        <h3 className='mb-16'>Comprehensive styling service</h3>
        <p className='mb-24'>This service is suitable for couples who have planned most of their wedding and have booked the venue and most of the vendors requiring only assistance with styling and on the day coordination.</p>
        <p>Decoration design, delivery & set up/ A review of wedding program & floor plan prior to the wedding date (virtual or face to face meeting)</p>
        </div>
      </div>
    </div>


    <div className='flex flex-row h-[auto]' >
      <div className="image bg-cover bg-center bg-[url('../assets/images/services-card-five.png')]  text-white h-[auto] w-[50%]" ></div>
        
      {/* <Image src={imageOne} className="w-[50%]" /> */}
      <div className='card-body bg-woody py-[144px] px-[64px] w-[50%] text-white grid place-items-center'>
        <div className='max-w-[392px]'>
        <h3 className='mb-16'>One day coordination</h3>
        <p className='mb-24'>This service is suitable for couples who have already planned their wedding and have booked the venue and vendors, requiring only a professional to oversee and manage the wedding day itself.</p> 
        <p>A knowledge hand over 2 weeks prior to the wedding date / A rehearsal at the actual venue with clients and key vendors / On-the-day coordination team of 2-3</p>
        </div>
      </div>
    </div>
    </div>


    <section className="form flex flex-col items-center">
        <h2 className='max-w-[590px] text-center mb-64'>Amazing things happen when you say hi</h2>
        <Form />
      </section>
      </div>
    </Pages>
  )
}

export default services
