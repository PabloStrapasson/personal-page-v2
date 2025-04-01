import Link from "next/link";

export default function MenuContentMobile() {
  return (
    <nav className='flex flex-col text-[14px]'>
      <Link href='/#projects' 
            className='py-2 border-b-[0.5px] border-b-onyx'
      > Projetos &raquo; 
      </Link>
                
      <Link href='/#certifications' 
            className='py-2 border-b-[0.5px] border-b-onyx'
      > Certificações &raquo; 
      </Link>
                
      <Link href='/docs/Curriculo_Pablo_Strapasson.pdf' 
            download='Curriculo_Pablo_Strapasson' 
            className='py-2 text-menu-sm md:text-menu-md lg:text-menu-lg'
      > Download CV &raquo; 
      </Link>
    </nav>
  )
}