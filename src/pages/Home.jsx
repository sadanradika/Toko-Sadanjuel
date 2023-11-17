import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigasi = useNavigate();

  useEffect(()=>{
    navigasi('list')
  },[])

  return (
    <></>
  )
}

export default Home