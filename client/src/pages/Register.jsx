import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import Axios from 'axios';


const Register = () => {
    const navigate = useNavigate();
    const registerAPI = 'http://localhost:3000/v1/auth/register';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: ''
        
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      try {
        const { name, email, password, confirmPassword, userType } = formData;
    
        const response = await Axios.post(registerAPI, { name, email, password, userType }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.status === 201) {
          console.log('Registration successful', response.data);
          localStorage.setItem('client', JSON.stringify(response.data));
          navigate('/login');
        } else {
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration', error);
      }
    };

    
    
  return (
    <>
    <div className="absolute flex items-center justify-center w-full h-full bg-gradient-to-br from-blue to-blue">
  <div className="w-full max-w-xl px-5 py-8 border-2 border-white rounded-lg shadow-lg bg-white/20">
    <h1 className="mb-8 text-5xl font-bold text-center text-white ">Sign Up</h1>
        <form action="#" method="POST" onSubmit={handleSubmit}  className="max-w-xl py-5 mx-5 mt-6 space-y-8 lg:border-opacity-0 sm:mx-auto sm:mt-6 sm:space-y-5 lg:rounded-xl l "> {/* lg:border-x-2 lg:border-t-2 xl:border-b-8 lg:border-blue/20 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              
              <div className=" sm:col-span-6">
                <label htmlFor="name" className="block text-sm font-medium leading-5 text-white">Name</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className=" sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-white">Email</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-white">Password</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-5 text-white">Confirm Password</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="userType" className="block text-sm font-medium leading-5 text-white">
                    User Type
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                    <select
                    id="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="block w-full py-2 pl-3 pr-10 transition duration-150 ease-in-out rounded-md form-select sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                    >
                    <option value="" disabled>User Type</option>
                    <option value="candidate">Candidate</option>
                    <option value="company">Company</option>
                    </select>
                </div>
            </div>

  
              </div>
              <div className="flex justify-center">
              <button className="px-12 py-3 my-2 text-lg font-semibold bg-white border-2 border-white text-blue hover:bg-transparent hover:text-white rounded-xl" type="submit" >
                Sign Up
              </button>
            </div>

          <hr className='my-4' />

          {/* <h3 className='flex justify-center font-medium text-white'>or SignUp with </h3>

          <div className='flex justify-center gap-8'>
            <button className="px-5 py-5 text-lg font-semibold bg-white rounded-full text-blue hover:text-white hover:bg-blue" type="submit">
              <FaGoogle />
            </button>
            <button className="px-5 py-5 text-lg font-semibold bg-white rounded-full text-blue hover:text-white hover:bg-blue" type="submit">
              <FaFacebookF />
            </button>
            <button className="px-5 py-5 text-lg font-semibold bg-white rounded-full text-blue hover:text-white hover:bg-blue" type="submit">
              <FaLinkedinIn />
            </button>
          </div> */}

          <h3 className='flex justify-center text-white text-20'>Already have an account? <span className='ml-3 font-semibold text-white hover:underline hover:text-decoration-line:'><a href="/login"> SignIn</a></span></h3>
        </form>
      </div>
      </div>
    </>
  )
}

export default Register
