import React from 'react'

const TextBtn = ({ children, className, ...attrs }) => {
  return (
    <button className={`btn text-pink ${className}`} {...attrs}>
      {children}
    </button>
  )
}

export default TextBtn
