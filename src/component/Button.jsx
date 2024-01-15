import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={` font-inter text-xl font-semibold text-white px-3 py-1 bg-primary rounded-md ${className}`}>{text}</button>
  )
}

export default Button