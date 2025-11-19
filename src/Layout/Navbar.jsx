import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../Pages/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <div className="w-11/12 mx-auto flex justify-between items-center mt-3 text-black">
        <div className="flex gap-3">
          <img src={Logo} alt="" />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-green-400">Nest</h1>
            <p className="text-gray-600 text-sm">Mart & Grocery</p>
          </div>
          <p className="flex justify-center items-center">
            <BsFire className="text-green-400" />
            Hot Deals
          </p>
        </div>

        <div className="flex gap-5 font-semibold">
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/megamenu">Mega Menu</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          {/* NOT LOGGED IN */}
          {!user && (
            <Link to="/login">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                Login
              </button>
            </Link>
          )}

          {/* LOGGED IN */}
          {user && (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar cursor-pointer">
                <div className="w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  {user.email[0].toUpperCase()}
                </div>
              </div>

              <ul className="dropdown-content bg-white p-3 shadow rounded-lg w-40 mt-2">
                <li className="text-center py-2 border-b">{user.email}</li>

                <li>
                  <button
                    onClick={logout}
                    className="w-full text-left text-red-600 mt-2"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
