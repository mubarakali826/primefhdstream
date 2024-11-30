import React from 'react';
import { FiShield, FiHeadphones, FiTv, FiServer } from 'react-icons/fi';

function FeatureCards() {
  const features = [
    {
      icon: <FiShield size={48} className="text-red-500" />,
      title: 'Secured',
      description: 'Our team assured your streaming is always safe and secure.',
    },
    {
      icon: <FiHeadphones size={48} className="text-red-500" />,
      title: 'Support',
      description: 'We are 24/7 available on Live Chat for our customer’s help to resolve their issues.',
    },
    {
      icon: <FiTv size={48} className="text-red-500" />,
      title: 'Channels',
      description: 'We provide Premium Channels from the UK, USA, Canada, & Other Countries.',
    },
    {
      icon: <FiServer size={48} className="text-red-500" />,
      title: '100% Uptime',
      description: 'You do not need to worry, we have more than 100 best stable servers.',
    },
  ];

  return (
    <section className="bg-transparent py-5 md:py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-200"
          >
            <div className="mb-4 flex justify-center">
              <div className="transition duration-200 hover:text-red-500 hover:bg-red-100 p-2 rounded-full">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards;
