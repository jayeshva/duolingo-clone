import React, { useState, useEffect } from "react";

const languages = [
  { name: "English", flag: "🇺🇸" },
  { name: "Español", flag: "🇪🇸" },
  { name: "Français", flag: "🇫🇷" },
  { name: "Deutsch", flag: "🇩🇪" },
  { name: "Italiano", flag: "🇮🇹" },
  { name: "Português", flag: "🇧🇷" },
  { name: "Nederlands", flag: "🇳🇱" },
  { name: "Русский", flag: "🇷🇺" },
  { name: "Türkçe", flag: "🇹🇷" },
  { name: "中文", flag: "🇨🇳" },
  { name: "日本語", flag: "🇯🇵" },
  { name: "한국어", flag: "🇰🇷" },
];

function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showDropdown = () => {
    setDropdownOpen(true);
  };

  const hideDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className={`w-full p-4 z-[2] fixed bg-white top-0 transition-all duration-300 ${
        scrolled ? "border-b-2 border-gray-300" : "border-b-0"
      }`}
      style={{
        transition: `border-color 0.3s, transform 0.4s cubic-bezier(.22,1,.36,1)`,
      }}
    >
      <div className="container w-[988px] flex justify-between items-center mx-auto">
        <img
          src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
          alt="Duolingo Logo"
        />

        <div
          className="relative"
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-[#afafaf] bg-transparent font-din-round text-[15px] font-[700] leading-[17.25px] tracking-[0.8px] uppercase text-center">
              SITE LANGUAGE: ENGLISH
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              viewBox="0 0 24 24"
              color="#afafaf"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-[300px] bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul className="p-4 grid grid-cols-2 gap-2">
                {languages.map((lang, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className=" text-[#afafaf] font-din-round-light font-medium text-[15px]">
                      {lang.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
