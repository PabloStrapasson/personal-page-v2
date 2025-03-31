import Image from 'next/image'
import Button from '../button';
import ProjectTecnologie from './project-tecnologies';

interface ProjectProps {
    title: string;
    image?: string;
    description: string;
    tecnologies: string[];
    deployUrl?: string;
    repositoryUrl: string;
}

export default function Project({ title, image, description, tecnologies, deployUrl, repositoryUrl }: ProjectProps) {
  return (
    <div className='bg-[#ebebeb] shadow-md dark:bg-oxford-blue flex flex-col w-[350px] h-auto px-4 items-center justify-center rounded-lg'>
        <div className='w-full flex items-center justify-center p-2 font-bold text-[18px]'>
            <h1>{title}</h1>
        </div>
        
        <div className='flex relative w-auto h-auto justify-center items-center'>
            <Image src='/images/code2.png' width={500} height={400} alt='Project photo' className='w-full h-full'/>
            <div className='flex absolute top-0 left-0 w-full h-full items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out'>
                {tecnologies.map((tecnology: string) => (
                    <ProjectTecnologie name={tecnology} key={tecnology}/>
                ))}
            </div>
        </div>
        
        <div className='w-full h-auto py-2'>
            <p>{description}</p>
        </div>
        
        <div className='flex w-full h-auto py-2 justify-end items-center'>
            {deployUrl && (
                <Button label='Link Projeto' href={deployUrl}/>
            )}
            <Button label='Repositório' href={repositoryUrl}/>
        </div>
    </div>
  )
}
