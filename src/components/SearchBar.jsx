import React, { useContext, useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { ShopContext } from '../context/ShopContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const timerRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (location.pathname !== '/collection') {
        navigate('/collection');
      }
    }
  };

  const handleFocus = () => {
    navigate("/collection"); // Redirect immediately on click/focus
    resetTimer();
  };

  // Reset inactivity timer
  const resetTimer = () => {
    clearTimeout(timerRef.current);
    if (!search) {
      timerRef.current = setTimeout(() => {
        setShowSearch(false); // Hide search bar
      }, 5000); // 5 seconds
    }
  };

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timerRef.current);
  }, [search, showSearch]);

  return showSearch ? (
    <div
      className={`border border-gray-300 rounded-lg p-2 flex items-center justify-between mb-4 bg-white shadow-sm transition-all duration-500 ease-in-out ${
        showSearch ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <input
        type="text"
        className="flex-1 outline-none bg-inherit text-sm"
        placeholder="Search here..."
        value={search}
        onFocus={handleFocus}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {search && (
        <AiOutlineClose
          size={18}
          className="cursor-pointer text-gray-500 hover:text-black ml-2"
          onClick={() => setSearch("")}
        />
      )}
    </div>
  ) : null;
};

export default SearchBar;
