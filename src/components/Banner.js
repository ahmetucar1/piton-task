import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Bannerr from "../../public/Banner.svg";
import Bannerr2 from "../../public/Banner.svg";
import Bannerr3 from "../../public/Banner.svg";

export default function Banner() {
  return (
    <div className="relative carousel-wrapper mt-10 mr-14 ml-14">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        stopOnHover={false}
        showArrows={false}
        showIndicators={true}
        renderIndicator={(clickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <button
                className="w-3 h-3 rounded-full indicators opacity-100 mx-1"
                onClick={clickHandler}
              />
            );
          }
          return (
            <button
              className="w-3 h-3  rounded-full bg-black opacity-50 mx-1"
              onClick={clickHandler}
            />
          );
        }}
      >
        <div className="mb-10">
        <div className="absolute top-0 left-14 bottom-0 flex justify-center items-center">
      <div className="font-semibold text-5xl">
      <h2 className="titlecolor">25% discount</h2> 
      <h2 className="pt-4 text-white">all Paulo Coelho</h2>
      <h2 className="pt-4 text-white">books!</h2>
      </div>
    </div>
          <Image src={Bannerr} alt="Image 1" />
        </div>
        <div>
          <Image src={Bannerr2} alt="Image 2" />
        </div>
        <div>
          <Image src={Bannerr3} alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
}
