import Image from "next/image";
import Dune from "../../public/Dune.svg";
import Sayi from "../../public/1984.svg";
import Ikigai from "../../public/Ikigai.svg";
import Metafizik from "../../public/Metafizik.svg";
import Romeo from "../../public/Romeo.svg";
import Olagan from "../../public/Olagan.svg";
import Genc from "../../public/Genc.svg";
import Zaman from "../../public/Zaman.svg";
import Link from "next/link";


export default function HomeBooks() {
  return (
    <div className="mt-10">
      <div className="flex justify-between mr-16">
      <Link href='/categoryBest'>

      <h1 className="ml-12 font-medium text-3xl">Best Seller</h1>
      </Link>
      <Link href='/categoryBest'>
      <h2 className="mt-2 text-orange-400 text-lg font-semibold">View All</h2>
      </Link>
      </div>
      <div className="flex justify-between mt-10 mx-12">
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Link href='/bookDetail'>
            <Image src={Dune} alt="Dune" />
            </Link>
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Dune</h3>
                <p className="text-sm">Frank Herbert</p>
              </div>
              <div className="purple text-lg font-medium">
                $87.75
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Sayi} alt="1984" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">1984</h3>
                <p className="text-sm">George Orwel</p>
              </div>
              <div className="purple text-lg font-medium">
                $65.50
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Ikigai} alt="Ikigai" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Ikigai</h3>
                <p className="text-sm">Hector Garcia</p>
              </div>
              <div className="purple text-lg font-medium">
                $55.25
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Metafizik} alt="Metafizik" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Metafizik</h3>
                <p className="text-sm">Aristoteles</p>
              </div>
              <div className="purple text-lg font-medium">
                $42.00
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 mb-14">
      <div className="flex justify-between mr-16">
      <Link href='/categoryClassics'>
      <h1 className="ml-12 font-medium text-3xl">Classics</h1>
      </Link>
      <Link href='/categoryBest'>
      <h2 className="mt-2 text-orange-400 text-lg font-semibold">View All</h2>
      </Link>
      </div>
      <div className="flex justify-between mt-10 mx-12">
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Romeo} alt="Romeo" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Rome ve Juliet</h3>
                <p className="text-sm">William Shakespeare</p>
              </div>
              <div className="purple text-lg font-medium">
                $87.75
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Olagan} alt="Olagan" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Olağanüstü Bir Gece</h3>
                <p className="text-sm">Stefan Zweig</p>
              </div>
              <div className="purple text-lg font-medium">
                $65.50
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Genc} alt="Genc" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Genç Wertherin Acıları</h3>
                <p className="text-sm">Gothe</p>
              </div>
              <div className="purple text-lg font-medium">
                $55.25
              </div>
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="relative whitetone rounded-sm border">
            <Image src={Zaman} alt="Zaman" />
            <div className="absolute inset-0 flex flex-col items-start ml-32 justify-between px-4 pb-3">
              <div className="text-left">
                <h3 className="text-xl font-medium mb-1">Zaman Makinesi</h3>
                <p className="text-sm">H.G. Wells</p>
              </div>
              <div className="purple text-lg font-medium">
                $42.00
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
}
