import React from 'react'

const Input = ({className,placeholder}) => {
  return (
    <input
        className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${className}`}
        type="text"
        placeholder={placeholder}
      />
  )
}

export default Input