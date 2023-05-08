import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("error");

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
      const url = "http://localhost:3001/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data); //setItem takes two arguments key and value and saves the data (which is the token sent as response from the api) in the local storage of browser so that we may need it latter
      // console.log(localStorage.getItem("token"));
      window.location = "/dashboard";
      // console.log(res.message);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

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
    <div
      className="d-flex d-xl-flex align-items-center align-items-xl-center"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-login-image">
                      <img
                        src="https://cdn.ymaws.com/www.covd.org/resource/resmgr/images/dyslexia.jpg"
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                        <br />
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
  );
};

export default Login;
