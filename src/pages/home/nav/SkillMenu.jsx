import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const SkillMenu = () => {
  return (
    <>
        <div className='flex justify-center gap-4 pt-5 mb-7 text-white text-xs'>
            <Link to='/'>T-shirt</Link>
            <Link to='/'>Logo</Link>
            <Link to='/'>Poster</Link>
            <Link to='/'>3D Modelling</Link>
        </div>
        <Outlet></Outlet>
    </>
    
  )
}
