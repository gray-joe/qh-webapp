import React from 'react';
import Link from 'next/link';
import {
  BsFillGrid3X3GapFill,
  BsGraphUp,
  BsGraphDown,
  BsFillGearFill,
  BsFillPersonLinesFill,
  BsList,
  BsRobot,
} from 'react-icons/bs';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-gray-950 border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-green-500 text-white p-3 rounded-lg inline-block">
              <BsList size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/dashboard">
            <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsFillGrid3X3GapFill size={20} />
            </div>
          </Link>
          <Link href="/quality">
            <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsGraphUp size={20} />
            </div>
          </Link>
          <Link href="/productivity">
            <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsGraphDown size={20} />
            </div>
          </Link>
          <Link href="/recommendations">
            <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsRobot size={20} />
            </div>
          </Link>
          <Link href="/profile">
            <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsFillPersonLinesFill size={20} />
            </div>
          </Link>
          <Link href="/settings">
            <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer my-4 p-3 rounded-lg inline-block">
              <BsFillGearFill size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
