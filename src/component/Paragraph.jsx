import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <div className={`font-inter text-base font-semibold text-2nd ${className}`}>{text}</div>
  )
}

export default Paragraph