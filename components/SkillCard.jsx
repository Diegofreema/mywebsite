import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity'



const SkillCard = ({directionLeft, skill}) => {
  return (
    <div className='relative border   group rounded-full flex cursor-pointer overflow-hidden justify-center items-center'>
        
            <motion.img
            initial={{
              x: directionLeft ? -50 : 50,
              opacity: 0
            }}
            whileInView={{opacity: 1, x: 0}}
            transition={{
              duration: 1,
            }}
            src={urlFor(skill.image).url()}
            className=' object-cover rounded-full border-black  h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out w-16 '
            />
        
        <div className='absolute font-bold opacity-0 text-2xl bg-black/80 text-white w-full h-full rounded-full flex justify-center items-center group-hover:opacity-100 duration-300 ease-in-out transition '>{skill.progress}%</div>
    </div>
  )
}

export default SkillCard