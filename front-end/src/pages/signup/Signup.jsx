import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';

export const Signup = () => {

  const [input, setInput] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'male'
  });

  const {loading, signUp} = useSignup();
  
  const onChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(input);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'>
       
        <div className='title-signup'>
          <h1 className='text-3xl font-semibold text-center text-red-600'>
            <span>Sign</span>
            <span className='text-blue-500'>Up</span>
          </h1>
        </div>
        
        <div className='form-signup'>
          <form className='p-3' onSubmit={handleSubmit}>
            <div className='lb-fullName'>
              <label>
                <span className='text-base label-text text-cyan-400'>Full Name</span>
              </label>
              <input type="text" placeholder="Nguyen Van A" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"
                name='fullName'
                value={input.fullName}
                onChange={onChange}
                required
              />
            </div>

            <div className='lb-email pt-3'>
              <label>
                <span className='text-base label-text text-cyan-400'>Email</span>
              </label>
              <input type="email" placeholder="abc@mobifone.vn" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"
                name='email'
                value={input.email}
                onChange={onChange}
                required
              />
            </div>

            <div className='lb-password pt-3'>
              <label>
                <span className='text-base label-text text-cyan-400'>Password</span>
              </label>
              <input type="password" placeholder="Enter Password" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"
                name='password'
                value={input.password}
                onChange={onChange}
                minLength='6'
                required
              />
            </div>

            <div className='lb-confirmPassword pt-3'>
              <label>
                <span className='text-base label-text text-cyan-400'>Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm Password" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"
                minLength='6'
                name='confirmPassword'
                value={input.confirmPassword}
                onChange={onChange}
                required
              />
            </div>

            <div className="lb-gender pt-3 flex" >
              <div className='form-control'>
                <label className="cursor-pointer label gap-1">
                  <span className="label-text text-cyan-400">Male</span>
                  <input type="radio" id="male" className="checkbox checkbox-primary ml-1"
                    name='gender'
                    defaultChecked
                    value= "male"
                    onChange={onChange}
                  />
                </label>
              </div>

              <div className='form-control ml-2'>
                <label className="cursor-pointer label gap-1">
                  <span className="label-text text-cyan-400">Female</span>
                  <input type="radio" id="female" className="checkbox checkbox-primary ml-1"
                    name='gender'
                    value = "female"
                    onChange={onChange}
                  />
                </label>
              </div>
            </div>

            <div className='p-1'>
              <Link to={'/login'} className="link link-hover link-primary text-blue-700">
                Already have an account?
              </Link>
            </div>

            <div>
              <button type="submit" className="w-full h-10 text-white bg-blue-600 rounded-md hover:bg-blue-700" disabled={loading}>
              {loading ? (<span className='loading loading-spinner'></span>) : (<span>SigUp</span>)}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
