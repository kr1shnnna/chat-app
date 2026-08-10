import React from 'react'
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form className='px-4 my-3'>

        <div className='w-full relative'>
            <input className='border text-sm rounded-lg block w-full bg-[#1D232A] text-white p-3 border-slate-700 focus:outline-none focus:border-slate-500'
            placeholder='Type a message'
            type="text" />

            <button className='absolute flex inset-y-0 end-0 items-center pr-4'>
                <IoSend />
            </button>
        </div>

    </form>
  )
}

export default SendInput