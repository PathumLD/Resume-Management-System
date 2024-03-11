import React, { useState } from 'react'
import { FaGoogle, FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';


const Login = () => {
    const navigate = useNavigate();
    const loginAPI = 'http://localhost:3000/v1/auth/login';
    

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    Axios.defaults.withCredentials = true;

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await Axios.post(loginAPI,formData,  {
              headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({email, password}),
        });
          const data = await response.data;
          console.log('data:', data);

            if (response.status === 200) {
                console.log('Login successful');
                localStorage.setItem('userType', 'candidate'); // or 'company'
                localStorage.setItem('candidateToken', response.data.token);
                
                localStorage.setItem('candidate', JSON.stringify(response.data.candidate));

                
                navigate(`/candidate`);
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login', error);
        }
    }



  return (
    <>
      <div className='justify-center bg-blue'>
      <div className='pt-10 max-w-[45rem] mx-auto rounded-xl '>
        <h1 className="flex justify-center py-10 mx-auto text-5xl font-bold leading-7 text-white ">Sign In</h1>
        <form
          method='POST'
          onSubmit={handleSubmit}
          className='max-w-xl py-5 mx-5 mt-6 space-y-8 lg:border-opacity-0 sm:mx-auto sm:mt-6 sm:space-y-5 lg:rounded-xl '
        >
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-6'>
          <div className=" sm:col-span-6">
                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-200">Email</label>
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
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-200">Password</label>
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
          </div>
          <Link to='/forgot-password' className='flex justify-start font-semibold text-white hover:underline'>Forgot Password?</Link>
          
            <div className="flex justify-center">
              <button className="px-12 py-3 my-2 text-lg font-semibold bg-white text-blue hover:bg-blue-100/50 rounded-xl" type="submit" >
                Sign In
              </button>
            </div>
          

          {/* {user && (
            <div className="flex justify-center font-semibold text-red-500 hover:underline ">
              <span>{user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            

          )} */}
          
          
         

          <hr className='my-4' />

          <h3 className='flex justify-center font-medium text-white'>or SignUp with </h3>

          <div className='flex justify-center gap-8'>
            <button className="px-5 py-5 text-lg font-semibold bg-white rounded-full text-blue hover:text-white hover:bg-gray-400" type="submit">
              <FaGoogle />
            </button>
            <button className="px-5 py-5 text-lg font-semibold bg-white rounded-full text-blue hover:text-white hover:bg-gray-400" type="submit">
              <FaFacebookF />
            </button>
            <button className="px-5 py-5 text-lg font-semibold bg-white rounded-full text-blue hover:text-white hover:bg-gray-400" type="submit">
              <FaLinkedinIn />
            </button>
          </div>

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

export default Login
