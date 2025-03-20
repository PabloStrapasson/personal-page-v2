export default function TecnologiesSection() {
    return (
      <div className='flex flex-col m-5 justify-between text-[16px] 
                        md:grid md:grid-cols-2 md:items-center md:text-[18px]
                        lg:flex lg:flex-row lg:justify-center lg:h-screen
                        xl:w-[1200px]'>
          
          <div className='w-full mb-3
                          md:h-full md:mb-0
                          lg:w-[50%] lg:h-[50%] lg:items-end'>
            
            <h2 className='text-[14px] md:text-[18px] md:font-bold lg:text-[30px] lg:font-bold'> Essas são as principais tecnologias com que trabalho: </h2>
          </div>
          
          <div className='h-full w-full flex gap-5 justify-center items-center text-[12px]
                          md:text-[14px]
                          lg:w-[50%] lg:h-[50%] lg:text-[26px] lg:gap-10'>
            
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
      </div>
    )
}