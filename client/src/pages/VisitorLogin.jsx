import  Axios  from 'axios';
import React, { useState } from 'react'
import  {useNavigate}  from 'react-router-dom';

const VisitorLogin = () => {
    const loginAPI = 'http://localhost:3000/v1/guest/login-guest';
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleLoginChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    const handleLoginSubmit = async (event) => {
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

          if (response.status === 201) {
            console.log('Login successful');
          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      
        navigate('/visitor-vacancies');
    }
    
  return (
    <>
      <div className='justify-center bg-blue'>
      <div className='pt-10 max-w-[45rem] mx-auto rounded-xl '>
        <h1 className="flex justify-center py-10 mx-auto text-5xl font-bold leading-7 text-white ">Sign In</h1>
        <form
          method='POST'
          onSubmit={handleLoginSubmit}
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
                    onChange={handleLoginChange}  
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
                    onChange={handleLoginChange}  
                    className="block w-full py-1 pl-3 transition duration-150 ease-in-out rounded-md sm:py-3 form-input sm:text-sm sm:leading-5 ring-1 focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
          </div>
          
            <div className="flex justify-center">
              <button className="px-12 py-3 my-2 text-lg font-semibold bg-white text-blue hover:bg-blue-100/50 rounded-xl" type="submit" >
                Sign In
              </button>
            </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default VisitorLogin
