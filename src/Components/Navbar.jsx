import { FaHome,  FaRegHeart, FaThLarge, FaSearch, } from "react-icons/fa";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="mx-auto mt-4 flex w-full max-w-7xl items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-3 shadow-lg">
      
      {/* Logo */}
          <div className="flex items-center  cursor-pointer ">
              <img src={logo} alt="Recipe Explorer Logo"
          className="h-12 w-25 object-contain"/>
        

        <h1 className="whitespace-nowrap text-xl font-bold  mr-3  text-black">
          Recipe <span className="text-orange-600">Explorer</span>
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-10">
        
        {/* Home */}
        <div className="flex gap-1 items-center font-bold text-black transition border-b-3 cursor-pointer border-transparent hover:border-orange-500 ">
          <FaHome />
          <span>Home</span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center rounded-lg border border-gray-300 px-3 py-2 w-xl bg-gray-100  focus-within:shadow shadow-gray-500">
          <FaSearch className="mr-2 text-gray-400" />

          <input
            type="text"
            placeholder="Search  recipes..."
                className="w-40 flex-1 outline-none "
                  />
                    <button className="ml-2 flex justify-end rounded-full bg-orange-600 px-5 py-1 text-sm font-medium text-white transition hover:bg-orange-700">
      Search
    </button>
        </div>

        {/* Categories */}
        <div className="flex gap-1 items-center font-bold text-black transition border-b-3 cursor-pointer border-transparent hover:border-orange-500">
          <FaThLarge />
          <span>Categories</span>
        </div>

        {/* Favorites */}
        <div className="flex gap-1 items-center font-bold text-black transition border-b-3 cursor-pointer border-transparent hover:border-orange-500">
          < FaRegHeart />
          <span>Favorites</span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;