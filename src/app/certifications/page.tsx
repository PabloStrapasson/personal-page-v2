import React from 'react'

type Certification = {
  id: string;
  name: string;
  workload: number;
  conclusion_date: Date;
  description: string;
  certificate_link: string;
}

async function getCertifications() {
  const response = await fetch(`${process.env.BASE_URL}/api/certifications`, { method: 'GET' })
  const certifications = await response.json();
  console.log('result:', certifications)
  return certifications
}

export default async function Certifications() {

  const certifications = await getCertifications()
  
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 px-2 pb-20 gap-12 md:pt-28 lg:px-20 lg:py-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start snap-y snap-mandatory">
        
        <section id='my_certifications' className='snap-start w-full flex flex-col justify-center'>
          <h1> Certifications </h1>
          <ul>
            {certifications.map((certification: Certification) => (
              <li key={certification.id}>{certification.name}</li>
            ))}
          </ul>
        </section>
            
      </main>
          
    </div>
  )
}