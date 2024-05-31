import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Jude from '../../assets/images/testimonial/Jude.png';

const data = [
  {
    scr: Jude,
    name: 'John Ajayi',
    comment:
      'Selenia is swift and reliable. Having my mobile number as my wallet address makes it easier',
  },
  {
    scr: Jude,
    name: 'John Ajayi',
    comment:
      'Selenia is swift and reliable. Having my mobile number as my wallet address makes it easier',
  },
  {
    scr: Jude,
    name: 'John Ajayi',
    comment:
      'Selenia is swift and reliable. Having my mobile number as my wallet address makes it easier',
  },
  {
    scr: Jude,
    name: 'John Ajayi',
    comment:
      'Selenia is swift and reliable. Having my mobile number as my wallet address makes it easier',
  },
  {
    scr: Jude,
    name: 'John Ajayi',
    comment:
      'Selenia is swift and reliable. Having my mobile number as my wallet address makes it easier',
  },
];

const Hometestimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="px-[10rem] py-[3rem] mt-[3rem] bg-primary-Selenia90">
      <Slider {...settings} ref={sliderRef}>
        {data.map((d, index) => (
          <div key={index}>
            <div className="flex flex-col items-center">
              <img
                src={d.scr}
                alt=""
                className="w-[50px] h-[50px] rounded-full relative top-5 left-8"
              />
              <div className="flex flex-col gap-[10px] items-center bg-white ml-[4rem] p-[20px] rounded-lg">
                <p className="text-[24px] font-[600] text-center">{d.name}</p>
                <p className="text-[16px] font-[400] text-center">
                  {d.comment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex gap-[10px] justify-center mt-[40px] mx-[10rem]">
        <div
          className="w-4 h-4 bg-primary-Selenia100 hover:bg-primary-Selenia10 rounded-full cursor-pointer"
          onClick={handlePrevSlide}
        ></div>
        <div
          className="w-4 h-4 bg-primary-Selenia100 hover:bg-primary-Selenia10 rounded-full cursor-pointer"
          onClick={handleNextSlide}
        ></div>
        <div
          className="w-4 h-4 bg-primary-Selenia100 hover:bg-primary-Selenia10 rounded-full cursor-pointer"
          onClick={handleNextSlide}
        ></div>
      </div>
    </div>
  );
};

export default Hometestimonial;
