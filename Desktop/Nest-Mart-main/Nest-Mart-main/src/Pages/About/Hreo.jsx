import React from "react";
import cooking from "../../assets/about_left.png";
import about1 from "../../assets/about-1.png";
import about2 from "../../assets/about-2.png";
import about3 from "../../assets/about-3.png";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import icon4 from "../../assets/icon-4.png";
import icon5 from "../../assets/icon-5.png";
import icon6 from "../../assets/icon-6.png";
import about5 from "../../assets/about-5.png";
import Main from "../../assets/Main.png";
import Main1 from "../../assets/Main-1.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Banner from '../../Layout/Banner'

const Hreo = () => {
  return (
    <section className="mt-20">
      <div className=" w-8/12 mx-auto py-10 px-10">
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          <img src={cooking} alt="" />
          <div className="mt-10">
            <h1 className="text-black text-3xl">Welcome to Nest</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              aspernatur unde error quia, laudantium eius ex illum dolores ab
              libero perspiciatis magni eligendi omnis possimus veritatis porro
              voluptatem! Autem, blanditiis, tenetur porro laborum soluta odit
              voluptatibus debitis eaque nesciunt perferendis at incidunt
              maiores placeat voluptatem{" "}
            </p>
            <p className="text-base mt-5">
              facilis quos ipsa nostrum quibusdam delectus ab repellendus?
              Dolores, doloribus necessitatibus? Numquam labore reprehenderit
              dolorum veniam, porro voluptatibus aut ratione. Molestias facilis
              a odit iste accusamus. Quae eveniet molestias ullam earum
              consequuntur ipsam ab saepe cumque, odio, fugiat illum placeat
              veritatis atque rem inventore vero repudiandae hic adi
            </p>
            <div className="grid grid-cols-3 gap-2 py-5">
              <img src={about1} alt="" />
              <img src={about2} alt="" />
              <img src={about3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl text-bold text-black flex justify-center items-center ">
          What We Provide
        </h1>
        <div className="grid grid-cols-3 gap-5 mt-20">
          <div className="flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md">
            <img src={icon1} alt="" />
            <h1 className="text-xl text-black">Best Price & Offers</h1>
            <p className="text-gray-500 text-base text-center">
              There are many varities of passengers Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis officia esse ea, ipsum{" "}
            </p>
            <button className="text-green-400">Read more</button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md">
            <img src={icon2} alt="" />
            <h1 className="text-xl text-black">Wide Assorment</h1>
            <p className="text-gray-500 text-base text-center">
              There are many varities of passengers Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis officia esse ea, ipsum{" "}
            </p>
            <button className="text-green-400">Read more</button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md">
            <img src={icon3} alt="" />
            <h1 className="text-xl text-black">Free Delivery</h1>
            <p className="text-gray-500 text-base text-center">
              There are many varities of passengers Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis officia esse ea, ipsum{" "}
            </p>
            <button className="text-green-400">Read more</button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md">
            <img src={icon4} alt="" />
            <h1 className="text-xl text-black">Easy Returns</h1>
            <p className="text-gray-500 text-base text-center">
              There are many varities of passengers Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis officia esse ea, ipsum{" "}
            </p>
            <button className="text-green-400">Read more</button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md">
            <img src={icon5} alt="" />
            <h1 className="text-xl text-black">100% Satisfacation</h1>
            <p className="text-gray-500 text-base text-center">
              There are many varities of passengers Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis officia esse ea, ipsum{" "}
            </p>
            <button className="text-green-400">Read more</button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 shadow p-4 rounded-md">
            <img src={icon6} alt="" />
            <h1 className="text-xl text-black">Great Daily Deal</h1>
            <p className="text-gray-500 text-base text-center">
              There are many varities of passengers Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corporis officia esse ea, ipsum{" "}
            </p>
            <button className="text-green-400">Read more</button>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto">
        <div className="grid grid-cols-2 gap-6 pt-5 pb-5 items-center mt-5">
          <img src={about5} alt="" />
          <div className="space-y-8">
            <p className="text-gray-400 text-2xl">Our performance</p>
            <p className="text-black text-7xl font-bold">
              Your Partner for e- commerce grocery solution
            </p>
            <p className="text-gray-400 text-base">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className="text-gray-400 text-base">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 space-y-6">
          <div className="space-y-5">
            <p className="text-black text-2xl font-bold">Who we are</p>
            <p className="text-gray-400">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
              enim ut tellus eros donec ac odio orci ultrices in. ellus eros
              donec ac odio orci ultrices in.
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-black text-2xl font-bold">Our History </p>
            <p className="text-gray-400">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
              enim ut tellus eros donec ac odio orci ultrices in. ellus eros
              donec ac odio orci ultrices in.
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-black text-2xl font-bold">Our Mission</p>
            <p className="text-gray-400 text-wrap">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis
              enim ut tellus eros donec ac odio orci ultrices in. ellus eros
              donec ac odio orci ultrices in.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-5 py-5 text-center">
        <p className="text-4xl font-bold text-black">Our Team</p>
      </div>
      <div className="grid grid-cols-2 gap-2 w-8/12 mx-auto mt-10">
        <div className="space-y-5">
          <p className="text-green-300 font-semibold">Our Team</p>
          <p className="text-7xl text-black"> Meet Our Expert Team</p>
          <p className="text-base text-gray-400 ">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <p className="text-base text-gray-400 ">
            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa
            dolor imperdiet neccon sequata congue idsem. Maecenas malesuada
            faucibus finibus.
          </p>
          <button className="text-xl text-white p-3 bg-green-400 rounded-md  ">View All Members</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <div className="relative">
                <img src={Main} alt="" />
                <div className="absolute top-65 left-1/2 -translate-x-1/2 w-65">
                    <div  className="bg-white p-15 py-6 rounded-lg text-center w-full space-y-2 shadow-md ">
                    <p className="text-black font-bold text-base  w-full">H. Maandia</p>
                    <p className="text-gray-400 text-base">CEO & Co-Founder</p>
                    < p className="text-green-400 flex gap-5 text-center text-base">
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaYoutube/>
                        <FaFacebook/>
                    </p>
                </div>
                </div>
            </div> 
            <div className="relative">
                <img src={Main1} alt="" />
                <div className="absolute top-65 left-1/2 -translate-x-1/2 w-65">
                    <div  className="bg-white p-15 py-6 rounded-lg text-center w-full space-y-2 shadow-md ">
                    <p className="text-black font-bold text-base  w-full">Dilan Specter</p>
                    <p className="text-gray-400 text-base">Head Enginner</p>
                    < p className="text-green-400 flex gap-5 text-center text-base">
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaYoutube/>
                        <FaFacebook/>
                    </p>
                </div>
                </div>
            </div> 
        </div>
      </div>
      <div className="mt-20">
          <Banner></Banner>
        </div>
    </section>
  );
};

export default Hreo;
