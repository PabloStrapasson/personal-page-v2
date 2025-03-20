import ProfileSection from "@/components/sections/profile-section";
import TecnologiesSection from '@/components/sections/tecnologies-section';

export default function Home() {
  return (
    // grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen py-8 px-2 lg:px-20 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)]
    <div className="flex items-center justify-center min-h-screen pt-20 px-2 pb-20 gap-12 md:pt-28 lg:px-20 lg:py-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start snap-y snap-mandatory">
        
        <section id='about_me' className='snap-start w-full flex justify-center'>
          <ProfileSection/>
        </section>

        <section id='my_stack' className='snap-start w-full'>
          <TecnologiesSection/>
        </section>

        <section id='my_projects' className='snap-start w-full'>
          <ProfileSection/>
        </section>

        <section id='my_certifications' className='snap-start w-full'>
          <ProfileSection/>
        </section>
        
      </main>
      
    </div>
  );
}
