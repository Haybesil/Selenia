import {React, useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Btccoin from '../../assets/images/homeherocard/btc.png';
import Ethcoin from '../../assets/images/homeherocard/eth.png';
import Usdtcoin from '../../assets/images/homeherocard/usdt.png';
import Btccoin2 from '../../assets/images/homeherocard/btc2.png';
import Btc from '../../assets/images/homeherocard/btccurve.png';
import Eth from '../../assets/images/homeherocard/ethcurve.png';
import Usdt from '../../assets/images/homeherocard/usdtcurve.png';

const coin = [
  {
    coinSrc: Btccoin,
    curveSrc: Btc,
    name: 'BTC',
    inc: '0.02%',
    price: '$16 832,33',
    val: '$323,73 B',
  },
  {
    coinSrc: Ethcoin,
    curveSrc: Eth,
    name: 'ETH',
    inc: '0.08%',
    price: '$16 832,33',
    val: '$323,73 B',
  },
  {
    coinSrc: Usdtcoin,
    curveSrc: Usdt,
    name: 'USDT',
    inc: '0.02%',
    price: '$16 832,33',
    val: '$323,73 B',
  },
  {
    coinSrc: Btccoin2,
    curveSrc: Btc,
    name: 'BTC',
    inc: '0.02%',
    price: '$16 832,33',
    val: '$323,73 B',
  },
];

const Homeherocard = () => {

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
  }

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  }

  return (
    <div className="mx-[10rem] pt-[5rem]">
      <Slider {...settings} ref={sliderRef}>
        {coin.map((d, index) => (
          <div key={index} className="px-2 pt-3">
            <div
              className="border border-primary-Selenia rounded-xl py-[2rem] px-4"
              style={{ maxWidth: '300px' }}
            >
              <div className="flex justify-between border-b border-primary-Selenia pb-[10px]">
                <div className="flex items-center gap-2 mb-2">
                  <img src={d.coinSrc} alt="" className="w-8 h-8" />
                  <p className="text-white text-lg font-medium">{d.name}</p>
                </div>
                <p
                  className={`flex items-center text-[14px] font-[400] rounded-3xl px-[13px] py-[1px] ${
                    index === 1
                      ? 'bg-red-900 text-red-400'
                      : 'bg-[#188a576b] text-primary-Selenia'
                  }`}
                >
                  {d.inc}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-lg text-white font-semibold">{d.price}</p>
                  <p className="text-sm text-white font-normal">{d.val}</p>
                </div>
                <img src={d.curveSrc} alt="" className="w-16" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex gap-[10px] justify-center mt-[40px] mx-[10rem]">
        <div
          className="w-4 h-4 bg-black hover:bg-primary-Selenia10 rounded-full cursor-pointer"
          onClick={handlePrevSlide}
        ></div>
        <div
          className="w-4 h-4 bg-black hover:bg-primary-Selenia10 rounded-full cursor-pointer"
          onClick={handleNextSlide}
        ></div>
      </div>
    </div>
  );
};

export default Homeherocard;
