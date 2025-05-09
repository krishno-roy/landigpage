import React from "react";
import { FaReact } from "react-icons/fa";
import BannerImg from "../assets/Clay-2.png";
import { SiLaravel, SiNextdotjs } from "react-icons/si";
import OurImg from "../assets/krishno.png";


const TimeMember = [
  {
    Image: OurImg,
    Title: "Just code in Vanilla Javascript",
    button: "Delusional",
  },
  {
    Image: OurImg,
    Title: "Just code in Vanilla Javascript",
    button: "Sensible",
  },
  {
    Image: OurImg,
    Title: "Just code in Vanilla Javascript",
    button: "Sensible",
  },
];


const OurService = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">Our Work Slaps</h2>
        <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          Rune offers design engineering as a service. This means we can solve
          your SaaS needs from design 👉 database. Bring the idea 💡 and watch
          as it comes to light.
        </p>
      </div>
      <div className="space-y-4">
        {/* first colam */}
        <div className="w-3xl flex gap-3 mx-auto">
          {/* first tab */}
          <div
            className="bg-cover bg-center h-70 w-70 p-4 rounded-xl"
            style={{ backgroundImage: `url(${BannerImg})` }}
          >
            <p className="text-xl font-bold">gpt app</p>
            <h2 className="font-bold text-4xl">development</h2>

            <FaReact className="mt-30 size-16" />
          </div>

          {/* secend tab */}
          <div className="bg-cover bg-center h-70 w-70 p-4 border rounded-2xl border-gray-200">
            <div className="flex text-center mx-auto gap-1 justify-center">
              <FaReact className=" size-10 h-30 w-15 border border-gray-200 p-1 " />
              <SiNextdotjs className=" size-10 h-30 w-15 border border-gray-200 p-1" />
              <SiLaravel className=" size-10 h-30 w-15 border border-gray-200 p-1" />
            </div>
            <div className="mt-10">
              <p className="text-xl font-bold">Premium Architecture</p>
              <h2 className="">
                Money can be tight, keep your cost low and scale to millions.
              </h2>
            </div>
          </div>
          {/* 3rd tab  */}
          <div className="bg-cover bg-center h-70 w-70 p-4 border rounded-2xl border-gray-200">
            <div className="bg-gradient-to-l from-orange-500 to bg-pink-600 h-30 w-full"></div>
            <div className="mt-8">
              <p className="text-xl font-bold">Premium Architecture</p>
              <h2 className="">
                Money can be tight, keep your cost low and scale to millions.
              </h2>
            </div>
          </div>
        </div>

        {/* 2nd coloum */}
        <div className="w-3xl flex gap-3 mx-auto">
          {/* 1st tab */}
          <div className="bg-cover bg-center h-70 w-130 p-4 border rounded-2xl border-gray-200">
            <div className="flex text-center mx-auto gap-1">
              {TimeMember.map((member, index) =>(
                <div key={index} className="border border-gray-200 p-2 h-45 space-y-2 ">
                    <img src={member.Image} alt="" className="h-15 mx-auto rounded-full mt-2 " />
                    <p className="text-sm">{member.Title}</p>
                    <button className="border py-1 px-4 rounded-full">{member.button}</button>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xl font-bold">Premium Architecture</p>
              <h2 className="">
                Money can be tight, keep your cost low and scale to millions.
              </h2>
            </div>
          </div>
          {/* 2rd tab  */}
          <div className="bg-cover bg-center h-70 w-70 p-4 border rounded-2xl border-gray-200 bg-black text-white">
            <div className="space-y-3">
              <div className="flex gap-3 items-center bg-gray-800/55 p-2 rounded-2xl">
                <img src={OurImg} alt="" className="h-10" />
                <div>
                  <p className="text-sm">
                    krishno roy Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center bg-gray-800/55 p-2 rounded-2xl">
                <div>
                  <p className="text-sm">
                    krishno roy Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
                <img src={OurImg} alt="" className="h-10" />
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xl font-bold">Premium Architecture</p>
              <h2 className="">
                Money can be tight, keep your cost low and scale to millions.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
