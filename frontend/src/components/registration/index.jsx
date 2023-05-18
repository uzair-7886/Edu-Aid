import { useState } from "react";
import styles from "./styles.module.css";
import React,{useEffect} from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginNavbar from "../navbar/loginNavbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DotLoaderOverlay } from "react-spinner-overlay";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn
}
from 'mdb-react-ui-kit';

import { TextField } from "@mui/material";



const Registration = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age:undefined
  });

  const [loading,setLoading]=useState(false)
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //when any field changes it gets updated in the state (destructures currentTarget from event object and renaming it as 'input' for simplicity)
  // const handleChange =({currentTarget:input})=>{
  //     setData({...data,[input.name]:input.value})
  // }
  // const handleChange = ({ currentTarget: input }) => {
  // 	setData({ ...data, [input.name]: input.value });
  // };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setLoading(true)
      // console.log("clicked")
      const url = "http://localhost:3001/register";
      const newData={...data,age:parseInt(data.age)} //to parse age as a number for validation purposes
      const { data: res } = await axios.post(url, newData);
      setLoading(false)
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

useEffect(()=> {
    AOS.init({duration : 600});
  }, [])

  return (
    <div>
        <LoginNavbar string={"Sign Up"}/>

        {loading&&
  <DotLoaderOverlay
  overlayColor="rgba(0, 0, 0, 0.7)"
  color="#1b854a"
  size={20}
  between={13}
  />
  }  
        
        <MDBContainer fluid className='d-flex align-items-center justify-content-center' style={{position:"fixed", hieght:"100%",backgroundColor:"aliceblue"}}>
      <MDBCard className='m-5' style={{maxWidth: '500px',minWidth:'350px'}}  data-aos='zoom-out-up'>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-4">Create account</h2>

          <form onSubmit={handleSubmit}>
            <TextField style={{width: "49.5%", marginBottom:"4%",marginTop:"4%"}} color="success" type='text' label="First Name" name="firstName" onChange={handleChange} required />
            <TextField style={{width: "49.5%", marginBottom:"4%", marginLeft:"1%",marginTop:"4%"}}color="success" type="text" name="lastName" label="Last Name" onChange={handleChange} required />
            <TextField style={{width: "69%", marginBottom:"4%"}}color="success" type="text" label="Email" name="email" onChange={handleChange} required />
            <TextField style={{width: "30%", marginBottom:"4%" , marginLeft:"1%"}} color="success" type="number" label="Age" name="age" onChange={handleChange} required />
            <TextField style={{width: "100%", marginBottom:"3%"}} color="success" type="password" label="Password" name="password" onChange={handleChange} required />
            <p style={{color:'red',textAlign:'center'}}>{error}</p><hr/>{"\n"}
            <MDBBtn style={{width:"100%",marginBottom:"6%"}} size='lg' color="success" type="submit">Register</MDBBtn>
        </form>
        <div className="mb-4 d-sm-flex align-items-center justify-content-center">
        {"Already have an account?"}
        <Link to="/Login"  style={{marginLeft:"2%"}} variant="body2">
                {"Login"}
              </Link>
              </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
};

export default Registration;


{/* 
<TextField sx={{width: "49.5%", marginBottom:"3%",marginLeft:"1%"}} type='text' varient="Outlined" label='Last Name' onChange={handleChange} /> */}

