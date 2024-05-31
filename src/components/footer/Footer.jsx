import React from 'react';

const Footer = () => {
  return (
    <div className='pt-[6rem]'>
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[40px] text-white font-[600] text-center">
          Get More updates
        </h1>
        <p className="text-[20px] mx-[27rem] text-white font-[300] text-center">
          Join our mailing list for regular updates about our new features and
          releases
        </p>
        <div className="relative flex justify-center">
          <input
            type="text"
            placeholder="Email address"
            className="py-[10px] pl-[7px] w-[40%] rounded"
          />
          <input
            type="button"
            value="Subscribe"
            className="absolute right-[21rem]  text-[15px] text-white font-[300] bg-primary-Selenia py-[10.5px] px-[2rem] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
