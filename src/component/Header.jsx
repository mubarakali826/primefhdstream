import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
            <img src={logo} height={20} width={20} alt="" />
          </div>
        </div>

        {/* Menu Button for small screens */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links for large screens */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link to="/" className="hover:text-orange-500 transition duration-200">Home</Link>
          <a href="https://primehdstream.com/index.php?rp=/store/trials" className="hover:text-orange-500 transition duration-200">Free Trial</a>
          <Link to="/pricing" className="hover:text-orange-500 transition duration-200">Pricing</Link>
          <a href="https://primehdstream.com/index.php?rp=/knowledgebase/1/How-to-setup-our-Service-in-your-device" className="hover:text-orange-500 transition duration-200">Installation Guide</a>
          <a href="https://primehdstream.com/contact.php" className="hover:text-orange-500 transition duration-200">Contact Us</a>
          <a href="https://primehdstream.com/index.php?rp=/login" className="hover:text-orange-500 transition duration-200">Login</a>
          <a href="https://primehdstream.com/register.php" className="hover:text-orange-500 transition duration-200">Register</a>
        </div>
      </div>

      {/* Sidebar overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-10"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for small screens on the right */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out bg-white w-64 z-20`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4 text-gray-800 font-medium">
          <Link to="/" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Home</Link>
          <a href="https://primehdstream.com/index.php?rp=/store/trials" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Free Trial</a>

          <Link to="/pricing" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Pricing</Link>
          <a href="https://primehdstream.com/index.php?rp=/knowledgebase/1/How-to-setup-our-Service-in-your-device" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Installation Guide</a>
          <a href="https://primehdstream.com/contact.php" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Contact Us</a>
          <a href="https://primehdstream.com/index.php?rp=/login" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Login</a>
          <a href="https://primehdstream.com/register.php" className="hover:text-orange-500 transition duration-200" onClick={toggleSidebar}>Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
