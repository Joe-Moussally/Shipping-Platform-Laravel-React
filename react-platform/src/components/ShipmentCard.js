import React, { useState } from 'react'

//component imports
import Button from './Button'
import CustomerInfoDisplay from './shipment_card_components/CustomerInfoDisplay'
import EditShipmentForm from './EditShipmentForm'

//redux imports
import { useDispatch } from 'react-redux'

//icons import
import { BiTrashAlt } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'

//api imports
import { deleteShipmentById } from '../api/fetchFunctions'

//redux imports
import { removeFromShipmentArray } from '../redux/slices/shipmentsSlice'


function ShipmentCard({
  id,
  shipmentName,
  customerName,
  customerAddress,
  customerPhoneNumber,
  waybill
}) {

  const dispatch = useDispatch();

  const [isHidden,setIsHidden] = useState(true)

  //function to confirm the deletion of a shipment
  const confirmDeleteShipment = () => {
    //if user confirm deletion of  shipment -> call delete shipment api
    if(window.confirm('Are you sure you want to delete shipment '+shipmentName)) {
      deleteShipmentById(id).then(() => {
        //delete remove the shipment from redux
        dispatch(removeFromShipmentArray({id}))
      })
    }
  }

  return (
    <div className='flex flex-col bg-[#19283d] border-[1.3px] border-gray-400 rounded-md h-fit min-w-[330px] w-[30%] max-w-[400px] p-3'>
      {/* shipment name */}
      <span className='text-white font-bold text-2xl'>{shipmentName}</span>

      {/* Waybill */}
      <span className='ml-4 text-gray-300 text-sm mb-2 italic'>waybill {waybill}</span>

      {/* Customer Information */}
      <span className='font-semibold text-white ml-3'>Customer</span>

      {/* Info container */}
      <div className='flex flex-col ml-6'>

        <CustomerInfoDisplay
          information={customerName}
          icon={<BsPersonFill />}
        />

        <CustomerInfoDisplay
          information={customerPhoneNumber}
          icon={<FaPhoneAlt style={{scale:'.8'}}/>}
        />

        <CustomerInfoDisplay
          information={customerAddress}
          icon={<MdLocationPin />}
        />

      </div>

      {/* Delet/Edit buttons container */}
      <div className='flex justify-end mt-4'>

        {/* EDIT */}
        <Button
          text='Edit'
          icon={<AiFillEdit />}
          style={{
            scale:'.8'
          }}
          onClick={() => setIsHidden(false)}
        />

        {/* DELETE */}
        <Button
          text='Delete'
          icon={
            <BiTrashAlt />
          }
          onClick={confirmDeleteShipment}
          style={{
            backgroundColor:'#bd2b35',
            scale:'.8'
          }}
        />
      </div>


      <EditShipmentForm
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        shipmentId={id}
        shipmentNameValue={shipmentName}
        customerNameValue={customerName}
        customerPhoneNumberValue={customerPhoneNumber}
        customerAddressValue={customerAddress}
        waybillValue={waybill}
      />

    </div>
  )
}

export default ShipmentCard