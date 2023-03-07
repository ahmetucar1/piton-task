import Image from 'next/image';
import Logo from '../../public/Logo-small.svg';
import { IoPersonOutline, IoHeartOutline, IoBasketOutline, IoSearchOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Header() {
 

  return (
    <>

      <header className="sticky mt-3 z-10 bg-white shadow-lg">
    <div className="flex items-center justify-between p-4 ml-4">
      <div>
        <Link href='/home'>
        <Image src={Logo} alt="Logo picture" width={60} height={39} />
        </Link>
      </div>
      <div className="relative flex items-center">
        <input
          className="py-3 pl-10 pr-3 inputcolor whitetone rounded-md w-800 focus:outline-none focus:shadow-outline placeholder:font-light placeholder:text-lg"
          type="text"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearchOutline className="text-gray-400 text-2xl" />
        </div>
      </div>
      <div className="flex items-center space-x-4 text-5xl mr-4">
        <IoPersonOutline className="iconcolor whitetone rounded-sm p-2" />
        <IoHeartOutline className=" iconcolor whitetone rounded-sm p-2" />
        <IoBasketOutline className="iconcolor whitetone rounded-sm p-2" />
      </div>
    </div>
  </header>
    </>
  )
}