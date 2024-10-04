import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="min-h-screen fixed w-[72px] lg:w-[256px] bg-white border-r-2 border-gray-200 flex flex-col py-6">
      <div className="mb-5 mt-2 px-4 lg:px-8">
        <img
          className="block lg:hidden"
          alt="Duolingo Icon"
          width={40}
          height={40}
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg"
        />
        <img
          className="hidden lg:block"
          alt="Duolingo Logo"
          width={128}
          height={30}
          src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
        />
      </div>

      <nav className="flex flex-col space-y-3 pl-2 lg:pl-4 pr-2 lg:pr-4 pt-2">
        <NavLink
          to="/learn"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
              isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg"
            alt="Learn Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">LEARN</span>
        </NavLink>

        <NavLink
          to="/sounds"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
              isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors duration-200'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/3b4928101472fce4e9edac920c1b3817.svg"
            alt="Sounds Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">SOUNDS</span>
        </NavLink>

        <NavLink
          to="/leaderboards"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
               isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors duration-200'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg"
            alt="Leaderboards Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">LEADERBOARDS</span>
        </NavLink>

        <NavLink
          to="/quests"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
               isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors duration-200'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg"
            alt="Quests Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">QUESTS</span>
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
               isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors duration-200'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg"
            alt="Shop Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">SHOP</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
               isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors duration-200'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg"
            alt="Profile Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">PROFILE</span>
        </NavLink>

        <NavLink
          to="/more"
          className={({ isActive }) =>
            `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
               isActive ? 'bg-[#DDF4FF] text-[#1CB0F6] border-[#85D8FF] border-2'  : 'text-[#777777] border-transparent border-2 hover:bg-gray-100 transition-colors duration-200'
            }  rounded-[12px] font-din-round`
          }
        >
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg"
            alt="More Icon"
            className="w-8 h-8"
          />
          <span className="hidden lg:inline-block text-[15px]">MORE</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
