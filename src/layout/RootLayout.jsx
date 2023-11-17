import React from 'react'
import { useEffect, useState, useRef } from 'react'
import logo from "../assets/img/logo.png"
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
    let [menu, setMenu] = useState(false)
    const menuRef = useRef(null)

    const showMenu = ()=>{
        menu ? setMenu(false) : setMenu(true)
    }

    useEffect(()=>{
        const handleKeluarMenu = (e)=>{
        if(menuRef.current && !menuRef.current.contains(e.target)){
            setMenu(false)
        }
        }
        document.addEventListener('mousedown', handleKeluarMenu)

        return()=>{
        document.removeEventListener('mousedown', handleKeluarMenu)
        }
    })

  return (
    <div>
        <header className='fixed w-full'>
            <div className={`text-white menu w-[130px] p-4 bg-secondary absolute right-2 top-4 rounded-xl flex flex-col gap-4 shadow-md shadow-black ${menu ? "visible": "invisible"}`} ref={menuRef}>
                <NavLink className="select-none" to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
            <div className='bg-secondary h-16 w-full flex align-middle justify-between px-8'>
                <div className='self-center'>
                    <img src={logo} alt="logo" className='w-40'/>
                </div>
                <div className='flex alis'>
                    <div className='self-center sm:invisible'  onClick={showMenu}>
                        <div className='bg-white w-10 h-1 rounded-full'></div>
                        <div className='bg-white w-10 h-1 rounded-full my-1'></div>
                        <div className='bg-white w-10 h-1 rounded-full'></div>
                    </div>
                    <div className='invisible absolute sm:visible sm:relative text-white flex gap-5 self-center'>
                        <NavLink className="select-none" to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                    </div>
                </div>
            </div>
        </header>
        <main className='bg-primary min-h-screen w-full font-inter text-white pt-16'>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout