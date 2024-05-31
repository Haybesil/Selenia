import React from 'react';
import Coin1 from '../../assets/images/homehero/coin1.png';
import Coin2 from '../../assets/images/homehero/coin2.png';
import Coin3 from '../../assets/images/homehero/coin3.png';
import Coin4 from '../../assets/images/homehero/coin4.png';
import Coin5 from '../../assets/images/homehero/coin5.png';
import Coin6 from '../../assets/images/homehero/coin6.png';
import Btcmob from '../../assets/images/homehero/mobile/Btcmob.png'
import Btccmob from '../../assets/images/homehero/mobile/Btccmob.png'
import Usdtmob from '../../assets/images/homehero/mobile/Usdtmob.png'
import Btcc from '../../assets/images/homehero/mobile/Btcc.png'
import Ethmob from '../../assets/images/homehero/mobile/Ethmob.png'
import Buttonselenia from '../buttonselenia/Buttonselenia';
import Buttonprops from '../buttonprops/Buttonprops';

const Homehero = () => {
  return (
    <>
      <div className='pt-[3rem]'>
        <div className="flex flex-col gap-[2rem] pt-[5rem]">
          <h1 className="md:text-[67px] text-[26px] text-white text-center font-[600] md:leading-[67px] md:px-[16rem] px-[2rem]">
            Join the future of{' '}
            <span className="text-primary-Selenia">finance,</span> Use{' '}
            <span className="text-primary-Selenia">cryptocurrency</span> today.
          </h1>

          <p className='md:text-[24px] text-[22px] text-white text-center font-[300] md:leading-[40px] leading-[32px] md:px-[14rem] w-[100%] p-[10px]'>
            We believe in the power of decentralized digital currencies to
            change the world for the better. Our platform offers a fast, secure,
            and user-friendly way to buy, sell, and store a variety of popular
            cryptocurrencies
          </p>
        </div>

        <div className='hidden md:block relative'>
            <img src={Coin1} alt="" className='absolute bottom-[14rem] left-[12rem]' />
            <img src={Coin2} alt="" className='absolute bottom-[-4rem] left-[15rem]' />
            <img src={Coin3} alt="" className='absolute bottom-[17rem] right-[39rem]' />
            <img src={Coin4} alt="" className='absolute bottom-[-1rem] right-[22rem]' />
            <img src={Coin5} alt="" className='absolute bottom-[-7rem] right-[14rem]' />
            <img src={Coin6} alt="" className='absolute bottom-[15rem] right-[11rem]' />
        </div>

        <div className='block md:hidden relative'>
            <img src={Btcmob} alt="" className='absolute bottom-[19rem] left-[5px]' />
            <img src={Ethmob} alt="" className='absolute -top-[10px] right-0' />
            <img src={Usdtmob} alt="" className='absolute bottom-[-1rem] right-[22rem]' />
            <img src={Btcc} alt="" className='absolute bottom-[20rem] right-[11rem]' />
            <img src={Btccmob} alt="" className='absolute bottom-[19rem] left-[20rem]' />
        </div>

        <div class="flex md:gap-[4rem] gap-[20px] justify-center pt-[4rem]">
            <Buttonselenia text='Get Selenia'/>
            <Buttonprops text='Learn More'/>
        </div>
      </div>
    </>
  );
};

export default Homehero;
