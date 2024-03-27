import  Axios  from 'axios';
import React, { useState } from 'react'
import VisitorLogin from './VisitorLogin';
import { useNavigate } from 'react-router-dom';

const VisitorRegister = () => {
    const registerAPI = 'http://localhost:3000/v1/guest/register-guest';
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const handleRegisterChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post(registerAPI,formData,  {
              headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({email, password}),
        });
          const data = await response.data;
          console.log('data:', data);

          if (response.status === 201) {
            console.log('Login successful');
            navigate('/visitor-login');
            
          } else {
            console.error('Login failed');
            // Handle login failure
          }
        } catch (error) {
          console.error('Login failed:', error);
          // Handle login failure
        }
    }
    
  return (
    <>
      <div className='justify-center bg-blue'>
      <div className='pt-10 max-w-[45rem] mx-auto rounded-xl '>
        <h1 className="flex justify-center py-10 mx-auto text-5xl font-bold leading-7 text-white ">Sign In</h1>
        <form
          method='POST'
          onSubmit={handleRegister}
          className='max-w-xl py-5 mx-5 mt-6 space-y-8 lg:border-opacity-0 sm:mx-auto sm:mt-6 sm:space-y-5 lg:rounded-xl '
        >
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-6'>

            <div className="sm:col-span-6">
                <label htmlFor="userName" className="block text-sm font-medium leading-5 text-gray-200">Username</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="userName"
                    type="text"
                    required
                    value={formData.userName}
                    onChange={handleRegisterChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

            <div className=" sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-200">Email</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleRegisterChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-6">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-200">Password</label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleRegisterChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
          </div>
          {/* <Link to='/forgot-password' className='flex justify-start font-semibold text-white hover:underline'>Forgot Password?</Link> */}
          
            <div className="flex justify-center">
              <button className="px-12 py-3 my-2 text-lg font-semibold bg-white text-blue hover:bg-blue-100/50 rounded-xl" type="submit" >
                Sign Up as a Guest
              </button>
            </div>
            {/* {showVisitorLogin && (
                <VisitorLogin onCancel={() => setShowVisitorLogin(false)}/>
            )} */}

          <h3 className='flex justify-center text-white text-20'>
            Don't have an account?{' '}
            <span className='ml-3 font-semibold text-white hover:underline hover:text-decoration-line:'>
              <a href='/register'> SignUp</a>
            </span>
          </h3>
        </form>
      </div>
      </div>
    </>
  )
}

export default VisitorRegister
