import React, { useState, useEffect } from 'react';
import { Banner2 } from './Banner2';

function PricingPage2() {
  const [selectedConnections, setSelectedConnections] = useState(1); // State for selected connections
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.3;
      const element = document.getElementById('pricing-cards');
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pricing Plans with dynamic price and URL for each connection
  const plans = [
    {
      title: "1 Month",
      basePrice: 13.00,
      duration: "/ 1 Month",
      description: "Unlimited Entertainment: 30 Days of IPTV Bliss!",
      prices: {
        1: 13.00,
        2: 16.00,  
        3: 25.00,  
      },
      urls: {
        1: "https://primehdstream.com/index.php?rp=/store/subscription/1-month-subscription-one-connection",
        2: "https://primehdstream.com/index.php?rp=/store/subscription/1-month-subscription-two-connection",
        3: "https://primehdstream.com/index.php?rp=/store/subscription/1-month-subscription-three-connection",
      },
    },
    {
      title: "3 Months",
      basePrice: 25.00,
      duration: "/ 3 Months",
      description: "Stream Smarter: 90 Days of Premium IPTV Entertainment.",
      prices: {
        1: 25.00,
        2: 35.00,
        3: 40.00,
      },
      urls: {
        1: "https://primehdstream.com/index.php?rp=/store/subscription/3-month-subscription-one-connection",
        2: "https://primehdstream.com/index.php?rp=/store/subscription/3-month-subscription-two-connection",
        3: "https://primehdstream.com/index.php?rp=/store/subscription/3-month-subscription-three-connection",
      },
    },
    {
      title: "6 Months",
      basePrice: 45.00,
      duration: "/ 6 Months",
      description: "Endless Entertainment: 6 Months of Premium IPTV.",
      prices: {
        1: 45.00,
        2: 48.00,
        3: 59.99,
      },
      urls: {
        1: "https://primehdstream.com/index.php?rp=/store/subscription/6-month-subscription-one-connection",
        2: "https://primehdstream.com/index.php?rp=/store/subscription/6-month-subscription-two-connection",
        3: "https://primehdstream.com/index.php?rp=/store/subscription/6-month-subscription-three-connection",
      },
    },
    {
      title: "1 Year",
      basePrice: 50.00,
      duration: "/ 1 Year",
      description: "365 Days of Uninterrupted IPTV Entertainment.",
      prices: {
        1: 50.00,
        2: 70.00,
        3: 95.00,
      },
      urls: {
        1: "https://primehdstream.com/index.php?rp=/store/subscription/12-month-subscription-one-connection",
        2: "https://primehdstream.com/index.php?rp=/store/subscription/12-month-subscription-two-connection",
        3: "https://primehdstream.com/index.php?rp=/store/subscription/12-month-subscription-three-connection",
      },
    },
  ];

  const features = [
    "+16000 Live Channels",
    "+60000 Movies & VOD",
    "SD / HD / FHD*",
    "UK / USA / IE / ASIAN",
    "Plus More Countries",
    "EPL / EFL / UFC / 3pm KOs",
    "ALL PPV & More",
    "All Devices are supported",
    "Anti Freeze System",
    "24/7 Live Chat Support",
  ];

  return (
    <section className="bg-transparent md:py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-900">Choose your plan</h2>
      </div>

      {/* Connection Selection Buttons */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {[1, 2, 3].map((connection) => (
          <button
            key={connection}
            className={`px-4 py-2 font-semibold rounded-full ${selectedConnections === connection ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"} transition duration-200`}
            onClick={() => setSelectedConnections(connection)}
          >
            {connection} Connection{connection > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div id="pricing-cards" className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 text-center transform transition duration-500 ${isVisible ? "animate-fadeInLeft" : "opacity-0"}`}
          >
            <h3 className="text-xl font-semibold text-indigo-900">{plan.title}</h3>
            <p className="text-3xl font-bold text-red-600">
              £{plan.prices[selectedConnections]}{" "}
              <span className="text-lg font-normal text-gray-500">
                {plan.duration}
              </span>
            </p>
            <p className="text-gray-700 mt-2">{plan.description}</p>
            <hr className="my-4 border-gray-300" />
            <ul className="text-left space-y-2 text-gray-700 font-medium">
              <li>✔ {selectedConnections} Device{selectedConnections > 1 ? "s" : ""} Connection</li>
              {features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
            <a href={plan.urls[selectedConnections]}>
              <button className="mt-6 px-6 py-3 bg-indigo-900 text-white font-semibold rounded-md hover:bg-indigo-800 transition duration-200">
                ORDER NOW
              </button>
            </a>
          </div>
        ))}
      </div>
      <Banner2 />
    </section>
  );
}

export default PricingPage2;
