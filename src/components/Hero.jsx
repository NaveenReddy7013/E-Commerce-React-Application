import React from "react";
import Slider from "react-slick";
import { assets } from "../assets/assets";

const heroSlides = [
  {
    id: 1,
    title: "Latest Arrivals",
    subtitle: "Best Sellers",
    img: assets.hero_img,
    bgColor: "bg-pink-100",
  },
  {
    id: 2,
    title: "Summer Collection",
    subtitle: "Hot Picks",
    img: assets.hero_img, // Add another image in your assets
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Winter Essentials",
    subtitle: "New Season",
    img: assets.hero_img, // Add another image
    bgColor: "bg-blue-100",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="border border-gray-300 overflow-hidden">
      <Slider {...settings}>
        {heroSlides.map((slide) => (
          <div key={slide.id}>
            <div className={`flex flex-col sm:flex-row ${slide.bgColor}`}>
              {/* Left Side */}
              <div className="w-full sm:w-1/2 flex items-center justify-center py-10 px-6 sm:py-0">
                <div className="prata-regular text-[#414141]">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">
                      {slide.subtitle}
                    </p>
                  </div>
                  <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-bold">
                    {slide.title}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 cursor-pointer hover:text-orange-600 transition">
                    <p className="font-semibold text-sm md:text-base">
                      Shop Now
                    </p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <img
                src={slide.img}
                className="w-full sm:w-1/2 object-cover"
                alt={slide.title}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
