'use client'

import { useState } from "react";
import MenuContentMobile from "./menu-content.mobile";

export default function ButtonMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
    <>
        <button className='flex flex-col gap-1 w-5 h-5 cursor-pointer md:hidden ' 
                onClick={() => setIsOpen(!isOpen)}
                aria-label='Menu'>
            
            <svg className='w-10 h-14' stroke='currentColor' fill='none' viewBox='0 0 19 19'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
        </button>

        <div className={`absolute top-20 right-0 w-auto px-4 rounded-b-md bg-rich-black z-110 transition-all duration-500 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <MenuContentMobile/>
        </div>
    </>
  )
}
