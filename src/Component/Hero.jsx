import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroClay from "../assets/Hero-Clay.png";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white from-45% to-orange-700 flex items-center relative z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center relative z-50">
          <div>
            <h2 className="text-[200px] font-bold leading-40">Update your</h2>
          </div>
          <div>
            <h2 className="font-bold text-[200px]">brand</h2>
          </div>
        </div>

        {/* Only this line updated with ref */}
        <div className="absolute -mt-100 z-0">
          <img ref={imageRef} src={HeroClay} alt="" className="h-200"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
