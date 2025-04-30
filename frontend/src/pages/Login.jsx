// Login.js

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const {login}=useContext(AuthContext);
  const handleLogin=async (e)=>{
    e.preventDefault()
    try{
    const res=await login(inputs);
    navigate("/")
    }catch(err){
      if (err.response && err.response.data && err.response.data.message) {
        setErr(err.response.data.message);
      } else {
        setErr("An unexpected error occurred.");
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundImage: "url('/assets/3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' , backgroundOpacity: '0.5'}}>
      <div className="max-w-md w-full space-y-8 bg-black bg-opacity-80 rounded-lg p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-mono ">Login</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
