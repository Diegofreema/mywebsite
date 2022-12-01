import React , { useRef } from 'react'

import emailjs from '@emailjs/browser';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";
import { type } from 'os';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8jwgzl9', 'template_s2wetob', form.current, 'if-vHlE3S9KGR6zxF')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='min-h-screen relative flex flex-col items-center justify-evenly max-w-7xl text-center md:text-left  mx-auto  '>
        <h3 className=' top-4 text-center left-0 right-0 text-3xl font-bold tracking-widest text-black/50'>Contact</h3>

        <div>
            <h2 className='text-black text-3xl px-3 font-semibold mb-7'>I have what you need. <span>Lets Talk</span></h2> 
            <div className='space-y-4'>
            <div className='flex flex-row items-center justify-center space-x-3'>
            <PhoneIcon className='h-7 w-7 animate-pulse '/>
            <p>08161887052</p>

            </div>
            <div className='flex flex-row items-center justify-center space-x-3'>
            <MapPinIcon className='h-7 w-7 animate-pulse '/>
            <p>Ulakwo, Owerri, Nigeria</p>
            </div>
            <div className='flex flex-row items-center justify-center space-x-3'>
            <EnvelopeIcon className='h-7 w-7 animate-pulse'/>
            <p>diegofreeman78@gmail.com</p>
            </div>
            </div>       
        </div>
        <form ref={form} onSubmit={sendEmail}  className='flex flex-col space-y-2 w-fit mx-auto px-3 mt-8'>
       
            <div className='grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-2'>
            <div className='flex flex-col'>
            <input 
              type="text"  className='contact' placeholder='Name' name='name' />
          
            </div>
            

        
          
            <div className='flex flex-col' >
            <input  
           
             type="email" className=' contact' placeholder='Email' name='email'  />
             
            </div>

            </div>
            
          
         
       


          <div className='flex flex-col'>

          <textarea   className='contact' id="" placeholder='Message' name='message' />
       
          </div>

        
       
        <input type='submit' className='bg-black py-5 px-10 rounded-md text-white font-bold cursor-pointer' value="Send"/>
    </form>

    </div>
  
  )
}

export default Contact



