import React from 'react';
import { Link } from 'react-router-dom';

const Buttonprops = (prop) => {
  return (
    <div>
      <Link>
        <button className='text-primary-Selenia md:text-[18px] text-[15px] font-[300] border border-primary-Selenia px-[2rem] py-[8px] rounded-xl'>{prop.text}</button>
      </Link>
    </div>
  );
};

export default Buttonprops;
