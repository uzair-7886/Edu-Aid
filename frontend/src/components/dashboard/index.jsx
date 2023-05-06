import React from 'react'
import jwt_decode from 'jwt-decode'

export default function Dashboard() {

    const token=localStorage.getItem("token");
    const decoded=jwt_decode(token);
    console.log(decoded)
    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
    }

  return (
    <div>
      <h1>Dashboard</h1>
      <button type='submit' onClick={handleLogout}>logout</button>
    </div>
  )
}
