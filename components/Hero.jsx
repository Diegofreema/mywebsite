import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity';



function Hero({pageInfo}) {

    const [text, count] = useTypewriter({
        words: ['Hi i am Diego Freeman ','a Web Developer', 'an App Developer', 'a Fullstack Developer', ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='px-6 mt-16 mb-6 max-w-7xl h-screen flex flex-col space-y-8 items-center relative justify-center mx-auto'>
       <img
       src={urlFor(pageInfo[0].heroImage).url()}
       alt='hero'
       className='w-64 h-64 rounded-full object-cover'
       />
          <p className='font-bold text-lg tracking-widest text-black'>{pageInfo[0].role}</p>
        <h1 className='absol bottom-0'>
        <p className='inline-block text-2xl font-semibold'>{text}</p>
        <Cursor cursorColor='#f7abba'/>

        </h1>
        <div className='space-x-2 grid sm:flex flex-row 
        items-center place-items-center gap-4'>
          <Link href='#about'>
        <button className='heroButton'>About</button>
          </Link>
          <Link href='#skill'>

        <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#services'>
        <button className='heroButton'>Services</button>

          </Link>
          <Link href='#portfolio'>
        <button className='heroButton'>Portfolio</button>

          </Link>

        </div>
     
    </div>
  )
}

export default Hero