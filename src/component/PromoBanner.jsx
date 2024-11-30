import React from "react";
import "./animate.css"; // Add this file for CSS animations

export const PromoBanner = () => {
  const handleNavigate = () => {
    window.location.href =
      "https://primehdstream.com/index.php?rp=/store/trials";
  };
  const handleNavigateToHome = () => {
    window.location.href = "https://primehdstream.com/index.php";
    
  };

  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex w-11/12 max-w-6xl overflow-hidden rounded-lg shadow-xl">
        {/* Left Side - Free Trial with Angled Edge */}
        <div className="relative w-1/2 p-8 text-white bg-gradient-to-r from-indigo-800 to-purple-800 flex items-center justify-center transform -skew-x-6 animate-slide">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(https://your-image-url-left.com)" }}
          ></div>
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase">
              Confused! Can't make a decision?
            </p>
            <h2 className="mt-2 text-4xl font-bold">Get Free Trial now!</h2>
            <button
              onClick={handleNavigate}
              className="px-6 py-2 mt-4 font-semibold text-purple-800 bg-white rounded-full hover:bg-gray-200"
            >
              Free Trial →
            </button>
          </div>
          {/* Decorative Left Edge */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-purple-800 to-indigo-800 transform skew-y-12"></div>
        </div>

        {/* Divider */}
        <div className="w-1 bg-white hidden md:block"></div>

        {/* Right Side - Tailored Plans with Angled Edge */}
        <div className="relative w-1/2 p-8 text-white bg-gradient-to-r from-purple-800 to-pink-800 flex items-center justify-center transform skew-x-6 animate-slide">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(https://your-image-url-right.com)" }}
          ></div>
          <div className="relative z-10 text-center">
            <p className="text-sm font-semibold uppercase">Join Us!</p>
            <h2 className="mt-2 text-4xl font-bold">
              Find plans tailored for you!
            </h2>
            <button
              onClick={handleNavigateToHome}
              className="px-6 py-2 mt-4 font-semibold text-pink-800 bg-white rounded-full hover:bg-gray-200"
            >
              Our Store →
            </button>
          </div>
          {/* Decorative Right Edge */}
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-b from-pink-800 to-purple-800 transform -skew-y-12"></div>
        </div>
      </div>
    </div>
  );
};


export default PromoBanner