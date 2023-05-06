import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Registration from './components/registration'
import Login from './components/login'
import Dashboard from './components/dashboard';

function App() {
  const user=localStorage.getItem("token") //get the token from local storage
  return (
    <Routes>
      {user&& <Route path='/' exact element={<Dashboard/>}/>} //if token exists and user is authenticated then default page is dashboard
      <Route path='/registration' exact element={<Registration/>}/>
      <Route path='/login' exact element={<Login/>}/>
    </Routes>
  )
}


// export default App;
export default App;
