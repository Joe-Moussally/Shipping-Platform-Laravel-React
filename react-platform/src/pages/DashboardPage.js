import React, { useEffect } from 'react'

//api imports
import { getUserShipments } from '../api/fetchFunctions'

//redux import
import { useDispatch, useSelector } from 'react-redux';
import { getShipmentsArray, updateShipmentsArray } from '../redux/slices/shipmentsSlice';

//component imports
import ShipmentCard from '../components/ShipmentCard';

function DashboardPage() {

  const dispatch = useDispatch()

  let shipmentsArray = useSelector(getShipmentsArray)

  useEffect(() => {
    
    //check if token is set / if not -> redirect to login
    if(!localStorage.getItem('token')) window.location.pathname = '/login'

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
    <div className=''>
      
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
    </div>
  )
}

export default DashboardPage