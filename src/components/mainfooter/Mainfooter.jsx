import React, {useEffect, Fragment } from 'react';
import Footer from '../footer/Footer';
import { FaInstagram } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Mainfooter = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  const List = (prop) => {
    return (
      <div>
        <h1 className="text-white text-[23px] font-[600] md:text-left text-center">
          {prop.title}
        </h1>
        <ul className="flex flex-col gap-[25px] mt-[15px]">
          <li className="lists">{prop.first}</li>
          <li className="lists">{prop.second}</li>
          <li className="lists">{prop.third}</li>
          <li className="lists">{prop.fourth}</li>
          <li className="lists">{prop.fifth}</li>
        </ul>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <div>
          <Footer />
        </div>

        <div className="bg-primary-Selenia90 flex md:flex-row flex-col justify-around px-[8vw] mt-[19vh] py-[10vh] bg-primary-AffilestateBlue110" data-aos="zoom-in-down" data-aos-duration ="2000">
          <div className="flex flex-col gap-[21vh]">
            <h1 className="md:text-[23px] text-[40px] text-primary-Selenia font-[700] md:text-left text-center">Selenia</h1>
            <div>
              <div className="flex sm:justify-center gap-[20px] mx-[auto]">
                <FaInstagram size={25} className="white" />
                <LuFacebook size={25} className="white" />
                <RiTwitterXLine size={25} className="white" />
                <FaLinkedin size={25} className="white" />
              </div>
              <p className="text-white mt-[20px] md:text-left text-center">Copyright 2023 blues.com</p>
            </div>
          </div>
          <div>
            <List
              title="COMPANY"
              first="Home"
              second="Features"
              third="About Us"
              fourth="Our Team"
            />
          </div>
          <div>
            <List
              title="SERVICES"
              first="Create wallet"
              second="Buy airtime"
              third="Deposit money"
              fourth="Bill payment"
              fifth ='Trade Crypto'
            />
          </div>
          <div>
            <List
              title="CONTACT"
              first="Contact Us"
              second="FAQs"
              third="Helpline"
              fourth=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mainfooter;
