import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Banner from "../assets/Clay-2.png";
import Banner2 from "../assets/img-1.png";

const WorkSlap = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    // Get width for scrolling
    const row1Width = row1Ref.current.scrollWidth / 2;
    const row2Width = row2Ref.current.scrollWidth / 2;

    // Row 1: Scroll left to right
    gsap.to(row1Ref.current, {
      x: `-${row1Width}px`, // Scroll left
      duration: 20, // Faster scroll
      ease: "linear",
      repeat: -1,
    });

    // Row 2: Scroll left to right, just like Row 1
    gsap.to(row2Ref.current, {
      x: `-${row2Width}px`, // Scroll left (same as row1)
      duration: 20, // Faster scroll
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const images = [Banner, Banner2, Banner, Banner2, Banner];

  return (
    <div className="relative overflow-hidden bg-white py-20">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-7xl font-bold">Our Work Slaps</h2>
        <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          Rune offers design engineering as a service. This means we can solve
          your SaaS needs from design 👉 database. Bring the idea 💡 and watch
          as it comes to light.
        </p>
      </div>

      <div className="space-y-3 -rotate-5">
        {/* Row 1: Scroll left to right */}
        <div className="flex gap-5 w-full" ref={row1Ref}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              className="h-48 md:h-80 object-cover rounded-2xl border-8"
              alt=""
            />
          ))}
        </div>

        {/* Row 2: Scroll left to right, just like Row 1 */}
        <div className="flex gap-5 w-full" ref={row2Ref}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              className="h-48 md:h-80 object-cover rounded-2xl border-8 "
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSlap;
