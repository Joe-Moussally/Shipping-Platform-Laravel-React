import React, { useState } from 'react'

function AddShipmentForm({
    isHidden,
    setIsHidden
}) {

  return (
    // container window
    <div
        className={`${isHidden?'opacity-0 hidden':'opacity-100'} absolute bg-black w-[100%] bg-opacity-40 h-[100vh] transition-opacity duration-500`}
        onClick={() => setIsHidden(true)}
    >

        {/* form container */}
        <div
            className='bg-[#5c6478] min-w-[440px] w-[60%] max-w-[760px] mx-auto mt-[130px] rounded-md p-2'
            onClick={(e) => {e.stopPropagation()}}    
        >
            FORM
        </div>

    </div>
  )
}

export default AddShipmentForm