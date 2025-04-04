import About from "@/components/profile/about";
import ProfilePicture from '@/components/profile/profile-picture';

export default function ProfileSection() {
  return (
    <div className='flex flex-col w-full gap-5 
                    md:flex-row md:items-center md:justify-between 
                    lg:justify-between lg:h-screen
                    xl:w-[1200px]'>
      <About/>
      <ProfilePicture/>
    </div>
  )
}
