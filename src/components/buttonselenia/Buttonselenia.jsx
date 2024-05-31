import React from 'react'
import { Link } from 'react-router-dom'

const Buttonselenia = (prop) => {
  return (
    <div>
        <Link>
           <button className='text-white md:text-[18px] text-[15px] font-[300] bg-primary-Selenia border border-primary-Selenia px-[3rem] py-[8px] rounded-xl'>{prop.text}</button>
        </Link>
    </div>
  )
}

export default Buttonselenia