import { useLoaderData } from 'react-router-dom'
import { OrderBtn } from '../../layout/OrderBtn'
import axios from 'axios'

export const Tshirt = () => {
  const tshirts = useLoaderData()

  return (
    <div className='flex justify-evenly text-white mt-5 flex-row flex-wrap'>
      {tshirts.map((tshirt,index) => (
        <div key={index} className='w-40 h-40 bg-transparent border border-white rounded-xl overflow-hidden mb-4 sm:flex sm:w-80'>
          <div className='bg-transparent w-full h-20 overflow-hidden flex sm:h-full sm:w-[55%]'>
            <img src={`http://localhost:4000/image/${tshirt.image}`} className='w-full object-cover'></img>
          </div>
          <div className='flex justify-between mt-2 px-3 sm:w-[45%]'>
            <div className='self-center sm:flex sm:flex-col sm:gap-2'>
              <h1 className='text-md font-semibold sm:text-xl'>{tshirt.nama_desain}</h1>
              <div className='px-2 bg-hijau bg-opacity-20 w-fit rounded-full'>
                <p className='text-[10px]'><span className='text-sm text-hijau'>Rp.{tshirt.harga}</span></p>
              </div>
              <div className='w-36 flex justify-between sm:block'>
                <p className='text-[10px] text-kuning mt-1 sm:text-[14px]'>{tshirt.nama_client}</p>
                <p className='text-[8px] bottom-1 block self-end mr-2'>{tshirt.tanggal}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <OrderBtn/>
    </div>
  )
}

export const tshirtLoader = async ()=>{
  return await axios.get('http://localhost:4000/tshirt').then((res)=>{
    return res.data;
  })
}
