import Image from "next/image";

export default function ProfilePicture() {
    return (
      <div className='flex justify-center'>
          <Image width={500} height={500} src='/images/profile-photo.png' alt='Profile picture' className='rounded-full w-[180px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]'/>
      </div>
    )
}