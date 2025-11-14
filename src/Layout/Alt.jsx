import React from 'react';
import img1 from '../assets/alt.png';
import img2 from '../assets/alt_2.png';
import img3 from '../assets/alt_3.png'; // ✅ make sure this file exists
import { FaArrowRight } from 'react-icons/fa';

const Alt = () => {
  return (
    <section className="max-w-[1400px] bg-transparent mx-auto mt-20 px-5">
      <div className="flex gap-3">
        {/* Card 1 */}
        <div className="relative">
          <img src={img1} alt="" />
          <div className="absolute bottom-10 left-10">
            <p className="text-2xl text-gray-900 w-[200px]">
              Everyday Fresh & Clean With Our Products
            </p>
            <button className="mt-5 flex justify-center items-center font-semibold gap-2 p-2 bg-green-400 rounded-md text-white">
              Shop Now <span><FaArrowRight /></span>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <img src={img2} alt="" />
          <div className="absolute bottom-10 left-10">
            <p className="text-2xl text-gray-900 w-[200px]">
              Make Your BrekFast Healthy & Easy
            </p>
            <button className="mt-5 flex justify-center items-center font-semibold gap-2 p-2 bg-green-400 rounded-md text-white">
              Shop Now <span><FaArrowRight /></span>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <img src={img3} alt="" />
          <div className="absolute bottom-10 left-10">
            <p className="text-2xl text-gray-900 w-[200px]">
              The Best Organic Products Online
            </p>
            <button className="mt-5 flex justify-center items-center font-semibold gap-2 p-2 bg-green-400 rounded-md text-white">
              Shop Now <span><FaArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alt;
