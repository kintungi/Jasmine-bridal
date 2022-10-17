import React from 'react'
import Form from './Form'

function FormSection() {
  return (
    <section className="form flex flex-col items-center">
        <h2 className='max-w-[590px] text-center mb-64'>Amazing things happen when you say hi</h2>
        <Form />
      </section>
  )
}

export default FormSection
