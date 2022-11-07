import React from 'react'

function CustomerInfoDisplay({
    information,
    icon=null
}) {
  return (
    <span className='text-gray-300 flex items-center gap-2'>
        {
          icon?
          <span className='mt-[3px]'>{icon}</span>
          :null
        }
        {information}
    </span>
  )
}

export default CustomerInfoDisplay