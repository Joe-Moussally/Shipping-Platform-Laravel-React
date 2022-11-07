import React, { useEffect } from 'react'
import { getUserShipments } from '../api/fetchFunctions'

function DashboardPage() {

  useEffect(() => {
    //check if token is set / if not -> redirect to login
    if(!localStorage.getItem('token')) window.location.pathname = '/login'

    getUserShipments().then(response => {
      console.log(response.data)
    })
  })

  return (
    <div className='bg-[#001024] h-[100vh] flex flex-col items-center'>

    </div>
  )
}

export default DashboardPage