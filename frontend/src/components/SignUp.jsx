import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-w-96 mx-auto'>
      <div className='h-full w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border  border-gray-100'>

        <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp</h1>

        <form>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Full Name</span>
            </label>
            <input className='w-full input input-bordered h-10'
            type='text' 
            placeholder='Full Name'/>
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Username</span>
            </label>
            <input className='w-full input input-bordered h-10'
            type='text' 
            placeholder='Username'/>
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Password</span>
            </label>
            <input className='w-full input input-bordered h-10'
            type='password' 
            placeholder='Password  '/>
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Confirm Password</span>
            </label>
            <input className='w-full input input-bordered h-10'
            type='password' 
            placeholder='Confirm Password'/>
          </div>

         <div className='flex items-center my-4 gap-4'>
          <div className='flex items-center'>
            <p>Male</p>
            <input type="checkbox" defaultChecked className="checkbox mx-2" />
          </div>

          <div className='flex items-center'>
            <p>Female</p>
            <input type="checkbox" defaultChecked className="checkbox mx-2" />
          </div>
         </div>
          <p className='text-center text-gray-300 my-2'>

            Already have an account?{" "}
            <Link  className='text-cyan-400 hover:underline'to='/login'>  
            Login

          </Link>

          </p>
          <div>
            <button className='btn btn-block  mt-3 h-11 border border-slate-700'>SignUp</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default SignUp
