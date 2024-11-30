import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#0b1d36] text-white py-10 w-[100%] ">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4  gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
           <img src={logo}width={20} height={20} alt="" />
          </div>
          <p className="text-sm leading-relaxed">
            Our 4K Live IPTV service promises a fresh, immersive experience, delivering a seamless blend of quality, variety, and innovation.
          </p>
        </div>
        
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/reseller" className="hover:text-blue-500">Become A Reseller</a></li>
            <li><a href="/installation" className="hover:text-blue-500">Installation Guide</a></li>
            <li><a href="/support" className="hover:text-blue-500">Customer Support</a></li>
            <li><a href="/affiliate" className="hover:text-blue-500">Affiliate Program</a></li>
            <li><a href="/pricing" className="hover:text-blue-500">Plans & Pricing</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>primehdstream@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <i className="fas fa-phone-alt"></i>
              <span>+447366436874</span>
            </li>
          </ul>
        </div>
        
        {/* Goals */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Goals</h3>
          <p className="text-sm leading-relaxed">
            Our Goal Providing You with the Best Service, Ensuring an Unmatched Viewing Experience.
          </p>
        </div>
        
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-600 pt-4">
        &copy; 2024 4KLive IPTV. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
