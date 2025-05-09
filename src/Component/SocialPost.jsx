import React from 'react'
import Image from "../assets/krishno.png"
import { GrFormView } from 'react-icons/gr';
import { GiEternalLove } from 'react-icons/gi';
import { FaLink, FaRegComment } from 'react-icons/fa';


const SocialPostList = [
  {
    id: 1,
    image: Image,
    name: "Krishno roy",
    Replying: "arif hossing",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 2,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 3,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 4,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 5,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 6,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 7,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
  {
    id: 8,
    image: Image,
    name: "Arif Hossin",
    Replying: "arif hossin",
    comment: "Things got interesting ",
    date: "25 march 2025",
  },
];

const SocialPost = () => {
  return (
    <div className="w-6xl mx-auto container">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold">Join the Club</h2>
        
         
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {SocialPostList.map((postlist, id) => (
          <div key={postlist.id}>
            <div className="bg-black py-6 text-white p-3 rounded-xl">
              <div className="flex items-center space-x-3">
                <img
                  src={postlist.image}
                  alt=""
                  className="h-10 rounded-full"
                />
                <div>
                  <h2>{postlist.name}</h2>
                  <p className="text-sm">
                    @{postlist.name}
                    <button className="text-green-500 font-bold space-x-2 cursor-pointer hover:underline ">
                      Follow
                    </button>
                  </p>
                </div>
              </div>
              {/* comment area */}
              <div className="space-y-2 border-b pb-4 border-gray-30 ">
                <button className="cursor-pointer text-sm text-gray-500">
                  {" "}
                  Replying to{postlist.Replying}
                </button>
                <p className="text-xl font-bold">{postlist.comment}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500">{postlist.date}</p>
                  <GrFormView className="text-xl cursor-pointer hover:text-green-300" />
                </div>
              </div>
              {/* icon box */}
              <div className="pt-3 flex justify-between">
                <button className="flex items-center  gap-2 cursor-pointer">
                  <GiEternalLove className="text-red-500 text-xl" />2
                </button>
                <button className="flex items-center  gap-2 cursor-pointer hover:underline text-gray-300">
                  <FaRegComment className="text-green-400 text-xl " />
                  Replay
                </button>
                <button className="flex items-center  gap-2 cursor-pointer hover:underline text-gray-300">
                  <FaLink className="text-green-400 text-xl " />
                  Copy Link
                </button>
              </div>
              <button className="w-full border-2 border-gray-300 rounded-full text mt-5 py-2 text-green-500 hover:bg-gray-600/40 cursor-pointer">
                Read 2 reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialPost