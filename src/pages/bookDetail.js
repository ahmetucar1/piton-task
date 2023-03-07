import Header from '../components/Header'
import Image from "next/image";
import Dune from "../../public/Dune.svg";
import { IoArrowBack, IoHeartOutline } from 'react-icons/io5';
import Link from "next/link";


export default function HomeBooks() {
  return (
   
    <>
    <Header></Header>
    <div className="flex justify-between mr-16 mt-14">
      <Link href='/categoryBest'>
      <div>
      <h1 className="ml-20 font-medium text-3xl">Book Details</h1>
      <IoArrowBack className='absolute left-14 top-40'/>
      </div>
      </Link>
      </div>
      <div className='flex'>
      <div className="w-60 mt-5 ml-14">
        <div className="flex justify-center whitetone rounded-sm border">
          <Image src={Dune} width={2500} height={350} alt="Dune" />
            <div className="mt-14">
            </div>
          </div>
        </div>
        <div className='w-1/2 h-full flex ml-20 mt-4 justify-between'>
            <div className='block'>
            <b className='font-normal text-xl'>Dune</b> <br />
            <p className='text-base text-gray-500' >Frank Herbert</p>
            <div className='mt-14'>
                <b>Summary</b>
                <p className='text-sm mt-2 text-gray-400'>Dune is set in the distant future amidst a feudal 
                interstellar society in which various noble houses control planetary fiefs. It tells the story 
                of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the 
                planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, 
                or spice, a drug that extends life and enhances mental abilities. Melange is also necessary for space 
                navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. 
                As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. 
                The story explores the multilayered interactions of politics, religion, ecology, technology, and human emotion, 
                as the factions of the empire confront each other in a struggle for the control of Arrakis and its spice.</p>
            </div>
            </div>
            <div>
            <IoHeartOutline className="text-4xl iconcolor whitetone rounded-sm p-2" />
            </div>
            <div className="bottom-0 text-end mb-5 right-0 mr-80 ml-40 p-2 gap-2 w-96 h-14 absolute rounded-md font-light text-white text-xl"
            style={{ background: '#EF6B4A' }}>
            <div className="flex justify-between">
                <div className='justify-end'>
                 87,75 $
                </div>
                <div>
                 Buy Now
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
    
  );
}
