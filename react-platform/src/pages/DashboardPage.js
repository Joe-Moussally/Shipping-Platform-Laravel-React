import React, { useEffect } from 'react'

function DashboardPage() {

  useEffect(() => {
    //check if token is set / if not -> redirect to login
    if(!localStorage.getItem('token')) window.location.pathname = '/login'
  })

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage