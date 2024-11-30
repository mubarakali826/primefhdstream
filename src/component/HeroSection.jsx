import React, { useState, useEffect } from "react";
import heroImage1 from "../assets/99.png"; // First image
import heroImage2 from "../assets/122.png"; // Second image
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const navigate=useNavigate();
  const handleNavigate = () => {
    navigate("/pricing")
  };
  // Toggle content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstContent((prev) => !prev);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white relative py-20 px-4 md:px-20 flex items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Hero Content 1 */}
      <div
        className={`transition-opacity duration-1000 ${
          showFirstContent ? "opacity-100" : "opacity-0"
        } w-full max-w-5xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative`}
      >
        <div className="max-w-lg md:mr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 leading-tight">
            THE BEST INTERNATIONAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-500">
              IPTV
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-900 mt-4">
            SERVICE PROVIDER
          </p>
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <a
              href="https://primehdstream.com/index.php?rp=/store/trials"
              className="px-6 py-3 bg-purple-700 z-10 text-white font-medium rounded-md hover:bg-purple-800 transition duration-200 shadow-md"
            >
              Free Trial →
            </a>
            <a
              href="https://primehdstream.com/index.php?rp=/store/subscription"
              className="px-6 z-10 py-3 bg-indigo-900 text-white font-medium rounded-md hover:bg-indigo-800 transition duration-200 shadow-md"
            >
              Other Plans →
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center ">
          <img
            src={heroImage1}
            alt="Character watching TV"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Hero Content 2 */}
      <div
        className={`transition-opacity duration-1000 ${
          showFirstContent ? "opacity-0" : "opacity-100"
        } w-full max-w-5xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 absolute`}
      >
        <div className="max-w-lg md:mr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 leading-tight">
            EXPLORE OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-500">
              PREMIUM CHANNELS
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-900 mt-4">
            FOR ENDLESS ENTERTAINMENT
          </p>
          <div className="mt-8 flex space-x-4 justify-center md:justify-start">
            <a
              href="https://primehdstream.com/index.php"
              className="px-6 py-3 bg-purple-700 text-white font-medium rounded-md hover:bg-purple-800 transition duration-200 shadow-md"
            >
              Get Started →
            </a>
            <a
              onClick={handleNavigate}
              className="px-6 py-3 bg-indigo-900 text-white font-medium rounded-md hover:bg-indigo-800 transition duration-200 shadow-md"
            >
              Explore Plans →
            </a>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center max-w-xs md:max-w-sm">
          <img
            src={heroImage2}
            alt="Another character watching TV"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
