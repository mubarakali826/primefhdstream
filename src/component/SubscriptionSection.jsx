import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaTv, FaPlayCircle, FaCameraRetro } from 'react-icons/fa'; // Changed icons
import img from '../assets/pngegg.png';

function SubscriptionSection() {
  // States for counts
  const [channelCount, setChannelCount] = useState(0);
  const [showCount, setShowCount] = useState(0);
  const [movieCount, setMovieCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const sectionRef = useRef(null); // Reference for the section

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Effect to handle counting animation
  useEffect(() => {
    if (startCounting) {
      const targetCounts = {
        channels: 11000,
        shows: 14000,
        movies: 31000,
      };

      const duration = 3000; // Total animation time in ms
      const steps = 100; // Number of updates during the animation
      const incrementSpeed = duration / steps; // Time per step in ms
      const stepChannels = Math.ceil(targetCounts.channels / steps);
      const stepShows = Math.ceil(targetCounts.shows / steps);
      const stepMovies = Math.ceil(targetCounts.movies / steps);

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setChannelCount((prev) => Math.min(prev + stepChannels, targetCounts.channels));
        setShowCount((prev) => Math.min(prev + stepShows, targetCounts.shows));
        setMovieCount((prev) => Math.min(prev + stepMovies, targetCounts.movies));

        if (currentStep >= steps) {
          clearInterval(interval); // Stop the animation
        }
      }, incrementSpeed);
    }
  }, [startCounting]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-10 md:py-16 px-4 md:px-20 flex flex-col md:flex-row items-center space-x-[20%]"
    >
      {/* Text Content */}
      <div className="max-w-lg">
        <div className="flex items-center mb-4">
          <div className="animate-flapX delay-1000">
            <FaGlobe size={48} className="text-red-500 mr-2" />
          </div>
          <span className="text-lg font-semibold text-gray-800">WORLD’S #1</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          The Best IPTV Subscription Service Provider
        </h2>

        <p className="text-gray-700 mb-8">
          Revolutionize your TV experience with our 4K Live IPTV site. Explore a vast selection of global channels, including popular shows, live sports, movies, documentaries, and more. Elevate your entertainment with us.
        </p>

        {/* Statistics */}
        <div className="flex space-x-8">
          <div className="text-center">
            <div className="animate-flapX delay-1500">
              <FaTv size={48} className="text-red-500 mx-auto mb-2" />
            </div>
            <p className="text-lg font-bold text-gray-800">{channelCount.toLocaleString()}+ Channels</p>
          </div>
          <div className="text-center">
            <div className="animate-flapX delay-2000">
              <FaPlayCircle size={48} className="text-red-500 mx-auto mb-2" />
            </div>
            <p className="text-lg font-bold text-gray-800">{showCount.toLocaleString()}+ TV Shows</p>
          </div>
          <div className="text-center">
            <div className="animate-flapX delay-2500">
              <FaCameraRetro size={48} className="text-red-500 mx-auto mb-2" />
            </div>
            <p className="text-lg font-bold text-gray-800">{movieCount.toLocaleString()}+ Movies</p>
          </div>
        </div>
      </div>

      {/* TV Image with animation */}
      <div className="mt-5 md:mt-0 md:ml-10">
        <img src={img} alt="4K TV" className="w-full animate-upDown" />
      </div>
    </section>
  );
}

export default SubscriptionSection;
