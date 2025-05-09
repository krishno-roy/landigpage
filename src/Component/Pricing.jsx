import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const plans = [
  {
    title: "standard",
    price: "$4999",
    period: "/m",
    description:
      "We build one feature request at a time. Pause or cancel anytime.",
    bg: "bg-gradient-to-b from-[#1a1a1a] to-black",
    buttonBg: "bg-orange-500",
  },
  {
    title: "goblin +",
    price: "$9999",
    period: "/m",
    description:
      "Goblin mode. In goblin mode we work faster than you can create a job posting.",
    bg: "bg-gradient-to-b from-[#ffa94d] to-[#ff5400]",
    buttonBg: "bg-black",
  },
];

const Pricing = () => {
  return (
    <div className=" bg-black text-white px-4 py-16 flex flex-col items-center justify-center mt-20 rounded-t-4xl">
      <h2 className="text-5xl font-bold mb-2">Memberships levels</h2>
      <p className="text-gray-300 mb-12 text-lg">
        Choose a plan that's right for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-[20px] p-6 flex flex-col justify-between ${plan.bg} text-white`}
          >
            <div>
              <p className="text-sm font-medium mb-1">{plan.title}</p>
              <div className="text-4xl font-extrabold">
                {plan.price}
                <span className="text-lg font-medium text-gray-400">
                  {plan.period}
                </span>
              </div>
              <p className="text-sm mt-3 text-gray-300">{plan.description}</p>
            </div>

            <button
              className={`mt-60 text-white font-bold text-sm rounded-[16px] px-4 py-2 flex items-center gap-2 ${plan.buttonBg}`}
            >
              start <FaArrowUpRightFromSquare size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
