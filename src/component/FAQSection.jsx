import React, { useState } from 'react';
import img1 from "../assets/6592321.jpg"
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: 'Can I Use My Subscription On Multiple Devices?',
      answer: 'Please note that one subscription can be used on multiple devices, but simultaneous streaming is limited to one device at a time.',
    },
    {
      question: 'How Soon Can I Start Using The Service?',
      answer: 'You can start using the service immediately after activation.',
    },
    {
      question: 'What Internet Quality Is Required?',
      answer: 'We recommend a stable internet connection with a minimum speed of 10 Mbps for HD streaming.',
    },
    {
      question: 'Can I Cancel My Subscription?',
      answer: 'Yes, you can cancel your subscription anytime from your account dashboard.',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center space-x-[20%]">
      {/* FAQ Text Section */}
      <div className="max-w-lg w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 border ${openIndex === index ? 'bg-red-50 border-red-500' : 'bg-gray-100 border-gray-300'} rounded-md`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`font-semibold ${openIndex === index ? 'text-red-600' : 'text-gray-800'}`}>
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <img src={img1} alt="FAQ illustration" className="w-full max-w-xs" />
      </div>
    </section>
  );
}

export default FAQSection;
