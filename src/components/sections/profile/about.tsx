export default function About() {
    return (
      <div className='m-5 text-[16px] md:text-[18px] md:w-[50%] lg:text-[30px] '>
          
          <h2 className='font-bold text-[18px] md:text-[22px] lg:text-[40px]'> Bem vindo(a)! </h2>
          <h2 className='font-bold'> me chamo Pablo, </h2>
          <h2 className='font-bold'> e sou </h2>
          <h1 className='font-bold text-[26px] md:text-[30px] lg:text-[50px]'>Desenvolvedor Web</h1>
          {/* animação de digitando em caixa de texto 
          <div className='w-[18.75rem] px-2 border-4 border-blue rounded-sm my-3'>
            <h1 className='text-[26px] font-bold font-mono animate-typing'>Desenvolvedor Web</h1>
          </div> 
          */}
          
          <p className='my-4 text-[13px] md:text-[16px] lg:text-[20px]'> Sou Bacharel em Ciências da Computação pela Universidade Federal de Santa Catarina e sou apaixonado por desenvolvimento web. Este é meu site pessoal e aqui você poderá conhecer um pouco mais sobre mim e os projetos que já desenvolvi!</p>
      </div>
    )
}