import React from 'react'

interface ProjectTecnologieProps {
    name: string
}

export default function ProjectTecnologie({ name }: ProjectTecnologieProps) {
  return (
    <div className='w-auto h-5 m-0.5 p-1 rounded-md bg-charcoal text-sea-salt font-mono text-center text-[8px]
                    md:m-1 md:h-6 md:text-[10px]
                    lg:p-2 lg:h-9 lg:text-[14px]'>
        <h1>{name}</h1>
    </div>
  )
}
