import { FaHome, FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';

const NavbarHeader = () => {
  return (
    <div className="bg-black px-6 py-3 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center space-x-6">
        {/* Spotify Logo */}
        <img src="/path/to/logo.png" alt="Spotify Logo" className="w-10 h-10" />
        
        {/* Home Icon */}
        <FaHome className="text-white w-6 h-6 cursor-pointer" />
        
        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-800 text-white rounded-full w-96 h-10">
          <FiSearch className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-gray-800 text-white pl-10 w-full h-full placeholder-gray-400 rounded-full focus:outline-none"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-6">
        {/* Install App Button */}
        <button className="flex items-center space-x-2 text-white bg-gray-900 py-2 px-3 rounded-full hover:bg-gray-700 transition">
          <BsDownload className="w-5 h-5" />
          <span>Install App</span>
        </button>

        {/* Bell Icon */}
        <FaBell className="text-white w-6 h-6 cursor-pointer" />

        {/* User Avatar */}
        <img
          src="/path/to/profile.jpg"
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
        />
      </div>
    </div>
  );
};

export default NavbarHeader;
