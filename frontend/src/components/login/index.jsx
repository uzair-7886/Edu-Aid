import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { DotLoaderOverlay } from "react-spinner-overlay";
import React,{useEffect} from 'react';
import LoginNavbar from "../navbar/loginNavbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBBtn
}
from 'mdb-react-ui-kit';

import { TextField } from "@mui/material";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading,setLoading]=useState(false)

  const [error, setError] = useState("");

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
      const url = "http://localhost:3001/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data); //setItem takes two arguments key and value and saves the data (which is the token sent as response from the api) in the local storage of browser so that we may need it latter
      // console.log(localStorage.getItem("token"));
      setLoading(false)
      window.location = "/dashboard";
      // console.log(res.message);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
      setLoading(false)
      setError(error.response.data.message)
    }
  };

  useEffect(()=> {
    AOS.init({duration : 600});
  }, [])
  return (
    <div>
    <LoginNavbar string={"Login"}/>

  {loading&&
  <DotLoaderOverlay
  overlayColor="rgba(0, 0, 0, 0.7)"
  color="#1b854a"
  size={20}
  between={13}
  />
  }  
  
    {/* <div
      className={"d-flex d-xl-flex align-items-center align-items-xl-center"}
      style={{position:"fixed" ,width:"100%",height:"91%",backgroundColor:"aliceblue",paddingBottom:"3%"}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-6 col-xl-6">
            <div className="card shadow-lg o-hidden border-0 my-5"  data-aos='zoom-out-up'>
              <div className="card-body p-0">
                <div className="row">
                  
                  <div className="col-12">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">
                          Continue your Journey
                        </h4>
                      </div>
                      <br />
                      <form
                        className="user"
                        onSubmit={handleSubmit}
                        style={{ transform: "scale(1.15)" ,paddingLeft:"3%", paddingRight:"3%"}}
                      >
                        <div className="mb-3">
                          <input
                            id="exampleInputEmail"
                            className="form-control form-control-user"
                            type="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                            onChange={handleChange}
                            required
                            value={data.email}
                          />
                        </div>
                        <br></br>
                        <div className="mb-3">
                          <input
                            id="exampleInputPassword"
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            required
                            value={data.password}
                          />
                        </div>
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox small"></div>
                        </div>
                        <br />
                        <button
                          className="btn btn-primary d-block btn-user w-100"
                          type="submit"
                          style={{ background: "#01703E" }}
                        >
                          Login
                        </button>
                        <p style={{color:'red',textAlign:'center'}}>{error}</p>
                        <hr/>
                        <div style={{paddingLeft:"7.8%", width:"100%", paddingRight:"7.8%",paddingTop:"2%"}}>
                        <Link
                        to="/registration"
                        style={{ textDecoration: "none" }}
                      >
                        
                        <button
                          className="btn  btn-outline-success d-block btn-user w-100"
                          type="button"
                          style={{
                            transform: "scale(1.15)",
                          }}
                        >
                          Create New Account
                        </button>
                      </Link>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> */}


      <MDBContainer fluid className='d-flex align-items-center justify-content-center' style={{ paddingTop:"2%",paddingBottom:"2%",backgroundColor:"aliceblue"}}>
      <MDBCard className='m-5' style={{maxWidth: '500px',minWidth:'350px'}} data-aos='zoom-out-up'>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-4">Login Account</h2>

          <form onSubmit={handleSubmit}>
            <TextField style={{width: "100%", marginBottom:"5%"}}color="success" type="text" label="Email" name="email" onChange={handleChange} required />
            <TextField style={{width: "100%", marginBottom:"4%"}} color="success" type="password" label="Password" name="password" onChange={handleChange} required />
            <p style={{color:'red',textAlign:'center'}}>{error}</p><hr/>{"\n"}
            <MDBBtn style={{width:"100%",marginBottom:"6%"}} size='lg' color="success" type="submit">Login</MDBBtn>
        </form>
        <div className="mb-4 d-sm-flex align-items-center justify-content-center">
        {"Don't have an account?"}
        <Link to="/Registration"  style={{marginLeft:"2%"}} variant="body2">
                {"Sign Up"}
              </Link>
              </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
};

export default Login;
