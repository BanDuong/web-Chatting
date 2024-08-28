import React from 'react'

export const Login = () => {
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
          <form className='p-3'>
            <div className='lb-email'>
              <label className='label'>
                <span className='text-base label-text'>Email</span>
              </label>
              <input type="text" placeholder="abc@mobifone.vn" className="text-purple-900 bg-blue-200 input input-bordered w-full h-10"/>
            </div>

            <div className='lb-pasword'>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input type="password" placeholder="Type here" className="text-purple-900 bg-blue-200 input input-bordered w-full h-10"/>
            </div>
            
            <div className='p-1'>
              <a className="link link-hover link-primary text-blue-700" href='#'>
                {"Don't"} have an account?
              </a>
            </div>

            <div>
              <button type="submit" className="w-full h-10 text-white bg-blue-600 rounded-md hover:bg-blue-700">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
