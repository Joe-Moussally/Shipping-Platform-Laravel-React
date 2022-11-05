import React from 'react'

function InputField({
    label=null,
    placeholder=null,
    type,
    ...rest
}) {
  return (
    
    // input component container
    <div className='flex flex-col min-w-[400px] w-[70%] max-w-[612px]'>
        {/* if input label is specified -> display it */}
        {
            label?
            <span className='p-1 font-bold text-white text-lg'>{label}</span>
            :null
        }

        {/* actual input field */}
        <input
            placeholder={placeholder?placeholder:''}
            type={type}
            className='p-2 bg-[#102540] text-gray-300 placeholder:text-gray-400 rounded-md border-[1.4px] border-gray-400 focus:outline-none focus:border-gray-200'
        />
    </div>
  )
}

export default InputField