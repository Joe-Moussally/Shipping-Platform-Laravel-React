import React from 'react'

//component imports
import Button from './Button'

function ShipmentCard({
  shipmentName,
  customerName,
  customerAddress,
  customerPhoneNumber,
  waybill
}) {

  return (
    <div className='flex flex-col border-2 border-gray-400 rounded-md h-fit min-w-[330px] w-[30%] max-w-[400px] p-3'>
      {/* shipment name */}
      <span className='text-white font-bold text-2xl'>{shipmentName}</span>

      <span className='text-gray-400'>For {customerName}</span>
      <span>{customerAddress}</span>

      <Button
        text='Delete'
        outlined={false}
      />
    </div>
  )
}

export default ShipmentCard