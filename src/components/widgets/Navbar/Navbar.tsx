import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='pb-4'>
      <ul className='flex flex-row gap-2'>
        <li>
          <Link href={'/'}>
            Main
          </Link>
        </li>
        |
        <li>
          <Link href={'/about'}>
            About
          </Link>
        </li>
        |
        <li>
          <Link href={'/public'}>
            Public
          </Link>
        </li>
        |
        <li>
          <Link href={'/mui-components'}>
            MUI Components
          </Link>
        </li>
        |
        <li>
          <Link href={'/sample-form'}>
            Sample Form
          </Link>
        </li>
        |
        <li>
          <Link href={'/sample-form2'}>
            Sample Form 2
          </Link>
        </li>
        |
        <li>
          <Link href={'/login'}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}