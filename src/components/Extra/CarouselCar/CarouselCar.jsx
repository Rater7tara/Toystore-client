import React from 'react';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true );
import './CarouselCar.css';

const CarouselCar = () => {
  return (
    <div>
      

      <div
  id="carouselExampleSlidesOnly"
  className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
  {/* <!--Carousel items--> */}
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/* <!--First item--> */}
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={"https://i.ibb.co/XxP6dDn/fluffy-toy-texture-close-up.jpg"}
        className="car-img block w-full"
        alt="" />
        <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center align-middle  md:block text-white bg-purple-200 bg-opacity-50">
        <h5 className="text-6xl font-bold text-primary ">Welcome to Twinkle Twie</h5>
        <h3 className="text-lime-500 text-4xl font-bold">
          We help to 
        </h3>
        <h1 className="text-5xl font-bold text-purple-500">Grow up</h1>
        <h3 className="text-rose-500 text-4xl font-bold">Your Children</h3>
      </div>
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={"https://i.ibb.co/RH2NGkH/3704.jpg"}
        className=" car-img block w-full"
        alt="" />
        <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center align-middle  md:block text-white bg-purple-200 bg-opacity-50">
        <h5 className="text-6xl font-bold text-primary ">Welcome to Twinkle Twie</h5>
        <h3 className="text-lime-500 text-4xl font-bold">
          We help to 
        </h3>
        <h1 className="text-5xl font-bold text-purple-500">Grow up</h1>
        <h3 className="text-rose-500 text-4xl font-bold">Your Children</h3>
      </div>
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={"https://i.ibb.co/Pt3mQvP/q5qu-3mus-210818.jpg"}
        className="car-img block w-full"
        alt="" />
        <div
        className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center align-middle  md:block text-white bg-purple-200 bg-opacity-50">
        <h5 className="text-6xl font-bold text-primary ">Welcome to Twinkle Twie</h5>
        <h3 className="text-lime-500 text-4xl font-bold">
          We help to 
        </h3>
        <h1 className="text-5xl font-bold text-purple-500">Grow up</h1>
        <h3 className="text-rose-500 text-4xl font-bold">Your Children</h3>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default CarouselCar;