import React from 'react'

export default function Dashboard() {
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
