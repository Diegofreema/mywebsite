import React from 'react'
import SkillCard from './SkillCard'
import {motion} from 'framer-motion'



const Skill = ({skills}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{
      duration: 1.5,
    }}
    className='max-w-7xl mx-auto min-h-screen mb-5 flex flex-col items-center justify-center relative'>
        <div className='text-center space-y-3 mb-16  top-8'>
            <h1 className='text-3xl text-center underline underline-offset-8 text-gray-500 tracking-widest md:text-5xl '>SKILLS</h1>
            <p className='font-semibold px-6'>hover over each skill to see my knowledge percentage on each skill</p>
        </div>

        <div className='px-6 grid md:flex-row md:flex md:flex-wrap  grid-cols-3 place-items-center gap-4 '>
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
            
          ))}
          {skills?.slice(skills.length/ 2 , skills.length).map((skill) => (
            <SkillCard key={skill._id} skill={skill} directionLeft/>
            
          ))}
        

        </div>
    </motion.div>
  )
}

export default Skill