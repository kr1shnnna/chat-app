import React from 'react'

const SendInput = () => {
  return (
    <form className='px-4 my-3'>

        <div className='w-full relative'>
            <input className='border text-sm rounded-lg block w-full bg-[#1D232A] -text-white w-full p-3 border-slate-300'
            placeholder='Type a message'
            type="text" />
        </div>

    </form>
  )
}

export default SendInput