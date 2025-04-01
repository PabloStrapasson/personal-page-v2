import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

interface CertificationProps {
  title: string;
  workload: number;
  conclusion_date: Date;
  description: string;
  certificate_link: string;
}

export default function CertificationLg({ title, workload, conclusion_date, description, certificate_link }: CertificationProps) {
  return (
    <div className='bg-[#ebebeb] shadow-md dark:bg-oxford-blue flex w-[600px] h-auto px-4 items-center justify-center rounded-lg'>
            
        <div className='flex relative w-[30%] h-auto justify-center items-center'>
            <Link href={certificate_link} target='_blank' >
                <Image src={'/certificates/certificate.png'} width={500} height={400} alt='Certificate' className='w-full h-full'/>
            </Link>
        </div>

        <div className='block pl-4 w-[70%]'>
            <div className='w-full flex items-center py-2 font-bold text-[14px] md:text-[16px] lg:text-[18px]'>
                <h1>{title}</h1>
            </div>
                
            <div className='w-full h-[120px] py-2 
                            md:h-[100px]'>
                <p className='text-justify text-[14px] lg:text-[16px]'>{description}</p>
            </div>
                
            <div className='flex w-full h-auto py-2 justify-end items-center'>
                <Button label='Certificado' href={certificate_link}/>
            </div>
        </div>
 
    </div>
  )
}
