import React from 'react'

function Button({
    text,
    onClick=() => {},
    outlined=false,
    icon=null,
    ...rest
}) {
  return (
    <div
        onClick={onClick}
        className={
            `flex items-center hover:cursor-pointer w-fit py-2 px-4 rounded-md transition-all duration-300
            ${
                outlined?'text-[#3d94ff] border-[#3d94ff] border-[1.6px] font-bold hover:text-white hover:border-white'
                :'text-white bg-[#317bd6] hover:opacity-[.8] font-semibold'
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
        {/* Button icon */}
        {
            icon?
            <span className='mt-[1.5px] -translate-x-[6px]'>{icon}</span>
            :null
        }

        {/* Button text */}
        {text}
    </div>
  )
}

export default Button