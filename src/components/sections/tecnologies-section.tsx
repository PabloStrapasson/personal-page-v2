import Image from "next/image";

export default function TecnologiesSection() {
    return (
      <div className='flex flex-col m-5 justify-between text-[16px] 
                      md:text-[18px]
                      lg:flex lg:flex-col lg:justify-center lg:h-[600px]
                      xl:w-[1200px]'>
          
          <div className='w-full mb-3 
                          md:h-full md:mb-5
                          lg:w-full lg:h-auto'>
                            
            <h2 className='text-[16px] font-bold md:text-[18px] lg:text-[30px]'> Essas são as principais tecnologias com que trabalho: </h2>
          </div>
          
          <div className='h-full w-full flex flex-col gap-5 justify-center items-center text-[14px] 
                          md:text-[16px] md:justify-start md:flex-row
                          lg:w-full lg:h-auto lg:justify-between lg:text-[26px] lg:gap-10 lg:mx-5 lg:my-10'>
            
            <div className='flex gap-5 lg:gap-10'>
              <ul className='font-mono list-none space-y-2'>
                  <li className='before:content-["-"] before:mr-2'>JavaScript</li>
                  <li className='before:content-["-"] before:mr-2'>TypeScript</li>
                  <li className='before:content-["-"] before:mr-2'>Node.js</li>
                  <li className='before:content-["-"] before:mr-2'>Nest.js</li>
                  <li className='before:content-["-"] before:mr-2'>Next.js</li>
                  <li className='before:content-["-"] before:mr-2'>Git</li>
              </ul>
              <ul className='font-mono list-none space-y-2'>
                  <li className='before:content-["-"] before:mr-2'>Python</li>
                  <li className='before:content-["-"] before:mr-2'>Django</li>
                  <li className='before:content-["-"] before:mr-2'>PostgreSQL</li>
                  <li className='before:content-["-"] before:mr-2'>MySQL</li>
                  <li className='before:content-["-"] before:mr-2'>MongoDB</li>
                  <li className='before:content-["-"] before:mr-2'>Docker</li>
              </ul>  
            </div>

            <div className='flex items-center justify-center md:w-[300px] lg:w-[350px] xl:w-[500px]'>
              <Image src='/images/coding.png' width={500} height={500} alt='Stack'/>
              {/* <Image src='/images/notebook.png' width={500} height={500} alt='Stack'/> */}
            </div>

          </div>
      </div>
    )
}