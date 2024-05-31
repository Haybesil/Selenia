import { React, useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="pt-[2rem]">
      <nav className="flex justify-around items-center">
        <h1 className="text-[24px] font-[700] text-primary-Selenia">Selenia</h1>

        <ul className="lg:flex hidden md:hidden sm:hidden gap-[40px] border py-[15px] px-[30px] border-[#00FFA3] rounded-full bg-[#212D21]">
          <li>
            <Link to="/" className="lists">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="lists">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact" className="lists">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="lists">
              About Us
            </Link>
          </li>
        </ul>

        <ol className="lg:flex hidden md:hidden sm:hidden gap-[30px]">
          <li>
            <Link
              to="/signin"
              className="text-[16px] font-[500] text-primary-Selenia border rounded-2xl border-primary-Selenia py-[10px] px-[30px] hover:bg-primary-Selenia hover:text-white"
            >
              Get Selenia
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-[16px] font-[500] text-primary-Selenia border rounded-2xl border-primary-Selenia py-[10px] px-[50px] hover:bg-primary-Selenia hover:text-white"
            >
              Log in
            </Link>
          </li>
        </ol>

        <RiMenu3Line
          size={50}
          className="menu lg:hidden md:block text-primary-Selenia"
          onClick={toggle}
        />

{showModal && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-primary-Selenia100 bg-opacity-90 z-50">
  <div className="bg-primary-Selenia100 p-8 rounded-lg sm:w-full md:w-full h-[15%] absolute top-[1px] flex flex-col gap-[2rem] justify-center items-center">
    <ul className="flex flex-col gap-[1.5rem] text-center">
      <li>
        <Link to="/" className="text-primary-Selenia text-[24px] font-[600] hover:text-primary-Selenia">Home</Link>
      </li>
      <li>
        <Link to="/about" className="text-primary-Selenia text-[24px] font-[600] hover:text-primary-Selenia">Features</Link>
      </li>
      <li>
        <Link to="/property" className="text-primary-Selenia text-[24px] font-[600] hover:text-primary-Selenia">Contact Us</Link>
      </li>
      <li>
        <Link to="/contact" className="text-primary-Selenia text-[24px] font-[600] hover:text-primary-Selenia">About Us</Link>
      </li>
    </ul>
    <ol className="flex flex-col gap-[1.5rem] items-center">
      <li>
        <Link to="/signin" className="text-primary-Selenia text-[24px] font-[400] border border-primary-Selenia rounded-md px-4 py-2 hover:bg-primary-Selenia hover:text-white">Get Selenia</Link>
      </li>
      <li>
        <Link to="/signup" className="text-primary-Selenia text-[24px] font-[400] border border-primary-Selenia rounded-md px-4 py-2 hover:bg-primary-Selenia hover:text-white">Log In</Link>
      </li>
    </ol>
    <IoClose
      size="40"
      color="primary-Selenia"
      onClick={closeModal}
      className="absolute top-4 right-4 cursor-pointer"
    />
  </div>
</div>










)}


      </nav>
    </div>
  );
};

export default Navbar;
