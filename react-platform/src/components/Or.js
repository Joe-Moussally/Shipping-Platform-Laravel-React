import React from 'react'

function Or() {
  return (
    // or container
    <div className='flex flex-row items-center w-[300px] my-5'>
        {/* line */}
        <div className='h-[0.3px] bg-white w-[50%]'></div>

        <span className='text-gray-300 p-1'>OR</span>

        {/* line */}
        <div className='h-[0.3px] bg-white w-[50%]'></div>
    </div>
  )
}

export default Or