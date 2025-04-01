import Certification from '@/components/certification/certification';
import Certification2 from '@/components/certification/certifications-lg';

type Certification = {
  _id: string;
  name: string;
  workload: number;
  conclusion_date: Date;
  description: string;
  certificate_link: string;
}

async function getCertifications() {
  const response = await fetch(`${process.env.BASE_URL}/api/certifications`, { method: 'GET' });
  const certifications = await response.json();
  return certifications;
}

export default async function Certifications() {

  const certifications = await getCertifications()
  
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 px-2 pb-20 gap-12 md:pt-28 lg:px-20 lg:py-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start snap-y snap-mandatory">
        
        <section id='my_certifications' className='snap-start w-full flex flex-col justify-center items-center'>
          <h1> Certifications </h1>
          <ul>
            {certifications.map((certification: Certification) => (
              <li key={certification._id}>{certification.name}</li>
            ))}
          </ul>
          <br />

          <div className='grid grid-cols-1 gap-4
                          lg:grid-cols-2
                          xl:grid-cols-3'>  
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

          <br />

          <div className='grid grid-cols-1 gap-4 
                          lg:grid-cols-1
                          xl:grid-cols-2'>
            {certifications.map((certification: Certification) => (
              <Certification2 key={certification._id}
                       title={certification.name}
                       workload={certification.workload}
                       conclusion_date={certification.conclusion_date}
                       description={certification.description}
                       certificate_link={certification.certificate_link}
              />
             ))}
          </div>
        
        </section>
            
      </main>
          
    </div>
  )
}