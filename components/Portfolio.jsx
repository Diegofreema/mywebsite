import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'


function Portfolio({portfolios}) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    whileInView={{opacity: 1}}
    transition={{
      ease: 'easeInOut',
      duration: 1}}
    className='min-h-screen bg-black/80 mb-8 '>
        <div className='relative flex items-center'>
            <h2 className='absolute text-center top-24 text-white/80 text-4xl tracking-widest right-0 left-0'>Portfolio</h2>
          
                <div className='overflow-x-scroll mt-32 lg:mt-64 w-full flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-black/80'>
                    {portfolios.map((portfolio, index) => (
                                            <div
                                                key={index}
                                                className='w-screen flex-shrink-0 snap-center
                                                flex flex-col
                                                items-center justify-center space-y-5 p-20 md:p-44'
                                            >      
                                            <motion.img
                                            initial={{
                                                y: -100,
                                                opacity: 0,
                                            }}
                                            whileInView={{opacity:1, y: 0}}
                                            transition={{
                                                ease: 'easeInOut',
                                                duration: 1,}}
                                                viewport={{once:true}}
                                            src={urlFor(portfolio.image).url()} alt="" className='sm:w-[400px] overflow-hidden w-[200px] object-cover' />
                                           
                                                <div className='space-y-6 px-0 md:px-10'><h4 className='text-white text-center text-xl font-semibold'>Case Study {index + 1} of {portfolios.length}: {portfolio.title}</h4>

                                                <p className='text-white text-lg text-center md:text-left
                                                pb-8'>{portfolio.summary}</p>
                                                </div>
                                                </div>))}

                </div>

            <div className='w-full h-[400px] top-[30%] left-0 right-0 absolute bg-yellow-500/10 -skew-y-12' />
            
        </div>

    </motion.div>
  )
}

export default Portfolio