import React from 'react'
import { MdSearch } from "react-icons/md";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-700 p-4 flex flex-col '>
        <form action="" className='flex items-center gap-2'>
            <input  placeholder='Search'
            className='input input-bordered rounded-md'type='text'/>
            <button type='submit' className='btn  bg-slate-700 '>
                <MdSearch  className='w-6 h-6 outline-none'/>
            </button>
        </form>
        <div className='divider px-3'></div>
        <OtherUsers />

        <div className='mt-2'>
            <button className='btn btn-sm'>Logout</button>
        </div>
    </div>
  )
}

export default Sidebar