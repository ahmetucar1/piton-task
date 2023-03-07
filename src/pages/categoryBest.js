import Header from '../components/Header'
import Image from "next/image";
import Dune from "../../public/Dune.svg";
import Sayi from "../../public/1984.svg";
import Ikigai from "../../public/Ikigai.svg";
import Metafizik from "../../public/Metafizik.svg";
import Romeo from "../../public/Romeo.svg";
import Olagan from "../../public/Olagan.svg";
import Genc from "../../public/Genc.svg";
import Zaman from "../../public/Zaman.svg";
import { IoArrowBack } from 'react-icons/io5';
import Link from "next/link";


export default function CategoryBest() {
  return (
    <>
    <Header></Header>
    <div className="mt-10">
      <div className="flex justify-between mr-16">
      <Link href='/home'>
      <div>
      <h1 className="ml-20 font-medium text-3xl">Best Seller</h1>
      <IoArrowBack className='absolute left-14 top-36'/>
      </div>
      </Link>
      </div>

      <div className="flex justify-between mt-10 mx-12">
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
          <Link href='/bookDetail'>
          <Image src={Dune} width={200} height={300} alt="Dune" />
          </Link>
            <div className="mt-14">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Dune</h3>
                <p className="text-xs">Frank Herbert</p>
              </div>
              <div className="purple text-base font-medium">
                $87.75
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Sayi} width={200} height={300} alt="Sayi" />
            <div className="mt-14">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">1984</h3>
                <p className="text-xs">George Orwel</p>
              </div>
              <div className="purple text-base font-medium">
                $77.75
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Ikigai} width={200} height={300} alt="Ikigai" />
            <div className="mt-14">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Ikigai</h3>
                <p className="text-xs">Hector Garcia</p>
              </div>
              <div className="purple text-base font-medium">
                $87.75
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Metafizik} width={200} height={300} alt="Metafizik" />
            <div className="mt-14">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Metafizik</h3>
                <p className="text-xs">Aristoteles</p>
              </div>
              <div className="purple text-base font-medium">
                $87.75
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-14">
      <div className="flex justify-between mt-10 mx-12">
      <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Romeo} width={200} height={300} alt="Romeo" />
            <div className="mt-16">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Romeo ve Juliet</h3>
                <p className="text-xs">William Shakespeare</p>
              </div>
              <div className="purple text-base font-medium">
                $47.75
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Olagan} width={200} height={300} alt="Olagan" />
            <div className="mt-16">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Olağanüstü Bir Gece</h3>
                <p className="text-xs">Stefan Zweig</p>
              </div>
              <div className="purple text-base font-medium">
                $64.75
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Genc} width={200} height={300} alt="Genc" />
            <div className="mt-16">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Genc Wertherin Acıları</h3>
                <p className="text-xs">Gothe</p>
              </div>
              <div className="purple text-base font-medium">
                $27.75
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="w-72">
        <div className="relative whitetone rounded-sm border">
            <Image src={Zaman} width={200} height={300} alt="Zaman" />
            <div className="mt-16">
            <div className="absolute bottom-0 left-0 w-full py-4 px-1 flex justify-between">
              <div>
                <h3 className="text-base font-medium mb-1">Zaman Makinesi</h3>
                <p className="text-xs">H.G. Wells</p>
              </div>
              <div className="purple text-base font-medium">
                $13.75
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
