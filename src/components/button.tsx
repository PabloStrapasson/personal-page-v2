import Link from "next/link";

interface ButtonProps {
    label: string;
    href: string;
}

export default function Button({ label, href }: ButtonProps) {
  return (
    <div className='w-auto m-2 p-2 rounded-md bg-charcoal hover:bg-charcoal/80'>
        <Link href={href} target='_blank' className='text-sea-salt text-center'>{label}</Link>
    </div>
  )
}
