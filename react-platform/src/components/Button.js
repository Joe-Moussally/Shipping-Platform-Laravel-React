import React from 'react'

function Button({
    text,
    ...rest
}) {
  return (
    <div
        className='text-white bg-[#317bd6] w-fit py-2 px-4 rounded-md'
        style={
            rest.style?
            {...rest.style}
            :null
        }
    >
        {text}
    </div>
  )
}

export default Button