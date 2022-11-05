import React from 'react'

function InputField({
    id,
    label=null,
    placeholder=null,
    type,
    value=null,
    onChange,
    onBlur=null,
    error=null,
    ...rest
}) {
  return (
    
    // input component container
    <div className='flex flex-col my-6 min-w-[400px] w-[70%] max-w-[612px]'>

        {/* if input label is specified -> display it */}
        {
            label?
            <span className='p-1 font-bold text-white text-lg'>{label}</span>
            :null
        }


        {
          /* error message */
          error?
          <span className='text-red-500 text-xs pl-2 pb-1'>
            {error}
          </span>
          :null
        }


        {/* actual input field */}
        <input
            id={id}
            placeholder={placeholder?placeholder:''}
            type={type}
            value={value?value:''}
            onChange={onChange?onChange:() => {}}
            onBlur={onBlur?onBlur:() => {}}
            className={
              `p-2 bg-[#102540] text-gray-300 placeholder:text-gray-400 rounded-md border-[1.4px] border-gray-400 focus:outline-none focus:border-gray-200 transition-all duration-300
              ${
                error?'border-red-600 focus:border-red-300':''
              }
              `
            }
        />


    </div>
  )
}

export default InputField