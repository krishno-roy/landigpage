import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "Why not just hire a full-time design engineer?",
    answer:
      "Hiring a full-time design engineer can be costly and less flexible than using a project-based expert.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer:
      "There is no hard limit, but requests are handled based on priority and scope.",
  },
  {
    question: "How long will it take to build a full stack feature?",
    answer: "Typically it takes 1-2 weeks depending on complexity and scope.",
  },
  {
    question: "Who is the team?",
    answer:
      "A mix of senior designers, full-stack developers, and product managers.",
  },
  {
    question: "What if I want a different tech stack?",
    answer: "We’re flexible and can adapt to most modern stacks you prefer.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-16">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-3">
          Frequently <span className="text-[#f3c5ae]">asked</span>
        </h2>
        <h3
          className="text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f3c5ae] to-[#d89566] tracking-wider"
          style={{ fontFamily: "'DotGothic16', monospace" }}
        >
          questions.
        </h3>

        {/* FAQ Box */}
        <div className="rounded-md border border-gray-600 overflow-hidden bg-gradient-to-b from-black to-[#1a0a05] divide-y divide-gray-700">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="px-5 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">{item.question}</p>
                <FiChevronDown
                  className={`text-orange-400 text-2xl transform transition-transform duration-400 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`text-sm text-gray-300 mt-2 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
