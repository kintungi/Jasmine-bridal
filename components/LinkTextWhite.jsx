import React from 'react'
import Link from 'next/link'

function LinkText({text}) {
  return (
    <div className='w-[max-content]'>
      <Link href="#"><a className='uppercase font-bold mb-4'>{text}</a></Link>
      <div className="line w-[100%] h-2 bg-white"></div>
    </div>
  )
}

export default LinkText
