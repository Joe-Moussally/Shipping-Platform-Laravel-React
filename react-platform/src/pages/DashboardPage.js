import React, { useEffect, useState } from 'react';

//api imports
import { getUserShipments } from '../api/fetchFunctions';

//redux import
import { useDispatch, useSelector } from 'react-redux';
import { getShipmentsArray, updateShipmentsArray } from '../redux/slices/shipmentsSlice';

//component imports
import ShipmentCard from '../components/ShipmentCard';
import Button from '../components/Button';
import AddShipmentForm from '../components/AddShipmentForm';

//icons imports
import { IoIosAdd } from 'react-icons/io';
import { RiErrorWarningLine } from 'react-icons/ri';



function DashboardPage() {

  const dispatch = useDispatch()

  let shipmentsArray = useSelector(getShipmentsArray)

  //track if the add shipment form is hidden
  const [isHidden,setIsHidden] = useState(true)

  useEffect(() => {
    
    //check if token is set / if not -> redirect to login
    if(!localStorage.getItem('token')) window.location.pathname = '/login'

    //get the user's shipments
    getUserShipments().then(response => {
      dispatch(updateShipmentsArray(response.data.shipments))
    }).catch(error => {
      // if token is expired on the server ->rediret to login
      if(error.response.status === 500) {
        window.location.pathname = '/login'
      }
    })
    
  },[])

  return (
    <div className='flex flex-col items-center'>

      {/* Title */}
      <span className='text-white text-5xl font-bold m-5'>My Shipments</span>

      {/* Create Shipment Button */}
      <Button
        text="Add New Shipment"
        onClick={() => setIsHidden(false)}
        icon={<IoIosAdd style={{scale:'1.4'}} />}
        style={{margin:50}}
      />
      
      {/* Shipments container */}
      <div className=' flex flex-row flex-wrap justify-center gap-4 p-2'>
        {
          shipmentsArray.map(shipment => (
            <ShipmentCard
              key={shipment.id}
              id={shipment.id}
              shipmentName={shipment.shipment_name}
              customerName={shipment.customer_name}
              customerAddress={shipment.customer_address}
              customerPhoneNumber={shipment.customer_phone_number}
              waybill={shipment.waybill}
            />
          ))
        }
      </div>

      {
        shipmentsArray.length?
        null:
        <span className='flex gap-5 items-center text-red-400 text-xl font-semibold mt-10'>
          <RiErrorWarningLine style={{scale:'1.2'}}/>
          No Shipments Found
        </span>
      }

      {/* Add New Shipment Form */}
      <AddShipmentForm
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />

    </div>
  )
}

export default DashboardPage