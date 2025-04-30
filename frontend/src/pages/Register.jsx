import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleClick = async (e) => {
    e.preventDefault();
    try{
    
      await axios.post("http://localhost:8000/api/auth/register",inputs)
      navigate("/")
    }catch(err){
      setErr(err.response.data);
    }

  };


  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center">
        <img
          src="assets/3.jpg"
          alt="Quiz"
          className="fixed inset-0 object-cover w-full h-full"
        />
        <div className="fixed inset-0 bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-sm"></div>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-gray-200 bg-opacity-60 p-8 rounded shadow-md w-96">
            <h1 className="text-2xl font-semibold  mb-4">Sign Up</h1>
            <div className="flex items-center justify-center">
              <div className="z-10 relative w-full h-full bg-black flex items-center justify-center rounded-md pt-4 pd-4">
                <div className="flex flex-col gap-4">
                  <form className="flex flex-col gap-4 m-3">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md text-white::placeholder" // Adjusted placeholder color here
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md text-white::placeholder" // Adjusted placeholder color here
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md text-white::placeholder" // Adjusted placeholder color here
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      className="border-none border-b-2 border-blue-100 p-2 rounded-md text-white::placeholder" // Adjusted placeholder color here
                    />
                    <button
                      onClick={handleClick}
                      className="w-1/2 p-2 border-none bg-gradient-to-r from-red-500 to-red-900 text-white font-bold cursor-pointer rounded-md"
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div>
              <p>Already a User?</p>
              <Link to="/login" className="text-red-600">
                Login
              </Link>
            </div>
            <Link to="/">
              <button className="mt-4 bg-gradient-to-r from-red-500 to-red-900 hover:bg-gray-400  font-bold py-2 px-4 rounded">
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
