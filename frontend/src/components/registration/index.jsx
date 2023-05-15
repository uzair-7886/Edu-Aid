import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Question from "./Input";

const Registration = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    age:undefined
  });

  const [error, setError] = useState("error");

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
      // console.log("clicked")
      const url = "http://localhost:3001/register";
      const newData={...data,age:parseInt(data.age)} //to parse age as a number for validation purposes
      const { data: res } = await axios.post(url, newData);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
        <h1>Registration Page</h1>
        <form onSubmit={handleSubmit}>
            <h1>create account</h1>
            <input type="text" placeholder="first name" name="firstName" onChange={handleChange} required value={data.firstName}/>
            <input type="text" placeholder="last name" name="lastName" onChange={handleChange} required value={data.lastName}/>
            <input type="email" placeholder="email" name="email" onChange={handleChange} required value={data.email}/>
            <input type="number" placeholder="age" name="age" onChange={handleChange} required value={data.age}/>
            <input type="password" placeholder="password" name="password" onChange={handleChange} required value={data.password}/>
            <button type="submit">Register</button>
        </form>
    </div>

    

    // <Question />
  );
};

export default Registration;
