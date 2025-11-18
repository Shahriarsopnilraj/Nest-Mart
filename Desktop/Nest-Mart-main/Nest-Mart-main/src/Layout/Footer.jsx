import React from "react";
import Logo from "../assets/logo.png";
import { FaAddressCard } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail, MdHeadphones } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import footer from '../assets/15.png'
import footer2 from '../assets/16.png'
import footer3 from '../assets/14.png'

const Footer = () => {
  return (
    <footer className="mt-20 flex  gap-5">
      <div className="text-black flex flex-col gap-3  py-10 px-10">
        <div className="flex text">
          <img src={Logo} alt="" />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-green-400">Nest</h1>
            <p className="text-gray-600 text-sm">Mart & Grocery</p>
          </div>
        </div>
        <p className="mt-5 text-xl">Awesome Grocerry Store Website template</p>
        <p className="flex items-center mt-5 gap-2">
          <IoLocationOutline className="text-green-400" />
          Address 18873 Shymoli, Ring Road Golden Street 2B Dhaka
        </p>

        <p className="flex items-center gap-2">
          <MdHeadphones className="text-green-400" />
          +8801318989245
        </p>

        <p className="flex items-center gap-2">
          <MdEmail className="text-green-400" />
          shahriarsopnilraj@gmail.com
        </p>

        <p className="flex items-center gap-2">
          <CiClock2 className="text-green-400" />
          Hours 10:00 -18:00, Monday-Saturday
        </p>
      </div>
      <div className="py-10 px-10 text-black flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Company</h1>
        <p>About us </p>
        <p>Delivery Information</p>
        <p>Privacy Policy</p>
        <p>Tarms & Conditioon</p>
        <p>Contuct us</p>
        <p>Support Center</p>
        <p>Carrer</p>
      </div>
      <div className="py-10 px-10 text-black flex flex-col gap-3"> 
        <h1 className="text-xl font-semibold">Account</h1>
        <p>Sign In </p>
        <p>View cart</p>
        <p>Track My Product</p>
        <p>Help Ticket</p>
        <p>My Wish List</p>
        <p>Shoping Products</p>
        <p>Compair Product</p>
      </div>
      <div className="py-10 px-10 text-black flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Corporate</h1>
        <p>Become a vendor</p>
        <p>Affilate Program</p>
        <p>Farm Business</p>
        <p>Farm Careers</p>
        <p>Our Supplies</p>
        <p>Accessibility</p>
        <p>Promotions</p>
      </div>
      <div className="py-10 px-10 text-black flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Popular</h1>
        <p>Milk & Flavoured Milk</p>
        <p>Butter and Margarine</p>
        <p>Eggs Substitutes</p>
        <p>Marmalades</p>
        <p>Sour Cream and Dips</p>
        <p>Tea & Kombucha</p>
        <p>Cheese</p>
      </div>
      <div className="py-10 px-10 text-black flex flex-col gap-3" >
        <h1 className="text-xl font-semibold">Install Apps</h1>
        <p className="text-gray-300">From App Store or Google Play</p>
        <div className="flex  items-center p-2 mt-5">
          <img src={footer2} alt="" />
        <img src={footer} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={footer3} alt=""  className="mt-3 text-xl"/>
      </div>
    </footer>
  );
};

export default Footer;
