/* eslint-disable @next/next/no-img-element */
"use client"
import React, {useState} from 'react'
import  axios from "axios"
import {toast} from 'sonner'
import {LoaderPinwheel} from 'lucide-react'

const Hero = () => {

    const [prompt , setPrompt] = useState("")
    const [image , setImage] = useState("")
    const [loading , SetLoading] = useState(false)


    const HandleImageGeneration = async () => {
        SetLoading(true)
        const options = {
            method: 'POST',
            url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
            headers: {
              'x-rapidapi-key': 'f65522c5bcmshea97c260f086c20p10e6dcjsn6f02a95c684a',
              'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
              'Content-Type': 'application/json'
            },
            data: {
              inputs: prompt
            }
          };
          try {
            const res = await axios.request(options)
            setImage(res?.data.url)
            toast.success('Image Generated Succesfully')
          } catch (error : unknown) {
            if (axios.isAxiosError(error)&& error.response ) {
                toast.error(error.response.data.message)
            }else{
                toast.error('An unexepted error occurred')
            }
          }finally{
            setPrompt('')
            SetLoading(false)
          }
    }

    const handleDownloadImage = ()=>{
        const link = document.createElement("a")
        link.target="_blank"
        link.href=image
        link.download="generated-img.jpg"
        link.click()
    }

  return (
    <div className='w-[95%] mx-auto min-h-screen ' >

        <div className="flex flex-col items-center justify-center">
            <h1 className='capitalize text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-300  to-cyan-500 bg-clip-text text-transparent '>Create Beatiful image with <br /> Artificial Intelegence</h1>
            <p className='mt-4 text-sm md:text-base font-semibold text-center text-gray-300 '>Get started with our AI-Powered image generator tools</p>
            {/* Prompt iNput */}

        <div className="flex h-12 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 items-center justify-between ">
            <input value={prompt} onChange={(e)=>setPrompt(e.target.value)} type="text" placeholder='Generate Your Image' className=' h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base ' />
            <button onClick={HandleImageGeneration} className='bg-black hover:opacity-85 duration-200 text-white py-2 px-6 rounded-lg'>Generate</button>
        </div>
            {/* Tags */}
            <div className="flex items-center mt-6 space-x-4 flex-wrap space-y-3">
                <p className='text-lg tracking-wide font-semibold'>Popular Tags :</p>
                <button className='bg-white font-medium text-black  duration-200 hover:bg-gray-100 py-1 px-4 rounded-lg'>Creative</button>
                <button className='bg-white font-medium text-black  duration-200 hover:bg-gray-100 py-1 px-4 rounded-lg'>Animation</button>
                <button className='bg-white font-medium text-black  duration-200 hover:bg-gray-100 py-1 px-4 rounded-lg'>HyperReality</button>
                <button className='bg-white font-medium text-black  duration-200 hover:bg-gray-100 py-1 px-4 rounded-lg'>Steampunk</button>
                <button className='bg-white font-medium text-black  duration-200 hover:bg-gray-100 py-1 px-4 rounded-lg'>Business</button>
            </div>
            {/* Loading and image */}
            {loading && <div>
                <LoaderPinwheel className='animate-spin mt-6'/>
            </div> 
            }
            {image && <div  className='mt-8 flex flex-col items-center'>
                <img src={image} loading='lazy' alt="image generated" className='max-w-full h-[500px] rounded-lg shadow-lg ' />
                <button onClick={handleDownloadImage} className='my-4 bg-orange-500 py-1 px-4 hover:opacity-80' >Download</button>
            </div> }
        </div>
    </div>
  )
}

export default Hero
