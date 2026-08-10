import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

  const [user,setUser]= useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const handleCheckbox=(gender)=>{
    setUser({...user,gender})
  }

  const onSumbitHandler=(e)=>{
    e.preventDefault();
    console.log(user);
    setUser({
      fullName:'',
      userName:'',
      password:'',
      confirmPassword:'',
      gender:''})
  }
  return (
    <div className='min-w-96 mx-auto'>
      <div className='h-full w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border  border-gray-100'>

        <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp</h1>

        <form onSubmit={onSumbitHandler}>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Full Name</span>
            </label>
            <input onChange={(e)=>setUser({...user,fullName:e.target.value})}
            value={user.fullName}
             className='w-full input input-bordered h-10'
            type='text' 
            placeholder='Full Name' required/>
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Username</span>
            </label>
            <input onChange={(e)=>setUser({...user,userName:e.target.value})}
            value={user.userName}
            className='w-full input input-bordered h-10'
            type='text' 
            placeholder='Username' required/>
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Password</span>
            </label>
            <input onChange={(e)=>setUser({...user,password:e.target.value})}
            value={user.password}
            className='w-full input input-bordered h-10'
            type='password' 
            placeholder='Password  ' required/>
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label label-text'>Confirm Password</span>
            </label>

            <input onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
            value={user.confirmPassword} 
            className='w-full input input-bordered h-10'
            type='password' 
            placeholder='Confirm Password' required/>
          </div>

         <div className='flex items-center my-4 gap-4'>
          <div className='flex items-center'>
            <p>Male</p>
            <input checked={user.gender==="male"}
            onChange={()=>handleCheckbox("male")}
            type="checkbox" defaultChecked className="checkbox mx-2"  />
          </div>

          <div className='flex items-center'>
            <p>Female</p>
            <input checked={user.gender==="female"}
            onChange={()=>handleCheckbox("female")}
            type="checkbox" defaultChecked className="checkbox mx-2"  />
          </div>
         </div>
          <p className='text-center text-gray-300 my-2'>

            Already have an account?{" "}
            <Link  className='text-cyan-400 hover:underline'to='/login'>  
            Login

          </Link>

          </p>
          <div>
            <button type='submit'className='btn btn-block  mt-3 h-11 border border-slate-700'>SignUp</button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default SignUp
