import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();


  const handleLogin = async (e) =>{
    e.preventDefault();
    await login(email, password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
        
        <div className='title-login'>
          <h1 className='text-3xl font-semibold text-center text-red-600'>
            Login
            <span className='text-blue-500'> Chat App</span>
          </h1>
        </div>

        <div className='form-login'>
          <form className='p-3' onSubmit={handleLogin}>
            <div className='lb-email'>
              <label className='label'>
                <span className='text-base label-text'>Email</span>
              </label>
              <input type="text" placeholder="abc@mobifone.vn" className="text-purple-900 bg-blue-200 input input-bordered w-full h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='lb-pasword'>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder="Type here" className="text-purple-900 bg-blue-200 input input-bordered w-full h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className='p-1'>
              <Link className="link link-hover link-primary text-blue-700" to={'/signup'}>
                Don't have an account?
              </Link>
            </div>

            <div>
              <button type="submit" className="w-full h-10 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              disabled = {loading}
              >
                {loading ? (<span className='loading loading-spinner'></span>) : (<span>Login</span>)}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
