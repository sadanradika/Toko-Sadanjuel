import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Add_list = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [namaDesain, setNamaDesain] = useState("");
    const [pemesan, setPemesan] = useState("");
    const [tanggal, SetTanggal] = useState("");
    const [harga, setHarga] = useState(0);

    const navigasi = useNavigate();

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if(selectedFile){
            setSelectedImage(event.target.files[0]);
        }

        if (selectedFile) {
          // Read the selected file as a data URL
          const reader = new FileReader();
          reader.onload = (e) => {
            setImagePreview(e.target.result);
          };
          reader.readAsDataURL(selectedFile);
        }
        console.log(selectedFile);
    };

    const handleOnSubit = async (e) =>{
        
        e.preventDefault()
        let formData = new FormData()
        formData.append('image', selectedImage)

        let generatedImage = "";

        await axios.post('http://localhost:4000/image', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then((res)=>{
            generatedImage = res.data.originalImageName
        })
        .catch((error)=>console.log(error.message))

        const data = {
            nama_desain: namaDesain,
            tanggal: tanggal,
            harga: harga,
            nama_client: pemesan,
            image : generatedImage
        }

        if(generatedImage){
            await axios.post('http://localhost:4000/tshirt', data)
            .then((res)=>console.log(res.data))
            .catch((error)=>console.log(error))
        }
    }

  return (
    <div className='bg-primary min-h-screen px-5 py-10 text-white'>
        <form className='flex flex-col gap-6' onSubmit={handleOnSubit}>
            <div className='flex flex-col'>
                <label htmlFor='nama_desain'>Nama Desain :</label>
                <input 
                    type="text" 
                    name="nama_desain" 
                    id="nama_desain" 
                    required
                    autoComplete='off'
                    onChange={(e)=>{
                        setNamaDesain(e.target.value)
                    }} 
                    className='bg-transparent border-solid border-b-2 w-[80%] mt-3 pb-2 focus:outline-none placeholder:text-slate-500' placeholder='input here' />
            </div>
            <div className='flex flex-col'>
                <label>Pemesan :</label>
                <input 
                    type="text" 
                    name="pemesan" 
                    id="pemesan" 
                    required
                    autoComplete='off'
                    onChange={(e)=> setPemesan(e.target.value)} 
                    className='bg-transparent border-solid border-b-2 w-[80%] mt-3 pb-2 focus:outline-none placeholder:text-slate-500' placeholder='input here' />
            </div>
            <div className='flex flex-col gap-3'>
                <label>Harga :</label>
                <div className='bg-white w-[60%] rounded-md flex justify-between h-8'>
                    <p className='text-secondary text-center block ml-2 self-center'>Rp</p>
                    <input 
                        type="text" 
                        name="harga" 
                        id="harga" 
                        required
                        autoComplete='off'
                        onChange={(e)=> setHarga(e.target.value)} 
                        className='w-[80%] bg-slate-600 rounded-md px-3 focus:outline-none' />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <label>Tanggal :</label>
                <input 
                    type="date" 
                    name="tanggal" 
                    id="tanggal" 
                    required
                    autoComplete='off'
                    onChange={(e)=> SetTanggal(e.target.value)} 
                    className='bg-slate-600 h-8 rounded-md px-3 w-[60%] placeholder:text-slate-500 focus:outline-none' placeholder='pick'/>
            </div>
            <label className="block text-gray-500 font-bold">Upload a file:</label>
            <div className="relative rounded-md border-2 border-dashed border-gray-300 p-4">
                <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept="image/*" // Accepts only image files
                    required
                    onChange={handleFileChange}
                 />
                    <div className="flex flex-col items-center justify-center">
                        <svg
                        className="w-12 h-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7v7m0 0l4-4m-4 4l-4-4m7 7h7"
                            />
                        </svg>
                        <span className="text-gray-600">Choose a file</span>
                    </div>
                    {selectedImage && (
                        <div className='mt-4 rounded-md overflow-hidden'>
                            <img src={imagePreview} alt="Selected Image" />
                        </div>
                    )}
            </div>
            <button type='submit' name='submit' className='bg-hijau w-[80%] m-auto rounded-md h-8 mt-4 text-primary shadow-lg shadow-secondary'>Buat</button>
        </form>
    </div>
  )
}
