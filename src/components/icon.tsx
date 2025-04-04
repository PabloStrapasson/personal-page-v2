import Image from "next/image"

interface Props {
    src: string,
    alt: string,
    href?: string,
    title: string
}

export default function Icon({ src, alt, href, title }: Props) { 
    
    return (
    <a href={href} target="_blank" className='mx-1 md:mx-1 lg:mx-4' >
        <Image src={src} alt={alt} title={title} width={50} height={50} className='w-6 h-6 md:w-6 md:h-6 lg:w-6.5 lg:h-6'/>
    </a>
  )
}