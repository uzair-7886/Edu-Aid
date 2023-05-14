import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { DotLoaderOverlay } from "react-spinner-overlay";
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    // <div>
    //     <h1>Login Page</h1>
    //     <form onSubmit={handleSubmit}>
    //         <h1>Enter details</h1>
    //         <input type="email" placeholder="email" name="email" onChange={handleChange} required value={data.email}/>
    //         <input type="password" placeholder="password" name="password" onChange={handleChange} required value={data.password}/>
    //         <button type="submit">Login</button>
    //     </form>
    // </div>
    
    <>
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md py-3"
        style={{ fontSize: "20px", backgroundColor: "#1b854a"}}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" style={{ color:"rgb(2, 53, 2)"}}>
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              <svg
                className="bi bi-bezier"
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                fill="currentColor"
                viewBox="0 0 16 16"
                data-toggle="collapse"
              >
                <path
                  fillRule="evenodd"
                  d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                ></path>
                <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
              </svg>
            </span>
            <span
            style={{fontSize: "30px" ,marginRight:"20px"}}>&nbsp;EduAid</span>
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navcol-1" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/"
                style={{ fontSize:"23px" ,color:"aliceblue",marginLeft:"16px"}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"  style={{fontSize:"23px" ,color:"aliceblue",marginLeft:"16px"}}>
                  Tutorial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={{fontSize:"23px" ,color:"aliceblue",marginLeft:"16px"}}>
                  About
                </a>
              </li>
            </ul>
            <a className="nav-link" href="" style={{textDecoration: "underline",fontWeight: "bold",fontSize:"23px" ,color:"aliceblue",marginLeft:"16px"}}>
                  Login
                </a>
          </div>
        </div>
      </nav>
    </div>

  {loading&&
  <DotLoaderOverlay
  overlayColor="rgba(0, 0, 0, 0.7)"
  color="#1b854a"
  size={20}
  between={13}
  />
}  
    <div
      className={"d-flex d-xl-flex align-items-center align-items-xl-center"}
      style={{position:"absolute" ,width:"100%",height:"85%",backgroundColor:"aliceblue"}}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-6 col-xl-6">
            <div className="card shadow-lg o-hidden border-0 my-5"  data-aos='zoom-out'>
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
                        style={{ transform: "scale(1.15)" }}
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
                        <br />
                      </form>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* <p>here</p> */}

   
    </>
  );
};

export default Login;
