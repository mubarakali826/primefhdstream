import React, { useState, useEffect, useRef } from 'react';
import { FaUsers } from 'react-icons/fa'; // New icon for Clients
import { HiOutlineServer } from 'react-icons/hi'; // New icon for Servers
import { FiUsers } from 'react-icons/fi'; // New icon for Team Members

import img5 from "../assets/1212.png";

function PremiumFeaturesSection() {
  const [clientsCount, setClientsCount] = useState(0);
  const [serversCount, setServersCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 }
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

  useEffect(() => {
    if (startCounting) {
      const targetCounts = {
        clients: 51000,
        servers: 100,
        team: 17,
      };

      const duration = 3000;
      const steps = 100;
      const incrementSpeed = duration / steps;
      const stepClients = Math.ceil(targetCounts.clients / steps);
      const stepServers = Math.ceil(targetCounts.servers / steps);
      const stepTeam = Math.ceil(targetCounts.team / steps);

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setClientsCount((prev) => Math.min(prev + stepClients, targetCounts.clients));
        setServersCount((prev) => Math.min(prev + stepServers, targetCounts.servers));
        setTeamCount((prev) => Math.min(prev + stepTeam, targetCounts.team));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, incrementSpeed);
    }
  }, [startCounting]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-5 md:py-16 px-4 md:px-20 flex flex-col md:flex-row items-center gap-[30%]"
    >
      {/* Image Collage */}
      <div className="mt-5 md:mt-0 md:ml-10">
        <img src={img5} alt="4K TV" className="w-full animate-upDown" />
      </div>
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <div className="flex items-center mb-4">
          <FaUsers size={48} className="text-red-500 animate-flapX mr-2" />
          <span className="text-lg font-semibold text-gray-800">PREMIUM FEATURES OF 4KLiveIPTV</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          Get a New Experience With 4KLive IPTV
        </h2>

        <p className="text-gray-700 mb-8">
          Our 4K Live IPTV service promises a fresh, immersive experience, delivering a seamless blend of quality, variety, and innovation. Explore a new era in streaming.
        </p>

        {/* Statistics */}
        <div className="flex space-x-8 justify-center md:justify-start">
          <div className="text-center">
            <FaUsers size={48} className="mx-auto mb-2 animate-flapX text-red-500" />
            <p className="text-lg font-bold text-gray-800">{clientsCount.toLocaleString()}+ CLIENTS</p>
          </div>
          <div className="text-center">
            <HiOutlineServer size={48} className="mx-auto mb-2 animate-flapX text-red-500" />
            <p className="text-lg font-bold text-gray-800">{serversCount}+ SERVERS</p>
          </div>
          <div className="text-center">
            <FiUsers size={48} className="mx-auto mb-2 animate-flapX text-red-500" />
            <p className="text-lg font-bold text-gray-800">{teamCount}+ TEAM MEMBERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PremiumFeaturesSection;
