import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'



export default function About({pageInfo}) {
  return (
    <div className='min-h-screen w-full bg-black/80  sm:mb-0 mb-10  py-10'>

        <div className=' max-w-7xl mx-auto'>

        <h1 className='text-5xl mb-16 text-center text-gray-500 underline'>ABOUT</h1>
    <motion.div
    
    className='grid sm:grid-cols-2 grid-cols-1 px-6 place-items-center gap-8'>
        <motion.div
        initial={{
            x: -100,
            opacity: 0,
            scale: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className="left">
            <img 
            src={urlFor(pageInfo[0].profileImage).url()}
            className='md:w-full lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] rounded-full sm:rounded-lg    object-cover rounded-xl'
            />
        </motion.div>
        <motion.div
        initial={{
            x: 100,
            opacity: 0,
            scale: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className="right">
            <p className='text-white'>
               {pageInfo[0].backgroundInformation}
            </p>
        </motion.div>
    </motion.div>
        </div>


    </div>
  )
}