interface Props {
    src: string,
    alt: string,
    href?: string,
    title: string
}

export default function Icon({ src, alt, href, title }: Props) { 
    
    return (
    <a href={href} target="_blank" className='mx-1 md:mx-1 lg:mx-4' >
        <img src={src} alt={alt} title={title} className='w-4 h-4 md:w-4.5 md:h-4 lg:w-6.5 lg:h-6'/>
    </a>
  )
}