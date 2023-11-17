import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const Admin = () => {

    const adminTshirts = useLoaderData();

  return (
    <div className='p-3 bg-primary min-h-screen flex flex-col'>
        <Link to='/addlist' className='bg-blue-600 text-white w-20 text-lg rounded-md text-center px-4 py-2'>Add</Link>
        {adminTshirts.map(tshirt => (
            <div className='bg-slate-500 w-full rounded-lg p-2 flex text-white gap-3 mt-3'>
                <div className='w-36 overflow-hidden h-full rounded-md align-middle'>
                    <img src={`http://localhost:4000/image/${tshirt.image}`} alt="img" className='self-center' />
                </div>
                <div className='flex gap-5 w-full justify-between'>
                    <div className='w-36'>
                        <h2 className='font-semibold text-xl'>{tshirt.nama_desain}</h2>
                        <h3>{tshirt.nama_client}</h3>
                    </div>
                    <div className='flex flex-col justify-end w-20 gap-2'>
                        <button className='bg-orange-500 p-1 w-full rounded-md self-end
                        '>Edit</ button>
                        <button className='bg-red-600 p-1 w-full rounded-md'>Delete</ button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export const adminListLoader = async ()=>{
    return await axios.get('http://localhost:4000/tshirt').then((res)=>{
        return res.data
    })
} 