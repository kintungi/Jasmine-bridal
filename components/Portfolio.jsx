import React, { Children } from 'react'
import Pages from './Pages'

function Portfolio({children, title}) {
  return (
    <Pages title={title} >{children}</Pages>
  )
}

export default Portfolio
