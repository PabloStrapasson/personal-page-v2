import React from "react";
import Icon from "./icon";

export default function Footer() {
  return (
    <footer className='w-full h-35 bg-rich-black flex flex-col py-5 items-center justify-between text-sea-salt text-sm dark:border-t-1 dark:border-onyx
                       md:text-md md:h-40 
                       lg:text-lg lg:h-50 lg:py-6'>
      <nav className='flex flex-col justify-between w-[85%] items-start'>

        <div className='flex items-center my-1'>
          <Icon src={'icons/gmail-white.svg'} alt={'gmail'} title={'Gmail'}></Icon>
          <p>pablostrapasson98@gmail.com</p>
        </div>
        
        <div className='flex items-center my-1'>
          <Icon src={'icons/linkedin-white.svg'} alt={'linkedin'} title={'Linkedin'} href={'https://www.linkedin.com/in/pablo-strapasson/'}></Icon>
          <p>pablo-strapasson</p>
        </div>
        
        <div className='flex items-center my-1'>
          <Icon src={'icons/whatsapp-white.svg'} alt={'linkedin'} title={'Linkedin'} href={'https://wa.me/5549984384944'}></Icon>
          <p>(49) 98438-4944</p>
        </div>
      </nav>
      
      Pablo Strapasson - 2025
    </footer>
  )
}
