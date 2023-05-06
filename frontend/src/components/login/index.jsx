import { useState } from "react"
import styles from "./styles.module.css"
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [error,setError]=useState("error");


    //when any field changes it gets updated in the state (destructures currentTarget from event object and renaming it as 'input' for simplicity)
    // const handleChange =({currentTarget:input})=>{
    //     setData({...data,[input.name]:input.value})
    // }
    // const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    


    const handleSubmit=async (ev)=>{
        ev.preventDefault();
        try {
            const url="http://localhost:3001/login";
            const {data:res}=await axios.post(url,data);
            localStorage.setItem("token",res.data) //setItem takes two arguments key and value and saves the data (which is the token sent as response from the api) in the local storage of browser so that we may need it latter
            // console.log(localStorage.getItem("token"));
            window.location="/";
            // console.log(res.message);
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message); 
        }
    }

        return (
            <div>
                <h1>Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <h1>Enter details</h1>
                    <input type="email" placeholder="email" name="email" onChange={handleChange} required value={data.email}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} required value={data.password}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

export default Login;