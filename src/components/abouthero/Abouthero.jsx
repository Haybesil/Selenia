import React, { Fragment } from 'react';
import './Abouthero.css';
import Group from '../../assets/images/abouthero/aboutgroupcoin.png';

const card = [
  {
    title: 'SEND AND RECIEVE CRYTOCURRENCIES',
    content:
      'With Selenia, users can easily send and receive cryptocurrency by simply using their mobile number linked to their wallet address. This eliminates the need for typing out long and complicated wallet addresses, making transactions quick and hassle-free.',
  },
  {
    title: 'SEND AND RECIEVE CRYTOCURRENCIES',
    content:
      'With Selenia, users can easily send and receive cryptocurrency by simply using their mobile number linked to their wallet address. This eliminates the need for typing out long and complicated wallet addresses, making transactions quick and hassle-free.',
  },
  {
    title: 'SEND AND RECIEVE CRYTOCURRENCIES',
    content:
      'With Selenia, users can easily send and receive cryptocurrency by simply using their mobile number linked to their wallet address. This eliminates the need for typing out long and complicated wallet addresses, making transactions quick and hassle-free.',
  },
  {
    title: 'SEND AND RECIEVE CRYTOCURRENCIES',
    content:
      'With Selenia, users can easily send and receive cryptocurrency by simply using their mobile number linked to their wallet address. This eliminates the need for typing out long and complicated wallet addresses, making transactions quick and hassle-free.',
  },
];

const Abouthero = () => {
  return (
    <Fragment>
      <div className="abouthero">
        <div className="flex gap-[30px] items-center px-[7vw] mt-[2rem] py-[3rem]">
          <div className="flex flex-col gap-[30px] w-[60%]">
            <h1 className="text-[54px] font-[600] text-white leading-[60px] ">
              Welcome to <span className="text-primary-Selenia">Selenia</span>,
              {''}The <span className="text-primary-Selenia">crypto</span>
              {''} bank for <span>Africans</span>
            </h1>

            <p className="text-[24px] text-white font-[300] leading-[40px]">
              At Selenia, we believe in empowering Africans to take control of
              their financial future by providing them with a platform to
              perform their normal banking transactions using cryptocurrency.
              Our mission is to make it easier and more accessible for people to
              manage their finances using the power of the blockchain.
            </p>
          </div>
          <div className="">
            <img src={Group} alt="" className="w-[90%] h-[90%]" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 px-[8vw]">
          {card.map((item, index) => (
            <div key={index} className="border py-[30px] px-[10px] rounded-lg">
              <h2 className="text-[24px] font-[600] text-white border-b-[3px]">
                {item.title}
              </h2>
              <p className="text-[16px] font-[400] text-white">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Abouthero;
