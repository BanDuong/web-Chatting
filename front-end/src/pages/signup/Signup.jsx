import React from 'react'

export const Signup = () => {
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
          <form className='p-3'>
            <div className='lb-fullName'>
              <label>
                <span className='text-base label-text text-cyan-400'>Full Name</span>
              </label>
              <input type="text" placeholder="Nguyen Van A" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"/>
            </div>

            <div className='lb-email pt-3'>
              <label>
                <span className='text-base label-text text-cyan-400'>Email</span>
              </label>
              <input type="text" placeholder="abc@mobifone.vn" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"/>
            </div>

            <div className='lb-password pt-3'>
              <label>
                <span className='text-base label-text text-cyan-400'>Password</span>
              </label>
              <input type="text" placeholder="Enter Password" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"/>
            </div>

            <div className='lb-retypePassword pt-3'>
              <label>
                <span className='text-base label-text text-cyan-400'>Confirm Password</span>
              </label>
              <input type="text" placeholder="Confirm Password" className="mt-1 text-purple-900 bg-blue-200 input input-bordered w-full h-10"/>
            </div>

            <div className="pt-3 flex">
              <div className='form-control'>
                <label className="cursor-pointer label gap-1">
                  <span className="label-text text-cyan-400">Male</span>
                  <input type="checkbox" defaultChecked className="checkbox checkbox-primary ml-1"/>
                </label>
              </div>

              <div className='form-control ml-2'>
                <label className="cursor-pointer label gap-1">
                  <span className="label-text text-cyan-400">Female</span>
                  <input type="checkbox" className="checkbox checkbox-primary ml-1"/>
                </label>
              </div>
            </div>

            <div className='p-1'>
              <a className="link link-hover link-primary text-blue-700" href='#'>
                Already have an account?
              </a>
            </div>

            <div>
              <button type="submit" className="w-full h-10 text-white bg-blue-600 rounded-md hover:bg-blue-700">SignUp</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
