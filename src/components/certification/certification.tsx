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

export default function Certification({ title, workload, conclusion_date, description, certificate_link }: CertificationProps) {
  return (
    <div className='w-[250px] h-auto bg-[#ebebeb] shadow-md dark:bg-oxford-blue block p-4 items-center justify-center rounded-lg 
                    md:w-[250px] 
                    lg:w-[350px]'>
            
        <div className='flex relative w-auto h-auto justify-center items-center'>
            <Link href={certificate_link} target='_blank' >
                <Image src={'/certificates/certificate.png'} width={500} height={400} alt='Certificate' className='w-full h-full'/>
            </Link>
        </div>
            
        <div className='w-full flex items-center justify-center p-2 font-bold text-[14px]'>
            <h1 className='text-center'>{title}</h1>
        </div>
            
        <div className='w-full h-[160px] py-2'>
            <p className='text-justify text-[14px]'>{description}</p>
        </div>
            
        <div className='flex w-full h-auto justify-end items-center'>
            <Button label='Certificado' href={certificate_link}/>
        </div>
    </div>
  )
}
