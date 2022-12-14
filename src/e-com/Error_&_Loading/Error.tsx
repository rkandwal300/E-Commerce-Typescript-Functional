import React from 'react'

const Error = () => {
  return (
    <div className=' selection:bg-red-500 selection:text-white bg-gray-100 px-[30px] py-[60px]  flex flex-col justify-center '>
        <div className='h-[340px] max-w-[1200px] bg-white flex flex-col justify-center items-center '>

            <div className='text-7xl font-semibold text-gray-800  mb-3   '> 404</div>
            <div className=' text-xl font-semibold text-red-500  '> This page doesn't seem to exist.</div>
            <div className=' text-xl font-semibold text-gray-500  '> It looks like the link pointing here was faulty. Maybe try searching?</div>
        </div>
    </div>
  )
}

export default Error