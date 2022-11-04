import React from 'react'

function Pages({children, title}) {
  return (
    <div className='py-64 lg:py-256 wrapper mt-96'>
    <h1 className='h3-sm text-center text-defaultText mb-64 lg:mb-192' >{title}</h1>
    <div className='grid grid-cols-[1fr]  justify-center gap-[192px] text-defaultText'>{children}</div>
    </div>
  )
}

export default Pages
