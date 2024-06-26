// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import PrivateRoute from './components/PrivateRoute';



function App() {
  const[isLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <div className='w-screen h-screen bg-richblack-900 flec flex-col '>
      <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home/>} ></Route>

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>

        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} ></Route>

        <Route path="/dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard/>
        </PrivateRoute>
        } ></Route>
      </Routes>

      <ToastContainer/>
    </div>
  );
}

export default App;
