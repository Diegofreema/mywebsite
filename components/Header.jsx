import React from 'react'
import {GrMail} from 'react-icons/gr'
import {motion} from 'framer-motion'
import { SocialIcon } from 'react-social-icons';
 import {FaFacebookF, FaTwitter,FaGithub} from 'react-icons/fa'
import Link from 'next/link'


function Header({socials}) {
  return (
    <div className='w-full text-white flex  flex-row bg-black/50  backdrop-blur-sm shadow-lg  items-center justify-between p-6 fixed top-0 z-50'>
        <motion.div
        initial={{
            x: -500,
            opacity: 0,
            scale: 0,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-row space-x-2'>
         {socials.map((social) => (
            <SocialIcon
            key={social._id}
            url={social.url}
                        
            />
         ))}
            
        </motion.div>
        <motion.div
         initial={{
            x: 500,
            opacity: 0,
            scale: 0,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-row item-center justify-between space-x-3'>
            <Link href='#contact' className='flex flex-row space-x-2'>
            <GrMail className='text-3xl'/>
            

            <p className='text-lg font-semibold hidden md:flex'>Get in touch</p>
            </Link>
        </motion.div>
        
    
        
    </div>
  )
}

export default Header