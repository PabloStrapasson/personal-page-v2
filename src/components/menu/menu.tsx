import MenuContent from "@/components/menu/menu-content";
import MenuContact from "@/components/menu/menu-contact";
import ButtonMenu from "@/components/menu/menu-button";

export default function Menu() { 
  
  return (
      <header className='fixed top-0 left-0 w-screen h-20 z-100 border-b bg-rich-black'>
          <nav className='w-full h-full ml-1 mr-1 py-5 px-10 md:px-16 lg:px-30 flex items-end justify-between text-sea-salt text-sm md:text-md lg:text-lg'>

            <MenuContent/>
              
            <MenuContact/>

            <ButtonMenu/>

          </nav>
      </header>
    )
}
  