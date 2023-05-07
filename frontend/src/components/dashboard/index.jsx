import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

export default function Dashboard(props) {

  const [data,setData]=useState({
    userId:"",
    firstName:"",
    lastName:"",
    email:"",
  })

    const token=localStorage.getItem("token");
    const decodedUserId=jwt_decode(token);
    // console.log(decoded)


    useEffect(() => {
      const fetchData = async () => {
        try {
          const url = `http://localhost:3001/dashboard/${decodedUserId._id}`;
          const { data: res } = await axios.get(url);
          // console.log(res.data);
          setData({
            userId:res.data._id,
            firstName:res.data.firstName,
            lastName:res.data.lastName,
            email:res.data.email
          })
          // console.log(data)
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);


    const handleLogout=()=>{
        localStorage.removeItem("token");
        window.location.href="http://localhost:3000/login";
    }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome</h2>
      <h3>User Id: {data.userId}</h3>
      <h3>First Name: {data.firstName}</h3>
      <h3>Last Name: {data.lastName}</h3>
      <h3>Email: {data.email}</h3>
      <button type='submit' onClick={handleLogout}>logout</button>
    </div>
  )
}
