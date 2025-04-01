import Image from 'next/image'
import Button from '@/components/button';
import ProjectTecnologie from '@/components/project/project-tecnologies';

interface ProjectProps {
    title: string;
    description: string;
    tecnologies: string[];
    deployUrl?: string;
    repositoryUrl: string;
    image_name: string;
}

export default function Project({ title, image_name, description, tecnologies, deployUrl, repositoryUrl }: ProjectProps) {
  return (
    <div className='w-[250px] h-auto bg-[#ebebeb] shadow-md dark:bg-oxford-blue block px-4 items-center justify-center rounded-lg
                    lg:w-[350px]'>
        <div className='w-full flex items-center justify-center p-2 font-bold text-[14px]
                        md:text-[16px]
                        lg:text-[18px]'>
            <h1>{title}</h1>
        </div>
        
        <div className='flex relative w-auto h-auto justify-center items-center'>
            <Image src={`/projects-images/${image_name}.png`} width={500} height={400} alt='Project photo' className='w-full h-full'/>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out'>
                <div className='w-full flex flex-wrap items-center justify-center'>

                    {tecnologies.map((tecnology: string) => (
                        <ProjectTecnologie name={tecnology} key={tecnology}/>
                    ))}
                </div>
                
            </div>
        </div>
        
        <div className='w-full h-[190px] py-2'>
            <p className='text-justify text-[14px] lg:text-[16px]'>{description}</p>
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
