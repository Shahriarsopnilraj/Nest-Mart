import React from "react";
import { CiLocationOn } from "react-icons/ci";
import imgfrom from '../../assets/460.png'
import Banner from "../../Layout/Banner"

const Contact = () => {
  return (
    <section className="w-8/12 mx-auto">
      <h1 className="text-2xl text-green-500 mt-10">How can help you?</h1>

      <div className="grid grid-cols-3 gap-4 space-x-4">
        <div className="space-y-4 ">
          <p className="text-4xl font-semibold text-black">
            Let us know How We can help you?
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut
            officia, aliquam eligendi at iste a nam, cupiditate asperiores
            beatae ipsam assumenda, ab velit inventore.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            consectetur commodi totam deserunt incidunt at repellendus
            dignissimos necessitatibus numquam repellat. Libero fugit soluta
            totam? Eaque?
          </p>
        </div>
        <div className="grid grid-cols-2 col-span-2 space-x-3 space-y-3">
          <div>
            <h1 className="text-black text-2xl">01. Visite Facebook</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto soluta dolore ratione ullam rerum, accusantium, aperiam
              at, qui minus minima assumenda ducimus aspernatur mollitia
              accusamus.
            </p>
          </div>
          <div>
            <h1 className="text-black text-2xl">02. Employ Services</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto soluta dolore ratione ullam rerum, accusantium, aperiam
              at, qui minus minima assumenda ducimus aspernatur mollitia
              accusamus.
            </p>
          </div>
          <div>
            <h1 className="text-black text-2xl">03. Building Inquires</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto soluta dolore ratione ullam rerum, accusantium, aperiam
              at, qui minus minima assumenda ducimus aspernatur mollitia
              accusamus.
            </p>
          </div>
          <div>
            <h1 className="text-black text-2xl">04. General Inquaries</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto soluta dolore ratione ullam rerum, accusantium, aperiam
              at, qui minus minima assumenda ducimus aspernatur mollitia
              accusamus.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <div className="">
          <h1 className="text-green-400 text-xl font-semibold">Office</h1>
          <div className="mt-5 text-base text-gray-500">
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p className="pb-5">Email: contact@Evara.com</p>
          </div>
          <button className="space-x-5 p-3 text-base text-white bg-green-400 flex rounded-md items-center gap-5">
            <CiLocationOn />
            View Map
          </button>
        </div>
        <div className="">
          <h1 className="text-green-400 text-xl font-semibold">Studio</h1>
          <div className="mt-5 text-base text-gray-500">
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p className="pb-5">Email: contact@Evara.com</p>
          </div>
          <button className="space-x-5 p-3 text-base text-white bg-green-400 flex rounded-md items-center gap-5">
            <CiLocationOn />
            View Map
          </button>
        </div>
        <div className="">
          <h1 className="text-green-400 text-xl font-semibold">Shop</h1>
          <div className="mt-5 text-base text-gray-500">
            <p>205 North Michigan Avenue, Suite 810</p>
            <p>Chicago, 60601, USA</p>
            <p>Phone: (123) 456-7890</p>
            <p className="pb-5">Email: contact@Evara.com</p>
          </div>
          <button className="space-x-5 p-3 text-base text-white bg-green-400 flex rounded-md items-center gap-5">
            <CiLocationOn />
            View Map
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5  text-black mt-20">
        <div className="space-y-5">
          <p className="text-xl text-green-400">Contact From</p>
          <p className="text-4xl font-semibold">Drop Us a Line</p>
          <p className="text-gray-500">
            Your email address will not be published. Requierd files are mark
          </p>
          <form className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md px-4 py-10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-600 text-white px-6 py-4 rounded-md cursor-pointer hover:bg-blue-900 transition duration-200"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="text-center ">
          <img src={imgfrom} alt="" className="mt-20" />
        </div>
      </div>
      <div className="mt-20">
        <Banner></Banner>
      </div>
    </section>
  );
};

export default Contact;
