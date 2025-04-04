import CertificationLg from "@/components/certification/certifications-lg";
import Certification from "@/components/certification/certification";

type Certification = {
  _id: string;
  name: string;
  workload: number;
  conclusion_date: Date;
  description: string;
  certificate_link: string;
}
  
async function getCertifications() {
  const response = await fetch(`${process.env.API_URL}/certification`, { method: 'GET' });
  const certifications = await response.json();
  return certifications;
}

export default async function CertificationsSection() {

  const certifications = await getCertifications()

  return (
    <div className='w-full flex flex-col justify-center items-center mb-5 md:mb-10 lg:mb-25 xl:mb-40'>
        <div className='w-full px-5 mb-5 flex md:p-5'>
            <h1 className='text-[16px] font-bold md:text-[18px] lg:text-[30px]'> Cursos e Certificações: </h1>
        </div>

        <div className='hidden
                        md:grid md:grid-cols-1 md:gap-10 
                        lg:grid-cols-1
                        xl:grid-cols-2 xl:gap-14'>
            {certifications.map((certification: Certification) => (
                <CertificationLg key={certification._id}
                                title={certification.name}
                                workload={certification.workload}
                                conclusion_date={certification.conclusion_date}
                                description={certification.description}
                                certificate_link={certification.certificate_link}
                />
            ))}
        </div>

        <div className='grid grid-cols-1 gap-4
                        md:hidden'>  
            {certifications.map((certification: Certification) => (
                <Certification key={certification._id}
                               title={certification.name}
                               workload={certification.workload}
                               conclusion_date={certification.conclusion_date}
                               description={certification.description}
                               certificate_link={certification.certificate_link}
                />
            ))}
        </div>

    </div>
  )
}
