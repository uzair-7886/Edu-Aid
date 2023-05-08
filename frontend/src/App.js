import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Registration from "./components/registration";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Home from "./components/home/home";

function App() {
  const user = localStorage.getItem("token"); //get the token from local storage
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      {user && <Route path="/dashboard" exact element={<Dashboard />} />} //if
      token exists and user is authenticated then default page is dashboard
      <Route path="/registration" exact element={<Registration />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

// export default App;
export default App;
