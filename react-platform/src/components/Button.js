import React from 'react'

function Button({
    text,
    onClick=() => {},
    outlined=false,
    buttonColor='#317bd6',
    textColor='white',
    outlinedButtonColor='#3d94ff',
    outlinedTextColor='#3d94ff',
    outlinedHoverColor='white',
    ...rest
}) {
  return (
    <div
        onClick={onClick}
        className={
            `hover:cursor-pointer w-fit py-2 px-4 rounded-md transition-all duration-300
            ${
                outlined?'text-['+outlinedTextColor+'] border-['+outlinedButtonColor+'] border-[1.6px] font-bold hover:text-['+outlinedHoverColor+'] hover:border-['+outlinedHoverColor+']'
                :'text-['+textColor+'] bg-['+buttonColor+'] hover:opacity-[.8] font-semibold'
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