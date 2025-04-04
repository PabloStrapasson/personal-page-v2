import Icon from "../icon";

export default function MenuContact() {
  return (
    <div className='flex items-end content-start w-auto text-sea-salt'>
      <Icon src={'icons/linkedin-white.svg'} alt={'linkedin'} href={'https://www.linkedin.com/in/pablo-strapasson/'} title={'Linkedin'}/>
      <Icon src={'icons/github-white.svg'} alt={'linkedin'} href={"https://github.com/PabloStrapasson"} title={"GitHub"}/>
      <p className='hidden md:block mx-2 lg:mx-4'>pablostrapasson98@gmail.com</p>
    </div>
  )
}
