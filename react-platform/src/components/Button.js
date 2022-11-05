import React from 'react'

function Button({
    text,
    onClick=() => {},
    outlined=false,
    ...rest
}) {
  return (
    <div
        onClick={onClick}
        className={
            `hover:cursor-pointer w-fit py-2 px-4 rounded-md transition-all duration-300
            ${
                outlined?'text-[#3d94ff] border-[#3d94ff] border-[1.6px] font-bold hover:text-white hover:border-white'
                :'text-white bg-[#317bd6] hover:bg-[#275da1] font-semibold'
            }
            `
        }

        // extra styling if passed
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