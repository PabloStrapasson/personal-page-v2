import Link from "next/link";

export default function MenuContent() {
  return (
    <nav className='hidden md:flex'>
      <Link href='/#my_projects' 
            className='mr-1.5 md:mr-5 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-sea-salt after:transition-[width] after:ease-in-out after:duration-300 hover:after:w-full'
      > Projetos &raquo; 
      </Link>
                
      <Link href='/#my_certifications' 
            className='mr-1.5 md:mr-5 relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-sea-salt after:transition-[width] after:ease-in-out after:duration-300 hover:after:w-full'
      > Certificações &raquo; 
      </Link>
                
      <Link href='/docs/Curriculo_Pablo_Strapasson.pdf' 
            download='Curriculo_Pablo_Strapasson' 
            className='mr-1.5 md:mr-5 text-menu-sm md:text-menu-md lg:text-menu-lg relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-sea-salt after:transition-[width] after:ease-in-out after:duration-300 hover:after:w-full'
      > Download CV &raquo; 
      </Link>
    </nav>
  )
}