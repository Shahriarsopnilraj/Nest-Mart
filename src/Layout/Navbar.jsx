import React from "react";
import Logo from "../assets/logo.png"

import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between items-center mt-3 text-black">
        <div className="flex gap-3">
            <img src={Logo} alt="" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-green-400">Nest</h1>
                <p className="text-gray-600 text-sm">Mart & Grocery</p>
            </div>
            <p className="flex justify-center items-center"><BsFire className="text-green-400" />Hot Deals</p>
        </div>
        
        <div className="flex gap-5 font-semibold">
            <Link to="/about">About</Link>
        <Link href="/shop">Shop</Link>
        <Link to="/megamenu">Mega Menu</Link>
        <Link href="/vendors">Vendors</Link>
        <Link to="/blog">Blog</Link>
        <Link href="/pages">Pages</Link>
        <Link to="/contact">Contact</Link>
        </div>
        <button className="py-2 px-2 rounded-md bg-green-500 text-white">Login</button>
      </div>
      
    </>
  );
};

export default Navbar;

