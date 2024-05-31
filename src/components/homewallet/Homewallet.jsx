import React from 'react';
import Wallet1 from '../../assets/images/homewallet/wallet1.png';
import Wallet2 from '../../assets/images/homewallet/wallet2.png';
import Wallet3 from '../../assets/images/homewallet/wallet3.png';
import Buttonselenia from '../buttonselenia/Buttonselenia';

const Homewallet = () => {
  return (
    <div className="flex flex-col gap-[5rem] pt-[5rem] px-[8rem]">
      <div className="flex gap-[40px]">
        <div className="flex flex-col gap-[30px] justify-center">
          <h1 className="text-[42px] text-white font-[600]">
            Your phone number is your wallet address
          </h1>
          <p className="text-[20px] text-white font-[300]">
            Create account on Selenia and have your phone number as your wallet
            address. Remember your wallet address easily
          </p>
          <Buttonselenia text="Get Selenia" />
        </div>
        <div>
          <img src={Wallet1} alt="" className="w-[700px] h-[700px]" />
        </div>
      </div>

      <div className="flex gap-[40px]">
        <div>
          <img src={Wallet2} alt="" className="w-[800px] h-[700px]" />
        </div>
        <div className="flex flex-col gap-[30px] justify-center">
          <h1 className="text-[42px] text-primary-Selenia font-[600]">
            Buy coins on selenia using various payment method
          </h1>
          <p className="text-[20px] text-white font-[400]">
            Deposit money (BTC, ETH and Stable coins) in your selenia account
          </p>
          <Buttonselenia text="Get Selenia" />
        </div>
      </div>
      
      <div className="flex gap-[40px]">
        <div className="flex flex-col gap-[30px] justify-center">
          <h1 className="text-[42px] text-white font-[600]">
            Buy airtime and pay bills with cryptocurrency
          </h1>
          <p className="text-[20px] text-white font-[400]">
            Buy airtime, data and pay utility bills connveniently using
            cryptocurrency
          </p>
          <Buttonselenia text="Get Selenia" />
        </div>
        <div>
          <img src={Wallet3} alt="" className="w-[800px] h-[700px]" />
        </div>
      </div>
    </div>
  );
};

export default Homewallet;
