import React from "react";
import packet from "../assets/Figure-1.png";
import Cabbage from "../assets/Figure-2.png";
import Tommato from "../assets/Figure-3.png";
import Dal from "../assets/Figure-4.png";
import berry from "../assets/Figure-5.png";
import Fruits from "../assets/Figure-6.png";
import Barger from "../assets/Figure-7.png";
import Amloki from "../assets/Figure-8.png";
import othrs from "../assets/Figure-9.png";
import Stoberee from "../assets/Figure-10.png";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";


const Hero = () => {
  const renderFruits = fruits.map((item) => {
    return (
      <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 ">
        <div className="h-15 w-15 flex justify-center items-center">
          
          <img src={item.img} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <span>{item.name}</span>
          <span>{item.item}</span>
        </div>
      </div>
    );
  });
  
  return (
    <section className="max-w-[1400px] mx-auto">
      <h1 className="text-xl font-semibold mt-10">Featured Categories</h1>
      <div className="flex items-center gap-2">
        <button className="p-3 text-2xl hover:bg-gray-300 transition">
        <MdOutlineChevronLeft />
      </button>
      <div>
        <div className="grid grid-cols-10 gap-2">{renderFruits}</div>
      </div>
      <button className="p-3 text-2xl hover:bg-gray-300 transition">
        <MdOutlineChevronRight />
      </button>
      </div>
    </section>
  );
};

export default Hero;

const fruits = [
  {
    id: 1,
    name: "Strawbery",
    img: Stoberee,
    item: 7,
  },
  {
    id: 2,
    name: "Custard Apple",
    img: othrs,
    item: 5,
  },
  {
    id: 3,
    name: "Organic Kiwi",
    img: Amloki,
    item: 3,
  },
  {
    id: 4,
    name: "Burgar",
    img: Barger,
    item: 8,
  },
  {
    id: 5,
    name: "Fruits",
    img: Fruits,
    item: 9,
  },
  {
    id: 6,
    name: "Berry",
    img: berry,
    item: 7,
  },
  {
    id: 7,
    name: "Dal",
    img: Dal,
    item: 9,
  },
  {
    id: 8,
    name: "Tommato",
    img: Tommato,
    item: 8,
  },
  {
    id: 9,
    name: "Cabbage",
    img: Cabbage,
    item: 6,
  },
  {
    id: 10,
    name: "packet",
    img: packet,
    item: 4,
  },
];
