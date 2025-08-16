import React from 'react'
import { useState } from 'react';
const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const handleSubmit = (e) => {
    // Handle form submission logic here
    // console.log('Form submitted');
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="" className='w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className='border-none h-[1.5px w-8 bg-gray-800'/>

      </div>
      <div className="flex flex-col gap-4">
        {currentState === 'Sign In' ? '':<input required type="text" placeholder='Enter your name' className='border border-gray-300 p-2 rounded' />}
        <input required type="email" placeholder='Enter your email' className='border border-gray-300 p-2 rounded' />
        <input required type="password" placeholder='Enter your password' className='border border-gray-300 p-2 rounded' />
        <button  type="submit" className='cursor-pointer bg-black text-white py-2 rounded'>Submit</button>
        {currentState === 'Sign Up' ? <p className='text-sm text-gray-500'>Already have an account? </p>: '' }
        {currentState === 'Sign In' ? <p className='text-sm text-gray-500'>Don't have an account? </p>: '' }
        {/* Toggle between Sign In and Sign Up */}
        {/* <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500'>Forgot Password?</p>
          <p className='text-sm text-gray-500'>Need Help?</p>
        </div> */}
        {/* Button to toggle between Sign In and Sign Up */}    

        <button 
          type='button' 
          
          className='cursor-pointer text-blue-500 hover: text-blue-700  '
          onClick={() => setCurrentState(currentState === 'Sign In' ? 'Sign Up' : 'Sign In')}
        >
          {currentState === 'Sign In' ? 'Sign Up' : 'Sign In'}
        </button>

      </div>
      
      
      
    </form>
  )
}

export default Login