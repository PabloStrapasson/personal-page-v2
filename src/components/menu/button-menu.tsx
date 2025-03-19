'use client'

import { useState } from "react";
import MenuContent from "./menu-content";

export default function ButtonMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
    <>
        <button className='flex flex-col gap-1 w-5 h-5 cursor-pointer lg:hidden ' 
                onClick={() => setIsOpen(!isOpen)}
                aria-label='Menu'>
            <div className='w-full h-0.5 bg-sea-salt'></div>
            <div className='w-full h-0.5 bg-sea-salt'></div>
            <div className='w-full h-0.5 bg-sea-salt'></div>
        </button>

        <div className={`absolute top-20 left-0 w-full bg-rich-black transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <MenuContent/>
        </div>
    </>
  )
}
