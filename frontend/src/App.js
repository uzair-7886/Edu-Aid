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

import Lplans from "./components/learningplans";
import Taketest from "./components/taketest/index";
import Rticket from "./components/taketest/subcomponents/ReportTicket";
import Showplans from "./components/learningplans/subcomponent/showplans";
import Games from "./components/Games";
import Usrticket from "./components/dashboard/subcomponents/Usrticket";
import Usertktest from "./components/dashboard/subcomponents/Usrtktest";
import MemoryGame from "./components/mem-game";
import WordScrambleGame from "./components/word-scramble";

function App() {
  const user = localStorage.getItem("token"); //get the token from local storage
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      {user && <Route path="/dashboard" exact element={<Dashboard />} />} //if
      token exists and user is authenticated then default page is dashboard
      <Route path="/registration" exact element={<Registration />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/lplans" exact element={<Lplans />} />
      <Route path="/tktest" exact element={<Taketest />} />
      <Route path="/rticket" exact element={<Rticket />} />
      <Route path="/showplans" exact element={<Showplans />} />
      <Route path="/Games" exact element={<Games />} />
      <Route path="/usrticket" exact element={<Usrticket />} />
      <Route path="/usertktest" exact element={<Usertktest />} />
      <Route path="/memgame" exact element={<MemoryGame />} />
      <Route path="/scramble" exact element={<WordScrambleGame />} />
    </Routes>
  );
}

export default App;
